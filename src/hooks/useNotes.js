import { useEffect, useState } from "react";
import useErrorNetworkHandler from "./useErrorNetworkHandler";
import {
  archiveNote,
  deleteNote,
  fetchActiveNotes,
  fetchArchivedNotes,
  fetchNote,
  insertNote,
  unArchiveNote,
} from "../datasources/note_datasource";
import useLocalization from "./useLocalization";
import { swalSuccess } from "../utils/swal_helper";
import { useSearchParams } from "react-router-dom";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [note, setNote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [searchParams] = useSearchParams();

  const { handleApiError } = useErrorNetworkHandler();

  const localizationSwal = useLocalization("swal");

  useEffect(() => {
    if (searchParams.get("keyword") === null) {
      setFilteredNotes(notes);
    } else {
      const filter = notes.filter((note) =>
        note.title
          .toLowerCase()
          .includes(searchParams.get("keyword")?.toLowerCase())
      );
      setFilteredNotes(filter);
    }
  }, [searchParams, notes]);

  const handleGetActiveNotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchActiveNotes();
      setIsLoading(false);
      setNotes(data);
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
    }
  };

  const handleGetArchivedNotes = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchArchivedNotes();
      setIsLoading(false);
      setNotes(data);
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
    }
  };

  const handleGetNote = async (id) => {
    try {
      setIsLoading(true);
      const { data } = await fetchNote(id);
      setNote(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
    }
  };

  const handleInsertNote = async () => {
    try {
      setIsLoading(true);
      await insertNote({
        title: title,
        body: body,
      });
      resetState();
      setIsLoading(false);
      swalSuccess(localizationSwal.success, localizationSwal.insertSuggest);
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
    }
  };

  const handleArchiveNote = async (id) => {
    try {
      setIsLoading(true);
      await archiveNote(id);
      resetState();
      setIsLoading(false);
      swalSuccess(localizationSwal.success, localizationSwal.archiveSuggest);
      return true;
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
      return false;
    }
  };

  const handleUnArchiveNote = async (id) => {
    try {
      setIsLoading(true);
      await unArchiveNote(id);
      resetState();
      setIsLoading(false);
      swalSuccess(localizationSwal.success, localizationSwal.unArchiveSuggest);
      return true;
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
      return false;
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      setIsLoading(true);
      await deleteNote(id);
      resetState();
      setIsLoading(false);
      swalSuccess(localizationSwal.success, localizationSwal.deleteSuggest);
      return true;
    } catch (error) {
      setIsLoading(false);
      handleApiError(error);
      return false;
    }
  };

  const removeSelectedNote = async (id) => {
    const updatedNotes = filteredNotes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const resetState = () => {
    setTitle("");
    setBody("");
  };

  return {
    isLoading,
    notes,
    filteredNotes,
    note,
    title,
    body,
    setTitle,
    setBody,
    handleGetActiveNotes,
    handleGetArchivedNotes,
    handleInsertNote,
    handleGetNote,
    handleArchiveNote,
    handleUnArchiveNote,
    handleDeleteNote,
    removeSelectedNote,
  };
};

export default useNotes;
