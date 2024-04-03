import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import { GetWalletDetails, walletFetch } from "../apis/wallet/wallet";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

const WasteColectCounter = () => {
  const { data: wallet, refetch } = useQuery({
    queryKey: ["workerWalletFetch2"],
    queryFn: () => walletFetch(),
  });
  return (
    <>
      <section className="user-prof-counter-comp">
        <div className="u-p-cont">
          <div className="user-prof-count-grid-bx user-prof-count-grid-bx3">
            <div className="usr-prf-count-bx">
              <div className="c-icn">
                <i class="fa-solid fa-user-pen"></i>
              </div>

              <div className="u-prf-c-info">
                <h5>Appointments</h5>
                <h4>20</h4>
              </div>
            </div>

            <div className="usr-prf-count-bx">
              <div className="c-icn">
                <i class="fa-solid fa-wallet"></i>
              </div>

              <div className="u-prf-c-info">
                <h5>Wallet Balance </h5>
                <h4>{wallet?.balance || "0.00"}</h4>
              </div>
            </div>

            <div className="usr-prf-count-bx">
              <div className="c-icn">
                <i class="fa-solid fa-indian-rupee-sign"></i>
              </div>

              <div className="u-prf-c-info">
                <h5>Cash Paid</h5>
                <h4>3500</h4>
              </div>
            </div>

            <div className="usr-prf-count-bx">
              <div className="c-icn">
                <i class="fa-solid fa-dumpster"></i>
              </div>

              <div className="u-prf-c-info">
                <h5>Total Waste Collected</h5>
                <h4>1500</h4>
              </div>
            </div>

            <div className="usr-prf-count-bx">
              <div className="c-icn">
                <i class="fa-solid fa-water-ladder"></i>
              </div>

              <div className="u-prf-c-info">
                <h5>Total Waste Sold</h5>
                <h4>1500</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteColectCounter;
