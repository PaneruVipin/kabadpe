import React from "react";

const FrenchDetPopup = ({onclickCloseDetFrench}) => {
  return (
    <>
      <section className="french-edit-comp">
        <div className="french-edit-main-box">
          <h5>Frenchies Details </h5>

          <div className="french-det-logo-box">
            <div className="f-logo">
              <img src="./images/customImg/c-3.jpg" alt="" />
            </div>
          </div>

          <div className="french-det-grid">
            <div className="french-det-box">
              <h6>Name of the Company </h6>
              <span>Digital Dezire</span>
            </div>

            <div className="french-det-box">
              <h6>Manager Name / POC </h6>
              <span>Rohan Sharma</span>
            </div>

            <div className="french-det-box">
              <h6>Email </h6>
              <span>faiz011@gmail.com</span>
            </div>

            <div className="french-det-box">
              <h6>Phone NUmber </h6>
              <span>9971464759</span>
            </div>

            <div className="french-det-box">
              <h6>GST Number </h6>
              <span>32AAUFR3713P2ZM</span>
            </div>

            <div className="french-det-box">
              <h6>Area of Work </h6>
              <span>Gandhi Nagar</span>
            </div>
          </div>

          <h6 className="banktext">Bank Account Details</h6>

          <div className="french-det-grid">
            <div className="french-det-box">
              <h6>Bank Name </h6>
              <span>Kotak Mahindra Bank</span>
            </div>

            <div className="french-det-box">
              <h6>Account Number </h6>
              <span> 3144 0173 2114 5075</span>
            </div>

            <div className="french-det-box">
              <h6>Confirm Account Number </h6>
              <span> 3144 0173 2114 5075</span>
            </div>

            <div className="french-det-box">
              <h6>IFSC Code </h6>
              <span> UTIB0000004 </span>
            </div>
          </div>

          <div className="french-det-grid">
            <div className="french-det-box">
              <h6>Subscription Type </h6>
              <span>Monthly</span>
            </div>

            <div className="french-det-box">
              <h6>Zip Code </h6>
              <span>110008</span>
            </div>
          </div>

          <h6 className="banktext">Transactions</h6>

          <div className="all-user-table french-det-table">

            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Subs. Type</th>
                  <th>Amount</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> <span>1</span> </td>
                  <td> <span> Monthly </span></td>
                  <td>₹200</td>
                  <td>
                    <div className="invoice-downlod">
                     <span>2114504750</span>  <i class="fa-regular fa-circle-down"></i> 
                     </div>
                     </td>
                </tr>
                <tr>
                  <td> <span>1</span> </td>
                  <td> <span> Monthly </span></td>
                  <td>₹300</td>
                  <td>
                    <div className="invoice-downlod">
                     <span>2114504750</span>  <i class="fa-regular fa-circle-down"></i> 
                     </div>
                     </td>
                </tr>
                <tr>
                  <td> <span>1</span> </td>
                  <td> <span> Quaterly </span></td>
                  <td>₹400</td>
                  <td>
                    <div className="invoice-downlod">
                     <span>2114504750</span>  <i class="fa-regular fa-circle-down"></i> 
                     </div>
                     </td>
                </tr>
                <tr>
                  <td> <span>1</span> </td>
                  <td> <span> Monthly </span></td>
                  <td>₹500</td>
                  <td>
                    <div className="invoice-downlod">
                     <span>2114504750</span>  <i class="fa-regular fa-circle-down"></i> 
                     </div>
                     </td>
                </tr>
              </tbody>
            </table>
            
          </div>


          <button onClick={onclickCloseDetFrench} className="close-popup-btn">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default FrenchDetPopup;
