import React from "react";
import { NavLink } from "react-router-dom";

const BlogFront = () => {
  return (
    <>
      <section className="blog-front-comp">
        <div className="common-container">
          <div className="blog-front-grid-main">
            <div className="blog-card-main">
            <div className="left-blog-front-card-grid">
              <div className="blog-front-card-bx">
                <div className="blog-front-img">
                  <img src="/images/customImg/post-2.jpg" alt="" />
                </div>
                <div className="blog-front-info">
                  <span>May 05, 2020</span>
                  <NavLink to="#">
                    <h5>Why is a ticket to lagos so expensive?</h5>
                  </NavLink>

                  <div className="admin-comment-flex">
                    <span>by admin</span>
                    <span>07 Comments</span>
                  </div>

                  <p>
                    Tempor incididunt labore dolore magna aliqua. enim minim
                    veniam quis nostrud exercitation laboris.
                  </p>

                  <NavLink to="#" className="link-b">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>

              <div className="blog-front-card-bx">
                <div className="blog-front-img">
                  <img src="/images/customImg/post-3.jpg" alt="" />
                </div>
                <div className="blog-front-info">
                  <span>May 05, 2020</span>
                  <NavLink to="#">
                    <h5>Why is a ticket to lagos so expensive?</h5>
                  </NavLink>

                  <div className="admin-comment-flex">
                    <span>by admin</span>
                    <span>07 Comments</span>
                  </div>

                  <p>
                    Tempor incididunt labore dolore magna aliqua. enim minim
                    veniam quis nostrud exercitation laboris.
                  </p>

                  <NavLink to="#" className="link-b">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>

              <div className="blog-front-card-bx">
                <div className="blog-front-img">
                  <img src="/images/customImg/post-4.jpg" alt="" />
                </div>
                <div className="blog-front-info">
                  <span>May 05, 2020</span>
                  <NavLink to="#">
                    <h5>Why is a ticket to lagos so expensive?</h5>
                  </NavLink>

                  <div className="admin-comment-flex">
                    <span>by admin</span>
                    <span>07 Comments</span>
                  </div>

                  <p>
                    Tempor incididunt labore dolore magna aliqua. enim minim
                    veniam quis nostrud exercitation laboris.
                  </p>

                  <NavLink to="#" className="link-b">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>

              <div className="blog-front-card-bx">
                <div className="blog-front-img">
                  <img src="/images/customImg/post-5.jpg" alt="" />
                </div>
                <div className="blog-front-info">
                  <span>May 05, 2020</span>
                  <NavLink to="#">
                    <h5>Why is a ticket to lagos so expensive?</h5>
                  </NavLink>

                  <div className="admin-comment-flex">
                    <span>by admin</span>
                    <span>07 Comments</span>
                  </div>

                  <p>
                    Tempor incididunt labore dolore magna aliqua. enim minim
                    veniam quis nostrud exercitation laboris.
                  </p>

                  <NavLink to="#" className="link-b">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>

              <div className="blog-front-card-bx">
                <div className="blog-front-img">
                  <img src="/images/customImg/post-6.jpg" alt="" />
                </div>
                <div className="blog-front-info">
                  <span>May 05, 2020</span>
                  <NavLink to="#">
                    <h5>Why is a ticket to lagos so expensive?</h5>
                  </NavLink>

                  <div className="admin-comment-flex">
                    <span>by admin</span>
                    <span>07 Comments</span>
                  </div>

                  <p>
                    Tempor incididunt labore dolore magna aliqua. enim minim
                    veniam quis nostrud exercitation laboris.
                  </p>

                  <NavLink to="#" className="link-b">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>

              <div className="blog-front-card-bx">
                <div className="blog-front-img">
                  <img src="/images/customImg/post-7.jpg" alt="" />
                </div>
                <div className="blog-front-info">
                  <span>May 05, 2020</span>
                  <NavLink to="#">
                    <h5>Why is a ticket to lagos so expensive?</h5>
                  </NavLink>

                  <div className="admin-comment-flex">
                    <span>by admin</span>
                    <span>07 Comments</span>
                  </div>

                  <p>
                    Tempor incididunt labore dolore magna aliqua. enim minim
                    veniam quis nostrud exercitation laboris.
                  </p>

                  <NavLink to="#" className="link-b">
                    Read More <i className="fa-solid fa-arrow-right-long"></i>
                  </NavLink>
                </div>
              </div>

            
            </div>

            <button className="load-more-btn">
                Load More
              </button>

              </div>

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

              <h5>Themes</h5>

              <div className="categ-list">
                <button className="categ-btn">Health</button>

                <button className="categ-btn">Beauty</button>

                <button className="categ-btn">Travel</button>

                <button className="categ-btn">Tips & Tricks</button>

                <button className="categ-btn">Top Rated</button>
              </div>

              <h5>Trendings</h5>

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

          




              <h5>Archives</h5>

              <div className="categ-list">
                <button className="categ-btn">April 2022</button>

                <button className="categ-btn">May 2021</button>

                <button className="categ-btn">June 2020</button>

                <button className="categ-btn">Augost 2018</button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogFront;
