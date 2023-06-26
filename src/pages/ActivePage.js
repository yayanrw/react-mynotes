import React, { useEffect, useState } from "react";
import NotesListComponent from "../components/NotesListComponent";
import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent";
import useNotes from "../hooks/useNotes";

const ActivePage = () => {
  const [noteOnAction, setNoteOnAction] = useState(0);
  const { handleGetActiveNotes, isLoading, filteredNotes, removeSelectedNote } =
    useNotes();

  useEffect(() => {
    handleGetActiveNotes();
  }, []);

  useEffect(() => {
    removeSelectedNote(noteOnAction);
  }, [noteOnAction]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinnerComponent />
      ) : (
        <NotesListComponent
          notes={filteredNotes}
          setNoteOnAction={setNoteOnAction}
        />
      )}
    </>
  );
};
export default ActivePage;
