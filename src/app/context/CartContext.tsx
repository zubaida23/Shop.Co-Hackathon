'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
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

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string, size?: string) => void;
  getCartItemsCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        // Optionally, reset cart in case of parsing error
        localStorage.removeItem('cart');
      }
    }
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      try {
        localStorage.setItem('cart', JSON.stringify(cart));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
      }
    }
  }, [cart, isClient]);

  const addToCart = (product: CartItem) => {
    try {
      // Check if product already exists in the cart
      const existingProduct = cart.find(
        (item) => item.id === product.id && item.sizes?.some((size) => size === product.sizes?.[0])
      );

      if (existingProduct) {
        // Optionally, update quantity or handle it as needed
        alert('Product is already in the cart');
      } else {
        setCart((prevCart) => [...prevCart, product]);
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const removeFromCart = (productId: string, productSize?: string) => {
    try {
      setCart((prevCart) =>
        prevCart.filter(
          (item) => item.id !== productId || (productSize && !item.sizes?.includes(productSize))
        )
      );
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const getCartItemsCount = () => cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
