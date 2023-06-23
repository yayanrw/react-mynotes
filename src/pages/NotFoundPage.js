import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import useLocalization from "../hooks/useLocalization";

const NotFoundPage = () => {
  const localization = useLocalization("pageNotFound");

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Alert variant="danger">
            <Alert.Heading>{localization.message}</Alert.Heading>
            <p>{localization.detailMessage}</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
