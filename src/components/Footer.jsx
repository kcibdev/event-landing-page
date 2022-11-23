import React from "react";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="footer__container">
        <div className="footer__content--item flex flex-col md:flex-row items-center justify-around">
          <div className="footer__logo">
            <img src={Logo} alt="" className="w-[200px] md:w-[150px]" />
          </div>
          <div className="footer__copyright mt-5 md:mt-0">
            <p className="text-gray-400 text-sm">
              © 2022 Connectuz All rights reserved.
            </p>
          </div>
          <ul className="footer__links flex items-center mt-5 md:mt-0">
            <li className="footer__links--item">
              <a href="#home" className="text-gray-400 px-3 py-1 text-sm">
                Terms of Service
              </a>
            </li>
            <li className="footer__links--item">
              <a href="#home" className="text-gray-400 px-3 py-1 text-sm">
                Privacy Policy
              </a>
            </li>
            <li className="footer__links--item">
              <a href="#home" className="text-gray-400 px-3 py-1 text-sm">
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
