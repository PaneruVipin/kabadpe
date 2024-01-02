import "../style/Profile.css";
import { useQuery } from "@tanstack/react-query";
import { userAppoinmentsFetch } from "../apis/kbadpeUser/appoinment";
import React, { useState } from "react";
import AppointmentRows from "./AppoinmentRows";
const UserProfUpdates = ({ onSupportClick }) => {
  const from = new Date();
  from.setHours(0, 0, 0, 0);
  const to = new Date(from);
  to.setDate(to.getDate() + 1);
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["userTodayAppoinments"],
    queryFn: () => userAppoinmentsFetch({ from, to }),
  });
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
