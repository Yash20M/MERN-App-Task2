import React from "react";
// import Navbar from "../../constant/Navbar/Navbar";
import bg from "../../../images/dot.svg";
import "./Hero.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TfiAngleDoubleDown } from "react-icons/tfi";

const hero = () => {
  return (
    <>
      <div className="hero_container">
        
        <img src={bg} alt="" className="hero_bg" />
        <div className="hero_content">
          <div className="hero_head">
            <h3>Business</h3>
            <h1>#1</h1>
          </div>
          <h1 className="hero_heading">RedPhantom Tech Novetly</h1>
          <div className="hero_content_main">
            <div className="hero_content_main_head">
              <h2>Creating Innovative Future</h2>
              <h2>With Trending Technology</h2>
            </div>
            <div className="hero_content_main_para">
              <p>
                For more than 40 years , RP Transportation has provided safe,
              </p>
              <p>
                reliable, afforfable transportation services to cities,countries
              </p>
              <p>munciplaties, and other jurisdictional entities, as well </p>
              <p>as private corporation,non-profit agencies</p>
              <p>and coummunitiy organisation</p>
            </div>
          </div>
          <h3 className="hero_content_hash">#rptechnovelty</h3>
          <div className="hero_content_more">
            <h2>Read More</h2>
            <span className="arrow">
              <HiOutlineArrowNarrowRight
                color="white"
                fontSize={28}
                className="arrow_icon"
              />
            </span>
          </div>
        </div>

        <div className="hero_tech">
          <TfiAngleDoubleDown
            fontSize={28}
            color="white"
            className="down-arrow"
          />
          <h1>TECHNOLOGY</h1>
        </div>
      </div>
    </>
  );
};

export default hero;
