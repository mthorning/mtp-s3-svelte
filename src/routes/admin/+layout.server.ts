import type { ServerLoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { domain, region, appClientId } from '$lib/aws/constants';
import { getCookies } from '$lib/utils';

export async function load(event: ServerLoadEvent) {
  const {
    request: { headers },
    url: { origin },
    locals,
  } = event;
  const cookies = getCookies(headers.get('cookie'));

  const { idToken } = cookies;
  if (!idToken) {
    throw redirect(
      307,
      `https://${domain}.auth.${region}.amazoncognito.com/login?client_id=${appClientId}&response_type=token&scope=openid&redirect_uri=${origin}/auth`
    );
  }

  locals.idToken = idToken;
}
