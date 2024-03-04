import React from "react";
import "../style/ReferEarn.css";

const WaletBalance = ({ oncClickclose, onclickTrnferAmnt }) => {
  return (
    <>
      <section className="walet-balance" onClick={oncClickclose}>
        <div className="walet-bal-box" onClick={(e) => e.stopPropagation()}>
          <h5>Balance Eco Coins: 5,382.36</h5>

          <div className="bank-info">
            <h6>
              Bank Name : <span>Kotak Bank</span>
            </h6>
            <h6>
              Account Number : <span>xxxx xxxx xxxx 8567</span>
            </h6>

            <span className="note-text">
              {" "}
              <span>Note</span> : Please check your bank details before clicking
              the Transfer Button
            </span>

            <button
              onClick={onclickTrnferAmnt}
              className="tranfer-btn tranfer-btn5"
            >
              Tranfer Now
            </button>
          </div>

          <div onClick={oncClickclose} className="walt-bal-close">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaletBalance;
