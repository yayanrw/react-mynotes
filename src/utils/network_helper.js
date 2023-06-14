import { ApplicationException, ServerException } from "./exceptions";
import { getToken } from "../datasource/local_storage_datasource";

const fetchApi = async (url, options) => {
  const response = await fetch(url, options);
  const jsonResponse = await response.json();

  if (response.ok) {
    return jsonResponse;
  }

  if (response.status >= 400 && response.status <= 499) {
    throw new ApplicationException(jsonResponse.message);
  }

  throw new ServerException(jsonResponse.message);
};

const defaultHeaders = {
  "Content-Type": "application/json",
};

const headersWithToken = {
  ...defaultHeaders,
  Authorization: `Bearer ${getToken()}`,
};

export { fetchApi, defaultHeaders, headersWithToken };