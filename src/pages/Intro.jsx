import React from "react";
import { CgSearchFound } from "react-icons/cg";
import { MdGroups } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";

const Intro = () => {
  return (
    <div>
      <div className="intro__container flex items-center justify-around mt-10 w-full py-10 bg-[#222f3e]">
        <div className="intro__content--item flex flex-col justify-center items-center">
          <div className="intro__icon--body border-[3px] border-[#e65728] w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-md flex items-center justify-center">
            <CgSearchFound className="intro__icon text-2xl md:text-4xl text-[#e65728]" />
          </div>
          <h1 className="intro__content--title text-center text-white text-sm md:text-lg font-semibold mt-2">
            Find Events around you
          </h1>
        </div>
        <div className="intro__content--item flex flex-col justify-center items-center">
          <div className="intro__icon--body border-[3px] border-[#e65728] w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-md flex items-center justify-center">
            <MdGroups className="intro__icon text-2xl md:text-4xl text-[#e65728]" />
          </div>
          <h1 className="intro__content--title text-center text-sm text-white md:text-lg font-semibold mt-2">
            Organize your own events
          </h1>
        </div>
        <div className="intro__content--item flex flex-col justify-center items-center">
          <div className="intro__icon--body border-[3px] border-[#e65728] w-[50px] md:w-[70px] h-[50px] md:h-[70px] rounded-md flex items-center justify-center">
            <IoTicketOutline className="intro__icon text-2xl md:text-4xl text-[#e65728]" />
          </div>
          <h1 className="intro__content--title text-center text-white text-sm md:text-lg font-semibold mt-2">
            Sell your event tickets
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;
