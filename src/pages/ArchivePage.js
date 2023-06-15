import React, { useEffect, useState } from "react";
import NotesListComponent from "../components/NotesListComponent";
import { fetchArchivedNotes } from "../datasources/note_datasource";
import useLocalization from "../hooks/useLocalization";
import { ApplicationException, ServerException } from "../utils/exceptions";
import { swalError, swalWarning } from "../utils/swal_helper";
import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent";

const ArchivePage = () => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const localizationSwal = useLocalization("swal");

  const callNotesFromApi = async () => {
    try {
      setIsLoading(true);
      const { data } = await fetchArchivedNotes();

      setIsLoading(false);
      setNotes(data);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof ApplicationException) {
        swalWarning(localizationSwal.warning, error.message);
      } else if (error instanceof ServerException) {
        swalError(localizationSwal.serverError, error.message);
      } else {
        swalError(localizationSwal.anErrorOccured, error.message);
      }
    }
  };

  useEffect(() => {
    callNotesFromApi();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinnerComponent />
      ) : (
        <NotesListComponent notes={notes} />
      )}
    </>
  );
};

export default ArchivePage;
