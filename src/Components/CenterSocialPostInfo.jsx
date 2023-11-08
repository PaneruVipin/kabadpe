import React, { useState } from "react";
import LightGallery from "lightgallery/react";


// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import '../style/CenterSocialPost.css'


const CenterSocialPostInfo = () => {
  const items = [
    { name: "Public", imageUrl: "./images/chats/globe.png" },
    { name: "Friends", imageUrl: "./images/chats/friends.png" },
  ];

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedItemImage, setSelectedItemImage] = useState(
    "./images/chats/globe.png"
  );
  const [fileImage, setFileImage] = useState(null);
  const [cretPost, setCretPost] = useState(false);
  const [clickpopupBx, setClickPopupBx] = useState(false);
  const [postLike, setPostLike] = useState(false);

  const handleItemChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);

    // Find the corresponding image URL for the selected item
    const selectedImage = items.find((item) => item.name === selectedValue);
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

  const handlePOpup = () => {
    setCretPost(true);
    setClickPopupBx(true);
  };

  const closePopUp = () => {
    setCretPost(false);
    setClickPopupBx(false);
  };
  const galleryData = [
    {
      id: 1,
      profileImage: "images/customImg/client-01.png",
      name: "Nazmin perween 1",
      folw : "Follow",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorem
nesciunt nulla natus ex, qui 
.`,
      descImages: [
        "images/customImg/blog-1.jpg",
        "images/customImg/blog-2.jpg",
      ],
      date: "25-10-23",
      visibility: "public",
    },

    {
      id: 2,
      profileImage: "images/customImg/client-01.png",
      name: "Khushi Shrivastav",
      folw : "Following",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorem
nesciunt nulla natus ex, qui 
.`,
      descImages: [
        "images/customImg/blog-3.jpg",
        "images/customImg/blog-4.jpg",
        "images/customImg/blog-5.jpg",

      ],
      date: "25-10-23",
      visibility: "friends",
    },


    {
      id: 3,
      profileImage: "images/customImg/client-01.png",
      name: "Muskan Sharma",
      folw : "Follow",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorem
nesciunt nulla natus ex, qui 
.`,
      descImages: [
        "images/customImg/blog-2.jpg",

      ],
      date: "25-10-23",
      visibility: "public",
    },

    {
      id: 4,
      profileImage: "images/customImg/client-01.png",
      name: "Muskan Sharma",
      folw : "Following",
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab dolorem
nesciunt nulla natus ex, qui 
.`,
      descImages: [

      ],
      date: "25-10-23",
      visibility: "public",
    },
  ];

  return (
    <>
      <div className="social-post-main-bx social-post-main-bx2">
        <h4>Social Post</h4>

        <div className="soc-post-max-height soc-post-max-height2">
          {galleryData.map(
            ({
              id,
              profileImage,
              name,
              desc,
              descImages,
              date,
              visibility,
              folw,
            }) => (
              <div key={{ id }} className="user-soc-post-main">
                <div className="soc-post-box">
                  <div className="left-soc-post-img left-soc-post-img2">
                    <img src={profileImage} alt="" />
                  </div>

                  <div className="right-soc-post-info right-soc-post-info2">
                    <h5>{name}</h5>
                    <div className="right-soc-follw-flex-bx">
                    <p>
                      {date}
                      {visibility === "public" ?  <i class="fa-solid fa-earth-asia"></i> :<i class="fa-solid fa-user-group"></i>}
                    </p>

                    <button className={folw === "Following"  ?  "followers Following" : "followers" }>
                      {folw}
                    </button>

                    
                    </div>
                  </div>
                </div>

                <div className="soc-post-img-grid">
                  <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                    {descImages.map((path) => (
                      <a  href={path} className="soc-post-img">
                        <img style={{width:descImages.length>1?"16rem":"100%", height:descImages.length>1? "10rem": "15rem"}} src={path} alt="" />
                      </a>
                    ))}
                    {/* <a href="./images/customImg/blog-2.jpg" className="soc-post-img">
        <img src="./images/customImg/blog-2.jpg" alt="" />
      </a>
      <a href="./images/customImg/blog-3.jpg" className="soc-post-img">
        <img src="./images/customImg/blog-3.jpg" alt="" />
      </a>
      <a href="./images/customImg/blog-4.jpg" className="soc-post-img">
        <img src="./images/customImg/blog-4.jpg" alt="" />
      </a> */}
                  </LightGallery>
                </div>


                  <div className="post-like-share-comment-btns-flex-bx post-like-share-comment-btns-flex-bx2">

                    <div onClick={() => setPostLike(!postLike)} className="post-btn">
                  {postLike === true ? 
                    <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>
                  }
                    </div>
                    <div className="post-btn">
                    <i class="fa-regular fa-comment"></i>
                    </div>
                    <div className="post-btn">
                    <i class="fa-brands fa-telegram"></i>
                    </div>
            
  </div>

                <p className="soc-para soc-para2">{desc}</p>

             <div className="comment-post-box">
              <div className="left-comment-prof-logo left-comment-prof-logo2">
                <img src="./images/customImg/client-01.png" alt="" />
              </div>
              <div className="comment-input comment-input2">
                <input type="text" name="comment" id="comment" placeholder="Add a Comment" />
                <div className="send-comment-btn">
                <i class="fa-regular fa-paper-plane"></i>
                </div>
              </div>
             </div>
              
              </div>
            )
          )}

          {/* <div className="user-soc-post-main">
            <div className="soc-post-box">
              <div className="left-soc-post-img">
                <img src="./images/customImg/client-02.png" alt="" />
              </div>

              <div className="right-soc-post-info">
                <h5>Faiz Alam</h5>
                <p>
                  25-10-23 <i class="fa-solid fa-earth-asia"></i>
                </p>
              </div>
            </div>

            <p className="soc-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              dolorem nesciunt nulla natus ex, qui .
            </p>

            <div className="soc-post-img-grid">
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a
                  href="./images/customImg/blog-1.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-1.jpg" alt="" />
                </a>
                <a
                  href="./images/customImg/blog-2.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-2.jpg" alt="" />
                </a>
                <a
                  href="./images/customImg/blog-4.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-4.jpg" alt="" />
                </a>
                <a
                  href="./images/customImg/blog-5.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-5.jpg" alt="" />
                </a>
              </LightGallery>
            </div>
          </div>

          <div className="user-soc-post-main">
            <div className="soc-post-box">
              <div className="left-soc-post-img">
                <img src="./images/customImg/client-03.png" alt="" />
              </div>

              <div className="right-soc-post-info">
                <h5>Faiz Alam</h5>
                <p>
                  25-10-23 <i class="fa-solid fa-earth-asia"></i>
                </p>
              </div>
            </div>

            <p className="soc-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              dolorem nesciunt nulla natus ex, qui .
            </p>

            <div className="soc-post-img-grid">
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a
                  href="./images/customImg/blog-4.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-4.jpg" alt="" />
                </a>
                <a
                  href="./images/customImg/blog-2.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-2.jpg" alt="" />
                </a>
                <a
                  href="./images/customImg/blog-5.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-5.jpg" alt="" />
                </a>
                <a
                  href="./images/customImg/blog-3.jpg"
                  className="soc-post-img"
                >
                  <img src="./images/customImg/blog-3.jpg" alt="" />
                </a>
              </LightGallery>
            </div>
          </div> */}
        </div>

        <div
          onClick={() => handlePOpup()}
          className={
            clickpopupBx ? "popup-clik-box popup-clik-box2 popupclickbxhide" : "popup-clik-box popup-clik-box2"
          }
        >
          <span>Whats on your mind...</span>
        </div>
      </div>

      <div
        className={
          cretPost ? "create-post-sec cretpostactive" : "create-post-sec"
        }
      >
        <div className="create-post-main-bx create-post-main-bx2">
          <h5>Create Post</h5>

          <div className="create-post-user-bx">
            <div className="left-crt-post-img left-crt-post-img2">
              <img src="./images/chats/chat-2.jpg" alt="" />
            </div>
            <div className="right-crt-post-det right-crt-post-det2">
              <h6>Faiz Alam</h6>
              <div className="select-post">
                {selectedItemImage && (
                  <div className="sel-post-type-img">
                    <img src={selectedItemImage} alt={selectedItem} />
                  </div>
                )}

                <select value={selectedItem} onChange={handleItemChange}>
                  {items.map((item, index) => (
                    <option key={index} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="type-message type-message2">
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="3"
              placeholder="Whats on your mind, Faiz ?"
            ></textarea>
          </div>

          <div className="select-path-show-content">
            {fileImage && (
              <div>
                <img src={fileImage} alt="Selected" />
              </div>
            )}
          </div>

          <div className="selct-file-path-bx selct-file-path-bx2">
            <p>Add your Post</p>
            <label htmlFor="input_file">
              {" "}
              <i class="fa-regular fa-image"></i>{" "}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="input_file"
            />
          </div>

          <button className="post-submit">Post</button>

          <div onClick={() => closePopUp()} className="close-cret-post">
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterSocialPostInfo;

