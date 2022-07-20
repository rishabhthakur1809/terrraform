/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './style.scss';
import {
  Button, Navbar, Nav, NavDropdown, Form, FormControl, Accordion, Card, Overlay,
} from 'react-bootstrap';
import logo from '../../../Images/logos/esp_logo_linear_white.svg';
import notification from '../../../Images/Icons/icon_notification.svg';
import setting from '../../../Images/Icons/icon_settings.svg';
import profile from '../../../Images/Icons/icon_profile.svg';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="153"
              className="d-inline-block align-top"
              alt="ESP logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#notification" title="Notifications">
                <img
                  src={notification}
                  className="d-inline-block align-top"
                  alt="Notification"
                  
                />
              </Nav.Link>
              <Nav.Link href="#setting" title="Settings">
                <img
                  src={setting}
                  className="d-inline-block align-top"
                  alt="Setting"
                  
                />
              </Nav.Link>
              <Nav.Link href="/profile" title="Profile">
                <img
                  src={profile}
                  className="d-inline-block align-top"
                  alt="Profile"
                  
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>


    );
  }
}
export default Header;
