import React, { useEffect, useState } from "react";
import "../style/LogReg.css";
import { Form, Formik } from "formik";
import { validationVerifyOtpCollector } from "../validators/auth/kabadCollectorAuth";
import { useDispatch, useSelector } from "react-redux";
import { userVerifySignup } from "../features/auth/authActions";
import { VerifyToSignup } from "./Auth/VerifyToSignup";
import Redirect from "./Auth/RedirectIfLogin";
import { getFromLocalStorage, setInLocalStorage } from "../lib/localStorage";
import { userResendOtp } from "../apis/auth";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, errors: errorsInAuth } = useSelector((s) => s.auth);
  const { userInfo } = useSelector((s) => s.user);
  const initialTime = 60;
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isResendActive, setIsResendActive] = useState(false);

  const initialValues = {
    otp: "",
  };
  const handleSubmit = (data) => {
    const newData = {
      ...data,
      phoneNumber: user?.phoneNumber,
      loginType: user?.loginType,
    };
    dispatch(userVerifySignup(newData));
  };

  const handleResendClick = () => {
    setIsResendActive(false);
    setRemainingTime(initialTime);
    userResendOtp(user?.email);
  };

  useEffect(() => {
    let timer;
    if (remainingTime > 0) {
      timer = setInterval(() => setRemainingTime(remainingTime - 1), 1000);
    } else {
      setIsResendActive(true);
    }
    return () => clearInterval(timer);
  }, [remainingTime]);
  return (
    <>
      <VerifyToSignup path={"/auth/collector"} />
      {userInfo?.role == "kabadCollector" ? (
        <Redirect path="/wastecolectdashboard" />
      ) : null}
      <section className="reset-passwrd-comp">
        <div className="reset-passwrd-grid">
          <div className="left-reset-passwrd-grid-bx">
            <div className="login-form-bx">
              <div className="login-logo login-logo2">
                <img src="/images/customImg/logo.png" alt="" />
              </div>
              <div className=" tw-text-green-500">
                Please check your WhatsApp for the OTP.
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationVerifyOtpCollector}
                onSubmit={handleSubmit}
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
                      {remainingTime > 0 ? (
                        <span>Resend in: {remainingTime} seconds</span>
                      ) : (
                        <button
                          type="button"
                          disabled={!isResendActive}
                          onClick={handleResendClick}
                          className=""
                        >
                          Re-Send OTP
                        </button>
                      )}
                      <div className="log-inpt-bx reset-psswrd-inpt otp-inpt-bx">
                        <input
                          type="text"
                          name="otp"
                          id="otp"
                          placeholder="Type your OTP"
                          autoComplete="off"
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.otp}
                        />
                        {touched.otp && errors.otp ? (
                          <div style={{ color: "red" }}>{errors.otp}</div>
                        ) : null}
                      </div>{" "}
                      <button
                        type="submit"
                        className="form-submit-btn reset-psswrd-btn"
                      >
                        Verify OTP
                      </button>
                      {errorsInAuth?.verifySignup ? (
                        <p style={{ color: "red" }}>
                          {errorsInAuth?.verifySignup}
                        </p>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => {
                          window.location.reload();
                        }}
                        className="userform-register-btn"
                      >
                        Login / Signup
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="right-reset-passwrd-grid-bx"></div>
        </div>
      </section>
    </>
  );
};

export default Otp;
