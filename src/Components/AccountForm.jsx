import React from "react";


const AccountForm = () => {
  return (
    <>
      <div className="account-form">
        <div className="a-f-cont">
          <h5>Card Details</h5>

          <form action="#">
            <div className="bank-inpt-grid">
              <div className="bank-inpt-bx">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                />
              </div>

              <div className="bank-inpt-bx ">
                <input
                  type="text"
                  name="accountnumber"
                  id="accountnumber"
                  placeholder="Card Number"
                />
              </div>
          
            </div>

           

            <div className="bank-inpt-grid">
          

              <div className="bank-inpt-bx">
                <input
                  type="text"
                  name="expirydate"
                  id="expirydate"
                  placeholder="Expiry Date"
                />
              </div>

              <div className="bank-inpt-bx">
                <input
                  type="text"
                  name="cvv"
                  id="cvv"
                  placeholder="CVV"
                />
              </div>
            </div>

            <button className="card-det-submit-btn">
                Add
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountForm;
