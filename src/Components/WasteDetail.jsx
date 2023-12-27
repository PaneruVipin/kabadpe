import React, { useEffect, useState } from "react";
import WasteDetailsPasswd from "./WasteDetailsPasswd";
import WasteDetBank from "./WasteDetBank";
import DatePicker from "react-datepicker";
import CompltProfPopup from "./CompltProfPopup";
import { useDispatch, useSelector } from "react-redux";
import { collectorProfileImageAdd } from "../apis/worker/user";
import { userFetch } from "../features/user/userActions";
import { Form, Formik } from "formik";

const WasteDetail = () => {
  const [addInfo, setAddInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "./images/customImg/836.jpg"
  );
  const [selectedImageoOne, setSelectedImageOne] = useState(
    "./images/customImg/aadhar-img.png"
  );
  const [selectedImageTwo, setSelectedImageTwo] = useState(
    "./images/customImg/aadhar-img.png"
  );
  const [profChange, setProfChange] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const { userInfo } = useSelector((s) => s?.user);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeOne = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImageOne(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChangeTwo = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImageTwo(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpadateProfileImage = () => {
    if (profileImage)
      collectorProfileImageAdd(profileImage).then(() => {
        dispatch(userFetch());
      });
    setProfChange(false);
  };

  const handleSubmit = (data) => {
    console.log("data is submitting ", data);
  };
  const initialValues = {
    fullname: userInfo?.fullname,
    dob: userInfo?.dob,
    gender: userInfo?.gender,
    cast: userInfo?.cast,
    religion: userInfo?.religion,
    saftyTrainingDate: userInfo?.saftyTrainingDate,
    address: userInfo?.address,
    insurance: userInfo?.insurance,
    heathCheckupDate: userInfo?.heathCheckupDate,
    emergencyPersonName: userInfo?.emergencyPersonName,
    emergencyPhone: userInfo?.emergencyPhone,
    aadharFront: userInfo?.aadharFront,
    aadharBack: userInfo?.aadharBack,
    policeVerification: userInfo?.policeVerification,
  };
  return (
    <>
      <div
        className={
          profChange
            ? "user-prof-change-popup-box prof-chang-popupactive"
            : "user-prof-change-popup-box"
        }
      >
        <div className="user-prof-popup-bx">
          <div className="prof-chang-img">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>

          <div className="prof-input-file-bx">
            <label htmlFor="prof_input">Update profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="prof_input"
            />
          </div>
          <button
            onClick={handleUpadateProfileImage}
            className="prof-input-file-bx"
          >
            Save
          </button>
          <div
            onClick={() => setProfChange(false)}
            className="prof-popup-close-btn"
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>

      <section className="waste-details-comp waste-colectin-comp waste-appoint-ment-comp  ">
        <h3>Photo</h3>

        <div className="photo-content-box details-main-bx">
          <div className="photo-info-main-box">
            <div className="left-photo-info-box">
              <img src="./images/customImg/waste-profile-refrence.png" alt="" />
            </div>

            <div className="photo-det-bx">
              <p>चेहरा साफ़ दिखाई दे </p>
              <p>धूप का चश्मा, मास्क और कोई टोपी पहनी है तो वह हटा दें। </p>
              <p>
                कपड़े पहने हुए हों, हाथ पूरी तरह से खाली हो, कोई फ़िल्टर का
                इस्तेमाल ना करें, सिर्फ आप फ्रेम में दिखाई देने चाहिए।
              </p>

              <button
                onClick={() => setProfChange(true)}
                className="add-img-btn"
              >
                Add Photo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="waste-details-comp waste-colectin-comp waste-appoint-ment-comp">
        <h3>Details</h3>

        <div className="details-main-bx">
          <div className="det-table-bx ">
            <div className="det-grid-bx">
              <div className="det-user-bx">
                <h6>Name :</h6>
                <span>{userInfo?.fullname}</span>
              </div>

              <div className="det-user-bx">
                <h6>Date of Birth :</h6>
                <span>{userInfo?.dob}</span>
              </div>

              <div className="det-user-bx">
                <h6>Gender :</h6>
                <span>{userInfo?.gender}</span>
              </div>

              <div className="det-user-bx">
                <h6>Pincode :</h6>
                <span>{userInfo?.pincode}</span>
              </div>

              <div className="det-user-bx">
                <h6>Mobile Number :</h6>
                <span>{userInfo?.phoneNumber}</span>
              </div>

              <div className="det-user-bx">
                <h6>Address :</h6>
                <span>{userInfo?.address}</span>
              </div>

              <div className="det-user-bx">
                <h6>Aadhar Front:</h6>
                {userInfo?.aadharFront ? (
                  <img
                    src={userInfo?.aadharFront}
                    className="documt-img"
                    alt=""
                  />
                ) : null}
              </div>

              <div className="det-user-bx">
                <h6>Aadhar Back:</h6>
                {userInfo?.aadharBack ? (
                  <img
                    src={userInfo?.aadharBack}
                    className="documt-img"
                    alt=""
                  />
                ) : null}
              </div>

              <div className="det-user-bx">
                <h6>Insurance :</h6>
                <span>{userInfo?.insurance}</span>
              </div>

              <div className="det-user-bx">
                <h6>Police Verification :</h6>
                <span>{userInfo?.policeVerification ? "Verified ✅" : ""}</span>
              </div>
              <div className="det-user-bx">
                <h6>Last Health Checkup Date :</h6>
                <span>
                  {userInfo?.heathCheckupDate
                    ? userInfo?.heathCheckupDate + " 📅"
                    : ""}
                </span>
              </div>

              <div className="det-user-bx">
                <h6>Emergency Contact Person :</h6>
                <span>{userInfo?.emergencyPersonName}</span>
              </div>

              <div className="det-user-bx">
                <h6>Emergency Contact Number :</h6>
                <span>{userInfo?.emergencyPhone}</span>
              </div>
            </div>

            <button
              onClick={() => setAddInfo(!addInfo)}
              className="add-det-btn"
            >
              {/* <i class="fa-solid fa-plus"></i> */}
              Edit
            </button>

            <div
              className={
                addInfo
                  ? "add-det-info-form-bx adddetinfoactive"
                  : "add-det-info-form-bx"
              }
            >
              <div className="add-det-info-bx">
                <h6>Personal information</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sequi iste reiciendis nemo beatae fugiat, totam eaque
                  distinctio ut recusandae.
                </p>
              </div>
              <div className="add-det-info-form">
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                  // validationSchema={validationLoginAdmin}
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
                        <div className="det-grid det-grid3">
                          <div className="det-input-bx">
                            <label htmlFor="name">Full Name</label>
                            <input
                              type="text"
                              name="fullname"
                              id="name"
                              autoComplete="off"
                              //required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.fullname}
                            />
                            {touched?.fullname && errors?.fullname ? (
                              <div style={{ color: "red" }}>
                                {errors?.fullname}
                              </div>
                            ) : null}
                          </div>

                          <div className="det-input-bx">
                            <label htmlFor="age">Date of Birth</label>
                            <input
                              type="date"
                              name="dob"
                              id="name"
                              autoComplete="off"
                              //required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.dob}
                            />
                            {touched?.dob && errors?.dob ? (
                              <div style={{ color: "red" }}>{errors?.dob}</div>
                            ) : null}
                          </div>

                          <div className="det-input-bx">
                            <label htmlFor="gender">Gender</label>
                            <select
                              name="gender"
                              id="gender"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.gender}
                            >
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="custom">Other</option>
                            </select>
                            {touched?.gender && errors?.gender ? (
                              <div style={{ color: "red" }}>
                                {errors?.gender}
                              </div>
                            ) : null}
                          </div>

                          <div className="det-input-bx">
                            <label htmlFor="age">Insurance</label>
                            <input
                              type="text"
                              name="insurance"
                              id="insurance"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.insurance}
                              autoComplete="off"
                              //required
                            />
                            {touched?.insurance && errors?.insurance ? (
                              <div style={{ color: "red" }}>
                                {errors?.insurance}
                              </div>
                            ) : null}
                          </div>
                          <div className="det-input-bx">
                            <label htmlFor="age">Pincode</label>
                            <input
                              type="text"
                              name="pincode"
                              id="insurance"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.pincode}
                              autoComplete="off"
                              //required
                            />
                            {touched?.pincode && errors?.pincode ? (
                              <div style={{ color: "red" }}>
                                {errors?.pincode}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="det-input-bx">
                          <label htmlFor="address">Address</label>
                          <input
                            type="text"
                            name="address"
                            id="address"
                            autoComplete="off"
                            //required
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.address}
                          />
                          {touched?.fullname && errors?.address ? (
                            <div style={{ color: "red" }}>
                              {errors?.address}
                            </div>
                          ) : null}
                        </div>

                        <div className="det-grid det-grid5">
                          <div className="det-input-bx det-input-bx3">
                            <label htmlFor="aadharFront">Aadhar (Front) </label>
                            <div className="att-inpt-box">
                              <input
                                type="file"
                                name="aadharFront"
                                accept="image/*"
                                id="aadharFront"
                                autoComplete="off"
                                //required
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  values.aadharFront = file;
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (event) => {
                                      setSelectedImageOne(event.target.result);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                                onBlur={handleBlur}
                              />
                              {touched?.aadharFront && errors?.aadharFront ? (
                                <div style={{ color: "red" }}>
                                  {errors?.aadharFront}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          <div className="select-File">
                            {selectedImageoOne && (
                              <img
                                src={values?.aadharFront || selectedImageoOne}
                                alt=""
                              />
                            )}
                          </div>

                          <div className="det-input-bx det-input-bx3 ">
                            <label htmlFor="aadharBack">Aadhar (Back) </label>
                            <div className="att-inpt-box">
                              <input
                                type="file"
                                name="aadharBack"
                                accept="image/*"
                                id="aadharBack"
                                autoComplete="off"
                                //required
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  values.aadharBack = file;
                                  if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (event) => {
                                      setSelectedImageTwo(event.target.result);
                                    };
                                    reader.readAsDataURL(file);
                                  }
                                }}
                                onBlur={handleBlur}
                              />
                              {touched?.aadharBack && errors?.aadharBack ? (
                                <div style={{ color: "red" }}>
                                  {errors?.aadharBack}
                                </div>
                              ) : null}
                            </div>
                            <button className="att-inpt-box"></button>
                          </div>

                          <div className="select-File">
                            {selectedImageTwo && (
                              <img
                                src={values?.aadharBack || selectedImageTwo}
                                alt=""
                              />
                            )}
                          </div>
                        </div>

                        <div className="det-grid det-grid3">
                          <div className="det-input-bx">
                            <label htmlFor="chosedate">
                              Last Health Check-up
                            </label>
                            <input
                              type="date"
                              name="heathCheckupDate"
                              id="chosedate"
                              autoComplete="off"
                              //required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.heathCheckupDate}
                            />
                            {touched?.heathCheckupDate &&
                            errors?.heathCheckupDate ? (
                              <div style={{ color: "red" }}>
                                {errors?.heathCheckupDate}
                              </div>
                            ) : null}
                          </div>

                          <div className="det-input-bx">
                            <label htmlFor="bankdet">
                              Emergency Contact Person
                            </label>
                            <input
                              type="text"
                              name="emergencyPersonName"
                              id="Number"
                              autoComplete="off"
                              //required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.emergencyPersonName}
                            />
                            {touched?.emergencyPersonName &&
                            errors?.emergencyPersonName ? (
                              <div style={{ color: "red" }}>
                                {errors?.emergencyPersonName}
                              </div>
                            ) : null}
                          </div>

                          <div className="det-input-bx">
                            <label htmlFor="bankdet">
                              Emergency Contact Number
                            </label>
                            <input
                              type="text"
                              name="emergencyPhone"
                              id="Number"
                              autoComplete="off"
                              //required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.emergencyPhone}
                            />
                            {touched?.emergencyPhone &&
                            errors?.emergencyPhone ? (
                              <div style={{ color: "red" }}>
                                {errors?.emergencyPhone}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <button type="submit" className="det-save-btn">
                          Save
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WasteDetBank />

      <WasteDetailsPasswd />
    </>
  );
};

export default WasteDetail;
