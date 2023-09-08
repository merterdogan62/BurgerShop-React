import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/burger-logo.svg";
import MediaQuery from "react-responsive";
import { LinkContainer } from "react-router-bootstrap";

export default function AppNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="danger" data-bs-theme="dark">
        <Container className="mt-1">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <LinkContainer to="/">
              <Navbar.Brand className="d-flex w-100">
                <MediaQuery maxWidth={575}>
                  <img
                    style={{
                      height: "70px",
                      width: "70px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src={Logo}
                    alt="Burger Logo"
                  />
                </MediaQuery>

                <MediaQuery minWidth={575}>
                  {" "}
                  <img
                    className="col-md-1"
                    style={{ height: "50px", width: "50px", float: "left" }}
                    src={Logo}
                    alt="Burger Logo"
                  />{" "}
                </MediaQuery>

                {/* <img className="logo-image" src={Logo} alt="Burger Logo" /> */}
              </Navbar.Brand>
            </LinkContainer>
            <Nav className="col-md-10">
              <LinkContainer to="/">
                <Nav.Link className="d-flex">
                  <p className="fw-bold m-auto">Home</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/menu">
                <Nav.Link className="d-flex">
                  <p className="fw-bold m-auto">Menu</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="d-flex">
                  <p className="fw-bold m-auto">About</p>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="d-flex">
                  <p className="fw-bold m-auto">Contact</p>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
