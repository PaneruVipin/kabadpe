import React from "react";
import "../style/HeaderStyle.css";
import "../style/BannerSection.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Main header--> */}
      <header className="main-header header-style-one">
        {/* <!--Start Header Top--> */}
        <div class="header-top">
                <div class="auto-container">
                    <div class="outer-box outer-box2">
                        <div class="t-headr-left-links-bx">

                            <a href="#">  Climstripe Shift </a>
                            <a href="#" class="linkactive"> Kabadpe</a>
                            <a href="#"> Green Saman Shop </a>
                            <a href="#">  Climconnect </a>


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
                    <a href="index.html">
                      {/* <img src="assets/images/resources/logo.png" alt="Awesome Logo" title=""> */}
                      <img src="./images/resources/logo.png" alt="" />
                    </a>
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
                      <li className="dropdown servicemenu">
                        <NavLink to="/service">
                          <span>Services</span>
                        </NavLink>

                        <div className="service-dropdown-bx">
                          <div className="serv-drpdwn-grid">
                            <div className="s-drpdwn-bx">
                              <h6>For Individuals</h6>
                              <div className="s-drpdwn-lists">
                                <p>
                                  <a href="#" target="_blank">
                                    Scrap Collection
                                  </a>
                                </p>
                                <p>
                                  <a href="#" target="_blank">
                                    Zero Waste Society
                                  </a>
                                </p>
                                <p>
                                  <a href="#" target="_blank">
                                    Vehicle Scrapping
                                  </a>
                                </p>
                              </div>
                            </div>

                            <div className="s-drpdwn-bx">
                              <h6>For Businesses</h6>
                              <div className="s-drpdwn-submenu-grid">
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <a href="#">Scrap Collection</a>
                                  </p>
                                  <p>
                                    <a href="#">EPR services</a>
                                  </p>
                                  <p>
                                    <a href="#">Dismantling</a>
                                  </p>
                                </div>
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <a href="#">Circular Economy</a>
                                  </p>
                                  <p>
                                    <a href="#">Zero Waste</a>
                                  </p>
                                  <p>
                                    <a href="#">Paper Shredding</a>
                                  </p>
                                </div>
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <a href="#">CSR Services</a>
                                  </p>
                                  <p>
                                    <a href="#">Zero Waste Event</a>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="s-drpdwn-bx">
                              <h6>For Governments</h6>
                              <div className="s-drpdwn-lists">
                                <p>
                                  <a href="#" target="_blank">
                                    Material Recovery Facility
                                  </a>
                                </p>
                                <p>
                                  <a href="#" target="_blank">
                                    IEC
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <NavLink to="/schedulepickup">
                          <span>Schedule Pickup</span>
                        </NavLink>
                      </li>
  
                      <li>
                        <NavLink to="/ratelist">
                          <span>Rate list</span>
                        </NavLink>
                      </li>

                      <li className="aboutdrpdwn">
                        <NavLink to="/about">
                          <span>About Us</span>
                        </NavLink>
                        <div className="about-drpdwn-bx">
                          <p>
                            <a href="#"> About us</a>
                          </p>
                          <p>
                            <a href="#">Franchise</a>
                          </p>
                          <p>
                            <a href="#">Contact now</a>
                          </p>
                        </div>
                      </li>

                    
                      <li>
                        <NavLink to="/account">
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
                <a href="index.html" className="img-responsive">
                  {/* <img src="assets/images/resources/sticky-logo.png" alt="" title=""> */}
                  <img src="images/resources/sticky-logo.png" alt="" />
                </a>
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
              <a href="index.html">
                <img src="images/resources/mobilemenu.png" alt="" />
              </a>
            </div>
            <div className="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
            {/* <!--Social Links--> */}
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-twitter-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-pinterest-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-google-plus-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-youtube-square"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}
      </header>
    </>
  );
};

export default Header;
