import React, { useState } from "react";

const GuestPopup = ({onclickCloseGuest , verifyClickBtnRedirect}) => {
    const [guest , setGuest] = useState(false);
    const [guestText , setGuestText] = useState('Guest');

    const guestFunc = () => {

            setGuest(true)
            setGuestText('OTP Verification')
        
    }
    
  return (
    <>
      <section className="guest-comp buy-waste-popup-comp">
        <div className={guest ? "guest-bx guestactive" : "guest-bx"}>
          <h6> {guestText} </h6>

            <div className="guest-fields-grid">
          <div className="guest-grid">
            <div className="gest-field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"  />
            </div>

            <div className="gest-field">
              <label htmlFor="mobile">Mobile</label>
              <input type="text" name="mobile" id="mobile" />
            </div>
          </div>

          <div className="guest-grid">
            <div className="gest-field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"  />
            </div>

            <div className="gest-field">
              <label htmlFor="address">Address</label>
              <input type="text" name="address" id="address"  />
            </div>
          </div>

          <div className="guest-grid">

          <div className="gest-field">
              <label htmlFor="city">City</label>
              <input type="text" name="city" id="city" />
            </div>

            <div className="gest-field">
              <label htmlFor="Area">Area</label>
              <input type="text" name="Area" id="Area"  />
            </div>

            <div className="gest-field">
              <label htmlFor="Subarea">Subarea</label>
              <input type="text" name="Subarea" id="Subarea" />
            </div>

            <div className="gest-field">
              <label htmlFor="pin">Pin</label>
              <input type="text" name="pin" id="pin"  />
            </div>
            
          </div>
          </div>

          <div className="otp-field-main">

            <div className="otp-field">
            <input type="number" name="otp" id="otp" placeholder="Enter here OTP" />
            </div>

            <button onClick={() => verifyClickBtnRedirect()}  className="otp-btn otp-btn3">
            Veirify OTP
          </button>

            
          </div>
     

          <button onClick={() => guestFunc()} className="confirm-btn confirm-btn3">
            Confirm
          </button>

          <div onClick={onclickCloseGuest} className="close-btn">
          <i class="fa-solid fa-xmark"></i>
          </div>
          
        </div>
      </section>

   
      
    </>
  );
};

export default GuestPopup;
