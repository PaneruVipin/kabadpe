import React from "react";
import "../../style/UserForm.css";
import { NavLink } from "react-router-dom";
const Thanks = ({ show = true, setShow, text = "", ...props }) => {
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
          <div className="thank-u-gif">
            <img src="/images/customImg/happy.gif" alt="" />
          </div>

          <p>
            {" "}
            Thank You, Your application has been submitted, We will check and
            confirm via email or SMS.
          </p>
          <span className="dashb-btn"> See You Soon </span>
        </div>
      </div>
    </section>
  );
};
export default Thanks;
