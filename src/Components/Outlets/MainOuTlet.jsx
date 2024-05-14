import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
// 
const MainOutLet = ({setUserForm,userForm , onClickProfileNavHideShow , onProfileNav}) => {
  return (
    <>
      <Header setUserForm={setUserForm} userForm={userForm} onClickProfileNavHideShow={onClickProfileNavHideShow} onProfileNav={onProfileNav} />
      <div style={{ flex: "1 1 0%" }}>
        <Outlet />
      </div>
      {/*  */}
    </>
  );
};

export default MainOutLet;
