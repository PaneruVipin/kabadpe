import React, { useState, useEffect } from "react";
import "../style/Profile.css";
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

const Wastecollectdashboard = () => {
  const { userInfo, loading } = useSelector((s) => s.user);
  // console.log("store", loading);
  const [profBtn, setProfBtn] = useState(1);
  const [profChange, setProfChange] = useState(false);

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

  return (
    <>
      <div className="user-profile-side-nav-main waste-colect-db-side-nav-main">
        <div className="user-prof-main-bx">
          <div className="user-profi-img ">
            <img
              src={
                !loading
                  ? userInfo?.profileImage || "./images/customImg/836.jpg"
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
          <span className="em-text">Brand Orbiter</span>
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
            My Wallet History
          </button>

          <button
            onClick={() => filterTab(2)}
            className={profBtn === 2 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-file-pen"></i>
            </div>
            My Appintments
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

          <button
            onClick={() => filterTab(9)}
            className={profBtn === 9 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-building"></i>
            </div>
            Vendor
          </button>

          <button
            onClick={() => filterTab(8)}
            className={profBtn === 8 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-regular fa-comment-dots"></i>
            </div>
            My Reviews
          </button>

          <button
            onClick={() => filterTab(4)}
            className={profBtn === 4 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-street-view"></i>
            </div>
            My Work Location
          </button>

          <button
            onClick={() => filterTab(5)}
            className={profBtn === 5 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-dumpster"></i>
            </div>
            Waste Collection
          </button>

          <button
            onClick={() => filterTab(6)}
            className={profBtn === 6 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i class="fa-solid fa-capsules"></i>
            </div>
            My sales history
          </button>
        </div>

        <div className="profile-log-out-btn profile-log-out-btn2">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Log Out</span>
        </div>
      </div>

      {profBtn === 1 ? (
        <WasteDashboard onclickShowDetailComp={() => filterTab(3)} />
      ) : null}
      {profBtn === 2 ? <WasteAppointment /> : null}
      {profBtn === 3 ? <WasteDetail /> : null}
      {profBtn === 4 ? <WasteWorkLocat /> : null}
      {profBtn === 5 ? <WasteColectin /> : null}
      {profBtn === 6 ? <WasteSales /> : null}
      {profBtn === 7 ? <WasteWallet /> : null}
      {profBtn === 8 ? <MyReviews /> : null}
      {profBtn === 9 ? <Vendor /> : null}
    </>
  );
};

export default Wastecollectdashboard;
