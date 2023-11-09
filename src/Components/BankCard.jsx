import React, { useState } from "react";
import "../style/Profile.css";
import "../style/BankCard.css";
import AccountForm from "./AccountForm";
import { useQuery } from "@tanstack/react-query";
import {
  userCardDetailAdd,
  userCardDetailDelete,
  userCardDetailFetch,
  userCardDetailUpdate,
} from "../apis/bankAccount";
import { DateTime } from "luxon";

const BankCard = () => {
  const [accountForm, setAccountForm] = useState(false);
  const initialValueAccountDetail = {
    CVV: "",
    cardNumber: "",
    cardHolderName: "",
    cardType: "",
    expiryDate: "",
  };
  const [initialValues, setInitialValues] = useState(initialValueAccountDetail);
  const [formTypeEdit, setFormTypeEdit] = useState(false);
  const { data: cardDetails, refetch } = useQuery({
    queryKey: ["cardDetails"],
    queryFn: () => userCardDetailFetch(),
  });

  const handleAddAccountDeatil = async (data) => {
    await userCardDetailAdd(data);
    refetch();
    setFormTypeEdit(false);
    setAccountForm(!accountForm);
  };
  const handleUpdateAccountDetail = async (data) => {
    await userCardDetailUpdate(data);
    refetch();
    setFormTypeEdit(false);
    setAccountForm(!accountForm);
  };
  const handleUpdateIconClick = (data) => {
    const expiryDate = DateTime.fromISO(data?.expiryDate, {
      zone: "utc",
    }).toFormat("yyyy-LL-dd");
    setInitialValues({ ...data, expiryDate });
    setAccountForm(!accountForm);
    setFormTypeEdit(true);
  };
  const handledeleteIconClick = async (id) => {
    await userCardDetailDelete(id);
    refetch();
  };
  const handleAddDataBtnClick = () => {
    setInitialValues(initialValueAccountDetail);
    setAccountForm(!accountForm);
    setFormTypeEdit(false);
  };

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
                {!cardDetails?.error
                  ? cardDetails?.map(
                      ({
                        CVV,
                        cardNumber,
                        cardHolderName,
                        cardType,
                        expiryDate,
                        id,
                      }) => (
                        <tr key={id}>
                          <td>{cardType}</td>
                          <td>{cardHolderName}</td>
                          <td>
                            <div className="card-num-bx">
                              <span>xxxx</span> <span>xxxx</span>{" "}
                              <span>{cardNumber?.slice(-4)}</span>
                            </div>
                          </td>
                          <td>
                            <div className="edit-del-flex-btn ">
                              <div
                                onClick={() =>
                                  handleUpdateIconClick({
                                    CVV,
                                    cardNumber,
                                    cardHolderName,
                                    cardType,
                                    expiryDate,
                                    id,
                                  })
                                }
                                className="prof-data-edit tb-edit-btn"
                              >
                                <i className="fa-solid fa-pen-to-square"></i>
                              </div>
                              <div
                                onClick={() => handledeleteIconClick(id)}
                                className="prof-data-close tb-del-btn"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )
                    )
                  : null}
              </tbody>
            </table>
          </div>

          <button
            onClick={handleAddDataBtnClick}
            className="table-card-add-data-btn"
          >
            <i className="fa-solid fa-plus"></i> Add Card Data
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
                <i className="fa-solid fa-pen-to-square"></i>
              </div>
              <div className="prof-data-close">
                <i className="fa-solid fa-xmark"></i>
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
                <i className="fa-solid fa-plus"></i>
                </div>
                
            </div>
          </div> */}
        </div>

        {accountForm ? (
          <AccountForm
            initialValues={initialValues}
            onSubmit={
              formTypeEdit ? handleUpdateAccountDetail : handleAddAccountDeatil
            }
          />
        ) : null}
      </section>
    </>
  );
};

export default BankCard;
