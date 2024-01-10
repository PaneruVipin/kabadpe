import React from "react";
import Detailslist from "../Components/Detailslist";
import Whatwedo from "../Components/Whatwedo";
import "../style/HeaderStyle.css";
import "../style/BannerSection.css";
import { NavLink } from "react-router-dom";
import ServBanner from "../ServComps/ServBanner";
import ServCompOne from "../ServComps/ServCompOne";
import ServCompTwo from "../ServComps/ServCompTwo";
import ServCompThree from "../ServComps/ServCompThree";

const Service = () => {
  return (
    <>
    <ServBanner />
    <ServCompOne />
    <ServCompTwo />
    <ServCompThree />
    </>
  );
};

export default Service;
