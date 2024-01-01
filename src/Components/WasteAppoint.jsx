import React, { useState } from "react";
import "../style/WasteColect.css";
import { NavLink } from "react-router-dom";
import WasteAppoinmentTable, {
  AddressPopup,
  ScheduleActionPopup,
} from "./WasteAppoinmentTable";
import { useQuery } from "@tanstack/react-query";
import { workerAppoinmentsFetch } from "../apis/worker/appoinments";

const WasteAppoint = () => {
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  const [selectedAppoinment, setSelectedAppoinment] = useState({});
  const from = new Date();
  from.setHours(0, 0, 0, 0);
  const to = new Date(from);
  to.setDate(to.getDate() + 1);
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["todayWorkerAppoinments"],
    queryFn: () => workerAppoinmentsFetch({ from, to }),
  });
  return (
    <>
      <ScheduleActionPopup setPopUp={setPopUp} popUp={popUp} />

      <AddressPopup
        addressPopup={addressPopup}
        setAddressPopup={setAddressPopup}
        selectedAppoinment={selectedAppoinment}
      />

      <section className="waste-appoint-ment-comp waste-appoint-ment-comp3">
        <div className="right-tab-main-bx right-tab-main-bx3 tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3">
            <div className="waste-appoint-main-bx">
              <p className="tex-line tex-line2 tex-line5">Today Appointments</p>

              <div className="prof-table-main-bx appoint-prof-table-main-bx appoint-prof-table-main-bx3 wasteappoint-prof-table-main-bx wasteappoint-prof-table-main-bx5">
                {!appoinments?.error ? (
                  <WasteAppoinmentTable
                    setAddressPopup={setAddressPopup}
                    setPopUp={setPopUp}
                    setSelectedAppoinment={setSelectedAppoinment}
                    appoinments={appoinments}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteAppoint;
