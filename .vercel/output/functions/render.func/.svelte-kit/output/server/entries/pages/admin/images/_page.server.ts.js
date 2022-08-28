import { e as error } from "../../../../chunks/index2.js";
import { l as listObjects, g as getFilename, a as getImageUrl } from "../../../../chunks/image-handler.js";
import "@aws-sdk/client-s3";
import "@aws-sdk/credential-providers";
import "../../../../chunks/constants.js";
import "Buffer";
async function load({ locals }) {
  var _a;
  try {
    const objects = await listObjects(locals == null ? void 0 : locals.idToken);
    const photos = (_a = objects == null ? void 0 : objects.Contents) == null ? void 0 : _a.reduce((acc, curr) => {
      const filename = getFilename(curr);
      if (filename) {
        const thumbUrl = getImageUrl(filename, {
          resize: {
            width: 50,
            height: 50,
            fit: "cover"
          }
        });
        const photo = {
          thumbUrl,
          filename,
          size: curr.Size,
          lastModified: curr.LastModified
        };
        return [...acc, photo];
      }
      return acc;
    }, []);
    return { photos };
  } catch (err) {
    console.error(err);
    throw error(500, err.message);
  }
}
export {
  load
};
