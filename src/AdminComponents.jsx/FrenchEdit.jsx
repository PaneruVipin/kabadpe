import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Form, Formik } from "formik";
import { adminUsersUpdate } from "../apis/admins/users";
import { franchiseProfileUpdate } from "../apis/franchise/user";
import { useDispatch } from "react-redux";

const FrenchEdit = ({
  onClickCloseEditForm,
  initialValues,
  refetch,
  comp = "franchise",
}) => {
  const [selectedImg, setSelectedImg] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [otherError, setOtherError] = useState({});
  const handleImageChange = (object, feild) => (e) => {
    const file = e.target.files[0];
    object[feild] = file;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImg(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async ({
    franchiseStatus,
    franchiseAddress,
    gst,
    phone,
    email,
    fullname,
    companyName,
    franchiseLogo,
    id,
    brandname,
    contactPersonName,
    contactNumber,
  }) => {
    const res =
      comp == "admin"
        ? await adminUsersUpdate({
            franchiseStatus,
            franchiseAddress,
            gst,
            phone,
            email,
            fullname,
            companyName,
            franchiseLogo,
            brandname,
            contactPersonName,
            contactNumber,
            id,
            role: "franchise",
          })
        : await franchiseProfileUpdate({
            fullname,
            gst,
            franchiseAddress,
            franchiseLogo,
            brandname,
            contactPersonName,
            contactNumber,
          });
    if (!res?.error) {
      onClickCloseEditForm();
      refetch();
      return;
    }
    setOtherError({ update: res?.message });
  };
  return (
    <>
      <section className="french-edit-comp" onClick={onClickCloseEditForm}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleBlur, handleChange, values, errors, touched, ...rest }) => {
            return (
              <Form
                className="french-edit-main-box"
                onClick={(e) => e.stopPropagation()}
              >
                <h5>Frenchies Details (Edit) </h5>
                <div className="french-det-logo-box">
                  <div className="f-logo">
                    <img
                      src={
                        selectedImg ||
                        initialValues?.franchiseLogo ||
                        "/images/temp/temp-user-profile.png"
                      }
                      onError={(e) => {
                        e.currentTarget.src =
                          "/images/temp/temp-user-profile.png";
                      }}
                      alt=""
                    />
                  </div>
                  <label htmlFor="image_Path" className="french-logo-btn">
                    Upload
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    name="franchiseLogo"
                    id="image_Path"
                    onChange={handleImageChange(values, "franchiseLogo")}
                  />
                </div>
                <div className="french-det-grid">
                  <div className="admin-login-fild">
                    <label htmlFor="companyname">Name of the Company</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="companyName"
                        id="companyname"
                        placeholder="Company Name"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.companyName}
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="companyname">Brand Name </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="brandname"
                        id="managername"
                        placeholder="Brand Name"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.brandname}
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="companyname">Manager Name / POC </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="fullname"
                        id="managername"
                        placeholder="Manager Name"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.fullname}
                      />
                    </div>
                  </div>
                  {comp != "admin" ? (
                    <>
                      <div className="admin-login-fild">
                        <label htmlFor="Email">Email </label>
                        <div className="admin-login-input">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.email}
                            placeholder="Email ID"
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      <div className="admin-login-fild">
                        <label htmlFor="mobilenumber">Phone Number </label>
                        <div className="admin-login-input">
                          <input
                            type="text"
                            name="phone"
                            id="mobilenumber"
                            placeholder="Mobile number"
                            autoComplete="off"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.phone}
                          />
                        </div>
                      </div>
                    </>
                  ) : null}
                  <div className="admin-login-fild">
                    <label htmlFor="gstnumber">GST Number </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="gst"
                        id="gstnumber"
                        placeholder="GST Number"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.gst}
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="workarea">Area of Work </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="franchiseAddress"
                        id="workarea"
                        placeholder="Work Area"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.franchiseAddress}
                      />
                    </div>
                  </div>

                  {/* <div className="admin-login-fild">
                    <label htmlFor="bankname">Bank Name </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="bankname"
                        id="bankname"
                        placeholder="Bank Name"
                        autoComplete="off"
                      />
                    </div>
                  </div> */}

                  {/* <div className="admin-login-fild">
                    <label htmlFor="accountnumber">Account Number </label>
                    <div className="admin-login-input">
                      <input
                        type="password"
                        name="accountnumber"
                        id="accountnumber"
                        placeholder="Account Number"
                        autoComplete="off"
                      />
                    </div>
                  </div> */}

                  {/* <div className="admin-login-fild">
                    <label htmlFor="confirmaccountnumber">
                      Confirm Account Number{" "}
                    </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="confirmaccountnumber"
                        id="confirmaccountnumber"
                        placeholder="Confirm Account Number"
                        autoComplete="off"
                      />
                    </div>
                  </div> */}

                  {/* <div className="admin-login-fild">
                    <label htmlFor="ifsc">IFSC Code </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="ifsc"
                        id="ifsc"
                        placeholder="IFSC Code"
                        autoComplete="off"
                      />
                    </div>
                  </div> */}

                  {/* <div className="admin-login-fild">
                    <label htmlFor="zipcode">Zip Code </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="zipcode"
                        id="zipcode"
                        placeholder="Zip Code"
                        autoComplete="off"
                      />
                    </div>
                  </div> */}
                  <div className="admin-login-fild">
                    <label htmlFor="mobilenumber">
                      Alternative Contact Person Name
                    </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="contactPersonName"
                        id="mobilenumber"
                        placeholder="Contact Person number"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.contactPersonName}
                      />
                    </div>
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="mobilenumber">
                      Alternative Phone Number
                    </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="contactNumber"
                        id="mobilenumber"
                        placeholder="Contact number"
                        autoComplete="off"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values?.contactNumber}
                      />
                    </div>
                  </div>

                  {comp == "admin" ? (
                    <div className="admin-login-fild ">
                      <label htmlFor="zipcode">Franchise Status</label>
                      <div className="admin-login-input">
                        <select
                          name="franchiseStatus"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.franchiseStatus}
                          id="subscriptiontype"
                        >
                          <option value="inactive">Unverified</option>
                          <option value="active">Active</option>
                          <option value="ban">Ban</option>
                        </select>
                      </div>
                    </div>
                  ) : null}
                </div>
                {/* <div className="text-editor-bx">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => {
                      setContent(newContent);
                    }}
                  />
                </div> */}
                <button
                  type="button"
                  onClick={() => onClickCloseEditForm()}
                  className="close-popup-btn"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <p style={{ color: "red", textAlign: "center", lineHeight: 0 }}>
                  {otherError?.update}
                </p>
                <button type="submit" className="submit-btn submit-btn5">
                  Save Changes
                </button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
};

export default FrenchEdit;
