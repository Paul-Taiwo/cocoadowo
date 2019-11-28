import React, { Component } from 'react';
import {
    Navbar,
    Nav,
    Button
} from 'react-bootstrap';
import logo from '../../images/logo.png';
import classes from './Navbar.module.css';

const NavBar = (props) => {
    // const navbarClasses = [""];

    return (
    <Navbar className={[classes.navbar, 'py-0', 'pl-sm-0'].join(' ')} expand="lg">
        <Navbar.Brand href="#home">
            <img src={logo} className="ml-lg-5" width="200" alt="Logo" />
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav className="" as="ul">
                    <Nav.Item as="li">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link href="#link">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="mr-lg-4">
                        <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className={classes.mb_sm_3}>
                        <Button className={['mr-3', classes.btnGreen].join(' ')}>Get Started</Button>
                    </Nav.Item>
                    <Nav.Item as="li" className="mr-lg-5">
                        <Button className={['mr-lg-4', classes.outline_btnGreen].join(' ')} variant="outline-primary">Login</Button>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    );
}
export default NavBar;