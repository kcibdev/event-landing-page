import React from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass =
    "block px-2 md:px-4 mr-1 md:mr-2 py-2 text-sm md:text-base hover:text-[#e65728] transition duration-200";
  return (
    <div className="fixed top-0 shadow-sm left-0 right-0 w-full bg-white z-10">
      <div className="navbar_container h-[100px] flex flex-col md:flex-row items-center justify-between px-3 md:px-10 text-center">
        <div className="navbar__logo">
          <img
            src={Logo}
            alt=""
            className="w-[150px] md:w-[200px] mt-2 md:mt-0"
          />
        </div>
        <div className="navbar__menu">
          <ul className="navbar__menu--lists flex items-center">
            <a href="#home" className={linkClass}>
              <li className="menu__lists--item">Home</li>
            </a>
            <a href="#features" className={linkClass}>
              <li className="menu__lists--item">Features</li>
            </a>
            <a href="#screenshots" className={linkClass}>
              <li className="menu__lists--item">Screenshot</li>
            </a>
            <a href="#contact" className={linkClass}>
              <li className="menu__lists--item">Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
