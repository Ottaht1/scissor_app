import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="absolute left-[145.09px] top-[12px] flex justify-start items-center gap-[140px]">
    {/* Logo */}
    <div className="p-2 flex justify-start items-start gap-2">
      <Link to="/" className="text-[#0065fe] text-2xl font-['Gilroy-Bold']">
        SCISSOR
      </Link>
    </div>

    {/* Navigation */}
    <nav className="flex justify-start items-center gap-10">
      <a
        href="#my-urls"
        className="text-[#0065fe] text-lg font-['Gilroy-Medium']"
      >
        My URLs
      </a>
      <a
        href="#features"
        className="text-[#141414] text-lg font-['Gilroy-Medium']"
      >
        Features
      </a>
      <a
        href="#pricing"
        className="text-[#141414] text-lg font-['Gilroy-Medium']"
      >
        Pricing
      </a>
      <a
        href="#analytics"
        className="text-[#141414] text-lg font-['Gilroy-Medium']"
      >
        Analytics
      </a>
      <a href="#faqs" className="text-[#141414] text-lg font-['Gilroy-Medium']">
        FAQs
      </a>
    </nav>

    {/* Login and Try for Free Button */}
    <div className="flex justify-start items-center gap-6">
      <Link
        to="/login"
        className="text-[#0065fe] text-base font-['Gilroy-SemiBold']"
      >
        Log in
      </Link>
      <button className="w-[142px] h-11 px-6 py-3 bg-[#0065fe] rounded-full flex justify-center items-center">
        <span className="text-white text-base font-['Gilroy-SemiBold']">
          Try for free
        </span>
      </button>
    </div>
  </header>
);

export default Header;
