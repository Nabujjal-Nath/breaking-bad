import { React, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <h1 className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        Ba-Br
                    </Link>
                </h1>
                <ul className='item-list'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'>
                            Sign up
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link 
                            to='/services' className='nav-links'   
                        >
                            Sign in
                       </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navbar;