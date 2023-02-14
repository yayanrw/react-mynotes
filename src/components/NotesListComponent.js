import React from "react";
import { Row } from "react-bootstrap";
import NoteCardItemComponent from "./NoteCardItemComponent";

const NotesListComponent = ({
  notes,
  showArchive = false,
  onArchive,
  onDelete,
}) => {
  return (
    <Row className="pt-5">
      {notes
        .filter((note) => note.archived === showArchive)
        .map((note) => {
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
