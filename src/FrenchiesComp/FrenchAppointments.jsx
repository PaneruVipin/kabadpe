import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "../style/Frenchiespanel.css";
import FrenchAppointData from "../FrenchAppointData";
import AppointSlot from "./AppointSlot";
import WorkCapacity from "./WorkCapacity";
import { useQuery } from "@tanstack/react-query";
import { franchiseAppoinmentFetch } from "../apis/franchise/appoinment";
import { slotLabels } from "../lib/slots";
import { DateTime } from "luxon";
import { workers } from "../lib/worker";

const FrenchAppointments = ({ appoinments, component = "franchise" }) => {
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [apntSlot, setApntSlot] = useState(false);
  const [wrkcpcity, setWrkcpcity] = useState(false);
  const [addressdetails, setAddressdetails] = useState({});
  const [appoinmentDetails, setAppoinmentDetails] = useState({});

  const confirmPopupfunc = () => {
    setPopUp(true);
  };

  return (
    <>
      <section
        className={
          addressPopup === true
            ? "cust-add-comp cust-add-comp2 addrssactive"
            : "cust-add-comp cust-add-comp2"
        }
        onClick={() => setAddressPopup(false)}
      >
        <div
          className="cust-add-bx cust-add-bx3"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Customer Address</h3>

          <p>
            {" "}
            <span>Address :</span>
            {addressdetails?.appoinmentAddress} .
          </p>

          <p>
            {" "}
            <span>City :</span> {addressdetails?.city}{" "}
          </p>
          <p>
            {" "}
            <span>Pin Code :</span> {addressdetails?.zipCode}
          </p>

          <button
            onClick={() => setAddressPopup(false)}
            className="cross-btn cross-btn2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </section>

      <section className="french-appoint-comp">
        <div className="tab-main-bx tab-main-bx3 ">
          {/* <h3 className="title">Appointments</h3> */}
          <div className="work-capacity-flex-bx">
            <h3 className="title">Appointments</h3>

            <button
              onClick={() => setWrkcpcity(true)}
              className="work-capacity-btn"
            >
              Work Capacity
            </button>
          </div>
          <div className="waste-appoint-main-bx french-appoint-box">
            <div className="appointment-flex-box">
              <div className="left-appont-bx">
                <p className="tex-line tex-line2"> Appointments</p>

                <div className="A-search-box sel-opt-bx">
                  <select name="select" id="select">
                    <option value="Today">Today</option>
                    <option value="LastWeek">LastWeek</option>
                    <option value="LastMonth">LastMonth</option>
                  </select>
                </div>
              </div>

              <div className="right-search-date-filter-box">
                <div className="A-search-box">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    autoComplete="off"
                    placeholder="Search..."
                  />
                </div>

                <div className="dates-flex-box">
                  <div className="sel-date">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                    />
                  </div>

                  <span>to</span>

                  <div className="sel-date">
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                    />
                  </div>
                </div>

                <div className="search-btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>

            <div className="prof-table-main-bx appoint-prof-table-main-bx appoint-prof-table-main-bx3 wasteappoint-prof-table-main-bx french-appoint-table-box">
              <table>
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Date</th>
                    <th>Time Slots</th>
                    <th>Sub Area</th>
                    <th>Location Type</th>
                    <th>User Id</th>
                    <th>Customer Name</th>
                    <th>Service Type</th>
                    <th>Frequency</th>
                    <th>Esimated Weight</th>
                    <th>Customer Address</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {!appoinments?.error
                    ? appoinments?.map(
                        (
                          {
                            appoinmentAddress,
                            appointmentContactNumber,
                            appointmentDate,
                            appointmentPersonName,
                            appointmentTimeSlot,
                            estimateWeight,
                            franchiseId,
                            frequency,
                            id,
                            orderDetail,
                            orderStatus,
                            userId,
                            workerId,
                            serviceType,
                            UserAddress,
                          },
                          i
                        ) => {
                          return (
                            <>
                              <tr key={id}>
                                <td> {i + 1} </td>
                                <td>
                                  {" "}
                                  {DateTime.fromISO(appointmentDate, {
                                    zone: "utc",
                                  }).toFormat("ccc dd LLL yyyy")}
                                </td>
                                <td> {slotLabels?.[appointmentTimeSlot]} </td>
                                <td> {UserAddress?.subAria} </td>
                                <td>
                                  {" "}
                                  <span
                                  // style={{
                                  //   color:
                                  //     elem.locationtype === "Home"
                                  //       ? "#1362fc"
                                  //       : "#43cf7f",
                                  // }}
                                  // className={
                                  //   elem.locationtype === "Shop"
                                  //     ? "locntext locntextdark"
                                  //     : "locntext"
                                  // }
                                  >
                                    {" "}
                                    {UserAddress?.locationType}{" "}
                                  </span>{" "}
                                </td>
                                <td> {String(userId).padStart(6, "0")} </td>
                                <td> {appointmentPersonName} </td>
                                <td>
                                  {" "}
                                  {
                                    workers?.find(
                                      ({ value }) => value == serviceType
                                    )?.label
                                  }{" "}
                                </td>
                                <td> {frequency} </td>
                                <td> {estimateWeight} </td>
                                <td>
                                  <button
                                    onClick={() => {
                                      setAddressdetails({
                                        appoinmentAddress,
                                        city: UserAddress?.city,
                                        zipCode: UserAddress?.zipCode,
                                      });
                                      setAddressPopup(true);
                                    }}
                                    className="status-btn status-btn-changed status-btn-changed3"
                                  >
                                    Details
                                  </button>
                                </td>
                                <td>
                                  {" "}
                                  {/* <span
                                  // className={
                                  //   elem.statustype === "reschedule" ||
                                  //   elem.statustype === "schdule"
                                  //     ? "appnt-stats  appntstatactive"
                                  //     : "appnt-stats"
                                  // }
                                  // style={{
                                  //   color:
                                  //     elem.statustype === "cancelled" ||
                                  //     elem.statustype === "underprocess"
                                  //       ? "#1362fc"
                                  //       : "#43cf7f",
                                  // }}
                                  >
                                    {" "}
                                    {orderStatus}{" "}
                                  </span>{" "} */}
                                </td>
                                <td>
                                  <div className="appoint-flex-btns">
                                    {/* <button onClick={() => confirmPopupfunc()}>
                          <i class="fa-regular fa-circle-check"></i>
                        </button>
                        <button onClick={() => reschedulePopupfunc()}>
                        <i class="fa-solid fa-calendar-days"></i>
                        </button>
                        <button onClick={() => cancelPopupFunc()}>
                        <i class="fa-regular fa-circle-xmark"></i>
                        </button> 

                         onClick={() => confirmPopupfunc()}
                        */}

                                    <button
                                      onClick={() => {
                                        setApntSlot(true);
                                        setAppoinmentDetails({
                                          id,
                                          serviceType,
                                          appointmentTimeSlot,
                                          appointmentDate,
                                          appoinmentAddress,
                                          UserAddress,
                                        });
                                      }}
                                      className="assign-btn"
                                    >
                                      Assign
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
                        }
                      )
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {apntSlot ? (
        <AppointSlot
          component={component}
          ApntSlotTrue={apntSlot}
          appoinmentDetails={appoinmentDetails}
          onClickOpenPopup={() => {
            setApntSlot(false);
          }}
          onclickCloseApntSlot={() => setApntSlot(false)}
        />
      ) : null}
      {wrkcpcity ? (
        <WorkCapacity
          component={component}
          onclickClose={() => setWrkcpcity(false)}
        />
      ) : null}
    </>
  );
};

export default FrenchAppointments;
