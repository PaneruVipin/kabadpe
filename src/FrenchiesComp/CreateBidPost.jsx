import { Form, Formik } from "formik";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { franchiseBidPost } from "../apis/franchise/bid";
import { useSelector } from "react-redux";

const CreateBidPost = () => {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const user = useSelector((s) => s?.user?.userInfo);
  const handleImageUpload = (event) => {
    const fileList = event.target.files;
    setFiles((prev) => [...prev, ...fileList]);
    const newImages = [...images];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push(reader.result);
        setImages(newImages);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const handleDeleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages.slice());
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const initialValues = { unit: "kg" };
  const handleSubmit = async (data) => {
    const newData = { ...data, productimages: files };
    await franchiseBidPost(newData);
  };
  return (
    <>
      <section className="bid-product-listing-comp">
        <div className="common-container">
          <div className="top-bid-header-flex">
            <div className="left-bid-header-bx">
              <NavLink to="/">Home</NavLink>
              <span>Create post/Sell post</span>
            </div>
          </div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({
              handleBlur,
              handleChange,
              values,
              errors,
              touched,
              ...rest
            }) => {
              return (
                <Form className="bid-post-grid-bx">
                  <div className="left-prod-det">
                    <div className="left-product-bid-det-bx">
                      <h6>Product details</h6>

                      <div className="product-det-comn-bx">
                        <div className="prod-det-comn-grid-form-bx">
                          <div className="prod-det-form-bx  prod-det-form-bx2">
                            <select
                              name="category"
                              id="bidcategory"
                              onChange={handleChange}
                              required
                              onBlur={handleBlur}
                              value={values?.category}
                            >
                              <option value="">Choose Category</option>
                              <option value="bidcategory">Category1</option>
                              <option value="bidcategory">Category2</option>
                              <option value="bidcategory">Category3</option>
                              <option value="bidcategory">Category4</option>
                            </select>
                          </div>

                          <div className="prod-det-form-bx  prod-det-form-bx2">
                            <select
                              name="subCategory"
                              id="bidcategory"
                              onChange={handleChange}
                              required
                              onBlur={handleBlur}
                              value={values?.subCategory}
                            >
                              <option value="">Choose Sub-category</option>
                              <option value="bidcategory">Sub-category1</option>
                              <option value="bidcategory">Sub-category2</option>
                              <option value="bidcategory">Sub-category3</option>
                              <option value="bidcategory">Sub-category4</option>
                            </select>
                          </div>
                        </div>

                        <div className="prod-det-comn-grid-form-bx">
                          <div className="prod-det-form-bx  prod-det-form-bx2">
                            <select
                              name="condition"
                              id="bidcategory"
                              onChange={handleChange}
                              required
                              onBlur={handleBlur}
                              value={values?.condition}
                            >
                              <option value="">Choose Condition</option>
                              <option value="bidcategory">condition1</option>
                              <option value="bidcategory">condition2</option>
                              <option value="bidcategory">condition3</option>
                            </select>
                          </div>

                          <div className="prod-det-form-bx">
                            <input
                              type="text"
                              name="productName"
                              id="productname"
                              onChange={handleChange}
                              required
                              onBlur={handleBlur}
                              value={values?.productName}
                              placeholder="Product name"
                            />
                          </div>
                        </div>

                        <div className="prod-det-text-bx">
                          <textarea
                            name="description"
                            id="desc"
                            cols="30"
                            rows="5"
                            onChange={handleChange}
                            required
                            onBlur={handleBlur}
                            value={values?.description}
                            placeholder="Product Description"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="left-product-bid-det-bx ">
                      <h6>Product stock details</h6>

                      <div className="product-det-comn-bx">
                        <div className="prod-det-comn-grid-form-bx">
                          <div className="prod-det-form-bx">
                            <input
                              type="number"
                              onWheel={(e) => e.currentTarget.blur()}
                              name="productQuantity"
                              id="productname"
                              onChange={handleChange}
                              required
                              onBlur={handleBlur}
                              value={values?.productQuantity}
                              placeholder="Product Quantity"
                            />
                          </div>

                          <div className="prod-det-form-bx  prod-det-form-bx2">
                            <select
                              name="unit"
                              id="unit"
                              onChange={handleChange}
                              required
                              onBlur={handleBlur}
                              value={values?.unit}
                            >
                              <option value="kg">KG</option>
                              <option value="piece">PIECE</option>
                            </select>
                          </div>
                        </div>

                        {/* <div className="prod-det-comn-grid-form-bx">
                    <div className="prod-det-form-bx  prod-det-form-bx2">
                      <select name="supply" id="supply">
                        <option value="supply">supply1</option>
                        <option value="supply">supply2</option>
                        <option value="supply">supply3</option>
                      </select>
                    </div>
                  </div> */}
                      </div>
                    </div>

                    <div className="left-product-bid-det-bx">
                      <h6>Address details</h6>

                      <div className="product-det-comn-bx">
                        <div className="same-com-add-bx">
                          <div className="check-bxx">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              onChange={(e) => {
                                const checked = e.target.checked;
                                if (checked) {
                                  handleChange({
                                    target: {
                                      value: user?.franchiseAddress,
                                      name: "companyAddress",
                                    },
                                  });
                                } else {
                                  handleChange({
                                    target: {
                                      value: "",
                                      name: "companyAddress",
                                    },
                                  });
                                }
                              }}
                            />
                          </div>
                          <span>Same as company address</span>
                        </div>

                        {/* <div className="prod-det-comn-grid-form-bx"> */}
                        <div className="prod-det-form-bx">
                          <input
                            type="test"
                            name="companyAddress"
                            id="productname"
                            onChange={handleChange}
                            required
                            onBlur={handleBlur}
                            value={values?.companyAddress}
                            placeholder="Company Address"
                          />
                        </div>

                        {/* <div className="prod-det-form-bx  prod-det-form-bx2">
                            <select name="unit" id="unit">
                              <option value="unit">KG</option>
                              <option value="unit">PICS</option>
                            </select>
                          </div> */}
                        {/* </div> */}
                        {/* 
                  <div className="prod-det-comn-grid-form-bx">
                    <div className="prod-det-form-bx  prod-det-form-bx2">
                      <select name="supply" id="supply">
                        <option value="supply">supply1</option>
                        <option value="supply">supply2</option>
                        <option value="supply">supply3</option>
                      </select>
                    </div>
                  </div> */}
                      </div>
                    </div>

                    <div className="left-product-bid-det-bx">
                      <h6>Product pricing details</h6>

                      <div className="product-det-comn-bx">
                        <div className="prod-det-comn-grid-form-bx">
                          <div className="prod-det-form-bx prod-det-form-bx-unitprice">
                            <input
                              type="number"
                              onWheel={(e) => e.currentTarget.blur()}
                              name="pricePerUnit"
                              id="price"
                              onChange={handleChange}
                              required
                              onBlur={handleBlur}
                              value={values?.pricePerUnit}
                              placeholder="Per unit price"
                            />
                          </div>

                          {values.includeGst ? (
                            <div className="prod-det-form-bx  prod-det-form-bx2">
                              <select
                                name="gstRate"
                                id="unit"
                                onChange={handleChange}
                                required
                                onBlur={handleBlur}
                                value={values?.companyName}
                              >
                                <option value="">Choose GST %</option>
                                <option value="0">0</option>
                                <option value="5">5</option>
                                <option value="12">12</option>
                                <option value="18">18</option>
                                <option value="28">28</option>
                              </select>
                            </div>
                          ) : null}
                        </div>

                        <div className="check-flex-bxx">
                          {/* <div className="same-com-add-bx mt-3">
                            <div className="check-bxx">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                            <span>Price on Req.</span>
                          </div> */}

                          <div className="same-com-add-bx mt-3">
                            <div className="check-bxx">
                              <input
                                name="includeGst"
                                class="form-check-input"
                                onChange={(e) => {
                                  values.includeGst = e.target.checked;
                                  handleChange(e);
                                }}
                                onBlur={handleBlur}
                                checked={values?.includeGst}
                                type="checkbox"
                              />
                            </div>
                            <span>GST Included</span>
                          </div>

                          <div className="same-com-add-bx mt-3">
                            <div className="check-bxx">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                onChange={(e) => {
                                  values.includeTransport = e.target.checked;
                                  handleChange(e);
                                }}
                                onBlur={handleBlur}
                                checked={values?.includeTransport}
                                name="includeTransport"
                              />
                            </div>
                            <span>Transportation Support</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="left-product-bid-det-bx">
                      <div className="product-det-comn-bx">
                        <div className="prod-det-form-bx">
                          <button type="submit">Save</button>
                        </div>
                      </div>
                    </div>

                    {/* <div className="left-product-bid-det-bx">
                <h6>Product pricing details</h6>

                <div className="product-det-comn-bx">
                  <div className="same-com-add-bx ">
                    <div className="check-bxx">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <span>All</span>
                  </div>

                  <div className="prod-det-comn-grid-form-bx">
                    <div className="prod-det-form-bx ">
                      <input
                        type="text"
                        name="targetcountry"
                        id="targetcountry"
                        placeholder="Target Country"
                        formNoValidate
                      />
                    </div>
                  </div>
                </div>
              </div> */}
                  </div>

                  <div className="right-bid-post-img-grid-bx left-product-bid-det-bx">
                    <h6>Post Images</h6>

                    <div className="product-det-comn-bx right-post-add-bx">
                      <div className="post-img-grid-bxx">
                        <div className="post-add-btn">
                          <label htmlFor="input_file">
                            <span>+</span>
                          </label>
                          <input
                            type="file"
                            id="input_file"
                            style={{ display: "none" }}
                            accept="image/*"
                            multiple
                            onChange={handleImageUpload}
                          />
                          {/*  */}
                        </div>

                        {images?.map((image, index) => (
                          <div key={index} className="post_imges">
                            <img src={image} alt={`Image ${index}`} />
                            <button
                              type="button"
                              onClick={() => handleDeleteImage(index)}
                            >
                              <ion-icon name="close-outline"></ion-icon>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
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

export default CreateBidPost;
