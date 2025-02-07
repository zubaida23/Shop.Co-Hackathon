import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      {/* Newsletter Section */}
      <div className="bg-black text-white text-center py-6 px-4">
        <h2 className="text-2xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <form className="flex flex-col md:flex-row justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 w-full md:w-80 rounded-md border-none focus:ring-2 focus:ring-gray-300"
          />
          <button
            type="submit"
            className="bg-white text-black font-bold px-6 py-2 rounded-md hover:bg-gray-200"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-10 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Brand Information */}
          <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">SHOP.CO</h3>
            <p className="text-gray-600 mt-2">
              We have clothes that suit your style and which you&lsquo;re proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-700 hover:text-black">
                <Image
                  src={"/images/footer/twitter.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="#" className="text-gray-700 hover:text-black">
                <Image
                  src={"/images/footer/facebook.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="#" className="text-gray-700 hover:text-black">
                <Image
                  src={"/images/footer/instagram.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="#" className="text-gray-700 hover:text-black">
                <Image
                  src={"/images/footer/github.svg"}
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-2/3">
            <div>
              <h4 className="font-bold">Company</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Help</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">FAQ</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Resources</h4>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-black">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    YouTube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm text-gray-600 px-4 md:px-6 lg:px-10">
          <p className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex space-x-5 justify-center md:justify-end w-full md:w-auto">
            <img src="/images/footer/visa.svg" alt="Visa" className="h-6" />
            <img src="/images/footer/badge.svg" alt="badge" className="h-6" />
            <img src="/images/footer/paypal.svg" alt="PayPal" className="h-6" />
            <img src="/images/footer/apple.svg" alt="Apple Pay" className="h-6" />
            <img src="/images/footer/google.svg" alt="Google Pay" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
