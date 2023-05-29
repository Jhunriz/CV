import React from "react";
import image from "../image/talipaapp.png";
import ScholasticImage from "../image/ScholasticRecord.png";

export default function Porfolio() {
  return (
    <div className="flex py-24">
      <div className="px-24 py-10 space-y-10 flex-col items-center justify-center">
        <img
          className="transform hover:scale-105 transition-all duration-100 ease-in-out"
          src={image}
          alt=""
        />
        <p className="text-4xl text-center hover:text-green-300">TalipaAPP</p>
        <p>
          "TalipaApp is a marketplace for fresh produce and goods, inspired by
          the concept of talipapa markets found in residential areas of the
          Philippines."
          <span>
            It all starts with an idea: to address the issue of middlemen
            tripling the prices of commodities sold in the market. Our team set
            out to create an app that connects local farmers and vendors
            directly with consumers, cutting out the middleman and making goods
            more affordable for everyone.
          </span>
        </p>
        <img
          className="transform hover:scale-105 transition-all duration-100 ease-in-out"
          src={ScholasticImage}
          alt=""
        />
      </div>
    </div>
  );
}
