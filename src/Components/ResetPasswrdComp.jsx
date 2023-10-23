import React, { useState } from "react";
import "../style/LogReg.css";
import { NavLink } from "react-router-dom";

const ResetPasswrdComp = () => {
  const [resetpsswrd, setResetPsswrd] = useState(false);

  const ResetPasswrdFunc = () => {
    setResetPsswrd(true);

    setTimeout(() => {
      setResetPsswrd(false);
    }, 3000);
  };

  return (
    <>
      <section className="reset-passwrd-comp">
        <div className="reset-passwrd-grid">
          <div className="left-reset-passwrd-grid-bx">
            <div className="login-form-bx">
              <div className="login-logo">
                <img src="./images/resources/logo.png" alt="" />
              </div>

              <form action="#">
                <div className="log-inpt-bx reset-psswrd-inpt">
                  <input
                    type="password"
                    name="newpassword"
                    id="newpassword"
                    placeholder="New Password"
                    autoComplete="off"
                    required
                  />
                </div>

                <div className="log-inpt-bx reset-psswrd-inpt">
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    required
                  />
                </div>

                <button
                  onClick={() => ResetPasswrdFunc()}
                  className="form-submit-btn reset-psswrd-btn"
                >
                  Reset Password
                </button>

                <div className="thanks_para passwrd-chage-text">
                  {resetpsswrd && <p>Password has been changed...</p>}
                </div>

                <div className="switch-form-btn switch-form-btn2">
                  <p>New to Kabadpe? </p>
                  <NavLink to="/auth/collector">Log In</NavLink>
                </div>
              </form>
            </div>
          </div>

          <div className="right-reset-passwrd-grid-bx"></div>
        </div>
      </section>
    </>
  );
};

export default ResetPasswrdComp;
