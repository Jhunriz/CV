import React from "react";
import appcon from "../image/appcon.jpg";
import speaker from "../image/speaker.jpg";
import hagilap from "../image/hagilap.jpg";
import assem from "../image/assem.jpg";
import { Slide } from "react-awesome-reveal";

export default function About() {
  return (
    <>
      <div className="py-10 sm:py-20 md:py-40 lg:py-60 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            <Slide>
              <div className="space-y-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
                <p>The Millennial Speaker 2019</p>
                <span>
                  1st Runner up in the Competition at University of Caloocan
                  City
                </span>
                <img className="h-1/2 w-full rounded-lg" src={speaker} alt="" />
              </div>
            </Slide>
          </div>
          <div className="space-y-10">
            <Slide>
              <div className="space-y-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
                <p>Pc assembly/disassembly Competition</p>
                <span>
                  3rd Placer in the Competition at University of Caloocan City
                </span>
                <img className="h-1/2 w-full rounded-lg" src={assem} alt="" />
              </div>
            </Slide>
          </div>
          <div className="space-y-10">
            <Slide>
              <div className="space-y-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
                <p>AppCon Otis Japan</p>
                <span>Appcon Competition 2022</span>
                <img className="h-1/2 w-full rounded-lg" src={appcon} alt="" />
              </div>
            </Slide>
          </div>
          <div className="space-y-10">
            <Slide>
              <div className="space-y-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
                <p>Team Hagilap CKC NETWORK INC AWARD</p>
                <span>Appcon Competition 2022</span>
                <img className="h-1/2 w-full rounded-lg" src={hagilap} alt="" />
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
}
