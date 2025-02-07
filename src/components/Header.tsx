"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const closeMenu = () => setOpen(false);

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center justify-center bg-white h-[70px]">
        {/* All Content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-3xl font-Integral.CF font-extrabold">SHOP.CO</h1>
          </Link>

          {/* Links - Animated Sliding Nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
            onClick={closeMenu}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 text-sm md:text-base items-center">
              <li className="hover:underline underline-offset-2">
                <Link href="/" className="flex items-center space-x-1">
                  Shop
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link href="./Arrivals">New Arrivals</Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link href="./Tshirt">Brands</Link>
              </li>
              <li className="hover:underline underline-offset-2">
                <Link href="./Sale">On Sale</Link>
              </li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex w-96 max-w-[2000px] bg-gray-200 rounded-full items-center">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
            <input
              className="w-full p-1 rounded-full bg-gray-200 outline-none"
              type="search"
              placeholder="Search for products..."
              aria-label="Search"
            />
          </div>

          {/* Icons */}
          <div className="flex gap-x-4 items-center">
            {/* wishlist */}
          <Link href="./Wishlist">
              <CiHeart
                className="w-6 h-6 text-gray-700 hover:text-black"
              />
            </Link>
            {/* Cart Icon */}
            <Link href="./Cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="w-6 h-6 text-gray-700 hover:text-black"
              />
            </Link>

            {/* Account Icon */}
            <Link href={"./signup"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
          
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            </Link>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            className="text-black block md:hidden text-3xl z-50"
            onClick={toggle}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>
    </main>
  );
}

