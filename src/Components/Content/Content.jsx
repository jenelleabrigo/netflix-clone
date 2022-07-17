import React from "react";
import "./Content.scss";
import Carousel from "./Carousel/Carousel";
import Section from "./Section/Section";
import Faq from "./Faq/Faq";

import imgTv from "../../Assets/img/img-tv.png";
import vidTv from "../../Assets/video/tv-video.mp4";
import imgDl from "../../Assets/img/img-download.jpg";
import imgKids from "../../Assets/img/img-kids.png";

const sectionContent = [
  { title: "Enjoy on your TV.", desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", img: imgTv, vid: vidTv },
  { title: "Download your shows to watch offline.", desc: "Save your favorites easily and always have something to watch.", img: imgDl, order: "inverse" },
  { title: "Watch everywhere.", desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.", img: "" },
  { title: "Create profiles for kids.", desc: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.", img: imgKids, order: "inverse" },
];

const Content = () => {
  return (
    <div className="l-content">
      <div className="l-content__section">
        <Carousel />
      </div>

      {sectionContent.map((item, index) => {
        return (
          <div className="l-content__section">
            <Section key={index} id={index} order={item.order} title={item.title} desc={item.desc} img={item.img} vid={item.vid} />
          </div>
        );
      })}

      <div className="l-content__section">
        <Faq />
      </div>
    </div>
  );
};

export default Content;
