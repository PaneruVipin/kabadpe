import React from 'react'
import WaletBalance from './WaletBalance'

const ConfirmOtp = ({onclickcloseOtp , onClickAddAmnt , onClickOpen}) => {
  return (
    <>

    <section className="confirm-otp" onClick={onClickAddAmnt}>

    <div className="otp-main-box" onClick={(e) => e.stopPropagation()}>
            <h6>Withdrawl</h6>

            <div className="otp-fild">
                <input type="text" name='otp' id='otp' placeholder='Enter  withdrawl amount' />
            </div>
            <h6>  Note: Kabadpe Admin Will check and transfer the amount to your bank account, You will get notify.    </h6>
            <h6 style={{color : "red"}}>Note : Not more than Wallet Balance</h6>

            <button onClick={onClickAddAmnt} className="submit-otp">
               Withdrawl Request
            </button>

            <div onClick={onclickcloseOtp} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            
        </div>

        {/* <div className="otp-main-box" onClick={(e) => e.stopPropagation()}>
            <h6>Confirm  OTP</h6>

            <div className="otp-fild">
                <input type="text" name='otp' id='otp' placeholder='Enter  OTP' />
            </div>
            <span> OTP has been sent to your registered mobile number     </span>

            <button onClick={onClickOpen} className="submit-otp">
                Confirm
            </button>

            <div onClick={onclickcloseOtp} className="close-otp-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            
        </div> */}
        
    </section>

  
      
    </>
  )
}

export default ConfirmOtp
