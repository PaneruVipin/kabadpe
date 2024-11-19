import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  greenProductsAttributeAdd,
  greenProductsAttributeUpdate,
} from "../apis/products/attribute";
import { toast } from "react-toastify";

const AdminProdAtributeEdit = ({ onClickClose, initialValues }) => {
  const [attribute, setAttribute] = useState(
    initialValues?.ProdAttributeValues?.map(({ value }) => value) || []
  );
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && value.trim() !== "") {
      setAttribute([...attribute, value.trim()]);
      setValue("");
      e.preventDefault();
    }
  };

  const handleDelteChange = (i) => {
    const newData = attribute.filter((elem, id) => id !== i);
    setAttribute(newData);
  };

  const handleSubmit = async (data) => {
    const res = initialValues
      ? await greenProductsAttributeUpdate({ ...data, values: attribute })
      : await greenProductsAttributeAdd({ ...data, values: attribute });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClose();
  };

  return (
    <>
      <section className="waste-prod-edit-comp" onClick={onClickClose}>
        <Formik initialValues={initialValues || {}} onSubmit={handleSubmit}>
          {({ handleBlur, handleChange, values, errors, touched, ...rest }) => {
            return (
              <Form
                className="waste-prod-edit-main-bx admin-prod-atribute-main-bx"
                onClick={(e) => e.stopPropagation()}
              >
                <h5>
                  {initialValues
                    ? "Update Product Attribute"
                    : "Add Product Attribute"}
                </h5>

                <div className="two-fild-grid">
                  <div className="admin-login-fild admin-login-fild3">
                    <label htmlFor="#">Attribute Title</label>
                    <input
                      type="text"
                      name="name"
                      id="atributetitle"
                      autoComplete="off"
                      placeholder="Color or Size or Dimension or Material or Fabric"
                      value={values?.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                  <div className="admin-login-fild admin-login-fild3">
                    <label htmlFor="#">Display Name</label>
                    <input
                      type="text"
                      name="label"
                      id="displayname"
                      autoComplete="off"
                      placeholder="Display Name"
                      value={values?.label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                  </div>
                </div>

                {/* <div className="admin-login-fild admin-login-fild3 mt-3 mb-4">
                  <label htmlFor="#">Options</label>
                  <select
                    type="text"
                    name="style"
                    id="productname"
                    autoComplete="off"
                    value={values?.style}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option value="" hidden>
                      Choose Options
                    </option>
                    <option value="checkbox">Check Box</option>
                    <option value="select">Select</option>
                  </select>
                </div> */}

                {values?.name?.toLocaleLowerCase()?.trim() != "color" ? (
                  <div className="admin-login-fild admin-login-fild3">
                    <label htmlFor="#">Values</label>
                    <div className="variants-attribute-bx variants-attribute-bx-admin">
                      <div className="variant-elem--bx">
                        {attribute.map((curElem, indx) => (
                          <div className="variant-bx" key={indx}>
                            <span> {curElem} </span>
                            <button
                              type="button"
                              onClick={() => handleDelteChange(indx)}
                            >
                              <ion-icon name="close-outline"></ion-icon>
                            </button>
                          </div>
                        ))}
                      </div>

                      <input
                        type="text"
                        name="varint"
                        id="varint"
                        value={value}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        placeholder="Please enter to add variants"
                        autoComplete="off"
                        required={attribute?.length ? false : true}
                      />
                    </div>
                  </div>
                ) : null}

                <button
                  type="submit"
                  className="add-prod-btn  confirm-btn-aa confirm-btn"
                >
                  Add Attribute
                </button>

                <div onClick={onClickClose} className="close-btn">
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
};

export default AdminProdAtributeEdit;
