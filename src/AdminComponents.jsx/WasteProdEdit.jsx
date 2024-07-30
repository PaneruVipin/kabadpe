import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import {
  adminkabadProductAdd,
  adminkabadProductUpdate,
} from "../apis/admins/kabadProducts";
import { AutoComplete, Select } from "antd";
import { adminAriaFetch } from "../apis/admins/arias";
import { useQuery } from "@tanstack/react-query";
import { catageories } from "../lib/kabadCatageories";
import { franchiseRateUpdate } from "../apis/franchise/products";

const WasteProdEdit = ({
  onclickEditClose,
  prodEditTrue,
  isEdit,
  editFormValues,
  refetch,
  component,
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
        state: undefined,
        city: undefined,
        category: "",
        unit: "",
        oilSaved: 0,
        electrictySaved: 0,
        waterSaved: 0,
        co2Offset: 0,
      };
  const handleSubmit = async (data) => {
    setOtherErrors({});
    const newData = { ...data };
    const res = isEdit
      ? component == "admin"
        ? await adminkabadProductUpdate(newData)
        : await franchiseRateUpdate(newData)
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
                  {component == "admin" ? (
                    <>
                      <div className="two-fild-grid">
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
                        </div>
                        <div className="admin-login-fild admin-login-fild3">
                          <label htmlFor="#">Category</label>
                          <select
                            type="text"
                            name="category"
                            id="productname"
                            autoComplete="off"
                            placeholder="Enter Product Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.category}
                          >
                            <option value="" hidden>
                              Select Catageory
                            </option>
                            {catageories?.map(({ id, name }) => (
                              <option key={id} value={name}>
                                {name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="two-fild-grid">
                        <div className="prod-image-main mt-3">
                          <h6>Area</h6>

                          <div className="image-fild-flex-bx">
                            <Select
                              value={values?.state}
                              onChange={(v) => {
                                const cities = getCities(v, adminArias);
                                setCites(cities);
                                handleChange({
                                  target: { name: "state", value: v },
                                });
                                handleChange({
                                  target: { name: "city", value: undefined },
                                });
                                handleBlur({
                                  target: { name: "city" },
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
                              value={values?.city}
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
                        {/* <h6>Retail Price</h6> */}

                        <div className="three-fild-grid">
                          <div className="admin-login-fild admin-login-fild3">
                            <label htmlFor="#">Retail Price Per Unit</label>
                            <div className="fild-bx">
                              <span>₹</span>
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
                            </div>
                          </div>
                          <div className="admin-login-fild admin-login-fild3">
                            <label htmlFor="#">Bulk Price Per Unit</label>
                            <div className="fild-bx">
                              <span>₹</span>
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
                            </div>
                          </div>

                          <div className="admin-login-fild admin-login-fild3">
                            <label htmlFor="#">Unit</label>
                            <select
                              type="text"
                              name="unit"
                              id="productname"
                              autoComplete="off"
                              placeholder="Enter Product Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.unit}
                            >
                              <option value="" hidden>
                                Select Unit
                              </option>
                              <option value="kg">Kg</option>
                              <option value="piece">Piece</option>
                            </select>
                          </div>
                        </div>

                        <div className="two-fild-grid">
                          <div className="admin-login-fild admin-login-fild3">
                            <label htmlFor="#">CO2 Offset (Kg)</label>
                            <input
                              type="number"
                              onWheel={(e) => e.currentTarget.blur()}
                              name="co2Offset"
                              id="productname"
                              autoComplete="off"
                              placeholder="CO2 Offset"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.co2Offset}
                            />
                          </div>
                          <div className="admin-login-fild admin-login-fild3">
                            <label htmlFor="#">Water Saved (Litres)</label>
                            <input
                              type="number"
                              onWheel={(e) => e.currentTarget.blur()}
                              name="waterSaved"
                              id="productname"
                              autoComplete="off"
                              placeholder="Water Saved"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.waterSaved}
                            />
                          </div>
                        </div>
                        <div className="two-fild-grid">
                          <div className="admin-login-fild admin-login-fild3">
                            <label htmlFor="#">Electricity Saved (KWh)</label>
                            <input
                              type="number"
                              onWheel={(e) => e.currentTarget.blur()}
                              name="electrictySaved"
                              id="productname"
                              autoComplete="off"
                              placeholder="Electricity Saved"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.electrictySaved}
                            />
                          </div>
                          <div className="admin-login-fild admin-login-fild3">
                            <label htmlFor="#">Oil Saved (Lakhs Litres)</label>
                            <input
                              type="number"
                              name="oilSaved"
                              onWheel={(e) => e.currentTarget.blur()}
                              id="productname"
                              autoComplete="off"
                              placeholder="Oil Saved"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.oilSaved}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">Retail Price Per Unit</label>
                        <div className="fild-bx">
                          <span>₹</span>
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
                        </div>
                      </div>
                      <div className="admin-login-fild admin-login-fild3">
                        <label htmlFor="#">Bulk Price Per Unit</label>
                        <div className="fild-bx">
                          <span>₹</span>
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
                        </div>
                      </div>
                    </>
                  )}
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
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteProdEdit;
{
  /* <div className="admin-login-fild admin-login-fild3">
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
                      </div> */
}
{
  /* <div className="three-fild-bx">
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
                    </div>
                  </div> */
}
