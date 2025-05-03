'use client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom' // 引入 BrowserRouter
import NavBar from './NavBar'
import HomeSection from './HomeSection'
import ProductSection from './ProductSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'

export default function Home() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <NavBar />
        <main className="flex flex-col items-center justify-items-center">
          <HomeSection />
          <ProductSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </BrowserRouter>
  )
}
