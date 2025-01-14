import React, { useState } from "react";
import addSubsPlan from "../AddSubsData";
import AddSubsEdit from "./AddSubsEdit";
import { useQuery } from "@tanstack/react-query";
import { adminSubsDelete, adminSubsFetch } from "../apis/admins/subscription";

const Addsubscription = ({ onSwitch, onactive, onSwitchPrev }) => {
  const [subsPlanBx, setSubsPlanBx] = useState(false);
  const [btnActive, setBtnActive] = useState("");
  const [initialUpdateValues, setInitialUpdateValues] = useState({});
  const { data: subscription, refetch } = useQuery({
    queryKey: ["kabadpeSubscription"],
    queryFn: () => adminSubsFetch(),
  });

  return (
    <>
      <section className="add-work-comn-comp">
        <div style={{position:"relative"}} className="add-work-btn-flex-bx">
       
          <button
          style={{position:"absolute",right:"0px",top:"-80px"}}
            onClick={() => {
              setInitialUpdateValues();
              setSubsPlanBx(true);
            }}
          
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
                <th>Monthly Price</th>
                <th>Quaterly Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!subscription?.error && subscription
                ? subscription?.map(
                    (
                      {
                        planeName,
                        collectorCount,
                        monthlyPrice,
                        quaterlyPrice,
                        id,
                      },
                      i
                    ) => {
                      return (
                        <>
                          <tr key={i}>
                            <td>
                              <span> {i + 1} </span>
                            </td>
                            <td>
                              <span> {planeName} </span>
                            </td>
                            <td>
                              <span> {collectorCount} </span>
                            </td>
                            <td>
                              <span> ₹{monthlyPrice} </span>
                            </td>
                            <td>
                              <span> ₹{quaterlyPrice} </span>
                            </td>
                            <td>
                              <div className="edit-remv-btns">
                                <button
                                  onClick={() => {
                                    setInitialUpdateValues({
                                      planeName,
                                      collectorCount,
                                      monthlyPrice,
                                      quaterlyPrice,
                                      id,
                                    });
                                    setSubsPlanBx(true);
                                  }}
                                  className="add-wrok-actn-btn"
                                >
                                  <i className="fa-solid fa-pen-to-square"></i>
                                </button>

                                <button
                                  onClick={async () => {
                                    await adminSubsDelete(id);
                                    refetch();
                                  }}
                                  className="add-wrok-actn-btn"
                                >
                                  <i className="fa-solid fa-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    }
                  )
                : null}
            </tbody>
          </table>
        </div>
      </section>

      {subsPlanBx ? (
        <AddSubsEdit
          values={initialUpdateValues}
          refetch={refetch}
          onclickCloseSubsPlanBx={() => setSubsPlanBx(false)}
        />
      ) : null}
    </>
  );
};

export default Addsubscription;
