import React from "react";
import "../style/ReferEarn.css";

const AddMoneyAmount = ({ onclickCloseAmount, onClickAddAmnt }) => {
  return (
    <>
      <section className="walet-balance" onClick={onclickCloseAmount}>
        <div className="walet-bal-box" onClick={(e) => e.stopPropagation()}>
          <h5>Add Amount</h5>

          <div className="admin-login-field add-amnt-field">
            <label htmlFor="#">Add Amount</label>
            <div className="amount-inpt-bx">
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount..."
              />
            </div>
          </div>
          {/* 
            <button className="tranfer-btn tranfer-btn5 d-flex justify-content-center">
                    Add Amount
                </button> */}
          <span className="note-text">
            {" "}
            <span>Note</span> : Please check your bank details before clicking
            the Add Button
          </span>

          <div className="bank-info">
            {/* <h6>Bank Name : <span>Kotak Bank</span></h6>
                <h6>Account Number : <span>xxxx xxxx xxxx 8567</span></h6> */}

            <button
              onClick={onClickAddAmnt}
              className="tranfer-btn tranfer-btn5"
            >
              Add Now
            </button>
          </div>

          <div onClick={onclickCloseAmount} className="walt-bal-close">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddMoneyAmount;
