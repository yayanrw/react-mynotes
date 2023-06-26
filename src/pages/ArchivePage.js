import React, { useEffect, useState } from "react";
import NotesListComponent from "../components/NotesListComponent";
import LoadingSpinnerComponent from "../components/LoadingSpinnerComponent";
import useNotes from "../hooks/useNotes";

const ArchivePage = () => {
  const [noteOnAction, setNoteOnAction] = useState(0);
  const {
    handleGetArchivedNotes,
    isLoading,
    filteredNotes,
    removeSelectedNote,
  } = useNotes();

  useEffect(() => {
    handleGetArchivedNotes();
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

export default ArchivePage;
