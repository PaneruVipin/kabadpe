import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Myaccount from "../Components/Myaccount";
import WasteCollector from "../Components/WasteCollector";
import UserForm from '../Components/UserForm'


const Account = () => {
    const [userForm, setUserForm] =  useState(false);

    const popUpUserForm = () => {
        setUserForm(!userForm);
    }
    
  return (
    <>
      {/* <!-- Main header--> */}
      <header className="main-header header-style-one">
        {/* <!--Start Header Top--> */}
<div class="header-top">
                <div class="auto-container">
                    <div class="outer-box outer-box2">
                        <div class="t-headr-left-links-bx">

                            <a href="#"> <i class="fa-solid fa-angles-right"></i> Climstripe Shift </a>
                            <a href="#" class="linkactive"><i class="fa-solid fa-angles-right"></i> Kabadpe</a>
                            <a href="#"><i class="fa-solid fa-angles-right"></i> Green Saman Shop </a>
                            <a href="#"> <i class="fa-solid fa-angles-right"></i> Climconnect </a>


                        </div>

                        <div class="header-top__left header-top_right">
                            <div class="header-contact-info-style1">
                                <ul>

                                    <li>
                                        <div class="icon">
                                            <img src="./images/customImg/game.png"/>
                                            <img src="./images/customImg/app-store.png"/>
                                        </div>
                                        <div class="text">
                                            <p>Download App</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        {/* <!--End Header Top--> */}

        {/* <!--Start Header--> */}
        <div className="header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="header-left-nav-bx">
                {/* <!--Start Header Left--> */}
                <div className="header-left">
                  <div className="main-logo-box">
                    <NavLink to="/">
                      {/* <img src="assets/images/resources/logo.png" alt="Awesome Logo" title=""> */}
                      <img src="./images/resources/logo.png" alt="" />
                    </NavLink>
                  </div>
                </div>

                {/* <!--Start Header Middle--> */}
                {/* <!--Mobile Navigation Toggler--> */}

                {/* <!--End Header Middle--> */}
              </div>

              {/* <!--End Header Left--> */}

              {/* <!--Start Header Right--> */}
              <div className="header-right rateList">
                {/* <!-- Main Menu --> */}
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
                        <NavLink to="/about">
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

                            <li><NavLink to="javascript:void(0);" data-toggle="modal" data-target="#exampleModal"><span>Login</span></NavLink></li>
                        </ul>
                        <div className="menuBtn-togg">
                           <div className="spanline"></div>
                           <div className="spanline"></div>
                           <div className="spanline"></div>

                        </div>
                    </div>
                </nav>

                {/* <!-- Main Menu End--> */}

                {/* <!-- <div className="phone-number-box1">
                    <button>Rate list</button>
                </div>

                <div className="phone-number-box1">
                    <button>Kabad Shop</button>
                </div>
                <div className="serach-button-style1">
                    <button>Login</button>
                    
                </div> --> */}
              </div>
              {/* <!--End Header Right--> */}
            </div>
          </div>
        </div>
        {/* <!--End header--> */}

        {/* <!--Sticky Header--> */}
        <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              {/* <!--Logo--> */}
              <div className="logo float-left">
                <NavLink to="index.html" className="img-responsive">
                  {/* <img src="assets/images/resources/sticky-logo.png" alt="" title=""> */}
                  <img src="images/resources/sticky-logo.png" alt="" />
                </NavLink>
              </div>
              {/* <!--Right Col--> */}
              <div className="right-col float-right">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu clearfix">
                  {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Sticky Header--> */}

        {/* <!-- Mobile Menu  --> */}
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
            <div className="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
            {/* <!--Social Links--> */}
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
        {/* <!-- End Mobile Menu --> */}
      </header>
      <Myaccount />

      { userForm?  <UserForm closepopUpUserForm={popUpUserForm}/> : null}
      
    </>
  );
};

export default Account;
