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
import { slotLabels } from "../lib/slots";
import { adminAppoinmentReschedule } from "../apis/admins/appoinments";
import PDFTest from "./PDFtest";
import { appoinmentDefaultSort } from "../lib/appoinment";
import { ScheduleActionPopup } from "./WasteAppoinmentTable";

const AppointmentRows = ({
  onSupportClick,
  appoinments,
  refetchAppoinment,
}) => {
  const [collectorInfo, setCollectorInfo] = useState({});
  const [popupUser, setPopupUser] = useState(false);
  const [reshBox, setReshBox] = useState(false);
  const [revBox, setRevBox] = useState(false);
  const [repBox, setRepBox] = useState(false);
  const [selectedAppoinment, setSelectedAppoinment] = useState({});
  const [popUp, setPopUp] = useState(false);

  const handleReschedule = async (data) => {
    const payload = { ...data, id: selectedAppoinment?.id };
    const res = await adminAppoinmentReschedule(payload);
    if (!res?.error) {
      refetchAppoinment();
      setReshBox(false);
      return;
    }
  };
  return (
    <>
      <div className="u-p-updt-table-bx">
        <table>
          <tbody>
            {!appoinments?.error
              ? appoinments
                  ?.sort(appoinmentDefaultSort)
                  ?.map(
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
                        {orderStatus == "active" ? (
                          <td>
                            <div
                              onClick={() => {
                                setSelectedAppoinment({ id });
                                setReshBox(true);
                              }}
                              className=" tb-reshed-btn"
                            >
                              Reschedule
                            </div>
                          </td>
                        ) : (
                          <td></td>
                        )}
                        {KabadCollector?.phoneNumber &&
                        orderStatus == "active" ? (
                          <td>
                            <div className=" tb-call-btn tb-call-btn5">
                              Call{" "}
                            </div>
                          </td>
                        ) : (
                          <td></td>
                        )}

                        <td>
                          <div className=" tb-call-btn tb-report-btn">
                            Report
                          </div>
                        </td>

                        {orderStatus == "active" ? (
                          KabadCollector?.id ? (
                            <td>
                              <div className="complet-bx upcoming-bx">
                                Assigned
                              </div>
                            </td>
                          ) : (
                            <td>
                              <div className="complet-bx upcoming-bx">
                                Assigning...
                              </div>
                            </td>
                          )
                        ) : null}
                        {orderStatus == "fullfill" ? (
                          <td>
                            <div className="complet-bx complet-bx3">
                              Completed
                            </div>
                          </td>
                        ) : null}
                        {orderStatus == "cancel" ? (
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
                        {orderStatus == "active" ? (
                          <td>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setPopUp(true);
                                setSelectedAppoinment({ id });
                              }}
                              className="complet-bx complet-bx3 conceld-bx"
                            >
                              Cancel
                            </div>
                          </td>
                        ) : null}
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
        onClick={() => setReshBox(false)}
      >
        <div className="res-popup-box" onClick={(e) => e.stopPropagation()}>
          <h6>Reschedule Appointment</h6>

          <div className="reshedule-box res-appint-fild-flex-box reshedactive">
            <Formik
              initialValues={{ appointmentTimeSlot: "", appointmentDate: "" }}
              onSubmit={handleReschedule}
              // validationSchema={validationLoginAdmin}
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
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.appointmentDate}
                          autoComplete="off"
                          required
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div className="reshed-select-bx reshd-inpt-bx3">
                        <select
                          required
                          name="appointmentTimeSlot"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.appointmentTimeSlot}
                          id="time_slot"
                        >
                          <option value="" hidden>
                            Choose Time
                          </option>
                          {Object.keys(slotLabels)?.map((key) => (
                            <option key={key} value={key}>
                              {slotLabels?.[key]}
                            </option>
                          ))}
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
      <ScheduleActionPopup
        refetchAppoinment={refetchAppoinment}
        selectedAppoinment={selectedAppoinment}
        setPopUp={setPopUp}
        popUp={popUp}
        component="user"
      />
    </>
  );
};

export default AppointmentRows;
