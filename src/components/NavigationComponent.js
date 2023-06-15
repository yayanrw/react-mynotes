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
      <Nav justify variant="tabs" defaultActiveKey="/" className="mb-5 mt-5">
        <Nav.Item>
          <Nav.Link
            as={Link}
            to="/add-notes"
            eventKey="/add-notes"
            active={location.pathname.startsWith("/add-notes")}
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
            to="/"
            eventKey="/"
            active={location.pathname === "/"}
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
            to="/archived-notes"
            eventKey="/archived-notes"
            active={location.pathname.startsWith("/archived-notes")}
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
