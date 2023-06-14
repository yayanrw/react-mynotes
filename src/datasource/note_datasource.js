import { BASE_URL } from "../utils/constants";
import { fetchApi, headersWithToken } from "../utils/network_helper";

const insertNote = ({ title, body }) => {
  const url = `${BASE_URL}/notes`;
  const options = {
    method: "POST",
    headers: headersWithToken,
    body: JSON.stringify({ title, body }),
  };
  return fetchApi(url, options);
};

const getActiveNotes = () => {
  const url = `${BASE_URL}/notes`;
  const options = {
    method: "GET",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

const getArchivedNotes = () => {
  const url = `${BASE_URL}/notes/archived`;
  const options = {
    method: "GET",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

const getNote = (id) => {
  const url = `${BASE_URL}/notes/${id}`;
  const options = {
    method: "GET",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

const archiveNote = (id) => {
  const url = `${BASE_URL}/notes/${id}/archive`;
  const options = {
    method: "POST",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

const unArchiveNote = (id) => {
  const url = `${BASE_URL}/notes/${id}/unarchive`;
  const options = {
    method: "POST",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

const deleteNote = (id) => {
  const url = `${BASE_URL}/notes/${id}`;
  const options = {
    method: "DELETE",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

export {
  insertNote,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  archiveNote,
  unArchiveNote,
  deleteNote,
};
