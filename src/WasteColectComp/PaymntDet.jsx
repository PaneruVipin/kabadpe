import React from 'react'

const PaymntDet = ({onclickCloseAll}) => {
  return (
    <>

    <section className="paymnt-det-comp sucesfuly-trnsctin-comp" onClick={onclickCloseAll}>
        <div className="paymnt-det-bx" onClick={(e) => e.stopPropagation()}>
            <p>Payment Details</p>

            <div className="paymnt-det-text-bx">
                <h6>Remark</h6>
                <span>Buy Waste</span>
            </div>
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

            <button onClick={onclickCloseAll}   className="submit-otp">
                View History
            </button>

            <button className="submit-otp">
                Share Receipt
            </button>
                
            </div>
            
            <div onClick={onclickCloseAll} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default PaymntDet
