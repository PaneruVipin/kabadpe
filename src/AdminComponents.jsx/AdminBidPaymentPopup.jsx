import { useState } from "react";
import { hashId } from "../lib/array";
import { toast } from "react-toastify";
import { adminBidpaymentStatusChange } from "../apis/franchise/bid";

const AdminBidPaymentPopup = ({ onClickClose, data, refetch }) => {
  const [approvePayload, setApprovePayload] = useState();
  const handleChange = (e) => {
    setApprovePayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const bid = data?.acceptedBid;
  const component = !bid?.paymentStatus ? "buyer" : "saller";
  const heading =
    component == "buyer"
      ? "Confirm Receipt of Payment from Buyer"
      : "Confirm You Paid the Seller";
  const user = component == "buyer" ? bid?.Franchise : data?.Franchise;
  const subTotal = (+bid?.pricePerUnit || 0) * (+bid?.productQuantity || 0);
  const gst = data?.includeGst ? ((+data?.gstRate || 0) * subTotal) / 100 : 0;
  const total = subTotal + gst;
  const commission = +bid?.commission || 0;
  const finalAmmount = total - commission;
  const handleConfirmClick = async () => {
    if (
      !approvePayload?.paymentMethod ||
      (approvePayload?.paymentMethod != "cash" && !approvePayload?.bankTxnId)
    ) {
      return;
    }
    const payload = {
      id: data?.id,
      amount: component == "buyer" ? total : finalAmmount,
      paymentMethod: approvePayload?.paymentMethod,
      status: component == "buyer" ? "receive" : "paid",
    };
    if (approvePayload?.paymentMethod != "cash") {
      payload.bankTxnId = approvePayload?.bankTxnId;
    }
    const res = await adminBidpaymentStatusChange(payload);
    if (res?.error) {
      toast?.error(res?.message);
      return;
    }
    toast.success(res);
    refetch();
    onClickClose();
  };
  return (
    <>
      <section className="withdral-comp" onClick={onClickClose}>
        <div
          className="withdrawl-field-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6>{heading}</h6>
          <div style={{ marginTop: "-20px" }} className="two-fild-grid">
            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">User Name</label>
              <input value={user?.companyName} disabled />
            </div>
            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">UserId</label>
              <input disabled value={hashId(user?.id, "franchise")} />
            </div>
          </div>
          <div className="all-user-table stock-tble mnge-waste-table bid-popup-table mt-3 bid-table">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <span>Price</span>
                  </td>
                  <td></td>
                  <td>
                    {" "}
                    <span>
                      ₹ {bid?.pricePerUnit}/{data?.unit}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Quantity</span>
                  </td>
                  <td></td>
                  <td>
                    {" "}
                    <span>{bid?.productQuantity + data?.unit}</span>{" "}
                  </td>
                </tr>
                {data?.includeGst ? (
                  <tr>
                    <td>
                      <span>Subtotal</span>
                    </td>
                    <td></td>
                    <td>
                      {" "}
                      <span>₹{subTotal}</span>{" "}
                    </td>
                  </tr>
                ) : null}
                {data?.includeGst ? (
                  <tr>
                    <td>
                      <span>GST</span>
                    </td>
                    <td></td>
                    <td>
                      <span>
                        {data?.gstRate} % = ₹{gst}
                      </span>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td>
                    <span> Total Value</span>
                  </td>
                  <td></td>
                  <td>
                    <span> ₹{total}</span>
                  </td>
                </tr>
                {component == "saller" ? (
                  <>
                    <tr>
                      <td>
                        <span>Commission</span>
                      </td>
                      <td></td>
                      <td>
                        <span> - ₹{commission}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Final Ammount</span>
                      </td>
                      <td></td>
                      <td>
                        <span> ₹{finalAmmount}</span>
                      </td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: "20px" }} className="withdrawl-inpt-bx ">
            <span>Payment Type</span>
            <div className="withdral-inpt withdral-selct">
              <select
                onChange={handleChange}
                value={approvePayload?.paymentMethod}
                name="paymentMethod"
                id="Paymenttype"
              >
                <option value="" hidden>
                  Choose
                </option>
                <option value="cash">Cash</option>
                <option value="bank">Bank</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
          </div>

          {approvePayload?.paymentMethod != "cash" ? (
            <div className="withdrawl-inpt-bx">
              <span>Transaction ID</span>
              <div className="withdral-inpt">
                <input
                  type="text"
                  name="bankTxnId"
                  id="amount"
                  value={approvePayload?.bankTxnId}
                  onChange={handleChange}
                  placeholder="Enter transaction ID"
                />
              </div>
            </div>
          ) : null}

          <button onClick={handleConfirmClick} className="approve paid-btn">
            Confirm
          </button>
        </div>
      </section>
    </>
  );
};
export default AdminBidPaymentPopup;
