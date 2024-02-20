import React, { useState } from "react";
import subsData from "../subscriptionData";
import SubsDetEdit from "./SubsDetEdit";
import Upgradepopupbx from "./Upgradepopupbx";
import { adminfranchisePlansFetch } from "../apis/admins/franchisePlans";
import { useQuery } from "@tanstack/react-query";
import IndvdualPlan from "./IndvdualPlan";

const SubscriptionPlan = ({ onSwitch }) => {
  const [subsPlan, setSubsPlan] = useState(subsData);
  const [subsDataBox, setSubsDataBox] = useState(false);
  const [upgradeBx, setUpgradeBx] = useState(false);
  const [subsSwtch, setSubsSwtch] = useState("frenchies");

  const subsDataClose = () => {
    setSubsDataBox(false);
  };

  const { data: franchisePlans, refetch } = useQuery({
    queryKey: ["adminfetcfranchisePlans"],
    queryFn: () => adminfranchisePlansFetch(),
  });
  return (
    <>
      <section className="subscrip-plan-comp">
        <div className="top-switch-plan-flex-bx">
          <h6>Subscribed </h6>

          <div className="top-subsrbed-btns">
            <button
              onClick={() => setSubsSwtch("frenchies")}
              className={
                subsSwtch === "frenchies"
                  ? "top-plan-switch-btn planswtchactive"
                  : "top-plan-switch-btn"
              }
            >
              Frenchies
            </button>

            <button
              onClick={() => setSubsSwtch("individuals")}
              className={
                subsSwtch === "individuals"
                  ? "top-plan-switch-btn planswtchactive"
                  : "top-plan-switch-btn"
              }
            >
              Individuals
            </button>
          </div>
        </div>

        {subsSwtch === "frenchies" ? (
          <div className="all-user-table subs-plan-table subs-plan-table5">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Plan </th>
                  <th>Frenchies Name</th>
                  <th>Subscription Period</th>
                  <th>Area</th>
                  <th>Sub Area</th>
                  <th>Amount</th>
                  <th>Invoice</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {!franchisePlans?.error
                  ? franchisePlans?.plans?.map(
                      (
                        {
                          id,
                          plantType,
                          subTotal,
                          tax,
                          planStatus,
                          KabadpeSub,
                          Franchise,
                          ariaIds,
                        },
                        i
                      ) => {
                        const ids = JSON.parse(ariaIds || "[]");
                        const arias = ids?.map((i) =>
                          franchisePlans?.arias?.find(({ id }) => id == i)
                        );
                        return (
                          <>
                            <tr key={i}>
                              <td>
                                {" "}
                                <span> {i + 1} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {KabadpeSub?.planeName} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {Franchise?.companyName} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {plantType} </span>{" "}
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
                                <span> {+subTotal + +tax} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                {/* <span> {"elem.invoice"} </span>{" "} */}
                              </td>
                              <td>
                                {" "}
                                <span
                                //   style={{
                                //     color:
                                //       elem.banbtn === "Unban" ? "red" : "#54be73",
                                //   }}
                                >
                                  {" "}
                                  {planStatus}{" "}
                                </span>{" "}
                              </td>
                              <td>
                                <div className="btn-ban-del-flex">
                                  <button
                                  // className={
                                  //   elem.banbtn === "Ban"
                                  //     ? "banbtn activebanbtn"
                                  //     : "banbtn"
                                  // }
                                  >
                                    {/* {elem.banbtn} */}
                                  </button>

                                  {/* <button className="del-btn">{elem.delbtn}</button> */}
                                </div>
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )
                  : null}

                {/* onClick={() => setSubsDataBox(true)} */}
              </tbody>
            </table>
          </div>
        ) : null}

        {subsSwtch === "individuals" ? (
          <IndvdualPlan onSwitch={onSwitch} />
        ) : null}

        {/* <button onClick={() => setUpgradeBx(true)} className="upgrade-btn">
            Upgrade
        </button> */}
      </section>

      {upgradeBx ? (
        <Upgradepopupbx
          upgradeTrue={upgradeBx}
          onclickCloseUpgradeBx={() => setUpgradeBx(false)}
        />
      ) : null}
      {subsDataBox ? <SubsDetEdit onclickCloseSubsDat={subsDataClose} /> : null}
    </>
  );
};

export default SubscriptionPlan;
