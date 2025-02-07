'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface WishlistItem {
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
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (productId: string, size?: string) => void;
  getWishlistItemsCount: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

interface WishlistProviderProps {
  children: React.ReactNode;
}

export const WishlistProvider: React.FC<WishlistProviderProps> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      try {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          setWishlist(JSON.parse(storedWishlist));
        }
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
        // Optionally, reset wishlist in case of parsing error
        localStorage.removeItem('wishlist');
      }
    }
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      try {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      } catch (error) {
        console.error('Error saving wishlist to localStorage:', error);
      }
    }
  }, [wishlist, isClient]);

  const addToWishlist = (product: WishlistItem) => {
    try {
      // Check if product already exists in the wishlist
      const existingProduct = wishlist.find(
        (item) => item.id === product.id && item.sizes?.some((size) => size === product.sizes?.[0])
      );

      if (existingProduct) {
        // Optionally, update quantity or handle it as needed
        alert('Product is already in the wishlist');
      } else {
        setWishlist((prevWishlist) => [...prevWishlist, product]);
      }
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
    }
  };

  const removeFromWishlist = (productId: string, productSize?: string) => {
    try {
      setWishlist((prevWishlist) =>
        prevWishlist.filter(
          (item) => item.id !== productId || (productSize && !item.sizes?.includes(productSize))
        )
      );
    } catch (error) {
      console.error('Error removing product from wishlist:', error);
    }
  };

  const getWishlistItemsCount = () => wishlist.length;

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, getWishlistItemsCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = (): WishlistContextType => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
