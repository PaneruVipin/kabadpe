import React, { useState } from "react";
import "../style/SideProduct.css";

const SideProduct = () => {
  const [sidechat, setSideChat] = useState(false);

  return (
    <>
      <section className="product-side-comp">
        <h4>Products</h4>

        <div
          className={
            sidechat
              ? "chat-message-main-bx chat-message-main-bx2 chatsideactive"
              : "chat-message-main-bx chat-message-main-bx2"
          }
        >
          <div className="chat-message-user-bx">
            <div className="left-user-messge-img">
              <img src="/images/chats/chat-5.jpg" alt="" />
            </div>
            <div className="right-user-messge-info">
              <h6>Nazmin Perween</h6>
              <p>Lorem, ipsum dolor sit elit .</p>
            </div>
          </div>

          <div className="show-chats-messages-bx">
            <h6 className="chat-date-bx">23-10-23</h6>

            <div className="left-chat-bx">
              <span>16:20</span>
              <p className="left-chat">
                {" "}
                <img
                  src="/images/chats/chat-1.jpg"
                  className="message-chat-icon"
                  alt=""
                />{" "}
                Hello
              </p>
            </div>

            <div className="left-chat-bx">
              <p className="left-chat">
                {" "}
                <img
                  src="/images/chats/chat-1.jpg"
                  className="message-chat-icon"
                  alt=""
                />{" "}
                How are you ?
              </p>
            </div>

            <h6 className="chat-date-bx">24-10-23</h6>

            <div className="left-chat-bx">
              <span>18:55</span>
              <p className="left-chat">
                {" "}
                <img
                  src="/images/chats/chat-1.jpg"
                  className="message-chat-icon"
                  alt=""
                />{" "}
                Tarun
              </p>
            </div>

            <div className="left-chat-bx">
              <p className="left-chat">
                {" "}
                <img
                  src="/images/chats/chat-1.jpg"
                  className="message-chat-icon"
                  alt=""
                />{" "}
                Are u still working on system ?
              </p>
            </div>

            <div className="right-chat-bx">
              <span>5min ago</span>
              <p className="right-chat">
                {" "}
                Hello{" "}
                <div className="messge-tick">
                  <i className="fa-solid fa-check"></i>
                </div>
              </p>
            </div>

            <div className="right-chat-bx">
              <p className="right-chat">
                I am fine{" "}
                <div className="messge-tick">
                  <i className="fa-solid fa-check"></i>
                </div>
              </p>
            </div>

            <div className="right-chat-bx">
              <p className="right-chat">
                and you{" "}
                <div className="messge-tick tickactive">
                  <i className="fa-solid fa-check"></i>
                </div>
              </p>
            </div>

            <div className="right-chat-bx">
              <p className="right-chat">
                No{" "}
                <div className="messge-tick tickactive">
                  <i className="fa-solid fa-check"></i>
                </div>
              </p>
            </div>
          </div>

          <div className="user-type-message-main-bx">
            <div className="left-type-message-bx">
              <i className="fa-regular fa-image"></i>
            </div>

            <div className="type-message-inpt-bx">
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Type message here ..."
              />

              <div className="send-message-btn">
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
          </div>

          <div onClick={() => setMessage(false)} className="close-chat-bx">
            <i className="fa-solid fa-xmark"></i>
          </div>

          <div
            onClick={() => setSideChat(!sidechat)}
            className={
              sidechat
                ? "minimize-maximize-btn minimaxiactive"
                : "minimize-maximize-btn"
            }
          >
            <i className="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideProduct;
