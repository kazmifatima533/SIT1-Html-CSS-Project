import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-800 text-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0 pr-[300px]">
        <a href="#home">Lipstick Shop</a>
        </div>


        {/* Navigation Links */}
        <div className="flex-grow">
          <ul className="flex justify-left space-x-20">
            <li>
              <a
                href="#home"
                className="hover:text-red-200 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:text-red-200 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="hover:text-red-200 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
