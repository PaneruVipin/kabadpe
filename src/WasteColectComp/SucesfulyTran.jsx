import React from "react";
import "../style/ReferEarn.css";

const SucesfulyTran = ({ txnId, totalAmmount, onCloseClick }) => {
  return (
    <>
      <section className="sucesfuly-trnsctin-comp" onClick={onCloseClick}>
        <div
          className="sucesfuly-trnsctin-box"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="check-bx">
            <i className="fa-solid fa-check fa-fw"></i>
          </div>

          <p> Total Wallet Tranfer: {totalAmmount}</p>
          <p> Txn ID - {txnId} </p>

          {/* <h6>Transaction ID: T230989570970474</h6> */}

          {/* <button
            onClick={onclickViewDet}
            className="tranfer-btn tranfer-btn5 mt-4"
          >
            View Details
          </button> */}
          <div
            onClick={() => {
              onClickCloseSucsMesge(), onCloseClick();
            }}
            className="close-otp-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default SucesfulyTran;
