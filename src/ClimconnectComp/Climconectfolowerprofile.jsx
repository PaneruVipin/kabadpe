import React, { useState } from "react";
import { GrGallery } from "react-icons/gr";
import { FaLeaf } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa6";
import Addpostpopup from "./Addpostpopup";
const Climconectfolowerprofile = () => {
  const [addPost , setAddPost] = useState(false);
  
  return (
    <>
      <div className="clim-conect-prof-box">
        <div className="left-prof-img-bx-cc">
          <img src="/images/customImg/user-prf-img.webp" alt="" />
        </div>

        <div className="right-cc-prof-info">
          <h4>Aditya Jain</h4>
          <div className="post-folow-flex">
            <h6>
              10 <span>Post</span>{" "}
            </h6>
            <h6>
              50 <span>Follower</span>{" "}
            </h6>
            <h6>
              35 <span>Following</span>{" "}
            </h6>
          </div>
        </div>
      </div>

      <div onClick={() => setAddPost(true)} className="share-post-main-box">
        <div className="share-post-btn">
          <div className="share-post-img">
            <img src="/images/customImg/news-3.jpg" alt="" />
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

          <div className="categ-cc">
            <select name="category" id="category">
              <option value="category">Choose Category</option>
              <option value="category">Events </option>
              <option value="category">News</option>
              <option value="category">Fundraise</option>
              <option value="category">Sustainability hacks</option>
              <option value="category">Innovations & Eco-finds</option>
              <option value="category">Sustainable Living</option>
              <option value="category">Sustainable Fasion & cosmetics</option>
              <option value="category">Eco-Tourism</option>
              <option value="category">Culture, art & food</option>
              <option value="category">ClimStripe Shift corne</option>
            </select>
          </div>
        </div>
      </div>

     {addPost ? <Addpostpopup onClickClosePost={() => setAddPost(false)} /> : null}
      
    </>
  );
};

export default Climconectfolowerprofile;
