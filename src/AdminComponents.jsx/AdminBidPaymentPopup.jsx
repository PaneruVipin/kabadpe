import { useState } from "react";
import { hashId } from "../lib/array";
import { toast } from "react-toastify";
import { adminBidpaymentStatusChange, makeBidPayment } from "../apis/franchise/bid";

const AdminBidPaymentPopup = ({
  onClickClose,
  data,
  refetch,
  component = "admin",
}) => {
  const [approvePayload, setApprovePayload] = useState();
  const handleChange = (e) => {
    setApprovePayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const bid = data?.acceptedBid;
  const heading =
    component == "franchise"
      ? "Pay Amount To Admin"
      : "Pay Amount in Seller Wallet";
  const user = component == "franchise" ? bid?.Franchise : data?.Franchise;
  const subTotal = (+bid?.pricePerUnit || 0) * (+bid?.productQuantity || 0);
  const gst = data?.includeGst ? ((+data?.gstRate || 0) * subTotal) / 100 : 0;
  const total = subTotal + gst;
  const commission = +bid?.commission || 0;
  const finalAmmount = total - commission;
  const handleConfirmClick = async () => {
    const payload = {
      id: bid?.id,
      type: component,
    };
    const res = await makeBidPayment(payload);
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
            {component == "admin" ? (
              <>
                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">User Name</label>
                  <input value={user?.companyName} disabled />
                </div>
                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">UserId</label>
                  <input disabled value={hashId(user?.id, "franchise")} />
                </div>
              </>
            ) : null}
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
                {component == "admin" ? (
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

          <button onClick={handleConfirmClick} className="approve paid-btn">
            Confirm
          </button>
        </div>
      </section>
    </>
  );
};
export default AdminBidPaymentPopup;
