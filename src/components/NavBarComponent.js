import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import useLocalization from "../hooks/useLocalization";
import LocalizationContext from "../contexts/LocalizationContext";
import { EN_KEY, ID_KEY, LIGHT_KEY } from "../utils/MyConstants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useTheme from "../hooks/useTheme";

const NavBarComponent = () => {
  const localizationApp = useLocalization("app");
  const { localization, toggleLocalization } = useContext(LocalizationContext);
  const [theme, toggleTheme] = useTheme();

  return (
    <Navbar id="my-nav-bar" bg="light" variant="light" className="pt-4">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#0DCAF0" }}>
          {localizationApp.appName}
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-dark" onClick={toggleTheme}>
            {theme === LIGHT_KEY ? (
              <FontAwesomeIcon
                title={localizationApp.applyDarkMode}
                icon={solid("moon")}
              />
            ) : (
              <FontAwesomeIcon
                title={localizationApp.applyLightMode}
                icon={solid("sun")}
              />
            )}
          </Nav.Link>
          <Nav.Link onClick={toggleLocalization} className="text-dark">
            {(localization === ID_KEY ? EN_KEY : ID_KEY).toUpperCase()}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
