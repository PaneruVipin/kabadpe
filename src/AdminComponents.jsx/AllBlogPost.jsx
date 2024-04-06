import React, { useState } from "react";
import BlogTable from "./BlogTable";

const AllBlogPost = () => {
    const [index , setIndex] = useState(1);
    const [postComnt , setPostComnt] = useState(false);

const indexFunc = () => {

    if(index !== 5){
        setIndex(index + 1);
    }else{
        setIndex(5);
    }
    
}

const indexFuncPrev = () => {

    if( index !== 1){
        setIndex(index - 1);

    }else{
        setIndex(1);

    }
    
}
  return (
    <>
      <section className="all-blog-post-comp" >
        <div className="common-container" >

            <div className="post-title-flex">
                <h6>Posts</h6>
                <button className="prod-filt-btn">Add New Post</button>

            </div>
            
          <div className="top-prod-filter-flex-box">
            <div className="breadcrum-main-box">
              <h6>
                {" "}
                All <span className="num-brck"> (87) </span>{" "}
              </h6>
              <h6>
                {" "}
                Published <span className="num-brck"> (85) </span>{" "}
              </h6>
              <h6>
                {" "}
                Drafts <span className="num-brck"> (2) </span>{" "}
              </h6>
            
            </div>

            <div className="right-prod-search-flex-bx">
              <div className="right-all-prod-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="off"
                  placeholder="Search..."
                />
              </div>

              <button className="search-prod-btn">Search Posts</button>
            </div>
          </div>

          <div className="all-prod-filter-flex-box-two">
            <div className="left-all-prod-filt-sel-flex-box">
              <div className="all-prod-sel-apply-flt-box">
                <div className="all-prod-sel-filt-box">
                  <select name="product" id="product">
                    <option value="product">Bulk actions</option>
                    <option value="product">Bulk actions</option>
                    <option value="product">Bulk actions</option>
                    <option value="product">Bulk actions</option>
                  </select>
                </div>
                <button className="prod-filt-btn">Apply</button>
              </div>

              <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                <select name="product" id="product">
                  <option value="product">All dates</option>
                  <option value="product">All dates</option>
                  <option value="product">All dates</option>
                </select>
              </div>

              <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                <select name="product" id="product">
                  <option value="product">All formats</option>
                  <option value="product">All formats</option>
                  <option value="product">All formats</option>
                </select>
              </div>

          

              <button className="prod-filt-btn prod-filt-btn2">Filter</button>
            </div>

            <div className="right-all-prod-paginat-flex-box">
              <div className="items-num">
                <p>85 Items</p>
              </div>

              {/* <div className="duble-arrow-btn page-filt-btn">
        <i class="fa-solid fa-angles-left"></i>
        </div> */}
              <div
                onClick={indexFuncPrev}
                className="sing-arrow-btn page-filt-btn"
              >
                <i class="fa-solid fa-angle-left"></i>
              </div>
              <div className="page-num-box">{index}</div>

              <p>
                of <span>5</span>
              </p>

              {/* <div className="duble-arrow-btn page-filt-btn page-filt-btn3">
        <i class="fa-solid fa-angles-right"></i>
        </div> */}

              <div onClick={indexFunc} className="sing-arrow-btn page-filt-btn">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>

          <BlogTable onClickShut={() => setPostComnt(false)} postComnet={postComnt} onClickOpen={() => setPostComnt(true)} onClickClose={(e) => e.stopPropagation()} />
          
        </div>
      </section>

      
    </>
  );
};

export default AllBlogPost;
