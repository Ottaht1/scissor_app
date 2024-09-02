import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col mt-24 justify-center items-center min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-8 mb-8">
          <div className="text-center text-[#5c6f7f] text-sm font-normal font-['Gilroy-Medium']">
            Sign up with:
          </div>
          <div className="flex gap-4">
            <div className="bg-[#005ae2] text-white rounded-md px-4 py-2 flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="text-base font-normal font-['Gilroy-Medium']">
                Google
              </div>
            </div>
            <div className="bg-[#005ae2] text-white rounded-md px-4 py-2 flex items-center gap-2">
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
        <div className="space-y-4 mb-6">
          <div className="relative">
            <label className="absolute top-0 left-0 text-[#a0b1c0] text-base font-normal font-['Gilroy-Medium']">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-base text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#005ae2]"
            />
          </div>
          <div className="relative">
            <label className="absolute top-0 left-0 text-[#a0b1c0] text-base font-normal font-['Gilroy-Medium']">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
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
          <div className="relative">
            <label className="absolute top-0 left-0 text-[#a0b1c0] text-base font-normal font-['Gilroy-Medium']">
              Retype Password
            </label>
            <input
              type="password"
              placeholder="Retype Password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-base text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#005ae2]"
            />
          </div>
          <div className="text-[#a0b1c0] text-xs font-normal font-['Gilroy-Medium'] mt-1">
            6 or more characters, one number, one uppercase & one lower case.
          </div>
        </div>
        <button className="w-full bg-[#005ae2] text-white rounded-full py-2 text-sm font-normal font-['Gilroy-SemiBold'] mb-6">
          Sign up with Email
        </button>
        <div className="text-center mb-6">
          <div className="text-[#5c6f7f] text-sm font-normal font-['Gilroy-Medium']">
            Already have an account?{" "}
            <a href="/login" className="text-[#005ae2]">
              Log in
            </a>
          </div>
        </div>
        <div className="text-center text-[#a0b1c0] text-xs font-normal font-['Gilroy-Medium']">
          By signing up, you agree to{" "}
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
};

export default SignUpPage;
