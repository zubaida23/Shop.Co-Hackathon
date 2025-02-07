import { FaPlus } from "react-icons/fa6";
export default function Announcement() {
  return (
    <main className="bg-[#000] w-full h-[38px] flex justify-center items-center relative">
      <div className="flex justify-center items-center">
        <h3 className="text-white text-xs sm:text-sm">Sign Up and get 20% off to your first order. </h3>
        <button className="text-white ml-3 text-xs sm:text-sm">Sign Up Now</button>
      </div>
      <FaPlus className="text-white absolute right-[50px] hidden sm:block" />
    </main>
  );
}
