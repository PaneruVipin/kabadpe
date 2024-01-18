import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import timeslotdata from "./timeslotData";
import AddAddressList from "./AddAddressList";
import ServApntData from "./ServApnt";
import { Form, Formik } from "formik";
import { validationSchedulePickup } from "../validators/kabadPeUser/schedule";
import { useSelector } from "react-redux";

const Appointment = () => {
  const { success, userInfo, loading } = useSelector((s) => s.user);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState(timeslotdata);
  const [addAddress, setAddAddress] = useState(false);
  const [itemPrice, setItemPrice] = useState(null);
  const [apntData, setApntData] = useState(ServApntData);
  const [bookApnt, setBookApnt] = useState(false);
  const [compName, setCompName] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [initialFormValues, setInitialFormValues] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(true);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBookNow = () => {
    setShowCalendar(false);
  };

  const handlebutton = (getvalue) => {
    setItemPrice(getvalue === itemPrice ? null : getvalue);
  };

  const handleCompName = (valueName) => {
    setCompName(valueName);
  };

  const handleSubmit = (data) => {
    console.log("data is the,, ", data);
  };
  useEffect(() => {
    setInitialFormValues({});
    if (userInfo) {
      setInitialFormValues((prev) => ({
        ...prev,
        appointmentContactNumber: userInfo?.phoneNumber,
        appointmentPersonName: userInfo?.fullname,
      }));
    }
  }, [userInfo]);
  return (
    <>
      <section className="schedule-apnt-comp">
        <div className="comon-container-2 apnt-container">
          <div className="apnt-heading">
            <p>Book Slots</p>
            <h3>Schedual Appointment</h3>
          </div>

          <div className="apnt-grid-bx">
            <div className="left-shdule-apnt-form-bx">
              {initialFormValues ? (
                <Formik
                  initialValues={initialFormValues}
                  onSubmit={handleSubmit}
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
                      <Form className="apnt-slot-form-bx">
                        <div className="form-grid">
                          <div className="apnt-inpt-bx">
                            <input
                              type="text"
                              name="appointmentPersonName"
                              id="name"
                              placeholder="Your Name"
                              autoComplete="off"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.appointmentPersonName}
                            />
                            {errors?.appointmentPersonName &&
                            touched?.appointmentPersonName ? (
                              <div style={{ color: "red" }}>
                                {errors?.appointmentPersonName}
                              </div>
                            ) : null}
                          </div>

                          <div className="apnt-inpt-bx">
                            <input
                              type="number"
                              name="appointmentContactNumber"
                              id="phone"
                              placeholder="Mobile No."
                              autoComplete="off"
                              required
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.appointmentContactNumber}
                            />
                            {errors?.appointmentContactNumber &&
                            touched?.appointmentContactNumber ? (
                              <div style={{ color: "red" }}>
                                {errors?.appointmentContactNumber}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="add-address-main-bx">
                          <button
                            type="button"
                            onClick={() => setAddAddress(true)}
                            className="apnt-form-submit-btn add-adres-btn"
                          >
                            Add Address
                            <i class="fa-solid fa-location-dot"></i>
                          </button>

                          <div className="default-add-bx apnt-inpt-bx apnt-inpt-bx-text">
                            {selectedAddress?.street ? (
                              <p>{`${selectedAddress?.street} ${selectedAddress?.subAria} ${selectedAddress?.aria} ${selectedAddress?.city} ${selectedAddress?.zipCode}`}</p>
                            ) : (
                              <p></p>
                            )}
                          </div>
                        </div>

                        <div className="form-grid form-grid3">
                          <div className="apnt-inpt-bx apnt-inpt-bx-s">
                            <select
                              name="serviceType"
                              id="service"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.serviceType}
                            >
                              <option value="" hidden>
                                Select Your Service
                              </option>
                              <option value="kabadi">Waste Collector</option>
                              <option value="cleaner">Cleaner</option>
                              <option value="gardner">Gardner</option>
                              <option value="swiper">Swiper</option>
                            </select>
                            {errors?.serviceType && touched?.serviceType ? (
                              <div style={{ color: "red" }}>
                                {errors?.serviceType}
                              </div>
                            ) : null}
                          </div>

                          <div className="apnt-inpt-bx apnt-inpt-bx-s">
                            <select
                              name="estimateWeight"
                              id="service"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.estimateWeight}
                            >
                              <option value="" hidden>
                                Choose Weight
                              </option>
                              <option value="unweighed">Don't Know</option>
                              <option value="lightweight">
                                Less than 200 Kg
                              </option>
                              <option value="heavyweight">
                                More than 200 Kg
                              </option>
                            </select>
                            {errors?.estimateWeight &&
                            touched?.estimateWeight ? (
                              <div style={{ color: "red" }}>
                                {errors?.estimateWeight}
                              </div>
                            ) : null}
                          </div>

                          <div className="apnt-inpt-bx apnt-inpt-bx-s">
                            <select
                              name="frequency"
                              id="service"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.frequency}
                            >
                              <option value="" hidden>
                                Select Frequency
                              </option>
                              <option value="once">Once</option>
                              <option value="weekly">Weekly</option>
                              <option value="monthly">Monthly</option>
                            </select>
                            {errors?.frequency && touched?.frequency ? (
                              <div style={{ color: "red" }}>
                                {errors?.frequency}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="form-grid ">
                          <div
                            className="apnt-inpt-bx apnt-inpt-bx2"
                            onClick={() => setShowCalendar(true)}
                          >
                            <div>
                              {" "}
                              {selectedDate && selectedTime ? (
                                <div>
                                  {" "}
                                  <span>{compName}</span>{" "}
                                  <span>
                                    {" "}
                                    {selectedDate.toDateString()} ,{" "}
                                    {selectedTime}{" "}
                                  </span>{" "}
                                </div>
                              ) : (
                                <span> Select Your Date and Time </span>
                              )}{" "}
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="apnt-form-submit-btn"
                          >
                            Submit Request
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              ) : null}
            </div>

            <div className="main-video-bx">
              <div className="right-shdule-img-bx">
                <video controls autoplay preload="auto" type="video/mp4">
                  <source src="/images/customImg/video-file.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {addAddress ? (
        <AddAddressList
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          onclickClose={() => setAddAddress(false)}
        />
      ) : null}

      {showCalendar && (
        <div
          className="date-time-popup-bx"
          onClick={() => setShowCalendar(false)}
        >
          <div
            className="date-time-main-bx"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="calendar-popup">
              <Calendar onChange={handleDateChange} value={selectedDate} />
            </div>

            {selectedDate && (
              <div className="time-slot-list">
                <h3>
                  Available Companies{" "}
                  <span> {selectedDate.toDateString()} </span>
                </h3>
                <div className="avalbe-cmpnies-main-bx">
                  {ServApntData.map((curelem, id) => {
                    return (
                      <>
                        <div key={id} className="avalbe-cmpnies-bx">
                          <div className="avalbe-cmpnies-flex">
                            <div className="left-cmpnies-bx">
                              <div className="cmpnies-logo">
                                <img src={curelem.img} alt="" />
                              </div>

                              <div className="cmpnies-info">
                                <h6> {curelem.name} </h6>

                                <div className="waste-prodts-flex">
                                  <div className="w-prodts-bx">
                                    <h6> {curelem.wasteProdtext} </h6>
                                    <span>{curelem.wasteProd}</span>
                                  </div>

                                  <div className="w-prodts-bx">
                                    <h6>{curelem.wasteProdtexttwo}</h6>
                                    <span>{curelem.wasteProdtwo}</span>
                                  </div>

                                  <div className="w-prodts-bx">
                                    <h6>{curelem.wasteProdtextthree}</h6>
                                    <span> {curelem.wasteProdthree} </span>
                                  </div>
                                </div>

                                <div className="rating-flex-bx">
                                  <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                  </div>

                                  <span> More products</span>

                                  <div
                                    onClick={() => handlebutton(curelem.id)}
                                    className={
                                      itemPrice
                                        ? "round-arrow : arrowactive"
                                        : "round-arrow"
                                    }
                                  >
                                    <i class="fa-solid fa-angle-down"></i>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                setBookApnt(true), handleCompName(curelem.name);
                              }}
                              className="Select-apnt"
                            >
                              Select
                            </button>
                          </div>

                          {itemPrice === curelem.id && (
                            <div className="item-price-grid-main-bx">
                              <div className="all-user-table item-price-box">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Item</th>
                                      <th>Price</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Iron</td>
                                      <td>₹60.00</td>
                                    </tr>

                                    <tr>
                                      <td>Plastic</td>
                                      <td>₹60.00</td>
                                    </tr>

                                    <tr>
                                      <td>Aluminium</td>
                                      <td>₹70.00</td>
                                    </tr>

                                    <tr>
                                      <td>Copper</td>
                                      <td>₹70.00</td>
                                    </tr>

                                    <tr>
                                      <td>Magazine</td>
                                      <td>₹70.00</td>
                                    </tr>

                                    <tr>
                                      <td>Wheel</td>
                                      <td>₹70.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              <div className="all-user-table item-price-box">
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Item</th>
                                      <th>Price</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Iron</td>
                                      <td>₹60.00</td>
                                    </tr>

                                    <tr>
                                      <td>Plastic</td>
                                      <td>₹60.00</td>
                                    </tr>

                                    <tr>
                                      <td>Aluminium</td>
                                      <td>₹70.00</td>
                                    </tr>

                                    <tr>
                                      <td>Copper</td>
                                      <td>₹70.00</td>
                                    </tr>

                                    <tr>
                                      <td>Magazine</td>
                                      <td>₹70.00</td>
                                    </tr>

                                    <tr>
                                      <td>Wheel</td>
                                      <td>₹70.00</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {bookApnt && (
            <div className="book-apnt-bx" onClick={(e) => e.stopPropagation()}>
              <h6>Book Appointment</h6>

              {timeSlots.map((time, index) => (
                <li key={index}>
                  <div className="left-time-date-bx">
                    <p> {time.timeslot} </p>
                    <span>3 slot available</span>
                  </div>

                  <button
                    onClick={() => {
                      handleBookNow(), handleTimeSelection(time.timeslot);
                    }}
                    className={
                      time.btn === "Unavailable"
                        ? "book-apnt book-org-btn"
                        : "book-apnt"
                    }
                  >
                    {time.btn}
                  </button>
                </li>
              ))}

              <div onClick={() => setBookApnt(false)} className="close-btn">
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Appointment;
