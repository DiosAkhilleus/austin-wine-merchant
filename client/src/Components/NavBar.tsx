import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Props {}

const NavBar = (props: Props) => {


  return (
    <Navbar style={{backgroundColor: 'rgb(100, 18, 38)'}} variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Austin Wine Merchant</Navbar.Brand> */}
        <Nav className="me-auto">
          <Link to='/home'><Nav.Link href="/home">Home</Nav.Link></Link>
          <NavDropdown title="Our Offerings" id="basic-nav-dropdown">
          <Link to='/wine'><NavDropdown.Item href='/wine'>Fine Wines</NavDropdown.Item></Link>
          <Link to='/spirits'><NavDropdown.Item href='/spirits'>Spirits</NavDropdown.Item></Link>
          <Link to='/beers'><NavDropdown.Item href='/beers'>Beers</NavDropdown.Item></Link>
          <Link to='/accessories'><NavDropdown.Item href='/accessories'>Accessories</NavDropdown.Item></Link>
          <Link to='/gifts'><NavDropdown.Item href='/gifts'>Gifts</NavDropdown.Item></Link>
          <Link to='/clearance'><NavDropdown.Item href='/clearance'><i>Clearance</i></NavDropdown.Item></Link>
          <NavDropdown.Divider />
          <Link to='/groceries'><NavDropdown.Item href='/groceries'>Groceries</NavDropdown.Item></Link>
          <NavDropdown.Divider />
          <Link to='/employment'><NavDropdown.Item href='/employment'>Employment</NavDropdown.Item></Link>
          </NavDropdown>
          <NavDropdown title="Wine By Region/Style" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Champagne</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Bordeaux</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Burgundy</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
