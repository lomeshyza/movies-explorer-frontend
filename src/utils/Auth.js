export const baseUrl = "https://api.starts.movies.nomoredomains.xyz";
//export const baseUrl = "http://localhost:3000";

function handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    console.log(`name: ${ baseUrl }/signup`);
    return Promise.reject(`Ошибка: ${res.status}`);
  }
//signup
export function register(name, email, password) {
  console.log(`${ baseUrl }/signup`)
  console.log(`name: ${ baseUrl }/signup`);
  return fetch(`${ baseUrl }/signup`, {
    method: "POST",
    headers: {'Accept': 'application/json',
    'Content-Type': 'application/json',},
    body: JSON.stringify({name, email, password}),
  }).then(handleResponse);
}

//signin
export function login( email, password ) {
  console.log(`name: ${ baseUrl }/signup`);
  return fetch(`${ baseUrl }/signin`, {
    method: "POST",
    headers:{'Accept': 'application/json',
    'Content-Type': 'application/json',
  },  
    body: JSON.stringify({email, password}),
  }).then(handleResponse);
}
export function checkToken(jwt) {
  return fetch(`${ baseUrl }/users/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${jwt}`},
    }).then(handleResponse);
}

