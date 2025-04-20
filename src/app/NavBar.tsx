// src/app/NavBar.tsx
import React from 'react';

const NavBar = () => {
    return (
    <nav className="fixed top-0 right-0 bg-white shadow p-4">
        <ul className="flex flex-row items-center space-x-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    );
};

export default NavBar;
