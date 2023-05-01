import React from "react";
import NotesListComponent from "../components/NotesListComponent";
import PropTypes from "prop-types";

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

ActivePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ActivePage;
