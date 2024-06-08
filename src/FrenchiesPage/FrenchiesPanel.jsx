import React, { useEffect, useState } from "react";
import "../style/Admin.css";
import { RiTableFill } from "react-icons/ri";
import { MdTabletAndroid } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { CiShop } from "react-icons/ci";
import { FiAnchor } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaPagelines } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCalendarCheck } from "react-icons/fa";
import { MdRecycling } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { BsClipboard2DataFill } from "react-icons/bs";
import { MdReviews } from "react-icons/md";
import AdminFirstComp from "../AdminComponents.jsx/AdminFirstComp";
import AdminSecondComp from "../AdminComponents.jsx/AdminSecondComp";
import BookingReviewComp from "../AdminComponents.jsx/BookingReviewComp";
import AllUser from "../AdminComponents.jsx/AllUser";
import alluserData from "../AlluserData";
import AdminAllProduct from "../AdminComponents.jsx/AdminAllProduct";
import AdminOrder from "../AdminComponents.jsx/AdminOrder";
import Orders from "../OrderData";
import Frienchies from "../AdminComponents.jsx/Frienchies";
import Wastecolect from "../AdminComponents.jsx/Wastecolect";
import SubscriptionPlan from "../AdminComponents.jsx/SubscriptionPlan";
import FrenchiesProfile from "../FrenchiesComp/FrenchiesProfile";
import FrenchCard from "../FrenchiesComp/FrenchCard";
import Frenchgraph from "../FrenchiesComp/Frenchgraph";
import FrenchReview from "../FrenchiesComp/FrenchReview";
import FrenchWasteColect from "../FrenchiesComp/FrenchWasteColect";
import wastecolectData from "../WastecolectData";
import FrenchAppointments from "../FrenchiesComp/FrenchAppointments";
import FrenchAppointData from "../FrenchAppointData";
import AddWorkArea from "../FrenchiesComp/AddWorkArea";
import Addsubscription from "../FrenchiesComp/Addsubscription";
import BuyWastePOpup from "../FrenchiesComp/BuyWastePOpup";
import BuyWasteComp from "../FrenchiesComp/BuyWasteComp";
import ViewHistory from "../FrenchiesComp/ViewHistory";
import WasteProduct from "../AdminComponents.jsx/WasteProduct";
import Bidcomp from "../FrenchiesComp/Bidcomp";
import FrenchiesSubsPlan from "../FrenchiesComp/FrenchiesSubsPlan";
import FrenchSubscriptionPlanTwo from "../FrenchiesComp/FrenchSubscriptionPlanTwo";
import { useQuery } from "@tanstack/react-query";
import { franchiseAppoinmentFetch } from "../apis/franchise/appoinment";
import {
  franchiseCapacityFetch,
  franchiseCapacityInsert,
} from "../apis/franchise/workCapacity";
import Redirect from "../Components/Auth/RedirectIfLogout";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import BidProductDetail from "../FrenchiesComp/BidProductDetail";
import WasteWallet from "../Components/WasteWallet";
import { workerPlansFetch } from "../apis/worker/plan";
import CreateBidPost from "../FrenchiesComp/CreateBidPost";
import { MdContentCopy } from "react-icons/md";
import FrenchiesWastePcikup from "../FrenchiesComp/FrenchiesWastePcikup";
import BidListing from "../FrenchiesComp/BidListing";
import { DateTime } from "luxon";
import Thanks from "../Components/Popups/Thanks";
import MyBidComp from "../FrenchiesComp/MyBidComp";
// import BuyWaste from "../WasteColectComp/BuyWaste";

const FrenchiesPanel = () => {
  const [selectedPost, setSelectedPost] = useState({});
  const [barClick, setBarClick] = useState(false);
  const [adminNavBtn, setAdminNavBtn] = useState(false);
  const [sideAdminNav, setSideAdminNav] = useState(false);
  const [iconBtn, setIconBtn] = useState(null);
  const [component, setComponent] = useState("dashboard");
  const [userFiltData, setUserFiltData] = useState(wastecolectData);
  const [activeTav, setActiveTab] = useState("");
  const [orderActive, setOrderActive] = useState(Orders);
  const [orderTab, setOrderTab] = useState(null);
  const [apntTab, setApntTab] = useState(null);
  const [notifActive, setNotifActive] = useState(false);
  const [apntData, setApntData] = useState(FrenchAppointData);
  const [buyWasteBx, setBuyWasteBx] = useState(false);
  const [paymntHist, setPaymntHist] = useState(false);
  const [guest, setGuest] = useState(false);
  const [bid, setBid] = useState(false);
  const { userInfo } = useSelector((s) => s.user);
  const handleButtonClick = (buttonName) => {
    setAdminNavBtn(buttonName === adminNavBtn ? null : buttonName);
  };

  const getButtonClassName = (buttonName) => {
    return buttonName === adminNavBtn
      ? "admin-nv-btn fren-nv-btn adminnavbtnActive"
      : "admin-nv-btn fren-nv-btn";
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
    const updatedData = wastecolectData.filter((curData) => {
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

  const handleFilterAppoint = (getvalue) => {
    const updatedappointData = FrenchAppointData.filter((curelem) => {
      return getvalue === curelem.statustype;
    });

    setApntData(updatedappointData);
    setApntTab(getvalue);
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
  const handleShareCompanyCode = () => {
    const sharedTitle = "KabadPe"; // Add your shared text here
    const sharedUrl = `https://kabadpe.com/auth/collector?cc=${userInfo?.companyCode}`;
    const combinedText = `${sharedTitle}\n\n${sharedUrl}`;
    const shareData = {
      text: combinedText,
    };
    navigator.share(shareData);
  };
  const { data: appoinments, refetch } = useQuery({
    queryKey: ["franchiseAppoinments"],
    queryFn: () => franchiseAppoinmentFetch({}),
  });
  const [appoinmentData, setAppoinmentData] = useState({});
  const { data: todayAppoinments, refetch: refetchTodatAppoinment } = useQuery({
    queryKey: ["todayfranchiseAppoinments"],
    queryFn: () => franchiseAppoinmentFetch({ date: new Date() }),
  });
  useEffect(() => {
    if (!appoinments?.error && appoinments) {
      const total = appoinments?.length;
      const pending = appoinments?.filter(
        ({ orderStatus }) => orderStatus == "active"
      )?.length;
      const unAssigned = appoinments?.filter(
        ({ workerId, assigningStatus }) =>
          assigningStatus == "cancel" || !workerId
      )?.length;
      const completed = appoinments?.filter(
        ({ orderStatus }) => orderStatus == "fullfill"
      )?.length;
      setAppoinmentData({ total, pending, unAssigned, completed });
    }
  }, [appoinments]);
  const { data: plans, refetch: refetchpaln } = useQuery({
    queryKey: ["franchisefetcPlans"],
    queryFn: () => workerPlansFetch(),
  });
  function findPlanExipryDate(plans) {
    const trueObjects = plans?.filter(
      ({ endDate, planStatus }) => endDate && planStatus == "active"
    );
    if (!trueObjects?.length) {
      return null; // No true objects found
    }
    const maxDateObject = trueObjects?.reduce((prev, current) => {
      return new Date(prev?.endDate) > new Date(current?.endDate)
        ? prev
        : current;
    });
    return maxDateObject;
  }
  return (
    <>
      <Redirect role="franchiseAdmin" path="/frenchieslogin" />
      {userInfo && userInfo?.franchiseStatus != "active" ? (
        <Thanks show={true} />
      ) : (
        <>
          <section id="side-frenchies-navbar-comp" className="top-admin-header-comp">
            <div className="admin-head-flex-box">
              <div className="left-admin-logo-box">
                <div className="admin-logo">
                  <img src="/images/customImg/logo.png" alt="" />
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
                <h4 className="admin-top-title">{userInfo?.companyName}</h4>
              </div>

              <div className="right-admin-box">
                <div className="subscrip-text">
                  {!plans?.error && findPlanExipryDate(plans) ? (
                    <p>
                      Subscription :{" "}
                      <span>
                        {DateTime.fromISO(findPlanExipryDate(plans)?.endDate, {
                          zone: "utc",
                        })
                          .setZone("Asia/Kolkata")
                          .toFormat("ccc dd LLL yyyy")}
                      </span>{" "}
                    </p>
                  ) : null}
                  <button
                    onClick={() => handleViewComp("subscriptionplan")}
                    className="renew-btn"
                  >
                    {!plans?.error && findPlanExipryDate(plans)
                      ? "Renew"
                      : "Buy Plan"}
                  </button>
                </div>

                {/* <button
          
              className=" comp-refrl-bx comp-refrl-bx4"
            >
              <div className="comp-icon">
                <i class="fa-solid fa-layer-group"></i>
              </div>

              <span>Bid </span>
            </button> */}

                <button
                  onClick={() => {
                    setBuyWasteBx(true);
                  }}
                  className=" comp-refrl-bx comp-refrl-bx3 comp-refrl-bx32"
                >
                  <div className="comp-icon">
                    <i class="fa-solid fa-bag-shopping"></i>
                  </div>

                  <span>Buy Waste </span>
                </button>
                {/* 
            <button
             
              className="buy-waste-btn"
            >
              Buy Waste
            </button> */}

                <div className="notif-main-box wallet-main-bx">
                  <button
                    onClick={() => {
                      setPaymntHist(!paymntHist), setNotifActive(false);
                    }}
                    className="side-admin-nav-btn-box admin-top-comn-btn admin-top-comn-btn2"
                  >
                    <i class="fa-solid fa-wallet"></i>
                  </button>

                  <div
                    className={
                      paymntHist
                        ? "wallet-dropdown-main-bx waletactive"
                        : "wallet-dropdown-main-bx"
                    }
                  >
                    <h5>Payment History</h5>

                    <div className="wallet-search-bx">
                      <input
                        type="text"
                        name="waletsearch"
                        id="waletsearch"
                        placeholder="Search or filter payments"
                      />
                    </div>

                    <div className="al-walt-hist-list">
                      <div className="pyment-info-main">
                        <div className="left-name-alpha-bx">
                          <span>FA</span>
                        </div>
                        <div className="right-payment-bx">
                          <div className="wallet-info-top-bx">
                            <h6>Faiz Alam</h6>
                            <span>
                              {" "}
                              <i class="fa-solid fa-plus"></i> ₹450.00
                            </span>
                          </div>
                          <div className="wallet-info-top-bx wallet-info-second-bx">
                            <p>Sent on 08 Dec, 08:30 PM</p>
                            <span>
                              From <i class="fa-solid fa-wallet"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pyment-info-main">
                        <div className="left-name-alpha-bx left-name-alpha-bx2">
                          <span>FA</span>
                        </div>
                        <div className="right-payment-bx">
                          <div className="wallet-info-top-bx wallet-info-top-bx2">
                            <h6>Khushi Mehta</h6>
                            <span>
                              {" "}
                              <i class="fa-solid fa-plus"></i> ₹560.00
                            </span>
                          </div>
                          <div className="wallet-info-top-bx wallet-info-second-bx">
                            <p>Sent on 08 Dec, 08:30 PM</p>
                            <span>
                              From <i class="fa-solid fa-wallet"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pyment-info-main">
                        <div className="left-name-alpha-bx left-name-alpha-bx2 walet-bx">
                          <span>
                            <i class="fa-solid fa-wallet"></i>
                          </span>
                        </div>
                        <div className="right-payment-bx">
                          <div className="wallet-info-top-bx wallet-info-top-bx2 walet-bx-right">
                            <h6>Harsh Mehta</h6>
                            <span>
                              {" "}
                              <i class="fa-solid fa-plus"></i> ₹880.00
                            </span>
                          </div>
                          <div className="wallet-info-top-bx wallet-info-second-bx walet-bx-right2">
                            <p>Sent on 08 Dec, 08:30 PM</p>
                            <span>
                              From <i class="fa-solid fa-wallet"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pyment-info-main">
                        <div className="left-name-alpha-bx left-name-alpha-bx3">
                          <span>FK</span>
                        </div>
                        <div className="right-payment-bx">
                          <div className="wallet-info-top-bx wallet-info-top-bx3">
                            <h6>Faruk</h6>
                            <span>
                              {" "}
                              <i class="fa-solid fa-minus"></i> ₹200.00
                            </span>
                          </div>
                          <div className="wallet-info-top-bx wallet-info-second-bx">
                            <p>Sent on 08 Dec, 08:30 PM</p>
                            <span>
                              From <i class="fa-solid fa-wallet"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pyment-info-main">
                        <div className="left-name-alpha-bx left-name-alpha-bx4">
                          <span>AH</span>
                        </div>
                        <div className="right-payment-bx">
                          <div className="wallet-info-top-bx wallet-info-top-bx4">
                            <h6>Ahmad Hasan</h6>
                            <span>
                              {" "}
                              <i class="fa-solid fa-minus"></i> ₹450.00
                            </span>
                          </div>
                          <div className="wallet-info-top-bx wallet-info-second-bx">
                            <p>Sent on 08 Dec, 08:30 PM</p>
                            <span>
                              From <i class="fa-solid fa-wallet"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="pyment-info-main">
                        <div className="left-name-alpha-bx left-name-alpha-bx2 walet-bx">
                          <span>
                            <i class="fa-solid fa-wallet"></i>
                          </span>
                        </div>
                        <div className="right-payment-bx">
                          <div className="wallet-info-top-bx wallet-info-top-bx2 walet-bx-right">
                            <h6> Fahad Alam </h6>
                            <span>
                              {" "}
                              <i class="fa-solid fa-plus"></i> ₹880.00
                            </span>
                          </div>
                          <div className="wallet-info-top-bx wallet-info-second-bx walet-bx-right2">
                            <p>Sent on 08 Dec, 08:30 PM</p>
                            <span>
                              From <i class="fa-solid fa-wallet"></i>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="view-all-btn">
                      View All <i class="fa-solid fa-angle-down"></i>
                    </div>
                  </div>
                </div>

                <div className="notif-main-box">
                  <button
                    onClick={() => {
                      setNotifActive(!notifActive), setPaymntHist(false);
                    }}
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

                <button className=" comp-refrl-bx comp-refrl-bx32 comp-refrl-bx20">
                  <div
                    // style={{
                    //   display: "flex",
                    //   justifyItems: "between",
                    //   alignItems: "center",
                    // }}
                    className="comp-icon"
                  >
                    <i class="fa-regular fa-building"></i>
                  </div>

                  <span
                    style={{
                      display: "flex",
                      justifyItems: "between",
                      alignItems: "start",
                    }}
                  >
                    {userInfo?.companyCode}{" "}
                    <i
                      onClick={handleShareCompanyCode}
                      class="fa-solid fa-share-nodes"
                    ></i>
                    <MdContentCopy
                      onClick={() => {
                        navigator.clipboard.writeText(userInfo?.companyCode);
                        toast("Copied!", {
                          pauseOnHover: false,
                          pauseOnFocusLoss: false,
                          autoClose: 500,
                        });
                      }}
                      style={{ width: "20px", height: "20px", marginTop : "4px" }}
                    />
                  </span>
                </button>

                <div className="admin-top-prof-main admin-top-prof-main2 ">
                  <div
                    onClick={() => handleViewComp("frenchiesprofile")}
                    className="admin-top-prof-box"
                  >
                    <div className="left-admin-prof-img">
                      <img
                        src={
                          userInfo?.profileImage || "/images/customImg/836.jpg"
                        }
                        alt=""
                      />
                    </div>

                    <div className="right-prof-info-admin">
                      <h6>{userInfo?.fullname}</h6>
                      <span>Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
          id="side-frenchies-navbar-comp"
            className={
              sideAdminNav
                ? "side-admin-navbar-comp side-fren-navbar-comp  sideAdminNavActive"
                : "side-admin-navbar-comp side-fren-navbar-comp "
            }
          >
            <div className="side-admin-nav-list-box">
              <div className="admin-nv-li admin-nv-li-dashbrd">
                <div
                  onClick={() => {
                    handleButtonClick(1), handleViewComp("dashboard");
                    refetchTodatAppoinment();
                  }}
                  className={
                    component === "dashboard"
                      ? "admin-nv-btn fren-nv-btn admin-nv-btn2 adminnavbtnActive"
                      : "admin-nv-btn fren-nv-btn admin-nv-btn2"
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
                  onClick={() => {
                    handleButtonClick(3);
                    handleViewComp("frenchwastecolect"),
                      setUserFiltData(wastecolectData);
                  }}
                  className={
                    component === "frenchwastecolect"
                      ? "admin-nv-btn fren-nv-btn admin-nv-btn2 adminnavbtnActive"
                      : "admin-nv-btn fren-nv-btn admin-nv-btn2"
                  }
                >
                  <div className="a-nv-i">
                    <HiMiniUsers />
                  </div>
                  <span>Workers</span>
                </div>
              </div>

              <div className="admin-nv-li">
                <div
                  onClick={() => {
                    handleButtonClick(4);
                    handleViewComp("appointments");
                    setApntData(FrenchAppointData);
                    refetch();
                  }}
                  className={
                    component === "appointments"
                      ? "admin-nv-btn fren-nv-btn admin-nv-btn2 adminnavbtnActive"
                      : "admin-nv-btn fren-nv-btn admin-nv-btn2"
                  }
                >
                  <div className="a-nv-i">
                    <FaCalendarCheck />
                  </div>
                  <span> Appointments</span>
                </div>
              </div>

              {/* <div className="admin-nv-li admin-nv-li-dashbrd">
            <div
              onClick={() => {
                handleButtonClick(1), handleViewComp("subsplan");
              }}
              className={
                component === "subsplan"
                  ? "admin-nv-btn admin-nv-btn2 adminnavbtnActive"
                  : "admin-nv-btn admin-nv-btn2"
              }
            >
              <div className="a-nv-i">
                <RiTableFill />
              </div>
              <span>Subscription Plan</span>
            </div>
          </div> */}

              <div className="admin-nv-li admin-nv-li-dashbrd">
                <div
                  onClick={() => {
                    handleButtonClick(12), handleViewComp("wasteproduct");
                  }}
                  className={
                    component === "wasteproduct"
                      ? "admin-nv-btn fren-nv-btn admin-nv-btn2 adminnavbtnActive"
                      : "admin-nv-btn fren-nv-btn admin-nv-btn2"
                  }
                >
                  <div className="a-nv-i">
                    <MdRecycling />
                  </div>
                  <span>Waste Products</span>
                </div>
              </div>
              {/* 
                <div className="admin-nv-li admin-nv-li-dashbrd">
            <div
              onClick={() => {
                handleButtonClick(12), handleViewComp("bid");
              }}
              className={
                component === "bid"
                  ? "admin-nv-btn admin-nv-btn2 adminnavbtnActive"
                  : "admin-nv-btn admin-nv-btn2"
              }
            >
              <div className="a-nv-i">
              <FiAnchor /> 
              </div>
              <span>Bid</span>
            </div>
            </div> */}
              <div className="admin-nv-li admin-nv-li-dashbrd">
                <div
                  onClick={() => {
                    handleViewComp("tnx");
                  }}
                  // className={profBtn === 7 ? "u-prf-bx profactive" : "u-prf-bx"}
                  className={
                    component === "tnx"
                      ? "admin-nv-btn fren-nv-btn admin-nv-btn2 adminnavbtnActive"
                      : "admin-nv-btn fren-nv-btn admin-nv-btn2"
                  }
                >
                  <div className="u-prf-tab-icon a-nv-i">
                    <i class="fa-solid fa-wallet"></i>
                  </div>
                  <span>My Transactions</span>
                </div>
              </div>
              <div className="admin-nv-li">
                <div
                  onClick={() => handleButtonClick(9)}
                  className={getButtonClassName(9)}
                >
                  <div className="a-nv-i">
                    <BsPersonCheckFill />
                  </div>
                  <span> Subscriptions</span>
                </div>

                <div className={getButonClasnameTwo(9)}>
                  <li
                    onClick={() => handleViewComp("subsplan")}
                    className={
                      component === "subsplan"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">My Plans </NavLink>{" "}
                  </li>

                  <li
                    onClick={() => handleViewComp("subscriptionplan")}
                    className={
                      component === "subscriptionplan"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#"> Subscriptions </NavLink>{" "}
                  </li>
                </div>
              </div>

              <div className="admin-nv-li">
                <div
                  onClick={() => handleButtonClick(20)}
                  className={getButtonClassName(20)}
                >
                  <div className="a-nv-i">
                    <MdManageAccounts />
                  </div>
                  <span> Manage Waste</span>
                </div>

                <div className={getButonClasnameTwo(20)}>
                  <li
                    onClick={() => handleViewComp("wastepickup")}
                    className={
                      component === "wastepickup"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">All Waste Pickups </NavLink>{" "}
                  </li>

                  <li
                    onClick={() => handleViewComp("curentwaste")}
                    className={
                      component === "curentwaste"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#"> Current Waste </NavLink>{" "}
                  </li>
                </div>
              </div>

              <div className="admin-nv-li">
                <div
                  onClick={() => handleButtonClick(17)}
                  className={getButtonClassName(17)}
                >
                  <div className="a-nv-i">
                    <BsClipboard2DataFill />
                  </div>
                  <span> Bid</span>
                </div>

                <div className={getButonClasnameTwo(17)}>
                  <li
                    // onClick={() => handleViewComp("subsplan")}
                    onClick={() => handleViewComp("bid")}
                    className={
                      component === "bid"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">Bid Products </NavLink>{" "}
                  </li>

                  <li
                    onClick={() => handleViewComp("bidlisting")}
                    className={
                      component === "bidlisting"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#"> My Listing </NavLink>{" "}
                  </li>

                  <li
                    onClick={() => handleViewComp("myBid")}
                    className={
                      component === "myBid"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">My Bid </NavLink>{" "}
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
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">All Orders</NavLink>{" "}
                  </li>
                  <li
                    onClick={() => handleFilterTwo("underprocess")}
                    className={
                      orderActive === "underprocess"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">Under Process</NavLink>{" "}
                  </li>
                  <li
                    onClick={() => handleFilterTwo("readyship")}
                    className={
                      orderTab === "readyship"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">Ready to Ship </NavLink>{" "}
                  </li>
                  <li
                    onClick={() => handleFilterTwo("shipped")}
                    className={
                      orderTab === "shipped"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">Shipment</NavLink>{" "}
                  </li>
                  <li
                    onClick={() => handleFilterTwo("delivered")}
                    className={
                      orderTab === "delivered"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">Delivered</NavLink>{" "}
                  </li>
                  <li
                    onClick={() => handleFilterTwo("return")}
                    className={
                      orderTab === "return"
                        ? "page-link-btn page-link-btn2 pagelinkactive"
                        : "page-link-btn page-link-btn2"
                    }
                  >
                    {" "}
                    <NavLink to="#">Return</NavLink>{" "}
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
                      ? "admin-nv-btn fren-nv-btn admin-nv-btn2 adminnavbtnActive"
                      : "admin-nv-btn fren-nv-btn admin-nv-btn2"
                  }
                >
                  <div className="a-nv-i">
                    <MdReviews />
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

              {/* <div className="admin-nv-li">
                <div
                  onClick={() => handleButtonClick(8)}
                  className={getButtonClassName(8)}
                >
                  <div className="a-nv-i">
                    <FaPagelines />
                  </div>
                  <span>Pages</span>
                </div>

                <div className={getButonClasnameTwo(8)}>
                  <li>
                    {" "}
                    <NavLink to="#">Profile</NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="#">Post Details</NavLink>{" "}
                  </li>
                  <li
                    onClick={() => handleViewComp("login")}
                    className={
                      component === "login"
                        ? "page-link-btn pagelinkactive"
                        : "page-link-btn"
                    }
                  >
                    {" "}
                    <NavLink to="#">Log-in </NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="#">Calendar</NavLink>{" "}
                  </li>
                  <li>
                    {" "}
                    <NavLink to="#">Shop</NavLink>{" "}
                  </li>
                </div>
              </div> */}

              {/* <div className="admin-nv-li">
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
              </div> */}
            </div>
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
            {component === "dashboard" ? (
              <FrenchCard
                appoinments={todayAppoinments}
                appoinmentData={appoinmentData}
              />
            ) : null}

            {component === "dashboard" ? (
              <Frenchgraph
                appoinments={todayAppoinments}
                appoinmentData={appoinmentData}
                onclickRedirectAllAppointment={() =>
                  handleViewComp("appointments")
                }
                todayData={apntData}
              />
            ) : null}

            {component === "dashboard" ? <FrenchReview /> : null}

            {component === "frenchwastecolect" ? (
              <FrenchWasteColect updatedWasteColectData={userFiltData} />
            ) : null}
            {component === "appointments" ? (
              <FrenchAppointments
                appoinments={appoinments}
                refetchAppoinment={refetch}
              />
            ) : null}

            {component === "orders" ? (
              <AdminOrder orderUpdatedData={orderActive} />
            ) : null}

            {component === "frenchies" ? <Frienchies /> : null}
            {component === "wastecolectr" ? <Wastecolect /> : null}
            {component === "subscriptionplan" ? (
              <FrenchSubscriptionPlanTwo
                component="franchise"
                onclickRedirect={() => handleViewComp("subsplan")}
              />
            ) : null}

            {component === "frenchiesprofile" ? <FrenchiesProfile /> : null}

            {component === "addworkarea" ? <AddWorkArea /> : null}
            {component === "addsubscription" ? <Addsubscription /> : null}

            {component === "buywaste" ? <BuyWasteComp /> : null}

            {component === "viewhistory" ? <ViewHistory /> : null}
            {component === "wasteproduct" ? (
              <WasteProduct component="franchise" />
            ) : null}
            {component === "subsplan" ? (
              <FrenchiesSubsPlan
                onclickRedirect={() => handleViewComp("subscriptionplan")}
              />
            ) : null}
            {component === "tnx" ? <WasteWallet component="franchise" /> : null}

            {component === "bid" ? (
              <Bidcomp
                onClickCreatePost={() => setComponent("createbidpost")}
                onClickDetPage={(data) => {
                  setSelectedPost(data);
                  setComponent("bidproddet");
                }}
              />
            ) : null}
            {component === "bidproddet" ? (
              <BidProductDetail
                data={selectedPost}
                onClickDetPage={() => setComponent("bidproddet")}
              />
            ) : null}
            {component === "createbidpost" ? <CreateBidPost  /> : null}
            {component === "bidlisting" ? (
              <BidListing
                onClickCreatePost={() => setComponent("createbidpost")}
              />
            ) : null}
            {component === "myBid" ? (
              <MyBidComp
                onClickCreatePost={() => setComponent("createbidpost")}
              />
            ) : null}
            {component === "wastepickup" ? <FrenchiesWastePcikup /> : null}
          </section>
        </>
      )}
      {buyWasteBx ? (
        <BuyWastePOpup
          buyWaste={buyWasteBx}
          onclickBtn={() => setBuyWasteBx(false)}
          onclickBuyWasteBtn={() => {
            handleViewComp("buywaste"), setBuyWasteBx(false);
          }}
          onclickViewHistBtn={() => {
            handleViewComp("viewhistory"), setBuyWasteBx(false);
          }}
        />
      ) : null}
    </>
  );
};

export default FrenchiesPanel;
