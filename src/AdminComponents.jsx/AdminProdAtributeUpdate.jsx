import React, { useState } from 'react'

const AdminProdAtributeUpdate = ({data, onClickClose}) => {
    const [switchActive , setSwitchActive] = useState(false);
  return (
    <>
     <section className="waste-prod-edit-comp" onClick={onClickClose}>
        <div className="waste-prod-edit-main-bx admin-prod-atribute-main-bx admin-prod-atribute-main-bx2" 
        onClick={(e) => e.stopPropagation()}>
          <h5> {data.title} </h5>

            <div className="admin-login-fild admin-login-fild3">
              <label htmlFor="#">Display Name</label>
              <input
                type="text"
                name="atributename"
                id="atributename"
                autoComplete="off"
                placeholder="Color or Size or Dimension or Material or Fabric"
              />
            </div>

            <div className="admin-login-fild admin-login-fild3 mt-4">
            <label htmlFor="#">Display Name</label>
            <div onClick={() => setSwitchActive(!switchActive)} className={switchActive ? "swithc-toggle-btn switchactive" : "swithc-toggle-btn"}>
        <div className="round-bx"></div>
        <span>Yes</span>
        <span>No</span>

    </div>

    </div>
           


          <button type="submit" className="add-prod-btn  confirm-btn-aa confirm-btn">
            Update Attribute
          </button>

          <div onClick={onClickClose}  className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section> 
    </>
  )
}

export default AdminProdAtributeUpdate
