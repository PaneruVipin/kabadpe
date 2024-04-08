import React, { useState } from "react";
import RequestWithdrawlpopoup from "../AdminComponents.jsx/RequestWithdrawlpopoup";
import {
  AdminWalletForWithdrawFetch,
  FuntiontoApproveTransaction,
  adminWalletWithdrawApprove,
} from "../apis/wallet/wallet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
const WithdrawlRequest = ({ tnx, onClickClose, refetchTnxHistory }) => {
  const [amount, setAmount] = useState(tnx?.ammount);
  const [approvePayload, setApprovePayload] = useState();
  const handleChange = (e) => {
    setApprovePayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlePaidClick = async () => {
    if (!approvePayload?.paymentMethod) {
      return;
    }
    const res = await adminWalletWithdrawApprove({
      id: tnx?.id,
      ...approvePayload,
    });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    refetchTnxHistory();
    onClickClose();
  };
  const { data: wallet, refetch } = useQuery({
    queryKey: ["adminfetcwasteHistory"],
    queryFn: () => AdminWalletForWithdrawFetch(tnx?.id),
  });
  return (
    <>
      <section className="withdral-comp" onClick={onClickClose}>
        <div
          className="withdrawl-field-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6>Withdrawl Request</h6>
          <div style={{ marginTop: "-20px" }} className="two-fild-grid">
            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">User Name</label>
              <input value={tnx?.fullname} disabled />
            </div>
            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">Wallet Balance</label>
              <input disabled value={wallet?.balance} />
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="withdrawl-inpt-bx">
            <span>Request Amount</span>
            <div className="withdral-inpt">
              <input
                type="text"
                disabled
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={amount} // Bind value to amount state
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
            Confirm
          </button>
        </div>
      </section>
    </>
  );
};

export default WithdrawlRequest;
