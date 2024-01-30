import React, { useEffect, useLayoutEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AddAddressList from "./AddAddressList";
import { Form, Formik } from "formik";
import { validationSchedulePickup } from "../validators/kabadPeUser/schedule";
import { useSelector } from "react-redux";
import {
  userFetchAvailableCompanies,
  userFetchAvailableSlots,
  userScheduleAppoinment,
  userValidateServicability,
} from "../apis/kbadpeUser/appoinment";
import { useQuery } from "@tanstack/react-query";
import { workers } from "../lib/worker";
import { slotLabels } from "../lib/slots";
import { userAddressesFetch } from "../apis/user";
import Response from "../Components/Popups/Response";

const Appointment = ({ setUserForm }) => {
  const { success, userInfo, loading } = useSelector((s) => s.user);
  const [formLoading, setFormLoading] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [addAddress, setAddAddress] = useState(false);
  const [bookApnt, setBookApnt] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectAddesQuery, setSelectAddesQuery] = useState("");
  const [initialFormValues, setInitialFormValues] = useState({
    appointmentContactNumber: "",
    appointmentPersonName: "",
    frequency: "",
    estimateWeight: "",
    serviceType: "",
  });
  const [addressError, setAddressError] = useState("");
  const [servicableAriaId, setServicableAriaId] = useState();
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedSlotData, setSelectedSlotData] = useState();
  const [selectedServiceType, setSelectedServiceType] = useState();
  const [otherErrors, setOtherErrors] = useState({});
  const [showResponse, setShowResponse] = useState(false);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(true);
  };

  const handleBookNow = () => {
    setShowCalendar(false);
  };

  const handleSubmit = async (data) => {
    setOtherErrors({});
    if (addressError) {
      return;
    } else if (!selectAddesQuery) {
      setOtherErrors({ address: "Please choose address" });
      return;
    } else if (!selectedSlotData) {
      setOtherErrors({ timeSlot: "Please Choose date and slots" });
      return;
    }
    const newData = {
      ...data,
      appointmentDate: selectedSlotData?.selectedDate?.toISOString(),
      appoinmentAddress: selectAddesQuery,
      companyId: selectedSlotData?.selectedCompany?.id,
      appointmentTimeSlot: selectedSlotData?.slotName,
      appoinmentAria: selectedAddress?.id,
    };
    const res = await userScheduleAppoinment(newData);
    setShowResponse(true);
    if (res?.error) {
      setOtherErrors({ schedule: res?.message });
      return;
    }
    setOtherErrors({ scheduleSuccess: "Successfuly scheduled appoinment " });
  };
  const { data: addresses, refetchAddress } = useQuery({
    queryKey: ["userAddress:appoinment:default"],
    queryFn: () => userAddressesFetch(),
  });

  const { data: availableCompanies, refetch } = useQuery({
    queryKey: ["userAvailableCompanies"],
    queryFn: () =>
      userFetchAvailableCompanies({
        ariaId: servicableAriaId,
        date: selectedDate
          ? selectedDate.toISOString()
          : new Date().toISOString(),
        service: selectedServiceType || "kabadi",
      }),
  });
  const { data: timeSlots, refetch: refetchSlot } = useQuery({
    queryKey: ["userAvailableSlot"],
    queryFn: () =>
      userFetchAvailableSlots({
        franchiseId: selectedCompany?.id,
        date: selectedDate
          ? selectedDate.toISOString()
          : new Date().toISOString(),
      }),
  });
  const checkAndOpenLoginPage = (fn) => {
    return (e) => {
      if (userInfo?.role == "user") {
        fn(e);
        return;
      }
      setUserForm(true);
    };
  };
  useEffect(() => {
    if (!addresses?.error && addresses?.length) {
      setSelectedAddress(addresses?.[0]);
    }
  }, [addresses]);
  useEffect(() => {
    if (loading) {
      setFormLoading(true);
    }
    if (loading === false) {
      setFormLoading(false);
    }
  }, [loading]);
  useEffect(() => {
    if (userInfo) {
      setInitialFormValues({
        ...initialFormValues,
        appointmentContactNumber: userInfo?.phoneNumber,
        appointmentPersonName: userInfo?.fullname,
      });
    }
  }, [userInfo]);

  useEffect(() => {
    setOtherErrors((prev) => ({
      ...prev,
      address: "",
    }));
    const addres = selectedAddress?.street
      ? `${selectedAddress?.street} ${selectedAddress?.subAria} ${selectedAddress?.aria} ${selectedAddress?.city} ${selectedAddress?.zipCode}`
      : null;
    setSelectAddesQuery(addres);
    if (selectedAddress?.street) {
      (async () => {
        const servicableAria = await userValidateServicability({
          ...selectedAddress,
          pincode: selectedAddress?.zipCode,
          ariaName: selectedAddress?.aria,
          subAriaName: selectedAddress?.subAria,
        });
        if (servicableAria?.error) {
          setServicableAriaId("");
          setAddressError(servicableAria?.message);
        } else {
          setServicableAriaId(servicableAria?.id);
          setAddressError("");
        }
      })();
    }
  }, [selectedAddress]);

  useEffect(() => {
    refetch();
  }, [servicableAriaId, selectedDate, selectedServiceType, selectedAddress]);

  useEffect(() => {
    refetchSlot();
  }, [selectedCompany, selectedDate, selectedServiceType, selectedAddress]);
  useEffect(() => {
    setSelectedSlotData(null);
  }, [selectedAddress, selectedServiceType]);

  return (
    <>
      <Response
        show={showResponse}
        setShow={setShowResponse}
        navTitle="Go To Account"
        error={otherErrors?.schedule}
        text={otherErrors?.scheduleSuccess}
        path="/account"
      />
      <section className="schedule-apnt-comp">
        <div className="comon-container-2 apnt-container">
          <div className="apnt-heading">
            <p>Book Slots</p>
            <h3>Schedual Appointment</h3>
          </div>

          <div className="apnt-grid-bx">
            <div className="left-shdule-apnt-form-bx">
              {!formLoading && !loading ? (
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
                    const handleClick = checkAndOpenLoginPage(() => {});
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
                              onClick={handleClick}
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
                              type="string"
                              name="appointmentContactNumber"
                              id="phone"
                              placeholder="Mobile No."
                              autoComplete="off"
                              required
                              onClick={handleClick}
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
                            onClick={checkAndOpenLoginPage(() =>
                              setAddAddress(true)
                            )}
                            className="apnt-form-submit-btn add-adres-btn"
                          >
                            Add Address
                            <i class="fa-solid fa-location-dot"></i>
                          </button>

                          <div className="default-add-bx apnt-inpt-bx apnt-inpt-bx-text">
                            <p>{selectAddesQuery}</p>
                          </div>
                        </div>
                        {addressError ? (
                          <div style={{ color: "red" }}>{addressError}</div>
                        ) : (
                          <div style={{ color: "red" }}>
                            {otherErrors?.address}
                          </div>
                        )}

                        <div className="form-grid form-grid3">
                          <div className="apnt-inpt-bx apnt-inpt-bx-s">
                            <select
                              name="serviceType"
                              id="service"
                              onClick={handleClick}
                              onChange={(e) => {
                                setSelectedServiceType(e?.target?.value);
                                handleChange(e);
                              }}
                              onBlur={handleBlur}
                              value={values?.serviceType}
                            >
                              <option value="" hidden>
                                Select Your Service
                              </option>
                              {workers.map(({ label, value, id }) => (
                                <option key={id} value={value}>
                                  {label}
                                </option>
                              ))}
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
                              onClick={handleClick}
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
                              onClick={handleClick}
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
                          <div>
                            <div
                              className="apnt-inpt-bx apnt-inpt-bx2"
                              onClick={checkAndOpenLoginPage(() =>
                                setShowCalendar(true)
                              )}
                            >
                              <div>
                                {selectedSlotData ? (
                                  <>
                                    <span>
                                      {
                                        selectedSlotData?.selectedCompany
                                          ?.companyName
                                      }
                                    </span>
                                    <span>
                                      {`${selectedSlotData?.selectedDate?.toDateString()} ${
                                        slotLabels?.[selectedSlotData?.slotName]
                                      }`}
                                    </span>
                                  </>
                                ) : (
                                  <span> Select Your Date and Time </span>
                                )}
                              </div>
                            </div>
                            {otherErrors?.timeSlot ? (
                              <div style={{ color: "red" }}>
                                {otherErrors?.timeSlot}
                              </div>
                            ) : null}
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
          {selectAddesQuery && !addressError && selectedServiceType ? (
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
                    <span> {selectedDate?.toDateString()} </span>
                  </h3>
                  {selectedDate > new Date() ? (
                    <div className="avalbe-cmpnies-main-bx">
                      {!availableCompanies?.error
                        ? availableCompanies.map(
                            (
                              {
                                Franchise: {
                                  companyName,
                                  franchiseAddress,
                                  id,
                                },
                              },
                              i
                            ) => {
                              return (
                                <>
                                  <div key={i} className="avalbe-cmpnies-bx">
                                    <div className="avalbe-cmpnies-flex">
                                      <div className="left-cmpnies-bx">
                                        <div className="cmpnies-logo">
                                          <img src={""} alt="" />
                                        </div>
                                        <div className="cmpnies-info">
                                          <h6> {companyName} </h6>

                                          {/* <div className="waste-prodts-flex">
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
                                  </div> */}
                                        </div>
                                      </div>

                                      <button
                                        onClick={() => {
                                          setBookApnt(true);
                                          setSelectedCompany({
                                            companyName,
                                            franchiseAddress,
                                            id,
                                          });
                                          //   handleCompName(curelem.name);
                                        }}
                                        className="Select-apnt"
                                      >
                                        Select
                                      </button>
                                    </div>

                                    {/* {itemPrice === curelem.id && (
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
                            )} */}
                                  </div>
                                </>
                              );
                            }
                          )
                        : null}
                    </div>
                  ) : (
                    <div style={{ textAlign: "center" }}>
                      Choose a future Date Please
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="time-slot-list">
              <div className="calendar-popup">
                <div className="date-time-main-bx">
                  <h3>
                    <span style={{ color: "red" }}>
                      {" "}
                      Select Address And Service Type First
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          )}
          {bookApnt && (
            <div
              className="date-time-popup-bx"
              onClick={(e) => {
                e.stopPropagation();
                setBookApnt(false);
              }}
            >
              <div
                className="book-apnt-bx"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <h6>Book Appointment</h6>
                {!timeSlots?.error
                  ? timeSlots?.map(({ slotName, reminingSlot }, index) => (
                      <li key={index}>
                        <div className="left-time-date-bx">
                          <p> {slotLabels?.[slotName]} </p>
                          <span>{reminingSlot} slot available</span>
                        </div>

                        {reminingSlot ? (
                          <button
                            onClick={() => {
                              handleBookNow();
                              setSelectedSlotData({
                                slotName,
                                selectedCompany,
                                selectedDate,
                              });
                              setOtherErrors((prev) => ({
                                ...prev,
                                timeSlot: "",
                              }));
                            }}
                            className={"book-apnt"}
                          >
                            Book Appoinment
                          </button>
                        ) : null}
                      </li>
                    ))
                  : null}

                <div onClick={() => setBookApnt(false)} className="close-btn">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Appointment;
