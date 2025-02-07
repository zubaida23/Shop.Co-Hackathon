'use client';

import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 flex flex-col">
              <Image
                src={item.imageUrl || '/placeholder.svg'}
                alt={item.name}
                width={300}
                height={300}
                className="object-cover rounded-md mb-4"
              />
              <Link href={`/products/${item.id}`} className="">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              </Link>
              <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
              <div className="mt-auto flex justify-between">
                <div className="flex flex-row mt-4 font-bold mb-9">
                  <button className="mr-4">
                    <FaHeart size={24} className="font-bold text-black" />
                  </button>
                  <button onClick={() => removeFromWishlist(item.id)}>
                    <RiDeleteBin6Line size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
