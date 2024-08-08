import React, { useEffect, useState } from "react";
import Climconnectpost from "./Climconnectpost.jsx";
import { useQuery } from "@tanstack/react-query";
import { blogPostFetch } from "../apis/blogs/blog.js";
import SharePost from "./SharePost.jsx";
import FilterBar from "./Filter.jsx";
import { debounceAsync } from "../lib/debounce.js";
import ClimeProfilePopUp from "./ClimeProfilePopup.jsx";
const ClimconnectFeed = ({ query, selectedCategory }) => {
  const [sortFn, setSortFn] = useState({ fn: () => {} });
  const [showProfile, setShowProfile] = useState(false);
  const [selectedData, setSelectedProfile] = useState();
  const { data: posts, refetch } = useQuery({
    queryKey: ["blogPostFetch3"],
    queryFn: () =>
      blogPostFetch({
        includeOnly: "noDraft",
        search: query || selectedCategory,
      }),
  });
  const filters = [
    { value: "feed", text: "Feed" },
    { value: "trending", text: "Trending" },
    { value: "thematic", text: "Thematic" },
    { value: "mostLiked", text: "Most Liked" },
    { value: "mostViewed", text: "Most Viewed" },
  ];
  const handleFilterChange = (v) => {
    let newFn = { fn: () => {} };
    if (v == "mostViewed") {
      newFn.fn = (a, b) => {
        return b?.BlogViews?.length - a?.BlogViews?.length;
      };
    } else if (v == "mostLiked") {
      newFn.fn = (a, b) => {
        return b?.BlogLikes?.length - a?.BlogLikes?.length;
      };
    } else if (v == "trending") {
      newFn.fn = (a, b) => {
        const A =
          a?.BlogLikes?.length * 4 +
          a?.BlogComments?.length * 3 +
          a?.BlogViews?.length * 2;
        const B =
          b?.BlogLikes?.length * 4 +
          b?.BlogComments?.length * 3 +
          b?.BlogViews?.length * 2;
        return B - A;
      };
    } else if (v == "thematic") {
    }
    setSortFn(newFn);
  };
  useEffect(() => {
    debounceAsync(refetch, 300)();
  }, [query, selectedCategory]);
  return (
    <>
      <section
        style={{ paddingTop: "0px" }}
        className="clim-connect-right-side-box"
      >
        <SharePost refetch={refetch} />
        <FilterBar onFilterChange={handleFilterChange} />
        <div className="comon-container">
          <Climconnectpost
            comp="feed"
            sortFn={sortFn?.fn}
            setSortFn={setSortFn}
            refetch={refetch}
            data={!posts?.error ? posts : []}
            onProfileClick={() => {
              setShowProfile(true);
            }}
            setSelectedProfile={setSelectedProfile}
          />
        </div>
        {showProfile ? (
          <ClimeProfilePopUp
            selectedData={selectedData}
            onClickClosePost={() => {
              setShowProfile(false);
            }}
          />
        ) : (
          false
        )}
      </section>
    </>
  );
};

export default ClimconnectFeed;
