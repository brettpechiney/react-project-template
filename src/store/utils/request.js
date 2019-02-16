async function request(url, method, body) {
  const { apiUrl = 'http://localhost:8080' } = window.variables;
  // Make sure this handles CSRF.
  const res = await fetch(`${apiUrl}/${url}`, {
    method,
    mode: 'cors',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: method !== 'GET' ? JSON.stringify(body) : null,
  });
  return await parseStatus(res.status, res.json());
}

function parseStatus(status, res) {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then(response => resolve(response));
    } else {
      res.then(response => reject(new Error(response.statusText)));
    }
  });
}

export default request;
export { parseStatus };
