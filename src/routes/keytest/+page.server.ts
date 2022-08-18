import { secretAccessKey, accessKeyId } from '$lib/aws/constants';

export async function load() {
  return { secretAccessKey, accessKeyId };
}
