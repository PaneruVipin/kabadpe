import { Form, Formik } from "formik";
import React, { useState } from "react";
import { validationLoginAdmin } from "../validators/auth/admin";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/auth/authActions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const despatch = useDispatch();
  const { success, userInfo, loading } = useSelector((s) => s.user);
  const {
    errors: { login },
  } = useSelector((s) => s.auth);
  const initialValues = { email: "", password: "", rememberMe: false };
  const handleSubmit = (data) => {
    despatch(userLogin({ ...data, loginType: "admin" }));
  };
  useEffect(() => {
    if (success && userInfo?.role == "superAdmin") {
      navigate("/admin");
    }
  }, [success, userInfo, loading]);
  return (
    <>
      <section className="admin-login-comp">
        <div className="admin-login-main admin-login-main-loginonly ">
          <div className="admin-login-img">
            <img src="/images/customImg/nav-logo.png" alt="" />
          </div>

          <p>Sign in your account</p>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationLoginAdmin}
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
                  <div className="admin-login-form">
                    <div className="admin-login-fild">
                      <label htmlFor="email">Email</label>
                      <div className="admin-login-input">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder=""
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {touched.email && errors.email ? (
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
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                        {touched.password && errors.password ? (
                          <div style={{ color: "red" }}>{errors.password}</div>
                        ) : null}
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
                      </div>
                    </div>
                  </div>

                  <div className="form-check2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="rememberMe"
                      id="flexCheckDefault"
                      onChange={(e) => {
                        values.rememberMe = e.target.checked;
                      }}
                      onBlur={handleBlur}
                      // checked={values.rememberMe}
                    />
                    {touched.rememberMe && errors.rememberMe ? (
                      <div style={{ color: "red" }}>{errors.rememberMe}</div>
                    ) : null}
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember my preference
                    </label>
                  </div>

                  <button type="button" className="admin-forgot-passwrd-btn">
                    Forgot Password ?
                  </button>
                  {login ? <div style={{ color: "red" }}>{login}</div> : null}
                  <button type="submit" className="admin-form-btn">
                    Sign Me In
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
