import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
// 
const MainOutLet = ({setUserForm,userForm}) => {
  return (
    <>
      <Header setUserForm={setUserForm} userForm={userForm} />
      <div style={{ flex: "1 1 0%" }}>
        <Outlet />
      </div>
      {/*  */}
    </>
  );
};

export default MainOutLet;
