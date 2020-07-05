import cookie from "js-cookie";

// Redirect on server side
export const redirectServerSide = (context) => {
  if (context.req.headers.cookie) {
    const token = getCookie("token", context.req);
    if (token) {
      context.res.statusCode = 302;
      context.res.setHeader("Location", `/`);
    }
  }
};

// set the cookie
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 60,
      path: "/",
    });
  }
};

// remove the cookie
export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

// Check if the cookie exists on client side or server side and get it
export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

// Get the cookie from client side
export const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

// Get the cookie on server side
const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split("=")[1];
};
