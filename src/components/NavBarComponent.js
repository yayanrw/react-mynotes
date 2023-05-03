import React from "react";
import { Navbar, Container } from "react-bootstrap";
import useLocalization from "../hooks/useLocalization";

const NavBarComponent = () => {
  const localization = useLocalization("app");

  return (
    <Navbar bg="dark" variant="dark" className="pt-4">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#0DCAF0" }}>
          {localization.appName}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
