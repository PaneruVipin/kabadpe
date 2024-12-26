import { Form, Formik } from "formik";
import React, { useState } from "react";
import { validationAddSubs } from "../validators/admin/addSubscriptionValidator";
import { adminAriaUpdate } from "../apis/admins/arias";
import { adminSubsAdd, adminSubsUpdate } from "../apis/admins/subscription";
import { adminVendorPlanAdd } from "../apis/admins/vendorPlans";
import { toast } from "react-toastify";

const AddVendorPlan = ({ onClose, refetch, values }) => {
  const formTitle = values
    ? "Update Subscription Plan"
    : "Add Subscription Plan";
  const buttunText = values ? "Update Plan" : "Add Plan";
  const initialValues = values || {};
  const handleSubmit = async (data, { resetForm }) => {
    const payload = values ? data : { ...data, id: "init" };
    const res = await adminVendorPlanAdd(payload);
    if (res?.error) {
      toast.error(res?.message);
      onClose();
      return;
    }
    toast.success(res);
    onClose();
  };
  return (
    <>
      <section className="add-work-area-edit-comp" onClick={onClose}>
        <div
          className="add-work-area-edit-main-bx add-subs-plan"
          onClick={(e) => e.stopPropagation()}
        >
          <h6 className="banktext">{formTitle}</h6>

          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
              ...rest
            }) => {
              return (
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
                    </div>

                    <div className="admin-login-fild">
                      <label htmlFor="trailDays">Number of Trial Days</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="trialDuration"
                          id="trailDays"
                          placeholder="Number of Trial Days"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.trialDuration}
                        />
                      </div>
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
                    </div>

                    <div className="admin-login-fild mt-3">
                      <label htmlFor="yearlyPrice"> Yearly Price</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="yearlyPrice"
                          id="yearlyPrice"
                          placeholder="Yearly Price"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.yearlyPrice}
                        />
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="add-work-area-btn">
                    {buttunText}
                  </button>
                </Form>
              );
            }}
          </Formik>

          <div onClick={onClose} className="close-add-work-bx-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddVendorPlan;
