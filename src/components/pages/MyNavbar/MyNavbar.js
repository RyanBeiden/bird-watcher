import React from 'react';
import PropTypes from 'prop-types';
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

import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed } = this.props;

      if (authed) {
        return (
          <Nav className="ml-auto menu-items" navbar>
            <NavItem>
              <NavLink id="home" className="Home-link" tag={RRNavLink} to="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="newBirb" className="NewBirb-link" tag={RRNavLink} to="/new">New Birb</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Logout-link" onClick={this.logMeOut}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }

      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div>
        <Navbar className="MyNavbar" color="light" light expand="md">
          <NavbarBrand className="navbar-title" href="/">Birb Watcher <i className="fab fa-earlybirds"></i></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {buildNavbar()}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
