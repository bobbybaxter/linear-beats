import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="MyNavbar">
        <Navbar color="dark" dark expand="md">
          <NavbarBrand className="text-white" href="/">Linear Beats</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-center" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="test1">Test1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="test2">Test2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} to="test3">Test3</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
