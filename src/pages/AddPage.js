import React from "react";
import NoteFormComponent from "../components/NoteFormComponent";
import { addNote } from "../utils/MyData";

const AddPage = () => {
  const onAddNotesHandler = (contact) => {
    addNote(contact);
  };

  return <NoteFormComponent onAddNotes={onAddNotesHandler} />;
};

export default AddPage;
