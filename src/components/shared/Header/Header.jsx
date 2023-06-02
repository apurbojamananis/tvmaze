import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container header">
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link
                className=" ps-2 text-uppercase fs-1  text-decoration-none text-black fst-italic"
                to="/"
              >
                tvmaze
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link
                    className=" ps-2 text-uppercase fs-1  text-decoration-none text-black fst-italic"
                    to="/"
                  >
                    tvmaze
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=" ">
                <Nav className="justify-content-center flex-grow-1 pe-3 ">
                  <Link className="nav-link   menu-item ms-2">Home</Link>
                  <Link className="nav-link  menu-item ms-2">About</Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
