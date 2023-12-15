import React, { useState } from "react";
import GuestPopup from "./GuestPopup";

const BuyWaste = ({
  onclickBtn,
  onclickBuyWasteBtn,
  onclickCloseBuyWaste,
  onclickRedirectBuywaste,
  onclickVisible
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;

    // Remove non-digit characters from input
    const sanitizedValue = value.replace(/\D/g, "");

    if (sanitizedValue.length === 10) {
      // You can simulate user data retrieval here based on the phone number
      // For this example, I'll simulate user data based on the entered phone number
      const userData = getUserInfoFromPhoneNumber(sanitizedValue);

      // Set user information if found, otherwise set to null
      setUserInfo(userData);
    } else {
      setUserInfo(null);
    }

    setPhoneNumber(sanitizedValue);
  };

  // Function to simulate fetching user data based on phone number
  const getUserInfoFromPhoneNumber = (phone) => {
    // Simulated user data - replace this with your logic to fetch actual user information
    const userData = {
      name: "Faiz Alam",
      address:
        "4929 c/10 kanti nagar old seelumpur delhi-110031 street no.-1 near medical",
      // Add more user data fields as needed
    };

    return userData;
  };

  return (
    <>
      <section className="buy-waste-popup-comp">
        <div className="buy-waste-bx">
          <h6>Buy Waste</h6>

          <div className="buy-waste-grid-input">
            <div className="admin-login-field waste-inpt-field">
              <label htmlFor="#">Waste Collector Mobile Number</label>
              <input
                type="number"
                placeholder="Enter 10-digit Mobile number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                maxLength={10}
              />
            </div>

            <button
              onClick={onclickVisible}
              className="guest-btn buy-waste-btn2 confirm-buy-wste-btn"
            >
              Guest
            </button>
          </div>

          {userInfo && (
            <div className="user-infor-main">
              <div className="user-information">
                <p>
                  Name: <span>{userInfo.name}</span>{" "}
                </p>
                <p>
                  Address: <span>{userInfo.address}</span>{" "}
                </p>
                {/* Display additional user information here */}
              </div>

              <div className="user-info-flex-btn">
                <button
                  onClick={() => {
                    onclickCloseBuyWaste(), onclickRedirectBuywaste();
                  }}
                  className="buy-waste-btn buy-waste-btn2 confirm-buy-wste-btn"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}

          <div onClick={onclickCloseBuyWaste} className="close-popup-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyWaste;
