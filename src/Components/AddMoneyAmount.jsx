import React from 'react'
import '../style/ReferEarn.css';

const AddMoneyAmount = ({onclickCloseAmount}) => {
  return (
    <>
         <section className="walet-balance">
        <div className="walet-bal-box">
            <h5>Add Amount</h5>

            <div className="admin-login-field">
                <label htmlFor="#">Add Amount</label>
                <div className="amount-inpt-bx">
                <input type="number" name="amount" id="amount" placeholder='Amount...' />
                </div>
            </div>

            <button className="tranfer-btn tranfer-btn5 d-flex justify-content-center">
                    Add Amount
                </button>

            <div className="bank-info">

                <h6>Bank Name : <span>Kotak Bank</span></h6>
                <h6>Account Number : <span>xxxx xxxx xxxx 8567</span></h6>
                

                <button className="tranfer-btn tranfer-btn5">
                    Add Now
                </button>

                
            </div>
            
            <span className='note-text'> <span>Note</span> : Please check your bank details before clicking the Add Button</span>

            <div onClick={onclickCloseAmount} className="walt-bal-close">
            <i class="fa-solid fa-xmark"></i>
            </div>

        </div>
      </section>
    </>
  )
}

export default AddMoneyAmount
