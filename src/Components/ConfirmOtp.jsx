import React, { useState } from "react";
import WaletBalance from "./WaletBalance";
import {
  FuntiontoRaisepaymnetrequest,
  walletWithdrawRequest,
} from "../apis/wallet/wallet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ConfirmOtp = ({ onclickcloseOtp, onClickAddAmount, onClickOpen }) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const handleWithdrawalRequest = async () => {
    if (!withdrawalAmount) {
      return;
    }
    const res = await walletWithdrawRequest({ balance: withdrawalAmount });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onclickcloseOtp();
  };
  return (
    <>
      <section className="confirm-otp" onClick={onClickAddAmount}>
        <div className="otp-main-box" onClick={(e) => e.stopPropagation()}>
          <h6>Withdrawl</h6>

          <div className="otp-fild">
            <input
              type="number"
              onWheel={(e) => e.currentTarget.blur()}
              name="otp"
              id="otp"
              placeholder="Enter  withdrawl amount"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
            />
          </div>
          <h6>
            {" "}
            Note: Kabadpe Admin Will check and transfer the amount to your bank
            account, You will get notify.{" "}
          </h6>
          <h6 style={{ color: "red" }}>Note : Not more than Wallet Balance</h6>

          <button onClick={handleWithdrawalRequest} className="submit-otp">
            Withdrawl Request
          </button>

          <div onClick={onclickcloseOtp} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>

        {/* <div className="otp-main-box" onClick={(e) => e.stopPropagation()}>
            <h6>Confirm  OTP</h6>

            <div className="otp-fild">
                <input type="text" name='otp' id='otp' placeholder='Enter  OTP' />
            </div>
            <span> OTP has been sent to your registered mobile number     </span>

            <button onClick={onClickOpen} className="submit-otp">
                Confirm
            </button>

            <div onClick={onclickcloseOtp} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            
        </div> */}
      </section>
    </>
  );
};

export default ConfirmOtp;
