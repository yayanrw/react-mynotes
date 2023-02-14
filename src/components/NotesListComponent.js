import React from "react";
import { Container, Row } from "react-bootstrap";
import NoteCardItemComponent from "./NoteCardItemComponent";

const NotesListComponent = ({ notes, onArchive, onDelete }) => {
  return (
    <Container className="pt-5">
      <Row>
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
    </Container>
  );
};

export default NotesListComponent;
