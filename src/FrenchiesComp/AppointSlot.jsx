import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import {
  adminAppoinmentAssign,
  adminServicableWorkersFetch,
} from "../apis/admins/appoinments";
import { slotLabels } from "../lib/slots";

const AppointSlot = ({
  onclickCloseApntSlot,
  ApntSlotTrue,
  onClickOpenPopup,
  component,
  appoinmentDetails,
}) => {
  const [currentDate, setcurrentdate] = useState(new Date());
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState({});
  const handleChangeDate = (event) => {
    const inputData = new Date(event.target.value);

    setcurrentdate(inputData);
  };

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);

    if (direction === "left") {
      newDate.setDate(newDate.getDate() - 1);
    } else if (direction === "right") {
      newDate.setDate(newDate.getDate() + 1);
    }

    setcurrentdate(newDate);
  };

  const { data: workers, refetch } = useQuery({
    queryKey: ["fetchServicableWorkers"],
    queryFn: () =>
      component == "admin" ? adminServicableWorkersFetch() : () => {},
  });
  const handleConfirmClick = async () => {
    const res = await adminAppoinmentAssign({
      appoinmentId: appoinmentDetails?.id,
      workerId: selectedWorker?.id,
    });
    if (!res?.error) {
      setPopUp(false);
      onClickOpenPopup;
      return;
    }
  };

  return (
    <>
      <section
        onClick={() => setPopUp(false)}
        className={
          popUp === true
            ? "appoint-popup-main popupactive"
            : "appoint-popup-main"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="appoint-popup-bx appoint-popup-bx2"
        >
          <div className="appoint-popup-info appoint-popup-info2">
            <h3>Assign</h3>
            <h6>Assign Appointment to your waste collector</h6>
          </div>

          <div className="appoint-det">
            <p>
              Name : <span>{selectedWorker?.fullname}</span>{" "}
            </p>
            <p>
              Time Slot :{" "}
              <span>
                {slotLabels?.[appoinmentDetails?.appointmentTimeSlot]}
              </span>{" "}
            </p>
            <p>
              Area : <span>{appoinmentDetails?.UserAddress?.aria}</span>{" "}
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
            <button
              onClick={handleConfirmClick}
              className="navigate-link-btn navigate-link-btn3 navigate-link-btn5"
            >
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
        className="appoint-slots-comp"
        onClick={() => onclickCloseApntSlot()}
      >
        <div
          className="appoint-slots-main-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6>Appointments Slots </h6>

          <div className="current-date-bx-flex">
            {/* toISOString().split('T')[0] */}
            <p>
              {" "}
              Current Date :{" "}
              <span>
                {" "}
                {currentDate.toISOString().split("T")[0] || "2023-11-30"}{" "}
              </span>{" "}
            </p>

            <div className="select-date-bx">
              <input
                type="date"
                name="date"
                id="date"
                value={currentDate}
                onChange={handleChangeDate}
              />
            </div>

            <div className="left-right-arrow-btn-flex">
              <button
                onClick={() => handleDateChange("left")}
                className="date-btn"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>

              <button
                onClick={() => handleDateChange("right")}
                className="date-btn"
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>

          <div className="buy-waste-table appoint-slot-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  {Object.keys(slotLabels)?.map((key, i) => (
                    <th>
                      {" "}
                      <div className="slot-text-flex">
                        {" "}
                        <p>
                          {key?.split("")?.map((s, i) => {
                            if (i) {
                              return s;
                            } else {
                              return s?.toLocaleUpperCase();
                            }
                          })}
                        </p>{" "}
                        {slotLabels?.[key]}{" "}
                      </div>{" "}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {!workers?.error
                  ? workers?.map(
                      ({
                        aadharBack,
                        aadharFront,
                        address,
                        ariaName,
                        caste,
                        email,
                        fullname,
                        gender,
                        id,
                        panNo,
                        phoneNumber,
                        pincode,
                        profileImage,
                        subAriaName,
                        workCity,
                        workerRole,
                      }) => (
                        <tr>
                          <td>
                            <span>
                              {" "}
                              {fullname?.split("")?.map((s, i) => {
                                if (!i) {
                                  return s?.toUpperCase();
                                } else {
                                  return s;
                                }
                              })}{" "}
                            </span>
                          </td>
                          {Object.keys(slotLabels)?.map((key, i) => (
                            <td>
                              <div className="assign-flex-bx">
                                <div className="slot-data">
                                  <span>1. Laxmi Nagar</span>
                                  <span>2. Kundan Nagar</span>
                                  <span>3. Azad Nagar</span>
                                </div>

                                {key ==
                                appoinmentDetails?.appointmentTimeSlot ? (
                                  <button
                                    className="assign-btn assign-btn3"
                                    onClick={() => {
                                      setPopUp(true);
                                      setSelectedWorker({
                                        fullname,
                                        id,
                                      });
                                    }}
                                  >
                                    Assign
                                  </button>
                                ) : null}
                              </div>
                            </td>
                          ))}
                        </tr>
                      )
                    )
                  : null}
              </tbody>
            </table>
          </div>

          <div onClick={onclickCloseApntSlot} className="close-appoint-btn-bx">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointSlot;
