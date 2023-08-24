import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const cart = useSelector(state => state.cart)
  return (
    <div>
         <Navbar fixed='top' expand="lg" className="bg-body-tertiary wow bounceInUp">
      <Container>
        <Link className='navbar-brand' to="/">CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='nav-link' to="/">Product</Link>
            <Link className='nav-link' to="/cart">Cart - ({cart.length})</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavBar
