import React from "react";
import NotesListComponent from "../components/NotesListComponent";

const ArchivePage = ({ notes, onArchive, onUnarchive, onDelete }) => {
  return (
    <NotesListComponent
      notes={notes}
      showArchive={true}
      onArchive={onArchive}
      onUnarchive={onUnarchive}
      onDelete={onDelete}
    />
  );
};

export default ArchivePage;
