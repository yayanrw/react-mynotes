import React, { useState } from "react";
import useInput from "../hooks/useInput";
import useLocalization from "../hooks/useLocalization";
import {
  confirmationDialog,
  swalError,
  swalSuccess,
  swalWarning,
} from "../utils/swal_helper";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { insertNote } from "../datasources/note_datasource";
import { ApplicationException, ServerException } from "../utils/exceptions";

const AddPage = () => {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useInput("");
  const [isLoading, setIsLoading] = useState(false);
  const localizationInput = useLocalization("input");
  const localizationCard = useLocalization("card");
  const localizationSwal = useLocalization("swal");

  const submitHandler = async (event) => {
    event.preventDefault();
    confirmationDialog(
      localizationSwal.insertDataWarn,
      localizationSwal.insertIt,
      localizationSwal.areYouSure,
      (confirmed) => {
        if (confirmed) {
          callInsertNote();
        }
      }
    );
  };

  const callInsertNote = async () => {
    try {
      setIsLoading(true);
      await insertNote({ title: title, body: body });

      setIsLoading(false);
      setTitle("");
      setBody("");
      swalSuccess(localizationSwal.success, localizationSwal.insertSuggest);
    } catch (error) {
      setIsLoading(false);
      if (error instanceof ApplicationException) {
        swalWarning(localizationSwal.warning, error.message);
      } else if (error instanceof ServerException) {
        swalError(localizationSwal.serverError, error.message);
      } else {
        swalError(localizationSwal.anErrorOccured, error.message);
      }
    }
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
                  onChange={setTitle}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBody">
                <Form.Label>{localizationInput.detail}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder={localizationInput.detailPlaceholder}
                  required
                  onChange={setBody}
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
