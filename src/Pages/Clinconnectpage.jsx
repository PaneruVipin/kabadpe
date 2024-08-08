import React, { useState } from "react";
import "../style/Ratelist.css";
import "../style/MyAccount.css";
import { GiDetour } from "react-icons/gi";
import Climconnectrightpart from "../ClimconnectComp/Climconnectrightpart";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { PiTreeStructureFill } from "react-icons/pi";
import { HiMiniInformationCircle } from "react-icons/hi2";
import {
  FaGlobeAmericas,
  FaUserTag,
  FaGlobeAfrica,
  FaBell,
} from "react-icons/fa";
import { SiHackster, SiHelpscout } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { RiUserFollowFill } from "react-icons/ri";
import ClimconnectFeed from "../ClimconnectComp/ClimconnectFeed";
import Climconeectproduct from "../ClimconnectComp/Climconectproduct";
import Chats from "../Components/Chats";
import ClimconectChat from "../ClimconnectComp/ClimconectChat";
import Climconectfollowing from "../ClimconnectComp/Climconectfollowing";
import Protect from "../Components/Auth/ProtectComp";
import UserForm from "../Components/UserForm";
import ClimeOutlet from "./ClimeOutLet";
import SearchUserPopup from "../ClimconnectComp/SearchUserPopup";
import { BsGlobe } from "react-icons/bs";
import { MdLiving, MdOutlineCottage, MdOutlineEventSeat } from "react-icons/md";
import { FaAffiliatetheme, FaArtstation, FaNewspaper } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { theme } from "antd";
import { climeCategories } from "../lib/climeCategories";

const Clinconnectpage = () => {
  const [climConnectMenu, setClimConnectMenu] = useState("feed");
  const [sideClimNav, setSideClimNav] = useState(false);
  const [themes, setThemes] = useState(true);
  const [selectedCategory, setSelectedcategory] = useState("");
  const state = useState("");
  return (
    <>
      <ClimeOutlet
        state={state}
        onclickMenuClim={() => setSideClimNav(!sideClimNav)}
      >
        {!state?.[0] || climConnectMenu == "feed" ? (
          <div className="clim-connect-grid-bx">
            <div
              className={
                sideClimNav
                  ? "clim-connect-side-menu climconectsidemenuactive"
                  : "clim-connect-side-menu"
              }
            >
              <div className="clim-conect-side-menu-list-bx">
                <li
                  onClick={() => {
                    setClimConnectMenu("feed"), setSideClimNav(false);
                    setSelectedcategory("");
                  }}
                  className={
                    climConnectMenu === "feed"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <BsGlobe className="clim-icon" />
                  <span>Feed</span>
                </li>

                <li
                  onClick={() => {
                    setClimConnectMenu("folowing"), setSideClimNav(false);
                  }}
                  className={
                    climConnectMenu === "folowing"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <RiUserFollowFill className="clim-icon" />
                  <span>Following</span>
                </li>

                <li
                  onClick={() => {
                    setClimConnectMenu("profile"), setSideClimNav(false);
                  }}
                  className={
                    climConnectMenu === "profile"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <FaUserTag className="clim-icon" />
                  <span>Profile</span>
                </li>

                <li
                  onClick={() => {
                    setThemes(!themes);
                  }}
                  className={
                    climConnectMenu === "Themes"
                      ? "clim-connect-menu-btn clim-connect-menu-btn-theme climconectmenuactive"
                      : "clim-connect-menu-btn clim-connect-menu-btn-theme"
                  }
                >
                  <FaAffiliatetheme className="clim-icon" />
                  <span>Themes</span>
                </li>

                {themes ? (
                  <div className="dropdown-theme-bx">
                    {climeCategories?.map(({ name, colorCode, Icon }) => {
                      return (
                        <li
                          onClick={() => {
                            state?.[1]("");
                            setSelectedcategory(name);
                            setClimConnectMenu("feed");
                            setSideClimNav(false);
                          }}
                          key={name}
                          className={
                            selectedCategory == name
                              ? "clim-connect-menu-btn climconectmenuactive"
                              : "clim-connect-menu-btn"
                          }
                        >
                          <Icon className="clim-icon" />
                          <span>{name}</span>
                        </li>
                      );
                    })}
                  </div>
                ) : null}

                <div className="mobile-tags-flex-bx ">
                  <NavLink
                    to={"https://www.climstripeshift.com/"}
                    target="_blank"
                  >
                    {" "}
                    <span>ClimStripe</span>{" "}
                  </NavLink>
                  <NavLink to={"https://www.kabadpe.com/"} target="_blank">
                    {" "}
                    <span>KabadPe</span>
                  </NavLink>
                  <NavLink
                    to={"https://thegreensamanshop.com/"}
                    target="_blank"
                  >
                    {" "}
                    <span>Green Saman Shop</span>
                  </NavLink>
                  <NavLink to={"/climconnect"}>
                    <span>Climconnect</span>
                  </NavLink>
                </div>
              </div>
            </div>

            {climConnectMenu === "profile" ? <Climconnectrightpart /> : null}
            {climConnectMenu === "feed" ? (
              <ClimconnectFeed
                query={state?.[0]}
                selectedCategory={selectedCategory}
              />
            ) : null}
            {climConnectMenu === "message" ? <ClimconectChat /> : null}
            {climConnectMenu === "folowing" ? <Climconectfollowing /> : null}

            <Climconeectproduct />
          </div>
        ) : climConnectMenu != "feed" ? (
          <SearchUserPopup
            onCloseClick={() => state?.[1]("")}
            query={state?.[0]}
          />
        ) : null}
      </ClimeOutlet>
    </>
  );
};

export default Clinconnectpage;
