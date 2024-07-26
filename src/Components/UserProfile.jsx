import React, { useEffect, useState } from "react";
import "../style/Profile.css";
import UserProfGridComp from "./UserProfGridComp";
import UserProfForm from "./UserProfForm";
import SalesHistoryComp from "./SalesHistoryComp";
import AppointmentComp from "./AppointmentComp";
import Supportticket from "./Supportticket";
import UserOrders from "./UserOrders";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ReferEarn from "./ReferEarn";
import MyWallet from "./MyWallet";
import { userProfileImageAdd } from "../apis/user";
import { userFetch } from "../features/user/userActions";
import MyOffer from "./MyOffer";
import { logout } from "../lib/logout";
import Redirect from "./Auth/RedirectIfLogout";
import WasteWallet from "./WasteWallet";
import { hashId } from "../lib/array";

const UserProfile = ({
  onProfileNav,
  onClickProfileNavHide,
  onClickProfileNavHideShow,
}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { userInfo: user, loading } = useSelector((s) => s.user);
  const [profBtn, setProfBtn] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    "/images/customImg/836.jpg"
  );
  const [profileImage, setProfileImage] = useState(null);
  const [profChange, setProfChange] = useState(false);
  // const [userPrf, setUserPrf] = useState(false);

  const filterTab = (index) => {
    setProfBtn(index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpadateProfileImage = () => {
    if (profileImage)
      userProfileImageAdd(profileImage).then(() => {
        dispatch(userFetch());
      });
    setProfChange(false);
  };

  useEffect(() => {
    if (user?.profileImage) setSelectedImage(user?.profileImage);
  }, [user?.profileImage]);
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sectionName = params.get("sec");
    if (sectionName == "dashboard") {
      setProfBtn(1);
    } else if (sectionName == "appoinment") {
      setProfBtn(3);
    } else if (sectionName == "details") {
      setProfBtn(2);
    }
  }, [location]);
  return (
    <>
      <Redirect role="user" path="/" />
      <div
        className={
          onProfileNav
            ? "user-profile-side-nav-main "
            : "user-profile-side-nav-main userprofilenavactive"
        }
      >
        <div className="user-prof-main-bx">
          <div className="user-profi-img ">
            {loading ? null : (
              <img
                src={
                  user?.profileImage
                    ? user?.profileImage
                    : `/images/temp/temp-user-profile.png`
                }
                alt=""
              />
            )}
            <div
              onClick={() => setProfChange(true)}
              className="prof-edit-text-btn"
            >
              Edit
            </div>
          </div>

          <h6>{user?.fullname}</h6>
          <span className="em-text">{hashId(user?.id, "user")}</span>
          <span className="em-text">
            <i className="fa-regular fa-envelope"></i>
            {user?.email}
          </span>
          <span className="num-text">
            <i className="fa-solid fa-mobile-screen"></i>
            {user?.phoneNumber}
          </span>

          <div className="prog-edit-prof-flex-bx">
            <div className="prog-bar-bx">
              <span>Complete Your Profile</span>
              <span className="prog-num">70%</span>
            </div>

            <div className="edit-prof-btn" title="edit profile">
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
          </div>
        </div>

        <div className="user-prof-menu-main-flex-bx">
          <button
            onClick={() => {
              filterTab(1);
            }}
            className={profBtn === 1 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            Dashboard
          </button>

          <button
            onClick={() => filterTab(7)}
            className={profBtn === 7 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-wallet"></i>
            </div>
            My Wallet
          </button>

          <button
            onClick={() => filterTab(2)}
            className={profBtn === 2 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-user"></i>
            </div>
            My Details
          </button>

          <button
            onClick={() => filterTab(3)}
            className={profBtn === 3 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-file-pen"></i>
            </div>
            My Appointments
          </button>

          {/* <button
            // onClick={() => filterTab(8)}
            className={profBtn === 8 ? "u-prf-bx profactive " : "u-prf-bx "}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-piggy-bank"></i>
            </div>
            My Offers
          </button>

          <button
            onClick={() => filterTab(5)}
            className={profBtn === 5 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-hand-holding-dollar"></i>
            </div>
            Refer and Earn
          </button>

          <button
            onClick={() => filterTab(4)}
            className={profBtn === 4 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-recycle"></i>
            </div>
            My sales history
          </button>

          <button
            onClick={() => filterTab(9)}
            className={profBtn === 9 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            My Orders
          </button>

          <button
            onClick={() => filterTab(6)}
            className={profBtn === 6 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-hands-holding-child"></i>
            </div>
            Support
          </button> */}
        </div>

        <div className="profile-log-out-btn" onClick={logout}>
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Log Out</span>
        </div>
      </div>
      <div
        className={
          profChange
            ? "user-prof-change-popup-box prof-chang-popupactive"
            : "user-prof-change-popup-box"
        }
      >
        <div className="user-prof-popup-bx">
          <div className="prof-chang-img">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>

          <div className="prof-input-file-bx">
            <label htmlFor="prof_input">Update profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="prof_input"
            />
          </div>

          <div>
            <button
              onClick={handleUpadateProfileImage}
              className="prof-input-file-bx"
              style={{ color: "white" }}
            >
              {" "}
              Save
            </button>
          </div>

          <div
            onClick={() => setProfChange(false)}
            className="prof-popup-close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      {profBtn === 1 ? (
        <UserProfGridComp
          onProfileNav={onProfileNav}
          onClickProfileNavHideShow={onClickProfileNavHideShow}
        />
      ) : null}
      {profBtn === 2 ? (
        <UserProfForm
          onProfileNav={onProfileNav}
          onClickProfileNavHideShow={onClickProfileNavHideShow}
        />
      ) : null}
      {profBtn === 4 ? <SalesHistoryComp /> : null}
      {profBtn === 3 ? (
        <AppointmentComp
          onProfileNav={onProfileNav}
          onClickProfileNavHideShow={onClickProfileNavHideShow}
          onSupportClick={() => setProfBtn(6)}
        />
      ) : null}
      {profBtn === 6 ? <Supportticket /> : null}
      {profBtn === 9 ? <UserOrders /> : null}
      {profBtn === 5 ? <ReferEarn /> : null}
      {profBtn === 7 ? (
        <WasteWallet
          onProfileNav={onProfileNav}
          onClickProfileNavHideShow={onClickProfileNavHideShow}
          component="user"
        />
      ) : null}{" "}
      {/**MyWallet */}
      {profBtn === 8 ? <MyOffer /> : null}
    </>
  );
};

export default UserProfile;
