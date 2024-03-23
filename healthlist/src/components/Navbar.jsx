import React from 'react';
import './Navbar.css';
import logo from '../images/logo5.jpg'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; 
import NavDropdown from 'react-bootstrap/NavDropdown';

const CustomNavbar = () => { 
  return (
    <>
      <div>
        <BootstrapNavbar expand="lg" className="bg-body-tertiary">
          <Container>
            <BootstrapNavbar.Brand href="#home">
              <img src={logo} alt="Logo" className="logo-img" />
              InnerBalance
            </BootstrapNavbar.Brand>

            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

            <BootstrapNavbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Book an Appointment</Nav.Link>
                <Nav.Link href="#link">Help Now</Nav.Link>
                {/* Explore Dropdown Menu */}
                <NavDropdown title="Explore" id="basic-nav-dropdown">
                  {/* Explore Dropdown Items */}
                  <NavDropdown.Item href="#action/3.1">Articles</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Exercise & Meditation</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Journal</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Games</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">Affirmations</NavDropdown.Item>
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

export default CustomNavbar; 
