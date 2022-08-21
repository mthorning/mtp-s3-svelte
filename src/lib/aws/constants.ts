import { AWS_BUCKET_NAME, AWS_CLOUDFRONT_URL, AWS_IDENTITY_POOL_ID } from '$env/static/private';

export const region = 'us-east-1'
export const s3BucketPrefix = 'photos/';
export const s3BucketName =  AWS_BUCKET_NAME;
export const imageHandlerUrl = AWS_CLOUDFRONT_URL
export const identityPoolId = AWS_IDENTITY_POOL_ID

