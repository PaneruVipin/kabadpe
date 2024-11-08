import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { vendorOrgainazationUpdate } from "../../apis/vendor/vendor";
import { toast } from "react-toastify";
import { userFetch } from "../../features/user/userActions";

const VendEditOrg = ({ onclickClose }) => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [tabActive, setTabActive] = useState("basic");
  const { userInfo } = useSelector((s) => s?.user);
  const dispatch = useDispatch();
  const handleSubmit = async (data) => {
    const res = await vendorOrgainazationUpdate(data);
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
              <h6>Edit Organization </h6>
            </div>

            <div className="right-lang-sel-bx-flex">
              <div onClick={onclickClose} className="add-prod-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>

          <Formik
            initialValues={{
              storeName: userInfo?.storeName,
              companyName: userInfo?.companyName,
              contactNumber: userInfo?.contactNumber,
              sellarLegalName: userInfo?.VendorDetail?.sellarLegalName,
              gstNumber: userInfo?.VendorDetail?.gstNumber,
              addressLine1: userInfo?.VendorAddress?.addressLine1,
              addressLine2: userInfo?.VendorAddress?.addressLine2,
              city: userInfo?.VendorAddress?.city,
              state: userInfo?.VendorAddress?.state,
              pincode: userInfo?.VendorAddress?.pincode,
              organizationEmail: userInfo?.organizationEmail,
              aboutBrand: userInfo?.aboutBrand,
              websiteUrl: userInfo?.websiteUrl,
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
                      <span>Seller Legal Name</span>
                      <input
                        type="text"
                        name="sellarLegalName"
                        id="name"
                        placeholder="Enter name"
                        autoComplete="off"
                        required
                        value={values?.sellarLegalName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx mt-5">
                      <span>Company Name</span>
                      <input
                        type="text"
                        name="companyName"
                        id="compname"
                        placeholder=""
                        autoComplete="off"
                        required
                        value={values?.companyName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx mt-5">
                      <span>Store Name</span>
                      <input
                        type="text"
                        name="storeName"
                        id="compname"
                        placeholder=""
                        autoComplete="off"
                        required
                        value={values?.storeName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>GST Number</span>
                      <input
                        type="text"
                        name="gstNumber"
                        id="gstnumber"
                        placeholder="Enter GST number"
                        autoComplete="off"
                        value={values?.gstNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
                      <span>Address Line1</span>
                      <textarea
                        name="addressLine1"
                        id="address"
                        cols="30"
                        rows="2"
                        placeholder="Enter address"
                        autoComplete="off"
                        required
                        value={values?.addressLine1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
                      <span>Address Line2</span>
                      <textarea
                        name="addressLine2"
                        id="address"
                        cols="30"
                        rows="2"
                        placeholder="Enter address"
                        autoComplete="off"
                        value={values?.addressLine2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                    </div>
                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>Post Code</span>
                      <div>
                        <input
                          type="text"
                          name="pincode"
                          id="postcode"
                          placeholder="Enter Post Code"
                          autoComplete="off"
                          required
                          value={values?.pincode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>City</span>
                      <div>
                        <input
                          type="text"
                          name="city"
                          id="postcode"
                          placeholder="Enter Post Code"
                          autoComplete="off"
                          required
                          value={values?.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>State</span>
                      <div>
                        <input
                          type="text"
                          name="state"
                          id="postcode"
                          placeholder="Enter Post Code"
                          autoComplete="off"
                          required
                          value={values?.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>Contact</span>
                      <div>
                        <input
                          type="text"
                          name="contactNumber"
                          id="contact"
                          placeholder="Enter number"
                          autoComplete="off"
                          value={values?.contactNumber}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>Organization Email</span>
                      <input
                        type="email"
                        name="organizationEmail"
                        id="email"
                        placeholder="example@gmail.com"
                        autoComplete="off"
                        value={values?.organizationEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>

                    <div className="ord-filt-bx add-prod-inpt-bx">
                      <span>Web site</span>
                      <input
                        type="text"
                        name="websiteUrl"
                        id="url"
                        placeholder="Paste Web URL"
                        autoComplete="off"
                        value={values?.websiteUrl}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="prod-add-can-flex-btn prod-add-can-flex-btn21">
                    <button
                      type="button"
                      className="prod-add-del-btn upld-can-prod"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{ width: "300px" }}
                      className="prod-add-del-btn upld-add-prod"
                    >
                      Update Organization
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

export default VendEditOrg;
