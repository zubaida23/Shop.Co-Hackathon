import "./globals.css";
import Footer from "@/components/Footer";
import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import localFont from "next/font/local";

// Font import using next/font
const geistFont = localFont({
  src: "../public/fonts/GeistMonoVF.woff2",
  display: "swap",
});

export const metadata = {
  title: 'Hackathon Project',
  description: 'Your Description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geistFont.className}>
        <CartProvider>
          <WishlistProvider>
            <Announcement />
            <Header />
            {children}
          </WishlistProvider>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
