import React from "react";
import UserProfile from "../Components/UserProfile";
import UserProfGridComp from "../Components/UserProfGridComp";

const WastecollectorPage = ({onProfileNav}) => {
  return (
    <>
      <UserProfile onProfileNav={onProfileNav} />
      {/* <UserProfGridComp /> */}
    </>
  );
};

export default WastecollectorPage;
