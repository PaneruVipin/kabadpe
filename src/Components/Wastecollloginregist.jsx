import React, { useEffect, useState } from "react";
import "../style/LogReg.css";
import { Form, Formik } from "formik";
import {
  validationLoginCollector,
  validationSignupCollector,
} from "../validators/auth/kabadCollectorAuth";
import { userLogin, userSignup } from "../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import Redirect from "./Auth/RedirectIfLogin";
import { SignUpToVerify } from "./Auth/SignupToVerify";
import { userValidateKabadPeRefrral } from "../apis/auth";
import { AutoComplete } from "antd";
import { useQuery } from "@tanstack/react-query";
import { userServicableAriasFetch } from "../apis/kbadpeUser/appoinment";
import { workers } from "../lib/worker";
import {
  workerForgetPassCallback,
  workerForgetPassRequestOTP,
  workerForgetPassRequestReset,
  workerForgetPassResendOTP,
} from "../apis/worker/auth";
import { resetpasswordValidation } from "../validators/user/resetPasswordValidator";
import { number, object, string } from "yup";

const Wastecolloginregist = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { errors: errorsInAuth } = useSelector((s) => s?.auth);
  const { userInfo } = useSelector((s) => s.user);
  const [formBox, setFormBox] = useState(false);
  const [changeText, setChangeText] = useState("Sign Up");
  const [formText, setFormText] = useState("Log In");
  const [forgotPara, setForgotPara] = useState(false);
  const [formComp, setFormComp] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [refrralValidation, setRefrralValidation] = useState(null);
  const [pincode, setPincode] = useState("");
  const [arias, setArias] = useState([]);
  const [subArias, setSubArias] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [forgotOtp, setForgotOtp] = useState(false);
  const [forgotResetPassword, setForgotResetPassword] = useState(false);
  const [codes, setCodes] = useState({});
  const [otherErrors, setOtherErrors] = useState({});
  const [timer, setTimer] = useState(60);
  const [buttonText, setButtonText] = useState("");
  useEffect(() => {
    let intervalId;

    if (timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setButtonText("Resend OTP");
    }

    return () => clearInterval(intervalId);
  }, [timer]);
  const sendReuqestfuct = () => {
    setForgotPara(false);

    setForgotOtp(true);
  };

  const forgotOtpFunc = () => {
    setForgotPara(false);
    setForgotPara(false);
    setForgotResetPassword(true);
  };

  const ResetForgetPasswordFunc = () => {
    setForgotPara(true);
    setTimeout(() => {
      setForgotPara(false);
    }, 5000);
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

  const { data: servicableAddresses } = useQuery({
    queryKey: ["servicableAddresses:workerLogin"],
    queryFn: () => userServicableAriasFetch(),
  });

  const getArias = (pincode, res) => {
    return [
      ...new Set(
        res.filter((e) => e?.pincode == pincode)?.map((e, i) => e?.ariaName)
      ),
    ]?.map((name, i) => ({ id: i, name }));
  };

  const getSubArias = (pincode, aria, res) => {
    return [
      ...new Set(
        res
          .filter((e) => e?.pincode == pincode && e?.ariaName == aria)
          ?.map((e, i) => e?.subAriaName)
      ),
    ]?.map((name, i) => ({ id: i, name }));
  };

  const [initialValues, setInitialValues] =
    formBox === true
      ? useState({
          fullname: "",
          email: "",
          password: "",
          pincode: "",
          phoneNumber: "",
          companyRef: "",
          workerRole: "",
          ariaName: "",
          subAriaName: "",
          emergencyPhone: "",
        })
      : useState({
          phoneNumber: "",
          password: "",
        });
  const validationSchema =
    formBox === true ? validationSignupCollector : validationLoginCollector;
  const handleSubmit =
    formBox === true
      ? (data) => {
          if (!termsChecked) {
            return;
          }
          dispatch(userSignup({ ...data, loginType: "collector" }));
        }
      : (data) => {
          dispatch(userLogin({ ...data, loginType: "collector" }));
        };
  const handleForgetPassword = forgotResetPassword
    ? async ({ newPassword }) => {
        setOtherErrors({ forget: "" });
        const res = await workerForgetPassCallback({
          password: newPassword,
          code: codes?.reset,
        });
        if (!res.error) {
          setFormComp(false);
          setForgotOtp(false);
          setForgotResetPassword(false);
          return;
        }
        setOtherErrors({ forget: res?.message });
      }
    : forgotOtp
    ? async ({ otp }) => {
        setOtherErrors({ forget: "" });
        const res = await workerForgetPassRequestReset({
          otp,
          code: codes?.otp,
        });
        if (!res?.error) {
          setCodes((prev) => ({ ...prev, reset: res }));
          forgotOtpFunc();
          return;
        }
        setOtherErrors({ forget: res?.message });
      }
    : async ({ phoneNumber }) => {
        setOtherErrors({ forget: "" });
        const res = await workerForgetPassRequestOTP(phoneNumber);
        if (!res?.error) {
          setCodes((prev) => ({
            ...prev,
            otp: res?.code,
            tempOTP: res?.otp,
            phoneNumber,
          }));
          sendReuqestfuct();
          return;
        }
        setOtherErrors({ forget: res?.message });
      };
  const forgetPassValidation = forgotResetPassword
    ? resetpasswordValidation
    : forgotOtp
    ? object().shape({ otp: number().required("OTP is required") })
    : object().shape({
        phoneNumber: string()
          .required("Phone number is required")
          .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
      });
  const handleButtonClick = async () => {
    const res = await workerForgetPassResendOTP(codes?.phoneNumber);
    if (!res?.error) {
      setCodes((prev) => ({ ...prev, otp: res?.code, tempOTP: res?.otp }));
    }
    setTimer(60);
    setButtonText("");
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.get("cc");
    setQuery(query || "");
    if (query) {
      setFormBox(true);
      setInitialValues((prev) => ({ ...prev, companyRef: query, }));
    }
  }, []);
  return (
    <>
      {userInfo?.role == "kabadCollector" ? (
        <Redirect path="/wastecolectdashboard" />
      ) : null}
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
                <img src="/images/customImg/logo.png" alt="" />
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
                  return (
                    <Form
                      className={
                        formBox === true
                          ? "log-regst-form registformactive"
                          : "log-regst-form"
                      }
                    >
                      <input
                        style={{ height: 0, width: 0 }}
                        type="text"
                        name="fakeusernameremembered"
                      />
                      <input
                        style={{ height: 0, width: 0 }}
                        type="password"
                        name="fakepasswordremembered"
                      />
                      <div className="register-form-height-box">
                        {formBox === true ? (
                          <>
                            <div className="log-inpt-bx log-reg-inpt-bx reg-inpt-bx">
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
                          </>
                        ) : null}
                        <div className="log-inpt-bx log-reg-inpt-bx  log-inpt-bx-login">
                          <input
                            type="text"
                            name="phoneNumber"
                            id="phone"
                            placeholder="WhatsApp No."
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

                        {formBox === true ? (
                          <>
                            <div className="log-inpt-bx log-reg-inpt-bx  reg-inpt-bx">
                              <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                placeholder="Work Area Pincode"
                                autoComplete="off"
                                onChange={(e) => {
                                  setPincode(e?.target?.value);
                                  const arias = getArias(
                                    e?.target?.value,
                                    servicableAddresses
                                  );
                                  setArias(
                                    arias?.map(({ name }) => ({
                                      value: name,
                                      lable: name,
                                    }))
                                  );
                                  handleChange(e);
                                }}
                                onBlur={handleBlur}
                                value={values?.pincode}
                              />
                              {touched?.pincode && errors?.pincode ? (
                                <div style={{ color: "red" }}>
                                  {errors?.pincode}
                                </div>
                              ) : null}
                            </div>

                            <div className="log-inpt-bx  reg-inpt-bx reg-inpt-bx5">
                              <AutoComplete
                                //  optionSelectedColor={"#050505"}
                                className="apnt-inpt-bx-autotype reg-inpt"
                                onChange={(v) => {
                                  values.ariaName = v;
                                  const subArias = getSubArias(
                                    pincode,
                                    v,
                                    servicableAddresses
                                  );
                                  setSubArias(
                                    subArias?.map(({ name }) => ({
                                      value: name,
                                      lable: name,
                                    }))
                                  );
                                  handleBlur({
                                    target: { name: "ariaName" },
                                  });
                                }}
                                onBlur={(e) => (
                                  (e.target.name = "ariaName"), handleBlur(e)
                                )}
                                options={arias}
                                filterOption={true}
                                placeholder="Enter Area"
                              />
                              {touched?.ariaName && errors?.ariaName ? (
                                <div style={{ color: "red" }}>
                                  {errors?.ariaName}
                                </div>
                              ) : null}
                            </div>

                            <div className="log-inpt-bx   reg-inpt-bx reg-inpt-bx5">
                              <AutoComplete
                                //  optionSelectedColor={"#050505"}
                                className="apnt-inpt-bx-autotype reg-inpt"
                                options={subArias}
                                filterOption={true}
                                onChange={(v) => {
                                  values.subAriaName = v;
                                  handleBlur({
                                    target: { name: "subAriaName" },
                                  });
                                }}
                                onBlur={(e) => (
                                  (e.target.name = "subAriaName"), handleBlur(e)
                                )}
                                placeholder="Enter SubArea"
                              />
                              {touched?.subAriaName && errors?.subAriaName ? (
                                <div style={{ color: "red" }}>
                                  {errors?.subAriaName}
                                </div>
                              ) : null}
                            </div>
                            <div className="log-inpt-bx log-reg-inpt-bx reg-inpt-bx">
                              <select
                                name="workerRole"
                                id="workertype"
                                onChange={(e) => {
                                  setSelectedRole(e?.target.value);
                                  handleChange(e);
                                }}
                                onBlur={handleBlur}
                                value={values?.workerRole}
                                defaultValue={values?.workerRole}
                              >
                                <option value="" hidden>
                                  Choose Worker Type
                                </option>
                                {workers.map(
                                  ({ label, hindiLable, value, id }) => (
                                    <option key={id} value={value}>
                                      {hindiLable}
                                    </option>
                                  )
                                )}
                              </select>
                              {touched?.workerRole && errors?.workerRole ? (
                                <div style={{ color: "red" }}>
                                  {errors?.workerRole}
                                </div>
                              ) : null}
                            </div>

                            {selectedRole == "kabadi" ? (
                              <>
                                {" "}
                                <span className="soc-sec-text">
                                  Company Referral Code Optional
                                </span>
                                <div className="log-inpt-bx  reg-inpt-bx">
                                  <input
                                    type="text"
                                    name="companyRef"
                                    id="companyRef"
                                    placeholder="Company Referral Code"
                                    autoComplete="off"
                                    onChange={async (e) => {
                                      values.companyRef = e.target.value;
                                      const result = e.target.value.trim()
                                        ? await userValidateKabadPeRefrral(
                                            e.target.value?.trim()
                                          )
                                        : "";
                                      document.getElementById("email").focus();
                                      document
                                        .getElementById("companyRef")
                                        .focus();
                                      setRefrralValidation(result);
                                    }}
                                    onBlur={handleBlur}
                                    value={values?.companyRef}
                                  />
                                </div>
                                {touched.companyRef && errors?.companyRef ? (
                                  <div style={{ color: "red" }}>
                                    {errors?.companyRef}
                                  </div>
                                ) : null}
                                {refrralValidation?.error ? (
                                  <div style={{ color: "red" }}>
                                    {refrralValidation?.message}
                                  </div>
                                ) : (
                                  <div style={{ color: "green" }}>
                                    {refrralValidation?.name}
                                  </div>
                                )}
                              </>
                            ) : null}
                            <div className="log-inpt-bx log-reg-inpt-bx  reg-inpt-bx">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email. "
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
                          </>
                        ) : null}
                        <div className="log-inpt-bx log-reg-inpt-bx  log-inpt-bx-login">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
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
                            <div className="log-inpt-bx log-reg-inpt-bx  log-inpt-bx-login">
                              <input
                                type="text"
                                name="emergencyPhone"
                                id="emergencynumber"
                                placeholder="Emergency Number"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.emergencyPhone}
                              />
                              {touched?.emergencyPhone &&
                              errors?.emergencyPhone ? (
                                <div style={{ color: "red" }}>
                                  {errors?.emergencyPhone}
                                </div>
                              ) : null}
                            </div>
                          </>
                        ) : null}
                      </div>

                      <div className="forgt-passwrd-check-bx-flex  mt-3">
                        <div className="form-check ">
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
                <img src="/images/customImg/logo.png" alt="" />
              </div>
              {formComp ? (
                <Formik
                  initialValues={{
                    otp: "",
                    phoneNumber: "",
                    newPassword: "",
                    confirmNewPassword: "",
                  }}
                  onSubmit={handleForgetPassword}
                  validationSchema={forgetPassValidation}
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
                        <div
                          className={
                            forgotResetPassword
                              ? "forgot-reset-paswrd-main forgotpasswordactive"
                              : "forgot-reset-paswrd-main"
                          }
                        >
                          <div
                            className={
                              forgotOtp
                                ? "forgot-OTP-main forgototpactive"
                                : "forgot-OTP-main"
                            }
                          >
                            <div className="log-inpt-bx forgotpassword-inpt  log-forgot-passwrd-inpt-bx">
                              <input
                                type="text"
                                name="phoneNumber"
                                id="mobemail"
                                placeholder="Mobile No."
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.phoneNumber}
                              />
                            </div>
                            {touched?.phoneNumber && errors?.phoneNumber ? (
                              <div style={{ color: "red" }}>
                                {errors?.phoneNumber}
                              </div>
                            ) : null}
                            <div className="otp-forgot-bx">
                              <div className=" tw-text-green-500">
                                Please check your WhatsApp for the OTP.
                              </div>
                              <div className="timer-text">
                                {timer > 0
                                  ? `Resend OTP in ${timer} seconds`
                                  : ""}
                                {buttonText ? (
                                  <button
                                    type="button"
                                    onClick={handleButtonClick}
                                  >
                                    {buttonText}{" "}
                                  </button>
                                ) : null}
                              </div>
                              <div className="log-inpt-bx   log-forgot-passwrd-inpt-bx">
                                <input
                                  type="text"
                                  name="otp"
                                  id="Otp"
                                  placeholder="Enter here OTP"
                                  autoComplete="off"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.otp}
                                />
                              </div>
                            </div>
                            {touched?.otp && errors?.otp ? (
                              <div style={{ color: "red" }}>{errors?.otp}</div>
                            ) : null}
                            {otherErrors?.forget && otherErrors?.forget ? (
                              <div style={{ color: "red" }}>
                                {otherErrors?.forget}
                              </div>
                            ) : null}
                            {forgotOtp ? (
                              <button
                                type="submit"
                                className="form-submit-btn forgot-passwrd-btn-send-rquest "
                              >
                                Verify OTP
                              </button>
                            ) : null}
                          </div>

                          <div className="forgot-reset-passwrd-bx">
                            <div className="log-inpt-bx f-new-paswrd   log-forgot-passwrd-inpt-bx">
                              <input
                                type="text"
                                name="newPassword"
                                id="newPassword"
                                placeholder="Enter New Password"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.newPassword}
                              />
                            </div>
                            {touched?.newPassword && errors?.newPassword ? (
                              <div style={{ color: "red" }}>
                                {errors?.newPassword}
                              </div>
                            ) : null}

                            <div className="log-inpt-bx f-confrm-paswrd   log-forgot-passwrd-inpt-bx">
                              <input
                                type="text"
                                name="confirmNewPassword"
                                id="confrmPassword"
                                placeholder="Enter New Confirm Password"
                                autoComplete="off"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.confirmNewPassword}
                              />
                            </div>
                            {touched?.confirmNewPassword &&
                            errors?.confirmNewPassword ? (
                              <div style={{ color: "red" }}>
                                {errors?.confirmNewPassword}
                              </div>
                            ) : null}
                            {forgotResetPassword ? (
                              <button
                                type="submit"
                                className="form-submit-btn forgot-passwrd-btn-send-rquest "
                              >
                                Save Password
                              </button>
                            ) : null}
                          </div>

                          {forgotOtp === false ? (
                            <button
                              type="submit"
                              className="form-submit-btn forgot-passwrd-btn-send-rquest otp-Forgot-Btn"
                            >
                              Send Request
                            </button>
                          ) : null}
                        </div>

                        <div className="forgot-text">
                          {forgotPara && (
                            <p>
                              {/* Password Reset Link Has Been Sent To Your Register
                            Email and Mobile! */}
                            </p>
                          )}
                        </div>

                        {/* {forgotOtp === false ? ( */}
                        <div className="switch-form-btn">
                          {/* <p>New to Kabadpe? </p> */}
                          <p
                            onClick={() => {
                              setFormComp(false);
                              setForgotOtp(false);
                              setForgotResetPassword(false);
                              setOtherErrors({ forget: "" });
                            }}
                          >
                            Log In
                          </p>
                        </div>
                        {/* ) : null} */}
                      </Form>
                    );
                  }}
                </Formik>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wastecolloginregist;
