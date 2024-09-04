import React from "react";
import line from "../assets/line.svg";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex flex-col justify-start items-start gap-4">
    <div className="relative flex items-center">
      <div className="w-14 h-14 bg-[#3284ff]/10 rounded-full flex items-center justify-center">
        <div className="w-6 h-6">{icon}</div>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start gap-2">
      <div className="text-[#141414] text-xl md:text-2xl font-['Gilroy-SemiBold'] leading-7">
        {title}
      </div>
      <div className="text-[#141414] text-sm md:text-base font-['Gilroy-Medium'] leading-normal">
        {description}
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="w-full px-16 py-10 mt-10 flex flex-col md:flex-row items-start gap-12">
    {/* Main container for the text and image */}
    <div className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left gap-4 relative">
      <img
        src={line}
        alt="Line"
        className="absolute left-0 transform -translate-x-4 -translate-y-1/2 md:translate-y-0 top-1/2 md:top-0"
      />
      <div>
        <span className="text-[#141414] text-3xl md:text-4xl font-['Gilroy-Bold'] leading-loose">
          Why choose{" "}
        </span>
        <span className="text-[#005ae2] text-3xl md:text-4xl font-['Gilroy-Bold'] leading-loose">
          Scissors
        </span>
      </div>
      <div className="text-[#141414] text-sm md:text-base font-['Gilroy-Medium'] leading-7 max-w-md">
        Scissors is the hub of everything that has to do with your link
        management. We shorten your URLs, allowing you to create custom ones for
        personal, business, or event usage. Our swift QR code creation,
        management, and usage tracking with advanced analytics is second to
        none.
      </div>
    </div>

    {/* Grid for feature items */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-1/2">
      <FeatureItem
        icon="🔗"
        title="URL Shortening"
        description="Scissor allows you to shorten URLs for your business or events. Shorten your URL at scale with URL redirects."
      />
      <FeatureItem
        icon="✏️"
        title="Custom URLs"
        description="With Scissor, you can create custom URLs of any length! A solution perfect for social media and businesses."
      />
      <FeatureItem
        icon="📱"
        title="QR Codes"
        description="Generate QR codes for your business or events. Bring your audience and customers to your doorstep with this scan-and-go solution."
      />
      <FeatureItem
        icon="📊"
        title="Data Analytics"
        description="Receive data on the usage of your shortened URL, custom URLs, or generated QR codes. Monitor progress with embedded analytics."
      />
    </div>
  </div>
);

export default FeaturesSection;
