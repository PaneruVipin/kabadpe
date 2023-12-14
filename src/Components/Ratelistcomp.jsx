import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/Ratelist.css";
import "../style/MyAccount.css";
import { Form, Formik } from "formik";
import {
  userCalculateKabadRate,
  userRateListFetch,
  userSchedulePickup,
} from "../apis/kbadpeUser/schedule";
import { validationSchedulePickup } from "../validators/kabadPeUser/schedule";
import { userLocationByQuery } from "../apis/location";
import { useQuery } from "@tanstack/react-query";
const Ratelistcomp = () => {
  const [listBox, setListBox] = useState(false);
  const [mainPrice, setmainPrice] = useState(false);
  const [apiErrors, setApiErrors] = useState({ shcedulPickup: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const initialSchedulePickupValues = {
    formatedAddress: "",
    appointmentContactNumber: "",
    appointmentPersonName: "",
    appointmentTimeSlot: "",
    appointmentDate: null,
    pincode: "",
  };
  const hideFunc = () => {
    setListBox(true);
  };

  const ShcedulPickuFunc = () => {
    setmainPrice(true);
  };
  const handlePickupSubmit = async (data) => {
    setApiErrors({
      ...apiErrors,
      shcedulPickup: "",
    });
    const res = await userSchedulePickup({
      ...data,
    });
    if (res.error) {
      setApiErrors({
        ...apiErrors,
        shcedulPickup: res.message,
      });
      return;
    }
    setApiErrors({
      ...apiErrors,
      shcedulPickup: "",
    });
  };

  const { isPending, data: kabadItems } = useQuery({
    queryKey: ["rateList"],
    queryFn: () => userRateListFetch(),
  });
  const calculateRate = async (data) => {
    const totalPrice = await userCalculateKabadRate(data);
    if (!totalPrice.error) setCalculatedPrice(totalPrice);
    hideFunc();
  };
  return (
    <>
      <section className="user-prof-comp user-prof-comp5">
        <span className="u-pf-one"></span>
        <span className="u-pf-two">
          <span className="u-pf-three"></span>
        </span>
        <span className="u-pf-four"></span>

        <h2>Rate List</h2>
      </section>

      <section className="ratelist-comp">
        <div className="ratelist-container">
          <div className="ratelist-table-grid">
            <div className="ratelist-table-bx">
              <table>
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Waste Products</th>
                    <th>Rate/KG</th>
                  </tr>
                </thead>
                <tbody>
                  {!kabadItems?.error
                    ? kabadItems
                        ?.slice(0, Math.floor(kabadItems.length / 2))
                        ?.map(
                          ({ id, initialPrice, categoryName, image }, i) => (
                            <tr key={id}>
                              <td>{i + 1}</td>
                              <td>
                                <div className="waste-prod-bx">
                                  <div className="waste-prod-img">
                                    <img src={image} alt="" />
                                  </div>
                                  <h6>{categoryName}</h6>
                                </div>
                              </td>

                              <td>₹{initialPrice?.toFixed(2)} </td>
                            </tr>
                          )
                        )
                    : null}
                </tbody>
              </table>
            </div>
            <div className="ratelist-table-bx">
              <table>
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Waste Products</th>
                    <th>Rate/KG</th>
                  </tr>
                </thead>
                <tbody>
                  {!kabadItems?.error
                    ? kabadItems
                        ?.slice(Math.floor(kabadItems.length / 2))
                        ?.map(
                          ({ id, initialPrice, categoryName, image }, i) => (
                            <tr key={id}>
                              <td>
                                {i + 1 + Math.floor(kabadItems.length / 2)}
                              </td>
                              <td>
                                <div className="waste-prod-bx">
                                  <div className="waste-prod-img">
                                    <img src={image} alt="" />
                                  </div>
                                  <h6>{categoryName}</h6>
                                </div>
                              </td>

                              <td>₹{initialPrice?.toFixed(2)} </td>
                            </tr>
                          )
                        )
                    : null}
                </tbody>
              </table>
            </div>

            <div
              className={
                mainPrice === true
                  ? "main-price-third-bx mainpriceactive"
                  : "main-price-third-bx"
              }
            >
              <div
                className={
                  listBox === true
                    ? "prodactive price-third-box"
                    : " price-third-box"
                }
              >
                <div className="prod-list-main">
                  <span>E-WASTE RECYCLING</span>
                  <h4>Calculator</h4>
                  <Formik onSubmit={calculateRate} initialValues={{}}>
                    {({
                      handleBlur,
                      handleChange,
                      values,
                      errors,
                      touched,
                      ...rest
                    }) => (
                      <Form>
                        <div className="prod-list-bx">
                          {!kabadItems?.error
                            ? kabadItems?.map(
                                ({ id, initialPrice, categoryName }) => (
                                  <div key={id} className="p-bx">
                                    <div className="left-prod-i">
                                      <img
                                        src="./images/customImg/magazine.png"
                                        alt=""
                                      />
                                      <h5>{categoryName}</h5>
                                    </div>

                                    <input
                                      type="text"
                                      name={id}
                                      id="value"
                                      placeholder=".../kg"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values?.[id] || ""}
                                    />
                                  </div>
                                )
                              )
                            : null}
                        </div>
                        <button type="submit" className="prod-submit-btn">
                          Calculate Benefits !
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>

                <div className="schedule-pickup-bx">
                  <h5>Total Valuation of your waste</h5>

                  <h3>{calculatedPrice.toFixed(2)}/</h3>

                  <button
                    disabled={!calculatedPrice}
                    onClick={ShcedulPickuFunc}
                    className="schedule-pickup-btn"
                  >
                    Schedule Pickup
                  </button>
                </div>

                <div className="schedule-pickup-form-bx">
                  <h5>Schedual Pickup</h5>
                  <Formik
                    initialValues={initialSchedulePickupValues}
                    onSubmit={handlePickupSubmit}
                    validationSchema={validationSchedulePickup}
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
                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt bor-inpt">
                              <input
                                type="text"
                                name="appointmentPersonName"
                                id="name"
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentPersonName}
                              />
                            </div>

                            {touched.appointmentPersonName &&
                            errors.appointmentPersonName ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentPersonName}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt bor-inpt">
                              <input
                                type="text"
                                name="appointmentContactNumber"
                                id="appointmentContactNumber"
                                placeholder="Phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentContactNumber}
                              />
                            </div>
                            {touched.appointmentContactNumber &&
                            errors.appointmentContactNumber ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentContactNumber}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="date-bx2 bor-inpt">
                              <i className="fa-solid fa-calendar-days calendar"></i>
                              <Datepicker
                                name="appointmentDate"
                                id="appointmentDate"
                                className="datepicker"
                                selected={values.appointmentDate}
                                onChange={(date) => {
                                  values.appointmentDate = date;
                                  document
                                    .getElementById("appointmentContactNumber")
                                    .focus();
                                }}
                                onBlur={handleBlur}
                              />
                            </div>
                            {touched.appointmentDate &&
                            errors.appointmentDate ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentDate}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt sel-bx bor-inpt">
                              <i className="fa-solid fa-angle-down arrow-dwn"></i>
                              <select
                                name="appointmentTimeSlot"
                                id="appointmentTimeSlot"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentTimeSlot}
                              >
                                <option disabled value="" hidden>
                                  Choose Time Slot
                                </option>
                                <option value="10:00-11:00">
                                  10.00 to 11.00
                                </option>
                                <option value="11:00-12:00">
                                  11.00 to 12.00
                                </option>
                                <option value="13:00-14:00">
                                  1.00 to 2.00
                                </option>
                                <option value="14:00-15:00">
                                  2.00 to 3.00
                                </option>
                                <option value="16:00-17:00">
                                  4.00 to 5.00
                                </option>
                                <option value="17:00-18:00">
                                  5.00 to 6.00
                                </option>
                              </select>
                            </div>
                            {touched.appointmentTimeSlot &&
                            errors.appointmentTimeSlot ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentTimeSlot}
                              </div>
                            ) : null}
                          </div>
                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt bor-inpt">
                              <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                placeholder="pincode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.pincode}
                              />
                            </div>
                            {touched.pincode && errors.pincode ? (
                              <div style={{ color: "red" }}>
                                {errors.pincode}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt bor-inpt">
                              <input
                                type="text"
                                name="formatedAddress"
                                id="address"
                                placeholder="Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentAddress}
                              />
                            </div>
                            {touched.formatedAddress &&
                            errors.formatedAddress ? (
                              <div style={{ color: "red" }}>
                                {errors.formatedAddress}
                              </div>
                            ) : null}
                          </div>

                          <button type="submit" className="pickup-submit-btn">
                            Submit
                          </button>
                          {apiErrors ? (
                            <div style={{ color: "red" }}>
                              {apiErrors.shcedulPickup}
                            </div>
                          ) : null}
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ratelistcomp;
