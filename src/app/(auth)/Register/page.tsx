
import { Metadata } from "next";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a new account to access all features and content.",
};

const RegisterPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center  px-3">
      <div className="w-[400px] bg-white rounded-2xl shadow-lg p-6 relative">
        <div className="w-full flex items-center justify-between mb-4">
          <button className="text-gray-500 hover:text-gray-700">
            <HiArrowLeft size={22} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <BsThreeDots size={22} />
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-center mb-10">
          Contact Us
        </h2>
        <div className="flex justify-center gap-4 mt-3">
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-105 transition-transform">
            <FaFacebookF size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-sky-400 text-white flex items-center justify-center hover:scale-105 transition-transform">
            <FaTwitter size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-105 transition-transform">
            <FaGooglePlusG size={20} />
          </button>
        </div>
        <div className="flex items-center gap-2 my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="password"
            className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors mt-2"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-sm text-blue-600 mt-3">
          Already a member?{" "}
          <Link href="/Login" className="underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
