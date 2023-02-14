import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import {
  NOTE_DETAIL_PLACEHOLDER,
  NOTE_TITLE_PLACEHOLDER,
} from "../utils/MyConstants";

const NoteFormComponent = () => {
  return (
    <Row>
      <Col>
        <Card className="card-height">
          <Card.Header as="h5" className="p-3">
            New Note
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={NOTE_TITLE_PLACEHOLDER}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBody">
                <Form.Label>Detail</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder={NOTE_DETAIL_PLACEHOLDER}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default NoteFormComponent;
