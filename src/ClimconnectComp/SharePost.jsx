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
      <div style={{}} className="share-post-main-box">
        <div
          onClick={protectClick(() => setAddPost(true))}
          className="share-post-btn"
        >
          <div className="share-post-img">
            <img src={userInfo?.profileImage} alt="" />
          </div>
          <span>Share something</span>
        </div>

        <div className="img-tag-fund-cate-main-flex">
          <div className="img-tag-fund-flex-bx">
            <div className="cc-share-bx">
              <div className="cc-share-img">
                <GrGallery />
              </div>
              <span>Image</span>
            </div>

            <div className="cc-share-bx">
              <div className="cc-share-img">
                <FaUserTag />
              </div>
              <span>Tag friend</span>
            </div>

            <div className="cc-share-bx">
              <div className="cc-share-img">
                <FaLeaf />
              </div>
              <span>Fund raise</span>
            </div>
          </div>
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
