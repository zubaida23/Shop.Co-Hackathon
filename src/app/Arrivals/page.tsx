"use client";

import Link from "next/link";
import Image from "next/image";
import Selling from "@/app/Arrivals/selling";
import Dress from "@/app/Arrivals/dress";
import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.SANITY_API_VERSION || "2021-08-31",
});

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  discountPercent?: number;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
};

const Arrivals = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"] {
        "id": _id,
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

  const handleAddToCart = (product: { name: string }) => {
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-white min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-center mb-8 tracking-wide">
          NEW ARRIVALS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.slice(0, visibleCount).map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow relative group"
            >
              <Link href={`./Sale/${product.id}`}>
              <div className="relative mb-4 overflow-hidden rounded">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded transform group-hover:scale-110 transition-transform"
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
              </Link>
              <h2 className="text-lg font-medium text-gray-800 mb-2">
                {product.name}
              </h2>
              <div className="text-lg font-bold text-gray-800">
                {product.price}
                {product.discountPercent && (
                  <span className="text-sm text-red-500 ml-2">
                    {product.discountPercent}% OFF
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {visibleCount < products.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(products.length)}
              className="px-8 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
              View All
            </button>
          </div>
        )}
        
        <Selling />
        <Dress />
      </div>
    </div>
  );
};

export default Arrivals;
