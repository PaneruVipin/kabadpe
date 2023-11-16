import { Form, Formik } from "formik";
import React from "react";
import { cardDetailSchema } from "../validators/bankAccount.js/cardDetailValidation";

const AccountForm = ({ initialValues, onSubmit }) => {
  return (
    <>
      <div className="account-form">
        <div className="a-f-cont">
          <h5>Card Details</h5>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={cardDetailSchema}
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
                  <div className="bank-inpt-bx bank-sel-bx">
                    <select
                      name="cardType"
                      id="bankname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.cardType}
                      defaultValue={""}
                    >
                      <option value="" disabled hidden>
                        Card Type
                      </option>
                      <option value="credit card">Credit Card</option>
                      <option value="debit card">Debit Card</option>
                    </select>
                    {touched?.cardType && errors?.cardType ? (
                      <div style={{ color: "red" }}>{errors?.cardType}</div>
                    ) : null}
                  </div>
                  <div className="bank-inpt-bx">
                    <input
                      type="text"
                      name="cardHolderName"
                      id="name"
                      placeholder="Full Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.cardHolderName}
                    />
                    {touched?.cardHolderName && errors?.cardHolderName ? (
                      <div style={{ color: "red" }}>
                        {errors?.cardHolderName}
                      </div>
                    ) : null}
                  </div>

                  <div className="bank-inpt-bx ">
                    <input
                      type="text"
                      name="cardNumber"
                      id="accountnumber"
                      placeholder="Card Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.cardNumber}
                    />
                    {touched?.cardNumber && errors?.cardNumber ? (
                      <div style={{ color: "red" }}>{errors?.cardNumber}</div>
                    ) : null}
                  </div>
                </div>

                <div className="bank-inpt-grid">
                  <div className="bank-inpt-bx">
                    <input
                      type="date"
                      name="expiryDate"
                      id="expirydate"
                      placeholder="Expiry Date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.expiryDate}
                    />
                    {touched?.expiryDate && errors?.expiryDate ? (
                      <div style={{ color: "red" }}>{errors?.expiryDate}</div>
                    ) : null}
                  </div>

                  <div className="bank-inpt-bx">
                    <input
                      type="text"
                      name="CVV"
                      id="cvv"
                      placeholder="CVV"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.CVV}
                    />
                    {touched?.CVV && errors?.CVV ? (
                      <div style={{ color: "red" }}>{errors?.CVV}</div>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className="card-det-submit-btn">
                  Add
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AccountForm;
