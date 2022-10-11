import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/cartSummary';

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand><Link to="/">E-Commerce App</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          <NavItem>
              <NavLink>
                <Link to="/saveproduct">Add to product</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="login">Login</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="register">Register</Link>
              </NavLink>
            </NavItem>
           <CartSummary />
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;