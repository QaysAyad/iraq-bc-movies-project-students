import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";

export default function Header(props) {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Nav>

          <Search
            onSubmit={props.onSubmit}
            onChange={props.onChange}
            isSpinnerHidden={props.isSpinnerHidden}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
