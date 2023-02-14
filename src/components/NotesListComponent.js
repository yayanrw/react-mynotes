import React from "react";
import { Container, Row } from "react-bootstrap";
import { NoteCardItem } from "./NoteCardItem";

const NotesListComponent = ({ notes, onArchive, onDelete }) => {
  return (
    <Container className="pt-5">
      <Row>
        {notes.map((note) => {
          return (
            <NoteCardItem
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
