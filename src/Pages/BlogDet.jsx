import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Components/Header";
import InstaFeed from "../HomeComponent/InstaFeed";
import MainFooter from "../HomeComponent/MainFooter";

const BlogDet = () => {
  return (
    <>
      <Header />
      <section className="blog-front-comp">
        <div className="common-container">
          <div className="blog-front-grid-main">
            <div className="blog-det-left-box">
              <div className="blog-det-bx">
                <div className="blog-det-img">
                  <img src="/images/customImg/post-1.jpg" alt="" />
                </div>

                <div className="blog-det-info">
                  <div className="blog-date-admin-com-flex">
                    <span>May 5, 2020</span>
                    <span>by admin</span>
                    <span>05 Comments</span>
                  </div>

                  <h6>The biebers just switched up their couple style.</h6>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>

                  <h6>The biebers just switched up their couple style.</h6>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>

                <div className="blog-det-img-grid">
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
                </div>

                <div className="tag-follow-flex-main">
                  <div className="tag-follow-flex-bx">
                    <h5>Tags:</h5>
                    <div className="tag-flex-bx">
                      <button className="tag-btn">Retail</button>

                      <button className="tag-btn">Health</button>
                    </div>
                  </div>

                  <div className="tag-follow-flex-bx tag-soc-flex-bx">
                    <h5>Follow Us:</h5>
                    <div className="tag-flex-bx">
                      <NavLink to="#">
                        <i class="fa-brands fa-x-twitter"></i>
                      </NavLink>

                      <NavLink to="#">
                        <i class="fa-brands fa-facebook"></i>
                      </NavLink>

                      <NavLink to="#">
                        <i class="fa-brands fa-instagram"></i>
                      </NavLink>

                      <NavLink to="#">
                        <i class="fa-brands fa-linkedin"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" comment-main show-commnets-box">
                <h5> 10 Comments</h5>

                <div className="user-comn-list mt-4">
                <div className="user-comnt-bx ">
                  <div className="user-comnt-img">
                    <img src="/images/customImg/client-01.png" alt="" />
                  </div>
                  <div className="user-comnt-det">
                    <h6>Khushi Mehta</h6>
                    <span>khushi124@gmail.com</span>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim est laborum. Sed
                      perspiciatis unde omnis.
                    </p>


                    
                  </div>
                </div>

                <div className="user-comnt-bx ">
                  <div className="user-comnt-img">
                    <img src="/images/customImg/client-01.png" alt="" />
                  </div>
                  <div className="user-comnt-det">
                    <h6>Khushi Mehta</h6>
                    <span>khushi124@gmail.com</span>
                    <p>
                      Excepteur sint occaecat cupidatat non proident sunt in
                      culpa qui officia deserunt mollit anim est laborum. Sed
                      perspiciatis unde omnis.
                    </p>


                    
                  </div>
                </div>
                
                </div>
              </div>

              <div className="comment-main">
                <h5>Leave A Comments</h5>

                <div className="comment-inpt-grid">
                  <div className="comnt-inpt">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>

                  <div className="comnt-inpt">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="comnt-messge comnt-inpt">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="tag-btn comnt-btn-m mt-4">
                  Submit Comment
                </button>
              </div>
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
      <InstaFeed />
      <MainFooter />
    </>
  );
};

export default BlogDet;
