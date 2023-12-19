import React from "react";
import UserProfSearch from "./UserProfSearch";
import UseProfRightbx from "./UseProfRightbx";
import WasteColectSearch from "./WasteColectSearch";
const WasteDashboard = ({ onclickShowDetailComp , onclickRedirectBuyWasteTable ,onclickRedirectGuestBuyWaste }) => {
  return (
    <>
      <section className="user-prof-grid-comp user-prof-grid-comp2">
        <WasteColectSearch onclickRedirectNewPage={onclickRedirectGuestBuyWaste} onclickShowDetail={onclickShowDetailComp} onclickRedirectPage={onclickRedirectBuyWasteTable} />
      </section>
    </>
  );
};

export default WasteDashboard;
