import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <div className="w-full min-h-[60vh] flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 mt-20">
    {/* Heading and Description */}
    <div className="flex flex-col justify-center items-center gap-4 text-center">
      <h1 className="max-w-xl md:max-w-2xl">
        <span className="text-[#141414] text-3xl md:text-4xl lg:text-4xl font-['Gilroy-Bold'] leading-tight lg:leading-[1.2]">
          Optimize Your Online Experience with Our Advanced{" "}
        </span>
        <span className="text-[#005ae2] text-3xl md:text-4xl lg:text-4xl font-['Gilroy-Bold'] leading-tight lg:leading-[1.2]">
          URL Shortening
        </span>
        <span className="text-[#141414] text-3xl md:text-4xl lg:text-4xl font-['Gilroy-Bold'] leading-tight lg:leading-[1.2]">
          {" "}
          Solution
        </span>
      </h1>
      <p className="max-w-lg md:max-w-xl text-[#141414] text-base md:text-lg lg:text-x font-['Gilroy-Medium'] leading-6 md:leading-7 lg:leading-8">
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs, branded links, and domain customization options to
        reinforce your brand presence and enhance user engagement.
      </p>
    </div>

    {/* Call to Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 md:mt-8">
      <Link
        to="/signup"
        className="w-[142px] h-12 px-6 py-3 bg-[#0065fe] rounded-full flex justify-center items-center"
      >
        <span className="text-white text-base md:text-lg font-['Gilroy-SemiBold']">
          Sign Up
        </span>
      </Link>
      <Link
        to="/src/pages/GetAQuotePage.jsx"
        className="w-[142px] h-12 px-6 py-3 flex justify-center items-center"
      >
        <span className="text-[#0065fe] text-base md:text-lg font-['Gilroy-SemiBold']">
          Learn More{" "}
        </span>
      </Link>
    </div>
  </div>
);
export default Hero;
