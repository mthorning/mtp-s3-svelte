import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { getFilename, listObjects } from '$lib/aws/s3';
import { getImageUrl } from '$lib/aws/image-handler';

interface Photo {
  thumbUrl: string;
  filename: string;
  size?: number;
  lastModified?: Date;
}

export async function load({ locals }: ServerLoadEvent) {
  try {
    const objects = await listObjects(locals?.idToken);
    const photos = objects?.Contents?.reduce<Photo[]>((acc, curr) => {
      // Split the filename from the prefix because one
      // of these entries is the containing folder only
      // which we want to ignore
      const filename = getFilename(curr);
      if (filename) {
        const thumbUrl = getImageUrl(filename, {
          resize: {
            width: 50,
            height: 50,
            fit: 'cover',
          },
        });
        const photo: Photo = {
          thumbUrl,
          filename,
          size: curr.Size,
          lastModified: curr.LastModified,
        };
        return [...acc, photo];
      }
      return acc;
    }, []);

    return { photos };
  } catch (err) {
    console.error(err);

    throw error(500, (err as Error).message);
  }
}
