import React from "react";
import Climconectfolowerprofile from "./Climconectfolowerprofile";
import Climconnectpost from "./Climconnectpost.jsx";
import { blogPostFetch } from "../apis/blogs/blog.js";
import { useQuery } from "@tanstack/react-query";
import ProtectClimeConnect from "./ProtectClimeConnect.jsx";
import { climeconnectionsFetch } from "../apis/blogs/followers.js";
const Climconnectrightpart = () => {
  const { data: posts, refetch } = useQuery({
    queryKey: ["blogPostFetch2"],
    queryFn: () => blogPostFetch({ postScope: "my" }),
  });
  const { data: followings, refetchFollowings } = useQuery({
    queryKey: ["climeconnectionsFetch10"],
    queryFn: () => climeconnectionsFetch({ connectionType: "following" }),
  });
  const { data: followers, refetch: refetchFollowers } = useQuery({
    queryKey: ["climeconnectionsFetch20"],
    queryFn: () => climeconnectionsFetch({ connectionType: "follower" }),
  });
  return (
    <ProtectClimeConnect>
      <section className="clim-connect-right-side-box">
        <div className="comon-container">
          <Climconectfolowerprofile
            followings={followings}
            followers={followers}
            post={!posts?.error ? posts : []}
            refetch={refetch}
          />
          <Climconnectpost refetch={refetch} data={!posts?.error ? posts : []} />
        </div>
      </section>
    </ProtectClimeConnect>
  );
};

export default Climconnectrightpart;
