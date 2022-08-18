import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import type { _Object } from '@aws-sdk/client-s3';
import type { ListObjectsV2CommandOutput } from '@aws-sdk/client-s3';
import { s3BucketName, s3BucketPrefix, accessKeyId, secretAccessKey } from './constants';

let client: S3Client;

function getS3Client(): S3Client {
  if (!!client) return client;

  return new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export function listObjects(): Promise<ListObjectsV2CommandOutput> {
  const client = getS3Client();
  const command = new ListObjectsV2Command({
    Bucket: s3BucketName,
    Prefix: s3BucketPrefix,
  });
  return client.send(command);
}

export function getFilename(obj: _Object): string | undefined {
  return obj?.Key?.replace(s3BucketPrefix, '');
}
