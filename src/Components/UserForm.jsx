import React, { useEffect, useState } from "react";
import "../style/UserForm.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import {
  validationLoginUser,
  validationSignupUser,
} from "../validators/auth/userAuth";
import { useDispatch, useSelector } from "react-redux";
import {
  userLogin,
  userSignup,
  userVerifySignup,
} from "../features/auth/authActions";
import { SignUpToVerify } from "./Auth/SignupToVerify";
import { validationVerifyOtpCollector } from "../validators/auth/kabadCollectorAuth";
import {
  googleAuth,
  userForgetPassCallback,
  userForgetPassRequestOTP,
  userForgetPassRequestReset,
  userForgetPassResendOTP,
  userResendOtp,
  verifysignup,
} from "../apis/auth";
import { object, string } from "yup";
import { resetpasswordValidation } from "../validators/user/resetPasswordValidator";

const UserForm = ({ closepopUpUserForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    user,
    success: { login, signup, verifySignup },
    errors: {
      login: errorLogin,
      signup: errorSignup,
      verifySignup: errorVerify,
    },
  } = useSelector((s) => s.auth);
  const { userInfo } = useSelector((s) => s.user);
  const [userFormText, setUserFormText] = useState("Login");
  const [loginChoice, setLoginChoice] = useState("or login with");
  const [userFormBtn, setUserFormBtn] = useState("Register new account");
  const [userFormCont, setUserFormCont] = useState(false);
  const [userFormheading, setUserFormheading] = useState("Login to account");
  const [userFormSec, setUserFormSec] = useState(true);
  const [userForgotPasswrd, setUserForgotPasswrd] = useState(false);
  const [timer, setTimer] = useState(60);
  const [buttonText, setButtonText] = useState("");
  const [userparent, setUserParent] = useState(false);
  const [mainparent, setMainParent] = useState(false);
  const [reset, setReset] = useState(false);
  const [codes, setCodes] = useState({});
  const [otherErrors, setOtherErrors] = useState({});
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

  const handleButtonClick = !userForgotPasswrd
    ? () => {
        userResendOtp(user?.email);
        setTimer(60);
        setButtonText("");
      }
    : async () => {
        const res = await userForgetPassResendOTP(codes?.email);
        if (!res?.error) {
          setCodes((prev) => ({ ...prev, OTP: res }));
        }
        setTimer(60);
        setButtonText("");
      };

  const UserFormToggle = () => {
    if (userFormCont == false) {
      setUserFormCont(true);
    } else {
      setUserFormCont(false);
    }

    if (userFormText === "Login") {
      setUserFormText("Register");
    } else {
      setUserFormText("Login");
    }

    if (loginChoice === "or login with") {
      setLoginChoice("or register with");
    } else {
      setLoginChoice("or login with");
    }

    if (userFormBtn === "Register new account") {
      setUserFormBtn("Login to account");
    } else {
      setUserFormBtn("Register new account");
    }

    if (userFormheading === "Login to account") {
      setUserFormheading("Register new account");
    } else {
      setUserFormheading("Login to account");
    }
  };

  const forgotPasswrdFunc = () => {
    setUserForgotPasswrd(true);

    if (userFormheading === "Login to account") {
      setUserFormheading("Password Reset");
    }
    if (userFormText === "Login") {
      setUserFormText("Request OTP");
    }
  };
  const initialValues = userFormCont
    ? {
        fullname: "",
        email: "",
        password: "",
        phoneNumber: "",
      }
    : {
        email: "",
        password: "",
      };
  const validationSchema = !userForgotPasswrd
    ? userFormCont
      ? validationSignupUser
      : validationLoginUser
    : object().shape({
        email: string()
          .required("Email is required")
          .email("Invalid email format"),
      });
  const handleSubmit = !userForgotPasswrd
    ? userFormCont
      ? (data) => {
          dispatch(userSignup({ ...data, loginType: "user" }));
        }
      : (data) => {
          dispatch(userLogin({ ...data, loginType: "user" }));
        }
    : async ({ email }) => {
        const res = await userForgetPassRequestOTP(email);
        if (!res?.error) {
          setCodes((prev) => ({ ...prev, OTP: res, email }));
          setUserParent(true);
          return;
        }
        setOtherErrors({ resquestOTP: res?.message });
      };

  const handleOTPSubmit = !userForgotPasswrd
    ? (data) => {
        const newData = {
          ...data,
          email: user?.email,
          loginType: user?.loginType,
        };
        dispatch(userVerifySignup(newData));
      }
    : async ({ otp }) => {
        const res = await userForgetPassRequestReset({ code: codes?.OTP, otp });
        if (!res.error) {
          setCodes((prev) => ({ ...prev, reset: res }));
          setReset(true);
          return;
        }
        setOtherErrors({ callbackOTP: res?.message });
      };

  const handleResetSubmit = async ({ newPassword: password }) => {
    const res = await userForgetPassCallback({ password, code: codes?.reset });
    if (!res.error) {
      setReset(false);
      setUserParent(false);
      setUserForgotPasswrd(false);
      closepopUpUserForm();
      return;
    }
    setOtherErrors({ callbackReset: res?.message });
  };
  useEffect(() => {
    if (login) {
      closepopUpUserForm();
      // navigate("/account");
    }
    if (signup) {
      setUserParent(true);
    }
    if (verifySignup) {
      setMainParent(true);
    }
  }, [login, signup, verifySignup]);

  return (
    <>
      <section
        onClick={closepopUpUserForm}
        className={
          userFormSec === true
            ? "user-form-comp userformactive"
            : "user-form-comp"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={
            mainparent
              ? "user-main-parent-sec mainparentactive"
              : "user-main-parent-sec"
          }
        >
          <div className="thank-u-box">
            <div className="thank-u-gif">
              <img src="/images/customImg/happy.gif" alt="" />
            </div>

            <p>
              Thank You for registration, Hope you enjoy our waste collection
              services!
            </p>

            <NavLink to="/account">
              {" "}
              <button
                onClick={() => closepopUpUserForm()}
                className="dashb-btn"
              >
                {" "}
                Go To Dashboard{" "}
              </button>{" "}
            </NavLink>
          </div>

          <div
            className={
              reset
                ? "user-reset-main-bx resetmainactive"
                : "user-reset-main-bx"
            }
          >
            <div
              className={
                userparent
                  ? "user-form-parent userparentactive"
                  : "user-form-parent"
              }
            >
              <div
                className={
                  userForgotPasswrd === true
                    ? "user-form-main-bx userforgetpasswrdactive"
                    : "user-form-main-bx"
                }
              >
                <div
                  onClick={closepopUpUserForm}
                  className="user-form-close-btn"
                >
                  <i className="fa-regular fa-circle-xmark"></i>
                </div>

                <div
                  className={
                    userFormCont === true
                      ? "user-form-bx userformactive"
                      : "user-form-bx"
                  }
                >
                  <div className="user-login-form">
                    <div className="use-form-heading">
                      <h3>{userFormheading}</h3>
                      <p>
                        Access to the most powerfull tool in the entire design
                        and web industry.
                      </p>
                    </div>

                    <div className="user-form">
                      <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
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
                              <div className="user-form-inpt-bx  user-form-inpt-bx1 user-form-inpt-bx3 user-inpt-bxx3 user-inpt-bxx">
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
                                  <div
                                    className="field-text"
                                    style={{ color: "red" }}
                                  >
                                    {errors.fullname}
                                  </div>
                                ) : null}
                              </div>

                              <div className="user-form-inpt-bx  user-form-inpt-bx2 user-form-inpt-bx3 user-inpt-bxx3 user-inpt-bxx">
                                <input
                                  type="text"
                                  name="phoneNumber"
                                  id="phone"
                                  placeholder="WhatsApp No."
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.phoneNumber}
                                />
                                {touched.phoneNumber && errors.phoneNumber ? (
                                  <div
                                    className="field-text"
                                    style={{ color: "red" }}
                                  >
                                    {errors.phoneNumber}
                                  </div>
                                ) : null}
                              </div>

                              <div className="user-form-inpt-bx  user-form-inpt-bx5  user-form-inpt-bx4 user-inpt-bxx">
                                <input
                                  type="email"
                                  name="email"
                                  id="Email"
                                  placeholder="E-mail Address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                {touched.email && errors.email ? (
                                  <div
                                    className="field-text"
                                    style={{ color: "red" }}
                                  >
                                    {errors.email}
                                  </div>
                                ) : null}
                              </div>

                              <div className="user-form-inpt-bx  user-form-inpt-bx6 user-form-inpt-bx4 user-inpt-bxx">
                                <input
                                  type="password"
                                  name="password"
                                  id="password"
                                  placeholder="Password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                                />
                                {touched.password && errors.password ? (
                                  <div
                                    className="field-text"
                                    style={{ color: "red" }}
                                  >
                                    {errors.password}
                                  </div>
                                ) : null}
                              </div>
                              {userForgotPasswrd && otherErrors?.resquestOTP ? (
                                <div style={{ color: "red" }}>
                                  {otherErrors?.resquestOTP}
                                </div>
                              ) : null}
                              <div className="form-btns-flex-bx">
                                <button
                                  type="submit"
                                  className="user-form-login-btn"
                                >
                                  {userFormText}
                                </button>

                                <button
                                  type="button"
                                  onClick={forgotPasswrdFunc}
                                  className="user-form-forgot-passwd-btn"
                                >
                                  Forget Password?
                                </button>
                              </div>
                              <div>
                                {userFormCont ? (
                                  errorSignup ? (
                                    <div style={{ color: "red" }}>
                                      {errorSignup}
                                    </div>
                                  ) : null
                                ) : errorLogin ? (
                                  <div style={{ color: "red" }}>
                                    {errorLogin}
                                  </div>
                                ) : null}
                              </div>
                              <span>{loginChoice}</span>

                              <div className="other-pltofrm-login-link-flex-bx">
                                <button
                                  type="button"
                                  // onClick={openPopup}
                                  className="login-link-bx"
                                >
                                  <i className="fa-brands fa-facebook"></i>
                                  Facebook
                                </button>
                                <NavLink to={`${ENV_API_BASE_URL}/auth/google`}>
                                  <button
                                    type="button"
                                    className="login-link-bx login-link-bx2"
                                  >
                                    <img
                                      className="google-img-i"
                                      src="/images/customImg/google-icon.png"
                                      alt=""
                                    />
                                    Google
                                  </button>
                                </NavLink>
                                {/* <button className="login-link-bx login-link-bx3">
                        <i className="fa-brands fa-linkedin"></i>
                        Linkedin
                        </button> */}
                              </div>

                              <button
                                type="button"
                                onClick={UserFormToggle}
                                className="userform-register-btn"
                              >
                                {userFormBtn}
                              </button>
                            </Form>
                          );
                        }}
                      </Formik>
                    </div>
                  </div>

                  {/* 
          <div className="user-register-form">
            <div className="use-form-heading">
            <h3>Register new account </h3>
            <p>
              Access to the most powerfull tool in the entire design and web
              industry.
            </p>
            </div>

            <div className="user-form">
                <form action="#">

                <div className="user-form-inpt-bx">
                        <input type="text" name="name" id="name" placeholder="Full Name" />
                    </div>

                    <div className="user-form-inpt-bx">
                        <input type="text" name="phone" id="phone" placeholder="Phone No." />
                    </div>

                    <div className="user-form-inpt-bx">
                        <input type="email" name="Email" id="Email" placeholder="E-mail Address" />
                    </div>

                    <div className="user-form-inpt-bx">
                        <input type="text" name="password" id="password" placeholder="Password" />
                    </div>

                    <div className="form-btns-flex-bx">

                        <button className="user-form-login-btn user-form-registr-btn">
                            Register
                        </button>
                        

                        
                    </div>


                    <span>Or register with</span>

                    <div className="other-pltofrm-login-link-flex-bx">

                        <button className="login-link-bx">
                        <i className="fa-brands fa-facebook"></i>
                        Facebook
                        </button>

                        <button className="login-link-bx login-link-bx2">
                        <i className="fa-brands fa-google-plus"></i>
                        Google
                        </button>

                      
                        
                    </div>
                    
                    <button onClick={userRegForm} className="userform-register-btn">
                        Login to account
                    </button>
                    
                </form>
            </div>
           
          </div> */}
                </div>
              </div>

              <div className="user-form-otp-bx">
                <h6>Verify OTP</h6>
                <p>OTP has been sent to your registered email Id.</p>

                <div className="timer-text">
                  {timer > 0 ? `Resend OTP in ${timer} seconds` : ""}
                  {buttonText ? (
                    <button onClick={handleButtonClick}>{buttonText} </button>
                  ) : null}
                </div>
                <Formik
                  initialValues={{
                    otp: "",
                  }}
                  validationSchema={validationVerifyOtpCollector}
                  onSubmit={handleOTPSubmit}
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
                        <div className="otp-box-inpt user-form-inpt-bx user-form-inpt-bx1 mt-4">
                          <input
                            type="number"
                            name="otp"
                            id="otp"
                            placeholder=" Enter here OTP..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.otp}
                          />
                        </div>
                        {touched?.otp && errors?.otp ? (
                          <div style={{ color: "red" }}>{errors?.otp}</div>
                        ) : null}
                        {errorVerify ? (
                          <p style={{ color: "red" }}>{errorVerify}</p>
                        ) : null}
                        {userForgotPasswrd && otherErrors?.callbackOTP ? (
                          <div style={{ color: "red" }}>
                            {otherErrors?.callbackOTP}
                          </div>
                        ) : null}
                        <button type="submit" className="user-otp-btn mt-3">
                          Confirm OTP
                        </button>
                        <button
                          type="button"
                          onClick={() => setUserParent(false)}
                          className="userform-register-btn"
                        >
                          Login / Signup
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
                <div
                  onClick={() => {
                    setUserParent(false), closepopUpUserForm();
                  }}
                  className="close-btn"
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>

            <div className="user-reset-bx">
              <h6>Reset Password</h6>
              <Formik
                initialValues={{
                  newPassword: "",
                  confirmNewPassword: "",
                }}
                validationSchema={resetpasswordValidation}
                onSubmit={handleResetSubmit}
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
                      <div className="otp-box-inpt user-form-inpt-bx user-form-inpt-bx1 mt-4">
                        <input
                          type="password"
                          name="newPassword"
                          id="newpassword"
                          placeholder=" New Password"
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

                      <div className="otp-box-inpt user-form-inpt-bx user-form-inpt-bx1 mt-4">
                        <input
                          type="password"
                          name="confirmNewPassword"
                          id="confirmpassword"
                          placeholder=" Confirm Password..."
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
                      {otherErrors?.callbackReset ? (
                        <div style={{ color: "red" }}>
                          {otherErrors?.callbackReset}
                        </div>
                      ) : null}
                      <button type="submit" className="user-otp-btn mt-3">
                        Save Password
                      </button>
                    </Form>
                  );
                }}
              </Formik>
              <div
                onClick={() => {
                  setReset(false), closepopUpUserForm();
                }}
                className="close-btn"
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserForm;
