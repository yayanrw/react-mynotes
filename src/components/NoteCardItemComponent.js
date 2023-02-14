import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const NoteCardItemComponent = ({
  title,
  body,
  archived,
  createdAt,
  id,
  onArchive,
  onDelete,
}) => {
  return (
    <Col lg="3">
      <Card>
        <Card.Header as="h5" className="p-3">
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <footer className="blockquote-footer">
            <cite title="Source Title">Created At</cite> {createdAt}
          </footer>
        </Card.Body>
        <Card.Footer>
          <Button variant="default">
            <FontAwesomeIcon
              color="red"
              icon={archived ? solid("heart") : regular("heart")}
            />
          </Button>
          <Button variant="default">
            <FontAwesomeIcon icon={regular("trash-can")} />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NoteCardItemComponent;
