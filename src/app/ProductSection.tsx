// src/app/ProductSection.tsx
'use client'
import React from 'react'
import Link from 'next/link' // 使用 Next.js 的 Link

const ProductSection = () => {
  return (
    <section
      id="product"
      // className="font-custom-pink bg-custom-pink min-h-screen flex flex-col items-center w-full"
      className="font-custom-pink bg-white min-h-screen flex flex-col w-full"
    >
      <div className="text-4xl text-left">Menu </div>
      <div className="text-4xl text-left">of TOMORoLL</div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <Link
            href={`/detail/${index}`}
            key={index}
            className="block p-4 border rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Product {index + 1}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProductSection
