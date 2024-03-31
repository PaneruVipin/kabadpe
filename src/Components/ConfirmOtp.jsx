import React, { useState } from "react";
import WaletBalance from "./WaletBalance";
import { FuntiontoRaisepaymnetrequest } from "../apis/wallet/wallet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const ConfirmOtp = ({ onclickcloseOtp, onClickAddAmount, onClickOpen }) => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const { userInfo, loading } = useSelector((state) => state.user);
  const [refreshKey, setRefreshKey] = useState(0);
  // const handleWithdrawalRequest = () => {
  //   // Call onClickAddAmount with the withdrawalAmount
  //   withdrawalAmount;
  // };

  const handleWithdrawalRequest = async () => {
    try {
      // Assuming walletCoin is obtained from the input field

      const p_userId = userInfo.id; // Assuming userData contains user ID
      const p_userrole = userInfo.role; // Assuming role is fixed as 'user' for this example
      const p_money = withdrawalAmount;

      // Call function to update wallet details
      var response = await FuntiontoRaisepaymnetrequest({
        p_userId,
        p_userrole,
        p_money,
      });
      if (response.ResultStatus === 1) {
        toast.success(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onclickcloseOtp(), 2000); // Close popup after 5 seconds
        // setRefreshKey((prevKey) => prevKey + 1);
        // window.location.reload();
      } else {
        toast.error(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onclickcloseOtp(), 2000); // Close popup after 5 seconds
        // setRefreshKey((prevKey) => prevKey + 1);
      }
    } catch (error) {
      console.error("Error updating wallet details:", error);
    }
  };
  return (
    <>
      <section className="confirm-otp" onClick={onClickAddAmount}>
        <div className="otp-main-box" onClick={(e) => e.stopPropagation()}>
          <h6>Withdrawl</h6>

          <div className="otp-fild">
            <input
              type="text"
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
