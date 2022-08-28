import { e as error } from "../../chunks/index2.js";
import { l as listObjects, g as getFilename, a as getImageUrl } from "../../chunks/image-handler.js";
import "@aws-sdk/client-s3";
import "@aws-sdk/credential-providers";
import "../../chunks/constants.js";
import "Buffer";
async function load() {
  var _a;
  try {
    const objects = await listObjects();
    const photos = (_a = objects == null ? void 0 : objects.Contents) == null ? void 0 : _a.reduce((acc, curr) => {
      const filename = getFilename(curr);
      if (filename) {
        const thumbUrl = getImageUrl(filename, {
          resize: {
            width: 250,
            height: 250,
            fit: "cover"
          }
        });
        const fullsizeUrl = getImageUrl(filename, {
          resize: {
            width: 1200,
            height: 1200,
            fit: "inside"
          }
        });
        return [...acc, { fullsizeUrl, thumbUrl, filename }];
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
