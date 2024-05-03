import React, { useState } from "react";

const BidDeal = ({onClickCloseDeal , isDeal}) => {
  const [biderText , setBiderText] = useState(false);

  const handleClickText = () => {
    setBiderText(true)
    setTimeout(() => {
    setBiderText(false)

    }, 6000);
  }

  return (
    <>
    { isDeal ?  <section className="view-bid-main" onClick={onClickCloseDeal}>
        <div className="isbiddeal-bx bid-popup-bx " onClick={(e) => e.stopPropagation()}>
          <h6>Deal</h6>

          <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx2">
            <div className="bidder-bx ">
              <h6>Final Bid</h6>
              <span>₹10/kg</span>
            </div>

            <div className="bidder-bx">
              <h6>Weight (Kg/Pcs)</h6>
              <span>2,000</span>
            </div>

            <div className="bidder-bx">
              <h6>Final Amount <br/> (Including GST)  </h6>
              <span>₹20,000</span>
            </div>
          </div>

          <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx2 start-latest-bidder-grid-bx3">
            <div className="bidder-bx">
              <h6>Platform Charges</h6>
              <span>₹50</span>
            </div>

            <div className="bidder-bx">
              <h6>Final Amount</h6>
              <span>₹19,950</span>
            </div>
          </div>

          <p> <span>Note </span> Please check all the details before clicking confirm button , this will close your deal . </p>

          <button onClick={handleClickText} className="confirm-btn">
            Confirm
          </button>

         { biderText && ( <p className="bider-text"> Your products has been sold to  <span>(Bidder Name)</span>  </p> )}

          
        </div>
      </section> : null}
    </>
  );
};

export default BidDeal;
