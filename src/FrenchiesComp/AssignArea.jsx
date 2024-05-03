import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { workerAriaInPlansFetch, workerPlansFetch } from "../apis/worker/plan";
import { franchiseWorkersAssignArea } from "../apis/franchise/workers";
import { toast } from "react-toastify";

const AssignArea = ({ onclickCloseBx, user, refetch: refechUsers }) => {
  const [areaData, setAreaData] = useState([]);
  const [assignedIds, setAssignedIds] = useState([]);
  const { data: plans, refetch: refetchpaln } = useQuery({
    queryKey: ["franchisefetcPlans"],
    queryFn: () => workerPlansFetch(),
  });
  function findActivePlan(plans) {
    const trueObjects = plans?.filter(
      ({ endDate, planStatus }) => endDate && planStatus == "active"
    );
    if (!trueObjects?.length) {
      return null; // No true objects found
    }
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const currentDateString = currentDate.toISOString().split("T")[0];
    currentDate = new Date(currentDateString);
    const maxDateObject = trueObjects?.reduce((prev, current) => {
      return new Date(prev?.endDate) > new Date(current?.endDate) &&
        new Date(current?.startDate) <= currentDate
        ? prev
        : current;
    });
    return maxDateObject;
  }
  const getArias = async (ariaIds) => {
    const arias = await workerAriaInPlansFetch({
      ariaIds,
    });
    if (arias?.error) {
      setAreaData([]);
      return;
    }
    setAreaData(arias);
  };
  useEffect(() => {
    if (plans?.error || !plans) {
      return;
    }
    const activePlan = findActivePlan(plans);
    const ariaIds = JSON.parse(activePlan?.ariaIds || "[]");
    getArias(ariaIds);
  }, [plans]);
  const handleChange = (id) => (e) => {
    const checked = e.target.checked;
    let newAssignedIds = [...assignedIds];
    if (checked) {
      newAssignedIds.push(id);
    } else {
      newAssignedIds = newAssignedIds?.filter((e) => id != e);
    }
    setAssignedIds(newAssignedIds);
  };
  const handleSaveClick = async () => {
    const res = await franchiseWorkersAssignArea({
      id: user?.id,
      assignedAreas: assignedIds,
    });
    if (res?.error) {
      toast.error(res?.message);
    }
    onclickCloseBx();
    refechUsers();
  };
  useEffect(() => {
    const assignedAreas = JSON.parse(user?.assignedAreas || "[]");
    setAssignedIds(assignedAreas);
  }, [user]);
  return (
    <>
      <section className="vw-area-comp" onClick={onclickCloseBx}>
        <div className="vw-area-bx" onClick={(e) => e.stopPropagation()}>
          <h6>Assign Areas</h6>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginBottom: "5px",
            }}
          >
            <button onClick={handleSaveClick} className="work-area-btn">
              Save
            </button>
          </div>
          <div className="vw-area-table all-user-table">
            <table>
              <thead>
                <tr>
                  <th></th>
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
                            <input
                              checked={assignedIds?.includes(id)}
                              type="checkbox"
                              onChange={handleChange(id)}
                            />
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

export default AssignArea;
