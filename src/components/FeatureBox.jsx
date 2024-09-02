import React from "react";

const FeatureBox = () => (
  <div className="w-full flex justify-center  px-4 md:px-8">
    <div className="w-full max-w-lg md:max-w-2xl bg-[#fefefe]/10 rounded-3xl border border-[#005ae2] backdrop-blur-[212px] p-8 md:p-10 flex flex-col justify-center items-center gap-4">
      <div className="flex justify-center items-center gap-5"></div>
      <p className="text-center">
        <span className="text-[#141414] text-base md:text-lg font-['Gilroy-Medium']">
          Seamlessly transform your long URLs into{" "}
        </span>
        <span className="text-[#141414] text-base md:text-lg font-['Gilroy-SemiBold']">
          concise
        </span>
        <span className="text-[#141414] text-base md:text-lg font-['Gilroy-Medium']">
          {" "}
          and{" "}
        </span>
        <span className="text-[#141414] text-base md:text-lg font-['Gilroy-SemiBold']">
          shareable links
        </span>
        <span className="text-[#141414] text-base md:text-lg font-['Gilroy-Medium']">
          {" "}
          with just a few clicks.
        </span>
      </p>
    </div>
  </div>
);

export default FeatureBox;
