import React from "react";
import { Link } from "react-router-dom";

const Login = () => (
  <div className="flex flex-col mt-14 justify-center items-center min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
    <div className="w-full max-w-md">
      {/* Login with section */}
      <div className="flex flex-col items-center gap-8 mb-8">
        <div className="text-center text-[#5c6f7f] text-sm font-normal font-['Gilroy-Medium'] leading-tight">
          Log in with:
        </div>
        <div className="flex gap-4">
          <div className="bg-[#005ae2] text-white rounded-md px-4 py-2 flex items-center gap-2">
            {/* Google Icon */}
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="text-base font-normal font-['Gilroy-Medium']">
              Google
            </div>
          </div>
          <div className="bg-[#005ae2] text-white rounded-md px-4 py-2 flex items-center gap-2">
            {/* Apple Icon */}
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="text-base font-normal font-['Gilroy-Medium']">
              Apple
            </div>
          </div>
        </div>
        <div className="text-center text-[#5c6f7f] text-base font-normal font-['Gilroy-Medium']">
          Or
        </div>
      </div>

      {/* Email and Password Input Fields */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <label className="absolute top-0 left-0 text-[#a0b1c0] text-base font-normal font-['Gilroy-Medium']">
            Email address or username
          </label>
          <input
            type="text"
            placeholder="Email address or username"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-base text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#005ae2]"
          />
        </div>
        <div className="relative">
          <label className="absolute top-0 left-0 text-[#a0b1c0] text-base font-normal font-['Gilroy-Medium']">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-base text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#005ae2]"
          />
        </div>
      </div>

      {/* Additional Links and Buttons */}
      <div className="text-right text-[#4991ff] text-sm font-normal font-['Gilroy-Medium'] mb-4">
        Forgot your password?
      </div>
      <button className="w-full bg-[#005ae2] text-white rounded-full py-2 text-sm font-normal font-['Gilroy-SemiBold']">
        Log in
      </button>
      <div className="text-center text-[#5c6f7f] text-sm font-normal font-['Gilroy-Medium'] mt-4">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-[#005ae2]">
          Sign up
        </Link>
      </div>
      <div className="text-center text-[#a0b1c0] text-xs font-normal font-['Gilroy-Medium'] mt-6">
        By signing in with an account, you agree to{" "}
        <a href="#" className="text-[#5c6f7f]">
          Sciccor's Terms of Service
        </a>{" "}
        <span>and</span>{" "}
        <a href="#" className="text-[#5c6f7f]">
          Privacy Policy
        </a>{" "}
        <span>and</span>{" "}
        <a href="#" className="text-[#5c6f7f]">
          Acceptable Use Policy.
        </a>
      </div>
    </div>
  </div>
);

export default Login;
