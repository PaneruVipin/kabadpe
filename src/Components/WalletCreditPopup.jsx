import React, { useState } from "react";
import {
  FuntionToUpdateWalletDetailsByRole,
  FuntiontoGetUserDetailsByRoleAndUserId,
} from "../apis/wallet/wallet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WalletCreditPopup = ({ onclickClosePopup }) => {
  const [userData, setUserData] = useState(null);
  const [walletCoin, setWalletCoin] = useState(""); // State for wallet coin
  const handleInputChange = async (event) => {
    debugger;
    // const inputString = "KPU0000016";
    const { rolev, id } = determineUserRole(event.target.value || 0);

    const userId = id;
    const role = rolev; // Assuming role is fixed as 'admin' for this example
    // const userId = event.target.value || 0;
    // const role = ""; // Assuming role is fixed as 'admin' for this example
    try {
      const userDetails = await FuntiontoGetUserDetailsByRoleAndUserId(
        userId,
        role
      );
      setUserData(userDetails);
    } catch (error) {
      setUserData(null);
      console.error("Error fetching user details:", error);
    }
  };

  const handleApplyClick = async () => {
    try {
      // Assuming walletCoin is obtained from the input field

      const userId = userData.id; // Assuming userData contains user ID
      const role = "user"; // Assuming role is fixed as 'user' for this example
      const walletmoney = walletCoin;

      // Call function to update wallet details
      var response = await FuntionToUpdateWalletDetailsByRole({
        userId,
        role,
        walletmoney,
      });
      if (response.ResultStatus === 1) {
        toast.success(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onclickClosePopup(), 2000); // Close popup after 5 seconds
      } else {
        toast.error(response.ResultMessage, { autoClose: 2000 }); // Display toast for 2 seconds
        setTimeout(() => onclickClosePopup(), 2000); // Close popup after 5 seconds
      }
    } catch (error) {
      console.error("Error updating wallet details:", error);
    }
  };

  function determineUserRole(input) {
    const numberRegex = /\d+$/; // Regular expression to match the last number
    const words = input.split(" "); // Split input string by spaces

    // Extract the last number from the input
    const match = input.match(numberRegex);
    const lastNumber = match ? parseInt(match[0]) : null;

    // Determine role based on the last three words
    const lastThreeWords = words.slice(-3).join(" ");
    let rolev;
    if (lastThreeWords === "KPU") {
      rolev = "user";
    } else if (lastThreeWords === "KPW") {
      rolev = "worker";
    } else {
      rolev = "franchise";
    }

    return { rolev, id: lastNumber };
  }

  return (
    <>
      <ToastContainer />
      <section
        className="update-walet-credit-comp walet-credit-comp"
        onClick={onclickClosePopup}
      >
        <div
          className="updte-walet-credit-bx walet-credit-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6 className="text-center">Wallet Credit</h6>

          <div className="amnt-fild-bx mt-4 mb-3">
            <input
              type="text"
              name="useramount"
              id="useramount"
              placeholder="Type User ID or Mobile No."
              onChange={handleInputChange} //to all user details over this
            />
          </div>

          <div className="walet-credit-two-bx">
            <div className="walet-credit-bx">
              <span>User Name</span>
              <div className="username-bx">
                <span>{userData?.fullname || "Not Found"}</span>
              </div>
            </div>

            <div className="walet-credit-bx">
              <span>User Type</span>
              <div className="username-bx">
                <span>{userData?.UserType || "Not Found"}</span>
              </div>
            </div>
          </div>

          <div className="amnt-fild-bx mt-4">
            <label htmlFor="#">Wallet Eco Points</label>
            <input
              type="text"
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
            // onClick={onclickClosePopup}
            onClick={handleApplyClick} // Call handleApplyClick on click
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
