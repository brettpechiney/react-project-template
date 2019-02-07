/**
 * Retrieves the user's authentication token from the sessionStorage property of the
 * window object.
 *
 * @returns {string}
 */
function getAuthToken() {
  const storageKey = 'auth-token';

  // Grab the jwt from the query string with value 't'
  const reg = new RegExp('[?&]t=([^&#]*)', 'i');
  const string = reg.exec(window.location.search);
  let jwt = string ? string[1] : null;
  if (jwt) {
    window.sessionStorage.setItem(storageKey, jwt);
  } else {
    jwt = window.sessionStorage.getItem(storageKey);
  }

  return jwt;
}

export default getAuthToken;
