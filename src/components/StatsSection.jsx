import React from "react";

const StatsSection = () => (
  <div className="w-full bg-[#f8fafd] mt-22 py-10 px-6 md:px-14 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
    {/* Title Section */}
    <div className="w-full md:w-auto flex justify-center md:justify-start items-center">
      <div className="text-center md:text-left">
        <span className="text-[#141414] text-3xl md:text-4xl font-['Gilroy-Bold']">
          One Stop. Four{" "}
        </span>
        <span className="text-[#005ae2] text-3xl md:text-4xl font-['Gilroy-Bold']">
          Possibilities
        </span>
        <span className="text-[#141414] text-3xl md:text-4xl font-['Gilroy-Bold']">
          .
        </span>
      </div>
    </div>

    {/* Stats Section */}
    <div className="w-full flex flex-wrap justify-center md:justify-end items-center gap-10 md:gap-18">
      {/* Stat 1 */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="text-[#141414] text-2xl md:text-3xl font-['Gilroy-SemiBold']">
          3M
        </div>
        <div className="text-[#141414] text-sm md:text-base font-['Gilroy-Medium']">
          Active users
        </div>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="text-[#141414] text-2xl md:text-3xl font-['Gilroy-SemiBold']">
          60M
        </div>
        <div className="text-[#141414] text-sm md:text-base font-['Gilroy-Medium'] text-center md:text-left">
          Links & QR codes created
        </div>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="text-[#141414] text-2xl md:text-3xl font-['Gilroy-SemiBold']">
          1B
        </div>
        <div className="text-[#141414] text-sm md:text-base font-['Gilroy-Medium'] text-center md:text-left">
          Clicked & Scanned connections
        </div>
      </div>

      {/* Stat 4 */}
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="text-[#141414] text-2xl md:text-3xl font-['Gilroy-SemiBold']">
          300k
        </div>
        <div className="text-[#141414] text-sm md:text-base font-['Gilroy-Medium']">
          App Integrations
        </div>
      </div>
    </div>
  </div>
);

export default StatsSection;
