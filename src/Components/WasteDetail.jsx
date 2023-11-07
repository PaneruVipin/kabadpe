import React, { useState } from 'react'
import WasteDetailsPasswd from './WasteDetailsPasswd';
import WasteDetBank from './WasteDetBank';

const WasteDetail = () => {

  const [addInfo , setAddInfo] =  useState(false);
  
  return (
    <>
      <section className="waste-details-comp waste-colectin-comp waste-appoint-ment-comp">
        
        <h3>Details</h3>

         <div className="details-main-bx">

          <div className="det-table-bx">
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Emai Id</th>
                  <th>Mobile Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Faiz</td>
                  <td>Alam</td>
                  <td>alamfaiz4580@gmail.com</td>
                  <td>1238754361</td>
                </tr>
                <tr>
                  <td>Faiz</td>
                  <td>Alam</td>
                  <td>alamfaiz4580@gmail.com</td>
                  <td>1238754361</td>
                </tr>
                <tr>
                  <td>Faiz</td>
                  <td>Alam</td>
                  <td>alamfaiz4580@gmail.com</td>
                  <td>1238754361</td>
                </tr>
                <tr>
                  <td>Faiz</td>
                  <td>Alam</td>
                  <td>alamfaiz4580@gmail.com</td>
                  <td>1238754361</td>
                </tr>
              </tbody>
            </table>

            <button onClick={() => setAddInfo(!addInfo)} className="add-det-btn">
            <i class="fa-solid fa-plus"></i>
            Add More Details
            </button>

            <div className={ addInfo  ? "add-det-info-form-bx adddetinfoactive" : "add-det-info-form-bx"}>

            <div className="add-det-info-bx">
              <h6>Personal information</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sequi iste reiciendis nemo beatae fugiat, totam eaque distinctio ut recusandae.</p>
            </div>

            <div className="add-det-info-form">
              <form action="#">

                <div className="det-grid">

                <div className="det-input-bx">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" name='Firstname' id='Firstname' autoComplete='off'required  />
                </div>

                <div className="det-input-bx">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" name='lastname' id='lastname' autoComplete='off'required  />
                </div>

                </div>


                <div className="det-grid">

<div className="det-input-bx">
  <label htmlFor="number">Mobile No.</label>
  <input type="text" name='number' id='number' autoComplete='off'required  />
</div>

<div className="det-input-bx">
  <label htmlFor="email">Email Id.</label>
  <input type="text" name='email' id='email' autoComplete='off'required  />
</div>

</div>

           <button className="det-save-btn">
            Save
           </button>
                
              </form>
            </div>

            </div>
            
          </div>
          
         </div>
          
      </section>

     <WasteDetailsPasswd />
     <WasteDetBank />
      
    </>
  )
}

export default WasteDetail
