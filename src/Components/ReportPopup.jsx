import React from 'react'

const ReportPopup = ({onclickRepClose}) => {
  return (
    <>
      <section className="rev-comp">
        <div className="review-popup-box">

            <h6> Report</h6>

            <div className="report-title">
                <input type="text" name='title' id='title' placeholder='Title' />
            </div>

          <div className="type-message-box">
            <textarea name="message" id="message" cols="30" rows="4" placeholder='Type here...'></textarea>
          </div>

          <button className="rev-submit-btn">
            Submit
          </button>

          <div onClick={onclickRepClose}  className="close-rating-box">
          <i class="fa-solid fa-xmark"></i>
          </div>

            <div>
    
    </div>
            
        </div>
    </section>
    </>
  )
}

export default ReportPopup
