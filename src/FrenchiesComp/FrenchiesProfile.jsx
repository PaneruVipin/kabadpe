import React, { useState } from 'react'
import '../style/Frenchiespanel.css';
import FrenchEdit from '../AdminComponents.jsx/FrenchEdit';

const FrenchiesProfile = () => {
    const [editForm , setEditForm] =  useState(false);

    
    const frencDetClose = () => {

        setEditForm(false)
        
    }
    
  return (
    <>

    <section className="frenchies-prof-view-comp">

        <h6 className='title'>Frenchies Profile </h6>

        <button onClick={() => setEditForm(true)} className="french-prof-edit-btn">
        <i class="fa-solid fa-user-pen"></i>
        </button>

        <div className="frenchies-prof-main-box">

        <div className="french-det-logo-box">
            <div className="f-logo">
              <img src="./images/customImg/c-3.jpg" alt="" />
            </div>
          </div>

          <div className="french-det-grid">
            <div className="french-det-box">
              <h6>Name of the Company </h6>
              <span>Digital Dezire</span>
            </div>

            <div className="french-det-box">
              <h6>Manager Name / POC </h6>
              <span>Rohan Sharma</span>
            </div>

            <div className="french-det-box">
              <h6>Email </h6>
              <span>faiz011@gmail.com</span>
            </div>

            <div className="french-det-box">
              <h6>Phone NUmber </h6>
              <span>9971464759</span>
            </div>

            <div className="french-det-box">
              <h6>GST Number </h6>
              <span>32AAUFR3713P2ZM</span>
            </div>

            <div className="french-det-box">
              <h6>Area of Work </h6>
              <span>Gandhi Nagar</span>
            </div>
          </div>

          <h6 className="banktext">Bank Account Details</h6>

          <div className="french-det-grid">
            <div className="french-det-box">
              <h6>Bank Name </h6>
              <span>Kotak Mahindra Bank</span>
            </div>

            <div className="french-det-box">
              <h6>Account Number </h6>
              <span> 3144 0173 2114 5075</span>
            </div>

            <div className="french-det-box">
              <h6>Confirm Account Number </h6>
              <span> 3144 0173 2114 5075</span>
            </div>

            <div className="french-det-box">
              <h6>IFSC Code </h6>
              <span> UTIB0000004 </span>
            </div>
          </div>

          <div className="french-det-grid">
            <div className="french-det-box">
              <h6>Subscription Type </h6>
              <span>Monthly</span>
            </div>

            <div className="french-det-box">
              <h6>Zip Code </h6>
              <span>110008</span>
            </div>
          </div>

          
            
        </div>

        { editForm ? <FrenchEdit onClickCloseEditForm={frencDetClose} /> : null}
        
        
    </section>
    
    </>
  )
}

export default FrenchiesProfile
