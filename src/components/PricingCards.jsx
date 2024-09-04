import React from "react";
import line from "../assets/line.svg";

const PricingCards = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white flex flex-col items-center gap-10">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <img src={line} className="" />
          <h2 className="text-[#141414] text-4xl font-bold leading-tight">
            A <span className="text-[#005ae2]">price perfect</span> for your
            needs.
          </h2>
        </div>
        <p className="max-w-lg text-base font-medium text-[#141414]">
          From catering for your personal, business, event, and social needs,
          you can be assured we have you in mind in our pricing.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col mt-8 md:flex-row justify-center items-center">
        {/* Basic Plan */}
        <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow border border-[#005ae2] flex flex-col items-center gap-6">
          <h3 className="text-2xl font-medium text-[#141414]">Basic</h3>
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-4xl font-bold leading-tight text-[#141414]">
              Free
            </p>
            <p className="text-xl font-medium text-[#141414]">
              Free plan for all users
            </p>
          </div>
          <ul className="flex flex-col items-start gap-4">
            {[
              "Unlimited URL Shortening",
              "Basic Link Analytics",
              "Customizable Short Links",
              "Standard Support",
              "Ad-supported",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#005ae2] rounded-full" />
                <span className="text-sm font-medium text-[#141414]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Plan */}
        <div className="w-full max-w-sm p-8 bg-gradient-to-b from-[#1e3448] to-[#1e3448] rounded-xl shadow flex flex-col items-center gap-6">
          <h3 className="text-2xl font-medium text-white">Professional</h3>
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-4xl font-bold leading-tight text-white">
              $15/month
            </p>
            <p className="text-xl font-medium text-white">
              Ideal for business creators
            </p>
          </div>
          <ul className="flex flex-col items-start gap-4">
            {[
              "Enhanced Link Analytics",
              "Custom Branded Domains",
              "Advanced Link Customization",
              "Priority Support",
              "Ad-free Experience",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-white rounded-full" />
                <span className="text-sm font-medium text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Teams Plan */}
        <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow border border-[#005ae2] flex flex-col items-center gap-6">
          <h3 className="text-2xl font-medium text-[#141414]">Teams</h3>
          <div className="text-center flex flex-col items-center gap-2">
            <p className="text-4xl font-bold leading-tight text-[#141414]">
              $25/month
            </p>
            <p className="text-xl font-medium text-[#141414]">
              Share with up to 10 users
            </p>
          </div>
          <ul className="flex flex-col items-start gap-4">
            {[
              "Team Collaboration",
              "User Roles and Permissions",
              "Enhanced Security",
              "API Access",
              "Dedicated Account Manager",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#005ae2] rounded-full" />
                <span className="text-sm font-medium text-[#141414]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Buttons */}
<div className="flex flex-col mt-4 md:flex-row justify-center items-center gap-3">
  <button className="w-full max-w-xs h-12 px-6 whitespace-nowrap rounded-full border border-[#0065fe] text-[#0065fe] text-base font-semibold">
    Get Custom Pricing
  </button>
  <button className="w-full max-w-xs h-12 px-6 py-3 bg-[#0065fe] rounded-full text-white text-base font-semibold">
    Select Pricing
  </button>
</div>

    </div>
  );
};

export default PricingCards;
