import React, { useState } from "react";
import "../style/Ratelist.css";
import "../style/MyAccount.css";
import Climconnectrightpart from "../ClimconnectComp/Climconnectrightpart";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import {
  FaGlobeAmericas,
  FaUserTag,
  FaGlobeAfrica,
  FaBell,
} from "react-icons/fa";
import { SiHelpscout } from "react-icons/si";
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

const Clinconnectpage = () => {
  const [climConnectMenu, setClimConnectMenu] = useState("feed");
  const [sideClimNav , setSideClimNav] = useState(false);
  const state = useState("");
  return (
    <>
      <ClimeOutlet state={state}>
        {!state?.[0] || climConnectMenu == "feed" ? (
          <div className="clim-connect-grid-bx">
            <div className={sideClimNav ? "clim-connect-side-menu climconectsidemenuactive" : "clim-connect-side-menu"}>
              <div className="clim-conect-side-menu-list-bx">
                <li
                  onClick={() => setClimConnectMenu("feed")}
                  className={
                    climConnectMenu === "feed"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <AiOutlineAppstoreAdd className="clim-icon" />
                  <span>Feed</span>
                </li>

                {/* <li
                  onClick={() => setClimConnectMenu("support")}
                  className={
                    climConnectMenu === "support"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <SiHelpscout className="clim-icon" />
                  <span>Support Climate</span>
                </li>

                <li
                  onClick={() => setClimConnectMenu("contribution")}
                  className={
                    climConnectMenu === "contribution"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <FaGlobeAmericas className="clim-icon" />
                  <span>My Contribution</span>
                </li>

                <li
                  onClick={() => setClimConnectMenu("campaign")}
                  className={
                    climConnectMenu === "campaign"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <FaGlobeAfrica className="clim-icon" />
                  <span>My Campaign</span>
                </li> */}

                {/* <li
                  onClick={() => setClimConnectMenu("message")}
                  className={
                    climConnectMenu === "message"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <BiMessageDetail className="clim-icon" />
                  <span>Message</span>
                </li> */}

                <li
                  onClick={() => setClimConnectMenu("folowing")}
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
                  onClick={() => setClimConnectMenu("profile")}
                  className={
                    climConnectMenu === "profile"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <FaUserTag className="clim-icon" />
                  <span>Profile</span>
                </li>

                {/* <li
                  onClick={() => setClimConnectMenu("notification")}
                  className={
                    climConnectMenu === "notification"
                      ? "clim-connect-menu-btn climconectmenuactive"
                      : "clim-connect-menu-btn"
                  }
                >
                  <FaBell className="clim-icon" />
                  <span>Notifications</span>
                </li> */}
              </div>
            </div>

            {climConnectMenu === "profile" ? <Climconnectrightpart /> : null}
            {climConnectMenu === "feed" ? (
              <ClimconnectFeed query={state?.[0]} />
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
