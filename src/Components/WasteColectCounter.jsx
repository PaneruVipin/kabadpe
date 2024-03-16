import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import { GetWalletDetails } from "../apis/wallet/wallet";

//created on :18-02-2024
//Created by :kunal verma
const WasteColectCounter = () => {
  const { userInfo, loading } = useSelector((state) => state.user);
  const [walletDetails, setWalletDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userInfo) {
          const data = await GetWalletDetails(userInfo.id, "user");
          setWalletDetails(data);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [userInfo]); // useEffect dependency added

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
                <h4>{walletDetails ? walletDetails.walletmoney : 0}</h4>
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
