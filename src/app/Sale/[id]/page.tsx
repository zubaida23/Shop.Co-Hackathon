"use client";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Reviews from "@/components/review";
import { useParams } from "next/navigation"; // ✅ Use useParams hook

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

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "products" && _id == $id][0] {
          "id":_id,
          name,               
          price,             
          description,        
          "imageUrl": image.asset->url,         
          category,           
          discountPercent,    
          new,               
          colors,            
          sizes
        }`;

        const data: Product = await client.fetch(query, { id: productId });

        setProduct(data);
        setSelectedColor(data.colors?.[0] || null);
        setSelectedSize(data.sizes?.[0] || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleAddToCart = (product: Product) => {
    if (!selectedColor || !selectedSize) {
      setNotification("Please select both color and size.");
      return;
    }

    const cartProduct = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product with the selected color and size is already in the cart
    const isProductInCart = existingCart.some(
        (item: Product & { selectedColor: string; selectedSize: string }) =>
        item.id === cartProduct.id &&
        item.selectedColor === cartProduct.selectedColor &&
        item.selectedSize === cartProduct.selectedSize
    );

    if (isProductInCart) {
      setNotification(`${product.name} is already in your cart!`);
    } else {
      // Add the new product to the cart
      const updatedCart = [...existingCart, cartProduct];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setNotification(`${product.name} added to cart!`);
    }

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

// addto favirote 
const handleAddToWishlist = (product: Product) => {
    if (!selectedColor || !selectedSize) {
      setNotification("Please select both color and size.");
      return;
    }
  
    const wishlistProduct = {
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    };
  
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  
    // Check if the product with the selected color and size is already in the wishlist
    const isProductInWishlist = existingWishlist.some(
      (item: Product & { selectedColor: string; selectedSize: string }) =>
        item.id === wishlistProduct.id &&
        item.selectedColor === wishlistProduct.selectedColor &&
        item.selectedSize === wishlistProduct.selectedSize
    );
  
    if (isProductInWishlist) {
      setNotification(`${product.name} is already in your wishlist!`);
    } else {
      // Add the new product to the wishlist
      const updatedWishlist = [...existingWishlist, wishlistProduct];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setNotification(`${product.name} added to wishlist!`);
    }
  
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      {notification && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {notification}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Product Images */}
        <div className="space-y-4">
          <Image
            src={product.imageUrl || "/images/tshirt/image 1.svg"}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />

          <div className="flex justify-center space-x-4 flex-wrap">
            <Image
              src={product.imageUrl || "/images/tshirt/image 1.svg"}
              alt="T-shirt"
              width={144}
              height={144}
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <Image
              src={product.imageUrl || "/images/tshirt/image 1.svg"}
              alt="T-shirt"
              width={144}
              height={144}
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <Image
              src={product.imageUrl || "/images/tshirt/image 1.svg"}
              alt="T-shirt"
              width={144}
              height={144}
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="space-y-4">
          <h1 className="text-xl sm:text-2xl font-bold">{product.name}</h1>
          <p className="text-xl sm:text-2xl font-bold">{product.category}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">{product.description}</p>

          {/* Price and Discount */}
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-lg sm:text-2xl font-bold text-gray-900">${product.price}</span>
            {product.discountPercent && (
              <>
                <span className="text-sm sm:text-lg line-through text-gray-500">
                  ${(product.price + (product.price * product.discountPercent) / 100).toFixed(2)}
                </span>
                <span className="text-red-600 text-sm sm:text-lg">-{product.discountPercent}%</span>
              </>
            )}
          </div>

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold">Select Color</h3>
              <div className="flex space-x-3 mt-3">
                {product.colors.map((color) => (
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
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold">Choose Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                      selectedSize === size ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector & Add to Cart */}
          <div className="mt-6 flex items-center space-x-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-3 py-2 bg-gray-100"
              >
                -
              </button>
              <span className="px-3 text-gray-600">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-2 bg-gray-100"
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
              Add to Cart
            </button>
            <button
              onClick={() => handleAddToWishlist(product)}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-transform transform hover:scale-105"
            >
              Add to Favirote
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
};

export default ProductDetailPage;
