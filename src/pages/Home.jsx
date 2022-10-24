import React from "react";
import Mockup from "../assets/images/mockup.png";

const HomePage = () => {
  return (
    <div className="mt-[100px] pt-10 md:pt-0" id="home">
      <div className="home__container md:h-[calc(100vh_-_100px)] flex justify-around md:flex-row flex-col items-center px-4 md:px-10">
        <div className="home__info px-4 flex-1 text-center md:text-left">
          <h1 className="home__info--title text-4xl md:text-5xl font-bold">
            Discover <span className="text-[#e65728]">Events</span>
            <br /> All around you
          </h1>
          <p className="home__info--description text-sm md:text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quidem
            necessitatibus voluptatum quibusdam quas dolorum.
          </p>
          <div className="home__info--waitlist mt-3 w-full md:w-[80%]">
            <div className="waitlist__content flex items-center border-2 border-[#e65728] rounded-md p-[2px] h-[50px]">
              <input
                type="text"
                className="px-2 outline-none h-full flex-1"
                placeholder="Email Address.."
              />
              <button className="bg-[#e65728] text-white min-w-[150px] px-4 h-full rounded-md">
                Join waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="home__image flex-1 flex items-center justify-center order-first md:order-none w-full mb-10 md:mb-0">
          <img src={Mockup} alt="" className="w-[160px] md:w-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
