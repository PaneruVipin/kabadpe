import React, { useState } from "react";
import "../style/WasteColect.css";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";

const WasteAppointment = () => {
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));

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
          <div className="appoint-popup-info">
            <h3>Changes Appointments</h3>
          </div>

          <div className="appoint-change-btns-flex">
            <button
              onClick={() => {
                setConfirmPopup(!confirmPopup),
                  setReshedPopup(false),
                  setCancelPopupPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn1 comn-appoint-btn1-bg-chnge"
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
            <button className="navigate-link-btn navigate-link-btn3">
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

                <button className="resd-sub-btn navigate-link-btn3">
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
              className="ok-btn navigate-link-btn3"
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
        <div className="cust-add-bx">
          <h3>Customer Address</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            tenetur quisquam dolor quae ea maiores obcaecati architecto, vel rem
            expedita praesentium amet voluptatibus quidem reprehenderit ...
          </p>

          <button className="navigate-link-btn navigate-link-btn3 mt-3">
            <i className="fa-solid fa-location-dot"></i>
            Click to Navigate Link
          </button>

          <button
            onClick={() => setAddressPopup(false)}
            className="cross-btn cross-btn2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </section>

      <section className="waste-appoint-ment-comp">
        <div className="right-tab-main-bx  tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3">
            <h3>Appointments</h3>

            <div className="waste-appoint-main-bx">
              <div className="appointment-flex-box">
                <p className="tex-line tex-line2"> Appointments</p>

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

              <div className="prof-table-main-bx appoint-prof-table-main-bx appoint-prof-table-main-bx3 wasteappoint-prof-table-main-bx">
                <table>
                  <thead>
                    <tr>
                      <th>SN</th>
                      <th>Date</th>
                      <th>Time Slots</th>
                      <th>Customer Name</th>
                      <th>Customer Address</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>29-09-2023</td>
                      <td>10.00 to 11.00</td>
                      <td>Rohan Das</td>
                      <td>
                        <button
                          onClick={() => setAddressPopup(true)}
                          className="status-btn status-btn-changed"
                        >
                          Details
                        </button>
                      </td>
                      <td>Visit Soon</td>
                      <td>
                        <NavLink to="/pricelist">
                          <button className="pricelist-btn">Buy Waste</button>
                        </NavLink>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>26-09-2023</td>
                      <td>11.00 to 12.00</td>
                      <td>Rohan Das</td>
                      <td>
                        <button
                          onClick={() => setAddressPopup(true)}
                          className="status-btn status-btn-changed"
                        >
                          Details
                        </button>
                      </td>
                      <td>Cancelled</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>3</td>
                      <td>22-09-2023</td>
                      <td>12.00 to 1.00</td>
                      <td>Rohan Das</td>
                      <td>
                        <button
                          onClick={() => setAddressPopup(true)}
                          className="status-btn status-btn-changed"
                        >
                          Details
                        </button>
                      </td>
                      <td>Cancelled</td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>4</td>
                      <td>29-09-2023</td>
                      <td>1.00 to 2.00</td>
                      <td>Rohan Das</td>
                      <td>
                        <button
                          onClick={() => setAddressPopup(true)}
                          className="status-btn status-btn-changed"
                        >
                          Details
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => setPopUp(true)}
                          className="status-btn status-btn-changed"
                        >
                          Confirm Status
                        </button>
                      </td>
                      <td></td>
                    </tr>

                    <tr>
                      <td>5</td>
                      <td>22-09-2023</td>
                      <td>2.00 to 3.00</td>
                      <td>Rohan Das</td>
                      <td>
                        <button
                          onClick={() => setAddressPopup(true)}
                          className="status-btn status-btn-changed"
                        >
                          Details
                        </button>
                      </td>
                      <td>
                        Under Review <br /> (Reschedule)
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteAppointment;
