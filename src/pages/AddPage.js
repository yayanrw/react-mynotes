import React from "react";
import useLocalization from "../hooks/useLocalization";
import { confirmationDialog } from "../utils/swal_helper";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import useNotes from "../hooks/useNotes";
import useForm from "../hooks/useForm";

const AddPage = () => {
  const localizationInput = useLocalization("input");
  const localizationCard = useLocalization("card");
  const localizationSwal = useLocalization("swal");

  const { isLoading, handleInsertNote, setTitle, setBody, title, body } =
    useNotes();

  const [titleValue, titleError, titleValidate] = useForm("", {
    required: true,
  });

  const [bodyValue, bodyError, bodyValidate] = useForm("", {
    required: true,
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    if (
      titleValue !== "" &&
      titleError === "" &&
      bodyValue !== "" &&
      bodyError === ""
    ) {
      confirmationDialog(
        localizationSwal.insertDataWarn,
        localizationSwal.insertIt,
        localizationSwal.areYouSure,
        async (confirmed) => {
          if (confirmed) {
            await handleInsertNote();
          }
        }
      );
    } else {
      titleValidate(titleValue);
      bodyValidate(bodyValue);
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
            <Form noValidate onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>{localizationInput.title}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={localizationInput.titlePlaceholder}
                  required
                  onChange={(e) => {
                    titleValidate(e.target.value);
                    setTitle(e.target.value);
                  }}
                  value={title}
                  isValid={titleError === "" && titleValue !== ""}
                  isInvalid={titleError !== ""}
                />
                <Form.Control.Feedback type="invalid">
                  {titleError}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicBody">
                <Form.Label>{localizationInput.detail}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder={localizationInput.detailPlaceholder}
                  required
                  onChange={(e) => {
                    bodyValidate(e.target.value);
                    setBody(e.target.value);
                  }}
                  value={body}
                  isValid={bodyError === "" && bodyValue !== ""}
                  isInvalid={bodyError !== ""}
                />
                <Form.Control.Feedback type="invalid">
                  {bodyError}
                </Form.Control.Feedback>
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
