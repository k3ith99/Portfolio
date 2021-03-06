import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

const NavBar = () => {
    return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
                <NavLink to="/experience" activeClassName="active">Experience</NavLink>
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
            </nav>
    );
}

export default NavBar; 
