import { Form, Formik } from "formik";
import React from "react";
import { workerRequestLeave } from "../apis/worker/availability";

const Holiday = ({ onclickCloseHoliday }) => {
  const handleSubmit = async ({ startDate, endDate }) => {
    const res = await workerRequestLeave({ startDate, endDate });
    if (!res?.error) {
      onclickCloseHoliday();
    }
  };
  return (
    <>
      <section className="comn-popup-comp" onClick={onclickCloseHoliday}>
        <div className="comn-popup-bx" onClick={(e) => e.stopPropagation()}>
          <h6>Leave Request </h6>
          <Formik initialValues={{}} onSubmit={handleSubmit}>
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
                  <>
                    <div className="date-holiday">
                      <div className="leave-date">
                        <span>From</span>
                        <input
                          type="date"
                          name="startDate"
                          id="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => {
                            handleChange(e);
                            const startDate = new Date(e.target.value);
                            const endDate = new Date(values?.endDate);
                            if (startDate > endDate) {
                              handleChange({
                                target: { name: "endDate", value: "" },
                              });
                            }
                          }}
                          value={values?.startDate}
                        />
                      </div>

                      <div className="leave-date">
                        <span>To</span>
                        <input
                          value={values?.endDate}
                          onChange={(e) => {
                            handleChange(e);
                            const startDate = new Date(values?.startDate);
                            const endDate = new Date(e.target.value);
                            if (startDate > endDate) {
                              handleChange({
                                target: { name: "startDate", value: "" },
                              });
                            }
                          }}
                          onBlur={handleBlur}
                          type="date"
                          name="endDate"
                          id="date"
                          required
                        />
                      </div>
                    </div>

                    <button type="submit" className="popup-action-btn">
                      Send Request
                    </button>
                  </>{" "}
                </Form>
              );
            }}
          </Formik>
          <div onClick={onclickCloseHoliday} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Holiday;
