import React from "react";
import "../style/SocialFeed.css";

const SocFeedHeader = () => {
  return (
    <>
      <section className="soc-feed-header-bx">
        <div className="left-logo-search-bx">
          <div className="soc-feed-logo">
            <img src="/images/customImg/nav-logo.png" alt="" />
          </div>

          <div className="soc-feed-search-bxx">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search.."
            />
            <div className="soc-f-srch">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <div className="right-user-add-btn">
          <i className="fa-solid fa-user-plus"></i>
        </div>
      </section>
    </>
  );
};

export default SocFeedHeader;
