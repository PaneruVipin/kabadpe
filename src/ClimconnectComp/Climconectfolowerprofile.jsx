import React, { useEffect, useState } from "react";
import { GrGallery } from "react-icons/gr";
import { FaLeaf } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import Addpostpopup from "./Addpostpopup";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { climeconnectionsFetch } from "../apis/blogs/followers";
import SharePost from "./SharePost";
import { NavLink, useLocation } from "react-router-dom";
import UserUpdateProf from "../Components/UserUpdateProf";
import { userProfileImageAdd } from "../apis/user";
const Climconectfolowerprofile = ({ refetch, followers, followings, post }) => {
  const { userInfo } = useSelector((s) => s.user);
  const [editProf, setEditProf] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [profBtn, setProfBtn] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    "/images/customImg/836.jpg"
  );
  const [profileImage, setProfileImage] = useState(null);
  const [profChange, setProfChange] = useState(false);
  // const [userPrf, setUserPrf] = useState(false);

  const filterTab = (index) => {
    setProfBtn(index);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpadateProfileImage = () => {
    if (profileImage)
      userProfileImageAdd(profileImage).then(() => {
        dispatch(userFetch({}));
      });
    setProfChange(false);
  };

  useEffect(() => {
    if (userInfo?.profileImage) setSelectedImage(userInfo?.profileImage);
  }, [userInfo?.profileImage]);

  return (
    <>
      <div className="clim-conect-prof-box">
        <div className="left-prof-img-bx-cc">
          <img src={userInfo?.profileImage} alt="" />
          <div
            onClick={() => setProfChange(true)}
            className="prof-edit-text-btn3"
          >
            Edit
          </div>
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
          <NavLink
            to={"#"}
            onClick={() => setEditProf(true)}
            className="edit-button black"
          >
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
      {editProf ? (
        <UserUpdateProf onCloseClick={() => setEditProf(false)} />
      ) : null}
      <div
        className={
          profChange
            ? "user-prof-change-popup-box prof-chang-popupactive"
            : "user-prof-change-popup-box"
        }
      >
        <div className="user-prof-popup-bx">
          <div className="prof-chang-img">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>

          <div className="prof-input-file-bx">
            <label htmlFor="prof_input">Update profile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              id="prof_input"
            />
          </div>

          <div>
            <button
              onClick={handleUpadateProfileImage}
              className="prof-input-file-bx"
              style={{ color: "white" }}
            >
              {" "}
              Save
            </button>
          </div>

          <div
            onClick={() => setProfChange(false)}
            className="prof-popup-close-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Climconectfolowerprofile;
