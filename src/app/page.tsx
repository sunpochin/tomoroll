'use client'
import React from 'react'
import NavBar from './NavBar'
import HomeSection from './HomeSection'
import ProductSection from './ProductSection'
import AboutSection from './AboutSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex flex-col items-center justify-items-center">
        <HomeSection />
        <ProductSection />
        <AboutSection />
      </main>
    </div>
  )
}
