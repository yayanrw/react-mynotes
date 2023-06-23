import React, { useEffect } from "react";
import NotesListComponent from "../components/NotesListComponent";
import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent";
import useNotes from "../hooks/useNotes";

const ActivePage = () => {
  const { handleGetActiveNotes, isLoading, filteredNotes } = useNotes();

  useEffect(() => {
    handleGetActiveNotes();
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
export default ActivePage;
