"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FaBox } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import { RiDeleteBin6Line } from "react-icons/ri"
import Image from "next/image"
import { useCart } from "./../context/CartContext"
import { checkoutSchema, type CheckoutFormData } from "./../schemas/checkoutSchema"
import Link from "next/link"

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart()
  const [orderStatus, setOrderStatus] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })

  // Set initial values for discount, promo discount, delivery fee
  const discount = 0; // No discount by default
  const promoDiscount = 0; // No promo discount
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const discountAmount = (discount + promoDiscount) * subtotal;
  const deliveryFee = 0; // Assuming free delivery

  // Calculate total
  const total = subtotal - discountAmount + deliveryFee;

  const onSubmit = async (data: CheckoutFormData) => {
    // Simulate order submission
    console.log("Form Data Submitted:", data);
    setOrderStatus("Processing")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setOrderStatus("Order placed successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h1 className="text-2xl font-bold">How would you like to get your order?</h1>
          <p className="text-gray-600">
            Customs regulations for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match
            the shipping address.
            <a href="#" className="underline ml-1">
              Learn More
            </a>
          </p>
          <div className="border-2 border-black rounded-md p-4 flex items-center space-x-4">
            <FaBox size={20} />
            <span>Deliver it</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-xl font-semibold">Enter your name and address</h2>
            <input {...register("firstName")} placeholder="First Name" className="w-full p-2 border rounded" />
            {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

            <input {...register("lastName")} placeholder="Last Name" className="w-full p-2 border rounded" />
            {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

            <input {...register("addressLine1")} placeholder="Address Line 1" className="w-full p-2 border rounded" />
            {errors.addressLine1 && <p className="text-red-500">{errors.addressLine1.message}</p>}

            <input {...register("addressLine2")} placeholder="Address Line 2" className="w-full p-2 border rounded" />

            <input {...register("addressLine3")} placeholder="Address Line 3" className="w-full p-2 border rounded" />

            <div className="grid grid-cols-2 gap-4">
              <input {...register("postalCode")} placeholder="Postal Code" className="w-full p-2 border rounded" />
              <input {...register("locality")} placeholder="Locality" className="w-full p-2 border rounded" />
            </div>
            {errors.postalCode && <p className="text-red-500">{errors.postalCode.message}</p>}
            {errors.locality && <p className="text-red-500">{errors.locality.message}</p>}

            <div className="grid grid-cols-2 gap-4">
              <input {...register("state")} placeholder="State/Territory" className="w-full p-2 border rounded" />
              <input value="India" readOnly className="w-full p-2 border rounded bg-gray-100" />
            </div>
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}

            <h2 className="text-xl font-semibold">What&apos;s your contact information?</h2>
            <input {...register("email")} type="email" placeholder="Email" className="w-full p-2 border rounded" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <p className="text-sm text-gray-500">A confirmation email will be sent after checkout</p>

            <input
              {...register("phoneNumber")}
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
            <p className="text-sm text-gray-500">A carrier might contact you to confirm delivery</p>

            <h2 className="text-xl font-semibold">What&apos;s your PAN?</h2>
            <input {...register("pan")} placeholder="PAN" className="w-full p-2 border rounded" />
            {errors.pan && <p className="text-red-500">{errors.pan.message}</p>}
            <p className="text-sm text-gray-500">
              Enter your PAN to enable payment with UPI, Net Banking or local card methods
            </p>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Continue to Payment
            </button>
          </form>

          {orderStatus && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
              {orderStatus}
            </div>
          )}

          <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded">
            <p>
              Track your order:{" "}
              <Link href={"./order"} className="text-blue-800 underline">
                Click here to track your order
              </Link>
            </p>
          </div>

        </div>

        <div className="space-y-8">
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

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Your Items</h2>
              {cart.map((item) => (
                <div key={item.id} className="flex border-b pb-4">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                  <div className="ml-4 flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>MRP: ₹{item.price.toFixed(2)}</p>
                    </div>
                    <p>Size: {item.sizes}</p>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex space-x-2">
                        <button className="text-gray-600 hover:text-black">
                          <CiHeart size={24} />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-600 hover:text-black"
                        >
                          <RiDeleteBin6Line size={24} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {cart.length === 0 && <p>Your cart is empty. Start shopping!</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
