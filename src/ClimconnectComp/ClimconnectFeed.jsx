import React from "react";
import Climconnectpost from "./Climconnectpost.jsx";
import { useQuery } from "@tanstack/react-query";
import { blogPostFetch } from "../apis/blogs/blog.js";
const ClimconnectFeed = () => {
  const { data: posts, refetch } = useQuery({
    queryKey: ["blogPostFetch3"],
    queryFn: () => blogPostFetch({ includeOnly: "noDraft" }),
  });
  return (
    <>
      <section className="clim-connect-right-side-box">
        <div className="comon-container">
          <Climconnectpost
            refetch={refetch}
            data={!posts?.error ? posts : []}
          />
        </div>
      </section>
    </>
  );
};

export default ClimconnectFeed;
