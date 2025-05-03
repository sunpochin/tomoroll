// src/app/ProductSection.tsx
'use client'
import React from 'react'
import { Link } from 'react-router-dom' // 確保你已經安裝了 react-router-dom

const ProductSection = () => {
  return (
    <section id="product" className="min-h-screen flex flex-col items-center">
      <h1>Product</h1>
      <p>Product List</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <Link
            to={`/detail/${index}`}
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
