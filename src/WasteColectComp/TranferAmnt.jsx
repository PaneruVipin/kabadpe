import React from "react";

const TranferAmnt = ({ onClose, onclickCompltTrnfer }) => {
  return (
    <>
      <section
        className="sucesfuly-trnsctin-comp trnfr-amnt-comp "
        onClick={onClose}
      >
        <div className="trnfr-amnt-bx" onClick={(e) => e.stopPropagation()}>
          <p>Tranfer Amount</p>

          <div className="add-amnt-grid">
            <button className="tranfer-btn tranfer-btn5 full-amnt-btn">
              Full Amount
            </button>
            <span>OR</span>
            <div className="admin-login-field add-amnt-field add-amnt-bx">
              <div className="amount-inpt-bx">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Amount..."
                />
              </div>
            </div>
          </div>

          <h6> ₹2,650</h6>
          <button
            onClick={onclickCompltTrnfer}
            className="tranfer-btn tranfer-btn5 cent-btn"
          >
            Tranfer Now
          </button>
          <div onClick={onClose} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default TranferAmnt;
