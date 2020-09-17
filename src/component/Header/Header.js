import React from 'react';
import { Nav, Navbar, NavItem, Form, FormControl, Button } from "react-bootstrap";
import './Header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const Header = () => {
    return (
        <div>
            
  <Navbar  className="navItem">
    <Link to="/home"><Navbar.Brand href="#"><img className="headerLogo" src="https://i.ibb.co/TtgHPzd/logo.png" alt=""/></Navbar.Brand></Link>
    <Nav className="mr-auto">
      <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
      <Link to="/home"><Nav.Link style={{color:'white'}} href="/home">Home</Nav.Link></Link>
      
      <Nav.Link style={{color:'white'}} href="#features">Booking</Nav.Link>
      <Link to="/news"><Nav.Link style={{color:'white'}} href="/news">News</Nav.Link></Link>
      
      <Link to="/login"><Button variant="warning">Login</Button></Link>
    </Nav>
      </Navbar>
 
 

        </div>
    );
};

export default Header;