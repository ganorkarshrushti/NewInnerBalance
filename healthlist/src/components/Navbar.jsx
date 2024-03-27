import React from 'react';
import './Navbar.css';
import logo from '../images/logo5.jpg'; 
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

const CustomNavbar = () => { 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className="logo-img" />
          InnerBalance
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a href="/">Home</a>
            <a href="/">Book an Appointment</a>
            <a href="/help">Help Now</a>
            
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Articles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Exercise & Meditation</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Journal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Affirmations</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="ms-auto">
            <form className="d-flex" role="Register/Login">
              <button className="btn btn-outline-success" type="submit">
                Register/Login
              </button>
            </form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
