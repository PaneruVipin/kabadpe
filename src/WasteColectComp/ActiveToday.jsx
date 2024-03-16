import React, { useEffect, useRef } from "react";
import {
  workerMarkActiveToday,
  workerTodayAvailabilityFetch,
} from "../apis/worker/availability";
import { useQuery } from "@tanstack/react-query";

const ActiveToday = ({ onclickClose, todayTrue }) => {
  const handleMarkActiveToday = async () => {
    const res = await workerMarkActiveToday();
    if (!res?.error) {
      onclickClose();
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
            {todayAvail?.availabilityStatus != "active"
              ? "Mark you are working today."
              : "Allready Marked working today."}
          </h6>

          {todayAvail?.availabilityStatus != "active" ? (
            <button
              onClick={handleMarkActiveToday}
              className="popup-action-btn"
            >
              Confirm
            </button>
          ) : null}

          <div onClick={onclickClose} className="close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActiveToday;
