import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Alert variant="danger">
            <Alert.Heading>404 - Page Not Found</Alert.Heading>
            <p>The page you are looking for does not exist.</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
