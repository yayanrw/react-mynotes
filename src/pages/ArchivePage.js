import React from "react";
import NotesListComponent from "../components/NotesListComponent";
import PropTypes from "prop-types";

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

ArchivePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArchivePage;
