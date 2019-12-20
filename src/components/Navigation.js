import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <Link to="/">
                <p>Home</p>
            </Link>
            <Link to="/characters">
                <p>Characters</p>
            </Link>
            <Link to="/locations">
                <p>Locations</p>
            </Link>
            <Link to="/episodes">
                <p>Episodes</p>
            </Link>
        </nav>
    )
}