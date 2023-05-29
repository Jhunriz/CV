import React from "react";
import image from "../image/talipaapp.png";
import { Slide } from "react-awesome-reveal";
import ScholasticImage from "../image/ScholasticRecord.png";

export default function Porfolio() {
  return (
    <Slide direction="left" duration={1000} delay={300}>
      <div className="flex flex-col md:flex-row py-24">
        <div className="px-6 md:px-24 py-10 space-y-10 flex-col items-center justify-center">
          <img
            className="transform hover:scale-105 transition-all duration-100 ease-in-out"
            src={image}
            alt=""
          />
          <p className="text-4xl text-center hover:text-green-300">TalipaAPP</p>
          <p className="text-center">
            "TalipaApp is a marketplace for fresh produce and goods, inspired by
            the concept of talipapa markets found in residential areas of the
            Philippines."
            <span>
              It all starts with an idea: to address the issue of middlemen
              tripling the prices of commodities sold in the market. Our team
              set out to create an app that connects local farmers and vendors
              directly with consumers, cutting out the middleman and making
              goods more affordable for everyone.
            </span>
          </p>
        </div>
        <div className="px-6 md:px-24 py-10 space-y-10 flex-col items-center justify-center">
          <img
            className="transform hover:scale-105 transition-all duration-100 ease-in-out"
            src={ScholasticImage}
            alt=""
          />
          <p className="text-4xl text-center hover:text-orange-500">
            Scholastic Record Management
          </p>
          <p className="text-center">
            Scholastic Record Management is a browser-based software that
            provides high function managing, compilation, and feasible way of
            recording data, it's also allowing authorized users to fully capable
            to manage data soft and hard copies that are going to be filtered
            and sorted by them.
            <br />
            <span>
              To develop Scholastic Record Management, a browser-based data
              entry management system where admin can store and organize the
              data and all its options. It can produce soft and hardcopies of
              the information by the admin only in the span of 7 months using
              Visual Studio Code and MySql.
            </span>
          </p>
        </div>
      </div>
    </Slide>
  );
}
