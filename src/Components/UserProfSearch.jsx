import React, { useState } from "react";
import "../style/Profile.css";
import UserProfCounter from "./UserProfCounter";
import UserProfCards from "./UserProfCards";
import UserProfUpdates from "./UserProfUpdates";
import "../style/Support.css";
import { useDispatch, useSelector } from "react-redux";
import {
  validationUpdateProfileRequest,
  validationUpdateProfilecallback,
} from "../validators/user/profile";
import { Form, Formik } from "formik";
import {
  userUpdateProfileCallback,
  userUpdateProfileRequset,
} from "../apis/user";
import { userFetch } from "../features/user/userActions";

const UserProfSearch = () => {
  const user = useSelector((s) => s.user.userInfo);
  const dispatch = useDispatch();
  const [prfEditForm, setPrfEditForm] = useState(false);
  const [confirmOtp, setConfirmOtp] = useState(false);
  const [notBox, setNotBox] = useState(false);
  const [apiError, setApiError] = useState("");
  const [code, setCode] = useState("");
  const initialRequsetValues = {
    email: user?.email || "",
    fullname: user?.fullname || "",
    phoneNumber: user?.phoneNumber || "",
  };
  const handleUpdateProfileSubmit = async (data) => {
    setApiError("");
    const code = await userUpdateProfileRequset(data);
    if (code?.error) {
      setApiError(code?.message);
      return;
    }
    setConfirmOtp(true);
    setCode(code);
  };
  const handleOTPSubmit = async (data) => {
    setApiError("");
    const message = await userUpdateProfileCallback({
      ...data,
      code,
    });
    if (message?.error) {
      setApiError(message?.message);
      return;
    }
    dispatch(userFetch());
    setPrfEditForm(false);
    setConfirmOtp(false);
  };
  return (
    <>
      <section className="use-prf-left-main-bx">
        <section className="top-user-prof-search-bx top-user-prof-search-bx-acnt">
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

              <div className="notif-main-box">
                <div
                  onClick={() => setNotBox(!notBox)}
                  className="bell-icon bell-icon2"
                >
                  <i class="fa-regular fa-bell"></i>
                </div>

                <div className={notBox ? "notif-box notactive" : "notif-box"}>
                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="/images/customImg/team-2.jpg" alt="" />
                    </div>

                    <div className="right-not-box">
                      <h6>Andrew Garfield</h6>
                      <span> 29 July 2023 - 02:26 pM </span>
                    </div>
                  </div>

                  <div className="not-user-box">
                    <div className="left-not-box">
                      <img src="/images/customImg/team-2.jpg" alt="" />
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
                      <img src="/images/customImg/team-3.jpg" alt="" />
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
            {user ? (
              <Formik
                initialValues={initialRequsetValues}
                onSubmit={handleUpdateProfileSubmit}
                validationSchema={validationUpdateProfileRequest}
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
                    <Form>
                      <div className="u-prf-edt-inpt-bx">
                        <input
                          type="text"
                          name="fullname"
                          id="name"
                          placeholder="Full Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullname}
                        />
                        {touched.fullname && errors.fullname ? (
                          <div style={{ color: "red" }}>{errors.fullname}</div>
                        ) : null}
                      </div>

                      <div className="u-prf-edt-inpt-bx">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {touched.email && errors.email ? (
                          <div style={{ color: "red" }}>{errors.email}</div>
                        ) : null}
                      </div>

                      <div className="u-prf-edt-inpt-bx">
                        <input
                          type="text"
                          name="phoneNumber"
                          id="mobile"
                          placeholder="Mobile"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phoneNumber}
                        />
                        {touched.phoneNumber && errors.phoneNumber ? (
                          <div style={{ color: "red" }}>
                            {errors.phoneNumber}
                          </div>
                        ) : null}
                      </div>

                      <button type="submit" className="prof-chagen-btn">
                        Update
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            ) : null}

            <div
              className={
                confirmOtp === true
                  ? "confirm-otp-box otpactive"
                  : "confirm-otp-box"
              }
            >
              <h6>Confirm OTP</h6>
              <Formik
                initialValues={{ otp: "" }}
                onSubmit={handleOTPSubmit}
                validationSchema={validationUpdateProfilecallback}
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
                    <Form>
                      <div className="otp-field">
                        <input
                          type="text"
                          name="otp"
                          id="otp"
                          placeholder="Enter OTP"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.otp}
                        />
                        {touched.otp && errors.otp ? (
                          <div style={{ color: "red" }}>{errors.otp}</div>
                        ) : null}
                      </div>

                      <button type="submit" className="otp-btn">
                        Submit
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              {apiError ? <p style={{ color: "red" }}>{apiError}</p> : null}
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
