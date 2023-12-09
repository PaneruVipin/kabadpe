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
import { userValidateKabadPeRefrral } from "../apis/auth";


const Wastecollloginregist = ({onClickRedirectMyDetailsPage}) => {
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
  const [refrralValidation, setRefrralValidation] = useState(null);

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
          companyRef: "",
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
                  console.log("errors  1", errors);
                  // console.log("values", values);
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

                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="date"
                                name="dob"
                                id="dateofbirth"
                                placeholder="Date Of Birth"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.dob}
                              />
                              {touched?.dob && errors?.dob ? (
                                <div style={{ color: "red" }}>
                                  {errors?.dob}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="caste"
                                id="caste"
                                placeholder="Caste"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.caste}
                              />
                              {touched?.caste && errors?.caste ? (
                                <div style={{ color: "red" }}>
                                  {errors?.caste}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="religion"
                                id="religion"
                                placeholder="Religion"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.religion}
                              />
                              {touched?.religion && errors?.religion ? (
                                <div style={{ color: "red" }}>
                                  {errors?.religion}
                                </div>
                              ) : null}
                            </div> */}

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

                            {/* <span className="soc-sec-text">
                              Social Security
                            </span> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx reg-inpt-bx5">
                              <label htmlFor="aadharfront">Aadhar Front</label>
                              <input
                                type="file"
                                accept="image/*"
                                name="aadharFront"
                                id="aadharfront"
                                placeholder="Aadhar Front"
                                autoComplete="off"
                                onChange={(e) => {
                                  values.aadharFront = e.target.files?.[0];
                                  document.getElementById("aadharback").focus();
                                }}
                                onBlur={handleBlur}
                              />
                              {touched?.aadharFront && errors?.aadharFront ? (
                                <div style={{ color: "red" }}>
                                  {errors?.aadharFront}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx reg-inpt-bx5">
                              <label htmlFor="aadharfront">Aadhar Back</label>
                              <input
                                type="file"
                                accept="image/*"
                                name="aadharBack"
                                id="aadharback"
                                placeholder="Aadhar Back"
                                autoComplete="off"
                                onChange={(e) => {
                                  values.aadharBack = e.target.files?.[0];
                                  document
                                    .getElementById("verification")
                                    .focus();
                                }}
                                onBlur={handleBlur}
                              />
                              {touched?.aadharBack && errors?.aadharBack ? (
                                <div style={{ color: "red" }}>
                                  {errors?.aadharBack}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <span className="soc-sec-text">
                              Do you have Insurance ?
                            </span> */}

                            {/* <div className="insu-btn-flex-box">
                              <div className="ins-btn-box">
                                <div
                                  onClick={checboxyes}
                                  className={
                                    checkBxValue === true
                                      ? "ins-tick-btn instickactive"
                                      : "ins-tick-btn"
                                  }
                                ></div>
                                <span>Yes</span>
                              </div>

                              <div className="ins-btn-box">
                                <div
                                  onClick={checboxno}
                                  className={
                                    checkBxValueNo === true
                                      ? "ins-tick-btn instickactive"
                                      : "ins-tick-btn"
                                  }
                                ></div>
                                <span>No</span>
                              </div>
                            </div>

                            {checkBxValue ? (
                              <div
                                className={
                                  checkBxValue
                                    ? "log-inpt-bx reg-inpt-bx reg-inpt-bx-ins insinputactive"
                                    : "log-inpt-bx reg-inpt-bx reg-inpt-bx-ins"
                                }
                              >
                                <input
                                  type="text"
                                  name="insurance"
                                  id="insurance"
                                  placeholder="Insurance"
                                  autoComplete="off"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.insurance}
                                />
                                {touched?.insurance && errors?.insurance ? (
                                  <div style={{ color: "red" }}>
                                    {errors?.insurance}
                                  </div>
                                ) : null}
                              </div>
                            ) : null} */}

                            {/* <div className="log-inpt-bx reg-inpt-bx reg-inpt-bx5">
                              <label htmlFor="aadharfront">
                                Police Verification
                              </label>
                              <input
                                type="file"
                                accept="image/*"
                                name="policeVerification"
                                id="verification"
                                placeholder="Police Verification"
                                autoComplete="off"
                                onChange={(e) => {
                                  values.policeVerification =
                                    e.target.files?.[0];
                                  document
                                    .getElementById("heathCheckupDate")
                                    .focus();
                                }}
                                onBlur={handleBlur}
                              />
                              {touched?.policeVerification &&
                              errors?.fulpoliceVerificationlname ? (
                                <div style={{ color: "red" }}>
                                  {errors?.policeVerification}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx reg-inpt-bx5">
                              <label htmlFor="">Health check up</label>
                              <input
                                type="date"
                                name="heathCheckupDate"
                                id="heathCheckupDate"
                                placeholder="Health check up"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.heathCheckupDate}
                              />
                              {touched?.heathCheckupDate &&
                              errors?.heathCheckupDate ? (
                                <div style={{ color: "red" }}>
                                  {errors?.heathCheckupDate}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx reg-inpt-bx5">
                              <label htmlFor="">Training on safety</label>
                              <input
                                type="date"
                                name="saftyTrainingDate"
                                id="date"
                                placeholder="Training on safety"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.saftyTrainingDate}
                              />
                              {touched?.saftyTrainingDate &&
                              errors?.saftyTrainingDate ? (
                                <div style={{ color: "red" }}>
                                  {errors?.saftyTrainingDate}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="bankName"
                                id="bankname"
                                placeholder="Bank Name"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.bankName}
                              />
                              {touched?.bankName && errors?.bankName ? (
                                <div style={{ color: "red" }}>
                                  {errors?.bankName}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="password"
                                name="bankAccountNumber"
                                id="banknumber"
                                placeholder="Account Number"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.bankAccountNumber}
                              />
                              {touched?.bankAccountNumber &&
                              errors?.bankAccountNumber ? (
                                <div style={{ color: "red" }}>
                                  {errors?.bankAccountNumber}
                                </div>
                              ) : null}
                            </div> */}
                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="bankAccountHolderName"
                                placeholder="Account Holder Name"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.bankAccountHolderName}
                              />
                              {touched?.bankAccountHolderName &&
                              errors?.bankAccountHolderName ? (
                                <div style={{ color: "red" }}>
                                  {errors?.bankAccountHolderName}
                                </div>
                              ) : null}
                            </div> */}
                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="ifsc"
                                id="ifsc"
                                placeholder="IFSC Code"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.ifsc}
                              />
                              {touched?.ifsc && errors?.ifsc ? (
                                <div style={{ color: "red" }}>
                                  {errors?.ifsc}
                                </div>
                              ) : null}
                            </div> */}

                            {/* <div className="log-inpt-bx reg-inpt-bx">
                              <input
                                type="text"
                                name="panNo"
                                id="pancard"
                                placeholder="PAN card"
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
                            </div> */}

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

                            <span className="soc-sec-text">
                              Company Referral Number
                            </span>
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

                            {/* </div>/ */}
                          </>
                        ) : null}

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

                        {formBox === true ? (
                          <>
                            
                          </>
                        ) : null}
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
