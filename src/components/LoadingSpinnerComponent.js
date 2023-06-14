import React from "react";
import { Container, Spinner } from "react-bootstrap";

const LoadingSpinnerComponent = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="my-background-lighter"
    >
      <Spinner animation="border" role="status" variant="info" />
    </Container>
  );
};

export default LoadingSpinnerComponent;
