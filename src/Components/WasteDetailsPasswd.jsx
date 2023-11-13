import React from 'react'

const WasteDetailsPasswd = () => {
    
  return (
    <>
       <section className="waste-details-comp waste-colectin-comp waste-appoint-ment-comp pass-det-box">

<div className="det-pass-wrap-bx">

<div className="add-det-info-bx">
      <h6>Password</h6>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi iste reiciendis nemo beatae fugiat, totam eaque distinctio ut recusandae.</p>
    </div>

<div className="add-det-info-form ">

      <form action="#">

        <div className="det-grid">

        <div className="det-input-bx">
          <label htmlFor="password">Password</label>
          <input type="text" name='password' id='password' autoComplete='off'required  />
        </div>

        <div className="det-input-bx">
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input type="text" name='lastname' id='lastname' autoComplete='off'required  />
        </div>

        </div>



   <button className="det-save-btn det-save-btn2">
    Reset Password
   </button>
        
      </form>
    </div>

    </div>
    
</section>
    </>
  )
}

export default WasteDetailsPasswd
