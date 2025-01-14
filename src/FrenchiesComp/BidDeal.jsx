import React, { useState } from "react";
import {
  bidsCommissionFetch,
  franchiseBidOfferAction,
} from "../apis/franchise/bid";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import ReminingPopup from "./ReminningPopup";

const BidDeal = ({ onClickCloseDeal, data, refetch }) => {
  const [biderText, setBiderText] = useState(false);
  const [reminePopup, setReminePopup] = useState(false);
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
  const remaining = +bid?.productQuantity - +offer?.productQuantity;
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
    if (remaining > 0) {
      setReminePopup(true);
      return;
    }
    onClickCloseDeal();
  };

  const handleRejectClick = async () => {
    const res = await franchiseBidOfferAction({
      id: offer?.id,
      action: "reject",
    });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success("Succesfuly offer Rejected");
    refetch();
    onClickCloseDeal();
  };
  const getCommission = (total) => {
    let commsn = 0;
    if (total <= 10000) {
      commsn = commission?.find(({ level }) => level == 1)?.commission || 0;
    } else if (50000 >= total > 10000) {
      commsn = commission?.find(({ level }) => level == 2)?.commission || 0;
    } else if (200000 >= total > 50000) {
      commsn = commission?.find(({ level }) => level == 3)?.commission || 0;
    } else {
      commsn = commission?.find(({ level }) => level == 4)?.commission || 0;
    }
    return commsn;
  };
  return (
    <>
      <section className="view-bid-main" onClick={onClickCloseDeal}>
        <div
          className="isbiddeal-bx bid-popup-bx "
          onClick={(e) => e.stopPropagation()}
        >
          {reminePopup && remaining > 0 ? (
            <ReminingPopup
              data={{ ...bid, productQuantity: remaining }}
              refetch={refetch}
              handleCloseClick={onClickCloseDeal}
            />
          ) : (
            <>
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
                  <span>₹{getCommission(total)}</span>
                </div>

                <div className="bidder-bx">
                  <h6>Final Amount</h6>
                  <span>₹{total - getCommission(total)}</span>
                </div>
              </div>

              {/* <p>
              {" "}
              <span>Note </span> Please check all the details before clicking
              confirm button , this will close your deal .{" "}
            </p> */}
              <div style={{ display: "flex" }}>
                <button onClick={handeConfirmClick} className="confirm-btn">
                  Accept
                </button>
                <button
                  onClick={handleRejectClick}
                  style={{ background: "red" }}
                  className="confirm-btn"
                >
                  Reject
                </button>

                {/* {remaining > 0 ? (
                <button
                  name="reCreate"
                  onClick={handeConfirmClick}
                  className="confirm-btn"
                >
                  List Reming {remaining + bid?.unit}
                </button>
              ) : null} */}
              </div>
              {biderText && (
                <p className="bider-text">
                  {" "}
                  Your products has been sold to <span>(Bidder Name)</span>{" "}
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BidDeal;
