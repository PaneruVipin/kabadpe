import { Form, Formik } from "formik";
import React, { useState } from "react";
import { adminWorkerSubsInsert } from "../apis/admins/subscription";

const IndPlanForm = ({ formType = "demo", onClickClose, formval, refetch }) => {
  const [otherErrors, setOtherErrors] = useState({});
  const planTypes = {
    demo: "Plan A (Demo)",
    fixed: "Plan B (Fixed)",
    comission: "Plan C (Comission)",
  };
  const planType = planTypes[formType];
  const initialValues = formval || {
    planAmount: "",
    additionalAmount: "",
    planeName: "",
  };
  const handleSubmit = async (data) => {
    setOtherErrors({});
    const res = await adminWorkerSubsInsert({ ...data, planType: formType });
    if (!res?.error) {
      refetch();
      onClickClose();
      return;
    }
    setOtherErrors({ insert: res?.message });
  };
  return (
    <>
      <section className="indi-plan-form-comp" onClick={onClickClose}>
        <div
          className="ind-plan-form-main"
          onClick={(e) => e.stopPropagation()}
        >
          <h3>Plan For Individual</h3>

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
                  <div className="ind-plan-form-bx">
                    <div className="admin-login-fild">
                      <label htmlFor="planname">{planType}</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="planeName"
                          id="planname"
                          placeholder="Enter  Plan Name"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.planeName}
                        />
                      </div>
                      {/* {touched.otp && errors.otp ? (
                        <div style={{ color: "red" }}>{errors.otp}</div>
                      ) : null} */}
                    </div>

                    {formType != "comission" ? (
                      <div className="admin-login-fild">
                        <label htmlFor="planname">Fixed</label>
                        <div className="input-parent-bx">
                          <div className="admin-login-input">
                            <input
                              type="number"
                              name="planAmount"
                              id="planname"
                              placeholder="Enter Fixed Price"
                              autoComplete="off"
                              onChange={handleChange}
                              onWheel={(e) => e.currentTarget.blur()}
                              onBlur={handleBlur}
                              value={values?.planAmount}
                            />
                          </div>
                          <span>₹/Lead</span>
                        </div>
                      </div>
                    ) : null}

                    {formType == "comission" ? (
                      <div className="admin-login-fild">
                        <label htmlFor="planname">Comission</label>
                        <div className="input-parent-main-grid">
                          <div className="input-parent-bx input-parent-bx2">
                            <div className="admin-login-input">
                              <input
                                type="number"
                                name="planAmount"
                                id="planname"
                                placeholder="Enter ₹"
                                autoComplete="off"
                                onChange={handleChange}
                                onWheel={(e) => e.currentTarget.blur()}
                                onBlur={handleBlur}
                                value={values?.planAmount}
                              />
                            </div>
                            <span>₹</span>
                          </div>

                          <div className="plus">
                            <i className="fa-solid fa-plus"></i>
                          </div>

                          <div className="input-parent-bx input-parent-bx2">
                            <div className="admin-login-input">
                              <input
                                type="number"
                                name="additionalAmount"
                                id="planname"
                                placeholder="Enter %"
                                autoComplete="off"
                                onChange={handleChange}
                                onWheel={(e) => e.currentTarget.blur()}
                                onBlur={handleBlur}
                                value={values?.additionalAmount}
                              />
                            </div>
                            <span>%</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  {otherErrors ? (
                    <div style={{ color: "red", textAlign: "center" }}>
                      {otherErrors?.insert}
                    </div>
                  ) : null}
                  <button type="submit" className="add-work-area-btn">
                    Done
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default IndPlanForm;
