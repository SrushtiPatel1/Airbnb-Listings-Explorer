import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function MainNav() {
  return (
    <Navbar  className="bg-black">
      <Container>
        <Navbar.Brand style={{ color: "white" }}>Srushti Patel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link style={{ color: "white" }}>Listings</Nav.Link></Link>
            <Link href="/about" passHref legacyBehavior><Nav.Link style={{ color: "white" }}>About</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;

