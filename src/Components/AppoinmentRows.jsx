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
import { Formik, Form } from "formik";

const AppointmentRows = ({ onSupportClick, appoinments }) => {
  const [collectorInfo, setCollectorInfo] = useState({});
  const [popupUser, setPopupUser] = useState(false);
  const [reshBox, setReshBox] = useState(false);
  const [revBox, setRevBox] = useState(false);
  const [repBox, setRepBox] = useState(false);
  return (
    <>
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
                            Ap.No.-{" "}
                            <NavLink to="#">
                              {" "}
                              {String(id).padStart(6, "0")}{" "}
                            </NavLink>
                          </span>
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
                      {KabadCollector?.phoneNumber ? (
                        <td>
                          <div className=" tb-call-btn tb-call-btn5">Call </div>
                        </td>
                      ) : null}

                      <td>
                        <div className=" tb-call-btn tb-report-btn">Report</div>
                      </td>

                      {orderStatus == "active" ? (
                        <td>
                          <div className="complet-bx upcoming-bx">Upcoming</div>
                        </td>
                      ) : null}
                      {orderStatus == "completed" ? (
                        <td>
                          <div className="complet-bx complet-bx3">
                            Completed
                          </div>
                        </td>
                      ) : null}
                      {orderStatus == "cancelled" ? (
                        <td>
                          <div className="complet-bx complet-bx3 conceld-bx">
                            Cancelled
                          </div>
                        </td>
                      ) : null}
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
              : null}
          </tbody>
        </table>
      </div>

      <UseProfRightbx />
      <UserAppoinmentDetail
        showPopup={popupUser}
        setPopup={setPopupUser}
        collectorInfo={collectorInfo}
      />
      <section
        className={
          reshBox ? "reshed-popup-main reshdactive" : "reshed-popup-main"
        }
      >
        <div className="res-popup-box">
          <h6>Reschedule Appointment</h6>

          <div className="reshedule-box res-appint-fild-flex-box reshedactive">
            <Formik
            //   initialValues={initialValues}
            //   onSubmit={handleSubmit}
            //   validationSchema={validationLoginAdmin}
            >
              {({
                handleBlur,
                handleChange,
                values,
                errors,
                touched,
                ...rest
              }) => {
                return (
                  <Form className="reshed-form reshed-form5">
                    <div className="reshed-form-grid reshed-form-grid5">
                      <div className="reshd-inpt-bx reshd-inpt-bx3">
                        <input
                          type="date"
                          name="appointmentDate"
                          id="date"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="reshed-select-bx reshd-inpt-bx3">
                        <select name="appointmentTimeSlot" id="time_slot">
                          <option value="Choose Time">Choose Time</option>
                          <option value="Choose Time">10:00 to 11:00</option>
                          <option value="Choose Time">12:00 to 1:00</option>
                          <option value="Choose Time">1:00 to 2:00</option>
                          <option value="Choose Time">2:00 to 3:00</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="resd-sub-btn navigate-link-btn3"
                      >
                        Send Request
                      </button>
                    </div>

                    <p>
                      Change date time for reschedule your waste pickup appoint,
                      Appoint will be send to Waste Collector for confirmation
                    </p>
                  </Form>
                );
              }}
            </Formik>
          </div>

          <div onClick={() => setReshBox(false)} className="resh-box-close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
      {revBox ? (
        <ReviewPopup onclickRevPopupClose={() => setRevBox(false)} />
      ) : null}

      {repBox ? <ReportPopup onclickRepClose={() => setRepBox(false)} /> : null}
    </>
  );
};

export default AppointmentRows;
