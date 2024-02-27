import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
      return (
          <header className="col-2">
        <Navbar className="border-bottom border-right mb-3" ul container light>
          <NavbarBrand tag={Link} to="/">Fakeflix</NavbarBrand>
              <ul className="navbar-nav flex-column">
              <NavItem  >
                <NavLink tag={Link} className="text-dark" to="/" >Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/list">Mi Lista</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/reviews">Calificaciones</NavLink>
              </NavItem>
            </ul>
        </Navbar>
      </header>
    );
  }
}
