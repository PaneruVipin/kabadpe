import React, { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { FaLeaf } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import Addpostpopup from "./Addpostpopup";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { climeconnectionsFetch } from "../apis/blogs/followers";
import SharePost from "./SharePost";
const Climconectfolowerprofile = ({ refetch, followers, followings, post }) => {

  const { userInfo } = useSelector((s) => s.user);

  return (
    <>
      <div className="clim-conect-prof-box">
        <div className="left-prof-img-bx-cc">
          <img src={userInfo?.profileImage} alt="" />
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
