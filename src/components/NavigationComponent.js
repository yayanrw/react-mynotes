import React from "react";
import { Container, Nav } from "react-bootstrap";
import TabTitleComponent from "./TabTitleComponent";
import useLocalization from "../hooks/useLocalization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import MyNavLink from "./MyNavLinkComponent";

const NavigationComponent = () => {
  const localization = useLocalization("nav");

  return (
    <Container>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/notes/active"
        className="mb-5 mt-5"
      >
        <Nav.Item>
          <MyNavLink to="/notes/add">
            <TabTitleComponent
              title={localization.addNewNote}
              icon={<FontAwesomeIcon icon={solid("square-plus")} />}
            />
          </MyNavLink>
        </Nav.Item>
        <Nav.Item>
          <MyNavLink to="/notes/active">
            <TabTitleComponent
              title={localization.activeNotes}
              icon={<FontAwesomeIcon icon={solid("square-check")} />}
              badgeType="primary"
            />
          </MyNavLink>
        </Nav.Item>
        <Nav.Item>
          <MyNavLink to="/notes/archive">
            <TabTitleComponent
              title={localization.archivedNotes}
              icon={<FontAwesomeIcon icon={solid("archive")} />}
              badgeType="secondary"
            />
          </MyNavLink>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default NavigationComponent;
