"use client";
import Image from "next/image";

function Herro() {
  return (
    <div className="w-full bg-[#F2F0F1] py-12 lg:py-20 relative">
      <div className="relative w-full">
        {/* Full-Width Background Image */}
        <Image
          src="/images/hero/Rectangle 2.png"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          priority
        />
        {/* Text Overlay (For Larger Screens) */}
        <div className="absolute top-[10%] left-[10%] text-left text-black px-4 lg:px-8 hidden lg:block">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            FIND CLOTHES
            <br /> THAT MATCHES <br /> YOUR STYLE <br />
          </h1>
          <p className="mt-4 text-sm  text-gray-700 max-w-3xl">
            <span className="inline-block">
              Browse through our diverse range of meticulously crafted garments,
              designed
            </span>
            <br />
            to bring out your individuality and cater to your sense of style.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300">
            Shop Now
          </button>
          <div className=" flex justify-evenly md:justify-between flex-wrap md:flex-nowrap gap-y-4 mt-4 ml-4 space-x-4">
            <div className="border-r pr-2">
              <h1 className="text-2xl md:text-5xl  ">200+</h1>
              <p className="text-xs md:text-[15px] text-gray-500">
                International Brands
              </p>
            </div>
            <div className="border-r pr-5">
              <h1 className="text-2xl md:text-5xl  ">2,000+</h1>
              <p className="text-xs md:text-[15px] text-gray-500">
                High-Quality Products
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-5xl ">30,000+</h1>
              <p className="text-xs md:text-[15px] text-gray-500">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Separate Text Section for Small Screens */}
      <div className="text-center mt-8 lg:hidden px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          FIND CLOTHES
          <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-700">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Herro;
