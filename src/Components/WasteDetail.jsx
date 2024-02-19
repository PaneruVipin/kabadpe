import React, { useEffect, useState } from "react";
import WasteDetailsPasswd from "./WasteDetailsPasswd";
import WasteDetBank from "./WasteDetBank";
import DatePicker from "react-datepicker";
import CompltProfPopup from "./CompltProfPopup";
import { calculateAge } from "../lib/date";
import { useDispatch, useSelector } from "react-redux";
import {
  collectorProfileImageAdd,
  updateWorkerProfile,
} from "../apis/worker/user";
import { userFetch } from "../features/user/userActions";
import { Form, Formik } from "formik";
import { DateTime } from "luxon";
import { date } from "yup";
import { workers } from "../lib/worker";
import { downloadFile } from "../lib/file";
import { FaFileImage } from "react-icons/fa";

const WasteDetail = () => {
  const [addInfo, setAddInfo] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "/images/customImg/836.jpg"
  );
  const [selectedImageoOne, setSelectedImageOne] = useState("");
  const [selectedImageTwo, setSelectedImageTwo] = useState("");
  const [policeVerification, setPoliceVerification] = useState("");
  const [saftyTraining, setSaftyTraining] = useState("");
  const [profChange, setProfChange] = useState(false);
  const [profileImage, setProfileImage] = useState();
  const [otherErrors, setOtherErrors] = useState({});
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

  const handleUpadateProfileImage = () => {
    if (profileImage)
      collectorProfileImageAdd(profileImage).then(() => {
        dispatch(userFetch());
      });
    setProfChange(false);
  };

  function isTimestampString(str) {
    // Check if the string can be converted to a valid date
    return !isNaN(Date.parse(str));
  }
  const clearImageState = () => {
    setSelectedImageTwo("");
    setSelectedImageOne("");
    setSaftyTraining("");
    setPoliceVerification("");
  };
  const handleSubmit = async (data) => {
    setOtherErrors({});
    const newData = { ...data };
    if (!(newData?.aadharFront instanceof File)) {
      delete newData?.aadharFront;
    }
    if (!(newData?.aadharBack instanceof File)) {
      delete newData?.aadharBack;
    }
    if (!(newData?.saftyTraining instanceof File)) {
      delete newData?.saftyTraining;
    }
    if (!(newData?.policeVerification instanceof File)) {
      delete newData?.policeVerification;
    }
    const res = await updateWorkerProfile(newData);
    if (!res?.error) {
      dispatch(userFetch());
      setAddInfo(!addInfo);
      clearImageState();
      return;
    }
    setOtherErrors({ edit: res?.message });
  };
  const initialValues = {
    fullname: userInfo?.fullname,
    dob: userInfo?.dob,
    gender: userInfo?.gender || "male",
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
    saftyTraining: userInfo?.saftyTraining,
  };
  useEffect(() => {
    if (userInfo?.profileImage) setSelectedImage(userInfo?.profileImage);
  }, [userInfo]);
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
              <img
                src={"/images/customImg/waste-profile-refrence.png"}
                alt=""
              />
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
                <h6>Mobile Number :</h6>
                <span>{userInfo?.phoneNumber}</span>
              </div>
              <div className="det-user-bx">
                <h6>Date of Birth :</h6>
                {userInfo?.dob ? (
                  <>
                    <span>
                      {DateTime.fromISO(userInfo?.dob).toFormat("dd LLL yyyy")}
                    </span>
                    <p>Age: {calculateAge(userInfo?.dob)}</p>
                  </>
                ) : null}
              </div>
              <div className="det-user-bx">
                <h6>Gender :</h6>
                <span>{userInfo?.gender}</span>
              </div>
              <div className="det-user-bx">
                <h6>Worker:</h6>
                <span>
                  {workers.find((w) => w.value == userInfo?.workerRole)?.label}
                </span>
              </div>
              <div className="det-user-bx">
                <h6>Area :</h6>
                <span>{userInfo?.ariaName}</span>
              </div>
              <div className="det-user-bx">
                <h6>Subarea :</h6>
                <span>{userInfo?.subAriaName}</span>
              </div>
              <div className="det-user-bx">
                <h6>Pincode :</h6>
                <span>{userInfo?.pincode}</span>
              </div>

              <div className="det-user-bx">
                <h6>Aadhar Front:</h6>
                {userInfo?.aadharFront ? (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      downloadFile(userInfo?.aadharFront, "aadharFront");
                    }}
                  >
                    View
                  </span>
                ) : null}
              </div>

              <div className="det-user-bx">
                <h6>Aadhar Back:</h6>
                {userInfo?.aadharBack ? (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      downloadFile(userInfo?.aadharBack, "aadharBack");
                    }}
                  >
                    View
                  </span>
                ) : null}
              </div>
              <div className="det-user-bx">
                <h6>Safty Training:</h6>
                {userInfo?.saftyTraining ? (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      downloadFile(userInfo?.saftyTraining, "saftyTraining");
                    }}
                  >
                    View
                  </span>
                ) : null}
              </div>

              <div className="det-user-bx">
                <h6>Police Verification :</h6>
                <span>{userInfo?.policeVerification ? "Verified ✅" : ""}</span>
                {userInfo?.policeVerification ? (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      downloadFile(userInfo?.policeVerification, "aadharFront");
                    }}
                  >
                    View
                  </span>
                ) : null}
              </div>
              <div className="det-user-bx">
                <h6>Safty Training Date :</h6>
                <span>
                  {userInfo?.saftyTrainingDate
                    ? DateTime.fromISO(userInfo?.saftyTrainingDate).toFormat(
                        "dd LLL yyyy"
                      ) + " 📅"
                    : ""}
                </span>
              </div>
              <div className="det-user-bx">
                <h6>Last Health Checkup Date :</h6>
                <span>
                  {userInfo?.heathCheckupDate
                    ? DateTime.fromISO(userInfo?.heathCheckupDate).toFormat(
                        "dd LLL yyyy"
                      ) + " 📅"
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

              <div className="det-user-bx">
                <h6>Insurance :</h6>
                <span>{userInfo?.insurance}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setAddInfo(!addInfo);
                clearImageState();
              }}
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
                <h6>Personal information </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sequi iste reiciendis nemo beatae fugiat, totam eaque
                  distinctio ut recusandae.
                </p>
              </div>
              <div className="add-det-info-form">
                {userInfo ? (
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={
                                  initialValues.dob
                                    ? DateTime.fromISO(values?.dob).toFormat(
                                        "yyyy-LL-dd"
                                      )
                                    : values?.dob
                                }
                              />
                              {touched?.dob && errors?.dob ? (
                                <div style={{ color: "red" }}>
                                  {errors?.dob}
                                </div>
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
                              <label htmlFor="insurance">Insurance</label>
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
                            {/* <div className="det-input-bx">
                              <label htmlFor="pincode">Pincode</label>
                              <input
                                type="text"
                                name="pincode"
                                id="pincode"
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
                            </div> */}
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
                              <label htmlFor="aadharFront">
                                Aadhar (Front){" "}
                              </label>
                              <div className="att-inpt-box">
                                <input
                                  type="file"
                                  name="aadharFront"
                                  accept="image/*,.pdf"
                                  id="aadharFront"
                                  autoComplete="off"
                                  //required
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    values.aadharFront = file;
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onload = (event) => {
                                        setSelectedImageOne(
                                          event.target.result
                                        );
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
                                <FaFileImage
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    marginBottom: "-80px",
                                  }}
                                />
                              )}
                            </div>

                            <div className="det-input-bx det-input-bx3 ">
                              <label htmlFor="aadharBack">Aadhar (Back) </label>
                              <div className="att-inpt-box">
                                <input
                                  type="file"
                                  name="aadharBack"
                                  accept="image/*,.pdf"
                                  id="aadharBack"
                                  autoComplete="off"
                                  //required
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    values.aadharBack = file;
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onload = (event) => {
                                        setSelectedImageTwo(
                                          event.target.result
                                        );
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
                                <FaFileImage
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    marginBottom: "-80px",
                                  }}
                                />
                              )}
                            </div>
                          </div>

                          <div className="det-grid det-grid5">
                            <div className="det-input-bx det-input-bx3">
                              <label htmlFor="saftyTraining">
                                Safety and skill training{" "}
                              </label>
                              <div className="att-inpt-box">
                                <input
                                  type="file"
                                  name="saftyTraining"
                                  accept="image/*,.pdf"
                                  id="saftyTraining"
                                  autoComplete="off"
                                  //required
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    values.saftyTraining = file;
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onload = (event) => {
                                        setSaftyTraining(event.target.result);
                                      };
                                      reader.readAsDataURL(file);
                                    }
                                  }}
                                  onBlur={handleBlur}
                                />
                                {touched?.saftyTraining &&
                                errors?.saftyTraining ? (
                                  <div style={{ color: "red" }}>
                                    {errors?.saftyTraining}
                                  </div>
                                ) : null}
                              </div>
                            </div>

                            <div className="select-File">
                              {saftyTraining && (
                                <FaFileImage
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    marginBottom: "-80px",
                                  }}
                                />
                              )}
                            </div>

                            <div className="det-input-bx det-input-bx3 ">
                              <label htmlFor="policeVerification">
                                Police verification{" "}
                              </label>
                              <div className="att-inpt-box">
                                <input
                                  type="file"
                                  name="policeVerification"
                                  accept="image/*,.pdf"
                                  id="policeVerification"
                                  autoComplete="off"
                                  //required
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    values.policeVerification = file;
                                    if (file) {
                                      const reader = new FileReader();
                                      reader.onload = (event) => {
                                        setPoliceVerification(
                                          event.target.result
                                        );
                                      };
                                      reader.readAsDataURL(file);
                                    }
                                  }}
                                  onBlur={handleBlur}
                                />
                                {touched?.policeVerification &&
                                errors?.policeVerification ? (
                                  <div style={{ color: "red" }}>
                                    {errors?.policeVerification}
                                  </div>
                                ) : null}
                              </div>
                              <button className="att-inpt-box"></button>
                            </div>

                            <div className="select-File">
                              {policeVerification && (
                                <FaFileImage
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    marginBottom: "-80px",
                                  }}
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
                                value={
                                  initialValues.heathCheckupDate
                                    ? DateTime.fromISO(
                                        values?.heathCheckupDate
                                      ).toFormat("yyyy-LL-dd")
                                    : values?.heathCheckupDate
                                }
                              />
                              {touched?.heathCheckupDate &&
                              errors?.heathCheckupDate ? (
                                <div style={{ color: "red" }}>
                                  {errors?.heathCheckupDate}
                                </div>
                              ) : null}
                            </div>
                            <div className="det-input-bx">
                              <label htmlFor="chosedate">
                                Safty Training Date
                              </label>
                              <input
                                type="date"
                                name="saftyTrainingDate"
                                id="chosedate"
                                autoComplete="off"
                                //required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={
                                  initialValues.saftyTrainingDate
                                    ? DateTime.fromISO(
                                        values?.saftyTrainingDate
                                      ).toFormat("yyyy-LL-dd")
                                    : values?.saftyTrainingDate
                                }
                              />
                              {touched?.saftyTrainingDate &&
                              errors?.saftyTrainingDate ? (
                                <div style={{ color: "red" }}>
                                  {errors?.saftyTrainingDate}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          <button type="submit" className="det-save-btn">
                            Save
                          </button>
                          {otherErrors?.edit ? (
                            <div style={{ color: "red" }}>
                              {otherErrors?.edit}
                            </div>
                          ) : null}
                        </Form>
                      );
                    }}
                  </Formik>
                ) : null}
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
