import { Form, Formik } from "formik";
import React, { useState } from "react";
import {
  greenProdCategoryAdd,
  greenProdCategoryUpdate,
} from "../apis/products/categories";
import { toast } from "react-toastify";

const AdminProdAddCateg = ({ initialValues, onClickClose }) => {
  const [images, setImages] = useState("");
  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages(selectedImage?.[0]);
  };

  const handleDeleteImage = () => {
    setImages("");
  };
  const handleSubmit = async (data) => {
    const payload = { ...data };
    if (images) {
      payload.image = images;
    }
    const res = initialValues
      ? await greenProdCategoryUpdate(payload)
      : await greenProdCategoryAdd(payload);
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
                <h5> {initialValues ? "Update Category" : "Add Category"} </h5>

                <div className="admin-login-fild admin-login-fild3">
                  <label htmlFor="#">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="categname"
                    autoComplete="off"
                    placeholder="Category name"
                    value={values?.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="admin-login-fild admin-login-fild3  mt-3">
                  <label htmlFor="#">Comission Charges</label>
                  <input
                    type="number"
                    name="charge"
                    id="categname"
                    autoComplete="off"
                    placeholder="Comission Charges (%) "
                    value={values?.charge}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {/* <div className="two-fild-grid three-fild-grid">
            <div className="admin-login-fild admin-login-fild3 ">
              <label htmlFor="#">Parent Category</label>
              <select
                type="text"
                name="category"
                id="productname"
                autoComplete="off"
              >
                <option value="choose">Choose Category</option>
                <option value="checkbox">Fruits</option>
                <option value="checkbox">Fish</option>
                <option value="checkbox">Vegetables</option>
                <option value="checkbox">Household tools</option>
              </select>
            </div>

            <div className="admin-login-fild admin-login-fild3 ">
              <label htmlFor="#">Sub Category</label>
              <select
                type="text"
                name="category"
                id="productname"
                autoComplete="off"
              >
                <option value="choose">Choose Sub Category</option>
                <option value="checkbox">Fish </option>
                <option value="checkbox">Meat</option>
                <option value="checkbox">Dry Fruits</option>
                <option value="checkbox">Baby Food</option>
              </select>
            </div>

            <div className="admin-login-fild admin-login-fild3 ">
              <label htmlFor="#">Comission Charges</label>
              <input
                type="text"
                name="categname"
                id="categname"
                autoComplete="off"
                placeholder="Comission Charges (%) "
              />
            </div>
          </div> */}

                <div className="admin-login-fild admin-login-fild3 admin-login-fild34 mt-3 mb-4">
                  <label htmlFor="#">Description</label>
                  <textarea
                    name="desc"
                    id="desc"
                    placeholder="Enter Description"
                    value={values?.desc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></textarea>
                </div>

                <div className="admin-login-fild admin-login-fild3 admin-login-fild34 mt-2">
                  <label>Category Images</label>

                  <div className="right-prod-img-add-bx">
                    <div className="right-prod-upload-img-bx-main">
                      <input
                        type="file"
                        accept="image/*"
                        // multiple
                        id="imageUpload"
                        onChange={handleImageChange}
                      />

                      <label htmlFor="imageUpload">
                        <ion-icon name="cloud-upload-outline"></ion-icon>
                        <p>Drag your images here</p>
                        <span>
                          {" "}
                          (Only *jpeg, *webp and * png images will be accepted){" "}
                        </span>
                      </label>
                    </div>

                    <div className="image-add-grid  mb-5">
                      {images || initialValues ? (
                        <div className="upld-prod-img-bx">
                          <img
                            src={
                              images
                                ? URL.createObjectURL(images)
                                : initialValues?.image
                            }
                            alt=""
                          />
                          <button
                            type="button"
                            onClick={handleDeleteImage}
                            className="delete-prod-img-bx"
                          >
                            <ion-icon name="close-outline"></ion-icon>
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <button type="submit" className="add-prod-btn   confirm-btn">
                  Add Category
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

export default AdminProdAddCateg;
