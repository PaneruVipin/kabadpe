import React, { useEffect, useRef, useState } from "react";
import SelectArea from "./SelectArea";
import { useQuery } from "@tanstack/react-query";
import {
  franchisePlanRequest,
  franchiseSubscriptionsFetch,
} from "../apis/franchise/plans";

const FrenchiesSubsPlan = ({ onclickRedirect }) => {
  const [plan, setPlan] = useState("monthly");
  const [locat, setLocat] = useState(false);
  const [selectedArias, setSelectedArias] = useState([]);
  const [errors, setErrors] = useState("");
  const handleFiltFunc = (getplan) => {
    setPlan(getplan);
  };
  const { data: subsPlans, refetch } = useQuery({
    queryKey: ["subsPlans"],
    queryFn: () => franchiseSubscriptionsFetch(),
  });
  const handleRemoveAriaClick = (id) => () => {
    const newArias = selectedArias.filter((s) => s.id != id);
    setSelectedArias(newArias);
  };
  const ariasMonthlyTotal = selectedArias.reduce((a, b) => {
    return a + parseFloat(b?.monthlyPrice);
  }, 0);
  const ariasQuaterlyTotal = selectedArias.reduce((a, b) => {
    return a + parseFloat(b?.quaterlyPrice);
  }, 0);
  const handelSubscribeClick = (subscriptionId) => async () => {
    setErrors("");
    if (!selectedArias?.length) {
      alert("Please, Choose Atleast 1 Area");
      setErrors("Please, Choose Atleast 1 Area");
      return;
    }
    const ariaIds = selectedArias.map(({ id }) => id);
    const planeType = plan;
    const res = await franchisePlanRequest({
      subscriptionId,
      ariaIds,
      planeType,
    });
    if (res?.error) {
      alert(res?.message);
      setErrors(res?.message);
      return;
    }
    onclickRedirect();
  };
  return (
    <>
      <section className="fren-subscrip-plan-comp">
        <div className="common-container">
          <div className="sel-area-filt-btn-flex-main">
            <h5>Subscription Plan </h5>
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
              // plan === "quaterly" ?
              // "subs-plan-table-month-qua-main-bx planactive":
              "subs-plan-table-month-qua-main-bx"
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

                    {!subsPlans?.error
                      ? subsPlans?.map(
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
                                  {plan == "monthly"
                                    ? monthlyPrice
                                    : quaterlyPrice}{" "}
                                  <span>
                                    {plan == "monthly"
                                      ? "/Monthly"
                                      : "/Quaterly"}
                                  </span>{" "}
                                </p>
                              </div>{" "}
                            </th>
                          )
                        )
                      : null}
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

                  {selectedArias?.map(
                    ({
                      ariaName,
                      ariaStatus,
                      city,
                      id,
                      monthlyPrice,
                      pincode,
                      quaterlyPrice,
                      state,
                      subAriaName,
                    }) => (
                      <tr>
                        <td>
                          <p className="area-text">
                            {subAriaName}{" "}
                            <i
                              onClick={handleRemoveAriaClick(id)}
                              class="fa-solid fa-circle-xmark"
                            ></i>
                          </p>
                        </td>
                        {subsPlans?.map(({ id, planeName, collectorCount }) => (
                          <td>
                            <span className="area-text2">
                              {" "}
                              ₹
                              {plan == "monthly"
                                ? monthlyPrice
                                : quaterlyPrice}{" "}
                            </span>
                          </td>
                        ))}
                      </tr>
                    )
                  )}

                  {selectedArias?.length ? (
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
                            <span className="totaltext">
                              {" "}
                              ₹
                              {plan == "monthly"
                                ? ariasMonthlyTotal + parseFloat(monthlyPrice)
                                : ariasQuaterlyTotal +
                                  parseFloat(quaterlyPrice)}{" "}
                            </span>
                          </td>
                        )
                      )}
                    </tr>
                  ) : null}

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
                          <button
                            onClick={handelSubscribeClick(id)}
                            className="subs-now-btn"
                          >
                            Subscribe Now
                          </button>{" "}
                        </td>
                      )
                    )}
                  </tr>
                </tbody>
              </table>

              {/* {errors ? <p style={{ color: "red" ,textAlign:"center"}}>{errors}</p> : null} */}
            </div>
          </div>
        </div>
      </section>
      {locat ? (
        <SelectArea
          selectedArias={selectedArias}
          setSelectedArias={setSelectedArias}
          onclickClose={() => setLocat(false)}
        />
      ) : null}
    </>
  );
};

export default FrenchiesSubsPlan;
