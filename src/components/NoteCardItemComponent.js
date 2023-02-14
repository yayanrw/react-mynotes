import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { showFormattedDate } from "../utils/MyData";

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
    <Col lg="3" className="pb-4">
      <Card className="card-height">
        <Card.Header as="h5" className="p-3">
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
