import { r as redirect } from "../../../chunks/index2.js";
import { d as domain, r as region, a as appClientId } from "../../../chunks/constants.js";
function getCookies(cookiesStr) {
  if (!cookiesStr)
    return {};
  return cookiesStr.split(";").reduce((acc, cookieStr) => {
    const [key, val] = cookieStr.split("=");
    if (!key)
      return acc;
    return { ...acc, [key]: val };
  }, {});
}
async function load(event) {
  const {
    request: { headers },
    url: { origin },
    locals
  } = event;
  const cookies = getCookies(headers.get("cookie"));
  const { idToken } = cookies;
  if (!idToken) {
    throw redirect(
      307,
      `https://${domain}.auth.${region}.amazoncognito.com/login?client_id=${appClientId}&response_type=token&scope=openid&redirect_uri=${origin}/auth`
    );
  }
  locals.idToken = idToken;
}
export {
  load
};
