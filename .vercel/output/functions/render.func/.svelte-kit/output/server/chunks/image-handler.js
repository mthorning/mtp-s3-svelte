import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { s as s3BucketName, b as s3BucketPrefix, r as region, i as identityPoolId, c as imageHandlerUrl } from "./constants.js";
import { Buffer } from "Buffer";
function getS3Client(token) {
  return new S3Client({
    region,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region },
      identityPoolId,
      ...token ? {
        logins: {
          [`cognito-idp.${region}.amazonaws.com/us-east-1_pA7PzQG2L`]: token
        }
      } : {}
    })
  });
}
function listObjects(token) {
  const client = getS3Client(token);
  const command = new ListObjectsV2Command({
    Bucket: s3BucketName,
    Prefix: s3BucketPrefix,
    Delimiter: "/"
  });
  return client.send(command);
}
function getFilename(obj) {
  var _a;
  return (_a = obj == null ? void 0 : obj.Key) == null ? void 0 : _a.replace(s3BucketPrefix, "");
}
function getImageUrl(filename, edits = {}) {
  const request = {
    bucket: s3BucketName,
    key: `${s3BucketPrefix}${filename}`,
    edits
  };
  const str = JSON.stringify(request);
  const enc = Buffer.from(str).toString("base64");
  return `${imageHandlerUrl}${enc}`;
}
export {
  getImageUrl as a,
  getFilename as g,
  listObjects as l
};
