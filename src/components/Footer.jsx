import React from "react";
import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="footer__container">
        <div className="footer__content--item flex items-center justify-around">
          <div className="footer__logo">
            <img src={Logo} alt="" width="150px" />
          </div>
          <div className="footer__copyright">
            <p className="text-gray-400 text-sm">
              © 2022 Eventmit. All rights reserved.
            </p>
          </div>
          <ul className="footer__links flex items-center">
            <li className="footer__links--item">
              <a href="#" className="text-gray-400 px-3 py-1 text-sm">
                Terms of Service
              </a>
            </li>
            <li className="footer__links--item">
              <a href="#" className="text-gray-400 px-3 py-1 text-sm">
                Privacy Policy
              </a>
            </li>
            <li className="footer__links--item">
              <a href="#" className="text-gray-400 px-3 py-1 text-sm">
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
