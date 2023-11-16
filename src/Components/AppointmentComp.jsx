import React, { useState } from "react";
import UseProfRightbx from "./UseProfRightbx";
import "../style/Profile.css";
import { NavLink } from "react-router-dom";
import "../style/WasteColect.css";
import ReviewPopup from './ReviewPopup';
import ReportPopup from './ReportPopup';

const AppointmentComp = ({onSupportClick}) => {
    const [popupUser, setPopupUser] = useState(false);
    const [reshBox, setReshBox] = useState(false);
    const [revBox , setRevBox] = useState(false);
    const [repBox , setRepBox] = useState(false);

  return (
    <>
      <section className="user-prof-grid-comp ">
        <section className="user-prf-update-comp user-prf-update-comp3">
          <div className="u-p-cont">

            <div className="appoint-search-supp-btn-flex-bx">
            <h5>My Appointments</h5>

            <div className="search-supp-flex-bx">

                <div className="search-bx-appt">
                    <input type="text" name="search" id="search" placeholder="Search..." />
                </div>

                <button onClick={onSupportClick}  className="supp-link-btn">
                <i class="fa-solid fa-hands-holding-child"></i>
                    Support
                </button>
                
            </div>

            </div>

            <div className="u-p-updt-table-bx">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <div className="u-p-tb-data">
                        <div className="t-icn">1</div>
                        <div className="u-p-tb-info">
                          <h6>Brand Orbitor</h6>
                          <span className='pan-box-nav'>
                            Aman Aggarwal / 110031{" "}
                            <NavLink to="#" onClick={() => setPopupUser(true)}>
                              <i class="fa-solid fa-circle-arrow-right"></i>
                            </NavLink>{" "}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="u-p-tb-numb-bx">
                        <h6>Tomorrow, 10:00 AM </h6>
                        <span>Ap.No.- <NavLink to="#"> 8447532101 </NavLink></span>
                      </div>
                    </td>

                    <td>
                      <div onClick={() => setReshBox(true)} className=" tb-reshed-btn">Reschedule</div>
                    </td>

                    <td>
                      <div className=" tb-call-btn tb-call-btn5">Call</div>
                    </td>

                    <td>
                      <div onClick={() => setRepBox(true)} className=" tb-call-btn tb-report-btn">Report</div>
                    </td>

                    <td>
                      <div className="complet-bx upcoming-bx">Upcoming</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="u-p-tb-data">
                        <div className="t-icn">2</div>
                        <div className="u-p-tb-info">
                          <h6>Digital Dezire</h6>
                          <span className='pan-box-nav'>
                            Aman Aggarwal / 110031{" "}
                            <NavLink to="#" onClick={() => setPopupUser(true)}>
                              <i class="fa-solid fa-circle-arrow-right"></i>
                            </NavLink>{" "}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="u-p-tb-numb-bx">
                        <h6>Today, 10:00 AM </h6>
                        <span>Ap.No.- <NavLink to="#"> 8447532101 </NavLink></span>
                      </div>
                    </td>

                    <td>
                      <div onClick={() => setReshBox(true)} className=" tb-reshed-btn">Reschedule</div>
                    </td>

                    <td>
                      <div className=" tb-call-btn tb-call-btn5">Call </div>
                    </td>

                    <td>
                      <div onClick={() => setRepBox(true)} className=" tb-call-btn tb-report-btn">Report</div>
                    </td>

                    <td>
                      <div className="complet-bx upcoming-bx">Upcoming</div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="u-p-tb-data">
                        <div className="t-icn">3</div>
                        <div className="u-p-tb-info">
                          <h6>Digital Dezire</h6>
                          <span className='pan-box-nav'>
                            Aman Aggarwal / 110031{" "}
                            <NavLink to="#" onClick={() => setPopupUser(true)}>
                              <i class="fa-solid fa-circle-arrow-right"></i>
                            </NavLink>{" "}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="u-p-tb-numb-bx">
                        <h6> Yesterday, 11:25 AM </h6>
                        <span>Ap.No.- <NavLink to="#"> 8447532101 </NavLink></span>
                      </div>
                    </td>

                    <td>
                      <div className="complet-bx complet-bx3">Completed</div>
                    </td>

                    <td>
                    <button onClick={onSupportClick} className="supp-link-btn supp-link-btn2">
                <i class="fa-solid fa-hands-holding-child"></i>
                    Support
                </button>
                    </td>

                    <td>
                    <button onClick={() => setRevBox(true)} className="supp-link-btn supp-link-btn2 rev-btun">
                    Review
                </button>
                    </td>
                    
                  </tr>

                  <tr>
                    <td>
                      <div className="u-p-tb-data">
                        <div className="t-icn">4</div>
                        <div className="u-p-tb-info">
                          <h6>Digital Dezire</h6>
                          <span className='pan-box-nav'>
                            Aman Aggarwal / 110031{" "}
                            <NavLink to="#" onClick={() => setPopupUser(true)}>
                              <i class="fa-solid fa-circle-arrow-right"></i>
                            </NavLink>{" "}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="u-p-tb-numb-bx">
                        <h6> 20-10-23, 11:25 AM </h6>
                        <span>Ap.No.- <NavLink to="#"> 8447532101 </NavLink></span>
                      </div>
                    </td>

                    <td>
                      <div className="complet-bx complet-bx3">Completed</div>
                    </td>

                    <td>
                    <button onClick={onSupportClick} className="supp-link-btn supp-link-btn2">
                <i class="fa-solid fa-hands-holding-child"></i>
                    Support
                </button>
                    </td>

                    <td>
                    <button onClick={() => setRevBox(true)} className="supp-link-btn supp-link-btn2 rev-btun">
                    Review
                </button>
                    </td>
                    
                  </tr>

                  <tr>
                    <td>
                      <div className="u-p-tb-data">
                        <div className="t-icn">5</div>
                        <div className="u-p-tb-info">
                          <h6>Digital Dezire</h6>
                          <span className='pan-box-nav'>
                            Aman Aggarwal / 110031{" "}
                            <NavLink to="#" onClick={() => setPopupUser(true)}>
                              <i class="fa-solid fa-circle-arrow-right"></i>
                            </NavLink>{" "}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="u-p-tb-numb-bx">
                        <h6> Yesterday, 11:25 AM </h6>
                        <span>Ap.No.- <NavLink to="#"> 8447532101 </NavLink></span>
                      </div>
                    </td>

                    <td>
                      <div className="complet-bx complet-bx3 conceld-bx">
                        Cancelled
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <UseProfRightbx />
      </section>

      <div className={ popupUser ? "pop-up-box-10 popupactive" : "pop-up-box-10"}>
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
                    <h6>Name : <span>Kunal Vernma</span></h6>
                    <h6>Phone No. : <span>9087543213</span></h6>
                    {/* <h6>Address : <span>3810 B/20 krishna nagar 110005 near mobile shop</span> </h6> */}

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
                    <h6>Company : <span>Digital Dezire</span></h6>
                    <h6>Manager : <span>Sonu Nigam</span></h6>
                    
                    <h6 className="gst-text">GST : <span>1100022233344</span></h6>

                    <h6></h6>
                </div>
                
            </div>

            <div onClick={() => setPopupUser(false)} className="pop-user-info-close">
            <i class="fa-solid fa-xmark"></i>
            </div>
         
        </div>
      </div>

      <section className={ reshBox ?  "reshed-popup-main reshdactive" : "reshed-popup-main"}>

        <div className="res-popup-box">

          <h6>Reschedule Appointment</h6>


          <div
            className="reshedule-box res-appint-fild-flex-box reshedactive"
          >
          

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
              Change date time for reschedule your waste pickup appoint, Appoint
              will be send to Waste Collector for confirmation
            </p>


            
            </form>

           
            
          </div>
            
          <div onClick={() => setReshBox(false)} className="resh-box-close-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        
      </section>

      {revBox ?  <ReviewPopup onclickRevPopupClose={() => setRevBox(false)} /> : null}

  { repBox ?  <ReportPopup onclickRepClose={() => setRepBox(false)} /> : null}
      
    </>
  );
};

export default AppointmentComp;
