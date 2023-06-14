import { BASE_URL } from "./MyConstants";
import { defaultHeaders, fetchApi, headersWithToken } from "../utils/network_helper";

const fetchLogin = async ({ email, password }) => {
  const url = `${BASE_URL}/login`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  return fetchApi(url, options);
};

const fetchRegister = async ({ name, email, password }) => {
  const url = `${BASE_URL}/register`;
  const options = {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify({ name, email, password }),
  };

  return fetchApi(url, options);
};

const fetchLoggedUser = async () => {
    const url = `${BASE_URL}/users/me`;
    const options = {
      method: "GET",
      headers: headersWithToken,
    };
    return fetchApi(url, options);
}

export { fetchLogin, fetchRegister, fetchLoggedUser };
