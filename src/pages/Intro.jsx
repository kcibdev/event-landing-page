import React from "react";
import { CgSearchFound } from "react-icons/cg";
import { MdGroups } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";

const Intro = () => {
  return (
    <div>
      <div className="intro__container flex items-center justify-around py-10 bg-[#222f3e]">
        <div className="intro__content--item flex flex-col justify-center items-center">
          <div className="intro__icon--body border-[3px] border-[#e65728] w-[70px] h-[70px] rounded-md flex items-center justify-center">
            <CgSearchFound className="intro__icon text-4xl text-[#e65728]" />
          </div>
          <h1 className="intro__content--title text-white text-lg font-semibold mt-2">
            Find Events around you
          </h1>
        </div>
        <div className="intro__content--item flex flex-col justify-center items-center">
          <div className="intro__icon--body border-[3px] border-[#e65728] w-[70px] h-[70px] rounded-md flex items-center justify-center">
            <MdGroups className="intro__icon text-4xl text-[#e65728]" />
          </div>
          <h1 className="intro__content--title text-white text-lg font-semibold mt-2">
            Organize your own events
          </h1>
        </div>
        <div className="intro__content--item flex flex-col justify-center items-center">
          <div className="intro__icon--body border-[3px] border-[#e65728] w-[70px] h-[70px] rounded-md flex items-center justify-center">
            <IoTicketOutline className="intro__icon text-4xl text-[#e65728]" />
          </div>
          <h1 className="intro__content--title text-white text-lg font-semibold mt-2">
            Sell your event tickets
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
