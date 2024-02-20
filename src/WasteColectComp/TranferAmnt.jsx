import React from 'react'

const TranferAmnt = ({onclickTrnferAmnt , onclickCompltTrnfer}) => {
  return (
    <>

    <section className="sucesfuly-trnsctin-comp trnfr-amnt-comp ">
        <div className="trnfr-amnt-bx">
            <p>Tranfer Amount</p>
            
            <div className="add-amnt-grid">
            <button  className="tranfer-btn tranfer-btn5 full-amnt-btn">
                    Full Amount
                </button>
                <span>OR</span>
            <div className="admin-login-field add-amnt-field add-amnt-bx">
                <div className="amount-inpt-bx">
                <input type="number" name="amount" id="amount" placeholder='Amount...' />
                </div>
            </div>

            
          
                </div>

                <h6> ₹2,650</h6>
                <button onClick={onclickCompltTrnfer}  className="tranfer-btn tranfer-btn5 cent-btn">
                    Tranfer Now
                </button>
        </div>
    </section>
      
    </>
  )
}

export default TranferAmnt
