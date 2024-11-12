import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vendorProfileUpdate } from "../../apis/vendor/vendor";
import { toast } from "react-toastify";
import { userFetch } from "../../features/user/userActions";

const VendEditProf = ({ onclickClose }) => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [tabActive, setTabActive] = useState("basic");
  const [images, setImages] = useState();
  const { userInfo } = useSelector((s) => s?.user);
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    const imageUrl = selectedImage.map((image) => URL.createObjectURL(image));
    setImages(imageUrl);
  };

  const handleDelete = () => {
    setImages();
  };
  const handleSubmit = async (data) => {
    const res = await vendorProfileUpdate(data);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    dispatch(userFetch({}));
    onclickClose();
  };
  return (
    <>
      <section className="add-prod-comp" onClick={onclickClose}>
        <div
          className="add-prod-main-bx add-prod-main-bx42"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="top-add-prod-flex-bx">
            <div className="left-add-prod-title-bx">
              <h6>Edit Profile </h6>
            </div>

            <div className="right-lang-sel-bx-flex">
              <div onClick={onclickClose} className="add-prod-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>

          <Formik
            initialValues={{
              fullname: userInfo?.fullname,
              email: userInfo?.email,
              phoneNumber: userInfo?.phoneNumber,
              profileImage: userInfo?.profileImage,
              coverImage: userInfo?.coverImage,
            }}
            onSubmit={handleSubmit}
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
                <Form className="add-prod-form-main">
                  <div className="add-product-form-bx">
                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>Name</span>
                      <input
                        type="text"
                        name="fullname"
                        id="profilename"
                        placeholder="Enter Profile Name"
                        autoComplete="off"
                        required
                        value={values?.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div
                      style={{ alignItems: "center" }}
                      className="ord-filt-bx add-prod-inpt-bx"
                    >
                      <div>
                        <span>Profile Image</span>{" "}
                        <div className="image-add-prof">
                          <div className="upld-prod-img-bx upld-prod-img-bx21">
                            <img
                              src={
                                !values?.profileImage ||
                                typeof values?.profileImage == "string"
                                  ? values?.profileImage ||
                                    "/images/no_profile.webp"
                                  : URL.createObjectURL(values?.profileImage)
                              }
                              alt=""
                            />
                            <button
                              type="button"
                              onClick={() => {
                                handleChange({
                                  target: { name: "profileImage", value: "" },
                                });
                              }}
                              className="delete-prod-img-bx"
                            >
                              <ion-icon name="close-outline"></ion-icon>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="right-prod-img-add-bx">
                        <div className="right-prod-upload-img-bx-main">
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            id="imageUpload"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                handleChange({
                                  target: { name: "profileImage", value: file },
                                });
                              }
                            }}
                          />

                          <label htmlFor="imageUpload">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                            <p>Update your images here</p>
                            <span>
                              {" "}
                              (Only *jpeg, *webp and * png images will be
                              accepted){" "}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{ alignItems: "center" }}
                      className="ord-filt-bx add-prod-inpt-bx"
                    >
                      <div>
                        <span>Cover Image</span>{" "}
                        <div className="image-add-prof">
                          <div className="upld-prod-img-bx upld-prod-img-bx21">
                            <img
                              style={{ objectFit: "contain" }}
                              src={
                                !values?.coverImage ||
                                typeof values?.coverImage == "string"
                                  ? values?.coverImage ||
                                    "/images/no_profile.webp"
                                  : URL.createObjectURL(values?.coverImage)
                              }
                              alt=""
                            />
                            <button
                              type="button"
                              onClick={() => {
                                handleChange({
                                  target: { name: "coverImage", value: "" },
                                });
                              }}
                              className="delete-prod-img-bx"
                            >
                              <ion-icon name="close-outline"></ion-icon>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="right-prod-img-add-bx">
                        <div className="right-prod-upload-img-bx-main">
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            id="imageUpload2"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                handleChange({
                                  target: { name: "coverImage", value: file },
                                });
                              }
                            }}
                          />

                          <label htmlFor="imageUpload2">
                            <ion-icon name="cloud-upload-outline"></ion-icon>
                            <p>Update your images here</p>
                            <span>
                              {" "}
                              (Only *jpeg, *webp and * png images will be
                              accepted){" "}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx mt-5">
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        id="profileemail"
                        placeholder="admin@gmail.com"
                        autoComplete="off"
                        required
                        value={values?.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>Contact Number</span>
                      <input
                        type="number"
                        name="phoneNumber"
                        id="contnumber"
                        placeholder="Enter Phone number"
                        autoComplete="off"
                        required
                        value={values?.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div className="prod-add-can-flex-btn prod-add-can-flex-btn21">
                    <button
                      type="submit"
                      className="prod-add-del-btn upld-add-prod"
                    >
                      Update Profile
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default VendEditProf;
