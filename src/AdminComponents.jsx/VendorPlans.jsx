import React, { useState } from "react";
import IndPlanForm from "./IndPlanForm";
import MonthlyPlan from "./MonthlyPlan";
import QuaterPlan from "./QuaterPlan";
import { useQuery } from "@tanstack/react-query";
import { adminWorkerSubsFetch } from "../apis/admins/subscription";
import AddVendorPlan from "./AddVendorPlan";
import {
  adminVendorPlanAdd,
  adminVendorPlansFetch,
} from "../apis/admins/vendorPlans";

const VendorPlans = ({ onSwitch, onactive, onSwitchPrev }) => {
  const [indPlanForm, setIndPlanForm] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(undefined);
  const [formType, setFormType] = useState("demo");
  const [formval, setFormVal] = useState(null);
  const { data: plansData, refetch } = useQuery({
    queryKey: ["adminVendorPlansFetch"],
    queryFn: () => adminVendorPlansFetch(),
  });
  return (
    <>
      <section className="add-work-comn-comp">
        <div style={{ position: "relative" }} className="add-work-btn-flex-bx">
          <button
            style={{ position: "absolute", right: "0px", top: "-80px" }}
            onClick={() => {
              setSelectedPlan(null);
            }}
            className="add-work-btn-comn add-work-btn-comn2 addnew-work-btn"
          >
            Add Plan
          </button>
        </div>

        <div className="all-user-table add-wrk-table">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Plan Name</th>
                <th>Monthly Price</th>
                <th>Yearly Price</th>
                <th>Trail Days</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!plansData?.error
                ? plansData?.map(
                    (
                      {
                        id,
                        monthlyPrice,
                        yearlyPrice,
                        trialDuration,
                        planeName,
                      },
                      index
                    ) => (
                      <tr key={id}>
                        <td>
                          <span>{index + 1}</span>
                        </td>
                        <td>
                          <span>{planeName}</span>
                        </td>
                        <td>
                          <span> ₹ {monthlyPrice}</span>
                        </td>
                        <td>
                          <span> ₹ {yearlyPrice}</span>
                        </td>
                        <td>
                          <span> {trialDuration} Days</span>
                        </td>
                        <td>
                          <div className="edit-remv-btns">
                            <button
                              onClick={() => {
                                setSelectedPlan({
                                  id,
                                  monthlyPrice,
                                  yearlyPrice,
                                  trialDuration,
                                  planeName,
                                });
                              }}
                              className="add-wrok-actn-btn"
                            >
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>

                            <button
                              onClick={async () => {
                                adminVendorPlanAdd({
                                  id,
                                  planStatus: "delete",
                                });
                                refetch();
                              }}
                              className="add-wrok-actn-btn"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )
                : null}
            </tbody>
          </table>
        </div>
      </section>

      {selectedPlan !== undefined ? (
        <AddVendorPlan
          values={selectedPlan}
          onClose={() => {
            setSelectedPlan(undefined);
            refetch();
          }}
        />
      ) : null}
    </>
  );
};

export default VendorPlans;
