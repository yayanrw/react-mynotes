import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchComponent from "./SearchComponent";
import PropTypes from "prop-types";
import useLocalization from "../hooks/useLocalization";

const JumbotronComponent = ({ keyword, onKeywordChangeHandler }) => {
  const localization = useLocalization("app");

  return (
    <Container fluid>
      <Row className="py-lg-5 py-sm-5 my-background text-center">
        <Col>
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
