import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchComponent from "./SearchComponent";
import PropTypes from "prop-types";
import useLocalization from "../hooks/useLocalization";

const JumbotronComponent = ({ keyword, onKeywordChangeHandler }) => {
  const localization = useLocalization("app");

  return (
    <Container fluid>
      <Row className="p-5 bg-dark text-center text-white">
        <Col className="px-5">
          <Container>
            <h2>{localization.appQuote}</h2>
            <SearchComponent
              keyword={keyword}
              keywordChange={onKeywordChangeHandler}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

JumbotronComponent.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChangeHandler: PropTypes.func.isRequired,
};

export default JumbotronComponent;
