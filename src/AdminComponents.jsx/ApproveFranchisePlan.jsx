import { useState } from "react";
import { hashId } from "../lib/array";
import { adminApproveFranchisePlan } from "../apis/admins/franchisePlans";
import { toast } from "react-toastify";

const ApproveFranchisePlan = ({ onClickClose, info }) => {
  const [amount, setAmount] = useState(10);
  const [approvePayload, setApprovePayload] = useState();
  const handleChange = (e) => {
    setApprovePayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePaidClick = async () => {
    if (!approvePayload?.paymentMethod) {
      return;
    }
    const payload = {
      ...info,
      ...approvePayload,
      franchiseId: info?.Franchise?.id,
    };
    const res = await adminApproveFranchisePlan({ ...payload });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClose();
  };

  return (
    <>
      <section className="withdral-comp" onClick={onClickClose}>
        <div
          className="withdrawl-field-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6>Approve Plan</h6>
          <div style={{ marginTop: "20px" }} className="withdrawl-inpt-bx">
            <span>User ID</span>
            <div className="withdral-inpt">
              <input
                type="text"
                disabled
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={hashId(info?.Franchise?.id, "franchise")}
              />
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="withdrawl-inpt-bx">
            <span>Plan Amount</span>
            <div className="withdral-inpt">
              <input
                type="text"
                disabled
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={amount}
              />
            </div>
          </div>
          <div className="withdrawl-inpt-bx ">
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

          <button onClick={handlePaidClick} className="approve paid-btn">
            Paid By User
          </button>
        </div>
      </section>
    </>
  );
};

export default ApproveFranchisePlan;
