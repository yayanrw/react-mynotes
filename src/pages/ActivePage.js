import React, { useEffect, useState } from "react";
import NotesListComponent from "../components/NotesListComponent";
import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent";
import useNotes from "../hooks/useNotes";

const ActivePage = () => {
  const [onAction, setOnAction] = useState(0);
  const { handleGetActiveNotes, isLoading, filteredNotes } = useNotes(onAction);

  useEffect(() => {
    handleGetActiveNotes();
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
export default ActivePage;
