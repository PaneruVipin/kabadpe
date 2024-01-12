import React, { useState } from "react";
import UserForm from "../Components/UserForm";
import { NavLink } from "react-router-dom";
import Protect from "../Components/Auth/ProtectComp";
import "../style/HeaderStyle.css";
const Header = () => {
  const [userForm, setUserForm] = useState(false);
  const [navlink , setNavLink] = useState('');
  const [menu , setMenu] = useState(false);
  const [nav , setNav] = useState(false);

  const linkActive = (getlinkvalue) => {
    setNavLink(getlinkvalue);
  };

  const popUpUserForm = () => {
    setUserForm(!userForm);
  };

  const scrollShow = () => {
    const scrollValue =  document?.documentElement?.scrollTop ;
    scrollValue > 150 ? setNav(true) : setNav(false) ;
    
}


  window.addEventListener("scroll", scrollShow , true)
  
  return (
    <>
      <header className= "main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="outer-box outer-box2">
              <div className="t-headr-left-links-bx">
                <a href="#">
                  {" "}
                   Climstripe Shift{" "}
                </a>
                <a href="#" className="linkactive">
                <span>|</span> Kabadpe
                </a>
                <a href="https://thegreensamanshop.com/" target="_blank">
                <span>|</span>The Green Saman Shop{" "}
                </a>
                <a href="#">
                  {" "}
                  <span>|</span> Climconnect{" "}
                </a>
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
        <div className={ nav === true ? "header sticky" : "header"}>
          <div className="header-container">
            <div className="outer-box">
              <div className="header-left-nav-bx">
                <div className="header-left">
                  <div className="main-logo-box">
                    <NavLink to="/">
                      <img src="./images/customImg/logo.png" alt="" />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className={menu ? "header-right menuactive rateList" : "header-right rateList"}>
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
                              <div className="s-drpdwn-lists s-drpdwn-submenu-grid2">
                                <div className="s-dpdwn-sb-menu-bx">
                                <p>
                                  <NavLink to="#" target="_blank">
                                    Zero Waste Societies
                                  </NavLink>
                                </p>
                              
                                <p>
                                  <NavLink to="#" target="_blank">
                                    Waste SIP
                                  </NavLink>
                                </p>

                                <p>
                                  <NavLink to="#" target="_blank">
                                    Green Life
                                  </NavLink>
                                </p>

                                <p>
                                  <NavLink to="#" target="_blank">
                                    Clim Connect
                                  </NavLink>
                                </p>
                                </div>


                                <div className="s-dpdwn-sb-menu-bx">
                               

                                <p>
                                  <NavLink to="#" target="_blank">
                                    Blog
                                  </NavLink>
                                </p>

                                <p>
                                  <NavLink to="#" target="_blank">
                                    Household Scrap Collection
                                  </NavLink>
                                </p>

                                <p>
                                  <NavLink to="#" target="_blank">
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
                                  <p>
                                    <NavLink to="#">Corporate Waste Management</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">EPR services</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Dismantling Services</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Circular Economy</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Zero Waste Services</NavLink>
                                  </p>
                                </div>
                               
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <NavLink to="#">CSR Services</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Zero Waste Drives</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">IEC Development and Consulting</NavLink>
                                  </p>
                                  <p>
                                    <NavLink to="#">Paper Shredding Services</NavLink>
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* <div className="s-drpdwn-bx">
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
                            </div> */}
                          </div>
                        </div>
                      </li>
                      <li className="aboutdrpdwn ">
                        <NavLink to="/about">
                          <span>About Us</span>
                        </NavLink>
                        <div className="about-drpdwn-bx">
                          <p>
                            <NavLink to="/about"> About us</NavLink>
                          </p>
                          <p>
                            <NavLink to="#">Franchise</NavLink>
                          </p>
                          <p>
                            <NavLink to="/contact">Contact now</NavLink>
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
                      <Protect>
                        <li>
                          <NavLink to="/account">
                            <span>My Account</span>
                          </NavLink>
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
                      <Protect>
                        <li>
                          <div className="wallet-icon">
                            <img src="./images/customImg/wallet.png" alt="" />
                          </div>
                        </li>
                      </Protect>
                    </ul>
                   
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
