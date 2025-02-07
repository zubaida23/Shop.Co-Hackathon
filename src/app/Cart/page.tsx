'use client';

import React, { useState, useEffect } from "react";
import Image  from "next/image";
import Link from "next/link";

// Define the CartItem interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  sizes?: string[]; // Optional array of sizes
  colors?: string[]; // Optional array of colors
}

const CartPage = () => {
  // Use the CartItem interface instead of any
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Get cart items from localStorage when the page loads
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        } else {
          console.error("Invalid cart data in localStorage");
        }
      } catch (error) {
        console.error("Error parsing cart data:", error);
      }
    }
  }, []);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const discount = 0.2; // 20% discount
  const promoDiscount = promoApplied ? 0.1 : 0; // Additional 10% for promo code
  const deliveryFee = 15;

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update cart in localStorage
      return updatedItems;
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update cart in localStorage
      return updatedItems;
    });
  };

  const handleApplyPromoCode = () => {
    if (promoCode === "SAVE10") {
      setPromoApplied(true);
      alert("Promo code applied successfully!");
    } else {
      alert("Invalid promo code.");
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discount + promoDiscount);
  const total = subtotal - discountAmount + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={144}
                    height={144}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">
                      Size: {item.sizes ? item.sizes.join(", ") : "N/A"}
                    </p>
                    <p className="text-sm text-gray-600">
                      Color: {item.colors ? item.colors.join(", ") : "N/A"}
                    </p>
                    <p className="text-sm font-semibold">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-3 py-1 text-gray-600 hover:text-black"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-3 py-1 text-gray-600 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &#x1F5D1; {/* Trash Bin Icon */}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">Order Summary</h1>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-{(discount + promoDiscount) * 100}%)</span>
              <span className="text-red-500">-${discountAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter promotional code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full px-4 py-2 border rounded-md mb-2"
            />
            <button
              onClick={handleApplyPromoCode}
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Apply 
            </button>
          </div>
          <Link href="./Checkout">
               
          <button className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
            Go to Checkout
          </button>
       
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
