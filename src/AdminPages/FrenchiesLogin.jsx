import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  userLogin,
  userSignup,
  userVerifySignup,
} from "../features/auth/authActions";
import {
  validationLoginFranchise,
  validationSignupFranchise,
} from "../validators/franchise/auth";
import { useEffect } from "react";
import { number, object, string } from "yup";

const FrenchiesLogin = () => {
  const [apiTouched, setApiTouched] = useState({});
  const dispatch = useDispatch();
  const {
    errors: {
      login: loginError,
      signup: signupError,
      verifySignup: verifySignupError,
    },
    loading: {
      login: loginLoading,
      signup: signupLoading,
      verifySignup: verifySignupLoading,
    },
    user,
    success: { login, signup, verifySignup },
  } = useSelector((s) => s.auth);
  const {
    userInfo: franchise,
    success: userSuccess,
    loading,
  } = useSelector((s) => s.user);

  const [showPassword, setShowPassword] = useState(false);
  const [frenchiesSignup, setFrenchiesSignup] = useState(false);
  // const [signupText , setSignupText] = useState('Sign Me In');
  const [signIn, setSignIn] = useState("Sign up");
  const [frenHead, setFrenHead] = useState("Frenchies Log In");
  const [otp, setOtp] = useState(false);
  // const [thankText , setThankText] = useState(false);
  const [frencParent, setFrencParent] = useState(false);
  const [priceNum, setPriceNum] = useState(null);
  const [wasteColectPrice, setWasteColectPrice] = useState(false);
  const [chosePlan, setChosePlan] = useState(false);
  const [frenchLoginMain, setFrenchLoginMain] = useState(false);
  const [mainFrenchLogin, setMainFrenchLogin] = useState(false);
  const [selctArea, setSelctArea] = useState(false);
  const [areaSelct, setAreaSelct] = useState([]);

  const handleAreaChange = (area) => {
    if (areaSelct.includes(area)) {
      setAreaSelct(areaSelct.filter((item) => item !== area));
    } else {
      setAreaSelct([...areaSelct, area]);
    }
  };

  const handleChangeFuncPasswrd = function (e) {
    setAdminPaswrd(e.target.value);
  };

  const frenchiesSubmitBtn = () => {
    setFrenchiesSignup(!frenchiesSignup);
    if (signIn === "Sign up") {
      setSignIn("sign In");
    } else {
      setSignIn("Sign up");
    }

    if (frenHead === "Frenchies Log In") {
      setFrenHead("Frenchies Sign Up");
    } else {
      setFrenHead("Frenchies Log In");
    }
  };

  const otpFunc = () => {
    setOtp(true);
    if (frenHead === "Frenchies Sign Up") {
      setFrenHead("OTP Verification");
    } else {
      setFrenHead("Frenchies Sign Up");
    }
  };

  const verifOtp = () => {
    setChosePlan(true);
    setFrenchLoginMain(true);
  };

  const btnValue = (priceValue) => {
    setPriceNum(priceValue);
  };

  const payFunc = () => {
    setMainFrenchLogin(true);
  };

  const setselctarea = () => {
    setSelctArea(!selctArea);
  };

  const signupInitialValues = frenchiesSignup
    ? {
        fullname: "",
        email: "",
        password: "",
        phoneNumber: "",
        gst: "",
        companyName: "",
        confirmPassword: "",
        franchiseAddress: "",
      }
    : { email: "", password: "" };
  const handleSignupSubmiSubmit = (data) => {
    if (frenchiesSignup) {
      dispatch(userSignup({ ...data, loginType: "franchise" }));
      setApiTouched({ ...apiTouched, signup: true });
    } else {
      dispatch(userLogin({ ...data, loginType: "franchise" }));
      setApiTouched({ ...apiTouched, login: true });
    }
  };
  const handleOTPSubmit = (data) => {
    dispatch(
      userVerifySignup({ ...data, email: user?.email, loginType: "franchise" })
    );
  };
  const signupSchema = frenchiesSignup
    ? validationSignupFranchise
    : validationLoginFranchise;
  useEffect(() => {
    if (user?.loginType == "franchise") {
      if (login) {
        if (user?.user?.unverified) {
          otpFunc();
        }
      } else if (signup) {
        otpFunc();
      }
    }
  }, [login, signup, verifySignup, user]);

  useEffect(() => {
    if (franchise?.role == "franchiseAdmin") {
      if (franchise?.franchiseStatus == "1") {
        payFunc();
      } else if (franchise?.franchiseStatus == "1") {
      }
    }
  }, [franchise, userSuccess, loading]);
  console.log(
    "condition ><>, ",
    apiTouched?.login && loginError && !loginLoading,
    apiTouched,
    loginError,
    loginLoading
  );
  return (
    <>
      <main
        className={
          mainFrenchLogin
            ? "french-login-main mainfrenchloginactive"
            : "french-login-main"
        }
      >
        <section
          className={
            frenchLoginMain
              ? "admin-login-comp admin-login-comp2 frenchLoginActive"
              : "admin-login-comp admin-login-comp2"
          }
        >
          <div
            className={
              frencParent
                ? "frenchies-login-parent-box frencparentactive"
                : "frenchies-login-parent-box"
            }
          >
            <div
              className={
                otp
                  ? "admin-login-main admin-login-main5 otpactive"
                  : "admin-login-main admin-login-main5"
              }
            >
              <div className="verify-otp-box">
                <div className="admin-login-img">
                  <img src="./images/customImg/nav-logo.png" alt="" />
                </div>

                <p> {frenHead} </p>
                <Formik
                  initialValues={{ otp: "" }}
                  onSubmit={handleOTPSubmit}
                  validationSchema={object().shape({
                    otp: number().required("Valid OTP Requird"),
                  })}
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
                        <div className="admin-login-fild">
                          <label htmlFor="Company_Name">OTP Verification</label>
                          <div className="admin-login-input">
                            <input
                              type="text"
                              name="otp"
                              id="otp"
                              placeholder=""
                              autoComplete="off"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.otp}
                            />
                          </div>
                          {touched.otp && errors.otp ? (
                            <div style={{ color: "red" }}>{errors.otp}</div>
                          ) : null}
                        </div>
                        <button type="submit" className="admin-form-btn mt-5">
                          Verify OTP
                        </button>
                        ;
                      </Form>
                    );
                  }}
                </Formik>
              </div>
              <Formik
                initialValues={signupInitialValues}
                onSubmit={handleSignupSubmiSubmit}
                validationSchema={signupSchema}
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
                        frenchiesSignup
                          ? "frenchiessingup frencactive"
                          : "frenchiessingup"
                      }
                    >
                      {frenchiesSignup ? (
                        <div className="frenchies-singup-box">
                          <div className="french-signup-form-bx">
                            <div className="admin-login-img">
                              <img
                                src="./images/customImg/nav-logo.png"
                                alt=""
                              />
                            </div>

                            <p> {frenHead} </p>

                            <div className="frenchies-signup-grid">
                              <div className="admin-login-fild">
                                <label htmlFor="Company_Name">
                                  Company Name
                                </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="companyName"
                                    id="company"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.companyName}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.companyName && errors.companyName ? (
                                  <div style={{ color: "red" }}>
                                    {errors.companyName}
                                  </div>
                                ) : null}
                              </div>

                              <div className="admin-login-fild">
                                <label htmlFor="gst">GST (Optional) </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="gst"
                                    id="gst"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.gst}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.gst && errors.gst ? (
                                  <div style={{ color: "red" }}>
                                    {errors.gst}
                                  </div>
                                ) : null}
                              </div>

                              <div className="admin-login-fild">
                                <label htmlFor="fulname">Full Name </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="fullname"
                                    id="fulname"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullname}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.fullname && errors.fullname ? (
                                  <div style={{ color: "red" }}>
                                    {errors.fullname}
                                  </div>
                                ) : null}
                              </div>

                              <div className="admin-login-fild">
                                <label htmlFor="mobnum">Mobile Number </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="phoneNumber"
                                    id="mobnum"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phoneNumber}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.phoneNumber && errors.phoneNumber ? (
                                  <div style={{ color: "red" }}>
                                    {errors.phoneNumber}
                                  </div>
                                ) : null}
                              </div>

                              <div className="admin-login-fild">
                                <label htmlFor="Id">Email Id </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="email"
                                    id="Id"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.email && errors.email ? (
                                  <div style={{ color: "red" }}>
                                    {errors.email}
                                  </div>
                                ) : null}
                              </div>

                              <div className="admin-login-fild">
                                <label htmlFor="areawork">Area Of Work </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="franchiseAddress"
                                    id="areawork"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.franchiseAddress}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.franchiseAddress &&
                                errors.franchiseAddress ? (
                                  <div style={{ color: "red" }}>
                                    {errors.franchiseAddress}
                                  </div>
                                ) : null}
                              </div>

                              <div className="admin-login-fild">
                                <label htmlFor="password">Password </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.password && errors.password ? (
                                  <div style={{ color: "red" }}>
                                    {errors.password}
                                  </div>
                                ) : null}
                              </div>

                              <div className="admin-login-fild">
                                <label htmlFor="confpassword">
                                  Confirm Password{" "}
                                </label>
                                <div className="admin-login-input">
                                  <input
                                    type="text"
                                    name="confirmPassword"
                                    id="confpassword"
                                    placeholder=""
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    autoComplete="off"
                                  />
                                </div>
                                {touched.confirmPassword &&
                                errors.confirmPassword ? (
                                  <div style={{ color: "red" }}>
                                    {errors.confirmPassword}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            {apiTouched?.signup &&
                            signupError &&
                            !signupLoading ? (
                              <div style={{ color: "red" }}>{signupError}</div>
                            ) : null}
                            <button
                              type="submit"
                              className="admin-form-btn admin-form-btn2 admin-form-btn4 "
                            >
                              Sign Me Up
                            </button>

                            <p className="signuptext">
                              have an account ?{" "}
                              <a href="#" onClick={() => frenchiesSubmitBtn()}>
                                {signIn}
                              </a>{" "}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="admin-login-form">
                          <div className="admin-login-img">
                            <img src="./images/customImg/nav-logo.png" alt="" />
                          </div>
                          <div className="admin-login-form-mini-bx"></div>

                          <p> {frenHead} </p>
                          <div className="admin-login-fild">
                            <label htmlFor="email">Email.</label>
                            <div className="admin-login-input">
                              <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                autoComplete="off"
                              />
                            </div>
                            {errors.email ? (
                              <div style={{ color: "red" }}>{errors.email}</div>
                            ) : null}
                          </div>

                          <div className="admin-login-fild">
                            <label htmlFor="email">Password</label>
                            <div className="admin-login-input">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder=""
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                autoComplete="off"
                              />

                              <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="view-eye-btn"
                              >
                                {showPassword ? (
                                  <i className="fa-regular fa-eye"></i>
                                ) : (
                                  <i className="fa-regular fa-eye-slash"></i>
                                )}
                              </div>
                              {errors.password ? (
                                <div style={{ color: "red" }}>
                                  {errors.password}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          <div className="form-check2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Remember my preference
                            </label>
                          </div>

                          <NavLink to="/forgotpassword">
                            {" "}
                            <button className="admin-forgot-passwrd-btn">
                              Forgot Password ?
                            </button>
                          </NavLink>
                          {apiTouched?.login && loginError && !loginLoading ? (
                            <div style={{ color: "red" }}>{loginError}</div>
                          ) : null}
                          <button
                            type="submit"
                            className="admin-form-btn admin-form-btn2 admin-form-btn3"
                          >
                            Sign Me In
                          </button>

                          <p className="signuptext">
                            Don't have an account ?{" "}
                            <a href="#" onClick={() => frenchiesSubmitBtn()}>
                              {signIn}
                            </a>{" "}
                          </p>
                        </div>
                      )}
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>

          {/* <div
            className={
              chosePlan
                ? "choose-your-plan-main-bx choseplanactive"
                : "choose-your-plan-main-bx"
            }
          >
            <div className="admin-login-img">
              <img src="./images/customImg/nav-logo.png" alt="" />
            </div>
            <h6>Choose Your Plan</h6>

            <div className="chose-plan-flex-bx">
              <button onClick={() => setWasteColectPrice(!wasteColectPrice)}>
                Monthly
              </button>
              <button onClick={() => setWasteColectPrice(!wasteColectPrice)}>
                Quaterly
              </button>
              <button>Variable</button>
              <button onClick={() => setselctarea()}>Individual</button>
            </div>

            <div
              className={
                wasteColectPrice
                  ? "numbr-wast-colect-bx numbwasteactive"
                  : "numbr-wast-colect-bx"
              }
            >
              <p className="wastecolect-text">Number of Waste Collector</p>

              <div className="waste-colect-btn">
                <button onClick={() => btnValue("1")}> 5 </button>
                <button onClick={() => btnValue("2")}> 10 </button>
                <button onClick={() => btnValue("3")}>1 5 </button>
              </div>

              <div className="price-show-bx">
                {priceNum === "1" ? (
                  <p>
                    Price : <span>₹215</span>{" "}
                  </p>
                ) : null}
                {priceNum === "2" ? (
                  <p>
                    Price : <span>₹300</span>{" "}
                  </p>
                ) : null}
                {priceNum === "3" ? (
                  <p>
                    Price : <span>₹425</span>{" "}
                  </p>
                ) : null}
              </div>
            </div>

            <div
              className={
                wasteColectPrice || selctArea
                  ? "select-area-main-bx selctareaactive"
                  : "select-area-main-bx"
              }
            >
              <div className="selct-area-main">
                <p> Select Area </p>

                <div className="select-area-flex-bx">
                  <button
                    className={
                      areaSelct.includes("laxminagar")
                        ? "area-btn areaactive"
                        : "area-btn"
                    }
                    onClick={() => handleAreaChange("laxminagar")}
                  >
                    Laxmi Nagar
                  </button>

                  <button
                    className={
                      areaSelct.includes("azadnagar")
                        ? "area-btn areaactive"
                        : "area-btn"
                    }
                    onClick={() => handleAreaChange("azadnagar")}
                  >
                    Azad Nagar
                  </button>

                  <button
                    className={
                      areaSelct.includes("gandhinagar")
                        ? "area-btn areaactive"
                        : "area-btn"
                    }
                    onClick={() => handleAreaChange("gandhinagar")}
                  >
                    Gandhi Nagar
                  </button>
                </div>
              </div>
            </div>

            <button onClick={() => payFunc()} className="pay-nw-btn submit-btn">
              Pay Now
            </button>
          </div> */}

          <div className="thank-u-box">
            <div className="thank-u-gif">
              <img src="./images/customImg/happy.gif" alt="" />
            </div>

            <p>
              Thank You, Your application has been submitted, We will check and
              confirm via email or SMS.
            </p>

            <span className="dashb-btn"> See You Soon </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default FrenchiesLogin;
