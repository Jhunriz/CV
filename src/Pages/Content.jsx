import React from "react";
import image from "../image/profile.png";
import { Slide } from "react-awesome-reveal";

export default function Content() {
  return (
    <>
      <Slide direction="left" duration={1000} delay={300}>
        <div className="flex flex-col md:flex-row items-center justify-start space-y-4 md:space-y-24 md:space-x-14 py-10 md:py-72 mx-4 md:mx-52">
          <img
            className="h-60 md:h-96 hover:opacity-80 rounded transform hover:scale-105 transition-all duration-300 ease-in-out"
            src={image}
            alt=""
          />
          <div>
            <div className="flex flex-col items-start justify-start text-lg">
              <p>Frontend Developer</p>
              <span className="text-4xl transform hover:scale-105 transition-all duration-100 ease-in-out hover:text-6xl hover:text-blue-600 py-10">
                <b>Jhunriz Lalata</b>
              </span>
            </div>
            <div className="flex flex-col items-start justify-start">
              <span>Aspiring Front-End Developer</span>
              <span className="text-sm">
                Recent graduate in computer science looking to start my career
                in
              </span>
              <span className="text-sm">
                software development at a startup like C.G.E.
              </span>
              <div className="py-7">
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:border-2 hover:border-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Download CV
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hover:border-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
}
