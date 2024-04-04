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
           <span className="inner-balance" style={{ fontWeight: 'bold', fontSize: '20px' }}>InnerBalance</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <a href="/" className='text-black my-auto px-2'> Home </a>
            <a href="/" className='text-black my-auto py-2'> Book an Appointment </a>
            <a href="/help" className='text-black my-auto px-2'> Help Now </a>
          
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="/articles">Articles</NavDropdown.Item>
              <NavDropdown.Item href="/meditationresources">Exercise & Meditation</NavDropdown.Item>
              <NavDropdown.Item href="/journal">Journal</NavDropdown.Item>
              <NavDropdown.Divider /> 
              <NavDropdown.Item href="/quiz">Quizzes</NavDropdown.Item>
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
