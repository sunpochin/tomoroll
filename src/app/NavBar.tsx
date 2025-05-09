// src/app/NavBar.tsx
import React from 'react'
import './globals.css'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 bg-custom-pink p-4">
      <ul className="flex flex-row items-center space-x-4">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
