import React, { useState } from "react";
import { franchiseBidOfferPost } from "../apis/franchise/bid";
import { toast } from "react-toastify";

const QuateOfferPopup = ({ data, onClickClose }) => {
  const [offerData, setOfferData] = useState({});
  const subTotal = +data?.pricePerUnit * +data?.productQuantity;
  const gst = data?.includeGst ? ((+data?.gstRate || 0) * subTotal) / 100 : 0;
  const total = subTotal + gst;
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setOfferData((prev) => ({ ...prev, [name]: value }));
  };
  const offerSubTotal =
    (+offerData?.pricePerUnit || 0) * (+offerData?.productQuantity || 0);
  const offerGst = data?.includeGst
    ? ((+data?.gstRate || 0) * offerSubTotal) / 100
    : 0;
  const offerTotal = offerSubTotal + offerGst;
  const handleSubmitOffer = async () => {
    if (!+offerData?.pricePerUnit || !+offerData?.productQuantity) {
      return;
    }
    const res = await franchiseBidOfferPost({ id: data?.id, ...offerData });
    if (res?.error) {
      toast.error(res?.message);
    }
    onClickClose();
  };
  return (
    <>
      <div onClick={onClickClose} className="bid-popup-sec">
        <div onClick={(e) => e.stopPropagation()} className="bid-popup-bx">
          <h6>Quate your offer </h6>

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
                      {data?.pricePerUnit}/{data?.unit}
                    </span>{" "}
                  </td>
                  <td>
                    {" "}
                    <div className="b-inpt">
                      <input
                        onChange={handleChange}
                        onWheel={(e) => e.currentTarget.blur()}
                        required
                        type="number"
                        name="pricePerUnit"
                        id="price"
                      />
                    </div>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Quantity</span>
                  </td>
                  <td>
                    {" "}
                    <span>{data?.productQuantity + data?.unit}</span>{" "}
                  </td>
                  <td>
                    {" "}
                    <div className="b-inpt">
                      <input
                        onChange={handleChange}
                        onWheel={(e) => e.currentTarget.blur()}
                        required
                        type="number"
                        name="productQuantity"
                        id="price"
                      />
                    </div>{" "}
                  </td>
                </tr>
                {data?.includeGst ? (
                  <tr>
                    <td>
                      <span>GST</span>
                    </td>
                    <td>
                      <span>18%</span>
                    </td>
                    <td>
                      <span>18%</span>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td>
                    <span> Total Value</span>
                  </td>
                  <td>
                    <span> {total}</span>
                  </td>
                  <td>
                    <span> {offerTotal}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button onClick={handleSubmitOffer} className="b-comn-btn">
            Submit your offer
          </button>

          <p> {/* <span>Note </span> Total value after including GST */}</p>
        </div>
      </div>
    </>
  );
};

export default QuateOfferPopup;
