import { useQuery } from "@tanstack/react-query";
import React from "react";
import { adminIndPlansFetch } from "../apis/admins/franchisePlans";
import { DateTime } from "luxon";

const IndvdualPlan = ({ onSwitch }) => {
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
                            <button>Edit</button>
                            <button onClick={onSwitch}>Upgrade</button>
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
    </>
  );
};

export default IndvdualPlan;
