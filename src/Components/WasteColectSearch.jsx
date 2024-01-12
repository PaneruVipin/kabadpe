import React, { useState } from "react";
import "../style/Profile.css";
import UserProfCards from "./UserProfCards";
import UserProfUpdates from "./UserProfUpdates";
import "../style/Support.css";
import WasteColectCounter from "./WasteColectCounter";
import WasteAppoint from "./WasteAppoint";
import ActiveToday from "../WasteColectComp/ActiveToday";
import BuyWaste from "../WasteColectComp/BuyWaste";
import Holiday from "../WasteColectComp/Holiday";
import GuestPopup from "../WasteColectComp/GuestPopup";


const WasteColectSearch = ({ onclickShowDetail  , onclickRedirectPage , onclickRedirectNewPage}) => {
  const [notBox, setNotBox] = useState(false);
  const [actToday , setActToday] = useState(false);
  const [buyWaste , setBuyWaste] = useState(false);
  const [holiday , setHoliday] = useState(false);
  const [guest , setGuest] = useState(false)

  return (
    <>
      <section className="use-prf-left-main-bx">
      

        <WasteColectCounter />

        <WasteAppoint />

      { actToday ?  <ActiveToday todayTrue={actToday} onclickClose={() => setActToday(false)} /> : null}

      { buyWaste ? <BuyWaste ByWsteTrue={buyWaste} onclickVisible={() => {setGuest(true)}} onclickCloseBuyWaste={() => setBuyWaste()} onclickRedirectBuywaste={onclickRedirectPage}  /> : null}
      { holiday ?  <Holiday onclickCloseHoliday={() => setHoliday(false)} /> : null}
      {guest ? <GuestPopup verifyClickBtnRedirect={onclickRedirectNewPage}   onclickCloseGuest={() => { onclickCloseBuyWaste() , setGuest(false)}} /> : null}
      </section>
    </>
  );
};

export default WasteColectSearch;
