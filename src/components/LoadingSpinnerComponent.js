import React from "react";
import { Col, Spinner } from "react-bootstrap";

const LoadingSpinnerComponent = () => {
  return (
    <Col
      style={{
        minHeight: "800px",
      }}
      className="text-center"
    >
      <Spinner animation="border" role="status" variant="info" />
    </Col>
  );
};

export default LoadingSpinnerComponent;
