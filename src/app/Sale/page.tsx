"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // From .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // From .env.local
  useCdn: false, // Set to true for faster reads if you don't need real-time data
  token: process.env.SANITY_API_TOKEN, // Securely fetched from .env.local
  apiVersion: process.env.SANITY_API_VERSION || "2021-08-31", // Fallback to default if missing
});

type Product = {
  id: string; // Sanity document ID
  name: string; // Name of the product
  price: number; // Price of the product
  description: string; // Description of the product
  imageUrl: string; // URL of the image
  category: string; // Product category
  discountPercent?: number; // Optional discount percentage
  new?: boolean; // Optional 'new' flag
  colors?: string[]; // Optional array of color strings
  sizes?: string[]; // Optional array of size strings
};

const CasualPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"] {
        "id":_id,
        name,               
        price,           
        description,          
        "imageUrl": image.asset->url,           
        category,             
        discountPercent,   
        new,               
        colors,            
        sizes, 
      }`;
      try {
        const result = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left-side Filter Section */}
        <div className="w-full lg:w-1/4 bg-gray-100 rounded-lg shadow-md p-4 mb-8 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Filters</h2>
          <hr />
          <br />
          <div className="mb-6">
            <ul className="space-y-2">
              {["T-Shirts", "Shorts", "Shirts", "Hoodie", "Jeens"].map(
                (category) => (
                  <li key={category}>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="form-checkbox text-gray-600"
                      />
                      <span className="ml-2">{category}</span>
                    </label>
                  </li>
                )
              )}
            </ul>
          </div>
          <hr />
          <br />
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Price</h4>
            <div>
              <input type="range" className="w-full" />
              <div className="flex justify-between text-sm mt-1">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>
          </div>
          <hr />
          <br />
          {/* Colors */}
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-3">Color</h4>
            <div className="flex flex-wrap gap-2">
              {["green", "red", "yellow", "orange", "cyan", "blue", "purple", "pink", "white", "black"].map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 rounded-full bg-${color}-500 border border-gray-300 hover:ring-2 ring-${color}-400`}
                  aria-label={color}
                ></button>
              ))}
            </div>
          </div>
          <hr />
          <br />
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "XX-Small",
                "X-Small",
                "Small",
                "Medium",
                "Large",
                "X-Large",
                "XX-Large",
                "3X-Large",
                "4X-Large",
              ].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <hr />
          <br />
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2">Dress Style</h4>
            <ul className="space-y-2">
              {["Casual", "Formal", "Party", "Gym"].map((style) => (
                <li key={style}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-gray-600"
                    />
                    <span className="ml-2">{style}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <br />
          {/* Apply Filters Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg font-medium">
            Apply Filters
          </button>
        </div>

        {/* Product Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Casual</h1>
          </div>
          <div
            className={`grid ${
              isMobile ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            } gap-6 w-full`}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden relative group"
              >
                {/* Product Image */}
                <Link href={`./Sale/${product.id}`}>
                <div className="relative mb-4 overflow-hidden rounded">
                  
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="w-full h-48 object-cover rounded transform group-hover:scale-110 transition-transform"
                  />
                  {/* Add to Cart Button on Hover */}
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Add to Cart
                  </button>
                </div>
                </Link>
                {/* Product Details */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600">${product.price}</p>
                  <div className="flex items-center space-x-1 mt-2">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={`${product.id}-star-${index}`} // Unique key for each star
                        className={`${
                          index < Math.round(product.price) // You likely want to use product.rating here
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  
                </div>
              
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasualPage;
