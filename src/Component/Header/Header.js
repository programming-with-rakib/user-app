import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div class="header-content">
            <nav className="menu-list">
                <a href="/home">Home</a>
                <a href="/country">Country</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;