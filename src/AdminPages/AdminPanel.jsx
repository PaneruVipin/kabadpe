import React, { useState } from "react";
import "../style/Admin.css";
import { RiTableFill } from "react-icons/ri";
import { MdTabletAndroid } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaPagelines } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GiHammerBreak } from "react-icons/gi";
import { PiGitlabLogo } from "react-icons/pi";
import AdminFirstComp from "../AdminComponents.jsx/AdminFirstComp";
import AdminSecondComp from "../AdminComponents.jsx/AdminSecondComp";
import BookingReviewComp from "../AdminComponents.jsx/BookingReviewComp";
import AllUser from "../AdminComponents.jsx/AllUser";
import alluserData from "../AlluserData";
import AdminAllProduct from "../AdminComponents.jsx/AdminAllProduct";
import AdminOrder from "../AdminComponents.jsx/AdminOrder";
import Orders from "../OrderData";
import AdminLogin from "./AdminLogin";
import Frienchies from "../AdminComponents.jsx/Frienchies";
import Wastecolect from "../AdminComponents.jsx/Wastecolect";
import SubscriptionPlan from "../AdminComponents.jsx/SubscriptionPlan";
import Addsubscription from "../FrenchiesComp/Addsubscription";
import AddWorkArea from "../FrenchiesComp/AddWorkArea";
import DiscountCoupon from "../AdminComponents.jsx/DiscountCoupon";
import WasteProduct from "../AdminComponents.jsx/WasteProduct";
import Createplan from "../AdminComponents.jsx/Createplan";
import { RiPageSeparator } from "react-icons/ri";
import KabadPePagesLink from "../AdminComponents.jsx/KabadPePagesLink";
import ContentEditComp from "../AdminComponents.jsx/ContentEditComp";
import FrenchAppointData from "../FrenchAppointData";
import FrenchAppointments from "../FrenchiesComp/FrenchAppointments";
import FrenchAppointTwo from "../FrenchiesComp/FrenchAppointTwo";
import ForIndividuals from "../AdminComponents.jsx/ForIndividuals";
import { adminAppoinmentsFetch } from "../apis/admins/appoinments";
import { useQuery } from "@tanstack/react-query";
import Redirect from "../Components/Auth/RedirectIfLogout";
import AdminTransaction from "./AdminTransaction";
import AdminManageWaste from "../AdminComponents.jsx/AdminManageWaste";
import AllBlogPost from "../AdminComponents.jsx/AllBlogPost";
import CreateBlog from "../AdminComponents.jsx/CreateBlog";
import AdminBid from "../AdminComponents.jsx/AdminBid";
const AdminPanel = () => {
  const [barClick, setBarClick] = useState(false);
  const [adminNavBtn, setAdminNavBtn] = useState(false);
  const [sideAdminNav, setSideAdminNav] = useState(false);
  const [iconBtn, setIconBtn] = useState(null);
  const [component, setComponent] = useState("dashboard");
  const [userFiltData, setUserFiltData] = useState(alluserData);
  const [activeTav, setActiveTab] = useState("");
  const [orderActive, setOrderActive] = useState(Orders);
  const [orderTab, setOrderTab] = useState(null);
  const [changeProfile, setChangeProfile] = useState(false);
  const [profileImg, setProfileImg] = useState("/images/customImg/c-3.jpg");
  const [notifActive, setNotifActive] = useState(false);
  const [contentPageBtn, setContentPageBtn] = useState(null);
  const [contentPageBtnTwo, setContentPageBtnTwo] = useState(null);
  const [apntData, setApntData] = useState(FrenchAppointData);
  const [apntDataTwo, setApntDataTwo] = useState(FrenchAppointData);
  const [apntTab, setApntTab] = useState(null);
  const [apntTabTwo, setApntTabTwo] = useState(null);
  const [switchActive, setSwitchActive] = useState("frenchies");

  const handleButtonClick = (buttonName) => {
    setAdminNavBtn(buttonName === adminNavBtn ? null : buttonName);
  };

  const getButtonClassName = (buttonName) => {
    return buttonName === adminNavBtn
      ? "admin-nv-btn adminnavbtnActive"
      : "admin-nv-btn";
  };

  const getButonClasnameTwo = (butonIndex) => {
    return butonIndex === adminNavBtn ? "ad-list listactive" : "ad-list";
  };

  const handleIconBtn = (IconBtnNum) => {
    setIconBtn(IconBtnNum === iconBtn ? null : IconBtnNum);
  };

  const getIconBtnNum = (IconBtnNum) => {
    // return IconBtnNum === iconBtn ? "admin-side-nav-icons-main-box sideNaviconActive" : "admin-side-nav-icons-main-box"
    return IconBtnNum === iconBtn
      ? "side-nav-icon-ad sideNaviconActive"
      : "side-nav-icon-ad";
  };

  const handleViewComp = (compName) => {
    setComponent(compName);
  };

  const handleFilter = (index) => {
    const updatedData = alluserData.filter((curData) => {
      return index === curData.categoryStatus;
    });

    setUserFiltData(updatedData);
    setActiveTab(index);
  };

  const handleFilterTwo = (value) => {
    const updatedOrderData = Orders.filter((curData) => {
      return value === curData.statype;
    });
    setOrderActive(updatedOrderData);
    setOrderTab(value);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImg(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const getContentPageClassName = (butonNum) => {
    return butonNum === contentPageBtn
      ? "content-pages-main-dropdwn contentactive"
      : "content-pages-main-dropdwn";
  };

  const handleContentPageBtn = (contentBtnName) => {
    return setContentPageBtn(
      contentBtnName === contentPageBtn ? null : contentBtnName
    );
  };

  const getContentPageClassNameTwo = (butonNumtwo) => {
    return butonNumtwo === contentPageBtnTwo
      ? "inner-pages-main-drp-dwn-bx innerpageactive"
      : "inner-pages-main-drp-dwn-bx";
  };

  const handleChangePageBtnTwo = (innerpageBtn) => {
    return setContentPageBtnTwo(
      innerpageBtn === contentPageBtnTwo ? null : innerpageBtn
    );
  };

  const DropdownButton = (btnClass) => {
    return btnClass === contentPageBtn
      ? "content-page-drop-ttle-btn drpbtnactive"
      : "content-page-drop-ttle-btn";
  };

  const DropdownButtonTwo = (btnClassTwo) => {
    return btnClassTwo === contentPageBtnTwo
      ? "inner-page-drop-dwn-btn innerbtnactive"
      : "inner-page-drop-dwn-btn";
  };

  const handleFilterAppoint = (getvalue) => {
    const updatedappointData = FrenchAppointData.filter((curelem) => {
      return getvalue === curelem.statustype;
    });

    setApntData(updatedappointData);
    setApntTab(getvalue);
  };

  const handleFilterAppointTwo = (getvalue) => {
    const updatedappointData = FrenchAppointData.filter((curelem) => {
      return getvalue === curelem.statustype;
    });

    setApntDataTwo(updatedappointData);
    setApntTabTwo(getvalue);
  };

  const { data: appoinments, refetch } = useQuery({
    queryKey: ["adminAppoinments"],
    queryFn: () => adminAppoinmentsFetch(),
  });

  return (
    <>
      <Redirect role="superAdmin" path="/adminlogin" />
      <section className="top-admin-header-comp">
        <div className="admin-head-flex-box">
          <div className="left-admin-logo-box">
            <div className="admin-logo">
              <img src="/images/customImg/nav-logo.png" alt="" />
            </div>

            <button
              onClick={() => {
                setBarClick(!barClick), setSideAdminNav(!sideAdminNav);
              }}
              className="side-admin-nav-btn-box admin-top-comn-btn"
            >
              {barClick ? (
                <i class="fa-solid fa-arrow-right-long"></i>
              ) : (
                <i class="fa-solid fa-bars-staggered"></i>
              )}
            </button>

            <h4 className="admin-top-title">Dashboard</h4>
          </div>

          <div className="right-admin-box">
            <div className="admin-top-search-box">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search here"
                autoComplete="off"
              />

              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <button
              onClick={() => handleViewComp("addworkarea")}
              className={
                component === "addworkarea"
                  ? "addnew-work-btn addworkactive"
                  : "addnew-work-btn"
              }
            >
              Add Work Area
            </button>

            <button
              onClick={() => handleViewComp("addsubscription")}
              className={
                component === "addsubscription"
                  ? "addnew-work-btn addnew-work-btn2 addworkactive"
                  : "addnew-work-btn addnew-work-btn2"
              }
            >
              Add Subscription Plan
            </button>

            <button className="side-admin-nav-btn-box admin-top-comn-btn admin-top-comn-btn2">
              <i class="fa-regular fa-comments"></i>
            </button>

            <div className="notif-main-box">
              <button
                onClick={() => setNotifActive(!notifActive)}
                className="side-admin-nav-btn-box admin-top-comn-btn admin-top-comn-btn2"
              >
                <i class="fa-regular fa-bell"></i>
              </button>

              <div
                className={
                  notifActive
                    ? "noti-dropdown-box notisactive"
                    : "noti-dropdown-box"
                }
              >
                <div className="noti-li-box">
                  <div className="not-img">
                    <img src="/images/customImg/c-3.jpg" alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New Order Request</h6>
                    <span>Id : 2114504750</span>
                  </div>
                </div>

                <div className="noti-li-box">
                  <div className="not-img">
                    <img src="/images/customImg/c-2.jpg" alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New User Assign</h6>
                    <span>Id : 2114504750</span>
                  </div>
                </div>

                <div className="noti-li-box">
                  <div className="not-img">
                    <img src="/images/customImg/c-1.jpg" alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New Appointment Scheduled</h6>
                    <span>Id : 2114504750</span>
                  </div>
                </div>

                <div className="noti-li-box">
                  <div className="not-img">
                    <img src="/images/customImg/c-2.jpg" alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New User Assign</h6>
                    <span>Id : 2114504750</span>
                  </div>
                </div>

                <div className="noti-li-box">
                  <div className="not-img">
                    <img src="/images/customImg/c-4.jpg" alt="" />
                  </div>
                  <div className="not-info">
                    <h6>New Order Dispatched</h6>
                    <span>Id : 2114504750</span>
                  </div>
                </div>

                <NavLink to="#" className={"view-not-btn"}>
                  View All
                </NavLink>
              </div>
            </div>

            <div className="admin-top-prof-main">
              <div
                onClick={() => setChangeProfile(!changeProfile)}
                className="admin-top-prof-box"
              >
                <div className="left-admin-prof-img">
                  <img src="/images/customImg/team-3.jpg" alt="" />
                </div>

                <div className="right-prof-info-admin">
                  <h6>John Due</h6>
                  <span>Superadmin</span>
                </div>
              </div>

              <div
                className={
                  changeProfile
                    ? "change-prof-dropdown-box profdropdownactive"
                    : "change-prof-dropdown-box"
                }
              >
                <div className="change-prof-img-box">
                  <div className="left-prof-img-round">
                    <img src={profileImg} alt="" />
                  </div>

                  <div className="right-change-img-btn-box">
                    <label htmlFor="img-update">Change</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="file"
                      id="img-update"
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>

                <form action="#">
                  <div className="admin-login-fild mt-3">
                    <label htmlFor="name">Name</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="admin-login-fild mt-3">
                    <label htmlFor="Password">Password</label>
                    <div className="admin-login-input">
                      <input
                        type="text"
                        name="Password"
                        id="Password"
                        placeholder="Enter Password"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </form>

                <button className="submit-btn prof-chnge-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* side admin navbar component ---  */}

      <section
        className={
          sideAdminNav
            ? "side-admin-navbar-comp sideAdminNavActive"
            : "side-admin-navbar-comp"
        }
      >
        <div className="side-admin-nav-list-box">
          <div className="admin-nv-li admin-nv-li-dashbrd">
            <div
              onClick={() => {
                handleButtonClick(1), handleViewComp("dashboard");
              }}
              className={
                component === "dashboard"
                  ? "admin-nv-btn admin-nv-btn2 adminnavbtnActive"
                  : "admin-nv-btn admin-nv-btn2"
              }
            >
              <div className="a-nv-i">
                <RiTableFill />
              </div>
              <span>Dashboard</span>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(3)}
              className={getButtonClassName(3)}
            >
              <div className="a-nv-i">
                <HiMiniUsers />
              </div>
              <span>Users</span>
            </div>

            <div className={getButonClasnameTwo(3)}>
              <li
                onClick={() => {
                  handleViewComp("user"), setUserFiltData(alluserData);
                }}
                className={
                  component === "user"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Users</NavLink>{" "}
              </li>
              {/* <li
                onClick={() => handleFilter("Active")}
                className={
                  activeTav === "Active"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {""}
                <NavLink to="#">Active Users</NavLink>{" "}
              </li>
              <li
                onClick={() => handleFilter("Banned")}
                className={
                  activeTav === "Banned"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Banned Users </NavLink>{" "}
              </li>
              <li
                onClick={() => handleFilter("Unverified")}
                className={
                  activeTav === "Unverified"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Unverified Users</NavLink>{" "}
              </li> */}
              <li
                onClick={() => handleViewComp("frenchies")}
                className={
                  component === "frenchies"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Frienchies</NavLink>{" "}
              </li>
              <li
                onClick={() => handleViewComp("wastecolectr")}
                className={
                  component === "wastecolectr"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Workers</NavLink>{" "}
              </li>
              <li
                onClick={() => handleViewComp("vendor")}
                className={
                  component === "vendor"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Vendor</NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(4)}
              className={getButtonClassName(4)}
            >
              <div className="a-nv-i">
                <CiShop />
              </div>
              <span> Products</span>
            </div>

            <div className={getButonClasnameTwo(4)}>
              <li
                onClick={() => handleViewComp("products")}
                className={
                  component === "products"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> All Products </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Top Selling Products</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Product Attributes </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Product Reviews</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Discount Coupons</NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(18)}
              className={getButtonClassName(18)}
            >
              <div className="a-nv-i">
                <RiPageSeparator />
              </div>
              <span>Appointments</span>
            </div>

            <div className={getButonClasnameTwo(18)}>
              <div className={getContentPageClassName(19)}>
                {/* <div
                  onClick={() => handleContentPageBtn(19)}
                  className={DropdownButton(19)}
                >
                  <span> All Appointments</span>
                </div> */}

                <div 
                // className={getContentPageClassNameTwo(16)}
                >
                  <li
                    onClick={() => {
                      refetch();
                      handleViewComp("AllAppointment"),
                        setApntData(FrenchAppointData);
                    }}
                    className="page-link-btn"
                    // className={DropdownButtonTwo(16)}
                  >
                    <NavLink to='#'className="active"> Kabadpe Appointments</NavLink>
                  </li>

                  {/* <div className="inner-page-list ">
                    <li
                      onClick={() => {
                        refetch();
                        handleViewComp("AllAppointment"),
                          setApntData(FrenchAppointData);
                      }}
                      className={
                        component === "AllAppointment"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> All Appointments </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppoint("complete")}
                      className={
                        apntTab === "complete"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Complete Appointments </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppoint("schdule")}
                      className={
                        apntTab === "schdule"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Assign Appointment </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppoint("underprocess")}
                      className={
                        apntTab === "underprocess"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Unassigned Appointment </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppoint("reschedule")}
                      className={
                        apntTab === "reschedule"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Reschedule Appointment </NavLink>
                    </li>
                  </div> */}
                </div>

                <div 
                // className={getContentPageClassNameTwo(17)}
                >
                  <li
                    onClick={() => {
                      handleViewComp("otherAppoint"),
                        setApntDataTwo(FrenchAppointData);
                    }}
                    className="page-link-btn"
                    // className={DropdownButtonTwo(17)}
                  >
                    <NavLink to='#'className="active"> Other Appointments</NavLink>
                  </li>

                  {/* <div className="inner-page-list ">
                    <li
                      onClick={() => {
                        handleViewComp("otherAppoint"),
                          setApntDataTwo(FrenchAppointData);
                      }}
                      className={
                        component === "otherAppoint"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> All Appointments </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppointTwo("complete")}
                      className={
                        apntTabTwo === "complete"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Complete Appointments </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppointTwo("schdule")}
                      className={
                        apntTabTwo === "schdule"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Assign Appointment </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppointTwo("underprocess")}
                      className={
                        apntTabTwo === "underprocess"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Unassigned Appointment </NavLink>
                    </li>
                    <li
                      onClick={() => handleFilterAppointTwo("reschedule")}
                      className={
                        apntTabTwo === "reschedule"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Reschedule Appointment </NavLink>
                    </li>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(23)}
              className={getButtonClassName(23)}
            >
              <div className="a-nv-i">
                <GiHammerBreak  />
              </div>
              <span> Bids </span>
            </div>

            <div className={getButonClasnameTwo(23)}>
              <li
                onClick={() => handleViewComp("adminbid")}
                className={
                  component === "adminbid"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> All Bids </NavLink>{" "}
              </li>
            
            </div>
          </div>


          <div className="admin-nv-li admin-nv-li-dashbrd">
            <div
              onClick={() => {
                handleButtonClick(16), handleViewComp("transaction");
              }}
              className={
                component === "transaction"
                  ? "admin-nv-btn admin-nv-btn2 adminnavbtnActive"
                  : "admin-nv-btn admin-nv-btn2"
              }
            >
              <div className="a-nv-i">
                <CiShop />
              </div>
              <span>Transactions</span>
            </div>
          </div>

          <div className="admin-nv-li admin-nv-li-dashbrd">
            <div
              onClick={() => {
                handleButtonClick(12), handleViewComp("wasteproduct");
              }}
              className={
                component === "wasteproduct"
                  ? "admin-nv-btn admin-nv-btn2 adminnavbtnActive"
                  : "admin-nv-btn admin-nv-btn2"
              }
            >
              <div className="a-nv-i">
                <CiShop />
              </div>
              <span>Waste Products</span>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(9)}
              className={getButtonClassName(9)}
            >
              <div className="a-nv-i">
                <CiShop />
              </div>
              <span> Subscriptions</span>
            </div>

            <div className={getButonClasnameTwo(9)}>
              <li
                onClick={() => handleViewComp("subscriptionplan")}
                className={
                  component === "subscriptionplan"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> Subscribed </NavLink>{" "}
              </li>
              <li
                onClick={() => handleViewComp("createplan")}
                className={
                  component === "createplan"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> Create Plan </NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(30)}
              className={getButtonClassName(30)}
            >
              <div className="a-nv-i">
              <PiGitlabLogo />

              </div>
              <span> Blog Posts</span>
            </div>

            <div className={getButonClasnameTwo(30)}>
              <li
                onClick={() => handleViewComp("allpost")}
                className={
                  component === "allpost"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> All Post </NavLink>{" "}
              </li>
              <li
                onClick={() => handleViewComp("addpost")}
                className={
                  component === "addpost"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> Add New Post </NavLink>{" "}
              </li>
              <li
                onClick={() => handleViewComp("categories")}
                className={
                  component === "categories"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> Categories </NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(5)}
              className={getButtonClassName(5)}
            >
              <div className="a-nv-i">
                <TbTruckDelivery />
              </div>
              <span>Orders</span>
            </div>

            <div className={getButonClasnameTwo(5)}>
              <li
                onClick={() => {
                  handleViewComp("orders"), setOrderActive(Orders);
                }}
                className={
                  component === "orders"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">All Orders</NavLink>{" "}
              </li>
              <li
                onClick={() => handleFilterTwo("underprocess")}
                className={
                  orderActive === "underprocess"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Under Process</NavLink>{" "}
              </li>
              <li
                onClick={() => handleFilterTwo("readyship")}
                className={
                  orderTab === "readyship"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Ready to Ship </NavLink>{" "}
              </li>
              <li
                onClick={() => handleFilterTwo("shipped")}
                className={
                  orderTab === "shipped"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Shipment</NavLink>{" "}
              </li>
              <li
                onClick={() => handleFilterTwo("delivered")}
                className={
                  orderTab === "delivered"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Delivered</NavLink>{" "}
              </li>
              <li
                onClick={() => handleFilterTwo("return")}
                className={
                  orderTab === "return"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Return</NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(70)}
              className={getButtonClassName(70)}
            >
              <div className=" a-nv-i a-nv-i2 u-prf-tab-icon">
                <i class="fa-solid fa-money-bill-trend-up"></i>
                {/* <CiShop /> */}
              </div>
              <span> Manage Waste</span>
            </div>

            <div className={getButonClasnameTwo(70)}>
              <li
                onClick={() => handleViewComp("managewaste")}
                className={
                  component === "managewaste"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> All Waste Pickups </NavLink>{" "}
              </li>
              <li
                onClick={() => handleViewComp("currentwaste")}
                className={
                  component === "currentwaste"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#"> Current Waste </NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => {
                handleViewComp("reviews");
              }}
              className={
                component === "reviews"
                  ? "admin-nv-btn admin-nv-btn2 adminnavbtnActive"
                  : "admin-nv-btn admin-nv-btn2"
              }
            >
              <div className="a-nv-i">
                <FaWpforms />
              </div>
              <span>Reviews</span>
            </div>

            <div className={getButonClasnameTwo(6)}>
              {/* <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li> <NavLink to="#">Email </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li> */}
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(8)}
              className={getButtonClassName(8)}
            >
              <div className="a-nv-i">
                <FaPagelines />
              </div>
              <span>Discounts</span>
            </div>

            <div className={getButonClasnameTwo(8)}>
              <li
                onClick={() => handleViewComp("discount")}
                className={
                  component === "discount"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">Add Coupons</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Active Coupons</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Expire Coupons</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Deactive Coupons</NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(7)}
              className={getButtonClassName(7)}
            >
              <div className="a-nv-i">
                <MdOutlineContactSupport />
              </div>
              <span>Support</span>
            </div>

            <div className={getButonClasnameTwo(7)}>
              <li>
                {" "}
                <NavLink to="#">All Tickets</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Pending Tickets</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Close Tickets </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">Processing Tickets</NavLink>{" "}
              </li>
            </div>
          </div>

          <div className="admin-nv-li">
            <div
              onClick={() => handleButtonClick(10)}
              className={getButtonClassName(10)}
            >
              <div className="a-nv-i">
                <RiPageSeparator />
              </div>
              <span>Content Section</span>
            </div>

            <div className={getButonClasnameTwo(10)}>
              <div className={getContentPageClassName(12)}>
                <div
                  onClick={() => handleContentPageBtn(12)}
                  className={DropdownButton(12)}
                >
                  <span> KabadPe</span>
                </div>

                <div className={getContentPageClassNameTwo(14)}>
                  <div
                    onClick={() => handleChangePageBtnTwo(14)}
                    className={DropdownButtonTwo(14)}
                  >
                    <span> Content Pages</span>
                  </div>

                  <div className="inner-page-list ">
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Home </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Frenchies </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> About Us </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Contact Us </NavLink>
                    </li>
                  </div>
                </div>

                <div className={getContentPageClassNameTwo(15)}>
                  <div
                    onClick={() => handleChangePageBtnTwo(15)}
                    className={DropdownButtonTwo(15)}
                  >
                    <span> Services Pages</span>
                  </div>

                  <div className="inner-page-list ">
                    <li
                      onClick={() => handleViewComp("ContentEditComp")}
                      className={
                        component === "ContentEditComp"
                          ? "page-link-btn pagelinkactive"
                          : "page-link-btn"
                      }
                    >
                      {" "}
                      <NavLink to="#"> Zero Waste Societies </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Waste SIP </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Green Life </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> ClimConnect </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Blog </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Household Scrap Collection </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Vehicle Scrapping </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Corporate Waste Management </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> EPR Services </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Dismantling Services </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Circular Economy Services </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#">
                        {" "}
                        Zero Waste Service for Businesses{" "}
                      </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Paper Shredding Services </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> CSR Services </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> Zero Waste Drives </NavLink>
                    </li>
                    <li className="page-link-btn">
                      {" "}
                      <NavLink to="#"> IEC Development and Consulting </NavLink>
                    </li>
                  </div>
                </div>
              </div>

              {/* <li 
                onClick={() => handleViewComp("kabadpepages")}
                className={
                  component === "kabadpepages"
                    ? "page-link-btn pagelinkactive"
                    : "page-link-btn"
                }
              >
                {" "}
                <NavLink to="#">KabadPe</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">TGSS</NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="#">ClimStripe </NavLink>{" "}
              </li> */}
            </div>
          </div>
        </div>
        {/* 
        <div className="side-admin-nav-icons-box">

            <div  className= "admin-side-nav-icons-main-box" >
                <div onClick={() => handleIconBtn(1)} className={ getIconBtnNum(1) }>
                <RiTableFill />
                </div>

                <div className="admin-icon-list-box">
                <li> <NavLink to="#">Dashboard One</NavLink> </li>
                    <li> <NavLink to="#">Dashboard Two</NavLink> </li>
                    <li> <NavLink to="#">Dashboard Dark</NavLink> </li>
                    <li> <NavLink to="#">Reviews</NavLink> </li>
                    <li> <NavLink to="#">Guest Detail</NavLink> </li>
                    <li> <NavLink to="#">Guest</NavLink> </li>
                    <li> <NavLink to="#">Rooms</NavLink> </li>
                </div>
                
                </div>

            <div className="admin-side-nav-icons-main-box">
                <div  onClick={() => handleIconBtn(2)} className={ getIconBtnNum(2) } >
                <MdTabletAndroid />
                </div>

                <div className="admin-icon-list-box">
                   <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li> <NavLink to="#">Email </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li>
                </div>
                </div>

                <div className="admin-side-nav-icons-main-box">
                <div onClick={() => handleIconBtn(3)}  className={ getIconBtnNum(3) }>
                <HiMiniUsers />
                </div>

                <div className="admin-icon-list-box">
                <li> <NavLink to="#">All Users</NavLink> </li>
                    <li> <NavLink to="#">Active Users</NavLink> </li>
                    <li> <NavLink to="#">Banned Users</NavLink> </li>
                    <li> <NavLink to="#">Unverified Users</NavLink> </li>
                </div>
                
                </div>

                <div  className="admin-side-nav-icons-main-box" >
                <div onClick={() => handleIconBtn(4)} className={ getIconBtnNum(4) }>
                <IoIosStar />
                </div>

                <div className="admin-icon-list-box">
                   <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li> <NavLink to="#">Email </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li>
                </div>
                
                </div>

                <div   className="admin-side-nav-icons-main-box" >
                <div onClick={() => handleIconBtn(5)} className={ getIconBtnNum(5) }>
                <FaHeart />
                </div>

                <div className="admin-icon-list-box">
                   <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li> <NavLink to="#">Email </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li>
                </div>
                
                </div>

                <div  className="admin-side-nav-icons-main-box">
                <div onClick={() => handleIconBtn(6)} className={ getIconBtnNum(6) }>
                <FaWpforms />
                </div>

                <div className="admin-icon-list-box">
                   <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li> <NavLink to="#">Email </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li>
                </div>
                
                </div>

                <div className="admin-side-nav-icons-main-box">
                <div onClick={() => handleIconBtn(7)} className={ getIconBtnNum(7)   }>
                <FaPagelines />
                </div>

                <div className="admin-icon-list-box admin-icon-list-box2">
                   <li> <NavLink to="#">Profile</NavLink> </li>
                    <li> <NavLink to="#">Post Details</NavLink> </li>
                    <li> <NavLink to="#">Email </NavLink> </li>
                    <li> <NavLink to="#">Calendar</NavLink> </li>
                    <li> <NavLink to="#">Shop</NavLink> </li>
                </div>
                
                </div>
          
            
        </div> */}
      </section>

      {/* ____________________ 
    our first component  */}

      <section
        className={
          sideAdminNav
            ? "right-side-admin-all-comp rightsideActive"
            : "right-side-admin-all-comp"
        }
      >
        {component === "dashboard" ? <AdminFirstComp /> : null}

        {component === "dashboard" ? <AdminSecondComp /> : null}

        {component === "dashboard" ? <BookingReviewComp /> : null}

        {component === "user" ? (
          <AllUser updatedFilterData={userFiltData} />
        ) : null}
        {component === "products" ? <AdminAllProduct /> : null}

        {component === "orders" ? (
          <AdminOrder orderUpdatedData={orderActive} />
        ) : null}

        {component === "frenchies" ? <Frienchies /> : null}
        {component === "wastecolectr" ? <Wastecolect /> : null}
        {component === "subscriptionplan" ? (
          <SubscriptionPlan onSwitch={() => handleViewComp("individuals")} />
        ) : null}
        {component === "addworkarea" ? <AddWorkArea /> : null}
        {component === "addsubscription" ? (
          <Addsubscription
            onSwitchPrev={() => handleViewComp("addsubscription")}
            onactive={component}
            onSwitch={() => handleViewComp("individuals")}
          />
        ) : null}
        {component === "discount" ? <DiscountCoupon /> : null}
        {component === "wasteproduct" ? <WasteProduct /> : null}
        {component === "createplan" ? (
          <Createplan
            onSwitchPrev={() => handleViewComp("createplan")}
            onactive={component}
            onSwitch={() => handleViewComp("individuals")}
          />
        ) : null}
        {component === "kabadpepages" ? <KabadPePagesLink /> : null}
        {component === "ContentEditComp" ? <ContentEditComp /> : null}
        {component === "individuals" ? (
          <ForIndividuals
            onSwitchPrev={() => handleViewComp("addsubscription")}
            onactive={component}
            onSwitch={() => handleViewComp("individuals")}
          />
        ) : null}

        {component === "AllAppointment" ? (
          <FrenchAppointments
            component="admin"
            refetchAppoinment={refetch}
            appoinments={appoinments}
          />
        ) : null}
        {component === "otherAppoint" ? (
          <FrenchAppointTwo updatedFrenchAppointData={apntDataTwo} />
        ) : null}

        {component === "transaction" ? <AdminTransaction /> : null}
        {component === "managewaste" ? <AdminManageWaste /> : null}
        {component === "allpost" ? <AllBlogPost /> : null}
        {component === "addpost" ? <CreateBlog /> : null}
        {component === "adminbid" ? <AdminBid /> : null}


      </section>
    </>
  );
};

export default AdminPanel;
