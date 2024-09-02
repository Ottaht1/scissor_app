import React from "react";

const FormComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f4f8] mt-28 mb-20 mx-96 px-10 py-4">
      <div className="w-full max-w-4xl bg-[#cbd6e0] rounded-lg p-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-col flex-grow">
            <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
              First Name*
            </label>
            <input
              type="text"
              className="w-full bg-white rounded-xl shadow-inner border border-[#cbd6e0] h-12 px-4"
            />
          </div>
          <div className="flex flex-col flex-grow">
            <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
              Last Name*
            </label>
            <input
              type="text"
              className="w-full bg-white rounded-xl shadow-inner border border-[#cbd6e0] h-12 px-4"
            />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
            Company Name*
          </label>
          <input
            type="text"
            className="w-full bg-white rounded-xl shadow-inner border border-[#cbd6e0] h-12 px-4"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
            Business Email Address*
          </label>
          <input
            type="email"
            className="w-full bg-white rounded-xl shadow-inner border border-[#cbd6e0] h-12 px-4"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
            Phone Number*
          </label>
          <input
            type="tel"
            className="w-full bg-white rounded-xl shadow-inner border border-[#cbd6e0] h-12 px-4"
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
            Job Title*
          </label>
          <div className="relative">
            <select className="w-full bg-white rounded-xl border border-[#cbd6e0] h-12 px-4 appearance-none">
              <option>Please Select</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#5c6f7f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
            Company Size*
          </label>
          <div className="relative">
            <select className="w-full bg-white rounded-xl border border-[#cbd6e0] h-12 px-4 appearance-none">
              <option>Please Select</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#5c6f7f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
            Primary Use Case*
          </label>
          <div className="relative">
            <select className="w-full bg-white rounded-xl border border-[#cbd6e0] h-12 px-4 appearance-none">
              <option>Please Select</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#5c6f7f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-[#112232] text-base font-normal font-['Gilroy-Medium'] mb-1">
            Country*
          </label>
          <div className="relative">
            <select className="w-full bg-white rounded-xl border border-[#cbd6e0] h-12 px-4 appearance-none">
              <option>Please Select</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#5c6f7f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="text-[#5c6f7f] text-xs font-normal mb-6">
          Scissor requires the contact information you provide in order to reach
          out to you regarding our products and services. You have the option to
          unsubscribe from these communications whenever you wish. To learn more
          about how to unsubscribe, our privacy practices, and our dedication to
          safeguarding your privacy, please refer to our Privacy Policy.
        </div>
        <button className="w-full bg-[#005ae2] text-white rounded-full py-3 text-sm font-semibold">
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
