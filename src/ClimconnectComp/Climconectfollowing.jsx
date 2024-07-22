import React from "react";
import ProtectClimeConnect from "./ProtectClimeConnect";
import { useQuery } from "@tanstack/react-query";
import {
  climeFollowUnfollow,
  climeconnectionsFetch,
} from "../apis/blogs/followers";

const Climconectfollowing = () => {
  const { data: followings, refetch } = useQuery({
    queryKey: ["climeconnectionsFetch1"],
    queryFn: () => climeconnectionsFetch({ connectionType: "following" }),
  });
  const { data: followers, refetch: refetchFollowers } = useQuery({
    queryKey: ["climeconnectionsFetch2"],
    queryFn: () => climeconnectionsFetch({ connectionType: "follower" }),
  });
  const handleFollowUnfollowClick = async (id, followingStatus) => {
    const res = await climeFollowUnfollow({ id, followingStatus });
    refetch();
  };
  return (
    <ProtectClimeConnect>
      <div className="clim-conect-folower-flex">
        {!followings?.error
          ? followings?.map(({ User }) => {
              return (
                <div className="climconect-user-folow-bx">
                  <div className="folower-left-bx">
                    <div className="user-folow-img">
                      <img src={User?.profileImage || "/images/temp/temp-user-profile.png"} alt="" />
                    </div>
                    <div className="user-folow-info">
                      {/* <span>{theahmed08}</span> */}
                      <h6>{User?.fullname}</h6>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleFollowUnfollowClick(User?.id, "delete")
                    }
                    className="folow-btn"
                  >
                    Unfollow
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </ProtectClimeConnect>
  );
};

export default Climconectfollowing;
