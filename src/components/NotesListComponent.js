import React from "react";
import { Col, Row } from "react-bootstrap";
import NoteCardItemComponent from "./NoteCardItemComponent";
import PropTypes from "prop-types";
import useLocalization from "../hooks/useLocalization";

const NotesListComponent = ({ notes }) => {
  const localization = useLocalization("swal");

  return (
    <Row>
      {notes.length > 0 ? (
        notes.map((note) => {
          return <NoteCardItemComponent key={note.id} id={note.id} {...note} />;
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
};

export default NotesListComponent;
