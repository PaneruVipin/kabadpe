import React, { useEffect, useState, useCallback, useRef } from "react";
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
  setSortFn,
  onProfileClick = () => {},
  setSelectedProfile = () => {},
}) => {
  const containerRef = useRef(null);
  const [itemHeights, setItemHeights] = useState([]);
  const [settingPopup, setSettingPopup] = useState({});
  const [showBoxes, setShowBoxes] = useState(4);
  const [loginForm, setLoginForm] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [reportPost, setReportPost] = useState(false);
  const [selectedValues, setSelectedValues] = useState({});
  const [loading, setLoading] = useState(false);
  const { userInfo } = useSelector((s) => s.user);
  const [otherSortFn, setOtherSortFn] = useState({ fn: () => {} });
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
  const handleReletedClick = (category) => {
    setSortFn({
      fn: (a, b) => {
        if (a?.categoryName == category && b?.categoryName != category) {
          return -1;
        } else if (a?.categoryName != category && b?.categoryName == category) {
          return 1;
        } else {
          return 0;
        }
      },
    });
  };

  const { data: connections, refetch } = useQuery({
    queryKey: ["climeconnectionsFetch"],
    queryFn: () =>
      climeconnectionsFetch({ connectionType: "following", id: userInfo?.id }),
  });

  useEffect(() => {
    const calculateHeights = () => {
      const items = containerRef?.current?.children;
      const heights = [];

      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const height = item.offsetHeight;
        heights.push(height);
      }

      setItemHeights(heights);
    };

    calculateHeights();
    window.addEventListener("resize", calculateHeights);

    return () => {
      window.removeEventListener("resize", calculateHeights);
    };
  }, [data, sortFn, showBoxes]);
  return (
    <>
      <div
        ref={containerRef}
        style={{
          position: "relative",
        }}
        className="clim-conect-post-grid-bx"
      >
        {data
          ?.sort(sortFn)
          // ?.sort(otherSortFn?.fn)
          ?.slice(0, showBoxes)
          ?.map(
            (
              {
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
              },
              index
            ) => {
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
              let top = 0;
              const heightBefore = itemHeights?.filter(
                (e, i) => index % 2 == i % 2 && index > i
              );
              top =
                heightBefore?.reduce((a, b) => a + b, 0) +
                heightBefore?.length * 20;
              return (
                <div
                  style={{
                    background: ctg?.colorCode,
                    padding: "10px",
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    right: !(index % 2) ? null : "0px",
                    left: index % 2 ? null : "0px",
                    top: `${top}px`,
                  }}
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
                  <div className="cc-post-img-prof">
                    <img
                      onClick={() => {
                        setSelectedProfile({ id, userId: rest?.userId });
                        onProfileClick();
                      }}
                      style={{ cursor: "pointer" }}
                      src={
                        User?.profileImage ||
                        "/images/temp/temp-user-profile.png"
                      }
                      alt=""
                    />
                    <div className="cc-post-det">
                      <div className="post-name-flex">
                        <h6
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSelectedProfile({ id, userId: rest?.userId });
                            onProfileClick();
                          }}
                        >
                          {User?.fullname || author}
                        </h6>
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
                    </div>
                  </div>
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
                      {/* <img
                        src={
                          User?.profileImage ||
                          "/images/temp/temp-user-profile.png"
                        }
                        alt=""
                      /> */}
                      <div className="cc-post-det">
                        {/* <div className="post-name-flex">
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
                        </div> */}
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
                          <div
                            style={{ cursor: "pointer" }}
                            className="post-twit-bx"
                            onClick={() => {
                              navigator.share({
                                url: `https://www.kabadpe.com/climconnect/blog/${btoa(
                                  id
                                )}`,
                              });
                            }}
                          >
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
                      <h5
                        style={{
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                          maxHeight: "60px",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          overflow: "hidden",
                          boxSizing: "border-box",
                        }}
                      >
                        {title}
                      </h5>
                      <div
                        style={{
                          color: "black",
                          width: "100%",
                          // border: "1px solid transparent",
                          // padding: "10px",
                          lineHeight: "1.2em",
                          margin: "20px 0px",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 2,
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          overflow: "hidden",
                          boxSizing: "border-box",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: content,
                        }}
                      />
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        style={{
                          // zIndex: 10,
                          position: "absolute",
                          bottom: "-10px",
                          right: "0px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        }}
                      >
                        <p
                          style={{
                            display: "block",
                            marginBottom: "0px",
                            color: "black",
                          }}
                        >
                          {categoryName}
                        </p>
                        {/* <p
                          onClick={() => handleReletedClick(categoryName)}
                          style={{ display: "block", marginBottom: "0px" }}
                        >
                          Similar Posts
                        </p> */}
                      </div>
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
