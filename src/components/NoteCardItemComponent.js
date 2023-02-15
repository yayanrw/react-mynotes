import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { showFormattedDate } from "../utils/MyCustoms";

const NoteCardItemComponent = ({
  title,
  body,
  archived,
  createdAt,
  id,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  return (
    <Col lg="3" className="pb-4">
      <Card className="card-height">
        <Card.Header as="h6" className="p-3">
          {title}
        </Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <footer className="blockquote-footer pt-3 mb-0">
            {showFormattedDate(createdAt)}
          </footer>
        </Card.Body>
        <Card.Footer>
          <Button variant="default">
            <FontAwesomeIcon
              color="red"
              title={archived ? "Unarchive" : "Archive"}
              icon={archived ? solid("heart") : regular("heart")}
              onClick={archived ? () => onUnarchive(id) : () => onArchive(id)}
            />
          </Button>
          <Button variant="default">
            <FontAwesomeIcon
              title="Delete"
              onClick={() => onDelete()}
              icon={regular("trash-can")}
            />
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default NoteCardItemComponent;
