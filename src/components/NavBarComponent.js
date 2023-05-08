import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import useLocalization from "../hooks/useLocalization";
import LocalizationContext from "../contexts/LocalizationContext";
import { EN, ID, LIGHT } from "../utils/MyConstants";
import ThemeContext from "../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const NavBarComponent = () => {
  const localizationApp = useLocalization("app");
  const { localization, toggleLocalization } = useContext(LocalizationContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg="dark" variant="dark" className="pt-4">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#0DCAF0" }}>
          {localizationApp.appName}
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            {theme === LIGHT ? (
              <FontAwesomeIcon
                title={localizationApp.applyDarkMode}
                onClick={toggleTheme}
                icon={solid("moon")}
              />
            ) : (
              <FontAwesomeIcon
                title={localizationApp.applyLightMode}
                onClick={toggleTheme}
                icon={solid("sun")}
              />
            )}
          </Nav.Link>
          <Nav.Link onClick={toggleLocalization}>
            {(localization === ID ? EN : ID).toUpperCase()}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
