import React from "react";
import { Badge } from "react-bootstrap";
import PropTypes from "prop-types";

const TabTitleComponent = ({ title, icon, badgeType = "success" }) => {
  return (
    <React.Fragment>
      {title}{" "}
      <Badge bg={badgeType}>
        {icon}
      </Badge>
    </React.Fragment>
  );
};

TabTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  badgeType: PropTypes.string,
};

export default TabTitleComponent;
