import React from 'react'

const TrnferDet = ({onclickClose}) => {
  return (
    <>
       <section className="paymnt-det-comp sucesfuly-trnsctin-comp">
        <div className="paymnt-det-bx" >
            <p>Tranfer Details</p>
            
        
            <div className="paymnt-det-text-bx">
                <h6>Transaction ID</h6>
                <span>T230989570970474</span>
            </div>

            <div className="debted-form">
                <div className="left-bank-logo">
                    <img src="/images/customImg/bank-img.png" alt="" />
                </div>
                <div className="bank-infoo">
                <h6>XXXXXXX5734</h6>
                <p>UTR:  <span>441611091156</span> </p>
                </div>
                <div className="pricee-t">
                ₹64
                </div>
            </div>

            <div className="bank-btns-flex">

            <button onClick={onclickClose}  className="submit-otp">
                View History
            </button>

            <button className="submit-otp">
                Share Receipt
            </button>
                
            </div>
            
            <div onClick={onclickClose} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </section>
    </>
  )
}

export default TrnferDet
