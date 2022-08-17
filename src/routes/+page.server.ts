import { error } from '@sveltejs/kit';
import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { AWS_SECRET_ACCESS_KEY, AWS_ACCESS_KEY_ID } from '$env/static/private';

export async function load() {
  const client = new S3Client({
    region: 'us-east-1',
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
  });
  const command = new ListObjectsV2Command({
    Bucket: 'arn:aws:s3:us-east-1:025044823111:accesspoint/mtp'
  });
  try {
    const results = await client.send(command);
    console.log(results);
    return results;
  } catch (err) {
    console.error(err);

    throw error(500, (err as Error).message);
  }
}
