import React from "react";
import UserProfile from "../Components/UserProfile";
import UserProfGridComp from "../Components/UserProfGridComp";

const WastecollectorPage = ({onProfileNav , onClickProfileNavHideShow , onClickProfileNavHide}) => {
  return (
    <>
      <UserProfile onClickProfileNavHide={onClickProfileNavHide} onProfileNav={onProfileNav} onClickProfileNavHideShow={onClickProfileNavHideShow} />
      {/* <UserProfGridComp /> */}
    </>
  );
};

export default WastecollectorPage;
