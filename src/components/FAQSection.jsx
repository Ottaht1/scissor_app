import React, { useState } from "react";
import line from "../assets/line.svg";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does URL shortening work?",
      answer:
        "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
    },
    {
      question:
        "Is it necessary to create an account to use the URL shortening service?",
      answer:
        "No, you can use the URL shortening service without creating an account, but creating an account may offer additional features and benefits.",
    },
    {
      question: "Are the shortened links permanent? Will they expire?",
      answer:
        "Shortened links are generally permanent, but they may expire if the service provider sets an expiration policy or if the account associated with the links is deleted.",
    },
    {
      question:
        "Are there any limitations on the number of URLs I can shorten?",
      answer:
        "Some services may have limitations on the number of URLs you can shorten, while others may offer unlimited URL shortening.",
    },
    {
      question:
        "Can I customize the shortened URLs to reflect my brand or content?",
      answer:
        "Yes, many URL shortening services offer customization options for branded or personalized links.",
    },
    {
      question: "Can I track the performance of my shortened URLs?",
      answer:
        "Yes, most URL shortening services provide analytics and tracking features to monitor the performance of your links.",
    },
    {
      question:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
      answer:
        "Reputable URL shortening services implement security measures to protect against spam and malicious activity, but it's important to choose a service with strong security features.",
    },
    {
      question: "What is a QR code and what can it do?",
      answer:
        "A QR code is a type of matrix barcode that can be scanned by a QR code reader or smartphone to quickly access information such as a URL, contact details, or product information.",
    },
    {
      question:
        "Is there an API available for integrating the URL shortening service into my own applications or websites?",
      answer:
        "Yes, many URL shortening services provide APIs for integration into applications and websites, allowing for automated link creation and management.",
    },
  ];

  return (
    <div className="relative bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute origin-top-left rotate-[110.54deg] opacity-80 w-[804.53px] h-[596.14px] left-[50%] top-[15%] transform -translate-x-[50%]" />
      <div className="absolute origin-top-left rotate-[-7.59deg] opacity-70 w-[804.53px] h-[596.14px] left-[50%] top-[75%] transform -translate-x-[50%]" />

      <div className="relative max-w-screen-lg mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <img src={line} className=" h-auto" alt="line" />
          <h1 className="text-[#141414] text-3xl sm:text-4xl font-bold leading-tight text-center">
            FAQs
          </h1>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-4 mt-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <p className="text-[#141414] text-xl font-medium leading-loose">
                  {item.question}
                </p>
                <span className="text-[#1e3448] text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-[#141414] text-base font-medium leading-loose mt-2">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
