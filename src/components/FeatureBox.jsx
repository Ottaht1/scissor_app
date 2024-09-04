import React from "react";
import Group3 from "../assets/Group 3.svg";
import frame1 from "../assets/frame1.svg";
import vector1 from "../assets/vector1.svg";

const FeatureBox = () => (
  <div className="w-full flex flex-col items-center  px-4 md:px-8 relative">
    <div className="absolute left-[18%] bottom-[28%]">
      <img src={vector1} alt="Vector1" className="w-auto h-80" />
    </div>

    {/* Feature Box */}
    <div className="relative z-10 w-[46%] h-60 max-w-lg md:max-w-2xl bg-[#fefefe]/10 rounded-3xl border border-[#005ae2] backdrop-blur-[212px] p-8 md:p-10 flex flex-col justify-center items-center gap-4 mb-16">
      <div className="flex justify-center items-center gap-5"></div>
      <div>
        <img src={frame1} alt="Frame 1" className="w-auto h-auto" />
      </div>
      <p className="text-center">
        <span className="text-[#141414] text-base md:text-lg font-medium">
          Seamlessly transform your long URLs into{" "}
        </span>
        <span className="text-[#141414] text-base md:text-lg font-bold">
          concise
        </span>
        <span className="text-[#141414] text-base md:text-lg font-medium">
          {" "}
          and{" "}
        </span>
        <span className="text-[#141414] text-base md:text-lg font-bold">
          shareable links
        </span>
        <span className="text-[#141414] text-base md:text-lg font-medium">
          {" "}
          with just a few clicks.
        </span>
      </p>
    </div>

    <div>
      <img src={Group3} alt="Feature Illustration" className="w-full h-auto" />
    </div>
  </div>
);

export default FeatureBox;
