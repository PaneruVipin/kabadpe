import React from "react";
import Detailslist from "../Components/Detailslist";
import Whatwedo from "../Components/Whatwedo";
import "../style/HeaderStyle.css";
import "../style/BannerSection.css";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <Detailslist />
      <Whatwedo />
    </>
  );
};

export default Service;
