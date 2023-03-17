// Import the React library and an image file
import React from "react";
import AboutImg from "../../assets/LiquidMonksProfile.png";

// Export a function component called 'About'
export default function About() {
  // Return a JSX element representing the 'About' section
  return (
    <div className="about py-20 px-2 md:px-5" id="about">
      {/* Add a heading to the 'About' section */}
      <div className="text-center mb-20" data-aos="fade-down">
        <h4 className="subtitle text-xl mb-5">Company Profile</h4>
        <h1 className="section-title">ABOUT US</h1>
      </div>
      {/* Add a two-column grid layout to the 'About' section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Add an image to the first column of the grid */}
        <div className="w-full greyscale" data-aos="fade-right">
          <img src={AboutImg} alt="" className="mx-auto" />
        </div>
        {/* Add a heading, paragraph, and link to the second column of the grid */}
        <div className="w-full" data-aos="fade-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="text-orange-500">We are</span> Liquid Monks
          </h1>
          <p className="my-10">
            LiquidMonks is a technology company that specializes in delivering custom software and web applications, as well as providing consulting services and support to businesses of all sizes. With a team of experts and a diverse range of skills and backgrounds, LiquidMonks is dedicated to delivering high-quality solutions that meet the unique needs of each client. The company is passionate about technology and is committed to making a positive impact in the world through its work.
          </p>
          <a href="/" className="btn-primary-lg">
            Click for more...
          </a>
        </div>
      </div>
    </div>
  );
}
