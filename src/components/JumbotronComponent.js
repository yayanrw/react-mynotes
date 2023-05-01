import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AWESOME_QUOTE } from "../utils/MyConstants";
import SearchComponent from "./SearchComponent";

const JumbotronComponent = ({ keyword, onKeywordChangeHandler }) => {
  return (
    <Container fluid>
      <Row className="p-5 bg-dark text-center text-white">
        <Col className="px-5">
          <Container>
            <h2>{AWESOME_QUOTE}</h2>
            <SearchComponent keyword={keyword} keywordChange={onKeywordChangeHandler} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default JumbotronComponent;
