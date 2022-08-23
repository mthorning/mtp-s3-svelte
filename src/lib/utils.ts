type Cookies = {
  idToken?: string;
};

export function getCookies(cookiesStr: string | undefined | null): Cookies {
  if (!cookiesStr) return {};
  return cookiesStr.split(';').reduce((acc: Cookies, cookieStr: string) => {
    const [key, val] = cookieStr.split('=');
    if (!key) return acc;
    return { ...acc, [key]: val };
  }, {});
}
