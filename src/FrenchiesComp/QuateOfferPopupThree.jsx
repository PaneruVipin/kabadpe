import React from "react";

const QuateOfferPopupThree = ({ data, onClickClose }) => {
  const { BidPost, ...rest } = data || {};
  const subTotal = +BidPost?.pricePerUnit * +BidPost?.productQuantity;
  const gst = BidPost?.includeGst
    ? ((+BidPost?.gstRate || 0) * subTotal) / 100
    : 0;
  const total = subTotal + gst;
  const offerSubTotal =
    (+rest?.pricePerUnit || 0) * (+rest?.productQuantity || 0);
  const offerGst = BidPost?.includeGst
    ? ((+BidPost?.gstRate || 0) * offerSubTotal) / 100
    : 0;
  const offerTotal = offerSubTotal + offerGst;
  return (
    <>
      <div onClick={onClickClose} className="bid-popup-sec">
        <div onClick={(e) => e.stopPropagation()} className="bid-popup-bx">
          <h6> Your offer </h6>

          <div className="all-user-table stock-tble mnge-waste-table bid-popup-table mt-3 bid-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Seller</th>

                  <th>Your offer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span>Price</span>
                  </td>
                  <td>
                    {" "}
                    <span>
                      {BidPost?.pricePerUnit}/{BidPost?.unit}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span>
                      {rest?.pricePerUnit}/{BidPost?.unit}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Quantity</span>
                  </td>
                  <td>
                    {" "}
                    <span>{BidPost?.productQuantity + BidPost?.unit}</span>{" "}
                  </td>
                  <td>
                    {" "}
                    <span>{rest?.productQuantity + BidPost?.unit}</span>{" "}
                  </td>
                </tr>
                {BidPost?.includeGst ? (
                  <tr>
                    <td>
                      <span>GST</span>
                    </td>
                    <td>
                      <span>{BidPost?.gstRate} %</span>
                    </td>
                    <td>
                      <span>{BidPost?.gstRate} %</span>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td>
                    <span> Total Value</span>
                  </td>
                  <td>
                    <span> ₹{total}</span>
                  </td>
                  <td>
                    <span> ₹{offerTotal}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            {" "}
            <span>Note </span> Waiting for sellers confirmation.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default QuateOfferPopupThree;
