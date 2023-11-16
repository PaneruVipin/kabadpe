import React, { useState } from "react";
import "../style/Profile.css";
import UserProfCounter from "./UserProfCounter";
import UserProfCards from "./UserProfCards";
import UserProfUpdates from "./UserProfUpdates";
import "../style/Support.css";
import { useSelector } from "react-redux";

const UserProfSearch = () => {
  const user = useSelector((s) => s.user.userInfo);
  const [prfEditForm, setPrfEditForm] = useState(false);
  const [confirmOtp, setConfirmOtp] = useState(false);
  const [notBox , setNotBox] = useState(false);
  return (
    <>
      <section className="use-prf-left-main-bx">
        <section className="top-user-prof-search-bx">
          <div className="u-p-cont top-user-prof-search-bx-flex">
            <div className="left-user-prof-name-bx">
              <h5>
                Hi, <span>{user?.fullname}</span>
              </h5>
            </div>

            <div className="right-user-prof-search-flex-bx">
              <div className="u-prf-srch-bx">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                />
              </div>

              <button
                onClick={() => setPrfEditForm(true)}
                className="u-prf-btn-bx"
              >
                Edit Profile
              </button>

              <div  className="notif-main-box">
                <div onClick={() => setNotBox(!notBox)} className="bell-icon bell-icon2">
                  <i class="fa-regular fa-bell"></i>
                </div>

                <div className={ notBox ? "notif-box notactive" : "notif-box"}>
                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="./images/customImg/team-2.jpg" alt="" />
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="./images/customImg/team-2.jpg" alt="" />
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box left-not-box2">
                      <h6>KG</h6>
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="./images/customImg/team-3.jpg" alt="" />
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box left-not-box2 left-not-box3">
                    <i class="fa-solid fa-house"></i>
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <button className="sell-all-not-btn">
                    See all notifications
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={
            prfEditForm === true
              ? "user-prof-edit-popup-comp editpopupcompshow"
              : "  user-prof-edit-popup-comp"
          }
        >
          <div className="u-prf-edit-popup-bx">
            <h5>User Profile Change</h5>

            <form action="#">
              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="First Name"
                />
              </div>

              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Last Name"
                />
              </div>

              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="u-prf-edt-inpt-bx">
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile"
                />
              </div>

              <button
                onClick={() => setConfirmOtp(true)}
                className="prof-chagen-btn"
              >
                Update
              </button>
            </form>

            <div
              className={
                confirmOtp === true
                  ? "confirm-otp-box otpactive"
                  : "confirm-otp-box"
              }
            >
              <h6>Confirm OTP</h6>

              <div className="otp-field">
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter OTP"
                />
              </div>

              <button className="otp-btn">Submit</button>
            </div>

            <div
              onClick={() => setPrfEditForm(false)}
              className="prof-user-edit-form-bx-close"
            >
              <i class="fa-regular fa-circle-xmark"></i>
            </div>
          </div>
        </section>

        <UserProfCounter />

        <UserProfCards />

        <UserProfUpdates />
      </section>
    </>
  );
};

export default UserProfSearch;
