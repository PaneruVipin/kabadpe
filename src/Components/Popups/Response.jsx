import React from "react";
import "../../style/UserForm.css";
import { NavLink } from "react-router-dom";
const Response = ({
  show = true,
  setShow,
  navTitle = "",
  path = "/",
  error = "",
  text = "",
  ...props
}) => {
  return (
    <section
      onClick={() => setShow(false)}
      className={show ? "user-form-comp userformactive" : "user-form-comp"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={"user-main-parent-sec mainparentactive"}
      >
        <div className="thank-u-box">
          {!error ? (
            <div className="thank-u-gif">
              <img src="/images/customImg/happy.gif" alt="" />
            </div>
          ) : null}

          <p>{text}</p>
          <p style={{ color: "red" }}>{error}</p>

          {!error ? (
            <NavLink to={path}>
              {" "}
              <button
                onClick={() => closepopUpUserForm()}
                className="dashb-btn"
              >
                {navTitle}
              </button>{" "}
            </NavLink>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default Response;
