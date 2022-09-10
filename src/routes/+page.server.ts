import { error } from '@sveltejs/kit';
import { getFilename, listObjects } from '$lib/aws/s3';
import { getImageUrl } from '$lib/aws/image-handler';
import resizeObjects from '$lib/imageUrlResizeObjects';

interface Photo {
  thumbUrl: string;
  fullsizeUrl: string;
  filename: string;
}

export async function load() {
  try {
    const objects = await listObjects();

    const photos = objects?.Contents?.reduce<Photo[]>((acc, curr) => {
      // Split the filename from the prefix because one
      // of these entries is the containing folder only
      // which we want to ignore
      const filename = getFilename(curr);
      if (filename) {
        const thumbUrl = getImageUrl(filename, resizeObjects.thumbnail);

        const fullsizeUrl = getImageUrl(filename, resizeObjects.fullsize);

        return [...acc, { fullsizeUrl, thumbUrl, filename }];
      }
      return acc;
    }, []);

    return { photos };
  } catch (err) {
    console.error(err);

    throw error(500, (err as Error).message);
  }
}
