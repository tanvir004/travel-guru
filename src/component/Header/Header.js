import React from 'react';
import { Nav, Navbar, NavItem, Form, FormControl, Button } from "react-bootstrap";
import './Header.css'


const Header = () => {
    return (
        <div>
            
  <Navbar  className="navItem">
    <Navbar.Brand href="#"><img className="headerLogo" src="https://i.ibb.co/TtgHPzd/logo.png" alt=""/></Navbar.Brand>
    <Nav className="mr-auto">
      <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Button variant="outline-info">Login</Button>
    </Nav>
      </Navbar>
 
 

        </div>
    );
};

export default Header;