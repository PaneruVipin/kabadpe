import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import "../style/Admin.css";
import "../style/WasteColect.css";
import { NavLink } from "react-router-dom";
import WasteDashboard from "./WasteDashboard";
import WasteAppointment from "./WasteAppointment";
import WasteDetail from "./WasteDetail";
import WasteWorkLocat from "./WasteWorkLocat";
import WasteColectin from "./WasteColectin";
import WasteSales from "./WasteSales";
import WasteWallet from "./WasteWallet";
import UserProfGridComp from "./UserProfGridComp";
import WasteColectSearch from "./WasteColectSearch";
import WasteCollectersReviews from "./WasteCollectersReviews";
import MyReviews from "./MyReviews";
import Vendor from "./Vendor";
import CompltProfPopup from "./CompltProfPopup";
import { useSelector } from "react-redux";
import BuyWasteTable from "../WasteColectComp/BuyWasteTable";
import GuestBuyWaste from "../WasteColectComp/GuestBuyWaste";
import ClearStock from "./ClearStock";
import FrenchiesSubsPlan from "../FrenchiesComp/FrenchiesSubsPlan";
import FrenchSubscriptionPlanTwo from "../FrenchiesComp/FrenchSubscriptionPlanTwo";
import WasteSubsPlan from "../FrenchiesComp/WasteSubsPlan";
import TopFixMenu from "../FrenchiesComp/TopFixMenu";
import Redirect from "./Auth/RedirectIfLogout";
import { logout } from "../lib/logout";
import { useQuery } from "@tanstack/react-query";
import { workerPlansFetch } from "../apis/worker/plan";
import { workerFranchiseName } from "../apis/worker/user";

const Wastecollectdashboard = ({}) => {
  const { userInfo, loading } = useSelector((s) => s.user);
  const [profBtn, setProfBtn] = useState(1);
  const [profChange, setProfChange] = useState(false);
  const [buyWasteUserInfo, setBuyWasteUserInfo] = useState({});
  const [wasteNavBtn, setWasteNavBtn] = useState(0);

  const filterTab = (index) => {
    setProfBtn(index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = (buttonName) => {
    setWasteNavBtn(buttonName === wasteNavBtn ? null : buttonName);
  };

  const getButtonClassName = (buttonName) => {
    return buttonName === wasteNavBtn ? "u-prf-bx profactive" : "u-prf-bx";
  };

  const getButonClasnameTwo = (butonIndex) => {
    return butonIndex === wasteNavBtn
      ? "waste-dropdwn-list-bx wastedropdwnlistactive"
      : "waste-dropdwn-list-bx";
  };

  // const handleViewComp = (compName) => {
  //   setComponent(compName);
  // };
  const { data: plans, refetch } = useQuery({
    queryKey: ["workerfetcPlans:2"],
    queryFn: () => workerPlansFetch(),
  });
  const { data: companyName, refetchCompanyName } = useQuery({
    queryKey: ["companyName"],
    queryFn: () => workerFranchiseName(),
  });
  return (
    <>
      <TopFixMenu
        setProfBtn={setProfBtn}
        buyWasteUserInfo={buyWasteUserInfo}
        setBuyWasteUserInfo={setBuyWasteUserInfo}
        onclickRedirectBuyWasteTable={() => filterTab(10)}
      />
      <Redirect role="kabadCollector" path="/auth/collector" />
      <div className="user-profile-side-nav-main waste-colect-db-side-nav-main">
        <div className="user-prof-main-bx">
          <div className="user-profi-img ">
            <img
              src={
                !loading
                  ? userInfo?.profileImage || "/images/customImg/836.jpg"
                  : ""
              }
              alt=""
            />
            <div onClick={() => filterTab(3)} className="prof-edit-text-btn">
              Edit
            </div>
          </div>

          <h6>{userInfo?.fullname}</h6>
          <span className="em-text">
            <i class="fa-regular fa-envelope"></i>
            {userInfo?.email}
          </span>

          <span className="num-text">
            <i class="fa-solid fa-mobile-screen"></i>
            {userInfo?.phoneNumber}
          </span>
          <span className="em-text">
            {userInfo?.franchiseId
              ? !companyName?.error
                ? companyName
                : ""
              : "KabadPe"}
          </span>
          <div className="rating-prof">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
          </div>

          <div className="prog-edit-prof-flex-bx">
            <div className="prog-bar-bx">
              <span>Complete Your Profile</span>
              <span className="prog-num">70%</span>
            </div>

            <div
              onClick={() => filterTab(3)}
              className="edit-prof-btn"
              title="edit profile"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
        </div>

        <div className="user-prof-menu-main-flex-bx">
          <button
            onClick={() => filterTab(1)}
            className={profBtn === 1 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            Dashboard
          </button>

          <button
            onClick={() => filterTab(7)}
            className={profBtn === 7 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-wallet"></i>
            </div>
            My Transactions
          </button>

          <button
            onClick={() => filterTab(2)}
            className={profBtn === 2 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-file-pen"></i>
            </div>
            My Appointments
          </button>

          {!plans?.error && !plans?.length ? (
            <button
              onClick={() => filterTab(14)}
              className={profBtn === 14 ? "u-prf-bx profactive" : "u-prf-bx"}
            >
              <div className="u-prf-tab-icon">
                <i class="fa-solid fa-seedling"></i>
              </div>
              My Plans
            </button>
          ) : null}

          <button
            onClick={() => filterTab(13)}
            className={profBtn === 13 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-layer-group"></i>
            </div>
            Subscriptions
          </button>

          <button
            onClick={() => filterTab(3)}
            className={profBtn === 3 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-user"></i>
            </div>
            My Details
          </button>

          <div className="waste-colect-dropdwn-btn">
            <button
              onClick={() => handleButtonClick(12)}
              className={getButtonClassName(12)}
            >
              <div className="u-prf-tab-icon">
                <i class="fa-solid fa-money-bill-trend-up"></i>
              </div>
              Manage Waste
            </button>
            <div className={getButonClasnameTwo(12)}>
              <li
                onClick={() => setProfBtn(17)}
                className={
                  profBtn === 17
                    ? "waste-nav-li-btn wastenavactive"
                    : "waste-nav-li-btn"
                }
              >
                <span>All Waste Pickups</span>
              </li>
              <li
                onClick={() => setProfBtn(19)}
                className={
                  profBtn === 19
                    ? "waste-nav-li-btn wastenavactive"
                    : "waste-nav-li-btn"
                }
              >
                <span>Current Waste</span>
              </li>
            </div>
          </div>

          <div className="waste-colect-dropdwn-btn">
            <button
              onClick={() => handleButtonClick(21)}
              className={getButtonClassName(21)}
            >
              <div className="u-prf-tab-icon">
                <i class="fa-solid fa-money-bill-trend-up"></i>
              </div>
              Safety and Skills
            </button>
            <div className={getButonClasnameTwo(21)}>
              <li
                // onClick={() => setProfBtn(17)}
                className={
                  profBtn === 17
                    ? "waste-nav-li-btn wastenavactive"
                    : "waste-nav-li-btn"
                }
              >
               <NavLink to="https://drive.google.com/drive/folders/1rWU7sPNXH_Z5-3uMaylUSHIE2-IZ_y7-?usp=sharing" target="_blank"> <span>Resource Material (सिखने का लिंक)</span> </NavLink> 
              </li>
              <li
                // onClick={() => setProfBtn(25)}
                className={
                  profBtn === 25
                    ? "waste-nav-li-btn wastenavactive"
                    : "waste-nav-li-btn"
                }
              >
               <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSeq8i1cjVusDUyZK6RldOdR3rcM_1CuctbPXqLO-3pFMeIZRQ/viewform" target="_blank"> <span>Certificate Test  </span> </NavLink>
              </li>
            </div>
          </div>

          {/* <button
            onClick={() => filterTab(12)}
            className={profBtn === 12 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-money-bill-trend-up"></i>
            </div>
            Clear Stock
          </button> */}

          <button
            onClick={() => filterTab(8)}
            className={profBtn === 8 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-regular fa-comment-dots"></i>
            </div>
            My Reviews
          </button>

          {/* <button
            onClick={() => filterTab(4)}
            className={profBtn === 4 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-street-view"></i>
            </div>
            My Work Location
          </button> */}

          {/* <button
            onClick={() => filterTab(5)}
            className={profBtn === 5 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-dumpster"></i>
            </div>
            Waste Collection
          </button> */}

          {/* <button
            onClick={() => filterTab(6)}
            className={profBtn === 6 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-capsules"></i>
            </div>
            My sales history
          </button> */}
        </div>

        <div
          onClick={logout}
          className="profile-log-out-btn profile-log-out-btn2"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Log Out</span>
        </div>
      </div>

      {profBtn === 1 ? (
        <WasteDashboard
          onclickRedirectGuestBuyWaste={() => filterTab(11)}
          onclickShowDetailComp={() => filterTab(3)}
          onclickRedirectBuyWasteTable={() => filterTab(10)}
          setProfBtn={setProfBtn}
          buyWasteUserInfo={buyWasteUserInfo}
          setBuyWasteUserInfo={setBuyWasteUserInfo}
        />
      ) : null}
      {profBtn === 2 ? (
        <WasteAppointment
          setProfBtn={setProfBtn}
          buyWasteUserInfo={buyWasteUserInfo}
          setBuyWasteUserInfo={setBuyWasteUserInfo}
        />
      ) : null}
      {profBtn === 3 ? <WasteDetail /> : null}
      {profBtn === 4 ? <WasteWorkLocat /> : null}
      {profBtn === 5 ? <WasteColectin /> : null}
      {profBtn === 6 ? <WasteSales /> : null}
      {profBtn === 7 ? <WasteWallet /> : null}
      {profBtn === 8 ? <MyReviews /> : null}
      {profBtn === 9 ? <Vendor /> : null}
      {profBtn === 10 ? (
        <BuyWasteTable
          buyWasteUserInfo={buyWasteUserInfo}
          setBuyWasteUserInfo={setBuyWasteUserInfo}
          closeBuyWaste={() => filterTab(1)}
        />
      ) : null}
      {profBtn === 11 ? <GuestBuyWaste /> : null}
      {profBtn === 17 ? <ClearStock /> : null}

      {profBtn === 13 ? (
        <FrenchSubscriptionPlanTwo onclickRedirect={() => setProfBtn(14)} />
      ) : null}
      {profBtn === 14 ? (
        <WasteSubsPlan onSuccess={() => setProfBtn(13)} />
      ) : null}
      {/* </section> */}
    </>
  );
};

export default Wastecollectdashboard;
