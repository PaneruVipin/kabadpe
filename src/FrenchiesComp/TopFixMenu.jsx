import React, { useState } from "react";
import ActiveToday from "../WasteColectComp/ActiveToday";
import Holiday from "../WasteColectComp/Holiday";
import GuestPopup from "../WasteColectComp/GuestPopup";
import BuyWastePOpup from "./BuyWastePOpup";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { workerPlansFetch } from "../apis/worker/plan";
import { DateTime } from "luxon";
import { workerTodayAvailabilityFetch } from "../apis/worker/availability";
const TopFixMenu = ({
  onclickShowDetail,
  onclickRedirectPage,
  onclickRedirectNewPage,
  onclickRedirectBuyWasteTable,
  buyWasteUserInfo,
  setBuyWasteUserInfo,
  setProfBtn,
}) => {
  const [notBox, setNotBox] = useState(false);
  const [actToday, setActToday] = useState(false);
  const [buyWaste, setBuyWaste] = useState(false);
  const [holiday, setHoliday] = useState(false);
  const [guest, setGuest] = useState(false);
  const { userInfo } = useSelector((s) => s?.user);
  const { data: plans, refetch: refetchPlan } = useQuery({
    queryKey: ["workerfetcPlans:4"],
    queryFn: () => workerPlansFetch(),
  });
  const demoPlanData = !plans?.error
    ? plans?.find(({ WorkerSub }) => WorkerSub?.planType == "demo")
    : null;
  const { data: todayAvail, refetch } = useQuery({
    queryKey: ["workerTodayAvailabilityFetch:1"],
    queryFn: () => workerTodayAvailabilityFetch(),
  });
  // {todayAvail?.availabilityStatus != "leave"
  // ? "Mark You Are Not Working Today."
  // : "Mark You Are Working Today."}
  return (
    <>
      <section className="top-user-prof-search-bx top-user-prof-search-bx2">
        <div className="u-p-cont top-user-prof-search-bx-flex">
          <div className="left-user-prof-name-bx">
            <h5>
              Hi, <span>{userInfo?.fullname}</span>
            </h5>
          </div>

          <div className="right-user-prof-search-flex-bx">
            {demoPlanData?.planStatus == "active" ? (
              <div className="subscrip-text">
                <p>
                  Subscription :{" "}
                  <span>
                    {DateTime.fromISO(demoPlanData?.endDate, {
                      zone: "utc",
                    }).toFormat("ccc dd LLL yyyy")}
                  </span>{" "}
                </p>
                <button onClick={() => setProfBtn(14)} className="renew-btn">
                  Upgrade
                </button>
              </div>
            ) : null}

            <div className="u-prf-srch-bx">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search..."
              />
            </div>

            <button
              onClick={onclickShowDetail}
              className="u-prf-btn-bx u-prf-btn-bx8"
            >
              <div className="prf-icon">
                <i class="fa-regular fa-pen-to-square"></i>
              </div>
              <span> Edit Profile</span>
            </button>

            <button
              onClick={() => setActToday(true)}
              style={
                todayAvail?.availabilityStatus != "leave"
                  ? { backgroundColor: "green" }
                  : { backgroundColor: "red" }
              }
              className="u-prf-btn-bx u-prf-btn-bx5 u-prf-btn-bx8 u-prf-btn-bx11 "
            >
              <div className="prf-icon">
                <i class="fa-regular fa-user"></i>
              </div>
              <span>
                {" "}
                {todayAvail?.availabilityStatus != "leave"
                  ? "Active"
                  : "Not Active"}
              </span>
            </button>

            <button className="u-prf-btn-bx u-prf-btn-bx5 u-prf-btn-bx8 u-prf-btn-bx9">
              <div className="prf-icon">
                <i class="fa-solid fa-coins"></i>
              </div>
              <span> Sale Waste</span>
            </button>

            <button
              onClick={() => setBuyWaste(true)}
              className="u-prf-btn-bx u-prf-btn-bx5 u-prf-btn-bx8 u-prf-btn-bx6 u-prf-btn-bx66"
            >
              <div className="prf-icon">
                <i class="fa-solid fa-cart-arrow-down"></i>
              </div>
              <span> Buy Waste </span>
            </button>

            <button
              onClick={() => setHoliday(true)}
              className="u-prf-btn-bx u-prf-btn-bx5 u-prf-btn-bx8 u-prf-btn-bx10"
            >
              <div className="prf-icon">
                <i class="fa-solid fa-snowman"></i>
              </div>
              <span> Leave Request</span>
            </button>

            <div className="notif-main-box">
              <div
                onClick={() => setNotBox(!notBox)}
                className="bell-icon bell-icon2"
              >
                <i class="fa-regular fa-bell"></i>
              </div>

              <div className={notBox ? "notif-box notactive" : "notif-box"}>
                <div className="not-user-box">
                  <div className="left-not-box">
                    <img src="/images/customImg/team-2.jpg" alt="" />
                  </div>

                  <div className="right-not-box">
                    <h6>Andrew Garfield</h6>
                    <span> 29 July 2023 - 02:26 pM </span>
                  </div>
                </div>

                <div className="not-user-box">
                  <div className="left-not-box">
                    <img src="/images/customImg/team-2.jpg" alt="" />
                  </div>

                  <div className="right-not-box">
                    <h6>Andrew Garfield</h6>
                    <span> 29 July 2023 - 02:26 pM </span>
                  </div>
                </div>

                <div className="not-user-box">
                  <div className="left-not-box left-not-box2">
                    <h6>KG</h6>
                  </div>

                  <div className="right-not-box">
                    <h6>Andrew Garfield</h6>
                    <span> 29 July 2023 - 02:26 pM </span>
                  </div>
                </div>

                <div className="not-user-box">
                  <div className="left-not-box">
                    <img src="/images/customImg/team-3.jpg" alt="" />
                  </div>

                  <div className="right-not-box">
                    <h6>Andrew Garfield</h6>
                    <span> 29 July 2023 - 02:26 pM </span>
                  </div>
                </div>

                <div className="not-user-box">
                  <div className="left-not-box left-not-box2 left-not-box3">
                    <i class="fa-solid fa-house"></i>
                  </div>

                  <div className="right-not-box">
                    <h6>Andrew Garfield</h6>
                    <span> 29 July 2023 - 02:26 pM </span>
                  </div>
                </div>

                <button className="sell-all-not-btn">
                  See all notifications
                </button>
              </div>
            </div>
          </div>
        </div>
        {actToday ? (
          <ActiveToday
            refetch={refetch}
            onclickClose={() => setActToday(false)}
          />
        ) : null}
        {buyWaste ? (
          <BuyWastePOpup
            buyWasteUserInfo={buyWasteUserInfo}
            setBuyWasteUserInfo={setBuyWasteUserInfo}
            onclickRedirectBuyWasteTable={onclickRedirectBuyWasteTable}
            onclickBtn={() => setBuyWaste(false)}
          />
        ) : null}
        {holiday ? (
          <Holiday onclickCloseHoliday={() => setHoliday(false)} />
        ) : null}
        {guest ? (
          <GuestPopup onclickCloseGuest={() => setGuest(false)} />
        ) : null}
      </section>
    </>
  );
};

export default TopFixMenu;
