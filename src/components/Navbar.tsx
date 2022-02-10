import React from 'react';
import { NavLink } from 'react-router-dom'



const Navbar: React.FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Todo</NavLink></li>
                    <li><NavLink to="/about">Info</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;