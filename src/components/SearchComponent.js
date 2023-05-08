import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import useLocalization from "../hooks/useLocalization";

const SearchComponent = ({ keyword, keywordChange }) => {
  const localization = useLocalization("input");

  return (
    <Form className="d-flex pt-5 px-5">
      <Form.Control
        type="search"
        placeholder={localization.searchPlaceholder}
        className="me-2 py-3 px-5 bg-white text-black"
        aria-label={localization.search}
        value={keyword}
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
