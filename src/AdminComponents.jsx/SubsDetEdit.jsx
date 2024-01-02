import React, { useState } from "react";

const SubsDetEdit = ({onclickCloseSubsDat}) => {
  const [selectedOption , setSelectedOption] =  useState('variable');

  const handleOptionChange = (event) => {

    setSelectedOption(event.target.value);
    
  }
  
  return (
    <>
      <section className="french-edit-comp">
        <div className="french-edit-main-box subsdata-edit-main-box">
          <h5>Subscription Plans (Edit) </h5>

          <form action="#">

          <div className="french-det-grid subsdata-det-grid">
            
            <div className="admin-login-fild">
              <label htmlFor="companyname">Plan Title</label>
              <div className="admin-login-input">
                <input type="text" name='title' id='title' placeholder='Enter Plan Title'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="accountnumber">City  </label>
              <div className="admin-login-input">
                <input type="text" name='city' id='city' placeholder='Enter city'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="Zip">Zip Code  </label>
              <div className="admin-login-input">
                <input type="text" name='Zip' id='Zip' placeholder='Enter Zip'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="Charges">Subscription Type</label>
              <div className="admin-login-input">
               <select name="plantitle" id="plantitle" value={selectedOption} onChange={handleOptionChange}>
                <option value="fixed">Fixed</option>
                <option value="variable">Variable</option>

               </select>
              </div>
            </div>
          </div>

          <div className="variable-fixed-input-box">

          {selectedOption === "fixed" ? (

<div className="fixed-box">

<h6 className="banktext">Fixed</h6>

<div className="french-det-grid">

<div className="admin-login-fild">
    <label htmlFor="Charges">Period</label>
    <div className="admin-login-input">
     <select name="plantitle" id="plantitle">
     <option value="plantitle">Choose</option>
      <option value="plantitle">Monthly</option>
      <option value="plantitle">Quaterly</option>
     </select>
    </div>
  </div>

  <div className="admin-login-fild">
    <label htmlFor="Charges">Area Price</label>
    <div className="admin-login-input areaprice-inpt">
   <input type="text" name="areaprice" id="areaprice" placeholder="Enter area price" />
    </div>
  </div>

  <div className="admin-login-fild">
    <label htmlFor="Charges">Waste Collector</label>
    <div className="admin-login-input">
   <input type="text" name="wastecolect" id="wastecolect" placeholder="Enter Waste Collector" />
    </div>
  </div>

  <div className="admin-login-fild">
    <label htmlFor="Charges"> Price</label>
    <div className="admin-login-input areaprice-inpt">
   <input type="text" name="Price" id="Price" placeholder="Enter  price" />
    </div>
  </div>

</div>
</div>
            
          ) :  ( 
            <div className="variable box">

            <h6 className="banktext">Variable</h6>
    
            <div className="french-det-grid">
    
    
        <div className="admin-login-fild">
          <label htmlFor="Charges">Area Price</label>
          <div className="admin-login-input areaprice-inpt areaprice-inpt2 ">
         <input type="text" name="areaprice" id="areaprice" placeholder="Enter area price" />
          </div>
        </div>
    
        <div className="admin-login-fild">
          <label htmlFor="Charges">Waste Collector</label>
          <div className="admin-login-input">
         <input type="text" name="wastecolect" id="wastecolect" placeholder="Enter Waste Collector" />
          </div>
        </div>
    
        <div className="admin-login-fild">
          <label htmlFor="Charges"> Price</label>
          <div className="admin-login-input areaprice-inpt areaprice-inpt2">
         <input type="text" name="Price" id="Price" placeholder="Enter  price" />
          </div>
        </div>
      
    </div>
              
            </div>
            
          ) }

            

     

     
            
          </div>

    
          </form>

          <button className="submit-btn submit-btn5">
          Add
        </button>

        
        <button onClick={onclickCloseSubsDat} className="close-popup-btn">
        <i class="fa-solid fa-xmark"></i>
        </button>
          
        </div>
      </section>
    </>
  );
};

export default SubsDetEdit;
