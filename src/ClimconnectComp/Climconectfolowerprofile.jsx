import React, { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { FaLeaf } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import Addpostpopup from "./Addpostpopup";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { climeconnectionsFetch } from "../apis/blogs/followers";
import SharePost from "./SharePost";
import { NavLink } from "react-router-dom";
const Climconectfolowerprofile = ({ refetch, followers, followings, post }) => {
  const { userInfo } = useSelector((s) => s.user);

  return (
    <>
      <div className="clim-conect-prof-box">
        <div className="left-prof-img-bx-cc">
          <img src={userInfo?.profileImage} alt="" />
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            display: "flex",
            gap: "10px",
          }}
        >
          <NavLink to={"/account?edit=true"} className="edit-button black">
            Edit
          </NavLink>
          <NavLink to={"/account"} className="edit-button black">
            Dashboard
          </NavLink>
        </div>
        <div className="right-cc-prof-info">
          <h4>{userInfo?.fullname}</h4>
          <div className="post-folow-flex">
            <h6>
              {post?.length || 0} <span>Post</span>{" "}
            </h6>
            <h6>
              {followers?.length || 0} <span>Follower</span>{" "}
            </h6>
            <h6>
              {followings?.length || 0} <span>Following</span>{" "}
            </h6>
          </div>
        </div>
      </div>

      <SharePost refetch={refetch} />
    </>
  );
};

export default Climconectfolowerprofile;
