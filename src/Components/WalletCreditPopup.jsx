import React, { useState } from "react";
import {
  FuntionToUpdateWalletDetailsByRole,
  FuntiontoGetUserDetailsByRoleAndUserId,
  adminGiveCreditToUser,
  userFetchByIdOrPhone,
} from "../apis/wallet/wallet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { debounceAsync } from "../lib/debounce";

const WalletCreditPopup = ({ onclickClosePopup, refetchHistory }) => {
  const [userData, setUserData] = useState(null);
  const [walletCoin, setWalletCoin] = useState(""); // State for wallet coin
  const [otherErrors, setOtherErrors] = useState({});
  const handleIdentifierChange = (e) => {
    const value = e.target.value;
    debounceAsync(async () => {
      const data = await userFetchByIdOrPhone(value);
      if (data?.error) {
        setUserData(null);
        return;
      }
      setUserData(data);
    }, 500)();
  };
  const handleGiveCredit = async () => {
    setOtherErrors({});
    if (!userData || !+walletCoin) {
      setOtherErrors({ giveCredit: "Make Sure fill All feilds" });
      return;
    }
    const res = await adminGiveCreditToUser({
      ...userData,
      balance: +walletCoin,
    });
    refetchHistory();
    if (res?.error) {
      toast?.error(res?.message);
      return;
    }
    toast.success(res);
    onclickClosePopup();
  };
  return (
    <>
      <section
        className="update-walet-credit-comp walet-credit-comp"
        onClick={onclickClosePopup}
      >
        <div
          className="updte-walet-credit-bx walet-credit-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6 className="text-center">Transfer Amount</h6>

          <div className="amnt-fild-bx mt-4 mb-3">
            <input
              type="text"
              name="identefir"
              id="useramount"
              placeholder="Type User ID or Mobile No."
              onChange={handleIdentifierChange} //to all user details over this
            />
          </div>

          <div className="walet-credit-two-bx">
            <div className="walet-credit-bx">
              <span>User Name</span>
              <div className="username-bx">
                <span>{userData?.companyName || userData?.fullname}</span>
              </div>
            </div>

            <div className="walet-credit-bx">
              <span>User Type</span>
              <div className="username-bx">
                <span>{userData?.role}</span>
              </div>
            </div>
          </div>

          <div className="amnt-fild-bx mt-4">
            <label htmlFor="#">Wallet Eco Points</label>
            <input
              type="number"
              name="ecopoints"
              id="ecopoints"
              placeholder="Coins"
              value={walletCoin}
              onChange={(e) => setWalletCoin(e.target.value)} // Update wallet coin state
            />
          </div>

          <p>
            Note :{" "}
            <span>
              This will give wallet credit to your users at the time of
              registration, please check carefully and update as per your
              convenience or requirements.
            </span>
          </p>

          <button
            onClick={handleGiveCredit} // Call handleApplyClick on click
            className="tranfer-btn tranfer-btn5 mt-3 mx-auto d-flex justify-content-center align-items-center"
          >
            Apply
          </button>
        </div>
      </section>
    </>
  );
};

export default WalletCreditPopup;
