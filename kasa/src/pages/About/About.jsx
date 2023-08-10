import React from "react";
import { Banner } from "../../components/Banner/Banner.jsx";
import DropDown from "../../components/DropDown/DropDown.jsx";
import "./About.scss";

function About() {
  return (
    <>
      <div className="banner__about">
        <Banner />
      </div>

      <div className="about__dropdown__container">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
    </>
  );
}

export default About;
