import React, { useState } from "react";
import InstaSlides from "../InstaSlide";

const InstaFeed = () => {
  const [insta, setInsta] = useState(InstaSlides);

  return (
    <>
      <section className="insta-feed-comp">
        <div className="apnt-heading">
          <p>Current Insta Posts</p>
          <h3>Insta Feeds</h3>
        </div>

        <div className="insta-feed-slider">
          <div className="has-scrollbar">
            {insta.map((elem, id) => {
              return (
                <>
                  <div className="scrollbar-items" key={id}>
                    <div className="insta-feed-bx">
                      <img src={elem.img} alt="" />
                      <div className="insta-like-comment-flex-bx">
                        <div className="post-edit-bx">
                          <i class="fa-regular fa-heart"></i>
                          <span>250</span>
                        </div>
                        <div className="post-edit-bx">
                          <i class="fa-regular fa-comment"></i>
                          <span>325</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstaFeed;
