import React, { useState } from "react";
import { ClimconnectPostData } from "./climconnectpost.js";
import { climeCategories } from "../lib/climeCategories.js";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
            }) => {
              const ctg = climeCategories.find(
                ({ name }) => name == categoryName
              );
              const img = JSON.parse(image || "[]");
              return (
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
                            <span>{BlogComments?.length}</span>
                          </div>

                          <div
                            className="post-twit-bx"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="p-t-icon">
                              <i class="fa-solid fa-share"></i>
                            </div>
                            {/* <span>2</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <NavLink
                      to={`/climconnect/blog/${btoa(id)}`}
                      className="post-infor-cc"
                    >
                      <h5> {title} </h5>

                      <div
                        style={{
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
                        }}
                        dangerouslySetInnerHTML={{ __html: content }}
                      />

                      <span> {categoryName} </span>
                    </NavLink>
                  </div>
                </div>
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
