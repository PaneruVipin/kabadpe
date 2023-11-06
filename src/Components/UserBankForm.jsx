import React, { useState } from "react";
import { Form, Formik } from "formik";
import { accountDetailSchema } from "../validators/bankAccount.js/accountDetailValidation";
const UserBankForm = ({ initialValues, onSubmit }) => {
  return (
    <>
      <div className="account-form">
        <div className="a-f-cont">
          <h5>Bank Details</h5>
          <Formik
            initialValues={initialValues}
            validationSchema={accountDetailSchema}
            onSubmit={onSubmit}
          >
            {({
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
              ...rest
            }) => (
              <Form>
                <div className="bank-inpt-grid">
                  <div className="bank-inpt-bx">
                    <input
                      type="text"
                      name="accountHolderName"
                      id="accountholdername"
                      placeholder="Account Holder Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.accountHolderName}
                    />
                    {touched.accountHolderName && errors.accountHolderName ? (
                      <div style={{ color: "red" }}>
                        {errors.accountHolderName}
                      </div>
                    ) : null}
                  </div>

                  <div className="bank-inpt-bx bank-sel-bx">
                    <select
                      name="bankName"
                      id="bankname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bankName}
                    >
                      <option value="" disabled hidden>
                        Choose Your Bank
                      </option>
                      <option value="icici">ICICI</option>
                      <option value="kotak mahindra">Kotak Mahindra</option>
                      <option value="state bank of india">SBI</option>
                      <option value="panjab national bank">PNB</option>
                    </select>
                    {touched.bankName && errors.bankName ? (
                      <div style={{ color: "red" }}>{errors.bankName}</div>
                    ) : null}
                  </div>
                </div>

                <div className="bank-inpt-grid">
                  <div className="bank-inpt-bx">
                    <input
                      type="text"
                      name="accountNumber"
                      id="accountnumber"
                      placeholder="Account Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.accountNumber}
                    />
                    {touched.accountNumber && errors.accountNumber ? (
                      <div style={{ color: "red" }}>{errors.accountNumber}</div>
                    ) : null}
                  </div>

                  <div className="bank-inpt-bx">
                    <input
                      type="text"
                      name="IFSCCode"
                      id="ifsc"
                      placeholder="IFSC Code"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.IFSCCode}
                    />
                    {touched.IFSCCode && errors.IFSCCode ? (
                      <div style={{ color: "red" }}>{errors.IFSCCode}</div>
                    ) : null}
                  </div>
                </div>

                <button
                  type="submit"
                  className="card-det-submit-btn user-bank-card-verify-btn"
                >
                  Verify
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default UserBankForm;
