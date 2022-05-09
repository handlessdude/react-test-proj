import React from 'react';
import logo from 'images/logo.svg';
import {NavLink} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={logo} className="header--image" alt="logo" />
            <h2 className="header--title">React Test Project</h2>
            <div className="header--links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="users">Users</NavLink>
            </div>

        </header>
    );
};

export default Header;