import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const Sitebar = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
                Home
            </NavbarBrand>
            <Nav className="ml-auto">
                <NavItem>
                    <Link to="/cats" className="site-link">Cat Challenge</Link>
                </NavItem>
                <NavItem>
                    <Link to="/search" className="site-link">Search Challenge</Link>
                </NavItem>
                <NavItem>
                    <Link to="/dogs" className="site-link">Dog Challenge</Link>
                </NavItem>
                <NavItem>
                    <Link to="/todo" className="site-link">ToDo Challenge</Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Sitebar;