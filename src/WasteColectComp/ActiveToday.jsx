import React, { useEffect, useRef } from "react";
import {
  workerMarkActiveToday,
  workerTodayAvailabilityFetch,
} from "../apis/worker/availability";
import { useQuery } from "@tanstack/react-query";

const ActiveToday = ({ onclickClose, todayTrue, refetch: refetchStatus }) => {
  const handleMarkActiveToday = async () => {
    const res = await workerMarkActiveToday();
    if (!res?.error) {
      onclickClose();
      refetch();
      refetchStatus();
    }
  };
  const { data: todayAvail, refetch } = useQuery({
    queryKey: ["workerTodayAvailabilityFetch"],
    queryFn: () => workerTodayAvailabilityFetch(),
  });
  return (
    <>
      <section className="comn-popup-comp" onClick={onclickClose}>
        <div className="comn-popup-bx" onClick={(e) => e.stopPropagation()}>
          <h6>
            {todayAvail?.availabilityStatus != "leave"
              ? "Mark You Are Not Working Today."
              : "Mark You Are Working Today."}
          </h6>

          <button onClick={handleMarkActiveToday} className="popup-action-btn">
            Confirm
          </button>

          <div onClick={onclickClose} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActiveToday;
