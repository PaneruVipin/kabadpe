import React, { useState } from "react";
import UserForm from "../Components/UserForm";
import { NavLink } from "react-router-dom";
import Protect from "../Components/Auth/ProtectComp";
const Header = () => {
  const [userForm, setUserForm] = useState(false);
  const [navlink , setNavLink] = useState('');

  const linkActive = (getlinkvalue) => {

      setNavLink(getlinkvalue)
    
  }

  const popUpUserForm = () => {
    setUserForm(!userForm);
  };
  return (
    <>
      {/* <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="outer-box outer-box2">
              <div className="t-headr-left-links-bx">
                <a href="#">
                  {" "}
                  <i className="fa-solid fa-angles-right"></i> Climstripe Shift{" "}
                </a>
                <a href="#" className="linkactive">
                  <i className="fa-solid fa-angles-right"></i> Kabadpe
                </a>
                <a href="#">
                  <i className="fa-solid fa-angles-right"></i> Green Saman Shop{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fa-solid fa-angles-right"></i> Climconnect{" "}
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
        <div className="header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="header-left-nav-bx">
                <div className="header-left">
                  <div className="main-logo-box">
                    <NavLink to="/">
                      <img src="./images/resources/logo.png" alt="" />
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
        </div>
      </header> */}

{/* <!-- Main header--> */}

        <header class="main-header header-style-one">

            {/* <!--Start Header Top--> */}
            <div class="header-top">
                <div class="auto-container">
                    <div class="outer-box outer-box2">
                        {/* <!-- Climstripe Shift Kabadpe Green Saman Shop Climconnect --> */}
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
                <div className="comon-container-2">
                    <div className="outer-box">

                        <div className="header-left-nav-bx">

                            {/* <!--Start Header Left--> */}
                            <div className="header-left">
                                <div className="main-logo-box">
                                    <a href="index.html">
                                        <img src="./images/resources/logo.png" alt="Awesome Logo" title="" />
                                    </a>
                                </div>
                            </div>

                            {/* <!--Start Header Middle--> */}
                            <div className="header-middle">
                                <div className="nav-outer style1 clearfix">
                                    {/* <!--Mobile Navigation Toggler--> */}
                                    <div className="mobile-nav-toggler">
                                        <div className="inner">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--End Header Middle--> */}

                        </div>

                        {/* <!--End Header Left-->

                        <!--Start Header Right--> */}
                        <div className="header-right rateList">
                            {/* <!-- Main Menu --> */}
                            <nav className="main-menu style1 navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <ul className="navigation clearfix ">
                                        <li onClick={() => linkActive('home')} className={ navlink === "home"  ? "dropdown nav-link navlinkactive" : "dropdown nav-link"}><a href="#"><span>Home</span></a></li>
                                        <li onClick={() => linkActive('service')} className={navlink === "service" ? "dropdown nav-link servicemenu navlinkactive" : "dropdown nav-link servicemenu"}><a href="#"><span>Services</span></a>

                                            <div className="service-dropdown-bx">
                                                <div className="serv-drpdwn-grid">
                                                    <div className="s-drpdwn-bx">
                                                        <h6>For Individuals</h6>
                                                        <div className="s-drpdwn-lists">
                                                            <p><a href="#" target="_blank">Scrap Collection</a></p>
                                                            <p><a href="#" target="_blank">Zero Waste Society</a></p>
                                                            <p><a href="#" target="_blank">Vehicle Scrapping</a></p>


                                                        </div>
                                                    </div>

                                                    <div className="s-drpdwn-bx">
                                                        <h6>For Businesses</h6>
                                                        <div className="s-drpdwn-submenu-grid">

                                                            <div className="s-dpdwn-sb-menu-bx">
                                                                <p><a href="#">Scrap Collection</a></p>
                                                                <p><a href="#">EPR services</a></p>
                                                                <p><a href="#">Dismantling</a></p>

                                                            </div>
                                                            <div className="s-dpdwn-sb-menu-bx">
                                                                <p><a href="#">Circular Economy</a></p>
                                                                <p><a href="#">
                                                                        Zero Waste</a></p>
                                                                <p><a href="#">Paper Shredding
                                                                    </a></p>

                                                            </div>
                                                            <div className="s-dpdwn-sb-menu-bx">
                                                                <p><a href="#">
                                                                        CSR Services</a></p>
                                                                <p><a href="#">
                                                                        Zero Waste Event</a></p>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="s-drpdwn-bx">
                                                        <h6>For Governments</h6>
                                                        <div className="s-drpdwn-lists">
                                                            <p><a href="#" target="_blank">Material Recovery
                                                                    Facility</a></p>
                                                            <p><a href="#" target="_blank">IEC</a></p>


                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </li>
                                        <li onClick={() => linkActive('about')} className={ navlink === "about"  ? "aboutdrpdwn nav-link navlinkactive" : "aboutdrpdwn nav-link"}><a href="#"><span>About Us</span></a>
                                            <div className="about-drpdwn-bx">
                                                <p><a href="#">About us</a></p>
                                                <p><a href="#">Franchise</a></p>
                                                <p><a href="#">Contact now</a></p>
                                            </div>
                                        </li>
                                        <li onClick={() => linkActive('wastegpt')} className={navlink === "wastegpt" ? " nav-link  navlinkactive" : " nav-link "}><a href="#"><span>Wastegpt</span></a></li>
                                        <li onClick={() => linkActive('rate')} className={navlink === "rate" ? " nav-link  navlinkactive" : " nav-link "}><a href="#"><span>Rate list</span></a></li>
                                        <li onClick={() => linkActive('kabad')} className={navlink === "kabad" ? " nav-link  navlinkactive" : " nav-link "}><a href="#"><span>Kabad Shop</span></a></li>
                                        <li onClick={() => {linkActive('login'), setUserForm(true)}} className={navlink === "login" ? " nav-link  navlinkactive" : " nav-link "}><a href="javascript:void(0);" data-toggle="modal"
                                                data-target="#exampleModal"><span>Login</span></a></li>
                                    </ul>
                                </div>
                            </nav>




                            {/* <!-- Main Menu End--> */}

                            {/* <!-- <div class="phone-number-box1">
                                <button>Rate list</button>
                            </div>

                            <div class="phone-number-box1">
                                <button>Kabad Shop</button>
                            </div>
                            <div class="serach-button-style1">
                                <button>Login</button>
                                
                            </div> --> */}

                        </div>
                    

                    </div>
                </div>
            </div>

           

        </header>

       {userForm ? <UserForm closepopUpUserForm={popUpUserForm} /> : null}
    </>
  );
};

export default Header;
