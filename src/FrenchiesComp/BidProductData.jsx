import React from "react";
import { NavLink } from "react-router-dom";

const BidProductData = ({ bidData ,onClickRedirect }) => {
  return (
    <>
      <div className="bid-prod-grid-bx">
        {bidData.map((curData, indx) => {
          return (
            <>
              <div onClick={onClickRedirect} key={curData.id} className="bid-prod-bx">
                <div className="bid-prod-img">
                    <img src={curData.bidImg} alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> {curData.ProdName} </h6>
                    <span> ₹{curData.prodPrice} </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BidProductData;
