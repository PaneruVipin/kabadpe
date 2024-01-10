import React from "react";
import "../style/HeaderStyle.css";
import "../style/BannerSection.css";
import AboutBanner from "../AboutComp/AboutBanner";
import AboutGrid from "../AboutComp/AboutGrid";
import AboutPointsComp from "../AboutComp/AboutPointsComp";
import AboutFrenchies from "../AboutComp/AboutFrenchies";
import FrenchBen from "../AboutComp/FrenchBen";

const About = () => {
  return (
    <>
     <AboutBanner />
     <AboutGrid />
     <AboutPointsComp />
     <AboutFrenchies />
     <FrenchBen />
    </>
  );
};

export default About;
