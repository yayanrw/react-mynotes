import React from "react";
import NoteFormComponent from "../components/NoteFormComponent";

const AddPage = ({onAddNotes}) => {

  return <NoteFormComponent onAddNotes={onAddNotes} />;
};

export default AddPage;
