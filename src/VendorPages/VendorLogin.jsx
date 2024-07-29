import React, { useEffect, useState } from "react";
import "../style/Vendor.css";
import { NavLink, useNavigate } from "react-router-dom";
import Accordion from "./VendorComp/Accordion";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  vendorLoginAction,
  vendorSignupAction,
  vendorVerifySignupAction,
} from "../features/vendorAuth/vendorAuthActions";
import { userFetch } from "../features/user/userActions";
import { debounceAsync } from "../lib/debounce";
import {
  addCompanyDetails,
  addVendorAddressDetails,
  addVendorTaxDetails,
  vendorSignupResendOtp,
  vendorStoreNameAvailability,
} from "../apis/vendor/auth";
const VendorLogin = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [vendForm, setVendForm] = useState(false);
  const [vendMain, setVendMain] = useState(false);
  const [forgotPasswrd, setForgotPasswrd] = useState(false);
  const [paswrdText, setPaswrdText] = useState("Forgot Password");
  const [createAccount, setCreateAccount] = useState(false);
  const [selling, setSelling] = useState(false);
  const [shopDetForm, setShopDetForm] = useState(false);
  const [shopName, setShopName] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [taxDet, setTaxDet] = useState(false);
  const [confrmMesage, setConfrmMesage] = useState(false);
  const [storeName, setStoreName] = useState("");
  const [apiErrors, setApiErrors] = useState({});
  const [haveGst, setHaveGst] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialTime = 60;
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isResendActive, setIsResendActive] = useState(false);
  const { user, loading, success, errors, ...rest } = useSelector(
    (s) => s?.vendorAuth
  );
  const { userInfo, loading: vendorLoading } = useSelector((s) => s?.user);
  const handleChange = (e) => {
    const name = e.target.value;
    setShopName(name);

    const isValid = /^[a-zA-Z\s]+$/.test(name);

    setIsValidName(name.length >= 6 && isValid);
  };

  const handleSignupSubmit = (data) => {
    dispatch(vendorSignupAction(data));
  };
  const handleOtpSubmit = ({ otp }) => {
    dispatch(
      vendorVerifySignupAction({
        otp,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
      })
    );
  };
  const handleCompanyDetailSubmit = async (data) => {
    if (apiErrors?.storeName) {
      return;
    }
    const res = await addCompanyDetails(data);
    if (res?.eroor) {
      return;
    }
    dispatch(userFetch({ type: "vendor" }));
    setShopDetForm(true);
  };
  const handleLoginSubmit = (data) => {
    dispatch(vendorLoginAction(data));
  };
  const handleTaxDetailSubmit = async (data) => {
    const newData = { ...data };
    if (!haveGst) {
      newData.gstNumber = "";
    }
    const res = await addVendorTaxDetails(newData);
    if (res?.error) {
      return;
    }
    setConfrmMesage(true);
    dispatch(userFetch({ type: "vendor" }));
  };
  const handleAddressSubmit = async (data) => {
    const res = await addVendorAddressDetails(data);
    if (res?.error) {
      return;
    }
    setTaxDet(true);
    dispatch(userFetch({ type: "vendor" }));
  };
  useEffect(() => {
    if (success?.signup) {
      setCreateAccount(true);
    }
    if (success?.verifySignup) {
      setSelling(true);
    }
    dispatch(userFetch({ type: "vendor" }));
  }, [success]);
  useEffect(() => {
    if (userInfo?.role != "vendor") {
      return;
    }
    if (!userInfo?.isOtpVerified) {
      setVendForm(true);
      setCreateAccount(true);
    } else if (userInfo?.vendorStatus == "active") {
      navigate("/vendorpanel");
    } else if (!userInfo?.VendorDetail) {
      setVendForm(true);
      setCreateAccount(true);
      setSelling(true);
    } else {
      setVendForm(true);
      setCreateAccount(true);
      setSelling(true);
      setShopDetForm(true);
      setTaxDet(true);
      setConfrmMesage(true);
    }
  }, [userInfo, vendorLoading]);
  console.log("userinfo loading", userInfo, vendorLoading);
  const handleResendClick = () => {
    setIsResendActive(false);
    setRemainingTime(initialTime);
    vendorSignupResendOtp({ ...user });
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
      <section className="vendor-login-comp">
        <div className="common-container">
          <div
            className={
              confrmMesage ? "vend-mesage-bx mesageactive" : "vend-mesage-bx"
            }
          >
            <div
              className={
                vendForm
                  ? "vendor-login-main-bx vendformactive"
                  : "vendor-login-main-bx"
              }
            >
              <div
                className={
                  forgotPasswrd
                    ? "vendor-login-bx v-log-bx forgotpasswrdactive"
                    : "vendor-login-bx v-log-bx"
                }
              >
                <div className="vendor-login-logo">
                  <img src="/images/customImg/nav-logo.png" alt="" />
                </div>

                <h6> {forgotPasswrd ? paswrdText : "Vendor Log In"} </h6>
                <Formik initialValues={{}} onSubmit={handleLoginSubmit}>
                  {({
                    handleBlur,
                    handleChange,
                    values,
                    errors,
                    touched,
                    ...rest
                  }) => {
                    return (
                      <Form className="ven-log-form">
                        <div className="vend-bx">
                          <span>Email</span>
                          <div className="vend-inpt-bx">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="off"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.email}
                            />
                          </div>
                        </div>

                        <div className="vend-bx">
                          <span>Password</span>
                          <div className="vend-inpt-bx vend-inpt-bx2">
                            <input
                              type={passwordView ? "password" : "text"}
                              name="password"
                              id="password"
                              autoComplete="off"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.password}
                            />
                            <div
                              className={
                                passwordView
                                  ? "passwrd-btn-bx hidepassword"
                                  : "passwrd-btn-bx"
                              }
                            >
                              <button
                                type="button"
                                onClick={() => setPasswordView(true)}
                                className="view-btn view-btn1"
                              >
                                <ion-icon name="eye-outline"></ion-icon>
                              </button>
                              <button
                                type="button"
                                onClick={() => setPasswordView(false)}
                                className="view-btn view-btn2"
                              >
                                <ion-icon name="eye-off-outline"></ion-icon>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="vend-check-bx vend-check-bx2">
                          <div className="check-bx cehck-bx-v check-bx-v2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <span>Remember my preference</span>
                        </div>

                        <div
                          onClick={() => setForgotPasswrd(true)}
                          className="vend-forgt-paswrd-btn"
                        >
                          Forgot Password ?
                        </div>

                        <button type="submit" className="vend-submt-btn">
                          Sign In
                        </button>

                        <p className="vend-text">
                          Don't have an account ?{" "}
                          <span onClick={() => setVendForm(true)}>
                            Create Account
                          </span>
                        </p>
                      </Form>
                    );
                  }}
                </Formik>
                <form action="#" className="forgot-password-vendor">
                  <div className="vend-bx mb-5">
                    <span>Email / Mobile No.</span>
                    <div className="vend-inpt-bx">
                      <input
                        type="text"
                        name="emailmob"
                        id="emailmob"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  <button className="vend-submt-btn">
                    Reset Password Request
                  </button>
                </form>
              </div>

              <div
                className={
                  createAccount
                    ? "create-account-main-bx createaccountactive"
                    : "create-account-main-bx"
                }
              >
                <div className="vendor-reg-bx vendor-login-bx">
                  <Formik initialValues={{}} onSubmit={handleSignupSubmit}>
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
                          <div className="vendor-login-logo">
                            <img src="/images/customImg/nav-logo.png" alt="" />
                          </div>

                          <h6> Create Account </h6>

                          <div className="vend-reg-form-grid">
                            <div className="vend-bx">
                              <span>Your Name</span>
                              <div className="vend-inpt-bx">
                                <input
                                  type="text"
                                  name="fullname"
                                  id="name"
                                  autoComplete="off"
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.fullname}
                                />
                              </div>
                            </div>

                            <div className="vend-bx">
                              <span>Mobile Number</span>
                              <div className="vend-inpt-bx">
                                <input
                                  type="number"
                                  name="phoneNumber"
                                  id="phone"
                                  autoComplete="off"
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.phoneNumber}
                                />
                              </div>
                            </div>

                            <div className="vend-bx">
                              <span>Email</span>
                              <div className="vend-inpt-bx">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  autoComplete="off"
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.email}
                                />
                              </div>
                            </div>

                            <div className="vend-bx vend-bx-p">
                              <span>Password</span>
                              <div className="vend-inpt-bx">
                                <input
                                  type="password"
                                  name="password"
                                  id="Password"
                                  placeholder="At least 10 characters"
                                  autoComplete="off"
                                  minLength={10}
                                  min={10}
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.password}
                                />
                              </div>

                              {/* <span>
                                Password must be at least 10 characters
                              </span> */}
                            </div>
                          </div>

                          <span className="note-textx">
                            By enrolling your mobile phone number . you consent
                            to receive automated security notifications via text
                            message from TGSS . Message and data rates may apply
                          </span>

                          <button
                            type="submit"
                            className="vend-submt-btn reg-btn-vend mt-4 cont-btn-v"
                          >
                            Continue
                          </button>

                          <p className="vend-text">
                            {" "}
                            have an account ?{" "}
                            <span onClick={() => setVendForm(false)}>
                              Sign In
                            </span>
                          </p>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>

                <div
                  className={
                    selling
                      ? "reg-start-selling-main-bx regselingactive"
                      : "reg-start-selling-main-bx"
                  }
                >
                  <div className="verify-mobile-number-bx vendor-login-bx">
                    <div className="vendor-login-logo">
                      <img src="/images/customImg/nav-logo.png" alt="" />
                    </div>

                    <h6> Verify Mobile Number </h6>

                    <p>
                      A text with a One Time Password (OTP) has been sent to
                      your mobile number:{" "}
                    </p>
                    <Formik initialValues={{}} onSubmit={handleOtpSubmit}>
                      {({
                        handleBlur,
                        handleChange,
                        values,
                        errors,
                        touched,
                        ...rest
                      }) => {
                        return (
                          <Form className="verify-mob-form">
                            <div className="vend-bx">
                              <span>Enter OTP</span>
                              <div className="vend-inpt-bx">
                                <input
                                  name="otp"
                                  type="number"
                                  id="otp"
                                  autoComplete="off"
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.otp}
                                />
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={handleResendClick}
                              disabled={!isResendActive}
                              className="resend-otp-text"
                            >
                              Resend OTP{" "}
                              {remainingTime
                                ? "in " + remainingTime + " Seconds"
                                : ""}
                            </button>

                            <button
                              type="submit"
                              className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v"
                            >
                              Create your TGSS account
                            </button>
                          </Form>
                        );
                      }}
                    </Formik>
                    <p>
                      By creating an account , you agree to TGSS{" "}
                      <NavLink to="#">Conditions of Use </NavLink>
                      and <NavLink to="#">Privacy Notice</NavLink>
                    </p>
                  </div>

                  <div
                    className={
                      shopDetForm
                        ? "about-your-busniess-main-bx businessactive"
                        : "about-your-busniess-main-bx"
                    }
                  >
                    {selling && !vendorLoading && userInfo?.role == "vendor" ? (
                      <Formik
                        initialValues={userInfo || {}}
                        onSubmit={handleCompanyDetailSubmit}
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
                              <div className="reg-start-sell-bx ">
                                <h6>Register and Start Selling</h6>
                                <p>
                                  Please have the following before you again:
                                </p>

                                <div className="seling-list">
                                  <li>
                                    Your bank account details for receiving
                                    payments from TGSS{" "}
                                  </li>
                                  <li>
                                    Tax (GST/PAN) details of your business{" "}
                                  </li>
                                </div>

                                <span className="comn-text">
                                  Please ensure that all the information you
                                  submit is accurate .
                                </span>

                                <h5>
                                  Enter details below to continue registration{" "}
                                </h5>

                                <div className="busin-inpt-bx">
                                  <div className="vend-bx">
                                    <span>Company/Business name</span>
                                    <div className="vend-inpt-bx">
                                      <input
                                        type="text"
                                        name="companyName"
                                        id="businessname"
                                        autoComplete="off"
                                        required
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values?.companyName}
                                      />
                                    </div>
                                  </div>

                                  <span className="comn-text d-inline-block mb-3">
                                    Enter the company / business name a
                                    registered in GST/PAN
                                  </span>
                                  <div className="vend-bx">
                                    <div className="top-inpt-text">
                                      <span>Set a name for your GSS Store</span>
                                    </div>
                                    <div className="vend-inpt-bx">
                                      <input
                                        type="text"
                                        name="storeName"
                                        id="shopname"
                                        autoComplete="off"
                                        required
                                        onChange={(e) => {
                                          setStoreName("");
                                          setApiErrors({});
                                          debounceAsync(async () => {
                                            const res =
                                              await vendorStoreNameAvailability(
                                                e.target.value
                                              );
                                            if (res?.error) {
                                              setApiErrors({
                                                storeName: res?.message,
                                              });
                                              return;
                                            }
                                            setStoreName(e.target.value);
                                          }, 300)();
                                          handleChange(e);
                                        }}
                                        onBlur={handleBlur}
                                        value={values?.storeName}
                                      />
                                    </div>

                                    {apiErrors?.storeName ? (
                                      <p
                                        className="avail"
                                        style={{ color: "red" }}
                                      >
                                        {apiErrors?.storeName}
                                      </p>
                                    ) : storeName ? (
                                      <p className="avail">
                                        Store Name {storeName} is Available
                                      </p>
                                    ) : null}
                                  </div>
                                </div>

                                <div className="seller-agrenmt-bx">
                                  <h6>Seller Agreement</h6>

                                  <div className="vend-check-bx vend-check-bx2">
                                    <div className="check-bx cehck-bx-v">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                        required
                                      />
                                    </div>
                                    <p>
                                      I have read and agree to comply with
                                      and/or be bound by terms and conditions of{" "}
                                      <span>
                                        TGSS services business Solutions
                                        Agreement , Terms and Conditions{" "}
                                      </span>{" "}
                                      and{" "}
                                      <span>
                                        TGSS business Terms & conditions .{" "}
                                      </span>
                                    </p>
                                  </div>

                                  <button
                                    type="submit"
                                    className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v"
                                  >
                                    Continue
                                  </button>
                                </div>
                              </div>
                            </Form>
                          );
                        }}
                      </Formik>
                    ) : null}
                    <div
                      className={
                        taxDet
                          ? "tax-det-main-bx taxdetactive"
                          : "tax-det-main-bx"
                      }
                    >
                      <div className="about-your-business-bx">
                        <div className="shop-grid-bx">
                          <div className="shop-left-bx">
                            <h5>Tell us about your business</h5>
                            {shopDetForm &&
                            !vendorLoading &&
                            userInfo?.role == "vendor" ? (
                              <Formik
                                initialValues={userInfo?.VendorAddress || {}}
                                onSubmit={handleAddressSubmit}
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
                                    <Form className="shop-form-bx">
                                      <div className="shop-name-grid">
                                        <div className="check-avail-bx"></div>
                                      </div>

                                      <h6>Enter your busniess address</h6>

                                      <div className="address-form-grid">
                                        <div className="vend-bx">
                                          <span>Pincode</span>
                                          <div className="vend-inpt-bx">
                                            <input
                                              type="text"
                                              name="pincode"
                                              id="pincode"
                                              autoComplete="off"
                                              required
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values?.pincode}
                                            />
                                          </div>
                                        </div>

                                        <div className="vend-bx">
                                          <span>Address Line 1</span>
                                          <div className="vend-inpt-bx">
                                            <input
                                              type="text"
                                              name="addressLine1"
                                              id="addressone"
                                              autoComplete="off"
                                              required
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values?.addressLine1}
                                            />
                                          </div>
                                        </div>

                                        <div className="vend-bx">
                                          <span>Address Line 2</span>
                                          <div className="vend-inpt-bx">
                                            <input
                                              type="text"
                                              name="addressLine2"
                                              id="addresstwo"
                                              autoComplete="off"
                                              required
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values?.addressLine2}
                                            />
                                          </div>
                                        </div>

                                        <div className="vend-bx">
                                          <span>City</span>
                                          <div className="vend-inpt-bx">
                                            <input
                                              type="text"
                                              name="city"
                                              id="city"
                                              autoComplete="off"
                                              required
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values?.city}
                                            />
                                          </div>
                                        </div>

                                        <div className="vend-bx">
                                          <span>State</span>
                                          <div className="vend-inpt-bx">
                                            <select
                                              name="state"
                                              id="state"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values?.state}
                                            >
                                              <option value="state">
                                                State1
                                              </option>
                                              <option value="state">
                                                State2
                                              </option>
                                              <option value="state">
                                                State3
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>

                                      <button
                                        type="submit"
                                        className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v btn-left"
                                      >
                                        Continue
                                      </button>
                                    </Form>
                                  );
                                }}
                              </Formik>
                            ) : null}
                          </div>

                          <div className="shop-left-bx right-accordion-box">
                            <h5>FAQ</h5>

                            <div className="accordion-main-bx">
                              <Accordion
                                title="Can I change my GSS store name ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I change the category letter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Which address should I enter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I enter multiple pickup address ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="reg-start-sell-bx tax-det-bx about-your-business-bx">
                        <h6>Update your Tax details </h6>

                        <div className="shop-grid-bx">
                          {taxDet &&
                          !vendorLoading &&
                          userInfo?.role == "vendor" ? (
                            <Formik
                              initialValues={userInfo?.VendorDetail || {}}
                              onSubmit={handleTaxDetailSubmit}
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
                                    <div className="tax-det-form-bx">
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                        className="vend-check-bx vend-check-bx3"
                                      >
                                        <div className="check-bx cehck-bx-v">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            checked={haveGst}
                                            id="flexCheckDefault"
                                            onChange={() =>
                                              setHaveGst(!haveGst)
                                            }
                                          />
                                        </div>
                                        <span style={{ marginBottom: "2rem" }}>
                                          I have GSTIN number
                                        </span>
                                      </div>
                                      <div className="tax-det-form-grid">
                                        <div className="vend-bx">
                                          <span>Seller Legal Name</span>
                                          <div className="vend-inpt-bx">
                                            <input
                                              type="text"
                                              name="sellarLegalName"
                                              id="sellername"
                                              autoComplete="off"
                                              required
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values?.sellarLegalName}
                                            />
                                          </div>
                                        </div>

                                        <div className="vend-bx">
                                          <span>PAN Number</span>
                                          <div className="vend-inpt-bx">
                                            <input
                                              type="text"
                                              name="panNumber"
                                              id="pan"
                                              autoComplete="off"
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values?.panNumber}
                                            />
                                          </div>
                                        </div>

                                        {haveGst ? (
                                          <div className="vend-bx">
                                            <span>GST Number</span>
                                            <div className="vend-inpt-bx">
                                              <input
                                                type="text"
                                                name="gstNumber"
                                                id="gst"
                                                autoComplete="off"
                                                required
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values?.gstNumber}
                                              />
                                            </div>
                                          </div>
                                        ) : null}
                                      </div>
                                      <button
                                        type="submit"
                                        className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v btn-left"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </Form>
                                );
                              }}
                            </Formik>
                          ) : null}
                          <div className="shop-left-bx right-accordion-box">
                            <h5>FAQ</h5>

                            <div className="accordion-main-bx">
                              <Accordion
                                title="Can I change my GSS store name ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I change the category letter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Which address should I enter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I enter multiple pickup address ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  vendor-form-messge-bx">
              <div className="vend-smile-bx">
                <img src="./images/customImg/happy.gif" alt="" />
              </div>

              <p>
                Your application has been submitted you will be notified on your
                registered mobile number and email.
              </p>

              <NavLink to="/">Back To Home</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorLogin;
