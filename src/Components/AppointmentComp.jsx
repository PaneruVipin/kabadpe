import React, { useState } from "react";
import UseProfRightbx from "./UseProfRightbx";
import "../style/Profile.css";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { userAppoinmentsFetch } from "../apis/kbadpeUser/orders";
import { DateTime } from "luxon";

const AppointmentComp = ({ onSupportClick }) => {
  const [collectorInfo, setCollectorInfo] = useState({});
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["userAppoinments"],
    queryFn: () => userAppoinmentsFetch(),
  });
  const [popupUser, setPopupUser] = useState(false);
  return (
    <>
      <section className="user-prof-grid-comp ">
        <section className="user-prf-update-comp user-prf-update-comp3">
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

                <button onClick={onSupportClick} className="supp-link-btn">
                  <i class="fa-solid fa-hands-holding-child"></i>
                  Support
                </button>
              </div>
            </div>

            <div className="u-p-updt-table-bx">
              <table>
                <tbody>
                  {!appoinments?.error
                    ? appoinments?.map(
                        (
                          {
                            id,
                            appointmentDate,
                            appointmentTimeSlot,
                            Franchise,
                            Arium,
                            KabadCollector,
                            orderStatus,
                          },
                          index
                        ) => (
                          <tr key={id}>
                            <td>
                              <div className="u-p-tb-data">
                                <div className="t-icn">{index + 1}</div>
                                <div className="u-p-tb-info">
                                  <h6>{Franchise?.name}</h6>
                                  <span className="pan-box-nav">
                                    {KabadCollector
                                      ? KabadCollector?.fullname
                                      : "Unassigned"}{" "}
                                    / {Arium?.pincode}{" "}
                                    <NavLink
                                      to="#"
                                      onClick={() => {
                                        setCollectorInfo({
                                          Franchise,
                                          KabadCollector,
                                        });
                                        setPopupUser(true);
                                      }}
                                    >
                                      <i class="fa-solid fa-circle-arrow-right"></i>
                                    </NavLink>{" "}
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td>
                              <div className="u-p-tb-numb-bx">
                                <h6>
                                  {DateTime.fromISO(appointmentDate, {
                                    zone: "utc",
                                  }).toFormat("ccc dd LLL yyyy")}{" "}
                                </h6>
                                <span>
                                  Ap.No.- <NavLink to="#"> 8447532101 </NavLink>
                                </span>
                              </div>
                            </td>

                            <td>
                              <div className=" tb-reshed-btn">Reschedule</div>
                            </td>

                            <td>
                              <div className=" tb-call-btn">Call</div>
                            </td>

                            <td>
                              <div className="complet-bx upcoming-bx">
                                Upcoming
                              </div>
                            </td>
                          </tr>
                        )
                      )
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <UseProfRightbx />
      </section>

      <div
        className={popupUser ? "pop-up-box-10 popupactive" : "pop-up-box-10"}
      >
        <div className="user-info-pop-up-bx">
          {collectorInfo?.KabadCollector ? (
            <>
              {" "}
              <h5>Waste Collector</h5>
              <div className="waste-coll-logo-user-det-flex-bx">
                <div className="left-waste-col-logo">
                  <img src="./images/customImg/user-prf-img.webp" alt="" />
                  <div className="stars-flex-bx">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <div className="tick-check">
                    <i class="fa-solid fa-circle-check"></i>
                  </div>
                </div>

                <div className="user-det-bx">
                  <h6>
                    Name :{" "}
                    <span>{collectorInfo?.KabadCollector?.fullname}</span>
                  </h6>
                  <h6>
                    Phone No. :{" "}
                    <span>{collectorInfo?.KabadCollector?.phoneNumber}</span>
                  </h6>
                  {/* <h6>
                Address :{" "}
                <span>3810 B/20 krishna nagar 110005 near mobile shop</span>{" "}
              </h6> */}
                </div>
              </div>
            </>
          ) : null}

          <h5>Organization</h5>

          <div className="org-logo-info-flex-bx">
            {/* <div className="left-org-logo">
              <img src="./images/customImg/blog-1.jpg" alt="" />
            </div> */}

            {/* <div className="org-info">
              <h6>
                Name : <span>{collectorInfo?.Franchise?.name}</span>
              </h6>
              <h6></h6>
            </div> */}

            {/* <h5>Organization</h5> */}

            <div className="org-logo-info-flex-bx">
              <div className="left-org-logo">
                <img src="./images/customImg/blog-1.jpg" alt="" />
                <div className="tick-check">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
              </div>

              <div className="org-info">
                <h6>
                  Name : <span>{collectorInfo?.Franchise?.name}</span>
                </h6>
                <h6>
                  GST : <span>1100022233344</span>
                </h6>
                <h6></h6>
              </div>
            </div>

            <div
              onClick={() => setPopupUser(false)}
              className="pop-user-info-close"
            >
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentComp;
