import React from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const inputClass =
    "px-3 py-2 w-full outline-none rounded-md bg-gray-100 text-sm placeholder:text-sm placeholder:font-normal placeholder:text-gray-400";
  return (
    <div id="contact">
      <div className="contact__header text-center py-20">
        <h1 className="contact__header--title text-4xl font-bold">Contact</h1>
        <p className="text-gray-500 text-lg mt-1">Send a message</p>
      </div>
      <div className="contact__container flex flex-col md:flex-row items-start justify-center">
        <div className="contact__details flex-1 px-5 md:px-2 md:pl-20">
          <div className="contact__details--item flex items-center mb-5">
            <FiPhoneCall className="text-2xl text-gray-600" />
            <div className="details__item--content pl-4">
              <h1 className="content__title text-xl font-semibold ">Phone</h1>
              <p className="content__body text-gray-500">+1 234 567 890</p>
            </div>
          </div>
          <div className="contact__details--item flex items-center mb-5">
            <FiMail className="text-2xl text-gray-600" />
            <div className="details__item--content pl-4">
              <h1 className="content__title text-xl font-semibold ">Email</h1>
              <p className="content__body text-gray-500">Connectuz@gmail.com</p>
            </div>
          </div>
          <div className="contact__details--item flex items-center mb-5">
            <FiMapPin className="text-2xl text-gray-600" />
            <div className="details__item--content pl-4">
              <h1 className="content__title text-xl font-semibold ">
                Location
              </h1>
              <p className="content__body text-gray-500">
                Onne Eleme, Rivers State, Nigeria
              </p>
            </div>
          </div>
        </div>
        <div className="contact__form flex-1 px-5 md:px-2 md:pr-20 w-full mt-10 md:mt-0">
          <form action="">
            <div className="form__control flex flex-col mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={inputClass}
                placeholder="John Doe"
                name="name"
                id="name"
              />
            </div>
            <div className="form__control flex flex-col mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={inputClass}
                placeholder="someone@website.com"
                name="email"
                id="email"
              />
            </div>
            <div className="form__control flex flex-col mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                className={inputClass}
                placeholder="What do you want to talk about?"
                rows="5"
              ></textarea>
            </div>
            <div className="form__control">
              <button
                type="submit"
                className="w-[100px] py-2 bg-[#e65728] rounded-md text-white font-semibold outline-none hover:scale-95 transition duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
