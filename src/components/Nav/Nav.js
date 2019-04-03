import React from 'react';
import './Nav.css'
import logo from '../../assets/logo.png'

const Nav = () => {
    return (
        <nav className="navbar-content ">
            <div className="nav-logo">
                <span>Herolo <img src={logo} alt=""/> Cinema </span>
            </div>
        </nav>

    )
}


export default Nav;