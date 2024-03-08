import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  adminkabadProductAdd,
  adminkabadProductUpdate,
} from "../apis/admins/kabadProducts";
import { AutoComplete, Select } from "antd";
import { adminAriaFetch } from "../apis/admins/arias";
import { useQuery } from "@tanstack/react-query";

const WasteProdEdit = ({
  onclickEditClose,
  prodEditTrue,
  isEdit,
  editFormValues,
  refetch,
}) => {
  const [selectImg, setSelectImg] = useState("");
  const [otherErrors, setOtherErrors] = useState({});
  const [states, setStates] = useState([]);
  const [cites, setCites] = useState([]);
  const formTitle = isEdit ? " Update Waste Product " : "Add Waste Product";
  const submitBuutonText = isEdit ? " Update Product " : "Add Product";
  const initialValues = editFormValues
    ? {
        ...editFormValues,
        state: editFormValues?.Arium?.state,
        city: editFormValues?.Arium?.city,
      }
    : {
        bulkEndWeight: "",
        bulkStartWeight: "",
        retailEndWeight: "",
        retailStartWeight: "",
        bulkPrice: "",
        retailPrice: "",
        productImage: "",
        productName: "",
        state: "",
        city: "",
      };
  const handleSubmit = async (data) => {
    setOtherErrors({});
    const newData = { ...data };
    // if (!(newData?.productImage instanceof File) && !newData?.productImage) {
    //   delete newData?.productImage;
    // }
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
  const getStates = (res) =>
    [...new Set(res?.map((e, i) => e?.state))].map((name, i) => ({
      id: i,
      name,
    }));
  const getCities = (state, res) => {
    return [
      ...new Set(res?.filter((e) => e?.state == state)?.map((e, i) => e?.city)),
    ].map((name, i) => ({ id: i, name }));
  };
  const { data: adminArias } = useQuery({
    queryKey: ["adminariafetch--"],
    queryFn: () => adminAriaFetch(),
  });
  useEffect(() => {
    if (adminArias?.error || !adminArias || !adminArias?.length) {
      return;
    }
    const state = getStates(adminArias);
    setStates(state);
  }, [adminArias]);
  useEffect(() => {
    if (
      adminArias?.error ||
      !adminArias ||
      !adminArias?.length ||
      !initialValues?.state
    ) {
      return;
    }
    const cities = getCities(initialValues?.state, adminArias);
    setCites(cities);
  }, []);
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
                  <div className="two-fild-grid">
                    <div className="prod-image-main mt-3">
                      <h6>Area</h6>

                      {isEdit ? (
                        <div>
                          {" "}
                          <p>
                            {editFormValues?.Arium?.subAriaName} --{" "}
                            <span>{`${editFormValues?.Arium?.state}, ${editFormValues?.Arium?.city}, ${editFormValues?.Arium?.ariaName} - ${editFormValues?.Arium?.pincode}`}</span>
                          </p>
                        </div>
                      ) : (
                        <div className="image-fild-flex-bx">
                          <Select
                            defaultValue={values?.state}
                            onChange={(v) => {
                              const cities = getCities(v, adminArias);
                              setCites(cities);
                              handleChange({
                                target: { name: "state", value: v },
                              });
                            }}
                            onBlur={(v) => {
                              handleBlur({
                                target: { name: "state" },
                              });
                            }}
                            showSearch={true}
                            optionFilterProp="children"
                            placeholder="Select State"
                            className="apnt-inpt-bx-autotype"
                          >
                            {states?.map(({ name, id }) => (
                              <Select.Option key={id} value={name}>
                                {name}
                              </Select.Option>
                            ))}
                          </Select>
                          <Select
                            defaultValue={values?.city}
                            showSearch={true}
                            optionFilterProp="children"
                            placeholder="Select City"
                            className="apnt-inpt-bx-autotype"
                            onChange={(v) => {
                              handleChange({
                                target: { name: "city", value: v },
                              });
                            }}
                            onBlur={(v) => {
                              handleBlur({
                                target: { name: "city" },
                              });
                            }}
                          >
                            {cites?.map(({ name, id }) => (
                              <Select.Option key={id} value={name}>
                                {name}
                              </Select.Option>
                            ))}
                          </Select>
                        </div>
                      )}
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
                            <img
                              src={selectImg || values?.productImage}
                              alt=""
                            />
                          </div>
                        ) : null}
                      </div>
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
