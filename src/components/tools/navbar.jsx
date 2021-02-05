import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as RNV, Link } from "react-router-dom";
import "./../../App.css";

const NavbarTop = (props) => {
  const [navLinks] = useState([
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Skills",
      link: "/skills",
    },
    {
      label: "My Work",
      link: "/mywork",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ]);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbar" color="dark" dark>
        <NavbarBrand className="mr-auto">
          <Link to="/">Portfolio LR</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="linknav">
            {navLinks.map((item) => {
              return (
                <NavItem key={item.link}>
                  <NavLink tag={RNV} to={item.link} style={{ fontSize: 18 }}>
                    {item.label}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarTop;
