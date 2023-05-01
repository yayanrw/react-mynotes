import React from "react";
import { Form } from "react-bootstrap";
import { SEARCH_PLACEHOLDER } from "../utils/MyConstants";
import PropTypes from "prop-types";

const SearchComponent = ({ keyword, keywordChange }) => {
  return (
    <Form className="d-flex pt-5 px-5">
      <Form.Control
        type="search"
        placeholder={SEARCH_PLACEHOLDER}
        className="me-2 py-3 px-5"
        aria-label="Search"
        onChange={(event) => keywordChange(event.target.value)}
      />
    </Form>
  );
};

SearchComponent.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChangeHandler: PropTypes.func,
};

export default SearchComponent;
