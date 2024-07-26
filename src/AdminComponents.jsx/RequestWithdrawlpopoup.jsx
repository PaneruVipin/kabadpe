import React from "react";

const RequestWithdrawlpopoup = ({ onClickClose }) => {
  return (
    <>
      <section className="sucesfuly-trnsctin-comp" onClick={onClickClose}>
        <div
          className="sucesfuly-trnsctin-box"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="check-bx">
            <i className="fa-solid fa-check fa-fw"></i>
          </div>

          <p>Status Changed Successfull.</p>
          {/* <h6>Transaction ID: T230989570970474</h6> */}

          {/* <button
            onClick={onclickViewDet}
            className="tranfer-btn tranfer-btn5 mt-4"
          >
            View Details
          </button> */}
          <div onClick={onClickClose} className="close-otp-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestWithdrawlpopoup;
