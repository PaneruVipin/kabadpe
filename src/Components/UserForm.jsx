import React, { useEffect, useState } from "react";
import "../style/UserForm.css";
import { NavLink } from "react-router-dom";
import { Form, Formik } from "formik";
import {
  validationLoginUser,
  validationSignupUser,
} from "../validators/auth/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userSignup } from "../features/auth/authActions";
import { SignUpToVerify } from "./Auth/SignupToVerify";

const UserForm = ({ closepopUpUserForm }) => {
  const dispatch = useDispatch();
  const {
    success: { login },
    errors: { login: errorLogin, signup: errorSignup },
  } = useSelector((s) => s.auth);
  const [userFormText, setUserFormText] = useState("Login");
  const [loginChoice, setLoginChoice] = useState("or login with");
  const [userFormBtn, setUserFormBtn] = useState("Register new account");
  const [userFormCont, setUserFormCont] = useState(false);
  const [userFormheading, setUserFormheading] = useState("Login to account");
  const [userFormSec, setUserFormSec] = useState(true);
  const [userForgotPasswrd, setUserForgotPasswrd] = useState(false);

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
      setUserFormText("Send Reset Link");
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
  const validationSchema = userFormCont
    ? validationSignupUser
    : validationLoginUser;
  const handleSubmit = userFormCont
    ? (data) => {
        dispatch(userSignup({ ...data, loginType: "user" }));
      }
    : (data) => {
        dispatch(userLogin({ ...data, loginType: "user" }));
      };
  useEffect(() => {
    if (login) closepopUpUserForm();
  }, [login]);
  return (
    <>
      <SignUpToVerify />
      <section
        className={
          userFormSec === true
            ? "user-form-comp userformactive"
            : "user-form-comp"
        }
      >
        <div
          className={
            userForgotPasswrd === true
              ? "user-form-main-bx userforgetpasswrdactive"
              : "user-form-main-bx"
          }
        >
          <div onClick={closepopUpUserForm} className="user-form-close-btn">
            <i class="fa-regular fa-circle-xmark"></i>
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
                  Access to the most powerfull tool in the entire design and web
                  industry.
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
                    console.log("errors", errors);
                    return (
                      <Form>
                        <div className="user-form-inpt-bx user-form-inpt-bx1 user-form-inpt-bx3">
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
                            <div style={{ color: "red" }}>
                              {errors.fullname}
                            </div>
                          ) : null}
                        </div>

                        <div className="user-form-inpt-bx user-form-inpt-bx2 user-form-inpt-bx3">
                          <input
                            type="text"
                            name="phoneNumber"
                            id="phone"
                            placeholder="Phone No."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                          />
                          {touched.phoneNumber && errors.phoneNumber ? (
                            <div style={{ color: "red" }}>
                              {errors.phoneNumber}
                            </div>
                          ) : null}
                        </div>

                        <div className="user-form-inpt-bx user-form-inpt-bx5  user-form-inpt-bx4">
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
                            <div style={{ color: "red" }}>{errors.email}</div>
                          ) : null}
                        </div>

                        <div className="user-form-inpt-bx user-form-inpt-bx6 user-form-inpt-bx4">
                          <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                          {touched.password && errors.password ? (
                            <div style={{ color: "red" }}>
                              {errors.password}
                            </div>
                          ) : null}
                        </div>

                        <div className="form-btns-flex-bx">
                          <button type="submit" className="user-form-login-btn">
                            {userFormText}
                          </button>

                          <button
                            onClick={forgotPasswrdFunc}
                            className="user-form-forgot-passwd-btn"
                          >
                            Forget Password?
                          </button>
                        </div>
                        <div>
                          {userFormCont ? (
                            errorSignup ? (
                              <div style={{ color: "red" }}>{errorSignup}</div>
                            ) : null
                          ) : errorLogin ? (
                            <div style={{ color: "red" }}>{errorLogin}</div>
                          ) : null}
                        </div>
                        <span>{loginChoice}</span>

                        <div className="other-pltofrm-login-link-flex-bx">
                          <button className="login-link-bx">
                            <i class="fa-brands fa-facebook"></i>
                            Facebook
                          </button>

                          <button className="login-link-bx login-link-bx2">
                            <i class="fa-brands fa-google-plus"></i>
                            Google
                          </button>

                          {/* <button className="login-link-bx login-link-bx3">
                        <i class="fa-brands fa-linkedin"></i>
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
                        <i class="fa-brands fa-facebook"></i>
                        Facebook
                        </button>

                        <button className="login-link-bx login-link-bx2">
                        <i class="fa-brands fa-google-plus"></i>
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
      </section>
    </>
  );
};

export default UserForm;
