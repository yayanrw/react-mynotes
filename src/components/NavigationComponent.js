import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import TabTitleComponent from "./TabTitleComponent";
import { ACTIVE_NOTES, ADD_NOTE, ARCHIVED_NOTES } from "../utils/MyConstants";
import PropTypes from "prop-types";

const NavigationComponent = ({ notes }) => {
  const location = useLocation();

  return (
    <Container>
      <Nav justify variant="tabs" defaultActiveKey="/" className="mb-5 mt-5">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/add-notes"
            eventKey="/add-notes"
            active={location.pathname.startsWith("/add-notes")}
          >
            <TabTitleComponent title={ADD_NOTE} count={99} />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/"
            eventKey="/"
            active={location.pathname === "/"}
          >
            <TabTitleComponent
              title={ACTIVE_NOTES}
              count={notes.filter((item) => !item.archived).length}
              badgeType="primary"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/archived-notes"
            eventKey="/archived-notes"
            active={location.pathname.startsWith("/archived-notes")}
          >
            <TabTitleComponent
              title={ARCHIVED_NOTES}
              count={notes.filter((item) => item.archived).length}
              badgeType="secondary"
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

NavigationComponent.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NavigationComponent;
