import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  adminkabadProductAdd,
  adminkabadProductUpdate,
} from "../apis/admins/kabadProducts";

const WasteProdEdit = ({
  onclickEditClose,
  prodEditTrue,
  isEdit,
  editFormValues,
  refetch,
}) => {
  const [selectImg, setSelectImg] = useState("");
  const [otherErrors, setOtherErrors] = useState({});
  const formTitle = isEdit ? " Update Waste Product " : "Add Waste Product";
  const submitBuutonText = isEdit ? " Update Product " : "Add Product";
  const initialValues = isEdit
    ? editFormValues
    : {
        bulkEndWeight: "",
        bulkStartWeight: "",
        retailEndWeight: "",
        retailStartWeight: "",
        bulkPrice: "",
        retailPrice: "",
        productImage: "",
        productName: "",
      };

  const handleSubmit = async (data) => {
    setOtherErrors({});
    const newData = { ...data };
    if (!(newData?.productImage instanceof File)) {
      delete newData?.productImage;
    }
    const res = isEdit
      ? await adminkabadProductUpdate(newData)
      : await adminkabadProductAdd(newData);
    if (!res?.error) {
      refetch();
      onclickEditClose();
      return;
    }
    setOtherErrors({ insert: res?.message });
  };
  return (
    <>
      <section className="waste-prod-edit-comp" onClick={onclickEditClose}>
        <div
          className="waste-prod-edit-main-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h5>{formTitle}</h5>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            // validationSchema={object().shape({
            //   otp: number().required("Valid OTP Requird"),
            // })}
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
                  <div className="admin-login-fild admin-login-fild3">
                    <label htmlFor="#">Product Name</label>
                    <input
                      type="text"
                      name="productName"
                      id="productname"
                      autoComplete="off"
                      placeholder="Enter Product Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values?.productName}
                    />
                    {/* {touched?.otp && errors?.otp ? (
                      <div style={{ color: "red" }}>{errors?.otp}</div>
                    ) : null} */}
                  </div>

                  <div className="prod-image-main mt-3">
                    <h6>Product Image</h6>

                    <div className="image-fild-flex-bx">
                      <div className="input-file-btn">
                        <label htmlFor="Prod_img">Product Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          id="Prod_img"
                          name="productImage"
                          onChange={(event) => {
                            const file = event.target.files[0];
                            values.productImage = event.target.files[0];
                            const reader = new FileReader();

                            reader.onload = () => {
                              setSelectImg(reader.result);
                            };

                            if (file) {
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </div>
                      {selectImg || values?.productImage ? (
                        <div className="image-add-bx">
                          <img src={selectImg || values?.productImage} alt="" />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="three-fild-bx">
                    <h6>Retail Price</h6>

                    <div className="three-fild-grid">
                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">Start</label>
                        <div className="fild-bx">
                          <input
                            type="number"
                            onWheel={(e) => e.currentTarget.blur()}
                            name="retailStartWeight"
                            id="Startret"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.retailStartWeight}
                          />
                          <span>Kg</span>
                        </div>
                      </div>

                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">End</label>
                        <div className="fild-bx">
                          <input
                            type="number"
                            onWheel={(e) => e.currentTarget.blur()}
                            name="retailEndWeight"
                            id="endret"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.retailEndWeight}
                          />
                          <span>Kg</span>
                        </div>
                      </div>

                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">Price</label>
                        <div className="fild-bx">
                          <input
                            type="number"
                            onWheel={(e) => e.currentTarget.blur()}
                            name="retailPrice"
                            id="Price"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.retailPrice}
                          />
                          <span>₹</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="three-fild-bx">
                    <h6>Bulk Price</h6>

                    <div className="three-fild-grid">
                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">Start</label>
                        <div className="fild-bx">
                          <input
                            type="number"
                            onWheel={(e) => e.currentTarget.blur()}
                            name="bulkStartWeight"
                            id="Startret"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.bulkStartWeight}
                          />
                          <span>Kg</span>
                        </div>
                      </div>

                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">End</label>
                        <div className="fild-bx">
                          <input
                            type="number"
                            onWheel={(e) => e.currentTarget.blur()}
                            name="bulkEndWeight"
                            id="endret"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.bulkEndWeight}
                          />
                          <span>Kg</span>
                        </div>
                      </div>

                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">Price</label>
                        <div className="fild-bx">
                          <input
                            type="number"
                            onWheel={(e) => e.currentTarget.blur()}
                            name="bulkPrice"
                            id="Price"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.bulkPrice}
                          />
                          <span>₹</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {otherErrors?.insert ? (
                    <div style={{ color: "red", textAlign: "center" }}>
                      {otherErrors?.insert}
                    </div>
                  ) : null}
                  <button type="submit" className="add-prod-btn confirm-btn">
                    {submitBuutonText}
                  </button>
                </Form>
              );
            }}
          </Formik>

          <div onClick={onclickEditClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteProdEdit;
