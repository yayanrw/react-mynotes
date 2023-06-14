import React from "react";
import { Container, Spinner } from "react-bootstrap";

const LoadingSpinnerComponent = () => {
  return (
    <Container
      style={{
        minHeight: "800px",
      }}
      className="my-background-lighter pt-5 d-flex align-items-center"
    >
      <Spinner animation="border" role="status" variant="info" />
    </Container>
  );
};

export default LoadingSpinnerComponent;
