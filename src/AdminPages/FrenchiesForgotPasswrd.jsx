import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const FrenchiesForgotPasswrd = () => {
  const [forgotpasswrdtext, setForgotPasswrdText] = useState(
    "Reset Password  Request"
  );
  const [forgtPaswrdHead, setForgtPasswrdHead] = useState("Forgot Password");
  const [forgtActive, setForgtActive] = useState(false);
  const [newPasswrd, setNewPasswrd] = useState(false);
  const [thanksBx, setThanksBx] = useState(false);

  const forgotPassFunc = () => {
    if (forgotpasswrdtext === "Reset Password  Request") {
      setForgotPasswrdText("Verify OTP");
    } else {
      setForgotPasswrdText("Reset Password  Request");
    }

    if (forgtPaswrdHead === "Forgot Password") {
      setForgtPasswrdHead("OTP Verification");
    } else {
      setForgtPasswrdHead("Forgot Password");
    }

    setForgtActive(true);
  };

  const newPasswrdFunc = () => {
    setNewPasswrd(true);
    setForgtPasswrdHead("New Password");
  };

  const thanksFunc = () => {
    setThanksBx(true);
  };

  return (
    <>
      <section className="admin-login-comp">
        <div
          className={
            thanksBx
              ? "frenchies-thanks-main frenthankmain"
              : "frenchies-thanks-main"
          }
        >
          <div className="thank-u-box thank-u-box2">
            <div className="thank-u-gif">
              <img src="/images/customImg/happy.gif" alt="" />
            </div>

            <p>Your Password has Been Updated!</p>

            <NavLink to="/frenchiesDashboard" className="dashb-btn">
              {" "}
              Dashboard{" "}
            </NavLink>
          </div>

          <div className="admin-login-main admin-login-main3">
            <div className="admin-login-img">
              <img src="/images/customImg/nav-logo.png" alt="" />
            </div>

            <p> {forgtPaswrdHead} </p>

            <div
              className={
                newPasswrd
                  ? "forgot-newpasswrd-thanksmessage-mainbx newpasswrdactive"
                  : "forgot-newpasswrd-thanksmessage-mainbx"
              }
            >
              <div className="new-password-bx">
                <form action="#">
                  <div className=" ">
                    <label htmlFor="Company_Name">New Password</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="New_Password"
                        id="New_Password"
                        placeholder="New Password"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fildnew-passwrd mt-3">
                    <label htmlFor="Company_Name">Confirm Password</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="Confirm_Password"
                        id="Confirm_Password"
                        placeholder="Confirm Password "
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </form>

                <button
                  onClick={() => thanksFunc()}
                  className="admin-form-btn mt-5"
                >
                  {" "}
                  Save Password{" "}
                </button>
              </div>

              <div
                className={
                  forgtActive
                    ? "forgot-password forgtpasswrdactive"
                    : "forgot-password"
                }
              >
                <form action="#">
                  <div className="admin-login-fild forgotpasswrd-input">
                    <label htmlFor="Company_Name">Email / Mobile No.</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="otp"
                        id="otp"
                        placeholder="Type your Email or Mobile No."
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild otp-input">
                    <label htmlFor="Company_Name">OTP</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="otp"
                        id="otp"
                        placeholder="Enter here your OTP"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </form>

                <button
                  onClick={() => forgotPassFunc()}
                  className="admin-form-btn mt-5 forgt-passwrd-btn"
                >
                  {" "}
                  Reset Password Request{" "}
                </button>
                <button
                  onClick={() => newPasswrdFunc()}
                  className="admin-form-btn mt-5 passwrd-otp-btn "
                >
                  {" "}
                  Verify OTP{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrenchiesForgotPasswrd;
