/**
 * Please refer to the terms of the license agreement in the root of the project
 *
 * (c) 2024 Feedzai
 */

/**
 * Given a cookie key `name`, returns the value of the cookie
 * or `null`, if the key is not found.
 */
export function getCookie(name: string): string | null {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((ckie) => ckie.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null
  );
}

/**
 * This function takes four parameters:
 *
 * - `name`: The name of the cookie.
 * - `value`: The value to be stored in the cookie.
 * - `days`: The number of days until the cookie expires.
 * - `path`: The path upon which the cookie will be stored.
 *
 * It calculates the expiration date of the cookie using the days parameter
 * and sets the cookie using the document.cookie property.
 *
 * Note that this function assumes that the cookie will be stored at the root path (path=/).
 * If you need to store the cookie at a different path, you can modify the path parameter
 */
export function setCookie(name: string, value: string, days: number, path = "/"): void {
  const CURRENT_DATE = new Date();
  CURRENT_DATE.setTime(CURRENT_DATE.getTime() + days * 24 * 60 * 60 * 1000);
  const EXPIRATION_DATE = CURRENT_DATE.toUTCString();

  const NEW_COOKIE = `${name}=${encodeURIComponent(value)};expires=${EXPIRATION_DATE};path=${path}`;
  document.cookie = NEW_COOKIE;
}

/**
 * This function takes two parameters:
 * - `name`: The name of the cookie to be deleted.
 * - `path`: The path upon which the cookie will be stored.
 *
 * The function sets the expiration date of the cookie to a date in the past, which effectively deletes the cookie.
 *
 * Note that this function assumes that the cookie was stored at the root path (path=/).
 * If the cookie was stored at a different path, you should modify the path parameter in the cookie string.
 */
export function deleteCookie(name: string, path = "/"): void {
  const EXPIRATION_DATE = "Thu, 01 Jan 1970 00:00:00 UTC";
  const NULLED_COOKIE = `${name}=;expires=${EXPIRATION_DATE};path=${path};`;

  document.cookie = NULLED_COOKIE;
}
