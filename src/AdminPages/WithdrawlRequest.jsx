import React, { useState } from "react";
import RequestWithdrawlpopoup from "../AdminComponents.jsx/RequestWithdrawlpopoup";
import { FuntiontoApproveTransaction } from "../apis/wallet/wallet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
const WithdrawlRequest = ({ curElem, onClickClose, onClickOpen }) => {
  const [amount, setAmount] = useState(curElem.EcoPoints || ""); // Initialize amount with curElem.amount or empty string
  const { userInfo, loading } = useSelector((state) => state.user);
  const handlePaidClick = async () => {
    // Call onClickOpen function
    // Call handlePaidClick function
    //sendParameters(param1, param2, param3); // Replace param1, param2, param3 with actual parameters
    //debugger;
    try {
      // Assuming walletCoin is obtained from the input field

      const p_userId = curElem.UserID || 20; // Assuming userData contains user ID
      const p_userrole = curElem.Usertype; // Assuming role is fixed as 'user' for this example
      const p_money = curElem.EcoPoints;
      const P_REQUESTID = curElem.RequestId;

      // Call function to update wallet details
      var response = await FuntiontoApproveTransaction({
        p_userId,
        p_userrole,
        P_REQUESTID,
      });
      if (response.ResultStatus === 1) {
        toast.success(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onClickOpen(), 2000); // Close popup after 5 seconds
        onClickOpen;
      } else {
        toast.error(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onClickOpen(), 2000); // Close popup after 5 seconds
      }
    } catch (error) {
      console.error("Error updating wallet details:", error);
    }
  };

  return (
    <>
      <section className="withdral-comp" onClick={onClickClose}>
        <div
          className="withdrawl-field-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6>Withdrawl Request</h6>
          <div className="withdrawl-inpt-bx">
            <span>Amount</span>
            <div className="withdral-inpt">
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Enter amount"
                value={amount} // Bind value to amount state
              />
            </div>
          </div>
          <div className="withdrawl-inpt-bx">
            <span>Transaction ID</span>
            <div className="withdral-inpt">
              <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Enter transaction ID"
              />
            </div>
          </div>
          <div className="withdrawl-inpt-bx">
            <span>Payment Type</span>
            <div className="withdral-inpt withdral-selct">
              <select name="Paymenttype" id="Paymenttype">
                <option value="cash">Choose</option>
                <option value="cash">Cash</option>
                <option value="NFT">NFT</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
          </div>

          <button onClick={handlePaidClick} className="approve paid-btn">
            Paid
          </button>
        </div>
      </section>
    </>
  );
};

export default WithdrawlRequest;
