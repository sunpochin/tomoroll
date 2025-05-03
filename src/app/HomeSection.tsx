// src/app/HomeSection.tsx
import React from 'react'
import Navbar from '@/app/NavBar'

const HomeSection = () => {
  const circles = Array.from({ length: 10 }).map((_, index) => {
    // randomly generate the position of the circle
    const left = Math.random() * 100 // random left position
    const top = Math.random() * 100 // random top position

    return (
      <div
        key={index}
        className="circle"
        style={{ left: `${left}%`, top: `${top}%`, zIndex: 1 }} // use percentage to set position and low z-index
      />
    )
  })

  return (
    <section
      id="home"
      className="
    min-h-screen min-w-screen bg-custom-pink
    relative"
    >
      <Navbar />
      <img
        src="/images/tomoroll.png"
        alt="tomoroll"
        className="w-1/3 absolute top-0 left-20"
      />
      <div className="flex flex-col items-center justify-between mt-20 bg-white">
        <img src="/images/whisky-1920.jpg" alt="home-image" />
        <div
          id="ideas"
          className="font-custom-brown text-center text-4xl w-1/2 min-h-screen flex flex-col items-center justify-center relative"
        >
          {circles}
          <div style={{ zIndex: 10 }}>
            Small ideas we grasp from a daydream of an elegant life
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
