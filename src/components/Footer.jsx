import React from "react";
import logo2 from "../assets/logo2.svg";

const Footer = () => {
  return (
    <div className="w-full bg-white  px-24 mt-14">
      <div className="container mx-auto px-6 flex flex-wrap justify-between">
        {/* Scissor Logo and Social Links */}
        <div className="flex flex-col items-start gap-4 w-full md:w-1/5 mb-6 md:mb-0">
          <div className="text-2xl font-bold text-[#141414]">
            <img src={logo2} />
          </div>
          <div className="flex gap-4">
            <div className="w-6 h-6 bg-gray-300 rounded-full" /> {/* Twitter */}
            <div className="w-6 h-6 bg-gray-300 rounded-full" />{" "}
            {/* Instagram */}
            <div className="w-6 h-6 bg-gray-300 rounded-full" />{" "}
            {/* LinkedIn */}
            <div className="w-6 h-6 bg-gray-300 rounded-full" />{" "}
            {/* Facebook */}
          </div>
        </div>

        {/* Why Scissor and Resources */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold text-[#071827]">
              Why Scissor ?
            </div>
            <div className="text-base text-[#112232]">
              Scissor 101
              <br />
              Integrations & API
              <br />
              Pricing
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="text-base font-bold text-[#071827]">Resources</div>
            <div className="text-base text-[#112232]">
              Blog
              <br />
              Resource Library
              <br />
              Developers
              <br />
              App Connectors
              <br />
              Support
              <br />
              Trust Center
              <br />
              Browser Extension
              <br />
              Mobile App
            </div>
          </div>
        </div>

        {/* Solutions and Features */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold text-[#071827]">Solutions</div>
            <div className="text-base text-[#112232]">
              Social Media
              <br />
              Digital Marketing
              <br />
              Customer Service
              <br />
              For Developers
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="text-base font-bold text-[#071827]">Features</div>
            <div className="text-base text-[#112232]">
              Branded Links
              <br />
              Mobile Links
              <br />
              Campaign
              <br />
              Management &<br />
              Analytics
              <br />
              QR Code generation
            </div>
          </div>
        </div>

        {/* Products and Legal */}
        <div className="w-full md:w-1/5 mb-6 md:mb-0">
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold text-[#071827]">Products</div>
            <div className="text-base text-[#112232]">
              Link Management
              <br />
              QR Codes
              <br />
              Link-in-bio
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div className="text-base font-bold text-[#071827]">Legal</div>
            <div className="text-base text-[#112232]">
              Privacy Policy
              <br />
              Cookie Policy
              <br />
              Terms of Service
              <br />
              Acceptable Use Policy
              <br />
              Code of Conduct
            </div>
          </div>
        </div>

        {/* Company */}
        <div className="w-full md:w-1/5">
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold text-[#071827]">Company</div>
            <div className="text-base text-[#112232]">
              About Scissor
              <br />
              Careers
              <br />
              Partners
              <br />
              Press
              <br />
              Contact
              <br />
              Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 flex justify-end gap-6 mt-10 text-sm text-[#112232]">
        <div>Term of Service</div>
        <div>Security</div>
        <div>Scissor 2023</div>
      </div>
    </div>
  );
};

export default Footer;
