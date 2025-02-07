"use client";
import React from "react";
import Image from "next/image";

const Like = () => {
  const products = [
    {
      name: "Polo with Contrast Trims",
      price: "$212",
      originalPrice: "$242",
      discount: "20%",
      rating: "4.0/5",
      image: "/images/like/Frame 1.svg",
    },
    {
      name: "Gradient Graphic T-shirt",
      price: "$145",
      rating: "3.5/5",
      image: "/images/like/Frame 2.svg",
    },
    {
      name: "Polo with Tipping Details",
      price: "$180",
      rating: "4.5/5",
      image: "/images/like/Frame 3.svg",
    },
    {
      name: "Black Striped T-shirt",
      price: "$120",
      originalPrice: "$150",
      discount: "30%",
      rating: "5.0/5",
      image: "/images/like/Frame 4.svg",
    },
  ];

  const handleAddToCart = (product: { name: string }) => {
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-8 tracking-wide">
          YOU MIGHT ALSO LIKE
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow relative group"
            >
              {/* Product Image */}
              <div className="relative mb-4 overflow-hidden rounded">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded transform group-hover:scale-110 transition-transform"
                />
                {/* Add to Cart Button on Hover */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>

              {/* Product Name */}
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                {product.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 text-sm mb-2">
                {Array.from({ length: Math.round(parseFloat(product.rating)) }).map(
                  (_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  )
                )}
                <span className="text-gray-500 ml-2">{product.rating}</span>
              </div>

              {/* Price */}
              <div className="text-lg font-bold text-gray-800">
                {product.price}
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="text-sm text-red-500 ml-2">{product.discount}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Like;
