import React from "react";

const Invoice = () => {
  return (
    <>
      <section className="invoice-comp">
        <div className="invoice-container">
          <div className="invoice-top-logo-flex-bx">
            <div className="clim-logo">
              <img src="./images/clim-logo.png" alt="" />
            </div>

            <div className="invoice-top-text-flex">
              <h6>Tax Invoice/Bill of Supply/Cash Memo</h6>
              <p>(Original for Recipient)</p>
            </div>
          </div>

          <div className="invoice-two-grid-bx">
            <div className="invoice-info-bx">
              <h6>Sold By :</h6>
              <p>
                GEORGIAN ENTERPRISES PRIVATE LIMITED * Kh No 554 to 558,560 to
                583,600 to 606, Bagru Rawan,N.H.8,Tehsil Sanganer BAGRU,
                RAJASTHAN, 303007 IN
              </p>
            </div>

            <div className="invoice-info-bx invoice-info-bx2">
              <h6>Billing Address :</h6>
              <p>Gayathri Nair</p>
              <p>
                S1, 9/656, Sector 9, Chitrakoot Scheme, Vaishali Nagar,
                Chitrakoot JAIPUR, RAJASTHAN, 302021
              </p>

              <p>IN</p>
              <h6>
                State/UT Code: <span>08</span>{" "}
              </h6>
            </div>
          </div>

          <div className="invoice-two-grid-bx">
            <div className="invoice-relt">
              <div className="invoice-info-bx">
                <h6>
                  PAN No: <span> AAGCG7857C</span>
                </h6>
                <h6>
                  GST Registration No: <span> 08AAGCG7857C1ZF </span>
                </h6>
              </div>

              <div className="invoice-info-bx invoice-info-bx3">
                <h6>
                  Order Number: <span> 404-7373172-3425162</span>
                </h6>
                <h6>
                  Order Date: <span> 14.11.2024 </span>
                </h6>
              </div>
            </div>

            <div className="invoice-info-bx invoice-info-bx2">
              <h6>Shipping Address :</h6>
              <p>Gayathri Nair </p>
              <p>Gayathri Nair</p>
              <p>
                S1, 9/656, Sector 9, Chitrakoot Scheme, Vaishali Nagar,
                Chitrakoot JAIPUR, RAJASTHAN, 302021
              </p>

              <p>IN</p>
              <h6>
                State/UT Code: <span>08</span>{" "}
              </h6>
              <h6>
                Place of supply: <span>RAJASTHAN</span>{" "}
              </h6>
              <h6>
                Place of delivery: <span>RAJASTHAN</span>{" "}
              </h6>
              <h6>
                Invoice Number: <span>JPX2-353</span>{" "}
              </h6>
              <h6>
                Invoice Details: <span> RJ-JPX2-137392831-2425</span>{" "}
              </h6>
              <h6>
                Invoice Date: <span>14.11.2024</span>{" "}
              </h6>
            </div>
          </div>

          <div className="invoice-table">
            <table>
              <thead>
                <tr>
                  <th>Sl. No</th>
                  <th>Description</th>
                  <th>Unit Price</th>
                  <th>Qty</th>
                  <th>Net Amount</th>
                  <th>Tax Rate</th>
                  <th>Tax Type</th>
                  <th>Tax Amoun</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                        <span>1</span>
                    </td>
                    <td>
                        <span>RAEGR MagFix Arc M500 15W Mag-Safe Compatible Wireless
Charger | Made in India | Magnetic Wireless Charging Pad
Compatible with Mag-Safe on iPhone 16 / iPhone 15 / iPhone 14
Series - RG10472 | B0CBQ13JSJ ( RG10472 )
HSN:85044090
</span>
                    </td>

                    <td>
                        <span>₹905.94</span>
                    </td>
                    <td>
                        <span>1</span>
                    </td>
                    <td>
                        <span>₹905.94</span>
                    </td>
                    <td>
                        <span>9%</span>
                        <span>9%</span>
                    </td>
                    <td>
                        <span>CGST</span>
                        <span>SGST</span>

                    </td>
                    <td>
                        <span> ₹81.53</span>
                        <span> ₹81.53</span>

                    </td>
                    <td>
                        <span>
                        ₹1,069.00
                        </span>
                    </td>

                    
                </tr>
               
              </tbody>
            </table>
            <div className="total-amount-bx">
                <h6>Total:</h6>
                <div className="price-flex">
                <p>₹163.06</p>
                <p> ₹1,069.00</p>
                </div>
            </div>
          </div>

          <div className="amount-words-bx">
            <h6>Amount in Words:</h6>
            <p>One Thousand Sixty-nine only</p>
          </div>

          <div className="sign-bx amount-words-bx">
                <h5>For GEORGIAN ENTERPRISES PRIVATE LIMITED:</h5>

                <div className="sign">
                    <img src="./images/my-sign.jpg" alt="" />
                </div>

                <h5>Authorized Signatory</h5>
                
          </div>
          <p className="outer-bx-text">Whether tax is payable under reverse charge - No
          </p>


          <div className="payment-trans-grid-bx">

            <div className="payment-trnas-bx">
                <h6>Payment Transaction ID: </h6>
                <p>2iItNxUGVjdD2cVO7WeY
                </p>
            </div>
            <div className="payment-trnas-bx">
                <h6>Date & Time: 1 </h6>
                <p>14/11/2024, 16:44:43
hrs

                </p>
            </div>
            <div className="payment-trnas-bx">
                <h6>Invoice Value: </h6>
                <p>1,069.00
                </p>
            </div>

            <div className="payment-trnas-bx">
                <h6>Mode of Payment: </h6>
                <p>Credit
Card

                </p>
            </div>
            
          </div>
          
          
        </div>

        <p className="bottom-line">
        *ASSPL-Amazon Seller Services Pvt. Ltd., ARIPL-Amazon Retail India Pvt. Ltd. (only where Amazon Retail India Pvt. Ltd. fulfillment center is co-located)
Customers desirous of availing input GST credit are requested to create a Business account and purchase on Amazon.in/business from Business eligible offers
Please note that this invoice is not a demand for payment

<p className="pageno">Page 1 of 1</p>

        </p>

        
      </section>
    </>
  );
};

export default Invoice;
