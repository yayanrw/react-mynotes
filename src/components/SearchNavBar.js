import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { APP_NAME } from "../utils/MyConstants";

export const SearchNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{APP_NAME}</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};
