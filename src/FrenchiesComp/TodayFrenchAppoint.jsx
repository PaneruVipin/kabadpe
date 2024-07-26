import React, { useState } from "react";
import "../style/Frenchiespanel.css";
import { NavLink } from "react-router-dom";
import AppointSlot from "./AppointSlot";
import { useQuery } from "@tanstack/react-query";
import { franchiseAppoinmentFetch } from "../apis/franchise/appoinment";
import { slotLabels } from "../lib/slots";
const TodayFrenchAppoint = ({
  appoinments,
  TodayFrenchData,
  onclickRedirectFrenchApnt,
}) => {
  const [fiveData, setFiveData] = useState(TodayFrenchData.slice(0, 5));
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  const [apntSlot, setApntSlot] = useState(false);
  const [appoinmentDetails, setAppoinmentDetails] = useState({});
  const confirmPopupfunc = () => {
    setPopUp(true);
  };

  return (
    <>
      <section
        className={
          popUp === true
            ? "appoint-popup-main popupactive"
            : "appoint-popup-main"
        }
        onClick={() => setPopUp(false)}
      >
        <div
          className="appoint-popup-bx appoint-popup-bx2"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="appoint-popup-info appoint-popup-info2">
            <h3>Assign</h3>
            <h6>Assign Appointment to your waste collector</h6>
          </div>

          <div className="appoint-det">
            <p>
              Name : <span>Faiz Alam</span>{" "}
            </p>
            <p>
              Time Slot : <span>1PM - 3PM</span>{" "}
            </p>
            <p>
              Area : <span>Kanti Nagar</span>{" "}
            </p>
          </div>

          <p className="note-text">
            Note : The KabadiWala is already have a job in same area .{" "}
          </p>

          <div className="appoint-change-btns-flex">
            <button
              onClick={() => {
                setConfirmPopup(!confirmPopup),
                  setReshedPopup(false),
                  setCancelPopupPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn1 comn-appoint-btn1-bg-chnge "
            >
              Confirm Appointment
            </button>

            <button
              onClick={() => {
                setReshedPopup(!reshedPopup),
                  setConfirmPopup(false),
                  setCancelPopupPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn2"
            >
              Reshedule Appointment
            </button>

            <button
              onClick={() => {
                setCancelPopupPopup(!cancelPopup),
                  setReshedPopup(false),
                  setConfirmPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn3"
            >
              Cancel Appointment
            </button>
          </div>

          <button
            onClick={() => setPopUp(false)}
            className="cross-btn cross-btn2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* _______________ when user click confirm btn then after show a text  */}

          <div
            className={
              confirmPopup === true
                ? "confirm-text confrmtextactive"
                : "confirm-text"
            }
          >
            <p>Waste Pickup Scheduled and information has been sent to User</p>
            <button className="navigate-link-btn navigate-link-btn3 navigate-link-btn5">
              Confirm
            </button>
          </div>

          <div
            className={
              reshedPopup === true
                ? "reshedule-box reshedactive"
                : "reshedule-box"
            }
          >
            <p>
              Change date time for reschedule your waste pickup appoint, Appoint
              will be send to user for confirmation
            </p>

            <form action="#" className="reshed-form">
              <div className="reshed-form-grid">
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

                <button className="resd-sub-btn navigate-link-btn3 navigate-link-btn5">
                  Send Request
                </button>
              </div>
            </form>
          </div>

          <div
            className={
              cancelPopup === true ? "cancel-text cancelactive" : "cancel-text"
            }
          >
            <p>Are you sure to Cancel Your Waste Pickup appointment</p>

            <button
              onClick={() => setPopUp(false)}
              className="ok-btn navigate-link-btn3 navigate-link-btn5"
            >
              Confirm
            </button>
          </div>
        </div>
      </section>

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
            3019 B/9 kanti nagar old seelumpur near zia medical delhi-110031 .
          </p>

          <p>
            {" "}
            <span>City :</span> Delhi{" "}
          </p>
          <p>
            {" "}
            <span>Pin Code :</span> 110031
          </p>

          <button
            onClick={() => setAddressPopup(false)}
            className="cross-btn cross-btn2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </section>

      <div className="today-appoint-data">
        <div className=" wasteappoint-prof-table-main-bx french-appoint-table-box today-french-appnt-data">
          <table>
            <thead>
              <tr>
                <th>SNO.</th>
                <th>Time Slots</th>
                <th>Sub Area</th>
                <th>Location Type</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {!appoinments?.error
                ? appoinments?.map(
                    (
                      {
                        appointmentPersonName,
                        appointmentTimeSlot,
                        id,
                        UserAddress,
                        assigningStatus,
                        addedOn,
                        rescheduleStatus,
                        ...rest
                      },
                      i
                    ) => {
                      return (
                        <>
                          <tr key={id}>
                            <td> {i + 1} </td>
                            <td> {slotLabels?.[appointmentTimeSlot]} </td>
                            <td> {UserAddress?.subAria} </td>
                            <td> {UserAddress?.locationType} </td>
                            <td> {appointmentPersonName} </td>

                            <td>
                              {rest?.orderStatus == "active" ? (
                                <button
                                  onClick={() => {
                                    setApntSlot(true);
                                    setAppoinmentDetails({
                                      appointmentPersonName,
                                      appointmentTimeSlot,
                                      id,
                                      UserAddress,
                                      assigningStatus,
                                      addedOn,
                                      rescheduleStatus,
                                      ...rest,
                                    });
                                  }}
                                  className="assign-btn assign-btn2"
                                >
                                  Assign
                                </button>
                              ) : null}
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

        <button onClick={onclickRedirectFrenchApnt} className="view-all-bx">
          <i className="fa-solid fa-arrow-down"></i>
        </button>
      </div>

      {apntSlot ? (
        <AppointSlot
          onClickOpenPopup={() => {
            confirmPopupfunc(), setApntSlot(false);
          }}
          appoinmentDetails={appoinmentDetails}
          onclickCloseApntSlot={() => setApntSlot(false)}
        />
      ) : null}
    </>
  );
};

export default TodayFrenchAppoint;
