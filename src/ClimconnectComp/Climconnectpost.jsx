import React, { useState } from "react";
import { ClimconnectPostData } from "./climconnectpost.js";

const Climconnectpost = () => {
    const [showBoxes, setShowBoxes] = useState(4);

    const handleLoadMore = () => {
        setShowBoxes((prevShowBoxes) => prevShowBoxes + 4);
      };

  return (
    <>
      <div className="clim-conect-post-grid-bx">
        {ClimconnectPostData.slice(0, showBoxes).map(
          ({ id, profName, profImg, postImg, category, title, para }) => {
            return (
              <>
                <div
                  className={
                    category === "Events"
                      ? "cc-post-bx cc-post-bx1"
                      : category === "News"
                      ? "cc-post-bx cc-post-bx2"
                      : category === "Fundraise"
                      ? "cc-post-bx cc-post-bx3"
                      : category === "Sustainability hacks"
                      ? "cc-post-bx cc-post-bx4"
                      : category === "Innovations & Eco-finds"
                      ? "cc-post-bx cc-post-bx5"
                      :  category === "Sustainable Living" ?
                      "cc-post-bx cc-post-bx6" 
                      : category === "Sustainable Fasion & cosmetics" ?
                      "cc-post-bx cc-post-bx7" 
                      : category === "Eco-Tourism" ?
                      "cc-post-bx cc-post-bx8" 
                      : category === "Culture, art & food" ?
                      "cc-post-bx cc-post-bx3" 
                      : category === "ClimStripe Shift corne" ?
                      "cc-post-bx cc-post-bx5" 
                      : ""



                  }
                  key={id}
                >
                  <div className="cc-post-img-flex">
                    {postImg.map((curImg) => {
                      return (
                        <img
                          style={{ width: postImg.length > 1 ? "49%" : "100%" }}
                          src={curImg}
                          alt=""
                        />
                      );
                    })}
                  </div>

                  <div className="cc-post-info-data">
                    <div className="cc-post-img-prof">
                      <img src={profImg} alt="" />
                      <div className="cc-post-det">
                        <div className="post-name-flex">
                          <h6>{profName}</h6>
                          <button className="follow-btn">Follow</button>
                        </div>
                        <div className="like-share-comment-flex-bx">
                          <div className="post-twit-bx">
                            <div className="p-t-icon">
                              <i class="fa-solid fa-heart"></i>
                            </div>
                            <span>2</span>
                          </div>

                          <div className="post-twit-bx">
                            <div className="p-t-icon">
                              <i class="fa-regular fa-comment-dots"></i>
                            </div>
                            <span>2</span>
                          </div>

                          <div className="post-twit-bx">
                            <div className="p-t-icon">
                              <i class="fa-solid fa-share"></i>
                            </div>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-infor-cc">
                      <h5> {title} </h5>

                      <p> {para} </p>

                      <span> {category} </span>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        )}
      </div>

      <button onClick={handleLoadMore} className="load-more-btn">
        Load More
      </button>

      
    </>
  );
};

export default Climconnectpost;
