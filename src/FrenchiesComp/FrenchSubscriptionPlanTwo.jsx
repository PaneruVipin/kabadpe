import React, { useState } from "react";
import SubsDetEdit from "../AdminComponents.jsx/SubsDetEdit";
import Upgradepopupbx from "../AdminComponents.jsx/Upgradepopupbx";
import SubscribedPlanData from "./FrenchSubscribedData";
import ViewArea from "./ViewArea";
import { useQuery } from "@tanstack/react-query";
import { adminGetAllUsers } from "../apis/admins/users";
import { workerAriaInPlansFetch, workerPlansFetch } from "../apis/worker/plan";
import { DateTime } from "luxon";

const FrenchSubscriptionPlanTwo = ({
  onclickRedirect,
  component = "worker",
}) => {
  const [subscrbdData, setSubscrbdData] = useState(SubscribedPlanData);
  const [subsDataBox, setSubsDataBox] = useState(false);
  const [upgradeBx, setUpgradeBx] = useState(false);
  const [vwArea, setVwArea] = useState(false);
  const [areaData, setAreaData] = useState([]);

  const subsDataClose = () => {
    setSubsDataBox(false);
  };
  const { data: plans, refetch } = useQuery({
    queryKey: ["workerfetcPlans"],
    queryFn: () => workerPlansFetch(),
  });
  const getArias = async (ariaIds) => {
    const arias = await workerAriaInPlansFetch({ ariaIds });
    if (arias?.error) {
      setAreaData([]);
      return;
    }
    setAreaData(arias);
  };
  return (
    <>
      <section
        className={` subscrip-plan-comp ${
          component == "worker" ? "user-prof-grid-comp subscrip-plan-comp5" : ""
        }  `}
      >
        <div className="top-subs-text-flex">
          <h6>Subscribed </h6>
          <div className="right-btns-flex-subs">
            <button onClick={onclickRedirect} className="upgrade-btn">
              Upgrade
            </button>
            {/* <button className="upgrade-btn renew-btn renew-btn2 renew-btn3">
              Renew
            </button> */}
          </div>
        </div>

        <div className="all-user-table subs-plan-table subs-plan-table5">
          {component == "worker" ? (
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Plan Name </th>
                  <th>Plan Type</th>
                  <th>Amount / Per lead</th>
                  <th>Comission / Per lead</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Invoice</th>
                  <th>Working Area</th>
                </tr>
              </thead>
              <tbody>
                {!plans?.error
                  ? plans?.map(
                      (
                        {
                          WorkerSub,
                          ariaIds,
                          endDate,
                          id,
                          planStatus,
                          startDate,
                          subscriptionId,
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={id}>
                              <td>
                                {" "}
                                <span> {i + 1} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {WorkerSub?.planeName} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {WorkerSub?.planType} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {WorkerSub?.planAmount} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {" "}
                                  {WorkerSub?.additionalAmount}{" "}
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {" "}
                                  {DateTime.fromISO(startDate, {
                                    zone: "utc",
                                  }).toFormat("ccc dd LLL yyyy")}{" "}
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {" "}
                                  {endDate
                                    ? DateTime.fromISO(endDate, {
                                        zone: "utc",
                                      }).toFormat("ccc dd LLL yyyy")
                                    : ""}{" "}
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {" "}
                                  {/* {elem.invoice}{" "} */}
                                  {/* <i className="fa-regular fa-circle-down"></i>{" "} */}
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <button
                                  onClick={() => {
                                    getArias(JSON.parse(ariaIds || "[]"));
                                    setVwArea(true);
                                  }}
                                  className="work-area-btn"
                                >
                                  View Area
                                </button>{" "}
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )
                  : null}
              </tbody>
            </table>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Plan Name </th>
                  <th>Plan Type</th>
                  <th>Amount </th>
                  <th>Workers </th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Invoice</th>
                  <th>Working Area</th>
                </tr>
              </thead>
              <tbody>
                {!plans?.error
                  ? plans?.map(
                      (
                        {
                          KabadpeSub,
                          ariaIds,
                          endDate,
                          id,
                          planStatus,
                          startDate,
                          subscriptionId,
                          plantType,
                          subTotal,
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={id}>
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
                                <span> {plantType} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {subTotal} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span> {KabadpeSub?.collectorCount} </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {" "}
                                  {startDate
                                    ? DateTime.fromISO(startDate, {
                                        zone: "utc",
                                      }).toFormat("ccc dd LLL yyyy")
                                    : "Pending..."}{" "}
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {" "}
                                  {endDate
                                    ? DateTime.fromISO(endDate, {
                                        zone: "utc",
                                      }).toFormat("ccc dd LLL yyyy")
                                    : "Pending..."}{" "}
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {" "}
                                  {/* {elem.invoice}{" "} */}
                                  {/* <i className="fa-regular fa-circle-down"></i>{" "} */}
                                </span>{" "}
                              </td>
                              <td>
                                {" "}
                                <button
                                  onClick={() => {
                                    getArias(JSON.parse(ariaIds || "[]"));
                                    setVwArea(true);
                                  }}
                                  className="work-area-btn"
                                >
                                  View Area
                                </button>{" "}
                              </td>
                            </tr>
                          </>
                        );
                      }
                    )
                  : null}
              </tbody>
            </table>
          )}
        </div>

        <button onClick={onclickRedirect} className="upgrade-btn">
          Upgrade
        </button>
      </section>

      {vwArea ? (
        <ViewArea onclickCloseBx={() => setVwArea(false)} areaData={areaData} />
      ) : null}
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

export default FrenchSubscriptionPlanTwo;
