import "../style/Profile.css";
import { useQuery } from "@tanstack/react-query";
import { userAppoinmentsFetch } from "../apis/kbadpeUser/orders";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
  console.log("todays appoinments", appoinments);
  const [reshBox, setReshBox] = useState(false);

  return (
    <>
      <section className="user-prf-update-comp">
        <div className="u-p-cont">
          <h5>Appointments</h5>

          <div className="u-p-updt-table-bx">
            <table>
              <tbody>
                {!appoinments?.error ? (
                  appoinments?.length ? (
                    appoinments?.map(
                      (
                        {
                          id,
                          appointmentDate,
                          appointmentTimeSlot,
                          formatedAddress,
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
                                {" "}
                                {DateTime.fromISO(appointmentDate, {
                                  zone: "utc",
                                }).toFormat("ccc dd LLL yyyy")}{" "}
                              </h6>
                              <span>7054387420</span>
                            </div>
                          </td>

                          <td>
                            <div
                              onClick={() => setReshBox(true)}
                              className=" tb-reshed-btn"
                            >
                              Reschedule
                            </div>
                          </td>

                          <td>
                            <div className=" tb-call-btn tb-call-btn5">
                              Call
                            </div>
                          </td>

                          <td>
                            <div className=" tb-call-btn tb-report-btn">
                              Report
                            </div>
                          </td>

                          <td>
                            <div className="complet-bx upcoming-bx">
                              Upcoming
                            </div>
                          </td>
                          <td>
                            <button
                              onClick={onSupportClick}
                              className="supp-link-btn supp-link-btn2"
                            >
                              <i class="fa-solid fa-hands-holding-child"></i>
                              Support
                            </button>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <div>No appoinments today</div>
                  )
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div
        className={popupUser ? "pop-up-box-10 popupactive" : "pop-up-box-10"}
      >
        <div className="user-info-pop-up-bx">
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
                Name : <span>Kunal Vernma</span>
              </h6>
              <h6>
                Phone No. : <span>9087543213</span>
              </h6>

              <div className="verify-det-box">
                <h6>Police verified</h6>

                <h6>Aadhar Verified</h6>
              </div>
            </div>
          </div>

          <h5>Organization</h5>

          <div className="org-logo-info-flex-bx">
            <div className="left-org-logo">
              <img src="./images/customImg/blog-1.jpg" alt="" />
              <div className="tick-check">
                <i class="fa-solid fa-circle-check"></i>
              </div>
            </div>

            <div className="org-info">
              <h6>
                Company : <span>Digital Dezire</span>
              </h6>
              <h6>
                Manager : <span>Sonu Nigam</span>
              </h6>

              <h6 className="gst-text">
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

      <section
        className={
          reshBox ? "reshed-popup-main reshdactive" : "reshed-popup-main"
        }
      >
        <div className="res-popup-box">
          <h6>Reschedule Appointment</h6>

          <div className="reshedule-box res-appint-fild-flex-box reshedactive">
            <form action="#" className="reshed-form reshed-form5">
              <div className="reshed-form-grid reshed-form-grid5">
                <div className="reshd-inpt-bx reshd-inpt-bx3">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="reshed-select-bx reshd-inpt-bx3">
                  <select name="time_slot" id="time_slot">
                    <option value="Choose Time">Choose Time</option>
                    <option value="Choose Time">10:00 to 11:00</option>
                    <option value="Choose Time">12:00 to 1:00</option>
                    <option value="Choose Time">1:00 to 2:00</option>
                    <option value="Choose Time">2:00 to 3:00</option>
                  </select>
                </div>

                <button className="resd-sub-btn navigate-link-btn3">
                  Send Request
                </button>
              </div>

              <p>
                Change date time for reschedule your waste pickup appoint,
                Appoint will be send to Waste Collector for confirmation
              </p>
            </form>
          </div>

          <div onClick={() => setReshBox(false)} className="resh-box-close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfUpdates;
