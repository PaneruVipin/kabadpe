import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "../Components/Header";
import InstaFeed from "../HomeComponent/InstaFeed";
import MainFooter from "../HomeComponent/MainFooter";
import { useQuery } from "@tanstack/react-query";
import { blogPostFetchOne } from "../apis/blogs/blog";
import { FaShareAlt } from "react-icons/fa";
import { DateTime } from "luxon";
import { commentBlogPost } from "../apis/blogs/comment";
import { toast } from "react-toastify";
import UserForm from "../Components/UserForm";
import { useSelector } from "react-redux";

const BlogDet = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <BlogDetail id={id} />
      <InstaFeed />
      <MainFooter />
    </>
  );
};

export const BlogDetail = ({ id }) => {
  const [comment, setComment] = useState("");
  const { userInfo } = useSelector((s) => s?.user);
  const [loginForm, setLoginForm] = useState(false);
  const [showBoxes, setShowBoxes] = useState(4);
  const handleLoadMore = () => {
    setShowBoxes((prevShowBoxes) => prevShowBoxes + 4);
  };
  const { data: post, refetch } = useQuery({
    queryKey: ["blogPostFetchOne"],
    queryFn: () => blogPostFetchOne({ id }),
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
  return (
    <section className="blog-front-comp">
      <div className="common-container">
        <div className="blog-front-grid-main">
          {!post?.error ? (
            <div className="blog-det-left-box">
              <div className="blog-det-bx">
                <div className="blog-det-img">
                  <img src={image?.[0]} alt="" />
                </div>

                <div className="blog-det-info">
                  <div className="blog-date-admin-com-flex">
                    <span>
                      {DateTime.fromISO(post?.addedOn, {
                        zone: "utc",
                      })
                        .setZone("Asia/Kolkata")
                        .toFormat("ccc dd LLL yyyy")}
                    </span>
                    {!post?.userId ? <span>by admin</span> : null}
                    <span>{post?.BlogComments?.length} Comments</span>
                  </div>

                  <h6>{post?.title}</h6>

                  <div style={{color:"black"}} dangerouslySetInnerHTML={{ __html: post?.content }} />
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
                      <NavLink
                        to="#"
                        onClick={() => {
                          navigator.share({
                            title: post?.title || "hello",
                            text: path?.href,
                          });
                        }}
                      >
                        <FaShareAlt />
                      </NavLink>

                      {/* <NavLink to="#"> 
                        <i class="fa-brands fa-facebook"></i>
                      </NavLink>

                      <NavLink to="#">
                        <i class="fa-brands fa-instagram"></i>
                      </NavLink>

                      <NavLink to="#">
                        <i class="fa-brands fa-linkedin"></i>
                      </NavLink> */}
                    </div>
                  </div>
                </div>
              </div>

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

              <div className="comment-main">
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
            </div>
          ) : (
            <div>post not found</div>
          )}
          <div className="blog-right-main">
            <h5>Search</h5>

            <div className="blog-search-bx">
              <input
                type="text"
                name="blogsearch"
                id="blogsearch"
                placeholder="Search..."
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            <h5>Categories</h5>

            <div className="categ-list">
              <button className="categ-btn">Health</button>

              <button className="categ-btn">Beauty</button>

              <button className="categ-btn">Travel</button>

              <button className="categ-btn">Tips & Tricks</button>

              <button className="categ-btn">Top Rated</button>
            </div>

            <h5>Popular Posts</h5>

            <div className="pop-post-flex">
              <div className="post-card">
                <div className="post-c-img">
                  <img src="/images/customImg/post-2.jpg" alt="" />
                </div>
                <div className="post-c-info">
                  <NavLink to="#">
                    The biebers just up their couple style.
                  </NavLink>
                  <span>June 06, 2020</span>
                </div>
              </div>

              <div className="post-card">
                <div className="post-c-img">
                  <img src="/images/customImg/post-4.jpg" alt="" />
                </div>
                <div className="post-c-info">
                  <NavLink to="#">
                    The biebers just up their couple style.
                  </NavLink>
                  <span>June 06, 2020</span>
                </div>
              </div>

              <div className="post-card">
                <div className="post-c-img">
                  <img src="/images/customImg/post-6.jpg" alt="" />
                </div>
                <div className="post-c-info">
                  <NavLink to="#">
                    The biebers just up their couple style.
                  </NavLink>
                  <span>June 06, 2020</span>
                </div>
              </div>

              <div className="post-card">
                <div className="post-c-img">
                  <img src="/images/customImg/post-3.jpg" alt="" />
                </div>
                <div className="post-c-info">
                  <NavLink to="#">
                    The biebers just up their couple style.
                  </NavLink>
                  <span>June 06, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loginForm ? (
        <UserForm closepopUpUserForm={() => setLoginForm(false)} />
      ) : null}
    </section>
  );
};
export default BlogDet;
