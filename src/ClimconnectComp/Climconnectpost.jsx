import React, { useEffect, useState, useCallback } from "react";
import { climeCategories } from "../lib/climeCategories.js";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import UserForm from "../Components/UserForm.jsx";
import {
  climeFollowUnfollow,
  climeconnectionsFetch,
} from "../apis/blogs/followers.js";
import { likeUnlikeBlog } from "../apis/blogs/like.js";
import { useQuery } from "@tanstack/react-query";
import Addpostpopup from "./Addpostpopup.jsx";
import { blogPostEdit } from "../apis/blogs/blog.js";
import { FaEllipsis } from "react-icons/fa6";
import ReportPopup from "./ReportPopup.jsx";
import { Carousel } from "react-responsive-carousel";

const Climconnectpost = ({
  data,
  comp = "profile",
  refetch: refetchData,
  sortFn = () => {},
}) => {
  const [settingPopup, setSettingPopup] = useState({});
  const [showBoxes, setShowBoxes] = useState(4);
  const [loginForm, setLoginForm] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [reportPost, setReportPost] = useState(false);
  const [selectedValues, setSelectedValues] = useState({});
  const [loading, setLoading] = useState(false);

  const { userInfo } = useSelector((s) => s.user);

  // Function to fetch more items
  const fetchMoreItems = useCallback(() => {
    setLoading(true);
    setShowBoxes((prevShowBoxes) => prevShowBoxes + 4);
    setLoading(false);
    console.log("Loaded more items"); // Debug log
  }, []);

  // Scroll event handler
  const handleScroll = useCallback(() => {
    console.log("Scrolling..."); // Debug log
    const nearBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100;

    if (nearBottom && !loading) {
      console.log("Fetching more items..."); // Debug log
      fetchMoreItems();
    }
  }, [fetchMoreItems, loading]);

  // Add and clean up event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Function to handle follow/unfollow action
  const handleFollowUnfollowClick = async (id, followingStatus) => {
    await climeFollowUnfollow({ id, followingStatus });
    refetch();
  };

  // Function to handle like/unlike action
  const handleLikeUnlikeClick = async (id, status) => {
    await likeUnlikeBlog({ id, status });
    refetch();
    refetchData();
  };

  // Function to protect actions with login check
  const protectClick = (fn = () => {}) => {
    return userInfo?.role === "user" ? fn : () => setLoginForm(true);
  };

  const { data: connections, refetch } = useQuery({
    queryKey: ["climeconnectionsFetch"],
    queryFn: () => climeconnectionsFetch({ connectionType: "following" }),
  });

  return (
    <>
      <div className="clim-conect-post-grid-bx">
        {data
          ?.sort(sortFn)
          ?.slice(0, showBoxes)
          ?.map(
            ({
              id,
              image,
              categoryName,
              title,
              content,
              User,
              author,
              BlogComments,
              BlogLikes,
              BlogViews,
              ...rest
            }) => {
              const ctg = climeCategories.find(
                ({ name }) => name === categoryName
              );
              const img = JSON.parse(image || "[]");
              const followingStatus = !connections?.error
                ? connections?.find(
                    ({ followingId }) => followingId === User?.id
                  )
                : null;
              const newFollowingStatus = followingStatus ? "delete" : "active";
              const likeStatus = BlogLikes?.find(
                ({ userId }) => userId === userInfo?.id
              );
              const newLikeStatus = likeStatus ? "delete" : "active";
              return (
                <div
                  style={{ backgroundColor: ctg?.colorCode, paddingTop: "0px" }}
                  className="cc-post-bx"
                  key={id}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      columnGap: "20px",
                    }}
                  >
                    <FaEllipsis
                      onClick={() => setSettingPopup({ [id]: true })}
                      style={{ color: "black", cursor: "pointer" }}
                    />
                  </div>
                  {settingPopup?.[id] && (
                    <div
                      onMouseLeave={() => setSettingPopup({})}
                      style={{
                        position: "absolute",
                        zIndex: 100,
                        backgroundColor: "white",
                        borderRadius: "5px",
                        top: "-15px",
                        right: "-10px",
                        padding: "5px 2px",
                      }}
                    >
                      {userInfo?.id === User?.id ? (
                        <>
                          <button
                            onClick={() => {
                              setSelectedValues({
                                id,
                                image,
                                categoryName,
                                title,
                                content,
                                author,
                                ...rest,
                              });
                              setEditPost(true);
                            }}
                            style={{
                              padding: "5px 20px",
                              color: "black",
                              textDecoration: "2px",
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className=""
                            style={{
                              padding: "5px 20px",
                              color: "black",
                              textDecoration: "2px",
                            }}
                            onClick={async () => {
                              await blogPostEdit({
                                id,
                                blogStatus: "delete",
                              });
                              refetchData();
                            }}
                          >
                            Delete
                          </button>
                        </>
                      ) : (
                        <button
                          className=""
                          style={{
                            padding: "5px 20px",
                            color: "black",
                            textDecoration: "2px",
                          }}
                          onClick={protectClick(() => {
                            setSelectedValues({ id });
                            setReportPost(true);
                          })}
                        >
                          Report
                        </button>
                      )}
                    </div>
                  )}
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    transitionTime={500}
                  >
                    {img?.map((e, i) => (
                      <div key={i} className="cc-post-img-flex">
                        <img style={{ width: "100%" }} src={e} alt="" />
                      </div>
                    ))}
                  </Carousel>
                  <div className="cc-post-info-data">
                    <div className="cc-post-img-prof">
                      <img
                        src={
                          User?.profileImage ||
                          "/images/temp/temp-user-profile.png"
                        }
                        alt=""
                      />
                      <div className="cc-post-det">
                        <div className="post-name-flex">
                          <h6>{User?.fullname || author}</h6>
                          {userInfo?.id !== User?.id && User?.id ? (
                            <button
                              onClick={protectClick(() =>
                                handleFollowUnfollowClick(
                                  User?.id,
                                  newFollowingStatus
                                )
                              )}
                              className="follow-btn"
                            >
                              {followingStatus ? "Unfollow" : "Follow"}
                            </button>
                          ) : (
                            <button className="follow-btn">
                              {User?.id ? "You" : "Admin"}
                            </button>
                          )}
                        </div>
                        <div className="like-share-comment-flex-bx">
                          <div className="post-twit-bx">
                            <div
                              style={{ cursor: "pointer" }}
                              className="p-t-icon"
                              onClick={protectClick(() =>
                                handleLikeUnlikeClick(id, newLikeStatus)
                              )}
                            >
                              <i className="fa-solid fa-heart"></i>
                            </div>
                            <span>{BlogLikes?.length}</span>
                          </div>
                          <div className="post-twit-bx">
                            <div className="p-t-icon">
                              <i className="fa-regular fa-comment-dots"></i>
                            </div>
                            <span>{BlogComments?.length}</span>
                          </div>
                          <div className="post-twit-bx">
                            <div className="p-t-icon">
                              <i className="fa-solid fa-share"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <NavLink
                      to={`/climconnect/blog/${btoa(id)}`}
                      className="post-infor-cc"
                    >
                      <h5>{title}</h5>
                      <div
                        style={{
                          color: "black",
                          width: "300px",
                          height: "200px",
                          overflow: "hidden",
                          border: "1px solid transparent",
                          padding: "10px",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: "5",
                          lineHeight: "1.2em",
                          maxHeight: "calc(1.2em * 5)",
                          whiteSpace: "normal",
                          textOverflow: "ellipsis",
                          paddingBottom: "20px",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: content?.substring(0, 200),
                        }}
                      />
                      <span cla>{categoryName}</span>
                    </NavLink>
                  </div>
                </div>
              );
            }
          )}
      </div>
      {loginForm && <UserForm closepopUpUserForm={() => setLoginForm(false)} />}
      {editPost && (
        <Addpostpopup
          initialValues={selectedValues}
          onClickClosePost={() => {
            refetch();
            refetchData();
            setEditPost(false);
          }}
        />
      )}
      {reportPost && (
        <ReportPopup
          data={selectedValues}
          onClickClosePost={() => {
            refetch();
            refetchData();
            setReportPost(false);
          }}
        />
      )}
    </>
  );
};

export default Climconnectpost;
