import React, { useEffect } from "react";
import NotesListComponent from "../components/NotesListComponent";
import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent";
import useNotes from "../hooks/useNotes";

const ArchivePage = () => {
  const { handleGetArchivedNotes, isLoading, filteredNotes } = useNotes();

  useEffect(() => {
    handleGetArchivedNotes();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinnerComponent />
      ) : (
        <NotesListComponent notes={filteredNotes} />
      )}
    </>
  );
};

export default ArchivePage;
