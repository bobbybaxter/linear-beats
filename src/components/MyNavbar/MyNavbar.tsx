import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

export function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="MyNavbar">
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="text-white" href="/">
          Linear Beats
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto text-center" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to="test1">
                Test1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="test2">
                Test2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="test3">
                Test3
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to="test4">
                Test4
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
