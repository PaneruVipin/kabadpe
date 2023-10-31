import React, { useState } from "react";
import "../style/MyAccount.css";
import "../style/WasteCollector.css";

const WasteCollector = () => {
  const [toggleSate, setToggleState] = useState(1);
  const [leftTab, setLeftTab] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [addressPopup, setAddressPopup] = useState(false);
  const [addressBox , setAddressBox] =  useState(false);
  const [pinText, setPinText] =  useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* ________ Our customer address popup bx */}

      <section
        className={
          addressPopup === true ? "cust-add-comp addrssactive" : "cust-add-comp"
        }
      >
        <div className="cust-add-bx">
          <h3>Customer Address</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            tenetur quisquam dolor quae ea maiores obcaecati architecto, vel rem
            expedita praesentium amet voluptatibus quidem reprehenderit ...
          </p>

          <button className="navigate-link-btn mt-3">
            <i className="fa-solid fa-location-dot"></i>
            Click to Navigate Link
          </button>

          <button onClick={() => setAddressPopup(false)} className="cross-btn">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </section>

      {/* _____________pop up */}

      <section
        className={
          popUp === true
            ? "appoint-popup-main popupactive"
            : "appoint-popup-main"
        }
      >
        <div className="appoint-popup-bx">
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
              className="comn-appoint-btn comn-appoint-btn1"
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

          <button onClick={() => setPopUp(false)} className="cross-btn">
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
            <button className="navigate-link-btn">
              <i className="fa-solid fa-location-dot"></i>
              Click to Navigate Link
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
                <div className="reshd-inpt-bx">
                  <input
                    type="date"
                    name="date"
                    id="date"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="reshed-select-bx">
                  <select name="time_slot" id="time_slot">
                    <option value="Choose Time">Choose Time</option>
                    <option value="Choose Time">10:00 to 11:00</option>
                    <option value="Choose Time">12:00 to 1:00</option>
                    <option value="Choose Time">1:00 to 2:00</option>
                    <option value="Choose Time">2:00 to 3:00</option>
                  </select>
                </div>

                <button className="resd-sub-btn">Send Request</button>
              </div>
            </form>
          </div>

          <div
            className={
              cancelPopup === true ? "cancel-text cancelactive" : "cancel-text"
            }
          >
            <p>Are you sure to Cancel Your Waste Pickup appointment</p>

            <button onClick={() => setPopUp(false)} className="ok-btn">
              Confirm
            </button>
          </div>
        </div>
      </section>

      <section className="user-prof-comp">
        <span className="u-pf-one"></span>
        <span className="u-pf-two">
          <span className="u-pf-three"></span>
        </span>
        <span className="u-pf-four"></span>
      </section>

      <section className="prof-record-main-sect">
        <div className="prof-record-grid main-container">
          <section className="user-prof-main-bx">
            <div className="user-prf-main">
              <div className="user-img">
                <img src="./images/customImg/user-prf-img.webp" alt="" />
              </div>
              <div className="user-prf-info">
                <h4>Tom Holland</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Debitis deleniti excepturi nisi, expedita a tempora commodi
                  quasi quo illo nesciunt quibusdam tenetur corporis neque
                  voluptatum asperiores dignissimos totam reprehenderit
                  laudantium .
                </p>
              </div>
            </div>
            {/* 
          <div className="user-prf-switch-btns-flex">
            <button className="user-prf-btn userbtnactive">Following</button>

            <button className="user-prf-btn">Message</button>
          </div> */}
          </section>

          <section className="records-comp">
            <div className="record-grid record-grid2">
              <div className="record-bx">
                <h5 className="r-numb">20</h5>
                <p className="r-ttl"> Appointments</p>
                <h6 className="r-text">
                  {" "}
                  Total
                  <span> Today's Appointments</span>
                </h6>
              </div>

              <div className="record-bx">
                <h5 className="r-numb">236</h5>
                <p className="r-ttl">Wallet Banalce</p>
                <h6 className="r-text">
                  In <span>Rupees</span>
                </h6>
              </div>

              <div className="record-bx">
                <h5 className="r-numb">15.6k</h5>
                <p className="r-ttl">Total Waste Collected</p>
                <h6 className="r-text">
                  In <span>KG</span>
                </h6>
              </div>

              <div className="record-bx">
                <h5 className="r-numb">15.6k</h5>
                <p className="r-ttl">Total Waste Sold</p>
                <h6 className="r-text">
                  In <span>KG</span>
                </h6>
              </div>

              <div className="record-bx">
                <h5 className="r-numb">5.7k</h5>
                <p className="r-ttl">Waste Sold</p>
                <h6 className="r-text">
                  In <span>KG</span>{" "}
                </h6>
              </div>

              <div className="record-bx">
                <h5 className="r-numb">3.5k</h5>
                <p className="r-ttl">Cash Paid</p>
                <h6 className="r-text">
                  Lorem <span>Ipsum</span> .
                </h6>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/*  */}
      <section className="my-profile-comp">
        <div className="user-prof-contanier user-prof-contanier2">
          <button onClick={() => setLeftTab(true)} className="m-prof-det-btn">
            Profile Details <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="my-prof-grid">
            {/* { leftTab ? "left-tabs-link-main-bx lefttabactive" : "left-tabs-link-main-bx"} */}

            <div
              className={
                leftTab
                  ? "left-tabs-link-main-bx lefttabactive"
                  : "left-tabs-link-main-bx"
              }
            >
              {/* <h3>My Account</h3> */}

              <div className="tabls-btn-link-flex">
                <button
                  onClick={() => {
                    toggleTab(7), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 7
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  My Appointments
                </button>

                <button
                  onClick={() => {
                    toggleTab(6), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 6
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  My details
                </button>

                <button
                  onClick={() => {
                    toggleTab(1), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 1
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  My Work Location
                </button>

                <button
                  onClick={() => {
                    toggleTab(2), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 2
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  Waste Collection
                </button>

                <button
                  onClick={() => {
                    toggleTab(3), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 3
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-wallet"></i>
                  </div>
                  My sales history
                </button>

                <button
                  onClick={() => {
                    toggleTab(4), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 4
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-tag"></i>
                  </div>
                  My Wallet History
                </button>

                <button
                  onClick={() => {
                    toggleTab(5), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 5
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-gear"></i>
                  </div>
                  My account setings
                </button>
              </div>
            </div>

            <div className="right-tabs-bx">
              <div
                className={
                  toggleSate === 7
                    ? "right-tab-main-bx tab-bx tabbxactive"
                    : "right-tab-main-bx tab-bx"
                }
              >
                <div className="tab-main-bx">
                  <h3>Appointments</h3>

                  <p className="tex-line">Upcoming Appointments</p>

                  <div className="prof-table-main-bx appoint-prof-table-main-bx">
                    <table>
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Date</th>
                          <th>Customer Name</th>
                          <th>Customer Address</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>29-09-2023</td>
                          <td>Rohan Das</td>
                          <td>
                            <button
                              onClick={() => setAddressPopup(true)}
                              className="status-btn"
                            >
                              Details
                            </button>
                          </td>
                          <td>
                            <button
                              onClick={() => setPopUp(true)}
                              className="status-btn"
                            >
                              Status
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="tex-line tex-line2">Total Appointments</p>

                  <div className="prof-table-main-bx appoint-prof-table-main-bx appoint-prof-table-main-bx3">
                    <table>
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>Date</th>
                          <th>Customer Name</th>
                          <th>Customer Address</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>29-09-2023</td>
                          <td>Rohan Das</td>
                          <td>
                            <button
                              onClick={() => setAddressPopup(true)}
                              className="status-btn"
                            >
                              Details
                            </button>
                          </td>
                          <td>Visited</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>26-09-2023</td>
                          <td>Rohan Das</td>
                          <td>
                            <button
                              onClick={() => setAddressPopup(true)}
                              className="status-btn"
                            >
                              Details
                            </button>
                          </td>
                          <td>Cancelled</td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td>22-09-2023</td>
                          <td>Rohan Das</td>
                          <td>
                            <button
                              onClick={() => setAddressPopup(true)}
                              className="status-btn"
                            >
                              Details
                            </button>
                          </td>
                          <td>Cancelled</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleSate === 6
                    ? "right-tab-main-bx tab-bx tabbxactive"
                    : "right-tab-main-bx tab-bx"
                }
              >
                <div className="tab-main-bx">
                  <h3>My details</h3>

                  <p className="tex-line">Personal information</p>

                  <div className="my-det-form-grid my-det-form-grid33">
                    <div className="left-det-form-text">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. at eveniet et architecto nulla vel aliquam.
                      </p>
                    </div>

                    <form className="prof-form" action="#">
                      <div className="prof-form-grid">
                        <div className="prof-intp-bx">
                          <label htmlFor="first-name">First Name</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="firstname"
                              id="firstname"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="last-name">Last Name</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="lastname"
                              id="lastname"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="mobile">Mobile</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="mobile"
                              id="mobile"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="email">Last Name</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <button type="submit" className="submit-btn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="tex-line tex-line2">Password</p>

                  <div className="my-det-form-grid my-det-form-grid33">
                    <div className="left-det-form-text">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. at eveniet et architecto nulla vel aliquam.
                      </p>
                    </div>

                    <form className="prof-form" action="#">
                      <div className="prof-form-grid">
                        <div className="prof-intp-bx">
                          <label htmlFor="newpassword">New Password</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="password"
                              name="newpassword"
                              id="newpassword"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="confirmpassword">
                            Confirm Password
                          </label>
                          <div className="prof-inpt-fild">
                            <input
                              type="password"
                              name="confirmpassword"
                              id="confirmpassword"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <button type="submit" className="submit-btn">
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="tex-line tex-line2">Account details</p>

                  <form className="prof-form" action="#">
                    <div className="my-account-det-form-grid">
                      <div className="prof-intp-bx prof-selct-bx">
                        <label htmlFor="Bank">Location Type</label>
                        <select name="Bank" id="Bank">
                          <option value="Bank">Choose Bank</option>
                          <option value="Bank">Choose Bank</option>
                          <option value="Bank">Choose Bank</option>
                        </select>
                      </div>

                      <div className="prof-intp-bx">
                        <label htmlFor="full-name">Full Name</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>

                      <div className="prof-intp-bx">
                        <label htmlFor="accountnumber">Account Number</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="text"
                            name="accountnumber"
                            id="accountnumber"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="account-form-two-grid">
                      <div className="prof-intp-bx">
                        <label htmlFor="accountnumber">Account Number</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="text"
                            name="accountnumber"
                            id="accountnumber"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>

                      <div className="prof-intp-bx">
                        <label htmlFor="IFSC">IFSC Code</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="code"
                            name="IFSC"
                            id="IFSC"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="submit-btn bankacct-btn">
                      Save
                    </button>
                  </form>
                </div>
              </div>

              <div
                className={
                  toggleSate === 1
                    ? "right-tab-main-bx tab-bx tabbxactive"
                    : "right-tab-main-bx tab-bx"
                }
              >
                <div className="tab-main-bx">
                  <h3>My Work Location</h3>

                  <div className="location-id-fled-bx">
                    <p className="tex-line tex-line4">Location</p>

                <div className={ pinText ===  true ? "id-field-main idfldactive" : "id-field-main"}>
                    <div className="id-feld-bx">
                      <div className="pin-code-inpt">
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          placeholder="Pin code"
                        />
                      </div>
                      <button onClick={() => setPinText(!pinText)} className="pin-submit-btn">
                        Send request for approval
                      </button>
                    </div>
                    <p>Your Request Has Been Sent, Status Will be Updated Soon</p>
                  </div>
                  </div>

                  <div className="table-parent-bx">
                    <div className="prof-table-main-bx">
                      <table>
                        <thead>
                          <tr>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>OrdeStatus</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>110032</td>
                            <td className="tbledataactive">Approved</td>
                            <td>110032</td>
                            <td className="tbledatadeactive">Pending</td>
                          </tr>

                          <tr>
                            <td>110032</td>
                            <td className="tbledataactive">Approved</td>
                            <td>110032</td>
                            <td className="tbledatadeactive">Pending</td>
                          </tr>

                          <tr>
                            <td>110032</td>
                            <td className="tbledataactive">Approved</td>
                            <td>110032</td>
                            <td className="tbledatadeactive">Pending</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="location-id-fled-bx">
                    <p className="tex-line mt-4 tex-line4">Current address</p>

                    <button onClick={() => setAddressBox(!addressBox)} className="edit-btn">Edit</button>
                  </div>

                  <div className={ addressBox ===  true  ? "address-showhide-bx addrssbxactive" : "address-showhide-bx"}>
                    
                  <div className="address-info-bx">

                    <h6>Add: <span>65A, Street No 4, Kundan Nagar, Laxmi Nagar</span></h6>
                    
                    <h6>City : <span>Delhi</span></h6>
                   
                   <h6>State : <span>New Delhi</span></h6>
                   <h6>Pin code : <span>110092</span></h6>
                   <h6>Landmark : <span>Near Lovely Public School</span></h6>

                  </div>

                  <div className="my-det-form-grid my-det-form-grid-showhide my-add-form-grid">
                    <form className="prof-form" action="#">
                      <div className="prof-form-grid prof-form-grid2">
                        <div className="prof-intp-bx">
                          <label htmlFor="address">Address</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="mini-inpt-three-grid-bx">
                          <div className="prof-intp-bx">
                            <label htmlFor="city">City</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx">
                            <label htmlFor="state">state</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="state"
                                id="state"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx">
                            <label htmlFor="Pin">Pin</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="Pin"
                                id="Pin"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="land-loca-fild-grid-bx">
                          <div className="prof-intp-bx">
                            <label htmlFor="landmark">Landmark</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="landmark"
                                id="landmark"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          {/* <div className="prof-intp-bx prof-selct-bx">
                            <label htmlFor="landmark">Location Type</label>
                            <select name="location" id="location">
                              <option value="location">Choose</option>
                              <option value="location">Work</option>
                              <option value="location">Office</option>
                            </select>
                          </div> */}
                        </div>

                        <button
                          type="submit"
                          className="submit-btn address-btn"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>

                  </div>

                </div>
              </div>

              <div
                className={
                  toggleSate === 2
                    ? "table-parent-bx table-parent-bx5 tab-bx tabbxactive"
                    : "table-parent-bx table-parent-bx5 tab-bx"
                }
              >
                <div className="prof-table-main-bx prof-table-main-bx-waste-collec-tble">
                  <table>
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Date</th>
                        <th>Customer Name</th>
                        <th>Waste (Rupees)</th>
                        <th>Paid By</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>20/10/23</td>
                        <td>Faisal Imam</td>
                        <td>2850.00</td>
                        <td>Wallet</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>20/10/23</td>
                        <td>Nawaj Akhtar</td>
                        <td>1150.00</td>
                        <td>Cash</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>20/10/23</td>
                        <td>Waqqar Alam</td>
                        <td>1450.00</td>
                        <td>Wallet</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className={
                  toggleSate === 3
                    ? "table-parent-bx table-parent-bx5 tab-bx tabbxactive"
                    : "table-parent-bx table-parent-bx5 tab-bx"
                }
              >
                <div className="prof-table-main-bx prof-table-main-bx2 ">
                  <table>
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Order Value (INR)</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>29-09-2023</td>
                        <td>Cash</td>
                        <td>8700/-</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>27-08-2023</td>
                        <td>Wallet</td>
                        <td>659/-</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>03-08-2023</td>
                        <td>Wallet</td>
                        <td>762/-</td>
                        <td>
                          <div className="td-flex">
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className={
                  toggleSate === 4
                    ? "offer-comp tab-bx table-parent-bx5 tabbxactive"
                    : "offer-comp tab-bx table-parent-bx5"
                }>

<div className="prof-table-main-bx prof-table-main-bx2 prof-table-main-bx7">
                  <table>
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>Date</th>
                        <th>User Name</th>
                        <th>Transaction Id</th>
                        <th>Payment Mode</th>
                        <th>Status</th>
                        <th>Amount</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>29-09-2023</td>
                        <td>Faiz Alam</td>
                        <td>TSX11145678</td>
                        <td>Cash</td>
                        <td>Completed</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>10-10-2023</td>
                        <td>Faiz Alam</td>
                        <td>TSX11145678</td>
                        <td>Wallet</td>
                        <td>Pending</td>
                        <td>2000</td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>25-09-2023</td>
                        <td>Faiz Alam</td>
                        <td>TSX11145678</td>
                        <td>Wallet</td>
                        <td>Completed</td>
                        <td>1000</td>
                      </tr>
                    
                    </tbody>
                  </table>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteCollector;
