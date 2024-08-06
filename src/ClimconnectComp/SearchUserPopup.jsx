import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  climeconnectionsFetch,
  climeFollowUnfollow,
  searchClimeUsers,
} from "../apis/blogs/followers";
import { IoIosArrowRoundBack } from "react-icons/io";
import UserForm from "../Components/UserForm";
import { useSelector } from "react-redux";
import { debounceAsync } from "../lib/debounce";
const SearchUserPopup = ({ query, onCloseClick }) => {
  const [loginForm, setLoginForm] = useState(false);
  const { data: followings, refetch } = useQuery({
    queryKey: ["climeconnectionsFetch1"],
    queryFn: () =>
      climeconnectionsFetch({ connectionType: "following", id: userInfo?.id }),
  });
  const { data: users, refetch: refetchUsers } = useQuery({
    queryKey: ["searchClimeUsers"],
    queryFn: () => searchClimeUsers({ query }),
  });
  const handleFollowUnfollowClick = async (id, followingStatus) => {
    const res = await climeFollowUnfollow({ id, followingStatus });
    refetch();
    refetchUsers();
  };
  const { userInfo } = useSelector((s) => s.user);
  const protectClick = (fn = () => {}) => {
    if (userInfo?.role == "user") {
      return fn;
    } else {
      return () => setLoginForm(true);
    }
  };
  useEffect(() => {
    debounceAsync(refetchUsers, 500)();
  }, [query]);

  return (
    <div className="clim-conect-folower-flex">
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          onClick={onCloseClick}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "5px 20px",
            cursor: "pointer",
            fontSize: "16px",
            width: "200px",
          }}
        >
          <IoIosArrowRoundBack
            style={{ marginRight: "8px", fontSize: "24px" }}
          />
          <span style={{ fontWeight: "bold" }}>Back</span>
        </button>
      </div>
      {!users?.error && users?.length ? (
        users?.map(({ id, profileImage, fullname }) => {
          const followText = !followings?.error
            ? followings?.find(({ followingId }) => followingId == id)
              ? "unfollow"
              : "follow"
            : "follow";
          return (
            <div className="climconect-user-folow-bx">
              <div className="folower-left-bx">
                <div className="user-folow-img">
                  <img
                    src={profileImage || "/images/temp/temp-user-profile.png"}
                    alt=""
                  />
                </div>
                <div className="user-folow-info">
                  {/* <span>{theahmed08}</span> */}
                  <h6>{fullname}</h6>
                </div>
              </div>

              <button
                onClick={protectClick(() =>
                  handleFollowUnfollowClick(
                    id,
                    followText == "follow" ? "active" : "delete"
                  )
                )}
                className="folow-btn"
              >
                {followText}
              </button>
            </div>
          );
        })
      ) : (
        <div style={{ textAlign: "center" }}>No Result Found</div>
      )}
      {loginForm ? (
        <UserForm closepopUpUserForm={() => setLoginForm(false)} />
      ) : null}
    </div>
  );
};

export default SearchUserPopup;
