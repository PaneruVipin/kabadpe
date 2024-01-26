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
import { SignUpToVerify } from "./Auth/SignupToVerify";
import { userValidateKabadPeRefrral } from "../apis/auth";
import { AutoComplete } from "antd";
import { useQuery } from "@tanstack/react-query";
import { userServicableAriasFetch } from "../apis/kbadpeUser/appoinment";
import { workers } from "../lib/worker";

const Wastecolloginregist = () => {
  const dispatch = useDispatch();
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
  const sendReuqestfuct = () => {
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

  const initialValues =
    formBox === true
      ? {
          fullname: "",
          email: "",
          password: "",
          pincode: "",
          phoneNumber: "",
          companyRef: "",
          workerRole: "",
          ariaName: "",
          subAriaName: "",
        }
      : {
          phoneNumber: "",
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
          console.log("this is data", data);
          dispatch(userSignup({ ...data, loginType: "collector" }));
        }
      : (data) => {
          dispatch(userLogin({ ...data, loginType: "collector" }));
        };

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
                  console.log("errors in form ,, ", errors);
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
                          </>
                        ) : null}
                        <div className="log-inpt-bx log-inpt-bx-login">
                          <input
                            type="text"
                            name="phoneNumber"
                            id="phone"
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

                        {formBox === true ? (
                          <>
                            <div className="log-inpt-bx reg-inpt-bx">
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

                            <div className="log-inpt-bx reg-inpt-bx reg-inpt-bx5">
                              <AutoComplete
                                //  optionSelectedColor={"#050505"}
                                className="apnt-inpt-bx-autotype reg-inpt"
                                onChange={(v) => {
                                  values.ariaName = v;
                                  console.log(
                                    "values.ariaName values.ariaName",
                                    values.ariaName,
                                    v
                                  );
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
                            </div>

                            <div className="log-inpt-bx reg-inpt-bx reg-inpt-bx5">
                              <AutoComplete
                                //  optionSelectedColor={"#050505"}
                                className="apnt-inpt-bx-autotype reg-inpt"
                                options={subArias}
                                filterOption={true}
                                onChange={(v) => {
                                  values.subAriaName = v;
                                  console.log(
                                    "values.subAriaName values.subAriaName",
                                    values.subAriaName,
                                    v
                                  );
                                  handleBlur({
                                    target: { name: "subAriaName" },
                                  });
                                }}
                                onBlur={(e) => (
                                  (e.target.name = "subAriaName"), handleBlur(e)
                                )}
                                placeholder="Enter SubArea"
                              />
                            </div>
                            <div className="log-inpt-bx reg-inpt-bx">
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
                                  Choose
                                </option>
                                {workers.map(({ label, value, id }) => (
                                  <option key={id} value={value}>
                                    {label}
                                  </option>
                                ))}
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
                                <div className="log-inpt-bx reg-inpt-bx">
                                  <input
                                    type="text"
                                    name="companyRef"
                                    id="companyRef"
                                    placeholder="Company Referral Code"
                                    autoComplete="off"
                                    onChange={async (e) => {
                                      values.companyRef = e.target.value;
                                      const result = values?.companyRef?.trim()
                                        ? await userValidateKabadPeRefrral(
                                            values?.companyRef?.trim()
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
                                </div>
                              </>
                            ) : null}
                            <div className="log-inpt-bx reg-inpt-bx">
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
                            <div className="log-inpt-bx log-inpt-bx-login">
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

                      <div className="forgt-passwrd-check-bx-flex mt-3">
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

export default Wastecolloginregist;
