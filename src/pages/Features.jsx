import React from "react";
import Mockup from "../assets/images/mockup.png";

const Features = () => {
  return (
    <div id="features">
      <div className="features__container">
        <div className="features__header text-center pb-10 pt-20">
          <h1 className="features__header--title text-4xl font-bold">
            Features
          </h1>
        </div>
        <div className="features__content mt-10 flex flex-col md:flex-row items-center md:h-[calc(100vh_-_200px)]">
          <div className="features__content--image md:flex-1 relative">
            <div className="content__bg h-64 md:h-80 w-64 md:w-96 rounded-r-xl bg-[#e65728]"></div>
            <img
              src={Mockup}
              alt=""
              className="absolute md:left-20 -top-10 bg-white w-[160px] md:w-[250px]"
            />
          </div>
          <div className="features__content--details flex-1 px-7 md:px-0 mt-20 md:mt-0 md:pr-10">
            <h1 className="content__details--title text-3xl font-bold">
              Lorem ipsum dolor sit amet co
            </h1>
            <ul className="content__details--body">
              <li className="body__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quod, quia, voluptates quae voluptatibu
                dolorum.
              </li>
              <li className="body__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quod, quia, voluptates quae voluptatibus
                quidem necessitatibus voluptatum quibusdam quas dolorum.
              </li>
            </ul>
          </div>
        </div>
        <div className="features__content mt-36 flex flex-col md:flex-row items-center md:h-[calc(100vh_-_200px)]">
          <div className="features__content--image md:flex-1 relative md:order-last pr-3 md:pr-10">
            <div className="content__bg md:h-96 h-64 md:w-96 w-64 rounded-full bg-[#e65728] float-right"></div>
            <img
              src={Mockup}
              alt=""
              className="absolute md:right-20 -top-10 bg-white w-[160px] md:w-[250px]"
            />
          </div>
          <div className="features__content--details flex-1 px-7 md:px-0 mt-20 md:mt-0 md:pl-10">
            <h1 className="content__details--title text-3xl font-bold">
              Lorem ipsum dolor sit amet co
            </h1>
            <ul className="content__details--body">
              <li className="body__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quod, quia, voluptates quae voluptatibu
                dolorum.
              </li>
              <li className="body__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quod, quia, voluptates quae voluptatibus
                quidem necessitatibus voluptatum quibusdam quas dolorum.
              </li>
            </ul>
          </div>
        </div>
        <div className="features__content mt-36 flex flex-col md:flex-row items-center md:h-[calc(100vh_-_200px)]">
          <div className="features__content--image flex-1md: relative pr-10">
            <div className="content__bg md:h-96 h-64 md:w-96 w-64 rounded-sm bg-[#e65728] rotate-45"></div>
            <img
              src={Mockup}
              alt=""
              className="absolute md:left-20 -top-10 bg-white w-[160px] md:w-[250px]"
            />
          </div>
          <div className="features__content--details flex-1 px-7 md:px-0 mt-20 md:mt-0 md:pr-10">
            <h1 className="content__details--title text-3xl font-bold">
              Lorem ipsum dolor sit amet co
            </h1>
            <ul className="content__details--body">
              <li className="body__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quod, quia, voluptates quae voluptatibu
                dolorum.
              </li>
              <li className="body__item">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptate, quod, quia, voluptates quae voluptatibus
                quidem necessitatibus voluptatum quibusdam quas dolorum.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
