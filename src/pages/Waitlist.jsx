import React from "react";
import Mockup from "../assets/images/mockup.png";

const Waitlist = () => {
  return (
    <div className="mt-36">
      <div className="waitlist__container bg-[#e65728] flex flex-col md:flex-row items-center justify-around px-5 md:px-0 py-10">
        <div className="waitlist__details">
          <h1 className="waitlist__details--title text-white text-3xl md:text-4xl font-semibold">
            Connectuz is coming <br /> to your device very soon
          </h1>
          <h1 className="waitlist__details--join text-gray-100 text-xl font-semibold">
            Join the waitlist
          </h1>
          <div className="home__info--waitlist mt-3 md:w-[90%] md:min-w-[400px]">
            <div className="waitlist__content flex items-center border-2 border-white rounded-md p-[2px] h-[50px]">
              <input
                type="text"
                className="px-2 outline-none h-full flex-1 bg-transparent placeholder:text-white"
                placeholder="Email Address.."
              />
              <button className="bg-white h-full rounded-md w-[120px]">
                Join waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="waitlist__image mt-10 md:mt-0">
          <img src={Mockup} alt="" className="" width={150} />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
