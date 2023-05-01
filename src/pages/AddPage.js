import React from "react";
import NoteFormComponent from "../components/NoteFormComponent";
import PropTypes from "prop-types";

const AddPage = ({ onAddNotes }) => {
  return <NoteFormComponent onAddNotes={onAddNotes} />;
};

AddPage.propTypes = {
  onAddNotes: PropTypes.func.isRequired,
};

export default AddPage;
