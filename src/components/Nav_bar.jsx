import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import logo from "./../img/svg/logo-horizontal-02.svg";
import "../css/Nav_bar.css";

function Nav_bar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navContainer "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="nav">
        <Navbar.Brand href="#home">
          <img src={logo} width="200" height="100" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto navCollapse">
            <Nav.Link href="#home">
              <Button className="links" variant="secondary">
                Inicio
              </Button>
            </Nav.Link>
            <Nav.Link href="#link">
              <Button className="links" variant="secondary">
                Ofertas
              </Button>
            </Nav.Link>
            <NavDropdown
              variant="Secondary"
              title="Productos"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Pods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Descartables
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Resistencias
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;
