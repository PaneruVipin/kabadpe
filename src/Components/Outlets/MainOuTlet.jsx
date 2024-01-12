import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
// 
const MainOutLet = (props) => {
  return (
    <>
      <Header />
      <div style={{ flex: "1 1 0%" }}>
        <Outlet />
      </div>
      {/*  */}
    </>
  );
};

export default MainOutLet;
