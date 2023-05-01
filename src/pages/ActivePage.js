import React from "react";
import NotesListComponent from "../components/NotesListComponent";

const ActivePage = ({ notes, onArchive, onUnarchive, onDelete }) => {
  return (
    <NotesListComponent
      notes={notes}
      showArchive={false}
      onArchive={onArchive}
      onUnarchive={onUnarchive}
      onDelete={onDelete}
    />
  );
};

export default ActivePage;
