import React from "react";
import Logo from "../Assets/Logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-purple-600 h-12 flex items-center justify-between px-4">
      <div className="text-white text-2xl font-bold flex items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
        RS-Anomic
      </div>
      <div className="space-x-4">
        <a href="/Home" className="text-white hover:text-purple-300">
          Home
        </a>
        <a href="/About" className="text-white hover:text-purple-300">
          About
        </a>
        <a href="/Services" className="text-white hover:text-purple-300">
          Services
        </a>
        <a href="/Contact" className="text-white hover:text-purple-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
