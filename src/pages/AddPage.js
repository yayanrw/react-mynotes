import React from "react";
import useLocalization from "../hooks/useLocalization";
import { confirmationDialog } from "../utils/swal_helper";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import useNotes from "../hooks/useNotes";

const AddPage = () => {
  const localizationInput = useLocalization("input");
  const localizationCard = useLocalization("card");
  const localizationSwal = useLocalization("swal");

  const { isLoading, handleInsertNote, setTitle, setBody, title, body } =
    useNotes();

  const submitHandler = async (event) => {
    event.preventDefault();
    confirmationDialog(
      localizationSwal.insertDataWarn,
      localizationSwal.insertIt,
      localizationSwal.areYouSure,
      (confirmed) => {
        if (confirmed) {
          handleInsertNote();
        }
      }
    );
  };

  return (
    <Row>
      <Col>
        <Card className="card-height">
          <Card.Header as="h5" className="p-3 my-card-header">
            {localizationCard.newNote}
          </Card.Header>
          <Card.Body className="my-card-body">
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>{localizationInput.title}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={localizationInput.titlePlaceholder}
                  required
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBody">
                <Form.Label>{localizationInput.detail}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder={localizationInput.detailPlaceholder}
                  required
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                />
              </Form.Group>
              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading
                  ? localizationInput.loading
                  : localizationInput.submit}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddPage;
