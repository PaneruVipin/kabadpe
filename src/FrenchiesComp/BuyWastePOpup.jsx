import React, { useEffect, useRef, useState } from "react";
import { workerBuyWasteRequest } from "../apis/worker/buyWaste";

const BuyWastePOpup = ({
  onclickBtn,
  buyWaste,
  onclickRedirectBuyWasteTable,
  onclickBuyWasteBtn,
  onclickViewHistBtn,
  buyWasteUserInfo,
  setBuyWasteUserInfo,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const handlePhoneNumberChange = async (event) => {
    const value = event.target.value;
    const sanitizedValue = value.replace(/\D/g, "");
    setPhoneNumber(sanitizedValue);
    if (sanitizedValue.length === 10) {
      const userData = getUserInfoFromPhoneNumber(sanitizedValue);
      const res = await workerBuyWasteRequest({ phoneNumber: sanitizedValue });
      setBuyWasteUserInfo({
        phoneNumber: sanitizedValue,
        id: res?.id || res?.userId,
        name: res?.fullname || res?.appointmentPersonName,
      });
      setUserInfo(userData);
    } else {
      setUserInfo(null);
    }
  };

  // Function to simulate fetching user data based on phone number
  const getUserInfoFromPhoneNumber = (phone) => {
    // Simulated user data - replace this with your logic to fetch actual user information
    const userData = {
      username: "Faiz Alam",
      area: "Kanti Nagar",
      // Add more user data fields as needed
    };

    return userData;
  };

  return (
    <>
      <section onClick={onclickBtn} className="buy-waste-popup-comp ">
        <div className="buy-waste-bx" onClick={(e) => e.stopPropagation()}>
          <h6>Buy Waste</h6>

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

          {userInfo && (
            <div className="user-infor-main">
              <div className="user-information">
                <p>
                  Customer Name: <span>{buyWasteUserInfo?.name}</span>{" "}
                </p>
                <p>{/* Area: <span>{userInfo.area}</span>{" "} */}</p>
                {/* Display additional user information here */}
              </div>

              <div className="user-info-flex-btn">
                <button
                  onClick={(e) => {
                    onclickRedirectBuyWasteTable(e);
                    onclickBtn(e);
                  }}
                  className="buy-waste-btn buy-waste-btn2"
                >
                  Buy Waste
                </button>

                <button
                  onClick={onclickViewHistBtn}
                  className="buy-waste-btn hist-btn"
                >
                  View History
                </button>
              </div>
            </div>
          )}

          <div onClick={onclickBtn} className="close-popup-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyWastePOpup;
