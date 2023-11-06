import React, { useState } from "react";
import UserBankForm from "./UserBankForm";
import "../style/BankCard.css";
import {
  userBankAccountAdd,
  userBankAccountDelete,
  userBankAccountFetch,
  userBankAccountUpdate,
} from "../apis/bankAccount";
import { useQuery } from "@tanstack/react-query";

const UserBankCard = () => {
  const initialValueAccountDetail = {
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    IFSCCode: "",
  };
  const [initialValues, setInitialValues] = useState(initialValueAccountDetail);
  const [userBankForm, setUserBankForm] = useState(false);
  const [formTypeEdit, setFormTypeEdit] = useState(false);
  const { data: bankAccounts, refetch } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: () => userBankAccountFetch(),
  });

  const handleAddAccountDeatil = async (data) => {
    await userBankAccountAdd(data);
    refetch();
    setFormTypeEdit(false);
    setUserBankForm(!userBankForm);
  };
  const handleUpdateAccountDetail = async (data) => {
    await userBankAccountUpdate(data);
    refetch();
    setFormTypeEdit(false);
    setUserBankForm(!userBankForm);
  };
  const handleUpdateIconClick = (data) => {
    setInitialValues(data);
    setUserBankForm(!userBankForm);
    setFormTypeEdit(true);
  };
  const handledeleteIconClick = async (id) => {
    await userBankAccountDelete(id);
    refetch();
  };
  const handleAddDataBtnClick = () => {
    setInitialValues(initialValueAccountDetail);
    setUserBankForm(!userBankForm);
    setFormTypeEdit(false);
  };
  return (
    <>
      <section className="user-bank-comp">
        <div className="bank-cont">
          <h5>Bank Card Details</h5>

          <div className="bank-card-table bank-card-table2">
            <table>
              <thead>
                <tr>
                  <th>Bank Name</th>
                  <th>Account Holder Name</th>
                  <th>IFSC Code</th>
                  <th>Account Number</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {!bankAccounts?.error
                  ? bankAccounts?.map(
                      ({
                        IFSCCode,
                        accountNumber,
                        accountHolderName,
                        bankName,
                        id,
                      }) => (
                        <tr>
                          <td>{bankName}</td>
                          <td>{accountHolderName}</td>
                          <td>
                            <div className="card-num-bx">
                              <span>xxxx</span> <span>xxxx</span>{" "}
                              <span>{IFSCCode?.slice(-4)}</span>
                            </div>
                          </td>
                          <td>
                            <div className="card-num-bx">
                              <span>xxxx</span> <span>xxxx</span>{" "}
                              <span>{accountNumber?.slice(-4)}</span>
                            </div>
                          </td>
                          <td>
                            <div className="edit-del-flex-btn ">
                              <div
                                onClick={() =>
                                  handleUpdateIconClick({
                                    IFSCCode,
                                    accountNumber,
                                    accountHolderName,
                                    bankName,
                                    id,
                                  })
                                }
                                className="prof-data-edit tb-edit-btn"
                              >
                                <i class="fa-solid fa-pen-to-square"></i>
                              </div>
                              <div
                                onClick={() => handledeleteIconClick(id)}
                                className="prof-data-close tb-del-btn"
                              >
                                <i class="fa-solid fa-trash"></i>
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
            className="table-card-add-data-btn table-card-add-data-btn2"
          >
            <i class="fa-solid fa-plus"></i> Add Card Data
          </button>

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

          {userBankForm ? (
            <UserBankForm
              initialValues={initialValues}
              onSubmit={
                formTypeEdit
                  ? handleUpdateAccountDetail
                  : handleAddAccountDeatil
              }
            />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default UserBankCard;
