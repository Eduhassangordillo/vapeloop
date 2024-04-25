import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import logo from "./../img/svg/logo-horizontal-02.svg";
import "../css/Nav_bar.css";

const Nav_bar = () => {
  let activeStyle = {
    textDecoration: "underline",
    fontWeight: "bold",
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navContainer "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="nav">
        <Navbar.Brand>
          <img src={logo} width="200" height="100" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto navCollapse">
            <NavLink
              className="nav-link"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/product"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Product
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav_bar;
