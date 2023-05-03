import React from "react";
import { Col, Row } from "react-bootstrap";
import NoteCardItemComponent from "./NoteCardItemComponent";
import PropTypes from "prop-types";
import useLocalization from "../hooks/useLocalization";

const NotesListComponent = ({
  notes,
  showArchive = false,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  const filteredNotes = notes.filter((note) => note.archived === showArchive);
  const localization = useLocalization("swal");

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
          {localization.noNotes}
        </Col>
      )}
    </Row>
  );
};

NotesListComponent.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  showArchive: PropTypes.bool,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesListComponent;
