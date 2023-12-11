import React, { useState } from "react";
import "../style/LogReg.css";
import { Form, Formik } from "formik";
import {
  validationLoginCollector,
  validationSignupCollector,
} from "../validators/auth/kabadCollectorAuth";
import { userLogin, userSignup } from "../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import Redirect from "./Auth/RedirectIfLogin";
import { useNavigate } from "react-router-dom";
import { SignUpToVerify } from "./Auth/SignupToVerify";
import Protect from "./Auth/ProtectComp";

const Wastecollloginregist = ({ onClickRedirectMyDetailsPage }) => {
  const dispatch = useDispatch();
  const { errors: errorsInAuth } = useSelector((s) => s?.auth);
  const [formBox, setFormBox] = useState(false);
  const [changeText, setChangeText] = useState("Sign Up");
  const [formText, setFormText] = useState("Log In");
  const [thanksText, setThanksText] = useState(false);
  const [forgotPara, setForgotPara] = useState(false);
  const [formComp, setFormComp] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [checkBxValue, setCheckBxValue] = useState(false);
  const [checkBxValueNo, setCheckBxValueNo] = useState(false);

  const sendReuqestfuct = () => {
    setForgotPara(true);

    setTimeout(() => {
      setForgotPara(false);
    }, 5000);
  };

  const thanksBtn = () => {
    setThanksText(true);

    setTimeout(() => {
      setThanksText(false);
    }, 6000);
  };

  const toggleForm = () => {
    setFormBox(!formBox);
  };

  const TextContent = () => {
    if (formText === "Log In") {
      setFormText("Request For Registration");
    } else {
      setFormText("Log In");
    }

    if (changeText === "Sign Up") {
      setChangeText("Sign In");
    } else {
      setChangeText("Sign Up");
    }
  };
  const initialValues =
    formBox === true
      ? {
          fullname: "",
          email: "",
          password: "",
          pincode: "",
          phoneNumber: "",
          companynumber: "",
        }
      : {
          email: "",
          password: "",
        };
  const validationSchema =
    formBox === true ? validationSignupCollector : validationLoginCollector;
  const handleSubmit =
    formBox === true
      ? (data) => {
          if (!termsChecked) {
            return;
          }
          console.log("data running", data);
          dispatch(userSignup({ ...data, loginType: "collector" }));
        }
      : (data) => {
          dispatch(userLogin({ ...data, loginType: "collector" }));
        };

  const checboxyes = () => {
    setCheckBxValue(true);
    setCheckBxValueNo(false);
  };

  const checboxno = () => {
    setCheckBxValue(false);
    setCheckBxValueNo(true);
  };

  return (
    <>
      <Redirect />
      <SignUpToVerify />
      <section
        className={
          formComp === true
            ? "log-regist-comp maincompactive"
            : "log-regist-comp"
        }
      >
        <div className="log-reg-grid">
          <div className="left-log-reg-form-grid-bx">
            <div className="login-form-bx">
              <div className="login-logo">
                <img src="/images/resources/logo.png" alt="" />
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                  console.log("errors", errors);
                  console.log("values", values);
                  return (
                    <Form
                      className={
                        formBox === true
                          ? "log-regst-form registformactive"
                          : "log-regst-form"
                      }
                    >
                      <div className="register-form-height-box">
                        {formBox === true ? (
                          <>
                            <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="fullname"
                                id="name"
                                placeholder="Full Name"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.fullname}
                              />
                              {touched?.fullname && errors?.fullname ? (
                                <div style={{ color: "red" }}>
                                  {errors?.fullname}
                                </div>
                              ) : null}
                            </div>

                        

                            <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="phoneNumber"
                                id="mobile"
                                placeholder="Phone No."
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.phoneNumber}
                              />
                              {touched?.phoneNumber && errors?.phoneNumber ? (
                                <div style={{ color: "red" }}>
                                  {errors?.phoneNumber}
                                </div>
                              ) : null}
                            </div>

                            <div className="log-inpt-bx log-inpt-bx-login">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email or Username"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.email}
                              />
                              {touched?.email && errors?.email ? (
                                <div style={{ color: "red" }}>
                                  {errors?.email}
                                </div>
                              ) : null}
                            </div>

                            <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="companyRef"
                                id="companynumber"
                                placeholder="Company Referral Number"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.companyRef}
                              />
                              {touched?.companyRef && errors?.companynumber ? (
                                <div style={{ color: "red" }}>
                                  {errors?.companyRef}
                                </div>
                              ) : null}
                            </div>

                            <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                placeholder="Work Area Pincode"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.pincode}
                              />
                              {touched?.pincode && errors?.pincode ? (
                                <div style={{ color: "red" }}>
                                  {errors?.pincode}
                                </div>
                              ) : null}
                            </div>

                            <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="workCity"
                                id="workcity"
                                placeholder="Area Name"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.workCity}
                              />
                              {touched?.workCity && errors?.workCity ? (
                                <div style={{ color: "red" }}>
                                  {errors?.workCity}
                                </div>
                              ) : null}
                            </div>

                            <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="aadharcard"
                                id="aadharcard"
                                placeholder="Aadhar Card"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.panNo}
                              />
                              {touched?.panNo && errors?.panNo ? (
                                <div style={{ color: "red" }}>
                                  {errors?.panNo}
                                </div>
                              ) : null}
                            </div>

                            {/* </div>/ */}
                          </>
                        ) : null}

                        <div className="log-inpt-bx log-inpt-bx-login">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email or Username"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.email}
                          />
                          {touched?.email && errors?.email ? (
                            <div style={{ color: "red" }}>{errors?.email}</div>
                          ) : null}
                        </div>

                        <div className="log-inpt-bx log-inpt-bx-login">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.password}
                          />
                          {touched?.password && errors?.password ? (
                            <div style={{ color: "red" }}>
                              {errors?.password}
                            </div>
                          ) : null}
                        </div>

                        {formBox === true ? <></> : null}
                      </div>

                      <div className="forgt-passwrd-check-bx-flex">
                        <div className="form-check">
                          <input
                            checked={termsChecked}
                            onChange={(e) => setTermsChecked(e.target.checked)}
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Please Read "Team & Conditions" for Waste Collectors
                            and Confirm before Clicking the Request Button
                          </label>
                        </div>

                        <p
                          onClick={() => setFormComp(true)}
                          className="forgot-pass-btn"
                        >
                          Forgot Password!
                        </p>
                      </div>

                      <button
                        type="submit"
                        // onClick={() => thanksBtn()}
                        className="form-submit-btn"
                      >
                        {formText}
                      </button>
                      <div>
                        {formBox === true ? (
                          errorsInAuth?.signup ? (
                            <p style={{ color: "red" }}>
                              {errorsInAuth?.signup}
                            </p>
                          ) : null
                        ) : errorsInAuth.login ? (
                          <p style={{ color: "red" }}>{errorsInAuth.login}</p>
                        ) : null}
                      </div>

                      <div className="thanks_para">
                        {/* {thanksText && (
                          <p>
                            Thank You For Your Intertest, Admin will check and
                            Confirm Your Registration, You Will Be Notify On
                            Your Mail/Mobile Number Soon.
                          </p>
                        )} */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>

              <div className="switch-form-btn">
                <p>New to Kabadpe? </p>
                <button
                  onClick={() => {
                    toggleForm(), TextContent();
                  }}
                >
                  {changeText}!
                </button>
              </div>
            </div>
          </div>

          <div className="right-forgot-password-form-bx ">
            <div className="login-form-bx">
              <div className="login-logo">
                <img src="/images/resources/logo.png" alt="" />
              </div>
              <form action="#">
                <div className="log-inpt-bx log-forgot-passwrd-inpt-bx">
                  <input
                    type="text"
                    name="mobemail"
                    id="mobemail"
                    placeholder="Mobile No./Email Id"
                    autoComplete="off"
                  />
                </div>

                <button
                  onClick={() => sendReuqestfuct()}
                  className="form-submit-btn forgot-passwrd-btn-send-rquest"
                >
                  Send Request
                </button>

                <div className="forgot-text">
                  {forgotPara && (
                    <p>
                      Password Reset Link Has Been Sent To Your Register Email
                      and Mobile!
                    </p>
                  )}
                </div>

                <div className="switch-form-btn">
                  <p>New to Kabadpe? </p>
                  <p onClick={() => setFormComp(false)}>Log In</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wastecollloginregist;
