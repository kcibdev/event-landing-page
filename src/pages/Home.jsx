import React from "react";
import Mockup from "../assets/images/mockup.png";

const HomePage = () => {
  return (
    <div className="mt-[100px]" id="home">
      <div className="home__container h-[calc(100vh_-_100px)] flex justify-around items-center px-10">
        <div className="home__info px-4 flex-1">
          <h1 className="home__info--title text-5xl font-bold">
            Discover <span className="text-[#e65728]">Events</span>
            <br /> All around you
          </h1>
          <p className="home__info--description text-lg mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quidem
            necessitatibus voluptatum quibusdam quas dolorum.
          </p>
          <div className="home__info--waitlist mt-3 w-[80%]">
            <div className="waitlist__content flex items-center border-2 border-[#e65728] rounded-md p-[2px] h-[50px]">
              <input
                type="text"
                className="px-2 outline-none h-full flex-1"
                placeholder="Email Address.."
              />
              <button className="bg-[#e65728] text-white px-4 h-full rounded-md">
                Join waitlist
              </button>
            </div>
          </div>
        </div>
        <div className="home__image flex-1 w-full">
          <img src={Mockup} alt="" width="250" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
