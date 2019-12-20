import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavItem, Nav, NavbarText } from 'reactstrap';

export default function Navigation() {
    return (
        <Navbar color="dark">
            <Nav>
                <NavItem>
                    <Link className="link" to="/">
                        <NavbarText>Home</NavbarText>
                    </Link> 
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <Link className="link" to="/characters">
                    <NavbarText>Characters</NavbarText>
                    </Link>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <Link className="link" to="/locations">
                    <NavbarText>Locations</NavbarText>
                    </Link>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <Link className="link" to="/episodes">
                    <NavbarText>Episodes</NavbarText>
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}