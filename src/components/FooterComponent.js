import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AUTHOR } from "../utils/constants";
import useLocalization from "../hooks/useLocalization";

const FooterComponent = () => {
  const localization = useLocalization("app");
  return (
    <Container fluid className="my-background px-5">
      <Row className="d-flex flex-md-row flex-column justify-content-between align-items-center pt-5 pb-5">
        <Col className="py-2 text-center">{localization.courseName}</Col>
        <Col className="py-2 text-center">{AUTHOR} @Dicoding 2023</Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
