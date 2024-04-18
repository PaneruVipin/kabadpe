import React from "react";
import "../style/HeaderStyle.css";
import "../style/BannerSection.css";
import AboutBanner from "../AboutComp/AboutBanner";
import AboutGrid from "../AboutComp/AboutGrid";
import AboutPointsComp from "../AboutComp/AboutPointsComp";
import AboutFrenchies from "../AboutComp/AboutFrenchies";
import FrenchBen from "../AboutComp/FrenchBen";
import Discover from "../HomeComponent/Discover";
import MainFooter from "../HomeComponent/MainFooter";

const About = () => {

  const data = {
    title : 'Frienchies',
    text : 'Frienchies',
  }
  
  return (
    <>
     <AboutBanner  data={data} />
     <AboutGrid />
     <AboutPointsComp />
     <AboutFrenchies />
     <FrenchBen />
     <Discover />
     <MainFooter />
    </>
  );
};

export default About;
