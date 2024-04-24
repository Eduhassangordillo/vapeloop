import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Nav_bar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">Ico-VapeLoop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Ofertas</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pods</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Descartables</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Resistencias</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;
