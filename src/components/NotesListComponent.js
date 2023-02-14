import React from "react";
import { Row } from "react-bootstrap";
import NoteCardItemComponent from "./NoteCardItemComponent";

const NotesListComponent = ({ notes, onArchive, onDelete }) => {
  return (
    <Row className="pt-5">
      {notes.map((note) => {
        return (
          <NoteCardItemComponent
            key={note.id}
            id={note.id}
            onArchive={onArchive}
            onDelete={onDelete}
            {...note}
          />
        );
      })}
    </Row>
  );
};

export default NotesListComponent;
