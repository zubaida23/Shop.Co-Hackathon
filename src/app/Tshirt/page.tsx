"use client";
import { useState } from "react";
import Reviews from "@/app/Tshirt/reviwe";

export default function Tshirt() {
  const [selectedColor, setSelectedColor] = useState("green");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Images */}
        <div className="space-y-4">
          <img
            src="/images/tshirt/image 1.svg"
            alt="T-shirt"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex justify-center space-x-4 flex-wrap">
            <img
              src="/images/tshirt/image 2.svg"
              alt="T-shirt"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/images/tshirt/image 3.svg"
              alt="T-shirt"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <img
              src="/images/tshirt/image 4.svg"
              alt="T-shirt"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-4">
          <h1 className="text-xl sm:text-2xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mt-2 space-x-2">
            <span className="text-yellow-500 text-lg">★ ★ ★ ★ ☆</span>
            <span className="text-gray-600 text-sm">(451 reviews)</span>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-lg sm:text-2xl font-bold text-gray-900">$260</span>
            <span className="text-sm sm:text-lg line-through text-gray-500">$300</span>
            <span className="text-red-600 text-sm sm:text-lg">-40%</span>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div className="mt-6">
            <hr />
            <br />
            <h3 className="font-semibold">Select Colors</h3>
            <div className="flex space-x-3 mt-3">
              {[
                "#314F4A",
                "#4F4631",
                "#31344F"
              ].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <br /> <hr />
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Choose Size</h3>
            <div className="flex space-x-3">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={`px-3 sm:px-5 py-2 sm:py-3 border rounded-lg text-sm sm:text-base font-medium ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <br />
          <hr />

          {/* Quantity & Add to Cart */}
          <div className="mt-6 flex items-center space-x-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-100"
              >
                -
              </button>
              <span className="px-3 sm:px-4 text-gray-600">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="border-b">
          <ul className="flex justify-center space-x-10 sm:space-x-40">
            <li className="pb-2 cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">
              Product Details
            </li>
            <li className="pb-2 border-b-4 border-black cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">
              Rating & Reviews
            </li>
            <li className="pb-2 cursor-pointer hover:text-black hover:scale-105 transition-all duration-300">
              FAQs
            </li>
          </ul>
        </div>
      </div>
      <Reviews/>
    </div>

  );
}