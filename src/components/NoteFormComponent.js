import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { confirmationDialog } from "../utils/MyCustoms";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import useLocalization from "../hooks/useLocalization";

const NoteFormComponent = ({ onAddNotes }) => {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useInput("");
  const localizationInput = useLocalization("input");
  const localizationCard = useLocalization("card");
  const localizationSwal = useLocalization("swal");

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    confirmationDialog(
      localizationSwal.insertDataWarn,
      localizationSwal.insertIt,
      localizationSwal.areYouSure,
      (confirmed) => {
        if (confirmed) {
          onAddNotes({
            title: title,
            body: body,
          });
        }
      }
    );
  };

  return (
    <Row>
      <Col>
        <Card className="card-height bg-light text-black">
          <Card.Header as="h5" className="p-3">
            {localizationCard.newNote}
          </Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmitEventHandler}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>{localizationInput.title}</Form.Label>
                <Form.Control
                  className="bg-white text-black"
                  type="text"
                  placeholder={localizationInput.titlePlaceholder}
                  required
                  onChange={setTitle}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBody">
                <Form.Label>{localizationInput.detail}</Form.Label>
                <Form.Control
                  className="bg-white text-black"
                  as="textarea"
                  rows={5}
                  placeholder={localizationInput.detailPlaceholder}
                  required
                  onChange={setBody}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                {localizationInput.submit}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

NoteFormComponent.propTypes = {
  onAddNotes: PropTypes.func.isRequired,
};

export default NoteFormComponent;
