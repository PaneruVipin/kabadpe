import React, { useState } from "react";
import "../style/SocialFeed.css";

const MyFeedComp = () => {
  const items = [
    { name: "Public", imageUrl: "./images/chats/globe.png" },
    { name: "Friends", imageUrl: "./images/chats/friends.png" },
  ];

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItemImage, setSelectedItemImage] = useState(
    "./images/chats/globe.png"
  );
  const [fileImage, setFileImage] = useState(null);
  const [createPost, setCreatePost] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const SocFeed = [
    {
      id: 1,
      socProfImg: "./images/customImg/team-3.jpg",
      socProfname: "Pan Feng Shul",
      postDate: "12 April at 09:20 PM",
      postIcon: "public",
      postPara:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorem nesciunt Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit .",

      postImg: [
        "./images/customImg/news-1.jpg",
        "./images/customImg/news-2.jpg",
        "./images/customImg/news-3.jpg",
      ],

      comment: 25,
      likes: 135,
      share: 95,
      saved: 15,
    },

    {
      id: 2,
      socProfImg: "./images/customImg/team-3.jpg",
      socProfname: "Pan Feng Shul",
      postDate: "12 April at 09:20 PM",
      postIcon: "Friends",
      postPara:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorem nesciunt Lorem ipsum dolor sit amet consectetur amet consectetur, adipisicing elit  .",

      postImg: [
        "./images/customImg/news-3.jpg",
        "./images/customImg/news-1.jpg",
      ],

      comment: 45,
      likes: 120,
      share: 34,
      saved: 12,
    },
  ];

  const handleItemChange = (e) => {
    const value = e.target.value;
    setSelectedItem(value);

    const selectedImage = items.find((curitem) => curitem.name === value);

    setSelectedItemImage(selectedImage ? selectedImage.imageUrl : null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setFileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileImage(null);
    }
  };

  return (
    <>
      <div
        className={
          createPost
            ? "soc-feed-create-post-comp postactive"
            : "soc-feed-create-post-comp"
        }
      >
        <div className="soc-feed-cret-post-main-box">
          <h6>Create Post</h6>

          <div onClick={() => setCreatePost(false)} className="post-close-btn">
            <i class="fa-solid fa-xmark"></i>
          </div>

          <div className="create-post-type-box">
            <div className="left-user-type-box">
              <div className="user-imag">
                <img src="/images/customImg/team-3.jpg" alt="" />
              </div>
              <div className="right-user-infoo">
                <h5>Ahmad Noor Falid</h5>

                <div className="select-prof-box">
                  {selectedItemImage && (
                    <div className="selected-img">
                      <img src={selectedItemImage} alt={selectedItemImage} />
                    </div>
                  )}

                  <select
                    name="chosebox"
                    id="chosebox"
                    value={selectedItem}
                    onChange={handleItemChange}
                  >
                    {items.map((elem, index) => {
                      return (
                        <option key={index} value={elem.name}>
                          {" "}
                          {elem.name}{" "}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="post-textarea">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="What's on your mind ?"
            ></textarea>
          </div>

          <div className="selec-user-show-reltd-img">
            {fileImage && (
              <div>
                <img src={fileImage} alt="Selected" />
              </div>
            )}
          </div>

          <div className="add-post-flx-box">
            <p>Add Your Post</p>

            <div className="right-post-label-box">
              <label htmlFor="file">
                {" "}
                <i class="fa-regular fa-image"></i>{" "}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                name="file"
                id="file"
              />
            </div>
          </div>

          <button className="post-submit-btn">Post Submit</button>
        </div>
      </div>

      <section className="comn-soc-feed-comp">
        <div className="soc-feed-post-main-box">
          <div className="soc-feed-search-bx mt-4">
            <h6>Post Something</h6>

            <div className="post-something">
              <div
                onClick={() => setCreatePost(true)}
                className="postsmoe-flex-left-bx"
              >
                <div className="prof-img-p">
                  <img src="/images/customImg/team-3.jpg" alt="" />
                </div>

                <p className="paraa">What's on your mind ?</p>
              </div>

              <div className="post-btn">
                <i class="fa-regular fa-image"></i>
              </div>
            </div>
          </div>

          <div className="soc-feed-post-box mt-4 ">
            {SocFeed.map((elem, indx) => {
              return (
                <div className="soc-feed-post-bx" key={indx} id={elem.id}>
                  <div className="top-soc-post-prof-bx">
                    <div className="left-soc-post-info">
                      <img src={elem.socProfImg} alt="" />
                      <div className="soc-post-det">
                        <h6> {elem.socProfname} </h6>
                        <div className="post-type-icon-flex">
                          <p> {elem.postDate} </p>

                          <div className="icon-img">
                            {elem.postIcon == "public" ? (
                              <img src="/images/chats/globe.png" alt="" />
                            ) : (
                              <img src="/images/chats/friends.png" alt="" />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="edit-popup-box-main">
                      <div
                        onClick={() => setEditPost(!editPost)}
                        className="three-dot-btn"
                        title="edit"
                      >
                        <i class="fa-solid fa-ellipsis"></i>
                      </div>

                      <div
                        className={
                          editPost
                            ? "edit-popup-box editactive"
                            : "edit-popup-box"
                        }
                      >
                        <button className="e-p c-p">Edit Post</button>
                        <button className="h-p c-p">Hide Post</button>
                        <button className="r-p c-p">Report Post</button>
                      </div>
                    </div>
                  </div>

                  <div className="post-images-flex-bx">
                    {elem.postImg.map((path) => {
                      return (
                        <img
                          src={path}
                          style={{
                            width: elem.postImg.length > 1 ? "14rem" : "100%",
                            height: elem.postImg.length > 1 ? "13rem" : "16rem",
                          }}
                          alt=""
                        />
                      );
                    })}
                  </div>

                  <p className="socfeed-paratext">{elem.postPara} </p>

                  <div className="soc-post-comnt-share-likes-flex-bx">
                    <div className="soc-post-feed-btn">
                      <div className="feed-icon">
                        <i class="fa-regular fa-message"></i>
                      </div>

                      <h6> {elem.comment} Comments </h6>
                    </div>

                    <div className="soc-post-feed-btn">
                      <div className="feed-icon">
                        <i class="fa-solid fa-share-from-square"></i>
                      </div>

                      <h6> {elem.share} Shares </h6>
                    </div>

                    <div className="soc-post-feed-btn">
                      <div className="feed-icon">
                        <i class="fa-regular fa-heart"></i>
                      </div>

                      <h6> {elem.likes} Likes </h6>
                    </div>
                  </div>

                  <div className="write-comment-flex-bx">
                    <div className="commnt-prof-img">
                      <img src="/images/customImg/team-3.jpg" alt="" />
                    </div>

                    <div className="comment-box">
                      <input
                        type="text"
                        name="comment"
                        id="comment"
                        placeholder="Write Comment..."
                      />

                      <button className="comnt-send">
                        <i class="fa-regular fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyFeedComp;
