import { useQuery } from "@tanstack/react-query";
import React from "react";
import { workerAriaInPlansFetch } from "../apis/worker/plan";

const ViewArea = ({ onclickCloseBx, areaData }) => {
  return (
    <>
      <section className="vw-area-comp" onClick={onclickCloseBx}>
        <div className="vw-area-bx" onClick={(e) => e.stopPropagation()}>
          <h6>View Area</h6>

          <div className="vw-area-table all-user-table">
            <table>
              <thead>
                <tr>
                  <th>SNO.</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Pin</th>
                  <th>Area</th>
                  <th>Subarea</th>
                </tr>
              </thead>
              <tbody>
                {areaData?.map(
                  (
                    {
                      ariaName,
                      ariaStatus,
                      city,
                      id,
                      pincode,
                      state,
                      subAriaName,
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
                            <span> {state} </span>{" "}
                          </td>
                          <td>
                            {" "}
                            <span> {city} </span>{" "}
                          </td>
                          <td>
                            {" "}
                            <span> {pincode} </span>{" "}
                          </td>
                          <td>
                            {" "}
                            <span> {ariaName} </span>{" "}
                          </td>
                          <td>
                            {" "}
                            <span> {subAriaName} </span>{" "}
                          </td>
                        </tr>
                      </>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>

          <div onClick={onclickCloseBx} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewArea;
