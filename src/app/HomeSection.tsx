// src/app/HomeSection.tsx
'use client'
import React, { useEffect, useState, useRef } from 'react'
import Navbar from '@/app/NavBar'

const HomeSection = () => {
  // 用 state 儲存圓圈座標，避免 hydration mismatch
  const [circlePositions, setCirclePositions] = useState<
    { left: number; top: number }[]
  >([])

  const [isShrunk, setIsShrunk] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // 僅在 client 端產生隨機座標
    const positions = Array.from({ length: 10 }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
    setCirclePositions(positions)

    const handleScroll = () => {
      if (imgRef.current) {
        const scrollY = window.scrollY
        // 設定縮放閾值
        if (scrollY > 200 && !isShrunk) {
          setIsShrunk(true)
        } else if (scrollY < 10 && isShrunk) {
          // 不再自動放大，縮小後就維持縮小狀態
          // setIsShrunk(false)
        }
        // 只在未縮小時做動畫縮放
        if (!isShrunk) {
          const scale = Math.max(1 - scrollY / 1000, 0.5)
          const translateX = Math.min(scrollY * 0.2, 200)
          const translateY = Math.min(scrollY * 0.2, 200)
          imgRef.current.style.transform = `translate(${-translateX}px, ${-translateY}px) scale(${scale})`
        } else {
          imgRef.current.style.transform = ''
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isShrunk])

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
        ref={imgRef}
        src="/images/tomoroll.png"
        alt="tomoroll"
        className={
          isShrunk
            ? 'absolute top-0 left-0 w-[600px] h-[400px] transition-all duration-300'
            : 'absolute top-0 left-0 w-[1564px] h-[1440px] transition-all duration-300'
        }
        style={{ transition: 'transform 0.2s' }}
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
