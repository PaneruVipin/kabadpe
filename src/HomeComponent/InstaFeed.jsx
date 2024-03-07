import React, { useState } from "react";
import InstaSlides from "../InstaSlide";
import { useQuery } from "@tanstack/react-query";
import { instafeedFetch } from "../apis/kbadpeUser/instafeed";

const InstaFeed = () => {
  const [insta, setInsta] = useState(InstaSlides);
  const { data: feed, refetch } = useQuery({
    queryKey: ["instafeedFetch"],
    queryFn: () => instafeedFetch(),
  });
  return (
    <>
      <section className="insta-feed-comp">
        <div className="apnt-heading">
          <p>Current Insta Posts</p>
          <h3>Insta Feeds</h3>
        </div>

        <div className="insta-feed-slider">
          <div className="has-scrollbar">
            {!feed?.error && feed?.length
              ? feed?.map(({ id, media_url, thumbnail_url, permalink }) => {
                  return (
                    <>
                      <a target="_blank" href={permalink}>
                        <div
                          style={{ cursor: "pointer" }}
                          className="scrollbar-items"
                          key={id}
                        >
                          <div className="insta-feed-bx">
                            <img src={thumbnail_url || media_url} alt="" />
                            <div className="insta-like-comment-flex-bx">
                              <div className="post-edit-bx">
                                <i class="fa-regular fa-heart"></i>
                                {/* <span>250</span> */}
                              </div>
                              <div className="post-edit-bx">
                                <i class="fa-regular fa-comment"></i>
                                {/* <span>325</span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstaFeed;
