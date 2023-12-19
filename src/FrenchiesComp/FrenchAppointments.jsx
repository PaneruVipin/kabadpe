import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import "../style/Frenchiespanel.css";
import FrenchAppointData from "../FrenchAppointData";
import AppointSlot from "./AppointSlot";

const FrenchAppointments = ({updatedFrenchAppointData }) => {
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [apntSlot , setApntSlot] =  useState(false);
  

  const confirmPopupfunc = () => {

    setPopUp(true)
  

    
  }

  // const reschedulePopupfunc = () => {

  //   setPopUp(true)
  //   setConfirmPopup(false)
  //   setReshedPopup(true)
  //   setCancelPopupPopup(false)
    
  // }

  // const cancelPopupFunc = () => {

  //   setPopUp(true)
  //   setConfirmPopup(false)
  //   setReshedPopup(false)
  //   setCancelPopupPopup(true)
    
  // }

  return (
    <>
      <section
        className={
          popUp === true
            ? "appoint-popup-main popupactive"
            : "appoint-popup-main"
        }
      >
        <div className="appoint-popup-bx appoint-popup-bx2">
          <div className="appoint-popup-info appoint-popup-info2">
            <h3>Assign</h3>
            <h6>Assign Appointment to your waste collector</h6>
          </div>

        <div className="appoint-det">
          <p>Name : <span>Faiz Alam</span> </p>
          <p>Time Slot : <span>1PM - 3PM</span> </p>
          <p>Area : <span>Kanti Nagar</span> </p>

        </div>


        <p className="note-text">Note : The KabadiWala is already have a job in same area .  </p>


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
      >
        <div className="cust-add-bx cust-add-bx3">
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

      <section className="french-appoint-comp">
        <div className="tab-main-bx tab-main-bx3 ">
          <h3 className="title">Appointments</h3>

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
                    <th>Customer Name</th>
                    <th>Customer Address</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                    {updatedFrenchAppointData.map((elem,id) => {

                        return (
                            <>

                  <tr key={id}>
                    <td> {elem.id} </td>
                    <td> {elem.date} </td>
                    <td> {elem.timeslot} </td>
                    <td> {elem.subarea} </td>
                    <td> <span style={{ color : elem.locationtype === 'Home' ? "#1362fc" : "#43cf7f" }} className={ elem.locationtype === 'Shop' ? "locntext locntextdark" : "locntext"}> {elem.locationtype} </span>  </td>

                    <td> {elem.custname} </td>
                    <td>
                      <button
                        onClick={() => setAddressPopup(true)}
                        className="status-btn status-btn-changed status-btn-changed3"
                      >
                        Details
                      </button>
                    </td>
                    <td> <span className={ elem.statustype === "reschedule" || elem.statustype === "schdule"  ? "appnt-stats  appntstatactive" : "appnt-stats" } style={{color : elem.statustype === "cancelled" || elem.statustype === "underprocess" ? "#1362fc" : "#43cf7f"  }} > {elem.status} </span> </td>
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

                       <button onClick={() => setApntSlot(true)} className="assign-btn">
                        Assign
                        </button>
                      </div>
                    </td>
                  </tr>
                            </>
                        )
                        
                    })}
                    
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

     { apntSlot ?  <AppointSlot onClickOpenPopup={() => {confirmPopupfunc() , setApntSlot(false)}} onclickCloseApntSlot={() => setApntSlot(false)} /> : null}
    </>
  );
};

export default FrenchAppointments;
