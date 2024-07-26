import React from "react";

const AddMoneyOtp = ({ onclickcloseOtp, onclickOpenAmountBx }) => {
  return (
    <>
      <section className="confirm-otp">
        <div className="otp-main-box">
          <h6>Confirm OTP</h6>

          <div className="otp-fild">
            <input type="text" name="otp" id="otp" placeholder="Enter  OTP" />
          </div>
          <span> OTP has been sent to your registered mobile number </span>

          <button onClick={onclickOpenAmountBx} className="submit-otp">
            Confirm
          </button>

          <div onClick={onclickcloseOtp} className="close-otp-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddMoneyOtp;
