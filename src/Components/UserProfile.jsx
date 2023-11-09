import React, { useState } from "react";
import "../style/Profile.css";
import UserProfGridComp from "./UserProfGridComp";
import UserProfForm from "./UserProfForm";
import SalesHistoryComp from "./SalesHistoryComp";
import AppointmentComp from "./AppointmentComp";
import Supportticket from "./Supportticket";
import UserOrders from "./UserOrders";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((s) => s.user.userInfo);
  const [profBtn, setProfBtn] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    "./images/customImg/836.jpg"
  );
  const [profChange, setProfChange] = useState(false);
  // const [userPrf, setUserPrf] = useState(false);

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
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="outer-box outer-box2">
              <div className="t-headr-left-links-bx">
                <a href="#"> Climstripe Shift </a>
                <a href="#" className="linkactive">
                  {" "}
                  Kabadpe
                </a>
                <a href="#"> Green Saman Shop </a>
                <a href="#"> Climconnect </a>
              </div>

              <div className="header-top__left header-top_right">
                <div className="header-contact-info-style1">
                  <ul>
                    <li>
                      <div className="icon">
                        <img src="./images/customImg/game.png" />
                        <img src="./images/customImg/app-store.png" />
                      </div>
                      <div className="text">
                        <p>Download App</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="header-left-nav-bx">
                <div className="header-left">
                  <div className="main-logo-box">
                    <NavLink to="/">
                      <img src="images/resources/logo.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>

              <div className="header-right rateList">
                <nav className="main-menu style1 navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix ">
                      <li className="dropdown ">
                        <NavLink to="/">
                          <span>Home</span>
                        </NavLink>
                      </li>
                      <li className="dropdown servicemenu ">
                        <NavLink to="./service">
                          <span>Services</span>
                        </NavLink>

                        <div className="service-dropdown-bx">
                          <div className="serv-drpdwn-grid">
                            <div className="s-drpdwn-bx">
                              <h6>For Individuals</h6>
                              <div className="s-drpdwn-lists">
                                <p>
                                  <NavLink to="#" target="_blank">
                                    Scrap Collection
                                  </NavLink>
                                </p>
                                <p>
                                  <NavLink to="#" target="_blank">
                                    Zero Waste Society
                                  </NavLink>
                                </p>
                                <p>
                                  <NavLink to="#" target="_blank">
                                    Vehicle Scrapping
                                  </NavLink>
                                </p>
                              </div>
                            </div>

                            <div className="s-drpdwn-bx">
                              <h6>For Businesses</h6>
                              <div className="s-drpdwn-submenu-grid">
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <NavLink to="#">Scrap Collection</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">EPR services</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Dismantling</NavLink>
                                  </p>
                                </div>
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <NavLink to="#">Circular Economy</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Zero Waste</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Paper Shredding</NavLink>
                                  </p>
                                </div>
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <NavLink to="#">CSR Services</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Zero Waste Event</NavLink>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="s-drpdwn-bx">
                              <h6>For Governments</h6>
                              <div className="s-drpdwn-lists">
                                <p>
                                  <NavLink to="#" target="_blank">
                                    Material Recovery Facility
                                  </NavLink>
                                </p>
                                <p>
                                  <NavLink to="#" target="_blank">
                                    IEC
                                  </NavLink>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="aboutdrpdwn ">
                        <NavLink to="./about">
                          <span>About Us</span>
                        </NavLink>
                        <div className="about-drpdwn-bx">
                          <p>
                            <NavLink to=""> About us</NavLink>
                          </p>
                          <p>
                            <NavLink to="#">Franchise</NavLink>
                          </p>
                          <p>
                            <NavLink to="#">Contact now</NavLink>
                          </p>
                        </div>
                      </li>
                      <li>
                        <NavLink to="/wastegept">
                          <span>Wastegpt</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/rate">
                          <span>Rate list</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/kabadshop">
                          <span>Kabad Shop</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/account current">
                          <span>My Account</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to=""
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <span>Login</span>
                        </NavLink>
                      </li>
                    </ul>
                    <div className="menuBtn-togg">
                      <div className="spanline"></div>
                      <div className="spanline"></div>
                      <div className="spanline"></div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              <div className="logo float-left">
                <NavLink to="index.html" className="img-responsive">
                  <img src="./images/resources/sticky-logo.png" alt="" />
                </NavLink>
              </div>
              <div className="right-col float-right">
                <nav className="main-menu clearfix"></nav>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon fa fa-times-circle"></span>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <NavLink to="index.html">
                <img src="images/resources/mobilemenu.png" alt="" />
              </NavLink>
            </div>
            <div className="menu-outer"></div>
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <NavLink to="#">
                    <span className="fab fa fa-facebook-square"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <span className="fab fa fa-twitter-square"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <span className="fab fa fa-pinterest-square"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <span className="fab fa fa-google-plus-square"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#">
                    <span className="fab fa fa-youtube-square"></span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <div className="user-profile-side-nav-main">
        <div className="user-prof-main-bx">
          <div className="user-profi-img ">
            <img src="./images/customImg/test-img-1.jpg" alt="" />
            <div
              onClick={() => setProfChange(true)}
              className="prof-edit-text-btn"
            >
              Edit
            </div>
          </div>

          <h6>{user?.fullname}</h6>
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
            onClick={() => filterTab(1)}
            className={profBtn === 1 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            Dashboard
          </button>

          <button
            onClick={() => filterTab(5)}
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

          <button
            onClick={() => filterTab(5)}
            className={profBtn === 5 ? "u-prf-bx profactive" : "u-prf-bx"}
          >
            <div className="u-prf-tab-icon">
              <i className="fa-solid fa-file-pen"></i>
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
          </button>
        </div>

        <div className="profile-log-out-btn">
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

          <div
            onClick={() => setProfChange(false)}
            className="prof-popup-close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
      {profBtn === 1 ? <UserProfGridComp /> : null};
      {profBtn === 2 ? <UserProfForm /> : null};
      {profBtn === 4 ? <SalesHistoryComp /> : null};
      {profBtn === 3 ? <AppointmentComp /> : null};
      {profBtn === 6 ? <Supportticket /> : null};
      {profBtn === 9 ? <UserOrders /> : null};
    </>
  );
};

export default UserProfile;
