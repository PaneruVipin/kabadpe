import React, { useState } from "react";
import { ClimconnectPostData } from "./climconnectpost.js";
import { climeCategories } from "../lib/climeCategories.js";
import { useSelector } from "react-redux";
const Climconnectpost = ({ data, comp = "profile" }) => {
  const [showBoxes, setShowBoxes] = useState(4);
  const handleLoadMore = () => {
    setShowBoxes((prevShowBoxes) => prevShowBoxes + 4);
  };
  const { userInfo } = useSelector((s) => s.user);
  return (
    <>
      <div className="clim-conect-post-grid-bx">
        {data
          ?.slice(0, showBoxes)
          ?.map(({ id, image, categoryName, title, content, User, author }) => {
            const ctg = climeCategories.find(
              ({ name }) => name == categoryName
            );
            const img = JSON.parse(image || "[]");
            return (
              <>
                <div
                  style={{ backgroundColor: ctg?.colorCode }}
                  className={"cc-post-bx"}
                  key={id}
                >
                  <div className="cc-post-img-flex">
                    <img
                      style={{
                        width: "100%",
                      }}
                      src={img?.[0]}
                      alt=""
                    />
                  </div>

                  <div className="cc-post-info-data">
                    <div className="cc-post-img-prof">
                      <img
                        src={User ? User?.profileImage : "./favicon.jpg"}
                        alt=""
                      />
                      <div className="cc-post-det">
                        <div className="post-name-flex">
                          <h6>{User?.fullname || author}</h6>
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

                      <div dangerouslySetInnerHTML={{ __html: content }} />

                      <span> {categoryName} </span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>

      <button onClick={handleLoadMore} className="load-more-btn">
        Load More
      </button>
    </>
  );
};

export default Climconnectpost;
