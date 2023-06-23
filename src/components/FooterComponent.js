import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AUTHOR } from "../utils/constants";
import useLocalization from "../hooks/useLocalization";

const FooterComponent = () => {
  const localization = useLocalization("app");
  return (
    <Container fluid className="my-background px-5">
      <Row>
        <Col>
          <Container className="d-flex flex-md-row flex-column justify-content-between align-items-center pt-5 pb-5">
            <span className="py-2">{localization.courseName}</span>
            <span className="py-2">{AUTHOR} @Dicoding 2023</span>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
