import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import TabTitleComponent from "./TabTitleComponent";
import useLocalization from "../hooks/useLocalization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const NavigationComponent = () => {
  const localization = useLocalization("nav");
  const location = useLocation();

  return (
    <Container>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/notes/active"
        className="mb-5 mt-5"
      >
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/notes/add"
            eventKey="/notes/add"
            active={location.pathname.startsWith("/notes/add")}
          >
            <TabTitleComponent
              title={localization.addNewNote}
              icon={<FontAwesomeIcon icon={solid("square-plus")} />}
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/notes/active"
            eventKey="/notes/active"
            active={location.pathname === "/notes/active"}
          >
            <TabTitleComponent
              title={localization.activeNotes}
              icon={<FontAwesomeIcon icon={solid("square-check")} />}
              badgeType="primary"
            />
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/notes/archive"
            eventKey="/notes/archive"
            active={location.pathname.startsWith("/notes/archive")}
          >
            <TabTitleComponent
              title={localization.archivedNotes}
              icon={<FontAwesomeIcon icon={solid("archive")} />}
              badgeType="secondary"
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default NavigationComponent;
