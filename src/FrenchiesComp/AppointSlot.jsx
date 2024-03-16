import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import {
  adminAppoinmentAssign,
  adminAppoinmentCancel,
  adminAppoinmentForAssigningDateFetch,
  adminAppoinmentReschedule,
  adminServicableWorkersFetch,
  adminWorkerInSameJobFetch,
} from "../apis/admins/appoinments";
import { slotLabels } from "../lib/slots";
import { Form, Formik } from "formik";

const AppointSlot = ({
  onclickCloseApntSlot,
  ApntSlotTrue,
  onClickOpenPopup,
  component,
  appoinmentDetails,
  refetchAppoinment,
}) => {
  const [currentDate, setcurrentdate] = useState(new Date());
  const [popUp, setPopUp] = useState(false);
  const [confirmPopup, setConfirmPopup] = useState(false);
  const [reshedPopup, setReshedPopup] = useState(false);
  const [cancelPopup, setCancelPopupPopup] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState({});
  const handleChangeDate = (event) => {
    const inputData = new Date(event.target.value);

    setcurrentdate(inputData);
  };
  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);

    if (direction === "left") {
      newDate.setDate(newDate.getDate() - 1);
    } else if (direction === "right") {
      newDate.setDate(newDate.getDate() + 1);
    }

    setcurrentdate(newDate);
  };

  const { data: workers, refetch } = useQuery({
    queryKey: ["fetchServicableWorkers"],
    queryFn: () =>
      component == "admin"
        ? adminServicableWorkersFetch({
            worker: appoinmentDetails?.serviceType,
            ariaId: appoinmentDetails?.ariaId,
            date: appoinmentDetails?.appointmentDate,
          })
        : () => {},
  });

  const { data: appoinments, refetch: refetchAppoinments } = useQuery({
    queryKey: ["fetchAppoinmeAssigned"],
    queryFn: () =>
      adminAppoinmentForAssigningDateFetch(appoinmentDetails?.appointmentDate),
  });
  const handleConfirmClick = async () => {
    const res = await adminAppoinmentAssign({
      appoinmentId: appoinmentDetails?.id,
      workerId: selectedWorker?.id,
    });
    if (!res?.error) {
      refetchAppoinment();
      setPopUp(false);
      onClickOpenPopup();
      return;
    }
  };

  const handleReschedule = async (data) => {
    const payload = { ...data, id: appoinmentDetails?.id };
    const res = await adminAppoinmentReschedule(payload);
    if (!res?.error) {
      refetchAppoinment();
      setPopUp(false);
      onClickOpenPopup();
      return;
    }
  };
  const handleCancel = async () => {
    const res = await adminAppoinmentCancel({ id: appoinmentDetails?.id });
    if (!res?.error) {
      refetchAppoinment();
      setPopUp(false);
      onClickOpenPopup();
      return;
    }
  };

  const { data: workerInSameJob, refetch: refetchworkerInSameJOb } = useQuery({
    queryKey: ["fetchWorkerInSameJob"],
    queryFn: () =>
      adminWorkerInSameJobFetch({
        date: appoinmentDetails?.appointmentDate,
        serviceType: appoinmentDetails?.serviceType,
        ariaId: appoinmentDetails?.ariaId,
      }),
  });
  return (
    <>
      <section
        onClick={() => setPopUp(false)}
        className={
          popUp === true
            ? "appoint-popup-main popupactive"
            : "appoint-popup-main"
        }
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="appoint-popup-bx appoint-popup-bx2"
        >
          {workers?.length ? (
            <div className="appoint-popup-info appoint-popup-info2">
              <h3>Assign</h3>
              <h6>Assign Appointment to your waste collector</h6>
            </div>
          ) : (
            <div className="appoint-popup-info appoint-popup-info2">
              <h3>Take action</h3>
              <h6>Re-schedule or cancel appoinment</h6>
            </div>
          )}
          {workers?.length ? (
            <>
              <div className="appoint-det">
                <p>
                  Name : <span>{selectedWorker?.fullname}</span>{" "}
                </p>
                <p>
                  Time Slot :{" "}
                  <span>
                    {slotLabels?.[appoinmentDetails?.appointmentTimeSlot]}
                  </span>{" "}
                </p>
                <p>
                  Area : <span>{appoinmentDetails?.UserAddress?.aria}</span>{" "}
                </p>
              </div>

              {!workerInSameJob?.error && workerInSameJob?.length ? (
                <p className="note-text">
                  Note : The {workerInSameJob?.[0]?.KabadCollector?.fullname} is
                  already have a job in same area .{" "}
                </p>
              ) : null}
            </>
          ) : null}
          <div className="appoint-change-btns-flex">
            {workers?.length ? (
              <button
                onClick={() => {
                  setConfirmPopup(!confirmPopup),
                    setReshedPopup(false),
                    setCancelPopupPopup(false);
                }}
                className="comn-appoint-btn comn-appoint-btn1 comn-appoint-btn1-bg-chnge "
              >
                Assign Appointment
              </button>
            ) : null}

            <button
              onClick={() => {
                setReshedPopup(!reshedPopup),
                  setConfirmPopup(false),
                  setCancelPopupPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn2"
            >
              Reshedule Appointment
            </button>

            <button
              onClick={() => {
                setCancelPopupPopup(!cancelPopup),
                  setReshedPopup(false),
                  setConfirmPopup(false);
              }}
              className="comn-appoint-btn comn-appoint-btn3"
            >
              Cancel Appointment
            </button>
          </div>

          <button
            onClick={() => setPopUp(false)}
            className="cross-btn cross-btn2"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* _______________ when user click confirm btn then after show a text  */}

          <div
            className={
              confirmPopup === true
                ? "confirm-text confrmtextactive"
                : "confirm-text"
            }
          >
            <p>Waste Pickup Scheduled and information has been sent to User</p>
            <button
              onClick={handleConfirmClick}
              className="navigate-link-btn navigate-link-btn3 navigate-link-btn5"
            >
              Assign
            </button>
          </div>

          <div
            className={
              reshedPopup === true
                ? "reshedule-box reshedactive"
                : "reshedule-box"
            }
          >
            <p>
              Change date time for reschedule your waste pickup appoint, Appoint
              will be send to user for confirmation
            </p>
            <Formik
              initialValues={{ appointmentTimeSlot: "", appointmentDate: "" }}
              onSubmit={handleReschedule}
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
                  <Form className="reshed-form">
                    <div className="reshed-form-grid">
                      <div className="reshd-inpt-bx reshd-inpt-bx3">
                        <input
                          type="date"
                          name="appointmentDate"
                          id="date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.appointmentDate}
                          autoComplete="off"
                          required
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div className="reshed-select-bx reshd-inpt-bx3">
                        <select
                          required
                          name="appointmentTimeSlot"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values?.appointmentTimeSlot}
                          id="time_slot"
                        >
                          <option value="" hidden>
                            Choose Time
                          </option>
                          {Object.keys(slotLabels)?.map((key) => (
                            <option key={key} value={key}>
                              {slotLabels?.[key]}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="resd-sub-btn navigate-link-btn3 navigate-link-btn5"
                      >
                        Send Request
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>

          <div
            className={
              cancelPopup === true ? "cancel-text cancelactive" : "cancel-text"
            }
          >
            <p>Are you sure to Cancel Your Waste Pickup appointment</p>

            <button
              onClick={handleCancel}
              className="ok-btn navigate-link-btn3 navigate-link-btn5"
            >
              Confirm
            </button>
          </div>
        </div>
      </section>
      <section
        className="appoint-slots-comp"
        onClick={() => onclickCloseApntSlot()}
      >
        <div
          className="appoint-slots-main-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6>Appointments Slots </h6>

          <div className="current-date-bx-flex">
            {/* toISOString().split('T')[0] */}
            <p>
              {" "}
              Current Date :{" "}
              <span>
                {" "}
                {currentDate.toISOString().split("T")[0] || "2023-11-30"}{" "}
              </span>{" "}
            </p>

            <div className="select-date-bx">
              <input
                type="date"
                name="date"
                id="date"
                value={currentDate}
                onChange={handleChangeDate}
              />
            </div>

            <div className="left-right-arrow-btn-flex">
              <button
                onClick={() => handleDateChange("left")}
                className="date-btn"
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>

              <button
                onClick={() => handleDateChange("right")}
                className="date-btn"
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>

          <div className="buy-waste-table appoint-slot-table">
            {workers?.length ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    {Object.keys(slotLabels)?.map((key, i) => (
                      <th>
                        {" "}
                        <div className="slot-text-flex">
                          {" "}
                          <p>
                            {key?.split("")?.map((s, i) => {
                              if (i) {
                                return s;
                              } else {
                                return s?.toLocaleUpperCase();
                              }
                            })}
                          </p>{" "}
                          {slotLabels?.[key]}{" "}
                        </div>{" "}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {!workers?.error
                    ? workers?.map(
                        ({
                          aadharBack,
                          aadharFront,
                          address,
                          ariaName,
                          caste,
                          email,
                          fullname,
                          gender,
                          id,
                          panNo,
                          phoneNumber,
                          pincode,
                          profileImage,
                          subAriaName,
                          workCity,
                          workerRole,
                          WorkerAvailabilities,
                        }) => {
                          const futureLeaves = WorkerAvailabilities?.filter(
                            ({ date, availabilityStatus }) => {
                              const dateString = new Date(date)
                                .toISOString()
                                .split("T")[0];
                              const currentDate = new Date();
                              const next10Days = [];
                              for (let i = 0; i < 10; i++) {
                                const nextDate = new Date(currentDate);
                                nextDate.setDate(currentDate.getDate() + i);
                                next10Days.push(
                                  nextDate.toISOString().split("T")[0]
                                );
                              }
                              return (
                                availabilityStatus == "leave" &&
                                next10Days.includes(dateString)
                              );
                            }
                          )?.sort(
                            (a, b) => new Date(a?.date) - new Date(b?.date)
                          );
                          return (
                            <tr>
                              <td>
                                <span>
                                  {" "}
                                  {fullname?.split("")?.map((s, i) => {
                                    if (!i) {
                                      return s?.toUpperCase();
                                    } else {
                                      return s;
                                    }
                                  })}{" "}
                                </span>

                                <span
                                  style={{ display: "block", lineHeight: 1.4 }}
                                >
                                  {WorkerAvailabilities?.find(
                                    ({ date }) =>
                                      new Date()
                                        ?.toISOString()
                                        ?.split("T")?.[0] ==
                                      new Date(date)
                                        ?.toISOString()
                                        ?.split("T")?.[0]
                                  )?.availabilityStatus == "leave"
                                    ? "Today - Leave"
                                    : WorkerAvailabilities?.find(
                                        ({ date }) =>
                                          new Date()
                                            ?.toISOString()
                                            ?.split("T")?.[0] ==
                                          new Date(date)
                                            ?.toISOString()
                                            ?.split("T")?.[0]
                                      )?.availabilityStatus == "active"
                                    ? "Today - Active"
                                    : "Today - Not Active"}
                                </span>
                                <span
                                  style={{ display: "block", lineHeight: 1.4 }}
                                >
                                  {WorkerAvailabilities?.find(
                                    ({ date }) =>
                                      new Date(
                                        appoinmentDetails?.appointmentDate
                                      )
                                        ?.toISOString()
                                        ?.split("T")?.[0] ==
                                      new Date(date)
                                        ?.toISOString()
                                        ?.split("T")?.[0]
                                  )?.availabilityStatus == "leave"
                                    ? "Appoinment Day - Leave"
                                    : ""}
                                </span>
                                {futureLeaves?.length ? (
                                  <span
                                    style={{
                                      display: "block",
                                      lineHeight: 1.4,
                                    }}
                                  >
                                    Leaves -
                                    {futureLeaves?.map(
                                      ({ date }) =>
                                        new Date(date).getDate() + ", "
                                    )}
                                  </span>
                                ) : null}
                              </td>
                              {Object.keys(slotLabels)?.map((key, i) => (
                                <td>
                                  <div className="assign-flex-bx">
                                    <div className="slot-data">
                                      {!appoinments?.error
                                        ? appoinments
                                            ?.filter(
                                              (a) =>
                                                a?.appointmentTimeSlot == key &&
                                                a?.workerId == id &&
                                                a?.id != appoinmentDetails?.id
                                            )
                                            ?.map(({ UserAddress }, i) => (
                                              <span>
                                                {i + 1}.{" "}
                                                {UserAddress?.aria +
                                                  ", " +
                                                  UserAddress?.subAria}
                                              </span>
                                            ))
                                        : null}
                                    </div>

                                    {key ==
                                    appoinmentDetails?.appointmentTimeSlot ? (
                                      <button
                                        className="assign-btn assign-btn3"
                                        onClick={() => {
                                          setPopUp(true);
                                          setSelectedWorker({
                                            fullname,
                                            id,
                                          });
                                        }}
                                      >
                                        Assign
                                      </button>
                                    ) : null}
                                  </div>
                                </td>
                              ))}
                            </tr>
                          );
                        }
                      )
                    : null}
                </tbody>
              </table>
            ) : (
              <div style={{ textAlign: "center" }}>
                <span>Currently Workers are not available for this Job</span>
                <button
                  className="assign-btn assign-btn3"
                  onClick={() => {
                    setPopUp(true);
                    // setSelectedWorker({
                    //   fullname,
                    //   id,
                    // });
                  }}
                >
                  Actions
                </button>
              </div>
            )}
          </div>

          <div onClick={onclickCloseApntSlot} className="close-appoint-btn-bx">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointSlot;
