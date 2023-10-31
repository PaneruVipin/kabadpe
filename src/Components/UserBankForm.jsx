import React from 'react'

const UserBankForm = () => {
  return (
    <>

<div className="account-form">
        <div className="a-f-cont">
          <h5>Bank Details</h5>

          <form action="#">
            <div className="bank-inpt-grid">
              <div className="bank-inpt-bx">
                <input
                  type="text"
                  name="accountholdername"
                  id="accountholdername"
                  placeholder="Account Holder Name"
                />
              </div>

              <div className="bank-inpt-bx bank-sel-bx">
               <select name="bankname" id="bankname">
                <option value="bankname">Choose Your Bank</option>
                <option value="bankname">Choose Your Bank</option>
                <option value="bankname">Choose Your Bank</option>
                <option value="bankname">Choose Your Bank</option>
                <option value="bankname">Choose Your Bank</option>

               </select>
              </div>
          
            </div>

           

            <div className="bank-inpt-grid">
          

              <div className="bank-inpt-bx">
                <input
                  type="text"
                  name="accountnumber"
                  id="accountnumber"
                  placeholder="Account Number"
                />
              </div>

              <div className="bank-inpt-bx">
                <input
                  type="text"
                  name="ifsc"
                  id="ifsc"
                  placeholder="IFSC Code"
                />
              </div>
            </div>

            <button className="card-det-submit-btn user-bank-card-verify-btn">
                Verify
            </button>
            
          </form>
        </div>
      </div>
      
    </>
  )
}

export default UserBankForm
