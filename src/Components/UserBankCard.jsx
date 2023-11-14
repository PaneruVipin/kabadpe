import React, { useState } from "react";
import UserBankForm from "./UserBankForm";
import "../style/BankCard.css";

const UserBankCard = () => {
    const [userBankForm , setUserBankForm] = useState(false);
    const [formBox, setFormBox] =  useState(false);
    const [showhide , setShowhide] = useState('fa-plus');

    const showHide = () => {

      setFormBox(!formBox)

     if(showhide === 'fa-plus'){
      setShowhide('fa-minus')
     }else{
      setShowhide('fa-plus')

     }
      
  }
    
  return (
    <>
      <section className="user-bank-comp">
        <div className="bank-cont">
        <div className="comn-top-flex-bx">
          <h5>Bank Card Details</h5>

          <button onClick={showHide} className="show-hide show-hide3">
                <i className={`fa-solid ${showhide}`}></i>
            </button>

          </div>

          <div className={formBox ? ' formboxxactive' : 'form-boxx'} style={{marginTop: "2rem"}}>


          <div className="bank-card-table bank-card-table2">
              <table>
            <thead>

              <tr>
                <th>Card Name</th>
                <th>Card Holder</th>
                <th>Card Number</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kotak Bank</td>
                <td>Preet Aggarwal</td>
                <td><div className="card-num-bx">
                  <span>xxxx</span> <span>xxxx</span> <span>2509</span>
                  </div></td>
                  <td><div className="edit-del-flex-btn ">
                  <div onClick={() => setUserBankForm(!userBankForm)} className="prof-data-edit tb-edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="prof-data-close tb-del-btn">
              <i class="fa-solid fa-trash"></i>
              </div>
           
                    
                    </div></td>
              </tr>
              <tr>
                <td>Kotak Bank</td>
                <td>Preet Aggarwal</td>
                <td><div className="card-num-bx">
                  <span>xxxx</span> <span>xxxx</span> <span>2509</span>
                  </div></td>
                  <td><div className="edit-del-flex-btn ">
                  <div onClick={() => setUserBankForm(!userBankForm)} className="prof-data-edit tb-edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="prof-data-close tb-del-btn">
              <i class="fa-solid fa-trash"></i>
              </div>
           
                    
                    </div></td>
              </tr>
              <tr>
                <td>HDFC Bank</td>
                <td>Preet Aggarwal</td>
                <td><div className="card-num-bx">
                  <span>xxxx</span> <span>xxxx</span> <span>2509</span>
                  </div></td>
                  <td><div className="edit-del-flex-btn ">
                  <div onClick={() => setUserBankForm(!userBankForm)} className="prof-data-edit tb-edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="prof-data-close tb-del-btn">
              <i class="fa-solid fa-trash"></i>
              </div>
           
                    
                    </div></td>
              </tr>
            </tbody>
              </table>
          </div>

          <button  onClick={() => setUserBankForm(!userBankForm)} className="table-card-add-data-btn table-card-add-data-btn2">
          <i class="fa-solid fa-plus"></i> Add Card Data
          </button>

          </div>
          
{/*           
          <div className="user-bank-grid">
            <div className="user-bank-card-bx bank-card-bx">
              <h5>Kotak Bank</h5>

              <div className="user-bank-holder card-hold-bx">
                <h6>Account Holder</h6>
                <p>Kunal Verma</p>
              </div>

              <div className="card-numb user-account-num">
                <div>4359</div>
                <div>3005</div>
                <div>1105</div>
                <div>4578</div>
              </div>

              <div className="account-ifsc-code">
                <h6>IFSC Code</h6>
                <span>21105405011</span>
              </div>

              <div onClick={() => setUserBankForm(!userBankForm)} className="prof-data-edit">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="prof-data-close">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="bank-card-bx user-bank-card-add bank-card-bx3">
              <div
               onClick={() => setUserBankForm(!userBankForm)}
                className="add-card-btn add-card-btn2"
              >
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
          </div> */}


        { userBankForm ? <UserBankForm /> : null }
          
        </div>
      </section>
    </>
  );
};

export default UserBankCard;
