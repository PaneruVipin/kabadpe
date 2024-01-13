import React, { useEffect, useRef, useState } from "react";
import SelectArea from "./SelectArea";
import { useQuery } from "@tanstack/react-query";
import { franchiseSubscriptionsFetch } from "../apis/franchise/plans";

const FrenchiesSubsPlan = () => {
  const [plan, setPlan] = useState("monthly");
  const [locat, setLocat] = useState(false);
  const handleFiltFunc = (getplan) => {
    setPlan(getplan);
  };
  const { data: subsPlans, refetch } = useQuery({
    queryKey: ["subsPlans"],
    queryFn: () => franchiseSubscriptionsFetch(),
  });
  console.log("subsPlans", subsPlans);
  return (
    <>
      <section className="fren-subscrip-plan-comp">
        <div className="common-container">
          <div className="sel-area-filt-btn-flex-main">
            <h5>Subscription Plan</h5>

            <div className="right-filter-btns-flex-bx">
              <div onClick={() => setLocat(true)} className="sel-area-btn">
                Select Location
              </div>

              <div className="month-qua-filt-btn-flex">
                <button
                  className={
                    plan === "monthly"
                      ? "sel-filt-btn filtbtnactive"
                      : "sel-filt-btn"
                  }
                  onClick={() => handleFiltFunc("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={
                    plan === "quaterly"
                      ? "sel-filt-btn filtbtnactive"
                      : "sel-filt-btn"
                  }
                  onClick={() => handleFiltFunc("quaterly")}
                >
                  Quaterly
                </button>
              </div>
            </div>
          </div>

          <div
            className={
              plan === "quaterly"
                ? "subs-plan-table-month-qua-main-bx planactive"
                : "subs-plan-table-month-qua-main-bx"
            }
          >
            <div className="subs-plan-table subs-plan-table-month4 subs-plan-table-month">
              <table>
                <thead>
                  <tr>
                    <th>
                      {" "}
                      <h4>Feature</h4>{" "}
                    </th>

                    {subsPlans?.map(
                      ({
                        id,
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                      }) => (
                        <th>
                          {" "}
                          <div className="plan-flex-bx">
                            <h6>
                              {planeName?.slice(0, 1)?.toUpperCase() +
                                planeName?.slice(1)}
                            </h6>

                            <p>
                              {" "}
                              {monthlyPrice} <span>/Month</span>{" "}
                            </p>
                          </div>{" "}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <p>Bid</p>
                    </td>
                    {subsPlans?.map(
                      ({
                        id,
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                      }) => (
                        <td>
                          <div className="mark-check">
                            <i class="fa-solid fa-circle-check"></i>{" "}
                          </div>
                        </td>
                      )
                    )}
                  </tr>

                  <tr>
                    <td>
                      <p>Kabadiwala Manager</p>
                    </td>
                    {subsPlans?.map(
                      ({
                        id,
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                      }) => (
                        <td>
                          <div className="mark-check">
                            <i class="fa-solid fa-circle-check"></i>{" "}
                          </div>
                        </td>
                      )
                    )}
                  </tr>

                  <tr>
                    <td>
                      <p>Number of worker</p>
                    </td>
                    {subsPlans?.map(
                      ({
                        id,
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                      }) => (
                        <td>
                          <span className="round-bx">{collectorCount} </span>
                        </td>
                      )
                    )}
                  </tr>

                  <tr>
                    <td>
                      {" "}
                      <div className="area-flex">
                        {" "}
                        <p>Select Area</p>{" "}
                        <div
                          onClick={() => setLocat(true)}
                          className="add-area-icon2"
                        >
                          <i class="fa-solid fa-plus"></i>
                        </div>{" "}
                      </div>{" "}
                    </td>

                    {subsPlans?.map(
                      (
                        {
                          id,
                          planeName,
                          collectorCount,
                          monthlyPrice,
                          quaterlyPrice,
                        },
                        i
                      ) => (
                        <td>
                          <span className="round-bx"> </span>
                        </td>
                      )
                    )}
                  </tr>

                  <tr>
                    <td>
                      <p className="area-text">
                        Gandhi Nagar <i class="fa-solid fa-circle-xmark"></i>
                      </p>
                    </td>
                    {subsPlans?.map(
                      ({
                        id,
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                      }) => (
                        <td>
                          <span className="area-text2"> ₹100 </span>
                        </td>
                      )
                    )}
                  </tr>

                  <tr>
                    <td>
                      <p>Total </p>
                    </td>

                    {subsPlans?.map(
                      ({
                        id,
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                      }) => (
                        <td>
                          <span className="totaltext"> ₹47 </span>
                        </td>
                      )
                    )}
                  </tr>

                  <tr>
                    <td aria-disabled></td>

                    {subsPlans?.map(
                      ({
                        id,
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                      }) => (
                        <td>
                          {" "}
                          <button className="subs-now-btn">
                            Subscribe Now
                          </button>{" "}
                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {locat ? (
        <SelectArea locat={locat} onclickClose={() => setLocat(false)} />
      ) : null}
    </>
  );
};

export default FrenchiesSubsPlan;
