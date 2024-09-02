import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-[#0065fe] text-2xl font-bold">
            SCISSOR
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#my-urls" className="text-[#0065fe] text-lg font-medium">
              My URLs
            </a>
            <a href="#features" className="text-[#141414] text-lg font-medium">
              Features
            </a>
            <a href="#pricing" className="text-[#141414] text-lg font-medium">
              Pricing
            </a>
            <a href="#analytics" className="text-[#141414] text-lg font-medium">
              Analytics
            </a>
            <a href="#faqs" className="text-[#141414] text-lg font-medium">
              FAQs
            </a>
          </nav>

          {/* Desktop Login and Try for Free Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/login"
              className="text-[#0065fe] text-base font-semibold"
            >
              Log in
            </Link>
            <button className="bg-[#0065fe] text-white text-base font-semibold px-6 py-2 rounded-full">
              Try for free
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#0065fe]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-20 backdrop-blur-md">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#my-urls" className="text-[#0065fe] text-lg font-medium">
                My URLs
              </a>
              <a
                href="#features"
                className="text-[#141414] text-lg font-medium"
              >
                Features
              </a>
              <a href="#pricing" className="text-[#141414] text-lg font-medium">
                Pricing
              </a>
              <a
                href="#analytics"
                className="text-[#141414] text-lg font-medium"
              >
                Analytics
              </a>
              <a href="#faqs" className="text-[#141414] text-lg font-medium">
                FAQs
              </a>
              <Link
                to="/login"
                className="text-[#0065fe] text-base font-semibold"
              >
                Log in
              </Link>
              <button className="bg-[#0065fe] text-white text-base font-semibold px-6 py-2 rounded-full w-full">
                Try for free
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
