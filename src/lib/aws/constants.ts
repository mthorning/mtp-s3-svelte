import { AWS_BUCKET_NAME, AWS_CLOUDFRONT_URL, AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY_ID, } from '$env/static/private';

export const s3BucketPrefix = 'photos/';
export const s3BucketName =  AWS_BUCKET_NAME;
export const accessKeyId =  AWS_ACCESS_KEY_ID
export const secretAccessKey = AWS_SECRET_ACCESS_KEY
export const imageHandlerUrl = AWS_CLOUDFRONT_URL
