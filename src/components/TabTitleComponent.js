import React from "react";
import { Badge } from "react-bootstrap";

const TabTitleComponent = ({ title, count, badgeType = "success" }) => {
  return (
    <React.Fragment>
      {title} <Badge bg={badgeType}>{count}</Badge>
    </React.Fragment>
  );
};

export default TabTitleComponent;
