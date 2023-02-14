import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { APP_NAME } from "../utils/MyConstants";

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" className="pt-4">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#0DCAF0" }}>
          {APP_NAME}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
