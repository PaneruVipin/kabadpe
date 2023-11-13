import React from "react";
import "../style/Profile.css";
import { useQuery } from "@tanstack/react-query";
import { userAppoinmentsFetch } from "../apis/kbadpeUser/orders";
import { DateTime } from "luxon";

const UserProfUpdates = () => {
  const from = new Date();
  from.setHours(0, 0, 0, 0);
  const to = new Date(from);
  to.setDate(to.getDate() + 1);
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["userTodayAppoinments"],
    queryFn: () => userAppoinmentsFetch({ from, to }),
  });
  console.log("todays appoinments", appoinments);
  return (
    <>
      <section className="user-prf-update-comp">
        <div className="u-p-cont">
          <h5>Appointments</h5>

          <div className="u-p-updt-table-bx">
            <table>
              <tbody>
                {!appoinments?.error ? (
                  appoinments?.length ? (
                    appoinments?.map(
                      (
                        {
                          id,
                          appointmentDate,
                          appointmentTimeSlot,
                          formatedAddress,
                          Franchise,
                          Arium,
                          KabadCollector,
                          orderStatus,
                        },
                        index
                      ) => (
                        <tr key={id}>
                          <td>
                            <div className="u-p-tb-data">
                              <div className="t-icn">{index + 1}</div>
                              <div className="u-p-tb-info">
                                <h6>
                                  {" "}
                                  {KabadCollector
                                    ? KabadCollector?.fullname
                                    : "Unassigned"}{" "}
                                </h6>
                                <span>
                                  {formatedAddress} / {Arium?.pincode}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="u-p-tb-numb-bx">
                              <h6>
                                {" "}
                                {DateTime.fromISO(appointmentDate, {
                                  zone: "utc",
                                }).toFormat("ccc dd LLL yyyy")}{" "}
                              </h6>
                              <span>7054387420</span>
                            </div>
                          </td>

                          <td>
                            <div className="complet-bx upcoming-bx">
                              Upcoming
                            </div>
                          </td>
                        </tr>
                      )
                    )
                  ) : (
                    <div>No appoinments today</div>
                  )
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfUpdates;
