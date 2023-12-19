import React from 'react'

const ActiveToday = ({onclickClose}) => {
  return (
    <>

    <section className="comn-popup-comp">

        <div className="comn-popup-bx">

            <h6>Mark you are working today .</h6>

            <button onClick={onclickClose} className="popup-action-btn">
                Confirm
            </button>

            <div onClick={onclickClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            
        </div>
        
    </section>
      
    </>
  )
}

export default ActiveToday
