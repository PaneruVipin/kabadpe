import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  franchiseCapacityFetch,
  franchiseCapacityInsert,
} from "../apis/franchise/workCapacity";

const WorkCapacity = ({
  onclickClose,
  data,
  handleSubmitClick,
  slotCapacitySuccess,
  refetchcapacity
}) => {
  const [capacity, setCapacity] = useState({});
  const slots = [
    { name: "slot1", lable: "Slot 1", id: 1 },
    { name: "slot2", lable: "Slot 2", id: 2 },
    { name: "slot3", lable: "Slot 3", id: 3 },
    { name: "slot4", lable: "Slot 4", id: 4 },
    { name: "slot5", lable: "Slot 5", id: 5 },
    { name: "slot6", lable: "Slot 6", id: 6 },
  ];

  const handleCapacityChange = (name) => (e) => {
    setCapacity((prev) => ({ ...prev, [name]: e.target.value }));
  };

  return (
    <>
      <section className="wrk-cpacity-comp" onClick={onclickClose}>
        <div className="wrk-cap-bx" onClick={(e) => e.stopPropagation()}>
          <div className="all-user-table wrk-table ">
            <table>
              <thead>
                <tr>
                  <th>Slots</th>
                  <th>Capacity / Slot</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {slotCapacitySuccess
                  ? slots.map(({ name, lable, id }) => (
                      <tr key={id}>
                        <td>{lable}</td>
                        <td>
                          {" "}
                          <div className="wrk-sel-bx">
                            <select
                              name="workcapacity"
                              id="workcapacity"
                              defaultValue={data?.[name]}
                              onChange={handleCapacityChange(name)}
                            >
                              <option value="" hidden>
                                Choose your capacity
                              </option>
                              <option value={1}> 1 </option>
                              <option value={2}> 2 </option>
                              <option value={3}> 3 </option>
                              <option value={4}> 4 </option>
                              <option value={5}> 5 </option>
                            </select>
                          </div>{" "}
                        </td>

                        <td>
                          {" "}
                          <button
                            onClick={handleSubmitClick(name,capacity)}
                            className="action-btn"
                          >
                            Submit
                          </button>{" "}
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </table>
          </div>

          <div onClick={onclickClose} className="close-btn close-btn2">
            <i class="fa-solid fa-xmark "></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkCapacity;
