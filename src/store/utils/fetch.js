/**
 * @fileoverview Defines an abstracted method for handling HTTP requests.
 */
import axios from 'axios';

/**
 * Sends an HTTP/S network request.
 * @param   {string} url     The server URL that will be used for the request
 * @param   {string} method  The HTTP request method to be used when making the request
 * @param   {string} body    The data to be sent as the request body
 *
 * @returns {Promise}
 */
function request(url, method, data) {
  const { apiUrl = 'http://localhost:8080' } = window.variables;
  return axios.request({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    baseURL: `${apiUrl}/`,
    url,
    method,
    data,
  });
}

export default request;
