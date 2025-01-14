import { GrGallery } from "react-icons/gr";
import { FaLeaf } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import Addpostpopup from "./Addpostpopup";
import { useSelector } from "react-redux";
import { useState } from "react";
import UserForm from "../Components/UserForm";

const SharePost = ({ refetch }) => {
  const [addPost, setAddPost] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const { userInfo } = useSelector((s) => s.user);
  const protectClick = (fn = () => {}) => {
    if (userInfo?.role == "user") {
      return fn;
    } else {
      return () => setLoginForm(true);
    }
  };
  return (
    <>
      {" "}
      <div className="message-ylow-bx">
        <span>Now earn everytime you post something</span>
      </div>
      
      <div style={{}} className="share-post-main-box">
        <div
          onClick={protectClick(() => setAddPost(true))}
          className="share-post-btn"
        >
          <div className="share-post-img">
            <img src={userInfo?.profileImage} alt="" />
          </div>
          <span>Share your opinion</span>
        </div>

      </div>
      {addPost ? (
        <Addpostpopup
          onClickClosePost={() => {
            refetch();
            setAddPost(false);
          }}
        />
      ) : null}
      {loginForm ? (
        <UserForm closepopUpUserForm={() => setLoginForm(false)} />
      ) : null}
    </>
  );
};

export default SharePost;
