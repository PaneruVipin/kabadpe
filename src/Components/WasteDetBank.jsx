import React, { useState } from 'react'

const WasteDetBank = () => {
  const [addInfo , setAddInfo] =  useState(false);

  return (
    <>

<section className="waste-details-comp waste-colectin-comp waste-appoint-ment-comp">
        

         <div className="details-main-bx details-main-bx3">
      
          <div className="det-table-bx det-table-bx3">

          <div className="add-det-info-bx add-det-info-bx5">
      <h6>Bank Details</h6>
    </div>
            <table>
              <thead>
                <tr>
                  <th>Bank Name</th>
                  <th>Full Name</th>
                  <th>Account Number</th>
                  <th>IFSC Code</th>
                  <th>Bank Status</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kotak Bank</td>
                  <td>Faiz Alam</td>
                  <td>2114504750</td>
                  <td>AAAABCCCCCC</td>
                  <td>
                    <div className="primary-btn primary-text"> Primary</div>
                  </td>

                  <td>
                    <div onClick={() => setAddInfo(!addInfo) } className="edit-b-btn">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Kotak Bank</td>
                  <td>Faiz Alam</td>
                  <td>2114504750</td>
                  <td>AAAABCCCCCC</td>
                  <td>
                    <div className="primary-btn">Make Primary</div>
                  </td>

                  <td>
                    <div onClick={() => setAddInfo(!addInfo) } className="edit-b-btn">
                    <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <button onClick={() => setAddInfo(!addInfo)} className="add-det-btn add-det-btn5">
            <i class="fa-solid fa-plus"></i>
            Add Bank Details
            </button>

            <div className={ addInfo  ? "add-det-info-form-bx adddetinfoactive" : "add-det-info-form-bx"}>

            <div className="add-det-info-bx">
              <h6>Bank Details</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi iste reiciendis nemo beatae fugiat, totam eaque distinctio ut recusandae.</p>
            </div>

            <div className="add-det-info-form">
              <form action="#">

                <div className="det-grid">

                <div className="det-input-bx">
                  <label htmlFor="firstname">Bank Name</label>
                  <select name="bankname" id="bankname">
                    <option value="#">Choose Bank</option>
                    <option value="#">Choose Bank</option>
                    <option value="#">Choose Bank</option>
                    <option value="#">Choose Bank</option>

                  </select>
                </div>

                <div className="det-input-bx">
                  <label htmlFor="Name">Full Name</label>
                  <input type="text" name='Name' id='Name' autoComplete='off'required  />
                </div>

                </div>


                <div className="det-grid">

<div className="det-input-bx">
  <label htmlFor="account">Account No.</label>
  <input type="text" name='account' id='account' autoComplete='off'required  />
</div>

<div className="det-input-bx">
  <label htmlFor="IFSC">IFSC Code</label>
  <input type="text" name='IFSC' id='IFSC' autoComplete='off'required  />
</div>

</div>

           <button className="det-save-btn add-det-btn5">
            Save
           </button>
                
              </form>
            </div>

            </div>
            
          </div>
          
         </div>
          
      </section>
      
    </>
  )
}

export default WasteDetBank
