import React from "react";
import image from "../image/profile.png";

export default function Content() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-0 md:space-x-14 py-10 md:py-60 mx-4 md:mx-52">
        <img
          className="h-60 md:h-96 hover:opacity-80 rounded transform hover:scale-105 transition-all duration-300 ease-in-out"
          src={image}
          alt=""
        />
        <div>
          <div className="flex flex-col items-start justify-start text-lg">
            <p>Frontend Developer</p>
            <span className="text-4xl">
              <b>Jhunriz Lalata</b>
            </span>
          </div>
          <div className="flex flex-col items-start justify-start">
            <span>Aspiring Front-End Developer</span>
            <span className="text-sm">
              Recent graduate in computer science looking to start my career in
            </span>
            <span className="text-sm">
              software development at a startup like C.G.E.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
