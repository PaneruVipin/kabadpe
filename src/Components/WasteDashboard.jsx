import React from "react";
import UserProfSearch from "./UserProfSearch";
import UseProfRightbx from "./UseProfRightbx";
import WasteColectSearch from "./WasteColectSearch";
const WasteDashboard = ({
  onclickShowDetailComp,
  onclickRedirectBuyWasteTable,
  onclickRedirectGuestBuyWaste,
  setProfBtn,
  buyWasteUserInfo,
  setBuyWasteUserInfo,
}) => {
  return (
    <>
      <section className="user-prof-grid-comp user-prof-grid-comp2">
        <WasteColectSearch
          setProfBtn={setProfBtn}
          buyWasteUserInfo={buyWasteUserInfo}
          setBuyWasteUserInfo={setBuyWasteUserInfo}
          onclickRedirectNewPage={onclickRedirectGuestBuyWaste}
          onclickShowDetail={onclickShowDetailComp}
          onclickRedirectPage={onclickRedirectBuyWasteTable}
        />
      </section>
    </>
  );
};

export default WasteDashboard;
