import React, { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import SEOSetting from "./BlogTags";
import BlogTags from "./BlogTags";
import Keyphrase from "./Keyphrase";
import ShortText from "./ShortText";
import { Form, Formik } from "formik";
import { climeCategories } from "../lib/climeCategories";
import { toast } from "react-toastify";
import {
  blogPostCreate,
  blogPostEdit,
  blogPostFetch,
} from "../apis/blogs/blog";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
const CreateBlog = ({ data, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(data);
  const [images, setImages] = useState([]);
  const [seoTags, setTags] = useState([]);
  const [seoKeyphrase, setKeys] = useState([]);
  const [recentPostSize, setRecentPostSize] = useState(4);
  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);

    setImages([...images, ...selectedImage]);
  };
  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages.slice());
  };
  const handleSubmit = async (data) => {
    const newData = {
      seoTags: seoTags?.join(""),
      seoKeyphrase: seoKeyphrase?.join(""),
      ...data,
      image: images,
    };
    if (edit) {
      newData.images = data?.image || "[]";
    }
    const res = edit
      ? await blogPostEdit(newData)
      : await blogPostCreate(newData);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClose();
    data.isDraft = false;
  };
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  useEffect(() => {
    if (edit?.seoTags) {
      setTags(edit?.seoTags?.split(","));
    }
    if (edit?.seoKeyphrase) {
      setKeys(edit?.seoKeyphrase?.split(","));
    }
  }, [edit]);
  const { data: posts, refetch } = useQuery({
    queryKey: ["blogposts"],
    queryFn: () => blogPostFetch({}),
  });
  return (
    <>
      <section className="create-blog-comp">
        <div className="common-container">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="blog-title-flex"
          >
            <h3>{edit ? "Edit Blog" : "Create Blog"}</h3>
            {data ? (
              <button
                onClick={onClose}
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 20px",
                  cursor: "pointer",
                  fontSize: "16px",
                  width: "200px",
                }}
              >
                <IoIosArrowRoundBack
                  style={{ marginRight: "8px", fontSize: "24px" }}
                />
                <span style={{ fontWeight: "bold" }}>Back</span>
              </button>
            ) : null}
          </div>

          <div className="create-blog-grid-main">
            {!loading ? (
              <Formik
                initialValues={edit ? { ...edit, isDraft: false } : {}}
                onSubmit={handleSubmit}
                // validationSchema={validationLoginAdmin}
              >
                {({
                  handleBlur,
                  handleChange,
                  values,
                  errors,
                  touched,
                  submitForm,
                  ...rest
                }) => {
                  return (
                    <Form className="add-blog-info-main">
                      <div className="left-add-blog-post-main">
                        <h6>{edit ? "Edit Blog" : "New Blog"}</h6>

                        <div className="add-blog-form">
                          <div className="blog-inpt-bx">
                            <span>Post Title</span>
                            <div className="blog-inpt">
                              <input
                                type="text"
                                name="title"
                                id="blogtitle"
                                required
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values?.title}
                                placeholder="Post Title"
                              />
                            </div>
                          </div>

                          <div className="blog-form-grid">
                            <div className="blog-inpt-bx">
                              <span>Blog Author</span>
                              <div className="blog-inpt">
                                <input
                                  type="text"
                                  name="author"
                                  id="blogauthor"
                                  required
                                  placeholder="Enter Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.author}
                                />
                              </div>
                            </div>

                            <div className="blog-inpt-bx">
                              <span>Blog Category</span>
                              <div className="blog-inpt blog-selct">
                                <select
                                  name="categoryName"
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values?.categoryName}
                                  id="blogcategory"
                                >
                                  <option value="" hidden>
                                    Select
                                  </option>

                                  {climeCategories.map(({ name }) => (
                                    <option key={name} value={name}>
                                      {name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="blog-inpt-bx content-text add-title-bx mb-5">
                            <span>Blog Content</span>
                            <JoditEditor
                              value={values?.content}
                              onChange={(newContent) => {
                                handleChange({
                                  target: {
                                    name: "content",
                                    value: newContent,
                                  },
                                });
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
                            {/* 
                            <div className="post-image-flex-bx">
                              {images.map((curImage, indx) => {
                                return (
                                  <img
                                    key={indx}
                                    src={URL.createObjectURL(curImage)}
                                    alt=""
                                  />
                                );
                              })}
                            </div> */}
                            <div className="post-img-grid-bx">
                              {images.map((image, index) => (
                                <div key={index} className="post_img">
                                  <img
                                    src={URL.createObjectURL(image)}
                                    alt={`Image ${index}`}
                                  />
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteImage(index)}
                                  >
                                    <ion-icon name="close-outline"></ion-icon>
                                  </button>
                                </div>
                              ))}
                              {JSON.parse(values?.image || "[]")?.map(
                                (image, index) => (
                                  <div key={index} className="post_img">
                                    <img src={image} alt={`Image ${index}`} />
                                    <button
                                      type="button"
                                      onClick={() => {
                                        let imgs = JSON.parse(
                                          values?.image || "[]"
                                        );
                                        imgs = imgs?.filter(
                                          (e, i) => index != i
                                        );
                                        imgs = JSON.stringify(imgs);
                                        handleChange({
                                          target: {
                                            name: "image",
                                            value: imgs,
                                          },
                                        });
                                        handleBlur({
                                          target: {
                                            name: "image",
                                            value: imgs,
                                          },
                                        });
                                      }}
                                    >
                                      <ion-icon name="close-outline"></ion-icon>
                                    </button>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        {/* <div className="post-btn-flex-bxx">
                  <button className="post-btn-b">Save As Draft</button>

                  <button className="post-btn-b">Post Blog</button>
                </div> */}
                      </div>

                      <div className="SEO-setting-bx">
                        <h6>SEO Setting</h6>

                        <div className="blog-inpt-bx mt-4">
                          <span>Meta Title</span>
                          <div className="blog-inpt">
                            <input
                              type="text"
                              name="seoTitle"
                              id="posttitle"
                              placeholder="Post Title"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.seoTitle}
                            />
                          </div>
                        </div>

                        <div className="blog-inpt-bx">
                          <span>Meta Description</span>
                          <div className="blog-inpt blog-des">
                            <textarea
                              name="seoDescription"
                              id="description"
                              cols="30"
                              rows="5"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.seoDescription}
                            ></textarea>
                          </div>
                        </div>

                        <BlogTags
                          state={[seoTags, setTags]}
                          label={"Blog Tags"}
                        />
                        {/* <BlogTags
                          state={[seoKeyphrase, setKeys]}
                          label={"Keyphrase"}
                        /> */}
                        {/* <Keyphrase /> */}

                        <div className="blog-inpt-bx mt-4 mb-5">
                          <span>G Meta Keywords</span>
                          <div className="blog-inpt">
                            <input
                              type="text"
                              name="seoKeywords"
                              id="keywords"
                              placeholder="Keywords"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values?.seoKeywords}
                            />
                          </div>
                        </div>
                        <div className="post-btn-flex-bxx">
                          <button
                            type="button"
                            onClick={() => {
                              // handleSubmit({ isDraft: true, ...values })
                              values.isDraft = true;
                              submitForm();
                            }}
                            className="post-btn-b"
                          >
                            Save As Draft
                          </button>
                          <button type="submit" className="post-btn-b">
                            Post Blog
                          </button>
                        </div>
                        {/* <div className="post-btn-flex-bxx">
                  <button className="post-btn-b">Update</button>
                </div> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            ) : null}

            <div className="left-add-blog-post-main right-recent-blog-main">
              <h6>Recent Posts</h6>

              <div className="recent-post-flex-bx">
                {!posts?.error
                  ? posts
                      ?.slice(0, recentPostSize)
                      ?.map(({ categoryName, title, updatedOn, ...rest }) => {
                        let img = JSON.parse(rest?.image || "[]")?.[0];
                        return (
                          <div className="recent-post">
                            <div className="recent-post-img">
                              <img src={img} alt="" />
                            </div>

                            <div className="recent-post-info">
                              <h5>{categoryName}</h5>
                              <ShortText text={title} maxLength={20} />
                              <span>
                                {DateTime.fromISO(updatedOn, {
                                  zone: "utc",
                                }).toFormat("ccc dd LLL yyyy")}
                                -{" "}
                                {DateTime.fromISO(updatedOn, {
                                  zone: "utc",
                                }).toFormat("hh:mm a")}
                              </span>
                            </div>

                            <div
                              onClick={() => {
                                setLoading(true);
                                setEdit({
                                  categoryName,
                                  title,
                                  updatedOn,
                                  ...rest,
                                });
                                setTimeout(() => {
                                  setLoading(false);
                                }, 200);
                              }}
                              className="edit-btn-post"
                            >
                              <i className="fa-regular fa-pen-to-square"></i>
                            </div>
                          </div>
                        );
                      })
                  : null}
              </div>

              <button
                onClick={() => setRecentPostSize((prev) => prev + 4)}
                className="load-more-btn b-post-load-btn mt-0"
              >
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
