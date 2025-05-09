'use client'
import React, { useEffect, useRef } from 'react'
import NavBar from './NavBar'
import HomeSection from './HomeSection'
import ProductSection from './ProductSection'
import AboutSection from './AboutSection'
import Footer from './Footer'
import '@/app/globals.css'

export default function Home() {
  const sloganRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 當組件掛載時，註冊滾動事件監聽器
    const handleScroll = () => {
      if (sloganRef.current) {
        // 取得目前的滾動距離
        const scrollY = window.scrollY
        // 根據滾動距離計算縮放比例，最多縮小到 0
        // const scale = Math.max(1 - scrollY / 500, 0)
        const scale = Math.max(1 - scrollY / 5000, 0)
        // 根據滾動距離計算 X 軸平移，最多平移到 5000px
        // const translateX = Math.min(scrollY * 2, 5000)
        const translateX = 0

        // 直接設置 slogan 的 transform 樣式，包含平移與縮放
        sloganRef.current.style.transform = `translate(${-translateX}px, ${-scrollY / 2}px) scale(${scale})`
      }
    }

    window.addEventListener('scroll', handleScroll) // 註冊滾動事件
    return () => {
      window.removeEventListener('scroll', handleScroll) // 組件卸載時移除事件監聽
    }
  }, [])

  return (
    <div className="flex flex-col">
      <NavBar />
      <main className="flex flex-col items-center justify-items-center">
        <div
          ref={sloganRef}
          className="absolute text-4xl font-bold text-white bg-custom-pink p-4 rounded-lg whitespace-nowrap"
          style={{
            zIndex: 100,
            left: '400px', // 設定初始 x 位置
            top: '650px', // 設定初始 y 位置
          }}
        >
          我們是穿梭在銀河中的火箭隊，白洞、白色的明天正等著我們！就是這樣，喵～！
        </div>
        <HomeSection />
        <ProductSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
