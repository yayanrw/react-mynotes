import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import JumbotronComponent from "./JumbotronComponent";
import NavigationComponent from "./NavigationComponent";
import { Container } from "react-bootstrap";

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
    <Container>
      <JumbotronComponent
        keyword={keyword}
        onKeywordChangeHandler={onKeywordChangeHandler}
      />
      <NavigationComponent />
      <Container style={{ minHeight: "800px" }}>{child}</Container>
    </Container>
  );
};

export default BaseNoteComponent;
