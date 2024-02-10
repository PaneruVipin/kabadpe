import React, { useEffect, useRef, useState } from "react";

const BuyWastePOpup = ({onclickBtn , buyWaste , onclickRedirectBuyWasteTable , onclickBuyWasteBtn , onclickViewHistBtn}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userInfo, setUserInfo] = useState(null);
  
    const handlePhoneNumberChange = (event) => {
      const value = event.target.value;
  
      // Remove non-digit characters from input
      const sanitizedValue = value.replace(/\D/g, '');
  
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
        username: 'Faiz Alam',
        area: 'Kanti Nagar'
        // Add more user data fields as needed
      };
  
      return userData;
    };

    const wasteRef = useRef(null)

  
    

    useEffect(() => {

      const handleClickOutside = (event) => {

        if(wasteRef.current && !wasteRef.current.contains(event.target)){
          onclickBtn();
        }
        
      }

      if(buyWaste){
        document.addEventListener("mousedown", handleClickOutside);
        
      }else{
        document.removeEventListener("mousedown", handleClickOutside);

      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }


    }, [buyWaste])


    
    
  return (
    <>
      <section className="buy-waste-popup-comp">

        <div className="buy-waste-bx" ref={wasteRef}>
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
          <p>Waste Collector Name: <span>{userInfo.username}</span> </p>
          <p>Area: <span>{userInfo.area}</span> </p>
          {/* Display additional user information here */}
        </div>


        
        <div className="user-info-flex-btn">

            <button onClick={onclickRedirectBuyWasteTable} className="buy-waste-btn buy-waste-btn2">
                Buy Waste
            </button>

            <button onClick={onclickViewHistBtn} className="buy-waste-btn hist-btn">
                View History
            </button>
            
        </div>
        
        </div>
      )}

      <div onClick={onclickBtn} className="close-popup-btn">
      <i class="fa-solid fa-xmark"></i>
      </div>
          
        </div>
      </section>
    </>
  );
};

export default BuyWastePOpup;
