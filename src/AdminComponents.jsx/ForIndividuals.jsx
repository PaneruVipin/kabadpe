import React, { useState } from "react";
import IndPlanForm from "./IndPlanForm";
import MonthlyPlan from "./MonthlyPlan";
import QuaterPlan from "./QuaterPlan";
import { useQuery } from "@tanstack/react-query";
import { adminWorkerSubsFetch } from "../apis/admins/subscription";

const ForIndividuals = ({ onSwitch, onactive, onSwitchPrev }) => {
  const [indPlanForm, setIndPlanForm] = useState(null);
  const [formType, setFormType] = useState("weekly");
  const [formval, setFormVal] = useState(null);
  const { data: plansData, refetch } = useQuery({
    queryKey: ["adminfetcWorkerSubs"],
    queryFn: () => adminWorkerSubsFetch(),
  });
  console.log("plansData plansDataplansData", plansData);
  return (
    <>
      <section className="add-work-comn-comp">
        <div className="add-work-btn-flex-bx">
          <h6 className="banktext mb-0">Subscriptions Plans </h6>
          <div className="for-french-indi-flex-btn">
            <button
              className={
                onactive === "addsubscription"
                  ? "switch-btn switchactive"
                  : "switch-btn "
              }
              onClick={onSwitchPrev}
            >
              For Frenchies
            </button>

            <button
              className={
                onactive === "individuals"
                  ? "switch-btn switchactive"
                  : "switch-btn "
              }
              onClick={onSwitch}
            >
              For Individuals
            </button>
          </div>
          <button
            // onClick={() => {
            //   setInitialUpdateValues();
            //   setSubsPlanBx(true);
            // }}
            className="add-work-btn-comn add-work-btn-comn2 addnew-work-btn"
          >
            Edit Max Individual Service Arias
          </button>
        </div>

        <div className="all-user-table add-wrk-table">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Plan Name</th>
                <th>Plan Type</th>
                <th>Fixed Price</th>
                <th>Comission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!plansData?.error ? (
                <>
                  <tr>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <span>{plansData?.A?.planeName}</span>
                    </td>
                    <td>
                      <span>Weekly</span>
                    </td>
                    <td>
                      {plansData?.A ? (
                        <span>
                          ₹ {plansData?.A?.fixedAmount}{" "}
                          <span className="mini-text"></span>{" "}
                        </span>
                      ) : null}
                    </td>
                    <td>
                      {plansData?.A ? (
                        <span>
                          {" "}
                          ₹{plansData?.A?.comissionBaseAmount}
                          <span className="plus-sign">+</span>
                          {plansData?.A?.comissionRate}%
                          <span className="mini-text"></span>
                        </span>
                      ) : null}
                    </td>
                    <td>
                      <div className="edit-remv-btns">
                        <button
                          onClick={() => {
                            setIndPlanForm(true);
                            setFormType("weekly");
                            setFormVal({
                              comissionRate: plansData?.A?.comissionRate,
                              comissionBaseAmount:
                                plansData?.A?.comissionBaseAmount,
                              fixedAmount: plansData?.A?.fixedAmount,
                              planeName: plansData?.A?.planeName,
                            });
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>2</span>
                    </td>
                    <td>
                      <span>{plansData?.B?.planeName}</span>
                    </td>
                    <td>
                      <span>Monthly</span>
                    </td>
                    <td>
                      {plansData?.B ? (
                        <span>
                          ₹ {plansData?.B?.fixedAmount}{" "}
                          <span className="mini-text"></span>{" "}
                        </span>
                      ) : null}
                    </td>
                    <td>
                      {plansData?.B ? (
                        <span>
                          {" "}
                          ₹{plansData?.B?.comissionBaseAmount}
                          <span className="plus-sign">+</span>
                          {plansData?.B?.comissionRate}%
                          <span className="mini-text"></span>
                        </span>
                      ) : null}
                    </td>
                    <td>
                      <div className="edit-remv-btns">
                        <button
                          onClick={() => {
                            setIndPlanForm(true);
                            setFormType("monthly");
                            setFormVal({
                              comissionRate: plansData?.B?.comissionRate,
                              comissionBaseAmount:
                                plansData?.B?.comissionBaseAmount,
                              fixedAmount: plansData?.B?.fixedAmount,
                              planeName: plansData?.B?.planeName,
                            });
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span>3</span>
                    </td>
                    <td>
                      <span>{plansData?.C?.planeName}</span>
                    </td>
                    <td>
                      <span>Quaterly</span>
                    </td>
                    <td>
                      {plansData?.C ? (
                        <span>
                          ₹ {plansData?.C?.fixedAmount}{" "}
                          <span className="mini-text"></span>{" "}
                        </span>
                      ) : null}
                    </td>
                    <td>
                      {plansData?.C ? (
                        <span>
                          {" "}
                          ₹{plansData?.C?.comissionBaseAmount}
                          <span className="plus-sign">+</span>
                          {plansData?.C?.comissionRate}%
                          <span className="mini-text"></span>
                        </span>
                      ) : null}
                    </td>
                    <td>
                      <div className="edit-remv-btns">
                        <button
                          onClick={() => {
                            setIndPlanForm(true);
                            setFormType("quaterly");
                            setFormVal({
                              comissionRate: plansData?.C?.comissionRate,
                              comissionBaseAmount:
                                plansData?.C?.comissionBaseAmount,
                              fixedAmount: plansData?.C?.fixedAmount,
                              planeName: plansData?.C?.planeName,
                            });
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>

      {indPlanForm ? (
        <IndPlanForm
          formType={formType}
          formval={formval}
          refetch={refetch}
          onClickClose={() => setIndPlanForm(null)}
        />
      ) : null}
    </>
  );
};

export default ForIndividuals;
