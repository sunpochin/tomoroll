// src/app/HomeSection.tsx
'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/app/NavBar'

const HomeSection = () => {
  // 用 state 儲存圓圈座標，避免 hydration mismatch
  const [circlePositions, setCirclePositions] = useState<
    { left: number; top: number }[]
  >([])

  useEffect(() => {
    // 僅在 client 端產生隨機座標
    const positions = Array.from({ length: 10 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
    setCirclePositions(positions)
  }, [])

  const circles = circlePositions.map((pos, index) => (
    <div
      key={index}
      className="circle"
      style={{ left: `${pos.left}%`, top: `${pos.top}%`, zIndex: 1 }}
    />
  ))

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
