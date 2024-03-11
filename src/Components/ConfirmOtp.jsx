import React from 'react'
import WaletBalance from './WaletBalance'

const ConfirmOtp = ({onclickcloseOtp , onClickOpen}) => {
  return (
    <>

    <section className="confirm-otp" onClick={onclickcloseOtp}>

        <div className="otp-main-box" onClick={(e) => e.stopPropagation()}>
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
            
        </div>
        
    </section>

  
      
    </>
  )
}

export default ConfirmOtp
