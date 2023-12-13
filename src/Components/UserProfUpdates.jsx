import "../style/Profile.css";
import { useQuery } from "@tanstack/react-query";
import { userAppoinmentsFetch } from "../apis/kbadpeUser/appoinment";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReviewPopup from "./ReviewPopup";
import ReportPopup from "./ReportPopup";
import AppointmentRows from "./AppoinmentRows";
const UserProfUpdates = ({ onSupportClick }) => {
  const [popupUser, setPopupUser] = useState(false);
  const [collectorInfo, setCollectorInfo] = useState({});
  const from = new Date();
  from.setHours(0, 0, 0, 0);
  const to = new Date(from);
  to.setDate(to.getDate() + 1);
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["userTodayAppoinments"],
    queryFn: () => userAppoinmentsFetch({ from, to }),
  });
  const [reshBox, setReshBox] = useState(false);
  const [revBox, setRevBox] = useState(false);
  const [repBox, setRepBox] = useState(false);
  return (
    <>
      <section className="user-prf-update-comp">
        <div className="u-p-cont">
          <h5>Appointments</h5>
          <AppointmentRows
            onSupportClick={onSupportClick}
            appoinments={appoinments}
          />
        </div>
      </section>
    </>
  );
};

export default UserProfUpdates;
