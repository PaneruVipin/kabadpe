import React, { useState } from 'react'
import RequestWithdrawlpopoup from '../AdminComponents.jsx/RequestWithdrawlpopoup'

const WithdrawlRequest = ({onClickClose , onClickOpen}) => {

    
  return (
    <>

    <section className="withdral-comp" onClick={onClickClose}>

        <div className="withdrawl-field-bx" onClick={(e) => e.stopPropagation() }>

            <h6>Withdrawl Request</h6>

            <div className="withdrawl-inpt-bx">
                <span>Amount</span>
                <div className="withdral-inpt">
                    <input type="text" name='amount' id='amount' placeholder='Enter amount' />
                </div>
            </div>

            <div className="withdrawl-inpt-bx">
                <span>Transaction ID</span>
                <div className="withdral-inpt">
                    <input type="text" name='amount' id='amount' placeholder='Enter transaction ID' />
                </div>
            </div>

            <div className="withdrawl-inpt-bx">
                <span>Payment Type</span>
                <div className="withdral-inpt withdral-selct">
                <select name="Paymenttype" id="Paymenttype">
                <option value="cash">Choose</option>
                    <option value="cash">Cash</option>
                    <option value="NFT">NFT</option>
                    <option value="UPI">UPI</option>

                </select>
                </div>
            </div>


            <button onClick={onClickOpen } className="approve paid-btn">
                Paid
            </button>
            
        </div>
        
    </section>


      
    </>
  )
}

export default WithdrawlRequest
