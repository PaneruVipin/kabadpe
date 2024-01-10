import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import MainFooter from "../../HomeComponent/MainFooter";
import Discover from "../../HomeComponent/Discover";
const MainOutLet = (props) => {
  return (
    <>
      <Header />
      <div style={{ flex: "1 1 0%" }}>
        <Outlet />
      </div>
      <Discover />
      <MainFooter />
    </>
  );
};

export default MainOutLet;
