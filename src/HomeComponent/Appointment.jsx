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
import { IoIosArrowRoundBack } from "react-icons/io";

const Appointment = ({ setUserForm, component = "user", userData }) => {
  const { success, userInfo, loading } = useSelector((s) => s.user);
  const [formLoading, setFormLoading] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [addAddress, setAddAddress] = useState(false);
  const [bookApnt, setBookApnt] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectAddesQuery, setSelectAddesQuery] = useState("");
  const [expededItemPriceRows, setExpendedItemPriceRow] = useState([]);
  const adminInitialValues = {
    appointmentContactNumber: userData?.phoneNumber,
    appointmentPersonName: userData?.fullname,
    frequency: "once",
    estimateWeight: "unweighed",
    serviceType: "kabadi",
  };
  const [initialFormValues, setInitialFormValues] = useState(
    component == "admin"
      ? adminInitialValues
      : {
          appointmentContactNumber: "",
          appointmentPersonName: "",
          frequency: "once",
          estimateWeight: "unweighed",
          serviceType: "kabadi",
        }
  );
  const [addressError, setAddressError] = useState("");
  const [servicableAriaId, setServicableAriaId] = useState();
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedSlotData, setSelectedSlotData] = useState();
  const [selectedServiceType, setSelectedServiceType] = useState("kabadi");
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
      ariaId: servicableAriaId,
      userId: userData?.id,
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
    queryFn: () => userAddressesFetch({ id: userData?.id }),
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
        userId: userData?.id,
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
        aria: selectedAddress?.aria,
        userId: userData?.id,
      }),
  });
  const checkAndOpenLoginPage = (fn) => {
    return (e) => {
      if (userInfo?.role == "user" || component == "admin") {
        fn(e);
        return;
      }
      setUserForm(true);
    };
  };
  useEffect(() => {
    if (
      !addresses?.error &&
      addresses?.length &&
      (userInfo?.role == "user" || component == "admin")
    ) {
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
    if (userInfo?.role == "user") {
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
  console.log("this is selected address", selectedAddress);
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
          {/* <div className="apnt-heading">
            <p>Book Slots</p>
            <h3>Schedual Appointment</h3>
          </div> */}

          <div className="apnt-grid-bx">
            <div className="left-shdule-apnt-form-bx">
              <p className="apnt-form-text5">Schedule Your Appointment</p>
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
                    const handleClick =
                      component == "user"
                        ? checkAndOpenLoginPage(() => {})
                        : () => {};
                    return (
                      <Form className="apnt-slot-form-bx">
                        <div className="form-grid">
                          <div className="apnt-inpt-bx spe-apnt-inpt-bx">
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
                              <div
                                className="field-text"
                                style={{ color: "red" }}
                              >
                                {errors?.appointmentPersonName}
                              </div>
                            ) : null}
                          </div>

                          <div className="apnt-inpt-bx spe-apnt-inpt-bx">
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
                              <div
                                className="field-text"
                                style={{ color: "red" }}
                              >
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
                            Address
                            <i class="fa-solid fa-location-dot"></i>
                          </button>

                          <div className="default-add-bx apnt-inpt-bx apnt-inpt-bx-text">
                            <p>{selectAddesQuery}</p>
                          </div>
                        </div>
                        {addressError ? (
                          <div className="field-text" style={{ color: "red" }}>
                            {addressError}
                          </div>
                        ) : (
                          <div className="field-text" style={{ color: "red" }}>
                            {otherErrors?.address}
                          </div>
                        )}

                        <div className="form-grid form-grid3">
                          <div className="apnt-inpt-bx  spe-apnt-inpt-bx">
                            <div
                              className={`${
                                values?.serviceType
                                  ? "apnt-inpt-bx-w"
                                  : "apnt-inpt-bx-s"
                              }`}
                            >
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
                                {workers?.map(({ label, value, id }) => (
                                  <option key={id} value={value}>
                                    {label}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {errors?.serviceType && touched?.serviceType ? (
                              <div
                                className="field-text"
                                style={{ color: "red" }}
                              >
                                {errors?.serviceType}
                              </div>
                            ) : null}
                          </div>

                          <div className="apnt-inpt-bx  spe-apnt-inpt-bx">
                            <div
                              className={`${
                                values?.estimateWeight
                                  ? "apnt-inpt-bx-w"
                                  : "apnt-inpt-bx-s"
                              }`}
                            >
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
                            </div>
                            {errors?.estimateWeight &&
                            touched?.estimateWeight ? (
                              <div
                                className="field-text"
                                style={{ color: "red" }}
                              >
                                {errors?.estimateWeight}
                              </div>
                            ) : null}
                          </div>

                          <div className="apnt-inpt-bx  spe-apnt-inpt-bx">
                            <div
                              className={`${
                                values?.frequency
                                  ? "apnt-inpt-bx-w"
                                  : "apnt-inpt-bx-s"
                              }`}
                            >
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
                            </div>
                            {errors?.frequency && touched?.frequency ? (
                              <div
                                className="field-text"
                                style={{ color: "red" }}
                              >
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
                {/* <video controls autoplay preload="auto" type="video/mp4">
                  <source src="/images/customImg/video-file.mp4" />
                </video> */}
                <img src="/images/customImg/05.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {addAddress ? (
        <AddAddressList
          userData={userData}
          component={component}
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
                <Calendar
                  minDate={new Date()}
                  onChange={handleDateChange}
                  value={selectedDate}
                />
              </div>

              {selectedDate && (
                <div className="time-slot-list">
                  <div
                    className="time-slot-close-btn"
                    onClick={() => setSelectedDate(null)}
                  >
                    <IoIosArrowRoundBack
                      style={{ color: "green", width: "30px", height: "20px" }}
                    />
                    {/* <i class="fa-solid fa-xmark"></i> */}
                  </div>

                  <h3>
                    Available Companies{" "}
                    <span> {selectedDate?.toDateString()} </span>
                  </h3>
                  {new Date(selectedDate) > new Date() ||
                  new Date()?.toISOString()?.split("T")?.[0] ==
                    new Date(selectedDate)?.toISOString()?.split("T")?.[0] ? (
                    <div className="avalbe-cmpnies-main-bx">
                      {availableCompanies?.length ? (
                        !availableCompanies?.error ? (
                          availableCompanies.map(
                            (
                              {
                                companyName,
                                franchiseAddress,
                                id,
                                franchiseLogo,
                                FranchiseRate,
                              },
                              i
                            ) => {
                              const mid = Math.floor(
                                FranchiseRate?.length / 2 + 0.5
                              );
                              const part1 = FranchiseRate?.slice(0, mid);
                              const part2 = FranchiseRate?.slice(mid);
                              return (
                                <>
                                  <div key={i} className="avalbe-cmpnies-bx">
                                    <div className="avalbe-cmpnies-flex">
                                      <div className="left-cmpnies-bx">
                                        <div className="cmpnies-logo">
                                          <img
                                            src={
                                              id == "kabadpe"
                                                ? "./images/logos/logo-small.jpg"
                                                : franchiseLogo ||
                                                  "/images/temp/temp-user-profile.png"
                                            }
                                            alt=""
                                          />
                                        </div>
                                        <div className="cmpnies-info">
                                          <h6> {companyName} </h6>

                                          <div
                                            onClick={() => {
                                              let newRows;
                                              if (
                                                expededItemPriceRows?.includes(
                                                  id
                                                )
                                              ) {
                                                newRows =
                                                  expededItemPriceRows?.filter(
                                                    (e) => e != id
                                                  );
                                              } else {
                                                newRows = [
                                                  ...expededItemPriceRows,
                                                  id,
                                                ];
                                              }
                                              setExpendedItemPriceRow(newRows);
                                            }}
                                            className={
                                              expededItemPriceRows?.includes(id)
                                                ? "round-arrow : arrowactive"
                                                : "round-arrow"
                                            }
                                          >
                                            <i class="fa-solid fa-angle-down"></i>
                                          </div>
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
                                        }}
                                        className="Select-apnt"
                                      >
                                        Select
                                      </button>
                                    </div>
                                    {expededItemPriceRows?.includes(id) ? (
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
                                              {part1?.map((e) => (
                                                <tr>
                                                  <td>
                                                    {e?.KabadCategory
                                                      ?.productName ||
                                                      e?.productName}
                                                  </td>
                                                  <td>₹{e?.retailPrice}</td>
                                                </tr>
                                              ))}
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
                                              {part2?.map((e) => (
                                                <tr>
                                                  <td>
                                                    {e?.KabadCategory
                                                      ?.productName ||
                                                      e?.productName}
                                                  </td>
                                                  <td>₹{e?.retailPrice}</td>
                                                </tr>
                                              ))}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    ) : null}
                                  </div>
                                </>
                              );
                            }
                          )
                        ) : null
                      ) : (
                        <p style={{ textAlign: "center" }}>
                          Currently All Slots Are Filled For{" "}
                          {selectedServiceType}
                        </p>
                      )}
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
