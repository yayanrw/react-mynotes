import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AUTHOR, CLASS_NAME } from "../utils/MyConstants";
import useLocalization from "../hooks/useLocalization";

const FooterComponent = () => {
  const localization = useLocalization("app");
  return (
    <Container fluid className="bg-dark px-5 mt-5">
      <Row>
        <Col>
          <Container>
            <p className="mb-0 text-white pt-5 pb-5">
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
