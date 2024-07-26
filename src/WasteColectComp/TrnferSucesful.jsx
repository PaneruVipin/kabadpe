import React from "react";

const TrnferSucesful = ({ onClose, onclickTrnferDet }) => {
  return (
    <>
      <section className="sucesfuly-trnsctin-comp" onClick={onClose}>
        <div
          className="sucesfuly-trnsctin-box"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="check-bx">
            <i className="fa-solid fa-check fa-fw"></i>
          </div>

          <p>Tranfer Successfully at 03:15PM on 19 Feb 2024.</p>
          <h6>Transaction ID: T230989570970474</h6>

          <button
            onClick={onclickTrnferDet}
            className="tranfer-btn tranfer-btn5 mt-4"
          >
            View Details
          </button>
          <div onClick={onClose} className="close-otp-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrnferSucesful;
