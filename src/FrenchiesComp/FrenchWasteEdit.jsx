import React, { useEffect, useRef } from 'react'

const FrenchWasteEdit = ({onClickCloseWasteColectData , WasteViewTrue}) => {


  const wasteViewRef = useRef(null)

  useEffect(() => {

    const handleClickOutside = (event) => {

      if(wasteViewRef.current && !wasteViewRef.current.contains(event.target)){
        onClickCloseWasteColectData();
      }
      
    }
    

    if(WasteViewTrue){
      document.addEventListener("mousedown", handleClickOutside)
    }else{
      document.removeEventListener("mousedown", handleClickOutside)

    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }

  },[WasteViewTrue])
    
  return (
    <>
        <section className="french-edit-comp">
        <div className="french-edit-main-box" ref={wasteViewRef}>
          <h5>Waste Collector Details </h5>

          <div className="french-det-grid">

            <div className="french-det-box">
              <h6>Name </h6>
              <span>Rahul Sharma</span>
            </div>

            <div className="french-det-box">
              <h6>Date of Birth </h6>
              <span>15-July-2001</span>
            </div>

            <div className="french-det-box">
              <h6>Gender </h6>
              <span>Male</span>
            </div>

            <div className="french-det-box">
              <h6>Caste </h6>
              <span></span>
            </div>

            <div className="french-det-box">
              <h6>Religion </h6>
              <span> Judaism </span>
            </div>

            
            <div className="french-det-box">
              <h6>Mobile </h6>
              <span> +91 9971464759 </span>
            </div>

            <div className="french-det-box">
              <h6>Address </h6>
              <span> 398 H/9 Ashok Colony steet No. 2 Delhi-110009 </span>
            </div>


            </div>  

            <h6 className="banktext">Social Security</h6>


            <div className='french-det-grid'>
            <div className="french-det-box">
              <h6>Aadhar (Front) </h6>
              <img src="./images/customImg/aadhar-img.png" alt="" />
            </div>

            <div className="french-det-box">
              <h6>Aadhar (Back) </h6>
              <img src="./images/customImg/aadhar-img.png" alt="" />
            </div>
            </div>

            <div className="french-det-grid">

            <div className="french-det-box">
              <h6>PAN Number </h6>
              <span>1234567890</span>
            </div>

            <div className="french-det-box">
              <h6>Insurance </h6>
              <span>1234567890</span>
            </div>

            <div className="french-det-box">
              <h6>Police Verification </h6>
              <span>Verified</span>
            </div>

            
            <div className="french-det-box">
              <h6>Last Health Checkup Date  </h6>
              <span>15-08-2023 📅</span>
            </div>

            <div className="french-det-box">
              <h6>Training on Security  </h6>
              <span>Yes </span>
            </div>

            <div className="french-det-box">
              <h6>Emergency Contact Person  </h6>
              <span>Rahul Jain </span>
            </div>

            <div className="french-det-box">
              <h6>Emergency Contact Number   </h6>
              <span>9876450123 </span>
            </div>
    
            </div>

            <div className="verif-flex-box">
{/* 
            <button className="confirm-verif-btn">
              Approve  
            </button>

            <button className="confirm-verif-btn confirm-verif-btn2">
                Disapprove
            </button> */}
            
            <button className="confirm-verif-btn confirm-verif-btn2 ban-btn">
                Ban
            </button>

            </div>
            

          <button onClick={onClickCloseWasteColectData} className="close-popup-btn">
        <i class="fa-solid fa-xmark"></i>
        </button>

        </div>
      </section>
    </>
  )
}

export default FrenchWasteEdit
