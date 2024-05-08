import React, { useState } from "react";
import "../style/ChatSoclPost.css";
import Chats from "./Chats";
import "../style/SocialPost.css";
import Socialpost from "./Socialpost";
import CenterSocialPost from "./CenterSocialPost";
import "../style/CenterSocialPost.css";

const UseProfRightbx = () => {
  const [chat, setChat] = useState(false);
  const [socPost, setSocPost] = useState(true);
  const [socPostOne, setSocPostOne] = useState(false);

  const handleChat = () => {
    setChat(true);
    setSocPost(false);
  };

  const socpostFunc = () => {
    setSocPost(true);
    setChat(false);
  };

  return (
    <>
    {/* {  <section className="user-prf-parent-soc-post-chat-gpt-bx">
        <section className="user-prof-right-main-bx">
          <div className="chat-message-btn-flex-bx">
            <div className="soc-logo">
              <img src="/images/customImg/nav-logo.png" alt="" />
            </div>

            <div className="right-soc-flex">
              <div
                onClick={socpostFunc}
                className={
                  socPost
                    ? "link-bx socl-btn soc-post-btnactive"
                    : "link-bx socl-btn"
                }
                title="Social Post"
              >
                <i className="fa-solid fa-users"></i>
              </div>

              <div
                onClick={handleChat}
                className={
                  chat
                    ? "link-bx chat-gpt-btn chat-gpt-btnactive"
                    : "link-bx chat-gpt-btn"
                }
                title="Chat GPT"
              >
                <i className="fa-brands fa-facebook-messenger"></i>
              </div>
            </div>
          </div>

          <div
            className={
              chat === true ? "chat-gpt-comp chatgptactive" : "chat-gpt-comp"
            }
          >
            <h4>Chat</h4>

            <Chats />
          </div>
        </section>

        <div
          className={
            socPost === true ? "social-post soclpostactive" : "social-post"
          }
        >
          <Socialpost onclickShowSocPost={() => setSocPostOne(true)} />
        </div>
      </section>} */}

      {socPostOne === true ? (
        <CenterSocialPost onClickCloseSocPost={() => setSocPostOne(false)} />
      ) : null}
    </>
  );
};

export default UseProfRightbx;
