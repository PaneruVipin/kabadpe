import React from "react";
import Climconectfolowerprofile from "./Climconectfolowerprofile";
import Climconnectpost from "./Climconnectpost.jsx";
import { blogPostFetch } from "../apis/blogs/blog.js";
import { useQuery } from "@tanstack/react-query";
const Climconnectrightpart = () => {
  const { data: posts, refetch } = useQuery({
    queryKey: ["blogPostFetch2"],
    queryFn: () => blogPostFetch({ postScope: "my" }),
  });
  return (
    <>
      <section className="clim-connect-right-side-box">
        <div className="comon-container">
          <Climconectfolowerprofile refetch={refetch}/>
          <Climconnectpost data={!posts?.error ? posts : []} />
        </div>
      </section>
    </>
  );
};

export default Climconnectrightpart;
