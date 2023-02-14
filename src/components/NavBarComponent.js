import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { APP_NAME } from "../utils/MyConstants";

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{APP_NAME}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
