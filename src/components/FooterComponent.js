import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AUTHOR } from "../utils/MyConstants";
import useLocalization from "../hooks/useLocalization";

const FooterComponent = () => {
  const localization = useLocalization("app");
  return (
    <Container fluid className="my-background px-5">
      <Row>
        <Col>
          <Container>
            <p className="mb-0 pt-5 pb-5">
              {localization.courseName}
              <span className="float-end">{AUTHOR} @Dicoding 2023</span>
            </p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
