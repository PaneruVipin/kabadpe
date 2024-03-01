import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  adminExtendPlan,
  adminIndPlansFetch,
} from "../apis/admins/franchisePlans";
import { DateTime } from "luxon";

const IndvdualPlan = ({ onSwitch }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [upgrade, setUpgrade] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});

  const handleCalendarChange =  (date) => {
    setSelectedDate(date);
  };

  const handleCalendarSubmit =async () => {
    await adminExtendPlan({ endDate: selectedDate, id: selectedPlan?.id });
    refetch();
    setShowCalendar(false);
  };

  const { data: plans, refetch } = useQuery({
    queryKey: ["adminfetchIndPlans"],
    queryFn: () => adminIndPlansFetch(),
  });
  return (
    <>
      <div className="all-user-table mt-5">
        <table>
          <thead>
            <tr>
              <th>SNo.</th>
              <th>Plan </th>
              <th>Worker</th>
              <th>Subscription Period</th>
              <th>Area</th>
              <th>Sub Area</th>
              <th>Amount</th>
              <th>Comission</th>
              <th>Invoice</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {!plans?.error
              ? plans?.plans?.map(
                  (
                    {
                      KabadCollector,
                      WorkerSub,
                      ariaIds,
                      endDate,
                      id,
                      planStatus,
                      startDate,
                    },
                    i
                  ) => {
                    const ids = JSON.parse(ariaIds || "[]");
                    const arias = ids?.map((i) =>
                      plans?.arias?.find(({ id }) => id == i)
                    );
                    return (
                      <tr key={id}>
                        <td>
                          {" "}
                          <span>{i + 1}</span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span>{WorkerSub?.planType}</span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span>{KabadCollector?.fullname}</span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span>
                            {DateTime.fromISO(startDate, {
                              zone: "utc",
                            }).toFormat("ccc dd LLL yyyy")}{" "}
                            to{" "}
                            {endDate
                              ? DateTime.fromISO(endDate, {
                                  zone: "utc",
                                }).toFormat("ccc dd LLL yyyy")
                              : null}
                          </span>{" "}
                        </td>
                        <td>
                          {" "}
                          {arias?.map(({ ariaName }) => (
                            <span>{ariaName} ,</span>
                          ))}
                        </td>
                        <td>
                          {" "}
                          {arias?.map(({ subAriaName }) => (
                            <span> {subAriaName},</span>
                          ))}
                        </td>
                        <td>
                          {" "}
                          <span>₹{WorkerSub?.planAmount}</span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span>{WorkerSub?.additionalAmount}%</span>{" "}
                        </td>
                        <td> {/* <span>CSS221400</span>{" "} */}</td>
                        <td>
                          {" "}
                          <span className="actve-text">{planStatus}</span>{" "}
                        </td>

                        <td>
                          <div className="edit-upgrade-btns">
                            <button
                              disabled={WorkerSub?.planType != "demo"}
                              onClick={() => {
                                setShowCalendar(true);
                                setSelectedPlan({
                                  KabadCollector,
                                  WorkerSub,
                                  ariaIds,
                                  endDate,
                                  id,
                                  planStatus,
                                  startDate,
                                });
                              }}
                            >
                              Extend
                            </button>
                            <button onClick={() => setUpgrade(true)}>
                              Upgrade
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )
              : null}
          </tbody>
        </table>
      </div>

      {showCalendar && (
        <div
          onClick={() => setShowCalendar(false)}
          className="calendar-choose-date-comp"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="calendar-choose-date-bx"
          >
            <Calendar
              minDate={new Date()}
              onChange={handleCalendarChange}
              value={selectedDate}
            />
            <button
              onClick={handleCalendarSubmit}
              className="date-chose-submit-btn"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {upgrade && (
        <div className="upg-popup-bx" onClick={() => setUpgrade(false)}>
          <div className="upg-popup" onClick={(e) => e.stopPropagation()}>
            <div className="upg-li">
              <h6>Plan A Name</h6>
              <div className="current-name">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>

            <div className="upg-li">
              <h6>Plan B Name</h6>
              <span>Assign</span>
            </div>

            <div className="upg-li">
              <h6>Plan C Name</h6>
              <span>Assign</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndvdualPlan;
