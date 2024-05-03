import React, { useRef, useState, useEffect } from "react";
import { workers } from "../lib/worker";
import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import { downloadFile } from "../lib/file";
import { FaFileImage } from "react-icons/fa";
import { adminUsersUpdate } from "../apis/admins/users";
import { Select } from "antd";
import { useQuery } from "@tanstack/react-query";
import { adminAriaFetch } from "../apis/admins/arias";
import { workerPlansFetch } from "../apis/worker/plan";

const WasteColectEdit = ({
  onClickCloseEditForm,
  initialValues,
  refetch,
  comp = "franchise",
}) => {
  const [selectedImage, setSelectedImage] = useState({});
  const [otherErrors, setOtherErrors] = useState({});
  const [arias, setArias] = useState([]);
  const [subArias, setSubArias] = useState([]);
  const handleImageChange = (object, feild) => (e) => {
    const file = e.target.files[0];
    object[feild] = file;
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage((prevImages) => ({
          ...prevImages,
          [e.target.name]: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = async ({
    accountStatus,
    heathCheckupDate,
    saftyTrainingDate,
    policeVerification,
    saftyTraining,
    aadharBack,
    aadharFront,
    address,
    emergencyPersonName,
    emergencyPhone,
    insurance,
    workerRole,
    gender,
    dob,
    phoneNumber,
    email,
    fullname,
    id,
    profileImage,
    pincode,
    ariaName,
    subAriaName,
  }) => {
    setOtherErrors({});
    const res = await adminUsersUpdate({
      accountStatus,
      heathCheckupDate,
      saftyTrainingDate,
      policeVerification,
      saftyTraining,
      aadharBack,
      aadharFront,
      address,
      emergencyPersonName,
      emergencyPhone,
      insurance,
      workerRole,
      gender,
      dob,
      phoneNumber,
      email,
      fullname,
      id,
      role: "worker",
      profileImage,
      pincode,
      ariaName,
      subAriaName,
    });
    if (!res?.error) {
      onClickCloseEditForm();
      refetch();
      return;
    }
    setOtherErrors({ update: res?.message });
  };
  const getArias = (pincode, res) => {
    return [
      ...new Set(
        res.filter((e) => e?.pincode == pincode)?.map((e, i) => e?.ariaName)
      ),
    ]?.map((name, i) => ({ id: i, name }));
  };

  const getSubArias = (pincode, aria, res) => {
    return [
      ...new Set(
        res
          .filter((e) => e?.pincode == pincode && e?.ariaName == aria)
          ?.map((e, i) => e?.subAriaName)
      ),
    ]?.map((name, i) => ({ id: i, name }));
  };
  const { data: adminArias } = useQuery({
    queryKey: ["adminariafetch-- 1"],
    queryFn: () => adminAriaFetch(),
  });
  useEffect(() => {
    if (!adminArias?.error && adminArias) {
      const { pincode, ariaName } = initialValues;
      const arias = getArias(pincode, adminArias);
      setArias(arias);
      const subArias = getSubArias(pincode, ariaName, adminArias);
      setSubArias(subArias);
    }
  }, [adminArias]);

  return (
    <>
      <section className="french-edit-comp" onClick={onClickCloseEditForm}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleBlur, handleChange, values, errors, touched, ...rest }) => {
            console.log("this is values", values);
            return (
              <Form
                className="french-edit-main-box"
                onClick={(e) => e.stopPropagation()}
              >
                <h5>Waste Collector (Edit) </h5>

                <div className="french-det-grid">
                  <div className="french-det-logo-box">
                    <div className="f-logo">
                      <img
                        src={
                          selectedImage?.profileImage ||
                          initialValues?.profileImage ||
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
                      name="profileImage"
                      id="image_Path"
                      onChange={handleImageChange(values, "profileImage")}
                    />
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="name">Name</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="fullname"
                        id="name"
                        value={values?.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        //placeholder="Enter your name"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="name">Email</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="email"
                        id="name"
                        value={values?.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        //placeholder="Enter your name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="name">Phone Number</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="phoneNumber"
                        id="name"
                        value={values?.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        //placeholder="Enter your name"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="name">Date Of Birth</label>
                    <div className="admin-login-input">
                      <input
                        type="date"
                        name="dob"
                        id="dob"
                        value={DateTime.fromISO(values?.dob, {
                          zone: "utc",
                        }).toFormat("yyyy-MM-dd")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="name">Gender</label>
                    <div className="admin-login-input">
                      <select
                        name="gender"
                        id="gender"
                        value={values?.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="custom">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="name">Worker Role</label>
                    <div className="admin-login-input">
                      <select
                        name="workerRole"
                        id="gender"
                        value={values?.workerRole}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        {workers.map(({ id, value, label }) => (
                          <option key={id} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="Caste">Insurance</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="insurance"
                        id="Caste"
                        value={values?.insurance}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        //placeholder="Insurance"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="Religion">Emergency Contact Number</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="emergencyPhone"
                        id="Religion"
                        value={values?.emergencyPhone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        //placeholder="Emergency Contact Number"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="phonenumber">
                      Emergency Contact Person
                    </label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="emergencyPersonName"
                        id="phonenumber"
                        value={values?.emergencyPersonName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        //placeholder="Emergency Contact Person Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="phonenumber">Pincode</label>
                    <div className="admin-login-input">
                      <input
                        type="number"
                        name="pincode"
                        id="phonenumber"
                        value={values?.pincode}
                        onChange={(e) => {
                          handleChange(e);
                          const arias = getArias(e.target.value, adminArias);
                          setArias(arias);
                        }}
                        onBlur={handleBlur}
                        //placeholder="Emergency Contact Person Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="phonenumber">Area</label>
                    <div className="admin-login-input">
                      <Select
                        value={values?.ariaName}
                        onChange={(v) => {
                          const cities = getSubArias(
                            values?.pincode,
                            v,
                            adminArias
                          );
                          setSubArias(cities);
                          handleChange({
                            target: { name: "ariaName", value: v },
                          });
                          handleChange({
                            target: { name: "subAriaName", value: undefined },
                          });
                          handleBlur({
                            target: { name: "subAriaName" },
                          });
                        }}
                        onBlur={(v) => {
                          handleBlur({
                            target: { name: "ariaName" },
                          });
                        }}
                        showSearch={true}
                        optionFilterProp="children"
                        placeholder="Select State"
                        className="apnt-inpt-bx-autotype"
                      >
                        {arias?.map(({ name, id }) => (
                          <Select.Option key={id} value={name}>
                            {name}
                          </Select.Option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="phonenumber">Sub Area</label>
                    <div className="admin-login-input">
                      <Select
                        value={values?.subAriaName}
                        showSearch={true}
                        optionFilterProp="children"
                        placeholder="Select City"
                        className="apnt-inpt-bx-autotype"
                        onChange={(v) => {
                          handleChange({
                            target: { name: "subAriaName", value: v },
                          });
                        }}
                        onBlur={(v) => {
                          handleBlur({
                            target: { name: "subAriaName" },
                          });
                        }}
                      >
                        {subArias?.map(({ name, id }) => (
                          <Select.Option key={id} value={name}>
                            {name}
                          </Select.Option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="admin-login-fild">
                  <label htmlFor="Address">Address</label>
                  <div className="admin-login-input">
                    <input
                      type="text"
                      name="address"
                      id="Address"
                      value={values?.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      //placeholder="Enter your Address"
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* <h6 className="banktext mt-3 mb-3">Social Security</h6> */}

                <div className="french-det-grid french-det-grid4 mt-3 mb-3">
                  <div className="upload-img-bx">
                    <label htmlFor="Aadharfront">Aadhar (Front) </label>
                    {initialValues?.aadharFront ? (
                      <span
                        style={{ cursor: "pointer", display: "block" }}
                        onClick={() => {
                          downloadFile(
                            initialValues?.aadharFront,
                            "aadharFront"
                          );
                        }}
                      >
                        View
                      </span>
                    ) : (
                      <span style={{ color: "red", display: "block" }}>
                        Not Uploaded
                      </span>
                    )}
                    <div className="admin-login-input img-upld-btn">
                      <label htmlFor="file">Upload</label>
                      <input
                        type="file"
                        accept="image/*"
                        name="aadharFront"
                        id="file"
                        onChange={handleImageChange(values, "aadharFront")}
                        autoComplete="off"
                      />
                      <div className="select-File"></div>
                    </div>
                    {selectedImage?.aadharFront && (
                      <FaFileImage
                        style={{
                          width: "40px",
                          height: "40px",
                          marginTop: "20px",
                        }}
                      />
                    )}
                  </div>

                  <div className="upload-img-bx">
                    <label htmlFor="Aadharfront">Aadhar (Back) </label>
                    {initialValues?.aadharBack ? (
                      <span
                        style={{ cursor: "pointer", display: "block" }}
                        onClick={() => {
                          downloadFile(initialValues?.aadharBack, "aadharBack");
                        }}
                      >
                        View
                      </span>
                    ) : (
                      <span style={{ color: "red", display: "block" }}>
                        Not Uploaded
                      </span>
                    )}
                    <div className="admin-login-input img-upld-btn">
                      <label htmlFor="file2">Upload</label>
                      <input
                        type="file"
                        accept="image/*"
                        name="aadharBack"
                        id="file2"
                        onChange={handleImageChange(values, "aadharBack")}
                        autoComplete="off"
                      />
                    </div>
                    {selectedImage?.aadharBack && (
                      <FaFileImage
                        style={{
                          width: "40px",
                          height: "40px",
                          marginTop: "20px",
                        }}
                      />
                    )}
                  </div>
                  <div className="upload-img-bx">
                    <label htmlFor="Aadharfront">
                      Safety and skill training{" "}
                    </label>
                    {initialValues?.saftyTraining ? (
                      <span
                        style={{ cursor: "pointer", display: "block" }}
                        onClick={() => {
                          downloadFile(
                            initialValues?.saftyTraining,
                            "saftyTraining"
                          );
                        }}
                      >
                        View
                      </span>
                    ) : (
                      <span style={{ color: "red", display: "block" }}>
                        Not Uploaded
                      </span>
                    )}
                    <div className="admin-login-input img-upld-btn">
                      <label htmlFor="saftyTraining">Upload</label>
                      <input
                        type="file"
                        accept="image/*"
                        name="saftyTraining"
                        id="saftyTraining"
                        onChange={handleImageChange(values, "saftyTraining")}
                        autoComplete="off"
                      />
                    </div>
                    {selectedImage?.saftyTraining && (
                      <FaFileImage
                        style={{
                          width: "40px",
                          height: "40px",
                          marginTop: "20px",
                        }}
                      />
                    )}
                  </div>
                  <div className="upload-img-bx">
                    <label htmlFor="Aadharfront">Police verification </label>
                    {initialValues?.policeVerification ? (
                      <span
                        style={{ cursor: "pointer", display: "block" }}
                        onClick={() => {
                          downloadFile(
                            initialValues?.policeVerification,
                            "policeVerification"
                          );
                        }}
                      >
                        View
                      </span>
                    ) : (
                      <span style={{ color: "red", display: "block" }}>
                        Not Uploaded
                      </span>
                    )}
                    <div className="admin-login-input img-upld-btn">
                      <label htmlFor="policeVerification">Upload</label>
                      <input
                        type="file"
                        accept="image/*"
                        name="policeVerification"
                        id="policeVerification"
                        onChange={handleImageChange(
                          values,
                          "policeVerification"
                        )}
                        autoComplete="off"
                      />
                    </div>
                    {selectedImage?.policeVerification && (
                      <FaFileImage
                        style={{
                          width: "40px",
                          height: "40px",
                          marginTop: "20px",
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="french-det-grid">
                  <div className="admin-login-fild">
                    <label htmlFor="saftyTrainingDate">
                      Safty Training Date{" "}
                    </label>
                    <div className="admin-login-input">
                      <input
                        type="date"
                        name="saftyTrainingDate"
                        id="saftyTrainingDate"
                        value={DateTime.fromISO(values?.saftyTrainingDate, {
                          zone: "utc",
                        }).toFormat("yyyy-MM-dd")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="admin-login-fild">
                    <label htmlFor="healthcheckupdate">
                      Last Health Checkup Date{" "}
                    </label>
                    <div className="admin-login-input">
                      <input
                        type="date"
                        name="heathCheckupDate"
                        id="healthcheckupdate"
                        value={DateTime.fromISO(values?.heathCheckupDate, {
                          zone: "utc",
                        }).toFormat("yyyy-MM-dd")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild">
                    <label htmlFor="PAN">User Status </label>
                    <div className="admin-login-input">
                      <select
                        name="accountStatus"
                        value={values?.accountStatus}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="trainingsecurity"
                      >
                        <option value="inactive">Unverified</option>
                        <option value="active">Verified</option>
                        <option value="ban">Ban</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClickCloseEditForm}
                  className="close-popup-btn"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <p style={{ textAlign: "center", color: "red", lineHeight: 0 }}>
                  {otherErrors?.update}
                </p>
                <button className="submit-btn submit-btn5">Save Changes</button>
              </Form>
            );
          }}
        </Formik>
      </section>
    </>
  );
};

export default WasteColectEdit;
