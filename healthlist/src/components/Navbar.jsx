import React from 'react';
import './Navbar.css';
import logo from '../images/logo5.jpg'; // Import your logo image

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renamed Navbar import
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = () => { // Renamed component to CustomNavbar
  return (
    <>
      <div>
        <BootstrapNavbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* Image and Brand Name */}
            <BootstrapNavbar.Brand href="#home">
              <img src={logo} alt="Logo" className="logo-img" />
              InnerBalance
            </BootstrapNavbar.Brand>

            {/* Navbar Toggler */}
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Navbar Collapse */}
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              {/* Register/Login Button */}
              <div className="ms-auto">
                <form className="d-flex" role="Register/Login">
                  <button className="btn btn-outline-success" type="submit">
                    Register/Login
                  </button>
                </form>
              </div>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
       
      </div>
    </>
  );
};

export default CustomNavbar; // Exporting the renamed component
