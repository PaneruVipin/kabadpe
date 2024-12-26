import React, { useState } from "react";
import IndPlanForm from "./IndPlanForm";
import MonthlyPlan from "./MonthlyPlan";
import QuaterPlan from "./QuaterPlan";
import { useQuery } from "@tanstack/react-query";
import { adminWorkerSubsFetch } from "../apis/admins/subscription";

const ForIndividuals = ({ onSwitch, onactive, onSwitchPrev }) => {
  const [indPlanForm, setIndPlanForm] = useState(null);
  const [formType, setFormType] = useState("demo");
  const [formval, setFormVal] = useState(null);
  const { data: plansData, refetch } = useQuery({
    queryKey: ["adminfetcWorkerSubs"],
    queryFn: () => adminWorkerSubsFetch(),
  });
  return (
    <>
      <section className="add-work-comn-comp">
        <div style={{ position: "relative" }} className="add-work-btn-flex-bx">
          <button
            style={{ position: "absolute", right: "0px", top: "-80px" }}
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
                      <span>Demo</span>
                    </td>
                    <td>
                      {plansData?.A ? (
                        <span>
                          ₹ {plansData?.A?.planAmount}{" "}
                          <span className="mini-text"></span>{" "}
                        </span>
                      ) : null}
                    </td>
                    <td>
                      {/* {plansData?.A ? (
                        <span>
                          {" "}
                          ₹{plansData?.A?.comissionBaseAmount}
                          <span className="plus-sign">+</span>
                          {plansData?.A?.comissionRate}%
                          <span className="mini-text"></span>
                        </span>
                      ) : null} */}
                    </td>
                    <td>
                      <div className="edit-remv-btns">
                        <button
                          onClick={() => {
                            setIndPlanForm(true);
                            setFormType("demo");
                            setFormVal({
                              planAmount: plansData?.A?.planAmount,
                              additionalAmount: plansData?.A?.additionalAmount,
                              planeName: plansData?.A?.planeName,
                            });
                          }}
                        >
                          Edit
                        </button>
                        <span>Assign</span>
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
                      <span>Fixed</span>
                    </td>
                    <td>
                      {plansData?.B ? (
                        <span>
                          ₹ {plansData?.B?.planAmount}{" "}
                          <span className="mini-text"></span>{" "}
                        </span>
                      ) : null}
                    </td>
                    <td>
                      {/* {plansData?.B ? (
                        <span>
                          {" "}
                          ₹{plansData?.B?.comissionBaseAmount}
                          <span className="plus-sign">+</span>
                          {plansData?.B?.comissionRate}%
                          <span className="mini-text"></span>
                        </span>
                      ) : null} */}
                    </td>
                    <td>
                      <div className="edit-remv-btns">
                        <button
                          onClick={() => {
                            setIndPlanForm(true);
                            setFormType("fixed");
                            setFormVal({
                              planAmount: plansData?.B?.planAmount,
                              additionalAmount: plansData?.B?.additionalAmount,
                              planeName: plansData?.B?.planeName,
                            });
                          }}
                        >
                          Edit
                        </button>
                        <span>Assign</span>
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
                      <span>Comission</span>
                    </td>
                    <td>
                      {plansData?.C ? (
                        <span>
                          ₹ {plansData?.C?.planAmount}{" "}
                          <span className="mini-text"></span>{" "}
                        </span>
                      ) : null}
                    </td>
                    <td>
                      {plansData?.C ? (
                        <span>
                          {plansData?.C?.additionalAmount}%
                          <span className="mini-text"></span>
                        </span>
                      ) : null}
                    </td>
                    <td>
                      <div className="edit-remv-btns">
                        <button
                          onClick={() => {
                            setIndPlanForm(true);
                            setFormType("comission");
                            setFormVal({
                              planAmount: plansData?.C?.planAmount,
                              additionalAmount: plansData?.C?.additionalAmount,
                              planeName: plansData?.C?.planeName,
                            });
                          }}
                        >
                          Edit
                        </button>
                        <span>Assign</span>
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
