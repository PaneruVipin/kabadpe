import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { climeCategories } from "../lib/climeCategories";
import { blogPostCreate, blogPostEdit } from "../apis/blogs/blog";
import { toast } from "react-toastify";

const Addpostpopup = ({ onClickClosePost, initialValues, refetch }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [images, setImages] = useState([]);
  const handleImageUpload = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages([...images, ...selectedImage]);
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages.slice());
  };

  const { userInfo } = useSelector((s) => s.user);
  const handleSubmit = async (data) => {
    const newData = { ...data, image: images };
    if (initialValues) {
      newData.images = data?.image || "[]";
    }
    const res = initialValues
      ? await blogPostEdit(newData)
      : await blogPostCreate(newData);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClosePost();
  };
  return (
    <>
      <section className="add-post-comp" onClick={onClickClosePost}>
        <div className="add-post-bx" onClick={(e) => e.stopPropagation()}>
          <Formik initialValues={initialValues || {}} onSubmit={handleSubmit}>
            {({
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
              ...rest
            }) => {
              return (
                <Form>
                  <h3>
                    {initialValues ? "Update Post" : "Share your opinion"}
                  </h3>

                  <div className="add-post-user-info-bx">
                    <div className="add-post-user-img">
                      <img src={userInfo?.profileImage} alt="" />
                    </div>
                    <div className="add-post-user-det">
                      <span>{userInfo?.fullname}</span>

                      <div className="add-post-select-bx">
                        {!selectedOption ? (
                          <img src="/images/chats/globe.png" alt="" />
                        ) : (
                          <img src="/images/chats/friends.png" alt="" />
                        )}

                        <select
                          name="isPrivate"
                          value={values?.isPrivate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="share"
                        >
                          <option value="">Public</option>
                          <option value="true">Friends</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="blog-inpt-bx">
                    {/* <span>Blog Title</span> */}
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
                  <div className="add-post-text-bx">
                    <textarea
                      name="content"
                      id="postmessage"
                      cols="30"
                      rows="5"
                      placeholder="Connect with fellow climate champion"
                      value={values?.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    ></textarea>
                  </div>

                  <div className="add-post-img-bx-2">
                    <label htmlFor="input_file">
                      <span>Add Post</span>

                      <div className="add-post-imge">
                        <i className="fa-regular fa-image"></i>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="input_file"
                      style={{ display: "none" }}
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                    />

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
                                let imgs = JSON.parse(values?.image || "[]");
                                imgs = imgs?.filter((e, i) => index != i);
                                imgs = JSON.stringify(imgs);
                                handleChange({
                                  target: { name: "image", value: imgs },
                                });
                                handleBlur({
                                  target: { name: "image", value: imgs },
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

                  <div className="post-categ-grid">
                    <div className="categ-cc">
                      <select
                        name="categoryName"
                        id="category"
                        value={values?.categoryName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="" hidden>
                          Choose Category
                        </option>
                        {climeCategories?.map(({ name }) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="send-post-btn">
                      Send Post
                    </button>
                  </div>

                  <div onClick={onClickClosePost} className="close-post-btn">
                    <ion-icon name="close-outline"></ion-icon>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Addpostpopup;
