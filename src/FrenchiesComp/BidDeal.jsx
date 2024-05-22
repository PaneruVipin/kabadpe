import React, { useState } from "react";

const BidDeal = ({ onClickCloseDeal, isDeal, data }) => {
  const [biderText, setBiderText] = useState(false);

  const handleClickText = () => {
    setBiderText(true);
    setTimeout(() => {
      setBiderText(false);
    }, 6000);
  };
  const { bid, offer } = data || {};
  const subTotal = +offer?.pricePerUnit * +offer?.productQuantity;
  const gst = bid?.includeGst ? ((+bid?.gstRate || 0) * subTotal) / 100 : 0;
  const total = subTotal + gst;
  return (
    <>
      {isDeal ? (
        <section className="view-bid-main" onClick={onClickCloseDeal}>
          <div
            className="isbiddeal-bx bid-popup-bx "
            onClick={(e) => e.stopPropagation()}
          >
            <h6>Deal</h6>

            <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx2">
              <div className="bidder-bx ">
                <h6>Final Bid</h6>
                <span>
                  ₹{offer?.pricePerUnit}/{bid?.unit}
                </span>
              </div>

              <div className="bidder-bx">
                <h6>Quantity ({bid?.unit})</h6>
                <span>{offer?.productQuantity}</span>
              </div>

              <div className="bidder-bx">
                <h6>
                  Final Amount <br /> (
                  {bid?.includeGst ? "Including GST" : "Without GST"}){" "}
                </h6>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx2 start-latest-bidder-grid-bx3">
              <div className="bidder-bx">
                <h6>Platform Charges</h6>
                <span>₹50</span>
              </div>

              <div className="bidder-bx">
                <h6>Final Amount</h6>
                <span>₹{total - 50}</span>
              </div>
            </div>

            <p>
              {" "}
              <span>Note </span> Please check all the details before clicking
              confirm button , this will close your deal .{" "}
            </p>

            <button onClick={handleClickText} className="confirm-btn">
              Confirm
            </button>

            {biderText && (
              <p className="bider-text">
                {" "}
                Your products has been sold to <span>(Bidder Name)</span>{" "}
              </p>
            )}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default BidDeal;
