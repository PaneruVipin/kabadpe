import { Form, Formik } from "formik";
import React, { useState } from "react";
import { validationAddSubs } from "../validators/admin/addSubscriptionValidator";
import { adminAriaUpdate } from "../apis/admins/arias";
import { adminSubsAdd, adminSubsUpdate } from "../apis/admins/subscription";

const AddSubsEdit = ({ onclickCloseSubsPlanBx, refetch, values }) => {
  const formTitle = values
    ? "Update Subscription Plan"
    : "Add Subscription Plan";
  const buttunText = values ? "Update Plan" : "Add Plan";
  const initialValues = values || {};
  const handleSubmit = async (data, { resetForm }) => {
    onclickCloseSubsPlanBx();
    if (values) {
      await adminSubsUpdate(data);
      refetch();
    } else {
      await adminSubsAdd(data);
      refetch();
    }
    resetForm();
  };
  return (
    <>
      <section
        className="add-work-area-edit-comp"
        onClick={onclickCloseSubsPlanBx}
      >
        <div
          className="add-work-area-edit-main-bx add-subs-plan"
          onClick={(e) => e.stopPropagation()}
        >
          <h6 className="banktext">{formTitle}</h6>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationAddSubs}
          >
            {({
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
              ...rest
            }) => {
              return (
                console.log("errors ion form", errors),
                (
                  <Form>
                    <div className="addwrkarea-form-bx">
                      <div className="admin-login-fild">
                        <label htmlFor="planname">Plan Name</label>
                        <div className="admin-login-input">
                          <input
                            type="text"
                            name="planeName"
                            id="planname"
                            placeholder="Enter your Plan Name"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.planeName}
                          />
                        </div>
                        {touched?.planeName && errors?.planeName ? (
                          <div style={{ color: "red" }}>
                            {errors?.planeName}
                          </div>
                        ) : null}
                      </div>

                      <div className="admin-login-fild">
                        <label htmlFor="City">No. of Waste Collector</label>
                        <div className="admin-login-input">
                          <input
                            type="text"
                            name="collectorCount"
                            id="City"
                            placeholder="No. of waste collector"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.collectorCount}
                          />
                        </div>
                        {touched?.collectorCount && errors?.collectorCount ? (
                          <div style={{ color: "red" }}>
                            {errors?.collectorCount}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="addwrkarea-form-bx mt-3">
                      <div className="admin-login-fild mt-3">
                        <label htmlFor="City"> Monthly Price</label>
                        <div className="admin-login-input">
                          <input
                            type="text"
                            name="monthlyPrice"
                            id="monthlyprice"
                            placeholder="Monthly Price"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.monthlyPrice}
                          />
                        </div>
                        {touched?.monthlyPrice && errors?.monthlyPrice ? (
                          <div style={{ color: "red" }}>
                            {errors?.monthlyPrice}
                          </div>
                        ) : null}
                      </div>

                      <div className="admin-login-fild mt-3">
                        <label htmlFor="City"> Quaterly Price</label>
                        <div className="admin-login-input">
                          <input
                            type="text"
                            name="quaterlyPrice"
                            id="quaterlyprice"
                            placeholder="Quaterly Price"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.quaterlyPrice}
                          />
                        </div>
                        {touched?.quaterlyPrice && errors?.quaterlyPrice ? (
                          <div style={{ color: "red" }}>
                            {errors?.quaterlyPrice}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <button type="submit" className="add-work-area-btn">
                      {buttunText}
                    </button>
                  </Form>
                )
              );
            }}
          </Formik>

          <div
            onClick={onclickCloseSubsPlanBx}
            className="close-add-work-bx-btn"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddSubsEdit;
