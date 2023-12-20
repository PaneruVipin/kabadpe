import React, { useState } from "react";
import addSubsPlan from "../AddSubsData";
import AddSubsEdit from "./AddSubsEdit";
import { useQuery } from "@tanstack/react-query";
import { adminSubsFetch } from "../apis/admins/subscription";

const Addsubscription = () => {
  const [subsPlanBx, setSubsPlanBx] = useState(false);
  const { data: subscription, refetch } = useQuery({
    queryKey: ["kabadpeSubscription"],
    queryFn: () => adminSubsFetch(),
  });

  return (
    <>
      <section className="add-work-comn-comp">
        <div className="add-work-btn-flex-bx">
          <h6 className="banktext mb-0">Add Work Area</h6>

          <button
            onClick={() => setSubsPlanBx(true)}
            className="add-work-btn-comn add-work-btn-comn2 addnew-work-btn"
          >
            Add New Subscription Plan
          </button>
        </div>

        <div className="all-user-table add-wrk-table">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Plan Name</th>
                <th>No. of Waste Collector</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {addSubsPlan.map((elem, id) => {
                return (
                  <>
                    <tr key={id} id={elem.id}>
                      <td>
                        <span> {elem.id} </span>
                      </td>
                      <td>
                        <span> {elem.planName} </span>
                      </td>
                      <td>
                        <span> {elem.WasteColect} </span>
                      </td>
                      <td>
                        <span> ₹{elem.Amount} </span>
                      </td>

                      <td>
                        <div className="edit-remv-btns">
                          <button
                            onClick={() => setSubsPlanBx(true)}
                            className="add-wrok-actn-btn"
                          >
                            <i class="fa-solid fa-pen-to-square"></i>
                          </button>

                          <button className="add-wrok-actn-btn">
                            <i class="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {subsPlanBx ? (
        <AddSubsEdit onclickCloseSubsPlanBx={() => setSubsPlanBx(false)} />
      ) : null}
    </>
  );
};

export default Addsubscription;
