import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import SEOSetting from "./BlogTags";
import BlogTags from "./BlogTags";
import Keyphrase from "./Keyphrase";
import ShortText from "./ShortText";

const CreateBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [blogValue , setBlogValue] = useState();
  const [suggestions , setSuggestions] = useState([]);
  const category = [

    'Beauty', 
    'Fashion', 
    'health',
    'Nature',
    'Foods',
    'Sports',

    
  ]


  const handleBlogChange = (e) => {
    const value =  e.target.value ;
    setBlogValue(value);

    const filterSuggestions  = category.filter(name => 
      name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filterSuggestions);
  }

  const handleSuggestionClick = (name) => {
    setBlogValue(name);
    setSuggestions([]);
  };

  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);

    setImages([...images, ...selectedImage]);
  };
  const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  return (
    <>
      <section className="create-blog-comp">
        <div className="common-container">
          <div className="blog-title-flex">
            <h3>Create Blog</h3>
          </div>

          <div className="create-blog-grid-main">
            <div className="add-blog-info-main">
              <div className="left-add-blog-post-main">
                <h6>New Blog</h6>

                <div className="add-blog-form">
                  <div className="blog-inpt-bx">
                    <span>Blog Title</span>
                    <div className="blog-inpt">
                      <input
                        type="text"
                        name="blogtitle"
                        id="blogtitle"
                        placeholder="Blog Title"
                      />
                    </div>
                  </div>

                  <div className="blog-inpt-bx">
                    <span>Blog Category</span>
                    <div className="blog-cate-flex">
                    <div className="blog-inpt">
                      <input
                        type="text"
                        name="blogcategory"
                        id="blogcategory"
                        value={blogValue}
                        onChange={handleBlogChange}
                      />
                    </div>

                    <button className="create-btn">
                      Create
                    </button>
                    
                    </div>
                    {suggestions.map((elem,indx)=> {
                        return(
                          <>

                    <div className="categ-list-sug">

                          <li key={indx} onClick={ () => handleSuggestionClick(elem)}>{elem}</li>
                          
                    </div>
                    </>
                        )

                      })}
                    
                  </div>

                  <div className="blog-form-grid">
                    <div className="blog-inpt-bx">
                      <span>Blog Author</span>
                      <div className="blog-inpt">
                        <input
                          type="text"
                          name="blogauthor"
                          id="blogauthor"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>

                    <div className="blog-inpt-bx">
                      <span>Published Status</span>
                      <div className="blog-inpt blog-selct">
                        <select name="blogcategory" id="blogcategory">
                          <option value="blogcategory">Select</option>
                          <option value="blogcategory">Draft</option>
                          <option value="blogcategory">Published</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="blog-inpt-bx content-text add-title-bx mb-5">
                    <span>Blog Content</span>
                    <JoditEditor
                      ref={editor}
                      value={content}
                      onChange={(newContent) => {
                        setContent(newContent);
                      }}
                    />
                  </div>

                  <h6>Blog Images</h6>

                  <div className="blog-images-main-bx">
                    <div className="blog-image-span-bx">
                      <label htmlFor="image-upload">
                        Drag & Drop your files
                      </label>
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                      />
                    </div>

                    <div className="post-image-flex-bx">
                      {images.map((curImage, indx) => {
                        return (
                          <>
                            <img
                              key={indx}
                              src={URL.createObjectURL(curImage)}
                              alt=""
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="post-btn-flex-bxx">
                  <button className="post-btn-b">Save As Draft</button>

                  <button className="post-btn-b">Post Blog</button>
                </div>
              </div>

              <div className="SEO-setting-bx">
                <h6>SEO Setting</h6>

                <div className="blog-inpt-bx mt-4">
                  <span>Post Title</span>
                  <div className="blog-inpt">
                    <input
                      type="text"
                      name="posttitle"
                      id="posttitle"
                      placeholder="Post Title"
                    />
                  </div>
                </div>

                <div className="blog-inpt-bx">
                  <span>Meta Description</span>
                  <div className="blog-inpt blog-des">
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                </div>

                <BlogTags />
                <Keyphrase />

                <div className="blog-inpt-bx mt-4 mb-5">
                  <span>G Meta Keywords</span>
                  <div className="blog-inpt">
                    <input
                      type="text"
                      name="keywords"
                      id="keywords"
                      placeholder="Keywords"
                    />
                  </div>
                </div>

                <div className="post-btn-flex-bxx">
                  <button className="post-btn-b">Update</button>
                </div>
              </div>
            </div>

            <div className="left-add-blog-post-main right-recent-blog-main">

                      <h6>Recent Posts</h6>

                      <div className="recent-post-flex-bx">

                        <div className="recent-post">
                          <div className="recent-post-img">
                            <img src="/images/customImg/post-1.jpg" alt="" />
                          </div>

                          <div className="recent-post-info">
                            <h5>Fashion</h5>
                            <ShortText text={longText} maxLength={20} />
                          <span>24,Nov 2023 -  18:27</span>
                          </div>

                          <div className="edit-btn-post">
                          <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                        </div>

                        <div className="recent-post">
                          <div className="recent-post-img">
                            <img src="/images/customImg/post-2.jpg" alt="" />
                          </div>

                          <div className="recent-post-info">
                            <h5>Fashion</h5>
                            <ShortText text={longText} maxLength={20} />
                          <span>24,Nov 2023 -  18:27</span>
                          </div>

                          <div className="edit-btn-post">
                          <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                        </div>

                        <div className="recent-post">
                          <div className="recent-post-img">
                            <img src="/images/customImg/post-3.jpg" alt="" />
                          </div>

                          <div className="recent-post-info">
                            <h5>Fashion</h5>
                            <ShortText text={longText} maxLength={20} />
                          <span>24,Nov 2023 -  18:27</span>
                          </div>

                          <div className="edit-btn-post">
                          <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                        </div>
                        
                        <div className="recent-post">
                          <div className="recent-post-img">
                            <img src="/images/customImg/post-4.jpg" alt="" />
                          </div>

                          <div className="recent-post-info">
                            <h5>Fashion</h5>
                            <ShortText text={longText} maxLength={20} />
                          <span>24,Nov 2023 -  18:27</span>
                          </div>

                          <div className="edit-btn-post">
                          <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                        </div>

                        <div className="recent-post">
                          <div className="recent-post-img">
                            <img src="/images/customImg/post-5.jpg" alt="" />
                          </div>

                          <div className="recent-post-info">
                            <h5>Fashion</h5>
                            <ShortText text={longText} maxLength={20} />
                          <span>24,Nov 2023 -  18:27</span>
                          </div>

                          <div className="edit-btn-post">
                          <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                        </div>
                      </div>


                      <button className="load-more-btn b-post-load-btn mt-0">
                        Load More
                      </button>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateBlog;
