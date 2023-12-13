import React from "react";
import UserProfSearch from "./UserProfSearch";
import UseProfRightbx from "./UseProfRightbx";
import WasteColectSearch from "./WasteColectSearch";
const WasteDashboard = ({ onclickShowDetailComp , onclickRedirectBuyWasteTable }) => {
  return (
    <>
      <section className="user-prof-grid-comp user-prof-grid-comp2">
        <WasteColectSearch onclickShowDetail={onclickShowDetailComp} onclickRedirectPage={onclickRedirectBuyWasteTable} />
      </section>
    </>
  );
};

export default WasteDashboard;
