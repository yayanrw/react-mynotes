import React from "react";
import { Form } from "react-bootstrap";
import { SEARCH_PLACEHOLDER } from "../utils/MyConstants";

const SearchComponent = () => {
  return (
    <Form className="d-flex pt-5 px-5">
      <Form.Control
        type="search"
        placeholder={SEARCH_PLACEHOLDER}
        className="me-2"
        aria-label="Search"
      />
    </Form>
  );
};

export default SearchComponent;
