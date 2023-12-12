import React from "react";
import AboutDet from "../Components/AboutDet";
import Aboutoffer from "../Components/Aboutoffer";
import "../style/HeaderStyle.css";
import "../style/BannerSection.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <AboutDet />
      <Aboutoffer />
    </>
  );
};

export default About;
