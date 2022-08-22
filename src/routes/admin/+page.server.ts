import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { listObjects } from '$lib/aws/s3';

export async function load({ locals }: ServerLoadEvent) {
  try {
    return await listObjects(locals?.idToken);
  } catch (err) {
    console.error(err);

    throw error(500, (err as Error).message);
  }
}
