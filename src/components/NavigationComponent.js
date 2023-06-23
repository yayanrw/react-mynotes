import React from "react";
import { Container, Nav } from "react-bootstrap";
import TabTitleComponent from "./TabTitleComponent";
import useLocalization from "../hooks/useLocalization";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import MyNavLinkComponent from "./MyNavLinkComponent";

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
          <MyNavLinkComponent
            to="/notes/add"
            children={
              <TabTitleComponent
                title={localization.addNewNote}
                icon={<FontAwesomeIcon icon={solid("square-plus")} />}
              />
            }
          />
        </Nav.Item>
        <Nav.Item>
          <MyNavLinkComponent
            to="/notes/active"
            children={
              <TabTitleComponent
                title={localization.activeNotes}
                icon={<FontAwesomeIcon icon={solid("square-check")} />}
                badgeType="primary"
              />
            }
          />
        </Nav.Item>
        <Nav.Item>
          <MyNavLinkComponent
            to="/notes/archive"
            children={
              <TabTitleComponent
                title={localization.archivedNotes}
                icon={<FontAwesomeIcon icon={solid("archive")} />}
                badgeType="secondary"
              />
            }
          />
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default NavigationComponent;
