// This component renders the hero section of the website. It includes a banner image with an overlaid mouse animation and a brief mission statement.

import React from "react";
import BannerImg from "../../assets/LiquidMonksBanner.png";

export default function Hero() {
  return (
    <div className="hero">
      <div data-aos="fade-up">
        <h1 className="text-center text-4xl font-bold">Inspiring Next Generation Tech Needs for Business</h1>
        <p className="text-center text-xl font-medium mt-10">Our mission is to make your business better through technology</p>
        <div className="hero-img text-center relative">
          <img src={BannerImg} alt="Logo" />
          <div className="absolute bottom-[2.5rem] left-[50%] translate-x-[-50%]">
            <div className="mouse">
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
