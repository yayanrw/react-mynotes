import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import JumbotronComponent from "./JumbotronComponent";
import NavigationComponent from "./NavigationComponent";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const BaseNoteComponent = ({ child }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  return (
    <>
      <JumbotronComponent
        keyword={keyword}
        onKeywordChangeHandler={onKeywordChangeHandler}
      />
      <NavigationComponent />
      <Container style={{ minHeight: "800px" }}>{child}</Container>
    </>
  );
};

BaseNoteComponent.propTypes = {
  child: PropTypes.element.isRequired,
};

export default BaseNoteComponent;
