import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavItem, Nav, NavbarText } from 'reactstrap';

export default function Navigation() {
    return (
        <Navbar>
            <Nav>
                <NavItem>
                    <Link to="/">
                        <NavbarText>Home</NavbarText>
                    </Link> 
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <Link to="/characters">
                    <NavbarText>Characters</NavbarText>
                    </Link>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <Link to="/locations">
                    <NavbarText>Locations</NavbarText>
                    </Link>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <Link to="/episodes">
                    <NavbarText>Episodes</NavbarText>
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}