import React, { useEffect } from "react";
import "../style/LogReg.css";
import { Form, Formik } from "formik";
import { validationVerifyOtpCollector } from "../validators/auth/kabadCollectorAuth";
import { useDispatch, useSelector } from "react-redux";
import { userVerifySignup } from "../features/auth/authActions";
import { VerifyToSignup } from "./Auth/VerifyToSignup";
import Redirect from "./Auth/RedirectIfLogin";

const Otp = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((s) => s.auth);
  const { errors: errorsInAuth } = useSelector((s) => s.auth);
  const initialValues = {
    otp: "",
  };
  const handleSubmit = (data) => {
    const newData = { ...data, email: user?.email, loginType: user?.loginType };
    dispatch(userVerifySignup(newData));
  };
  return (
    <>
      <VerifyToSignup />
      <Redirect />
      <section className="reset-passwrd-comp">
        <div className="reset-passwrd-grid">
          <div className="left-reset-passwrd-grid-bx">
            <div className="login-form-bx">
              <div className="login-logo login-logo2">
                <img src="./images/resources/logo.png" alt="" />
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
                      </div>
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
