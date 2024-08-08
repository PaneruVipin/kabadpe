import React, { useState } from "react";
import UserForm from "../Components/UserForm";
import { NavLink } from "react-router-dom";
import Protect from "../Components/Auth/ProtectComp";
import "../style/HeaderStyle.css";
import { scrollToSection } from "../lib/scroll";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiMenuAlt3 } from "react-icons/hi";

import { logout } from "../lib/logout";
const Header = ({
  userForm,
  setUserForm,
  onClickProfileNavHideShow,
  onProfileNav,
}) => {
  const [navlink, setNavLink] = useState("");
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState(false);
  const [link, setLink] = useState("home");
  const [topMenu, setTopMenu] = useState("kabadpe");

  const linkActive = (getlinkvalue) => {
    setNavLink(getlinkvalue);
  };

  const popUpUserForm = () => {
    setUserForm(!userForm);
  };

  const scrollShow = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 150 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", scrollShow, true);
  const path = window.location.pathname;
  return (
    <>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="outer-box outer-box2">
              <div className="t-headr-left-links-bx">
                <NavLink to="https://www.climstripeshift.com/"> Climstripe Shift </NavLink>
                
                <NavLink
                  to="https://www.kabadpe.com/"
                  onClick={() => setTopMenu("kabadpe")}
                  className={
                    !path?.startsWith("/climconnect") ? "linkactive" : ""
                  }
                >
                  <span>|</span> Kabadpe
                </NavLink>
                <NavLink
                  to="https://thegreensamanshop.com/"
                  onClick={() => setTopMenu("greensaman")}
                  className={topMenu === "greensaman" ? "linkactive" : ""}
                >
                  <span>|</span>The Green Saman Shop{" "}
                </NavLink>
                <NavLink
                  to="/climconnect"
                  onClick={() => setTopMenu("climconnect")}
                  className={
                    path?.startsWith("/climconnect") ? "linkactive" : ""
                  }
                >
                  {" "}
                  <span>|</span> Climconnect{" "}
                </NavLink>
              </div>

              <div className="header-top__left header-top_right">
                <div className="header-contact-info-style1">
                  <ul>
                    <li>
                      <div className="icon">
                        <img src="/images/customImg/app-store.png" />
                        <img src="/images/customImg/game.png" />
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
        {!path?.startsWith("/climconnect") ? (
          <div className={nav === true ? "header sticky" : "header"}>
            <div className="header-container">
              <div className="outer-box">
                <div className="header-left-nav-bx">
                  <div className="header-left">
                 
                    <div className="main-logo-box">
                      <NavLink to="/">
                        <img src="/images/customImg/logo.png" alt="" />
                      </NavLink>
                    </div>

                    {/* onClickProfileNavHideShow */}
                  </div>
                </div>

                <div
                  className={
                    menu
                      ? "header-right menuactive rateList"
                      : "header-right rateList"
                  }
                >
                  <nav className="main-menu style1 navbar-expand-md navbar-light">
                    <div className="mob-logo">
                      <img src="./images/customImg/logo.png" alt="" />
                    </div>

                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix ">
                        <li
                          onClick={() => setLink("home")}
                          className={
                            link === "home"
                              ? "dropdown nav-li navliactive"
                              : "dropdown nav-li "
                          }
                        >
                          <NavLink to="/">
                            <span>Home</span>
                          </NavLink>
                        </li>

                        <li
                          onClick={() => setLink("service")}
                          className={
                            link === "service"
                              ? "dropdown nav-li servicemenu drodpwon-s hover-drop-dwn2 navliactive"
                              : "dropdown nav-li servicemenu drodpwon-s hover-drop-dwn2"
                          }
                        >
                          <NavLink to="#" className="dropdown-s-lik">
                            <span>Services</span>
                          </NavLink>
                          <div className="dropdown-bx-serv dropdown-bx-serv-main">
                            <li
                              onClick={() => setLink("service")}
                              className="drodpwon-s hover-drop"
                            >
                              {" "}
                              <NavLink className="dropdown-s-lik" to="#">
                                Individuals
                              </NavLink>
                              <div className="dorpdown-bx-serv dorpdown-bx-serv-list">
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="/service/zero-waste-societies">
                                    Zero Waste Societies
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">Waste SIP</NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">Green Life</NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">Clim Connect</NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">Blog</NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Household Scrap Collection
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Vehicle Scrapping
                                  </NavLink>{" "}
                                </li>
                              </div>
                            </li>

                            <li
                              onClick={() => setLink("service")}
                              className="drodpwon-s hover-drop"
                            >
                              {" "}
                              <NavLink className="dropdown-s-lik" to="#">
                                Business
                              </NavLink>
                              <div className="dorpdown-bx-serv dorpdown-bx-serv-list">
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Corporate Waste Management
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">EPR Services</NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">CSR Services</NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Zero Waste Drives
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Dismantling Services
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Circular Economy
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    IEC Development and Consulting
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Paper Shredding Servicesd
                                  </NavLink>{" "}
                                </li>
                                <li onClick={() => setLink("service")}>
                                  {" "}
                                  <NavLink to="#">
                                    Zero Waste Services
                                  </NavLink>{" "}
                                </li>
                              </div>
                            </li>
                          </div>

                          <div className="service-dropdown-bx">
                            <div className="serv-drpdwn-grid">
                              <div className="s-drpdwn-bx">
                                <h6>For Individuals</h6>
                                <div className="s-drpdwn-lists s-drpdwn-submenu-grid2">
                                  <div className="s-dpdwn-sb-menu-bx">
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/zero-waste-societies">
                                        Zero Waste Societies
                                      </NavLink>
                                    </p>

                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/waste-sip">
                                        Waste SIP
                                      </NavLink>
                                    </p>

                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/Green-life">
                                        Green Life
                                      </NavLink>
                                    </p>

                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/climconnect">
                                        Clim Connect
                                      </NavLink>
                                    </p>
                                  </div>

                                  <div className="s-dpdwn-sb-menu-bx">
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/blog">Blog</NavLink>
                                    </p>

                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/household">
                                        Household Scrap Collection
                                      </NavLink>
                                    </p>

                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/bulkwastepickup">
                                        Bulk Waste Pickup
                                      </NavLink>
                                    </p>

                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/electwaste">
                                        Electronic Waste Pickup
                                      </NavLink>
                                    </p>

                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/vehiclescrap">
                                        Vehicle Scrapping
                                      </NavLink>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="s-drpdwn-bx">
                                <h6>For Businesses</h6>
                                <div className="s-drpdwn-submenu-grid">
                                  <div className="s-dpdwn-sb-menu-bx">
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/corporatewaste">
                                        Corporate Waste Management
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/eprservice">
                                        EPR services
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/dismantling">
                                        Dismantling Services
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/circulareconomy">
                                        Circular Economy
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/zerowaste">
                                        Zero Waste Services
                                      </NavLink>
                                    </p>
                                  </div>

                                  <div className="s-dpdwn-sb-menu-bx">
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/csr">
                                        CSR Services
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/zerodrive">
                                        Zero Waste Drives
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/iec">
                                        IEC Development and Consulting
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/recoverymngemt">
                                        Material Recovery Management
                                      </NavLink>
                                    </p>
                                    <p onClick={() => setLink("service")}>
                                      <NavLink to="/service/papershredding">
                                        Paper Shredding Services
                                      </NavLink>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* <div className="s-drpdwn-bx">
                              <h6>For Governments</h6>
                              <div className="s-drpdwn-lists">
                                <p>
                                  <NavLink to="#" >
                                    Material Recovery Facility
                                  </NavLink>
                                </p>
                                <p>
                                  <NavLink to="#" >
                                    IEC
                                  </NavLink>
                                </p>
                              </div>
                            </div> */}
                            </div>
                          </div>
                        </li>
                        <li
                          onClick={() => setLink("about")}
                          className={
                            link === "about"
                              ? "dropdown nav-li servicemenu drodpwon-s aboutdrpdwn hover-drop-dwn2 navliactive"
                              : "dropdown nav-li servicemenu drodpwon-s  aboutdrpdwn hover-drop-dwn2"
                          }
                        >
                          <NavLink to="/about" className="dropdown-s-lik">
                            <span>About Us</span>
                          </NavLink>

                          <div className="dropdown-bx-serv dropdown-bx-serv-main">
                            <li
                              onClick={() => setLink("about")}
                              className="drodpwon-s hover-drop"
                            >
                              {" "}
                              <NavLink to="/about"> About us</NavLink>
                            </li>

                            <li
                              onClick={() => setLink("frenchies")}
                              className="drodpwon-s hover-drop"
                            >
                              {" "}
                              <NavLink to="/frenchies"> Franchise</NavLink>
                            </li>

                            <li
                              onClick={() => setLink("contact")}
                              className="drodpwon-s hover-drop"
                            >
                              {" "}
                              <NavLink to="/contact"> Contact now</NavLink>
                            </li>
                          </div>

                          <div className="about-drpdwn-bx">
                            <p onClick={() => setLink("about")}>
                              <NavLink to="/about"> About us</NavLink>
                            </p>
                            <p onClick={() => setLink("frenchies")}>
                              <NavLink to="/frenchies">Franchise</NavLink>
                            </p>
                            <p onClick={() => setLink("about")}>
                              <NavLink to="/contact">Contact now</NavLink>
                            </p>
                          </div>
                        </li>
                        {/* <li
                        onClick={() => setLink("wastegpt")}
                        className={
                          link === "wastegpt" ? "nav-li navliactive" : "nav-li"
                        }
                      >
                        <NavLink to="/wastegept">
                          <span>Wastegpt</span>
                        </NavLink>
                      </li> */}
                        <li
                          onClick={() => setLink("ratelist")}
                          className={
                            link === "ratelist"
                              ? "nav-li navliactive"
                              : "nav-li"
                          }
                        >
                          <NavLink to="/ratelist">
                            <span>Rate list</span>
                          </NavLink>
                        </li>
                        {/* <li
                        onClick={() => setLink("blog")}
                        className={
                          link === "blog" ? "nav-li navliactive" : "nav-li"
                        }
                      >
                        <NavLink to="/blog">
                          <span>Blog</span>
                        </NavLink>
                      </li> */}
                        <Protect reverse>
                          <li
                            onClick={() => setLink("kabadshop")}
                            className={
                              link === "kabadshop"
                                ? "nav-li navliactive"
                                : "nav-li"
                            }
                          >
                            <NavLink to="/kabadshop">
                              <span>Kabad Shop</span>
                            </NavLink>
                          </li>
                        </Protect>
                        <Protect>
                          <li
                            onClick={() => setLink("schedule")}
                            className={
                              link === "schedule"
                                ? "nav-li navliactive"
                                : "nav-li"
                            }
                          >
                            <NavLink
                              to="/?s=schedule"
                              onClick={() => scrollToSection("schedule")}
                            >
                              <span>Schedule</span>
                            </NavLink>
                          </li>
                        </Protect>
                        {path.startsWith("/kabadshop") ? (
                          <li
                            onClick={() => setLink("frenchiespanel")}
                            className={
                              link === "frenchiespanel"
                                ? "dropdown nav-li servicemenu drodpwon-s hover-drop-dwn2 navliactive"
                                : "dropdown nav-li servicemenu drodpwon-s hover-drop-dwn2"
                            }
                          >
                            <NavLink
                              to="/frenchiespanel"
                              className="dropdown-s-lik"
                            >
                              <span>Account</span>
                            </NavLink>
                          </li>
                        ) : (
                          <>
                            <Protect>
                              <li
                                onClick={() => setLink("account")}
                                className={
                                  link === "account"
                                    ? "nav-li acnt-link navliactive"
                                    : "nav-li acnt-link"
                                }
                              >
                                <NavLink to="/account">
                                  <span>My Account</span>
                                </NavLink>

                                <div className="account-dropdown-links">
                                  <p onClick={() => setLink("account")}>
                                    <NavLink to="/account?sec=dashboard">
                                      {" "}
                                      Dashboard
                                    </NavLink>
                                  </p>
                                  <p onClick={() => setLink("account")}>
                                    <NavLink to="/account?sec=appoinment">
                                      {" "}
                                      My Appointments
                                    </NavLink>
                                  </p>
                                  <p onClick={() => setLink("account")}>
                                    <NavLink to="/account?sec=details">
                                      {" "}
                                      My Details
                                    </NavLink>
                                  </p>
                                  <p>
                                    <NavLink onClick={logout}> LogOut </NavLink>
                                  </p>
                                </div>
                              </li>
                            </Protect>
                            <Protect reverse>
                              <li>
                                <button
                                  className="UserLoginBtn55"
                                  onClick={popUpUserForm}
                                >
                                  <span>Login</span>
                                </button>
                              </li>
                            </Protect>
                          </>
                        )}
                        {/* <Protect> */}
                        <li>
                          <div className="wallet-icon">
                            <img src="/images/customImg/wallet.png" alt="" />
                          </div>
                        </li>
                        {/* </Protect> */}
                      </ul>

                      <div className="mobile-tags-flex-bx ">
                      <NavLink to={"https://www.climstripeshift.com/"} target="_blank"> <span>ClimStripe</span> </NavLink>
                        <NavLink to={"https://www.kabadpe.com/"} target="_blank">   <span>KabadPe</span></NavLink>
                        <NavLink to={"https://thegreensamanshop.com/"} target="_blank"> <span>Green Saman Shop</span></NavLink>
                        <NavLink to={"/climconnect"}><span>Climconnect</span></NavLink>
                      </div>

                      <div className="bottom-download-app-box">
                        <div className="mob-dwnld-app-btn">
                          <img src="./images/customImg/app-store.png" alt="" />
                        </div>

                        <div className="mob-dwnld-app-btn mob-dwnld-app-btn2">
                          <img src="./images/customImg/game.png" alt="" />
                        </div>

                        <span> Download Now </span>
                      </div>
                    </div>
                  </nav>
                  <div onClick={() => setMenu(!menu)} className="menuBtn-togg">
                    <div className="spanline"></div>
                    <div className="spanline"></div>
                    <div className="spanline"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              <div className="logo float-left">
                <NavLink to="index.html" className="img-responsive">
                  <img src="/images/resources/sticky-logo.png" alt="" />
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
                <img src="/images/resources/mobilemenu.png" alt="" />
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
        </div> */}
      </header>

      {/* <!-- Main header--> */}

      {userForm ? <UserForm closepopUpUserForm={popUpUserForm} /> : null}
    </>
  );
};

export default Header;
