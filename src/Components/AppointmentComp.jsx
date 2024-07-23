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
import { HiMenuAlt3 } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";

const AppointmentComp = ({ onSupportClick , onProfileNav  , onClickProfileNavHideShow }) => {
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["userAppoinments"],
    queryFn: () => userAppoinmentsFetch(),
  });
  const [notBox, setNotBox] = useState(false);


  return (
    <>

    
    
      <section className="user-prof-grid-comp ">
      <div className="not-fic-flex-bx not-fic-flex-bx2">
        <button
                        onClick={onClickProfileNavHideShow}
                        className="w-menu-bar-btn profile-nav-bar-btn"
                      >
                        {onProfileNav ? (
                          <HiMenuAlt3 className="menu-icon" />
                         ) : ( 
                          <FaArrowLeftLong className="menu-icon arrow-icon" />
                        ) }
                      </button>

              <div className="notif-main-box notif-main-box">
                <div
                  onClick={() => setNotBox(!notBox)}
                  className="bell-icon bell-icon2"
                >
                  <i class="fa-regular fa-bell"></i>
                </div>

                <div className={notBox ? "notif-box notactive" : "notif-box"}>
                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="/images/customImg/team-2.jpg" alt="" />
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="/images/customImg/team-2.jpg" alt="" />
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box left-not-box2">
                      <h6>KG</h6>
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="/images/customImg/team-3.jpg" alt="" />
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box left-not-box2 left-not-box3">
                      <i class="fa-solid fa-house"></i>
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <button className="sell-all-not-btn">
                    See all notifications
                  </button>
                </div>
              </div>
        </div>


        <section className="user-prf-update-comp user-prf-update-comp-rem-spce user-prf-update-comp3">

     


          <div className="u-p-cont">
            <div className="appoint-search-supp-btn-flex-bx">
              <h5>Appointments </h5>

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
