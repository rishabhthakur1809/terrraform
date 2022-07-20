/* eslint-disable no-restricted-globals */
import Api from '../components/common/Api';

export const userService = {
  login,
  logout,
  userDetail,
  getUser,
  getToken,
  getUserEmail,
  getRole,
};

function logout(email) {
  // remove user from local storage to log user out
  // localStorage.removeItem('user');
  const user = this.getUser();
  let userData = window.atob(user.authdata)
  userData = JSON.parse(userData);
  // console.log(user)
  const requestOptions = {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${user.access_token}`, 
    }),
    body: JSON.stringify({ email: userData.username }),
  };
  fetch(`${Api.logout}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      document.cookie = 'espUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      window.location.href = '/login';
      return user;
    });
}

function userDetail(email) {
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  };
  fetch(`${Api.userDetail}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      document.cookie = 'espUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      return user;
    });
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function getUser() {
  return JSON.parse(getCookie('espUser'));
}

function getUserEmail() {
  const user = getUser();
  let userData = window.atob(user.authdata)
  userData = JSON.parse(userData).username;
  return userData;
}

function getToken() {
  return getUser().access_token;
}

function getRole() {
  return getUser().role;
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function login(username, password) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password}),
  };

  return fetch(`${Api.login}`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      // login successful if there's a user in the response
      if (user.success) {
        const usr = user;
        const date = new Date();
        date.setDate(date.getDate() + 1);
        
        // store user details and basic auth credentials in cookie
        // to keep user logged in between page refreshes
        usr.authdata = JSON.stringify({username, password});
        usr.authdata = window.btoa(`${usr.authdata}`);
        console.log(window.atob(usr.authdata));
        document.cookie = `espUser=${JSON.stringify(usr)}; expires=${date}`;
        
        // localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}
