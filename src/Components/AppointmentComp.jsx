import React, { useState } from "react";
import UseProfRightbx from "./UseProfRightbx";
import "../style/Profile.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { userAppoinmentsFetch } from "../apis/kbadpeUser/appoinment";
import { DateTime } from "luxon";
import "../style/WasteColect.css";
import ReviewPopup from "./ReviewPopup";
import ReportPopup from "./ReportPopup";
import UserAppoinmentDetail from "./UserAppoinmentDetail";
import AppointmentRows from "./AppoinmentRows";

const AppointmentComp = ({ onSupportClick }) => {
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["userAppoinments"],
    queryFn: () => userAppoinmentsFetch(),
  });
  return (
    <>
      <section className="user-prof-grid-comp ">
        <section className="user-prf-update-comp user-prf-update-comp-rem-spce user-prf-update-comp3">
          <div className="u-p-cont">
            <div className="appoint-search-supp-btn-flex-bx">
              <h5>My Appointments</h5>

              <div className="search-supp-flex-bx">
                <div className="search-bx-appt">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                  />
                </div>
                <NavLink to="/?s=schedule" className="supp-link-btn">
                  Schedule Pickup
                </NavLink>

                <button onClick={onSupportClick} className="supp-link-btn">
                  <i class="fa-solid fa-hands-holding-child"></i>
                  Support
                </button>
              </div>
            </div>
            <AppointmentRows
              refetchAppoinment={refetch}
              onSupportClick={onSupportClick}
              appoinments={appoinments}
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default AppointmentComp;
