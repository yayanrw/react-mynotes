import {
  LOCALIZATION_KEY,
  THEME_KEY,
  TOKEN_KEY,
  USER_KEY,
} from "../utils/constants";

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const getTheme = () => {
  return localStorage.getItem(THEME_KEY);
};

const setTheme = (theme) => {
  localStorage.setItem(THEME_KEY, theme);
};

const getLocalization = () => {
  return localStorage.getItem(LOCALIZATION_KEY);
};

const setLocalization = (localization) => {
  localStorage.setItem(LOCALIZATION_KEY, localization);
};

const getUser = () => {
  return JSON.parse(localStorage.getItem(USER_KEY));
};

const setUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem(USER_KEY);
};

export {
  getToken,
  setToken,
  removeToken,
  getTheme,
  setTheme,
  getLocalization,
  setLocalization,
  getUser,
  setUser,
  removeUser,
};
