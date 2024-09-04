import React from "react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <div className="relative h-80 bg-gradient-to-b from-[#1e3448] to-[#1e3448] flex flex-col items-center py-12 ">
      <div className="w-full max-w-[806px] text-center text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-normal font-['Gilroy-Bold'] leading-tight md:leading-[48px] mt-14 mb-4">
        Revolutionizing Link Optimization
      </div>

      <Link
        to="/src/pages/GetAQuotePage.jsx"
        className="w-full max-w-[200px] cursor-pointer mt-6 h-12 px-6 py-3 bg-[#005ae2] rounded-full flex justify-center items-center"
      >
        <span className="text-white text-base font-normal font-['Gilroy-SemiBold'] leading-3">
          Get Started
        </span>
      </Link>
    </div>
  );
};

export default CTABanner;
