import React from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 shadow-sm left-0 right-0 w-full bg-white z-10">
      <div className="navbar_container h-[100px] flex items-center justify-between px-10">
        <div className="navbar__logo">
          <img src={Logo} alt="" width="200px" />
        </div>
        <div className="navbar__menu">
          <ul className="navbar__menu--lists flex items-center">
            <a
              href="#home"
              className="block px-4 mr-2 py-2 hover:text-[#e65728] transition duration-200"
            >
              <li className="menu__lists--item">Home</li>
            </a>
            <a
              href="#features"
              className="block px-4 mr-2 py-2 hover:text-[#e65728] transition duration-200 "
            >
              <li className="menu__lists--item">Features</li>
            </a>
            <a
              href="#screenshots"
              className="block px-4 mr-2 py-2 hover:text-[#e65728] transition duration-200"
            >
              <li className="menu__lists--item">Screenshot</li>
            </a>
            <a
              href="#contact"
              className="block px-4 mr-2 py-2 hover:text-[#e65728] transition duration-200"
            >
              <li className="menu__lists--item">Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
