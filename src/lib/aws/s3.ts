import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import type { _Object } from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import type { ListObjectsV2CommandOutput } from '@aws-sdk/client-s3';
import { s3BucketName, s3BucketPrefix, identityPoolId, region } from './constants';

let client: S3Client;

function getS3Client(token?: string): S3Client {
  if (!!client) return client;

  return new S3Client({
    region,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region }, // Configure the underlying CognitoIdentityClient.
      identityPoolId,
      ...(token
        ? {
            logins: {
              [`cognito-idp.${region}.amazonaws.com/us-east-1_pA7PzQG2L`]: token,
            },
          }
        : {}),
    }),
  });
}

export function listObjects(token?: string): Promise<ListObjectsV2CommandOutput> {
  const client = getS3Client(token);
  const command = new ListObjectsV2Command({
    Bucket: s3BucketName,
    Prefix: s3BucketPrefix,
  });
  return client.send(command);
}

export function getFilename(obj: _Object): string | undefined {
  return obj?.Key?.replace(s3BucketPrefix, '');
}
