import { MAIN_API } from "./constants";

const headers = {
  "Accept": "application/json",
  "Content-Type": "application/json",
};

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const register = (name, email, password) => {
  return fetch(`${MAIN_API}signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => {
    return getResponse(res);
  });
};

export const authorize = (email, password) => {
  return fetch(`${MAIN_API}signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export const getContent = (token) => {
  return fetch(`${MAIN_API}users/me`, {
    method: "GET",
    headers: {
      headers,
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return getResponse(res);
  });
};