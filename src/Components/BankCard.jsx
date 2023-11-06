import React, { useState } from "react";
import "../style/Profile.css";
import "../style/BankCard.css";
import AccountForm from "./AccountForm";

const BankCard = () => {
  const [accountForm, setAccountForm] = useState(false);
  return (
    <>
      <section className="bank-card-cmp">
        <div className="b-c-cont">
          <h4>Your Card Details</h4>

          <div className="bank-card-table">
            <table>
              <thead>
                <tr>
                  <th>Card Type</th>
                  <th>Card Holder</th>
                  <th>Card Number</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Credit Card</td>
                  <td>Preet Aggarwal</td>
                  <td>
                    <div className="card-num-bx">
                      <span>xxxx</span> <span>xxxx</span> <span>2509</span>
                    </div>
                  </td>
                  <td>
                    <div className="edit-del-flex-btn ">
                      <div
                        onClick={() => setAccountForm(!accountForm)}
                        className="prof-data-edit tb-edit-btn"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div className="prof-data-close tb-del-btn">
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Credit Card</td>
                  <td>Preet Aggarwal</td>
                  <td>
                    <div className="card-num-bx">
                      <span>xxxx</span> <span>xxxx</span> <span>2509</span>
                    </div>
                  </td>
                  <td>
                    <div className="edit-del-flex-btn ">
                      <div
                        onClick={() => setAccountForm(!accountForm)}
                        className="prof-data-edit tb-edit-btn"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div className="prof-data-close tb-del-btn">
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Credit Card</td>
                  <td>Preet Aggarwal</td>
                  <td>
                    <div className="card-num-bx">
                      <span>xxxx</span> <span>xxxx</span> <span>2509</span>
                    </div>
                  </td>
                  <td>
                    <div className="edit-del-flex-btn ">
                      <div
                        onClick={() => setAccountForm(!accountForm)}
                        className="prof-data-edit tb-edit-btn"
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </div>
                      <div className="prof-data-close tb-del-btn">
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            onClick={() => setAccountForm(!accountForm)}
            className="table-card-add-data-btn"
          >
            <i class="fa-solid fa-plus"></i> Add Card Data
          </button>

          {/* 
          <div className="bank-card-grid">
            <div className="bank-card-bx">
              <h5>Credit Card</h5>

              <div className="card-hold-bx">
                <h6>Card Holder</h6>
                <p>Preet Aggarwal</p>
              </div>

              <div className="card-numb">
                <div>4359</div>
                <div>3005</div>
                <div>2509</div>
                <div>2509</div>
              </div>

              <div onClick={() => setAccountForm(!accountForm)} className="prof-data-edit">
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="prof-data-close">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>

            <div className="bank-card-bx bank-card-bx2">
              <h5>Debit Card</h5>

              <div className="card-hold-bx">
                <h6>Card Holder</h6>
                <p>Preet Aggarwal</p>
              </div>

              <div className="card-numb">
                <div>4359</div>
                <div>3005</div>
                <div>2509</div>
                <div>2509</div>
              </div>

            

            <div className="bank-card-bx bank-card-bx3">

                <div onClick={() => setAccountForm(!accountForm)} className="add-card-btn">
                <i class="fa-solid fa-plus"></i>
                </div>
                
            </div>
          </div> */}
        </div>

        {accountForm ? <AccountForm /> : null}
      </section>
    </>
  );
};

export default BankCard;
