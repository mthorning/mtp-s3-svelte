import type { ServerLoadEvent } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

type Cookies = {
  idToken?: string;
};

export async function load(event: ServerLoadEvent) {
  const { request: { headers }, locals } = event
  const cookies: Cookies = (headers.get('cookie') ?? '')
    .split(';')
    .reduce((acc: Cookies, cookieStr: string) => {
      const [key, val] = cookieStr.split('=');
      if (!key) return acc;
      return { ...acc, [key]: val };
    }, {});

  const { idToken } = cookies;
  if (!idToken) {
    throw redirect(
      307,
      'https://mattthorningphotography.auth.us-east-1.amazoncognito.com/login?client_id=um32c9sdfqikjc9ct2oe5a2bj&response_type=token&scope=openid&redirect_uri=http://localhost:5173/auth'
    );
  }

  locals.idToken = idToken
}
