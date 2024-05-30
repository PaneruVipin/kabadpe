import React, { useState } from "react";
import {
  bidsCommissionFetch,
  franchiseBidOfferAction,
} from "../apis/franchise/bid";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const BidDeal = ({ onClickCloseDeal, isDeal, data, refetch }) => {
  const [biderText, setBiderText] = useState(false);
  const { data: commission, refetch: refetchCommsn } = useQuery({
    queryKey: ["bidsCommissionFetch"],
    queryFn: () => bidsCommissionFetch(),
  });
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
  const handeConfirmClick = async (e) => {
    const { name } = e?.target;
    const payload = {
      id: offer?.id,
      action: "accept",
    };
    if (name == "reCreate") {
      payload.reCreate = "yes";
    }
    const res = await franchiseBidOfferAction(payload);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success("Succesfuly our products has been sold ");
    refetch();
    onClickCloseDeal();
  };
  const remaining = +bid?.productQuantity - +offer?.productQuantity;
  const getCommission = (total) => {
    let commsn = 0;
    if (total < 500) {
      commsn = commission?.find(({ level }) => level == 1)?.commission || 0;
    } else if (1000 > total >= 500) {
      commsn = commission?.find(({ level }) => level == 2)?.commission || 0;
    } else {
      commsn = commission?.find(({ level }) => level == 3)?.commission || 0;
    }
    return commsn;
  };
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
                <span>₹{getCommission()}</span>
              </div>

              <div className="bidder-bx">
                <h6>Final Amount</h6>
                <span>₹{total - getCommission()}</span>
              </div>
            </div>

            <p>
              {" "}
              <span>Note </span> Please check all the details before clicking
              confirm button , this will close your deal .{" "}
            </p>
            <div style={{ display: "flex" }}>
              <button onClick={handeConfirmClick} className="confirm-btn">
                Confirm
              </button>

              {remaining > 0 ? (
                <button
                  name="reCreate"
                  onClick={handeConfirmClick}
                  className="confirm-btn"
                >
                  List Reming {remaining + bid?.unit}
                </button>
              ) : null}
            </div>
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
