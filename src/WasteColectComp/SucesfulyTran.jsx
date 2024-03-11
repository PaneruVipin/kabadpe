import React from "react";
import "../style/ReferEarn.css";

const SucesfulyTran = ({ onCloseClick, onclickViewDet }) => {
  return (
    <>
      <section className="sucesfuly-trnsctin-comp" onClick={onCloseClick}>
        <div
          className="sucesfuly-trnsctin-box"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="check-bx">
            <i class="fa-solid fa-check fa-fw"></i>
          </div>

          <p>Added Successfully at 03:15PM on 19 Feb 2024.</p>
          <h6>Transaction ID: T230989570970474</h6>

          <button
            onClick={onclickViewDet}
            className="tranfer-btn tranfer-btn5 mt-4"
          >
            View Details
          </button>
          <div onClick={onCloseClick} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default SucesfulyTran;
