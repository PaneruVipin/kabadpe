import React, { useState } from "react";
import addworkareaData from "../AddWorkAreaData";
import Addworkareaedit from "./Addworkareaedit";
import { adminAriaDelete, adminAriaFetch } from "../apis/admins/arias";
import { useQuery } from "@tanstack/react-query";
import { IoDuplicate } from "react-icons/io5";

const AddWorkArea = () => {
  const [editFormVal, setEditFormval] = useState({});
  const [addWorkArea, setAddWorkArea] = useState(false);

  const { data: arias, refetch } = useQuery({
    queryKey: ["ariasFetch"],
    queryFn: () => adminAriaFetch(),
  });

  const handleDeleteAriaClick = async (id) => {
    await adminAriaDelete(id);
    refetch();
  };
  return (
    <>
      <section className="add-work-comn-comp">
        <div className="add-work-btn-flex-bx">
          <h6 className="banktext mb-0">Add Work Area</h6>

          <button
            onClick={() => {
              setEditFormval(null), setAddWorkArea(true);
            }}
            className="add-work-btn-comn addnew-work-btn"
          >
            Add New Work Area
          </button>
        </div>

        <div className="all-user-table add-wrk-table">
          <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>State</th>
                <th>City</th>
                <th>Zip Code</th>
                <th>Area </th>
                <th>Sub Area</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {!arias?.error
                ? arias?.map(
                    (
                      {
                        id,
                        subAriaName,
                        pincode,
                        city,
                        state,
                        ariaName,
                        monthlyPrice,
                        quaterlyPrice,
                        weeklyPrice,
                      },
                      i
                    ) => (
                      <>
                        <tr key={i}>
                          <td>
                            <span> {i + 1} </span>
                          </td>
                          <td>
                            <span> {state} </span>
                          </td>
                          <td>
                            <span> {city} </span>
                          </td>
                          <td>
                            <span> {pincode} </span>
                          </td>
                          <td>
                            <span> {ariaName} </span>
                          </td>
                          <td>
                            <span> {subAriaName} </span>
                          </td>

                          <td>
                            <div className="edit-remv-btns">
                              <button
                                onClick={() => {
                                  setEditFormval({
                                    id,
                                    state,
                                    subAriaName,
                                    pincode,
                                    city,
                                    ariaName,
                                    monthlyPrice,
                                    quaterlyPrice,
                                    weeklyPrice,
                                  }),
                                    setAddWorkArea(true);
                                }}
                                className="add-wrok-actn-btn"
                              >
                                <i class="fa-solid fa-pen-to-square"></i>
                              </button>

                              <button
                                onClick={() => handleDeleteAriaClick(id)}
                                className="add-wrok-actn-btn"
                              >
                                <i class="fa-solid fa-trash"></i>
                              </button>
                              <button
                                onClick={() => {
                                  setEditFormval({
                                    state,
                                    pincode,
                                    city,
                                    ariaName,
                                    monthlyPrice,
                                    quaterlyPrice,
                                    weeklyPrice,
                                  }),
                                    setAddWorkArea(true);
                                }}
                                className="add-wrok-actn-btn"
                              >
                                <IoDuplicate />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </>
                    )
                  )
                : null}
            </tbody>
          </table>
        </div>
      </section>

      {addWorkArea ? (
        <Addworkareaedit
          workAreaTrue={addWorkArea}
          onclickCloseAddWorkEdit={() => setAddWorkArea(false)}
          values={editFormVal}
          refetch={refetch}
        />
      ) : null}
    </>
  );
};

export default AddWorkArea;
