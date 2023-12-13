import { Form, Formik } from "formik";
import React from "react";
import { adminAriaAdd, adminAriaUpdate } from "../apis/admins/arias";
import { validationAddAria } from "../validators/admin/addAriaValidator";

const Addworkareaedit = ({ onclickCloseAddWorkEdit, refetch, values }) => {
  const formTitle = values ? "Update Work Area" : "Add Work Area";
  const initialValues = values || {};
  const handleSubmit = async (data, { resetForm }) => {
    onclickCloseAddWorkEdit();
    if (values) {
      await adminAriaUpdate(data);
      refetch();
    } else {
      await adminAriaAdd(data);
      refetch();
    }
    resetForm();
  };
  const validationSchema = {};

  return (
    <>
      <section className="add-work-area-edit-comp">
        <div className="add-work-area-edit-main-bx">
          <h6 className="banktext">{formTitle}</h6>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationAddAria}
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
                <Form>
                  <div className="addwrkarea-form-bx">
                    <div className="admin-login-fild">
                      <label htmlFor="State">State</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="state"
                          id="State"
                          placeholder="Enter your state"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.state}
                        />
                      </div>
                      {touched.state && errors.state ? (
                        <div style={{ color: "red" }}>{errors.state}</div>
                      ) : null}
                    </div>

                    <div className="admin-login-fild">
                      <label htmlFor="City">City</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="city"
                          id="City"
                          placeholder="Enter your city"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                        />
                      </div>
                      {touched.city && errors.city ? (
                        <div style={{ color: "red" }}>{errors.city}</div>
                      ) : null}
                    </div>

                    <div className="admin-login-fild">
                      <label htmlFor="zipcode">Zip Code</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="pincode"
                          id="zipcode"
                          placeholder="Enter your zipcode"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.pincode}
                        />
                      </div>
                      {touched.pincode && errors.pincode ? (
                        <div style={{ color: "red" }}>{errors.pincode}</div>
                      ) : null}
                    </div>

                    <div className="admin-login-fild">
                      <label htmlFor="Area">Area</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="ariaName"
                          id="Area"
                          placeholder="Enter your Area"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.ariaName}
                        />
                      </div>
                      {touched.ariaName && errors.ariaName ? (
                        <div style={{ color: "red" }}>{errors.ariaName}</div>
                      ) : null}
                    </div>

                    <div className="admin-login-fild">
                      <label htmlFor="subarea">Sub Area</label>
                      <div className="admin-login-input">
                        <input
                          type="text"
                          name="subAriaName"
                          id="subarea"
                          placeholder="Enter your sub area"
                          autoComplete="off"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.subAriaName}
                        />
                      </div>
                      {touched.subAriaName && errors.subAriaName ? (
                        <div style={{ color: "red" }}>{errors.subAriaName}</div>
                      ) : null}
                    </div>
                  </div>

                  <button type="submit" className="add-work-area-btn">
                    Save
                  </button>
                </Form>
              );
            }}
          </Formik>

<<<<<<< HEAD
            <div className="admin-login-fild">
              <label htmlFor="zipcode">Zip Code</label>
              <div className="admin-login-input">
                <input type="text" name='zipcode' id='zipcode' placeholder='Enter your zipcode'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="Area">Area</label>
              <div className="admin-login-input">
                <input type="text" name='Area' id='Area' placeholder='Enter your Area'   autoComplete='off' />
              </div>
            </div>

            <div className="admin-login-fild">
              <label htmlFor="subarea">Sub Area</label>
              <div className="admin-login-input">
                <input type="text" name='subarea' id='subarea' placeholder='Enter your sub area'   autoComplete='off' />
              </div>
            </div>


            <div className="admin-login-fild">
              <label htmlFor="subarea">Price</label>
              <div className="admin-login-input">
                <input type="text" name='cityprice' id='cityprice' placeholder='Enter your City Price'   autoComplete='off' />
              </div>
            </div>
                    
                </div>
                
            </form>

            <button className="add-work-area-btn">
                Save
            </button>


            <div onClick={onclickCloseAddWorkEdit} className="close-add-work-bx-btn">
=======
          <div
            onClick={onclickCloseAddWorkEdit}
            className="close-add-work-bx-btn"
          >
>>>>>>> 80059b15ae6f7d0eb4d8751302c1319dae4ac7eb
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Addworkareaedit;
