import React, { useEffect, useState } from "react";
import { Badge, Card, Col, Form, Row } from "react-bootstrap";
import { showFormattedDate } from "../utils/MyCustoms";
import { getNote } from "../utils/MyData";
import { useParams } from "react-router-dom";
import useLocalization from "../hooks/useLocalization";

const DetailPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const localizationCard = useLocalization("card");
  const localizationInput = useLocalization("input");
  const localizationSwal = useLocalization("swal");

  useEffect(() => {
    setNote(getNote(Number(id)));

    return () => {
      setNote(null);
    };
  }, [id]);

  return (
    <Row>
      {note === null || note === undefined ? (
        <Col className="text-center mt-5 pt-5" as="h5">
          {localizationSwal.noNotes}
        </Col>
      ) : (
        <Col>
          <Card className="card-height">
            <Card.Header as="h5" className="p-3">
              {localizationCard.detailNote}{" "}
              <Badge bg={note.archived ? "success" : "warning"}>
                {note.archived
                  ? localizationCard.archive
                  : localizationCard.unarchive}
              </Badge>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>{localizationInput.title}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={localizationInput.titlePlaceholder}
                    value={note.title}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicBody">
                  <Form.Label>{localizationInput.detail}</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder={localizationInput.detailPlaceholder}
                    value={note.body}
                    disabled
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                  <Form.Label>{localizationInput.createdAt}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={localizationInput.createdAt}
                    value={showFormattedDate(note.createdAt)}
                    disabled
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
};

export default DetailPage;
