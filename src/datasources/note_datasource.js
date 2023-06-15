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

const fetchActiveNotes = () => {
  const url = `${BASE_URL}/notes`;
  const options = {
    method: "GET",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

const fetchArchivedNotes = () => {
  const url = `${BASE_URL}/notes/archived`;
  const options = {
    method: "GET",
    headers: headersWithToken,
  };
  return fetchApi(url, options);
};

const fetchNote = (id) => {
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
  fetchActiveNotes,
  fetchArchivedNotes,
  fetchNote,
  archiveNote,
  unArchiveNote,
  deleteNote,
};
