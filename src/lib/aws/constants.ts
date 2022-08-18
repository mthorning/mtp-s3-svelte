import { AWS_BUCKET_NAME, AWS_CLOUDFRONT_URL, AWS_SECRET, AWS_KEY, } from '$env/static/private';

export const s3BucketPrefix = 'photos/';
export const s3BucketName =  AWS_BUCKET_NAME;
export const accessKeyId =  AWS_KEY
export const secretAccessKey = AWS_SECRET
export const imageHandlerUrl = AWS_CLOUDFRONT_URL
