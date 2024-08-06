import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import InstaFeed from "../HomeComponent/InstaFeed";
import MainFooter from "../HomeComponent/MainFooter";
import { useQuery } from "@tanstack/react-query";
import { blogPostFetch, blogPostFetchOne } from "../apis/blogs/blog";
import { FaShareAlt } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { DateTime } from "luxon";
import { commentBlogPost } from "../apis/blogs/comment";
import { toast } from "react-toastify";
import UserForm from "../Components/UserForm";
import { useSelector } from "react-redux";
import { debounceAsync } from "../lib/debounce";
import { RiMenu2Fill } from "react-icons/ri";

import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ClimeOutlet from "./ClimeOutLet";
import { climeCategories } from "../lib/climeCategories";
import Climconnectpost from "../ClimconnectComp/Climconnectpost.jsx";
import { likeUnlikeBlog } from "../apis/blogs/like.js";
import { scrollToSection } from "../lib/scroll.js";
import { MdOutlineReport } from "react-icons/md";
import ReportPopup from "../ClimconnectComp/ReportPopup.jsx";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Addpostpopup from "../ClimconnectComp/Addpostpopup.jsx";
import ConfirmDeletePopup from "../ClimconnectComp/ConfirmDeletePopup.jsx";
const BlogDet = () => {
  const { id } = useParams();
  const state = useState("");

  return (
    <>
      <Header />
      <ClimeOutlet state={state}>
        <BlogDetail state={state} id={id} />
        <InstaFeed />
        <MainFooter />
      </ClimeOutlet>
    </>
  );
};

export const BlogDetail = ({ id, state }) => {
  const hello = useLocation();
  const [comment, setComment] = useState("");
  const { userInfo } = useSelector((s) => s?.user);
  const [loginForm, setLoginForm] = useState(false);
  const [showBoxes, setShowBoxes] = useState(4);
  const [reportPopup, setReportPopup] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editPost, setEditPost] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [blogRight , setBlogRight] = useState(false);

  const handleLoadMore = () => {
    setShowBoxes((prevShowBoxes) => prevShowBoxes + 4);
  };
  const { data: post, refetch } = useQuery({
    queryKey: ["blogPostFetchOne"],
    queryFn: () => blogPostFetchOne({ id, views: "yes" }),
  });
  const image = JSON.parse(post?.image || "[]");
  const path = window.location;
  const commentProtectClick = (fn = () => {}) => {
    if (userInfo?.role == "user") {
      return fn;
    } else {
      return () => setLoginForm(true);
    }
  };
  const handleSubmitComment = commentProtectClick(async () => {
    if (!comment) {
      return;
    }
    const data = { id: +atob(id), comment };
    const res = await commentBlogPost(data);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    refetch();
    setComment("");
    toast.success(res);
  });
  const { data: posts, refetch: refetchAllPost } = useQuery({
    queryKey: ["blogpostssearch"],
    queryFn: () => blogPostFetch({ search: selectedCategory || state?.[0] }),
  });
  useEffect(() => {
    setSelectedCategory("");
    debounceAsync(refetchAllPost, 300)();
  }, [state?.[0]]);
  useEffect(() => {
    refetchAllPost();
  }, [selectedCategory]);
  useEffect(() => {
    setSelectedCategory("");
    refetch();
    state[1]("");
  }, [id, hello.key]);

  const { data: connections, refetch: refetchConnections } = useQuery({
    queryKey: ["climeconnectionsFetch3425"],
    queryFn: () => climeconnectionsFetch({ connectionType: "following" }),
  });
  // const handleFollowUnfollowClick = async (id, followingStatus) => {
  //   const res = await climeFollowUnfollow({ id, followingStatus });
  //   refetch();
  // };
  const handleLikeUnlikeClick = async (id, status) => {
    const res = await likeUnlikeBlog({ id, status });
    refetch();
    refetchData();
  };
  const likeStatus = post?.BlogLikes?.find(
    ({ userId }) => userId == userInfo?.id
  );
  const newLikeStatus = likeStatus ? "delete" : "active";
  const followingStatus = !connections?.error
    ? connections?.find(({ followingId }) => followingId === post?.User?.id)
    : null;
  const newFollowingStatus = followingStatus ? "delete" : "active";

  const handleClick = () => {

    if(blogRight){
      setBlogRight(false)
    }
    
  }

  const navigate = useNavigate();
  
  return (
    <section className="blog-front-comp" onClick={handleClick}>
      <div className="common-container">
        <div className="blog-front-grid-main">
          <div className="blog-det-left-box">
            {selectedCategory || state?.[0] ? (
              <Climconnectpost
                comp="search"
                refetch={refetchAllPost}
                data={!posts?.error ? posts : []}
              />
            ) : !post?.error ? (
              <>
                <div className="blog-det-bx">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      // style={{ display: "flex", alignItems: "center" }}
                      className="cc-post-img-prof"
                    >
                      <img
                        src={
                          post?.User?.profileImage ||
                          "/images/temp/temp-user-profile.png"
                        }
                        alt=""
                      />
                      <div className="cc-post-det">
                        <div className="post-name-flex">
                          <h6>{post?.User?.fullname || post?.author}</h6>
                          <div className="blog-date-admin-com-flex">
                            <span>
                              {DateTime.fromISO(post?.addedOn, {
                                zone: "utc",
                              })
                                .setZone("Asia/Kolkata")
                                .toFormat("ccc dd LLL yyyy")}
                            </span>
                            {!post?.userId ? <span>by admin</span> : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      {userInfo?.id !== post?.User?.id && post?.User?.id ? (
                        <button
                          onClick={commentProtectClick(() =>
                            handleFollowUnfollowClick(
                              post?.User?.id,
                              newFollowingStatus
                            )
                          )}
                          className="follow-btn"
                        >
                          {followingStatus ? "Unfollow" : "Follow"}
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <h6>{post?.title}</h6>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className="like-share-comnt-flex-bx"
                  >
                    <div style={{ display: "flex", gap: "20px" }}>
                      <div className="post-twit-bx">
                        <div
                          style={{ cursor: "pointer" }}
                          className="p-t-icon"
                          onClick={commentProtectClick(() =>
                            handleLikeUnlikeClick(post?.id, newLikeStatus)
                          )}
                        >
                          <i className="fa-solid fa-heart"></i>
                        </div>
                        <span>{post?.BlogLikes?.length}</span>
                      </div>

                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => scrollToSection("comment")}
                        className="post-twit-bx"
                      >
                        <div className="p-t-icon">
                          <i className="fa-regular fa-comment-dots"></i>
                        </div>
                        <span>{post?.BlogComments?.length}</span>
                      </div>
                      {userInfo?.id == post?.User?.id && post?.User?.id ? (
                        <>
                          <div className="post-twit-bx">
                            <div
                              style={{ cursor: "pointer" }}
                              className="p-t-icon"
                              onClick={commentProtectClick(() =>
                                setEditPost(true)
                              )}
                            >
                              <FaEdit
                                style={{ width: "20px", height: "20px" }}
                              />
                            </div>
                          </div>
                          <div className="post-twit-bx">
                            <div
                              style={{ cursor: "pointer" }}
                              className="p-t-icon"
                              onClick={commentProtectClick(() =>
                                setDeletePopup(true)
                              )}
                            >
                              <MdDelete
                                style={{ width: "20px", height: "20px" }}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="post-twit-bx">
                          <div
                            style={{ cursor: "pointer" }}
                            className="p-t-icon"
                            onClick={commentProtectClick(() =>
                              setReportPopup(true)
                            )}
                          >
                            <MdOutlineReport
                              style={{ width: "20px", height: "20px" }}
                            />
                          </div>
                          {/* <span>{post?.BlogLikes?.length}</span> */}
                        </div>
                      )}
                    </div>
                  </div>
                  <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators={true}
                    // showThumbs={false}
                    // autoPlay
                    // infiniteLoop
                    // interval={5000}
                    // transitionTime={500}
                  >
                    {image?.map((img, i) => (
                      <div key={i} className="blog-det-img">
                        <img src={img} alt="" />
                      </div>
                    ))}
                  </Carousel>
                  <div className="blog-det-info">
                    <div
                      style={{ color: "black" }}
                      dangerouslySetInnerHTML={{ __html: post?.content }}
                    />
                  </div>

                  {/* <div className="blog-det-img-grid">
                  <div className="blog-det-img-bx">
                    <img src="/images/customImg/post-7.jpg" alt="" />
                  </div>

                  <div className="blog-det-img-bx">
                    <img src="/images/customImg/post-6.jpg" alt="" />
                  </div>
                </div>

                <div className="blog-det-info">
                  <h6>Why is a ticket to lagos so expensive?</h6>

                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamo laboris nisi ut aliquip ex ea commodo consequat. duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim est laborum. Sed ut perspiciatis unde
                    omnis iste natus error sit voluptatem accusantium dolore que
                    laudantium totam rem aperiam eaque ipsa quae ab illo
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo.
                  </p>

                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit fugit sed quia consequuntur magni dolore eos qui
                    ratione voluptatem sequi nesciunt. Neque poro quisquam est,
                    qui dolore ipsum quia dolor sit amet.consectetur adipisci
                    velit, sed quia non numquam eius modi tempora.
                  </p>
                </div> */}

                  <div className="tag-follow-flex-main">
                    {post?.seoTags ? (
                      <div className="tag-follow-flex-bx">
                        <h5>Tags:</h5>
                        <div className="tag-flex-bx">
                          {post?.seoTags?.split(",")?.map((t) => (
                            <button key={t} className="tag-btn">
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="tag-follow-flex-bx tag-soc-flex-bx">
                      <h5>Share Post:</h5>
                      <div className="tag-flex-bx">
                        <NavLink to="#">
                          <FacebookShareButton url={path?.href}>
                            <i className="fa-brands fa-facebook"></i>
                          </FacebookShareButton>
                        </NavLink>

                        <NavLink to="#">
                          <TwitterShareButton url={path?.href}>
                            <i className="fa-brands fa-twitter"></i>
                          </TwitterShareButton>
                        </NavLink>

                        <NavLink to="#">
                          <LinkedinShareButton url={path?.href}>
                            <i className="fa-brands fa-linkedin"></i>
                          </LinkedinShareButton>
                        </NavLink>
                        <NavLink
                          to="#"
                          onClick={() => {
                            navigator.share({
                              title: post?.title,
                              text: path?.href,
                            });
                          }}
                        >
                          <FaShareAlt />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className=" comment-main show-commnets-box">
                  <h5> {post?.BlogComments?.length} Comments</h5>

                  <div className="user-comn-list mt-4">
                    {!post?.error
                      ? post?.BlogComments?.slice(0, showBoxes).map(
                          ({ id, comment, User }) => (
                            <div className="user-comnt-bx " key={id}>
                              <div className="user-comnt-img">
                                <img src={User?.profileImage} alt="" />
                              </div>
                              <div className="user-comnt-det">
                                <h6>{User?.fullname}</h6>
                                <span></span>
                                {/* khushi124@gmail.com */}
                                <p>{comment}</p>
                              </div>
                            </div>
                          )
                        )
                      : null}

                    <button onClick={handleLoadMore} className="load-more-btn">
                      Load More
                    </button>
                  </div>
                </div>
                <div id="comment" className="comment-main">
                  <h5>Leave A Comments</h5>
                  <div className="comnt-messge comnt-inpt">
                    <textarea
                      onChange={commentProtectClick((e) =>
                        setComment(e.target.value)
                      )}
                      value={comment}
                      name="message"
                      id="message"
                      cols="30"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleSubmitComment}
                    className="tag-btn comnt-btn-m mt-4"
                  >
                    Submit Comment
                  </button>
                </div>

                <div className="right-blog-box-toggle">

                  <div className="blog-menu-btn" onClick={() => setBlogRight(true)}>
                  <RiMenu2Fill className="b-icon" />
                  </div>

                  <div className="blog-menu-btn" onClick={() => {navigate(-1)}}>
                  <FaRegArrowAltCircleLeft  className="b-icon" />
                  </div>
                        
                </div>
                
              </>
            ) : (
              <div>Post Not Found</div>
            )}
          </div>
          <div onClick={(e) => e.stopPropagation()} className={ blogRight ? "blog-right-main blogrightactive" : "blog-right-main"}>
            <h5>Themes</h5>

            <div className="categ-list">
              {climeCategories?.map(({ name }) => (
                <button
                  onClick={() => setSelectedCategory(name)}
                  className={`categ-btn ${
                    selectedCategory == name ? "active" : ""
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>

            <h5>Trending</h5>

            <div className="pop-post-flex">
              {!posts?.error
                ? posts
                    ?.slice(0, 4)
                    ?.map(({ image, title, id, content, addedOn }) => {
                      let img = JSON.parse(image || "[]");
                      return (
                        <NavLink
                          to={`/climconnect/blog/${btoa(id)}`}
                          key={id}
                          className="post-card"
                        >
                          <div className="post-c-img">
                            <img src={img?.[0]} alt="" />
                          </div>
                          <div className="post-c-info">
                            <NavLink to="#">{title}</NavLink>
                            <span>
                              {" "}
                              {DateTime.fromISO(addedOn, {
                                zone: "utc",
                              })
                                .setZone("Asia/Kolkata")
                                .toFormat("ccc dd LLL yyyy")}
                            </span>
                          </div>
                        </NavLink>
                      );
                    })
                : null}
            </div>
          </div>
        </div>
      </div>
      {loginForm ? (
        <UserForm closepopUpUserForm={() => setLoginForm(false)} />
      ) : null}
      {reportPopup ? (
        <ReportPopup
          data={post}
          onClickClosePost={() => setReportPopup(false)}
        />
      ) : null}
      {editPost ? (
        <Addpostpopup
          initialValues={post}
          onClickClosePost={() => {
            refetch();
            setEditPost(false);
          }}
        />
      ) : null}
      {deletePopup ? (
        <ConfirmDeletePopup
          data={post}
          onClickClosePost={() => {
            setDeletePopup(false);
            refetch();
          }}
        />
      ) : null}
    </section>
  );
};
export default BlogDet;
