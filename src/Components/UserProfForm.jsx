import React, { useState } from "react";
import "../style/Profile.css";
import UseProfRightbx from "./UseProfRightbx";
import PrfPasswrd from "./PrfPasswrd";
import BankCard from "./BankCard";
import UserBankCard from "./UserBankCard";
import { useQuery } from "@tanstack/react-query";
import {
  userAddressDelete,
  userAddressesAdd,
  userAddressesFetch,
  userAddressesUpdate,
} from "../apis/user";
import { Form, Formik } from "formik";
import { validationAddressForm } from "../validators/user/addressFormValidator";
import { AddressForm } from "../HomeComponent/AddAddressList";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
const UserProfForm = ({ onProfileNav, onClickProfileNavHideShow }) => {
  const initailAddress = {
    street: "",
    city: "",
    state: "",
    zipCode: "",
    landmark: "",
    locationType: "",
  };
  const { data: addresses, refetch } = useQuery({
    queryKey: ["addresses"],
    queryFn: () => userAddressesFetch(),
  });
  const [fromTypeEdit, setFormTypeEdit] = useState(false);
  const [notBox, setNotBox] = useState(false);

  const [initialValuesAddresss, setInitialValuesAddresss] =
    useState(initailAddress);
  const [inputArr, setInputArr] = useState([]);
  const [profForm, setProfForm] = useState(false);

  const editDataBtn = (data) => {
    toggleAddressForm();
    setInitialValuesAddresss(data);
    setFormTypeEdit(true);
  };

  const deleteDataBx = async (id) => {
    await userAddressDelete(id);
    refetch();
  };

  const handleAddUserAddress = async (data, { resetForm }) => {
    await userAddressesAdd(data);
    refetch();
    resetForm();
  };

  const handleUpdateUserAddress = async (data, { resetForm }) => {
    await userAddressesUpdate(data);
    refetch();
    resetForm();
    toggleAddressForm();
  };
  const toggleAddressForm = () => {
    setInitialValuesAddresss(initailAddress);
    setFormTypeEdit(false);
    setProfForm(!profForm);
  };
  return (
    <>
      <section className="user-prof-grid-comp user-prof-grid-comp21">
        <div className="not-fic-flex-bx">
          <button
            onClick={onClickProfileNavHideShow}
            className="w-menu-bar-btn profile-nav-bar-btn"
          >
            {onProfileNav ? (
              <HiMenuAlt3 className="menu-icon" />
            ) : (
              <FaArrowLeftLong className="menu-icon arrow-icon" />
            )}
          </button>

          <div className="notif-main-box">
            <div
              onClick={() => setNotBox(!notBox)}
              className="bell-icon bell-icon2"
            >
              <i className="fa-regular fa-bell"></i>
            </div>

            <div className={notBox ? "notif-box notactive" : "notif-box"}>
              <div className="not-user-box">
                <div className="left-not-box">
                  <img src="/images/customImg/team-2.jpg" alt="" />
                </div>

                <div className="right-not-box">
                  <h6>Andrew Garfield</h6>
                  <span> 29 July 2023 - 02:26 pM </span>
                </div>
              </div>

              <div className="not-user-box">
                <div className="left-not-box">
                  <img src="/images/customImg/team-2.jpg" alt="" />
                </div>

                <div className="right-not-box">
                  <h6>Andrew Garfield</h6>
                  <span> 29 July 2023 - 02:26 pM </span>
                </div>
              </div>

              <div className="not-user-box">
                <div className="left-not-box left-not-box2">
                  <h6>KG</h6>
                </div>

                <div className="right-not-box">
                  <h6>Andrew Garfield</h6>
                  <span> 29 July 2023 - 02:26 pM </span>
                </div>
              </div>

              <div className="not-user-box">
                <div className="left-not-box">
                  <img src="/images/customImg/team-3.jpg" alt="" />
                </div>

                <div className="right-not-box">
                  <h6>Andrew Garfield</h6>
                  <span> 29 July 2023 - 02:26 pM </span>
                </div>
              </div>

              <div className="not-user-box">
                <div className="left-not-box left-not-box2 left-not-box3">
                  <i className="fa-solid fa-house"></i>
                </div>

                <div className="right-not-box">
                  <h6>Andrew Garfield</h6>
                  <span> 29 July 2023 - 02:26 pM </span>
                </div>
              </div>

              <button className="sell-all-not-btn">
                See all notifications
              </button>
            </div>
          </div>
        </div>

        <section className="User-prof-Form-Main-bx User-prof-Form-Main-bx-rem-spce">
          <div className="u-p-f-cont">
            <div className="usr-prof-form-bx">
              <div className="user-prof-form-grid">
                {!addresses?.error
                  ? addresses?.map(
                      ({
                        street,
                        city,
                        zipCode,
                        state,
                        landmark,
                        id,
                        locationType,
                        aria,
                        subAria,
                      }) => (
                        <div key={id} className="user-prof-form-bx">
                          <div className="u-p-f-i">
                            <i className="fa-solid fa-house"></i>
                          </div>
                          <div className="u-p-f-det">
                            <h6>Address</h6>
                            <p>
                              {street}, {city}, {state}, {zipCode}{" "}
                              <span>LandMark </span>
                              {landmark} , 9012455676
                            </p>
                          </div>
                          <div
                            onClick={() =>
                              editDataBtn({
                                street,
                                city,
                                zipCode,
                                state,
                                landmark,
                                id,
                                locationType,
                                aria,
                                subAria,
                              })
                            }
                            className="prof-data-edit"
                          >
                            <i className="fa-solid fa-pen-to-square"></i>
                          </div>
                          <div
                            onClick={() => deleteDataBx(id)}
                            className="prof-data-close"
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </div>
                        </div>
                      )
                    )
                  : null}

                <div className="user-prof-form-bx user-prof-form-bx3">
                  <h6>Add User Info</h6>

                  <button
                    onClick={toggleAddressForm}
                    className="add-user-info-btn"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>

            {profForm ? (
              <div
                className={
                  profForm ? "user-prof-form profformactive" : "user-prof-form"
                }
              >
                <h5>My Details</h5>
                {/* <Formik
                  initialValues={initialValuesAddresss}
                  onSubmit={
                    fromTypeEdit
                      ? handleUpdateUserAddress
                      : handleAddUserAddress
                  }
                  validationSchema={validationAddressForm}
                >
                  {({
                    handleBlur,
                    handleChange,
                    values,
                    errors,
                    touched,
                    ...rest
                  }) => (
                    <Form>
                      <div className="usr-prof-inpt-bx">
                        <input
                          type="text"
                          name="street"
                          id="address"
                          placeholder="Address"
                          autoComplete="off"
                          required
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.street}
                        />
                        {touched.street && errors.street ? (
                          <div style={{ color: "red" }}>{errors.street}</div>
                        ) : null}
                      </div>

                      <div className="usr-prof-form-grid-bx">
                        <div className="usr-prof-inpt-bx">
                          <input
                            type="text"
                            name="city"
                            id="city"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.city}
                            placeholder="City"
                            autoComplete="off"
                            required
                          />
                          {touched.city && errors.city ? (
                            <div style={{ color: "red" }}>{errors.city}</div>
                          ) : null}
                        </div>

                        <div className="usr-prof-inpt-bx">
                          <input
                            type="text"
                            name="state"
                            id="state"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.state}
                            placeholder="State"
                            autoComplete="off"
                            required
                          />
                          {touched.state && errors.state ? (
                            <div style={{ color: "red" }}>{errors.state}</div>
                          ) : null}
                        </div>

                        <div className="usr-prof-inpt-bx">
                          <input
                            type="text"
                            name="zipCode"
                            id="pin"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.zipCode}
                            placeholder="Pin"
                            autoComplete="off"
                            required
                          />
                          {touched.zipCode && errors.zipCode ? (
                            <div style={{ color: "red" }}>{errors.zipCode}</div>
                          ) : null}
                        </div>
                      </div>

                      <div className="usr-prof-form-grid-bx2">
                        <div className="usr-prof-inpt-bx">
                          <input
                            type="text"
                            name="landmark"
                            id="landmark"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.landmark}
                            placeholder="Land-mark"
                            autoComplete="off"
                          />
                          {touched.landmark && errors.landmark ? (
                            <div style={{ color: "red" }}>
                              {errors.landmark}
                            </div>
                          ) : null}
                        </div>

                        <div className="usr-prof-inpt-bx">
                          <select
                            name="locationType"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.locationType}
                            id="locationtype"
                          >
                            <option value="" disabled hidden>
                              Choose
                            </option>

                            <option value="office">Office</option>
                            <option value="home">Home</option>
                          </select>
                          {touched.locationType && errors.locationType ? (
                            <div style={{ color: "red" }}>
                              {errors.locationType}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <button type="submit" className="u-prf-submit-btn">
                        Save
                      </button>
                    </Form>
                  )}
                </Formik> */}
                <AddressForm
                  setAddrsForm={setProfForm}
                  initialFormValues={initialValuesAddresss}
                  isEditForm={fromTypeEdit}
                  refetch={refetch}
                />
                <div
                  onClick={() => setProfForm(false)}
                  className="close-my-det-bx"
                >
                  <i className="fa-solid fa-xmark"></i>
                </div>
              </div>
            ) : null}
          </div>
          <PrfPasswrd />
          <BankCard />
          <UserBankCard />
        </section>
        <UseProfRightbx />
      </section>
    </>
  );
};

export default UserProfForm;
