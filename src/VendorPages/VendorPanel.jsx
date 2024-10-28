import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { MdCategory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import VendorDasgboard from "./VendorComp/VendorDasgboard";
import VendOrder from "./VendorComp/VendOrder";
import OrderDet from "./VendorComp/OrderDet";
import VendorProduct from "./VendorComp/VendorProduct";
import VendProdDetail from "./VendorComp/VendProdDetail";
import VendorAttributes from "./VendorAttributes";
import AtributeValues from "./VendorComp/AtributeValues";
import VendCategories from "./VendorComp/VendCategories";
import VendEditProf from "./VendorComp/VendEditProf";
import VendEditOrg from "./VendorComp/VendEditOrg";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../features/user/userActions";
import Redirect from "../Components/Auth/RedirectIfLogout";
import { useNavigate } from "react-router-dom";
import { removeFromLocalStorage } from "../lib/localStorage";
const VendorPanel = () => {
  const [component, setComponent] = useState("dashboard");
  const [vendBtn, setVendBtn] = useState(null);
  const [sideNav, setSideNav] = useState(true);
  const [prof, setProf] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [vendOrg, setVendOrg] = useState(false);
  const [productData, setProductData] = useState(null);
  const [vendorOrderData, setVendorOrderData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleViewComp = (getCompName) => {
    setComponent(getCompName);
  };

  const handleDropDwnBtnClick = (getbtnIndx) => {
    setVendBtn(getbtnIndx === vendBtn ? null : getbtnIndx);
  };

  const getDropDwnBtnClassname = (getBtnNum) => {
    return getBtnNum === vendBtn
      ? "vend-tab-btn vend-tab-btn2 venddropdwnactive"
      : "vend-tab-btn vend-tab-btn2";
  };

  const getDropDwnBtnClassnameTwo = (getBtnNum) => {
    return getBtnNum === vendBtn
      ? "vend-dropdwn-btn-list-bx vendlistactive"
      : "vend-dropdwn-btn-list-bx";
  };

  const getDropDwnBtnClassnameThree = (getvalue) => {
    return getvalue === component
      ? "vend-tab-dropdwn-btn tabdrpdwnactive"
      : "vend-tab-dropdwn-btn";
  };
  const {
    success: { login, verifySignup },
    loading: { login: loginLoading, verifySignup: verifyLoading },
  } = useSelector((s) => s.vendorAuth);
  useEffect(() => {
    dispatch(userFetch({ type: "vendor" }));
  }, [login, verifySignup, loginLoading, verifyLoading]);
  const { userInfo, success, loading } = useSelector((s) => s.user);
  // vend-tab-dropdwn-btn
  useEffect(() => {
    if (
      loading === false &&
      (userInfo?.role != "vendor" || userInfo?.vendorStatus == "inactive")
    ) {
      navigate("/vendorlogin");
    }
  }, [userInfo, success, loading]);
  return (
    <>
      <section className="vendor-top-header-comp">
        <div className="vendor-top-header-bx">
          <div className="left-vendor-bx">
            <div className="left-vend-logo">
              <img src="/images/customImg/nav-logo.png" alt="" />
            </div>

            <button
              onClick={() => setSideNav(!sideNav)}
              className="togle-menu-btn"
            >
              <HiOutlineMenuAlt2 className="vend-icon" />
            </button>
          </div>

          <div className="right-vend-flex-bx">
            <div className="not-bell-btn togle-menu-btn">
              <i className="fa-solid fa-bell"></i>
            </div>

            <div className="vend-prof-main">
              <div onClick={() => setProf(!prof)} className="vend-prof-img">
                <img src="/images/customImg/c-1.jpg" alt="" />
              </div>

              {prof ? (
                <div className="vend-porf-dropdown-bx">
                  <div
                    onClick={() => {
                      handleViewComp("dashboard"), setProf(false);
                    }}
                    className="dropdown-btn-bx"
                  >
                    <RxDashboard className="dp-icon" />
                    <span>Dashboard</span>
                  </div>

                  <div
                    onClick={() => {
                      setEditProfile(true), setProf(false);
                    }}
                    className="dropdown-btn-bx"
                  >
                    <IoSettingsOutline className="dp-icon" />
                    <span>Edit Profile</span>
                  </div>
                  <div
                    onClick={() => {
                      setVendOrg(true), setProf(false);
                    }}
                    className="dropdown-btn-bx"
                  >
                    <RiOrganizationChart className="dp-icon" />
                    <span>Edit Organization</span>
                  </div>

                  <div
                    className="dropdown-btn-bx"
                    onClick={() => {
                      removeFromLocalStorage("vendorToken");
                      window.location.reload();
                    }}
                  >
                    <MdOutlineLogout className="dp-icon" />
                    <span>Log Out</span>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          sideNav ? "vend-side-nav-main sidenavactive" : "vend-side-nav-main"
        }
      >
        <div className="v-side-nav-bx">
          <div className="vend-tab-btn-main">
            <div
              className={
                component === "dashboard"
                  ? "vend-tab-btn vendbtnactive"
                  : " vend-tab-btn"
              }
              onClick={() => handleViewComp("dashboard")}
            >
              <div className="v-tab-i">
                <RxDashboard className="v-icon" />
              </div>

              <span>Dashboard</span>
            </div>

            <div className={getDropDwnBtnClassnameThree("vendProduct")}>
              <div
                onClick={() => handleDropDwnBtnClick(1)}
                className={getDropDwnBtnClassname(1)}
              >
                <div className="v-tab-i">
                  <MdCategory className="v-icon" />
                </div>

                <span>Catalog</span>
              </div>

              <div className={getDropDwnBtnClassnameTwo(1)}>
                <li
                  onClick={() => handleViewComp("vendProduct")}
                  className={
                    component === "vendProduct"
                      ? "vend-li-btn liactive"
                      : "vend-li-btn"
                  }
                >
                  Products
                </li>
                {/* <li
                  onClick={() => handleViewComp("vendAtribute")}
                  className={
                    component === "vendAtribute"
                      ? "vend-li-btn liactive"
                      : "vend-li-btn"
                  }
                >
                  Attributes
                </li>

                <li
                  onClick={() => handleViewComp("vendcategories")}
                  className={
                    component === "vendcategories"
                      ? "vend-li-btn liactive"
                      : "vend-li-btn"
                  }
                >
                  Categories
                </li> */}

                <li className="vend-li-btn">Coupons</li>
              </div>
            </div>
          </div>

          <div
            className={
              component === "orders"
                ? "vend-tab-btn vendbtnactive"
                : " vend-tab-btn"
            }
            onClick={() => handleViewComp("orders")}
          >
            <div className="v-tab-i">
              <MdOutlineProductionQuantityLimits className="v-icon" />
            </div>

            <span>Orders</span>
          </div>
        </div>
        {/* </div> */}
      </section>

      <div
        className={
          sideNav
            ? "vend-right-allcomp-bx rgithsidepadding"
            : "vend-right-allcomp-bx"
        }
      >
        <div className="common-container-vend">
          {component === "dashboard" ? (
            <VendorDasgboard
              compTrue={"orders"}
              onOrdRed={() => setComponent("orderDetail")}
              onRedirect={() => setComponent("orders")}
            />
          ) : null}
          {component === "orders" ? (
            <VendOrder
              onOrdRed={(data) => {
                setVendorOrderData(data);
                setComponent("orderDetail");
              }}
            />
          ) : null}
          {component === "orderDetail" ? (
            <OrderDet data={vendorOrderData} compOrderDet={"orderDetail"} />
          ) : null}
          {component === "vendProduct" ? (
            <VendorProduct
              compOrderDet={"orderDetail"}
              compRedirectProdDet={(data) => {
                setProductData(data);
                setComponent("vendProdDet");
              }}
            />
          ) : null}
          {component === "vendProdDet" ? (
            <VendProdDetail data={productData} />
          ) : null}
          {component === "vendAtribute" ? (
            <VendorAttributes
              onClickRedirect={() => setComponent("atributevalues")}
            />
          ) : null}
          {component === "atributevalues" ? (
            <AtributeValues
              onClickRedirect={() => setComponent("vendAtribute")}
            />
          ) : null}
          {component === "vendcategories" ? (
            <VendCategories
              onClickRedirect={() => setComponent("vendcategories")}
            />
          ) : null}
        </div>
      </div>

      {editProfile ? (
        <VendEditProf onclickClose={() => setEditProfile(false)} />
      ) : null}
      {vendOrg ? <VendEditOrg onclickClose={() => setVendOrg(false)} /> : null}
    </>
  );
};

export default VendorPanel;
