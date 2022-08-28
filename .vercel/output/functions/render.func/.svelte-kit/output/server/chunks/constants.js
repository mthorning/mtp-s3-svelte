const AWS_BUCKET_NAME = "mattthorningphotography";
const AWS_CLOUDFRONT_URL = "https://d4ur7h7wkwoxv.cloudfront.net/";
const AWS_IDENTITY_POOL_ID = "us-east-1:ba2d2490-283f-4c24-beeb-b74ff223e79a";
const AWS_APP_CLIENT_ID = "um32c9sdfqikjc9ct2oe5a2bj";
const region = "us-east-1";
const domain = "mattthorningphotography";
const s3BucketPrefix = "photos/";
const s3BucketName = AWS_BUCKET_NAME;
const imageHandlerUrl = AWS_CLOUDFRONT_URL;
const identityPoolId = AWS_IDENTITY_POOL_ID;
const appClientId = AWS_APP_CLIENT_ID;
export {
  appClientId as a,
  s3BucketPrefix as b,
  imageHandlerUrl as c,
  domain as d,
  identityPoolId as i,
  region as r,
  s3BucketName as s
};
