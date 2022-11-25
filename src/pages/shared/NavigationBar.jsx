import React from "react";
import { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

import './sharedStyles.css';
import logo from '../../images/tacos.png';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navBar">
        <NavbarBrand href="/"><img src={logo} alt="Tacos Ara Ara" className="logo"/></NavbarBrand>
        <NavbarToggler onClick={toggle} className="toggleButton"/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>

      </Navbar>
    </div>
  );
};

export default NavigationBar;
