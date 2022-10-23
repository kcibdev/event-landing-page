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
        <div className="features__content mt-10 flex items-center h-[calc(100vh_-_200px)]">
          <div className="features__content--image flex-1 relative">
            <div className="content__bg h-80 w-96 rounded-r-xl bg-[#e65728]"></div>
            <img
              src={Mockup}
              alt=""
              className="absolute left-20 -top-10 bg-white"
              width={250}
            />
          </div>
          <div className="features__content--details flex-1 pr-10">
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
        <div className="features__content mt-36 flex items-center h-[calc(100vh_-_200px)]">
          <div className="features__content--image flex-1 relative order-last pr-10">
            <div className="content__bg h-96 w-96 rounded-full bg-[#e65728] float-right"></div>
            <img
              src={Mockup}
              alt=""
              className="absolute right-20 -top-10 bg-white"
              width={250}
            />
          </div>
          <div className="features__content--details flex-1 pl-10">
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
        <div className="features__content mt-36 flex items-center h-[calc(100vh_-_200px)]">
          <div className="features__content--image flex-1 relative pr-10">
            <div className="content__bg h-96 w-96 rounded-sm bg-[#e65728] rotate-45"></div>
            <img
              src={Mockup}
              alt=""
              className="absolute left-20 -top-10 bg-white"
              width={250}
            />
          </div>
          <div className="features__content--details flex-1 pr-10">
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
