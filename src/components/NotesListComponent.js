import React from "react";
import { Col, Row } from "react-bootstrap";
import NoteCardItemComponent from "./NoteCardItemComponent";
import { NO_NOTES } from "../utils/MyConstants";

const NotesListComponent = ({
  notes,
  showArchive = false,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  const filteredNotes = notes.filter((note) => note.archived === showArchive);

  return (
    <Row>
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => {
          return (
            <NoteCardItemComponent
              key={note.id}
              id={note.id}
              onArchive={onArchive}
              onUnarchive={onUnarchive}
              onDelete={onDelete}
              {...note}
            />
          );
        })
      ) : (
        <Col className="text-center mt-5 pt-5" as="h5">
          {NO_NOTES}
        </Col>
      )}
    </Row>
  );
};

export default NotesListComponent;
