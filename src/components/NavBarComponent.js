import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import useLocalization from "../hooks/useLocalization";
import LocalizationContext from "../contexts/LocalizationContext";

const NavBarComponent = () => {
  const localizationApp = useLocalization("app");
  const { localization, toggleLocalization } = useContext(LocalizationContext);

  return (
    <Navbar bg="dark" variant="dark" className="pt-4">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#0DCAF0" }}>
          {localizationApp.appName}
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={toggleLocalization}>
            {localization === "id" ? "EN" : "ID"}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
