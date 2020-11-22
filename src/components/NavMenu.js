import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "../style/NavMenu.css";
import "../style/Geral.css";

export default class NavMenu extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark" expand="md" className="fixed-top">
          <NavbarBrand id="brandNome">Projeto Final</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="link" href="/">
                Professores
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="link" href="/sobre">
                Sobre
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}