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
import { HiMenuAlt3 } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
const TopFixMenu = ({
  onclickShowDetail,
  onclickRedirectPage,
  onclickRedirectNewPage,
  onclickRedirectBuyWasteTable,
  buyWasteUserInfo,
  setBuyWasteUserInfo,
  setProfBtn,
  onClickSide,
  onSideMenu,
}) => {
  const [notBox, setNotBox] = useState(false);
  const [actToday, setActToday] = useState(false);
  const [buyWaste, setBuyWaste] = useState(false);
  const [holiday, setHoliday] = useState(false);
  const [guest, setGuest] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [mobSearch, setMobSearch] = useState(false);

  const { userInfo } = useSelector((s) => s?.user);
  const { data: plans, refetch: refetchPlan } = useQuery({
    queryKey: ["franchisefetcPlans:4"],
    queryFn: () => workerPlansFetch(),
  });

  const demoPlanData = !plans?.error
    ? plans?.find(({ WorkerSub }) => WorkerSub?.planType == "demo")
    : null;
  const { data: todayAvail, refetch } = useQuery({
    queryKey: ["workerTodayAvailabilityFetch:1"],
    queryFn: () => workerTodayAvailabilityFetch(),
  });

  return (
    <>
      <section className="top-user-prof-search-bx top-user-prof-search-bx2">
        <div className="u-p-cont top-user-prof-search-bx-flex">
          <div className="left-user-prof-name-bx">
            <h5>
              Hi, <span>{userInfo?.fullname}</span>
            </h5>

            <button onClick={onClickSide} className="w-menu-bar-btn">
              {onSideMenu ? (
                <HiMenuAlt3 className="menu-icon" />
              ) : (
                <FaArrowLeftLong className="menu-icon arrow-icon" />
              )}
            </button>
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
                <i className="fa-regular fa-pen-to-square"></i>
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
                <i className="fa-regular fa-user"></i>
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
                <i className="fa-solid fa-coins"></i>
              </div>
              <span> Sale Waste</span>
            </button>

            <button
              onClick={() => setBuyWaste(true)}
              className="u-prf-btn-bx u-prf-btn-bx5 u-prf-btn-bx8 u-prf-btn-bx6 u-prf-btn-bx66"
            >
              <div className="prf-icon">
                <i className="fa-solid fa-cart-arrow-down"></i>
              </div>
              <span> Buy Waste </span>
            </button>

            <button
              onClick={() => setHoliday(true)}
              className="u-prf-btn-bx u-prf-btn-bx5 u-prf-btn-bx8 u-prf-btn-bx10"
            >
              <div className="prf-icon">
                <i className="fa-solid fa-snowman"></i>
              </div>
              <span> Leave Request</span>
            </button>

            <div
              onClick={() => setSideBar(!sideBar)}
              className="notif-main-box notif-main-box2"
            >
              <div className="bell-icon bell-icon2">
                <i className="fa-solid fa-bars-staggered"></i>
              </div>
            </div>

            <div
              onClick={() => setMobSearch(!mobSearch)}
              className="notif-main-box notif-main-box2"
            >
              <div className="bell-icon bell-icon2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>

            <div className="notif-main-box">
              <div
                onClick={() => setNotBox(!notBox)}
                className="bell-icon bell-icon2"
              >
                <i className="fa-regular fa-bell"></i>
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
                    <i className="fa-solid fa-house"></i>
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

      {mobSearch && (
        <div className="w-search-bar-main">
          <div className="search-w-bar-bx">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here..."
            />
            <div className="w-serch-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      )}

      <div className={sideBar ? "side-bar-bx sidebaractive" : "side-bar-bx"}>
        <div className="side-bar-list">
          <li onClick={onclickShowDetail} className="side-bar-item">
            <i className="fa-regular fa-pen-to-square s-i"></i>
            <span>Edit Profile</span>
          </li>
          <li onClick={() => setActToday(true)} className="side-bar-item">
            <i className="fa-regular fa-user"></i>
            <span>
              {" "}
              {todayAvail?.availabilityStatus != "leave"
                ? "Active"
                : "Not Active"}
            </span>
          </li>
          <li className="side-bar-item">
            <i className="fa-solid fa-coins s-i"></i>
            <span>Sale Waste</span>
          </li>
          <li onClick={() => setBuyWaste(true)} className="side-bar-item">
            <i className="fa-solid fa-cart-arrow-down s-i"></i>
            <span>Buy Waste</span>
          </li>
          <li onClick={() => setHoliday(true)} className="side-bar-item">
            <i className="fa-solid fa-snowman s-i"></i>
            <span>Leave Request</span>
          </li>
        </div>
      </div>
    </>
  );
};

export default TopFixMenu;
