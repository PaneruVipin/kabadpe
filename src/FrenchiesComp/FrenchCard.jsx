import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { walletFetch } from "../apis/wallet/wallet";
import { franchiseWorkersForAppoinmentFetch } from "../apis/franchise/workers";

const FrenchCard = ({ appoinmentData, todayAppoinments }) => {
  const { data: wallet, refetch } = useQuery({
    queryKey: ["franchiseWalletFetch"],
    queryFn: () => walletFetch(),
  });
  const { data: workers, refetch: refetchWorkers } = useQuery({
    queryKey: ["fetchServicableWorkersToday"],
    queryFn: () =>
      franchiseWorkersForAppoinmentFetch({
        date: new Date(),
      }),
  });
  const allActiveWorkersToday = (workers) => {
    if (workers?.error || !workers) {
      return;
    }
    const filtered = workers?.filter(({ WorkerAvailabilities }) => {
      return (
        WorkerAvailabilities?.find(
          ({ date }) =>
            new Date()?.toISOString()?.split("T")?.[0] ==
            new Date(date)?.toISOString()?.split("T")?.[0]
        )?.availabilityStatus != "leave"
      );
    });
    return filtered;
  };
  return (
    <>
      <section className="cards-grid-comp">
        <div className="cards-grid-box">
          <div className="card-box card-box3 french-card-box">
            <div className="left-card-info">
              <h6>{appoinmentData?.total}</h6>
              <p>Today's Appointments</p>
            </div>

            <div className="right-card-icon">
              <i className="fa-regular fa-bookmark"></i>
            </div>
          </div>

          <div className="card-box french-card-box">
            <div className="left-card-info">
              <h6>{appoinmentData?.pending}</h6>
              <p>Pending Appointments</p>
            </div>

            <div className="right-card-icon">
              <i className="fa-regular fa-bookmark"></i>
            </div>
          </div>

          <div className="card-box card-box2 french-card-box">
            <div className="left-card-info">
              <h6>{allActiveWorkersToday(workers)?.length || 0}</h6>
              <p>Active Workers</p>
            </div>

            <div className="right-card-icon">
              <i className="fa-regular fa-calendar-check"></i>
            </div>
          </div>

          <div className="card-box card-box3 french-card-box">
            <div className="left-card-info">
              <h6>{wallet?.balance || "0.00"}</h6>
              <p>Wallet Balance</p>
            </div>

            <div className="right-card-icon">
              <i className="fa-solid fa-right-to-bracket"></i>
            </div>
          </div>

          <div className="card-box card-box4 french-card-box">
            <div className="left-card-info">
              <h6>200</h6>
              <p>Total Waste Collected</p>
            </div>

            <div className="right-card-icon">
              <i className="fa-solid fa-arrows-turn-to-dots"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrenchCard;
