import React, { useState } from "react";

const URLShortener = () => {
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#1e3448] to-[#1e3448] flex justify-center items-center py-12">
      <div className="absolute origin-top-left rotate-[22.10deg] opacity-70 w-[985.90px] h-[1606.47px] left-[50%] top-[-30%] transform -translate-x-[50%]" />
      <div className="absolute origin-top-left rotate-[-48.82deg] opacity-50 w-[1272.60px] h-[1196.98px] left-[-50%] top-[40%] transform -translate-x-[50%]" />

      {/* Main Form Container */}
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full relative z-10">
        <div className="flex flex-col gap-6">
          <div className="w-full h-14 px-3 py-2 rounded-xl border border-[#3284ff] flex items-center">
            <input
              type="text"
              placeholder="Paste URL here..."
              className="w-full text-[#3284ff] text-xs font-normal leading-[18px] outline-none"
            />
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:gap-3">
            <div className="w-full md:w-1/2 h-12 px-3 py-2 rounded-xl border border-[#3284ff] flex items-center">
              <select
                value={selectedDomain}
                onChange={handleDomainChange}
                className="w-full bg-white text-[#3284ff] text-xs font-normal leading-[18px] outline-none"
              >
                <option value="" disabled>
                  Select Domain
                </option>
                <option value="domain1.com">Scissor.com</option>
                <option value="domain2.com">Enter Domain</option>
                <option value="domain3.com">Add Domain</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 h-12 px-3 py-2 rounded-xl border border-[#3284ff] flex items-center">
              <input
                type="text"
                placeholder="Type Alias here"
                className="w-full text-[#3284ff] text-xs font-normal leading-[18px] outline-none"
              />
            </div>
          </div>
        </div>

        {/* Trim URL Button and Terms */}
        <div className="flex flex-col gap-3 mt-6">
          <button className="w-full px-6 py-3 bg-[#005ae2] rounded-full text-white text-sm font-semibold flex items-center justify-center">
            Trim URL
            <div className="w-4 h-4 ml-2 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-[#005ae2] rounded-full" />
            </div>
          </button>
          <div className="text-center text-sm">
            <span className="text-[#4991ff]">
              By clicking Trim URL, I agree to the{" "}
            </span>
            <span className="text-[#3284ff] font-bold">
              Terms of Service, Privacy Policy
            </span>
            <span className="text-[#4991ff]"> and </span>
            <span className="text-[#3284ff] font-bold">Use of Cookies.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLShortener;
