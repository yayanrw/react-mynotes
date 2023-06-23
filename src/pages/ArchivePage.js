import React, { useEffect, useState } from "react";
import NotesListComponent from "../components/NotesListComponent";
import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent";
import useNotes from "../hooks/useNotes";

const ArchivePage = () => {
  const [onAction, setOnAction] = useState(0);
  const { handleGetArchivedNotes, isLoading, filteredNotes } = useNotes();

  useEffect(() => {
    handleGetArchivedNotes();
  }, [onAction]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinnerComponent />
      ) : (
        <NotesListComponent notes={filteredNotes} setOnAction={setOnAction} />
      )}
    </>
  );
};

export default ArchivePage;
