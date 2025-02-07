import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";
import Header from "@/components/Header"
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";


import './globals.css';

export const metadata = {
  title: 'Hackathon Project',
  description: 'Your Description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="/fonts/GeistMonoVF.woff2"
          type="font/woff2"
        />
      </head>
      <body>
      <CartProvider>
        <WishlistProvider>
        <Announcement/>
        <Header/>
        {children}
        </WishlistProvider>
        </CartProvider>
        <Footer/>
      </body>
    </html>
  );
}