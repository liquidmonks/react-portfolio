// This component renders the news section of the website. It displays a grid of news articles, each with an image, date, title, and link.

import React from "react";
import NewsImg from "../../assets/news.jpg";

export default function News() {
  return (
    <div className="news py-20 px-2 md:px-5" id="news">
      <div className="text-center mb-20" data-aos="fade-down">
        <h4 className="subtitle text-xl mb-5">News You Can Use</h4>
        <h1 className="section-title">WHAT'S NEW</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {news.map((n, i) => (
          <div key={i} className="w-full" data-aos="fade">
            <div className="news relative rounded overflow-hidden">
              <img src={NewsImg} alt="News" className="w-full" />
              <div className="news-text">
                <div className="absolute left-3 bottom-3">
                  <p className="text-lg font-medium">{n.date}</p>
                  <a href={n.link} className="text-2xl font-bold hover:text-orange-500">
                    {n.title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// An array of news articles is defined outside the component, and each article is represented as an object with a date, title, and link.

const news = [
  {
    date: "Month, Day, Year",
    title: "Android Authority",
    link: "/",
  },
  {
    date: "Month, Day, Year",
    title: "Android Authority",
    link: "/",
  },
  {
    date: "Month, Day, Year",
    title: "Android Authority",
    link: "/",
  },
];
