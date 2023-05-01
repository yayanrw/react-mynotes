import React from "react";
import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const TabTitleComponent = ({ title, count, badgeType = "success" }) => {
  return (
    <React.Fragment>
      {title}{" "}
      <Badge bg={badgeType}>
        {count === 99 ? <FontAwesomeIcon icon={solid("plus")} /> : count}
      </Badge>
    </React.Fragment>
  );
};

TabTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  badgeType: PropTypes.string,
};

export default TabTitleComponent;
