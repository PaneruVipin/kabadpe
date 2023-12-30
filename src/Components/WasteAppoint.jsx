import React, { useState } from "react";
import "../style/WasteColect.css";
import { NavLink } from "react-router-dom";
import WasteAppoinmentTable, {
  AddressPopup,
  ScheduleActionPopup,
} from "./WasteAppoinmentTable";

const WasteAppoint = () => {
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  return (
    <>
      <ScheduleActionPopup setPopUp={setPopUp} popUp={popUp} />

      <AddressPopup
        addressPopup={addressPopup}
        setAddressPopup={setAddressPopup}
      />

      <section className="waste-appoint-ment-comp waste-appoint-ment-comp3">
        <div className="right-tab-main-bx right-tab-main-bx3 tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3">
            <div className="waste-appoint-main-bx">
              <p className="tex-line tex-line2 tex-line5">Today Appointments</p>

              <div className="prof-table-main-bx appoint-prof-table-main-bx appoint-prof-table-main-bx3 wasteappoint-prof-table-main-bx wasteappoint-prof-table-main-bx5">
                <WasteAppoinmentTable
                  setAddressPopup={setAddressPopup}
                  setPopUp={setPopUp}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteAppoint;
