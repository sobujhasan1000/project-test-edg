import React, { useState } from "react";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="bg-gray-400">
      <nav className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <a href="/"><img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png" alt="Logo" className="h-8 w-auto" /></a>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleNav}
            className="text-[#EE366E] hover:text-white focus:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isNavOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:items-center">
          <a
            href="/"
            className="text-[#EE366E] hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </a>
          <a
            href="about"
            className="text-[#EE366E] hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            About
          </a>
          <a
            href="contact-us"
            className="text-[#EE366E] hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </a>
        </div>
      </nav>
      {isNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-[#EE366E] hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="about"
              className="text-[#EE366E] hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="contact-us"
              className="text-[#EE366E] hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
