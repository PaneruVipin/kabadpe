import React from 'react'

const Holiday = ({onclickCloseHoliday}) => {
  return (
    <>

<section className="comn-popup-comp" onClick={onclickCloseHoliday}>

<div className="comn-popup-bx" onClick={(e)=> e.stopPropagation()}>

    <h6>Leave Request </h6>

    <div className="date-holiday">

        <div className="leave-date">
            <span>From</span>
            <input type="date" name='date' id='date' />
        </div>

        <div className="leave-date">
            <span>To</span>
            <input type="date" name='date' id='date' />
        </div>
        
    </div>

    <button onClick={onclickCloseHoliday} className="popup-action-btn">
        Send Request
    </button>

    <div onClick={onclickCloseHoliday} className="close-btn">
    <i class="fa-solid fa-xmark"></i>
    </div>
    
</div>

</section>
      
    </>
  )
}

export default Holiday
