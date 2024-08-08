import React from "react";
import Climconectfolowerprofile from "./Climconectfolowerprofile";
import Climconnectpost from "./Climconnectpost.jsx";
import { blogPostFetch } from "../apis/blogs/blog.js";
import { useQuery } from "@tanstack/react-query";
import ProtectClimeConnect from "./ProtectClimeConnect.jsx";
import { climeconnectionsFetch } from "../apis/blogs/followers.js";
import { useSelector } from "react-redux";
const Climconnectrightpart = ({ selectedData = {}, comp = "me" }) => {
  const { userInfo } = useSelector((s) => s.user);
  const { data: posts, refetch } = useQuery({
    queryKey: ["blogPostFetch2"],
    queryFn: () =>
      blogPostFetch({
        postScope:
          comp == "me"
            ? "my"
            : selectedData?.userId
            ? selectedData?.userId
            : "admin",
      }),
  });
  const { data: followings, refetchFollowings } = useQuery({
    queryKey: ["climeconnectionsFetch10"],
    queryFn: () =>
      climeconnectionsFetch({
        connectionType: "following",
        id: comp == "me" ? userInfo?.id : selectedData?.userId,
      }),
  });
  const { data: followers, refetch: refetchFollowers } = useQuery({
    queryKey: ["climeconnectionsFetch20"],
    queryFn: () =>
      climeconnectionsFetch({
        connectionType: "follower",
        id: comp == "me" ? userInfo?.id : selectedData?.userId,
      }),
  });
  return (
    <ProtectClimeConnect disable={comp == "user" ? true : false}>
      <section className="clim-connect-right-side-box">
        <div className="comon-container">
          <Climconectfolowerprofile
            followings={followings}
            followers={followers}
            post={!posts?.error ? posts : []}
            refetch={refetch}
            userInfo={userInfo}
            selectedData={selectedData}
            comp={comp}
          />
          <Climconnectpost
            refetch={refetch}
            data={!posts?.error ? posts : []}
          />
        </div>
      </section>
    </ProtectClimeConnect>
  );
};

export default Climconnectrightpart;
