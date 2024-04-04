import { useQuery } from "@tanstack/react-query";
import React from "react";
import { walletFetch } from "../apis/wallet/wallet";

const FrenchCard = () => {
  const { data: wallet, refetch } = useQuery({
    queryKey: ["franchiseWalletFetch"],
    queryFn: () => walletFetch(),
  });
  return (
    <>
      <section className="cards-grid-comp">
        <div className="cards-grid-box">
          <div className="card-box card-box3 french-card-box">
            <div className="left-card-info">
              <h6>25</h6>
              <p>Today's Appointments</p>
            </div>

            <div className="right-card-icon">
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>

          <div className="card-box french-card-box">
            <div className="left-card-info">
              <h6>12</h6>
              <p>Pending Appointments</p>
            </div>

            <div className="right-card-icon">
              <i class="fa-regular fa-bookmark"></i>
            </div>
          </div>

          <div className="card-box card-box2 french-card-box">
            <div className="left-card-info">
              <h6>8</h6>
              <p>Active Workers</p>
            </div>

            <div className="right-card-icon">
              <i class="fa-regular fa-calendar-check"></i>
            </div>
          </div>

          <div className="card-box card-box3 french-card-box">
            <div className="left-card-info">
              <h6>{wallet?.balance || "0.00"}</h6>
              <p>Wallet Balance</p>
            </div>

            <div className="right-card-icon">
              <i class="fa-solid fa-right-to-bracket"></i>
            </div>
          </div>

          <div className="card-box card-box4 french-card-box">
            <div className="left-card-info">
              <h6>200</h6>
              <p>Total Waste Collected</p>
            </div>

            <div className="right-card-icon">
              <i class="fa-solid fa-arrows-turn-to-dots"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrenchCard;
