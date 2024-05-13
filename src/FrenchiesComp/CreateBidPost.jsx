import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CreateBidPost = () => {
  const [images, setImages] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleImageUpload = (event) => {
    const fileList = event.target.files;
    const newImages = [...images];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push(reader.result);
        setImages(newImages.slice());
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

          <div className="bid-post-grid-bx">
            <div className="left-prod-det">
              <div className="left-product-bid-det-bx">
                <h6>Product details</h6>

                <div className="product-det-comn-bx">
                  <div className="prod-det-comn-grid-form-bx">
                    <div className="prod-det-form-bx  prod-det-form-bx2">
                      <select name="bidcategory" id="bidcategory">
                        <option value="bidcategory">Category</option>
                        <option value="bidcategory">Category1</option>
                        <option value="bidcategory">Category2</option>
                        <option value="bidcategory">Category3</option>
                        <option value="bidcategory">Category4</option>
                      </select>
                    </div>

                    <div className="prod-det-form-bx  prod-det-form-bx2">
                      <select name="bidcategory" id="bidcategory">
                        <option value="bidcategory">Sub-category</option>
                        <option value="bidcategory">Sub-category1</option>
                        <option value="bidcategory">Sub-category2</option>
                        <option value="bidcategory">Sub-category3</option>
                        <option value="bidcategory">Sub-category4</option>
                      </select>
                    </div>
                  </div>

                  <div className="prod-det-comn-grid-form-bx">
                    <div className="prod-det-form-bx  prod-det-form-bx2">
                      <select name="bidcategory" id="bidcategory">
                        <option value="bidcategory">Condition</option>
                        <option value="bidcategory">condition1</option>
                        <option value="bidcategory">condition2</option>
                        <option value="bidcategory">condition3</option>
                      </select>
                    </div>

                    <div className="prod-det-form-bx">
                      <input
                        type="text"
                        name="productname"
                        id="productname"
                        placeholder="Product name"
                      />
                    </div>
                  </div>

                  <div className="prod-det-text-bx">
                    <textarea
                      name="desc"
                      id="desc"
                      cols="30"
                      rows="5"
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
                        name="productname"
                        id="productname"
                        placeholder="Product Quantity"
                      />
                    </div>

                    <div className="prod-det-form-bx  prod-det-form-bx2">
                      <select name="unit" id="unit">
                        <option value="unit">KG</option>
                        <option value="unit">PICS</option>
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
                        id="flexCheckDefault"
                        defaultChecked
                      />
                    </div>
                    <span>Same as company address</span>
                  </div>

                  <div className="prod-det-comn-grid-form-bx">
                    <div className="prod-det-form-bx">
                      <input
                        type="number"
                        name="productname"
                        id="productname"
                        placeholder="Product Quantity"
                      />
                    </div>

                    <div className="prod-det-form-bx  prod-det-form-bx2">
                      <select name="unit" id="unit">
                        <option value="unit">KG</option>
                        <option value="unit">PICS</option>
                      </select>
                    </div>
                  </div>
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
                        name="price"
                        id="price"
                        placeholder="Per unit price"
                      />
                    </div>

                    {isChecked && (
                      <div className="prod-det-form-bx  prod-det-form-bx2">
                        <select name="unit" id="unit">
                          <option value="">Choose GST %</option>
                          <option value="">0</option>
                          <option value="">5</option>
                          <option value="">12</option>
                          <option value="">18</option>
                          <option value="">28</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="check-flex-bxx">
                    <div className="same-com-add-bx mt-3">
                      <div className="check-bxx">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <span>Price on Req.</span>
                    </div>

                    <div className="same-com-add-bx mt-3">
                      <div className="check-bxx">
                        <input
                          class="form-check-input"
                          checked={isChecked}
                          onChange={handleCheckBox}
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <span>GST Included</span>
                    </div>

                    <div className="same-com-add-bx mt-3">
                      <div className="check-bxx">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                      </div>
                      <span>Transportation Support</span>
                    </div>
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

                  {images.map((image, index) => (
                    <div key={index} className="post_imges">
                      <img src={image} alt={`Image ${index}`} />
                      <button onClick={() => handleDeleteImage(index)}>
                        <ion-icon name="close-outline"></ion-icon>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateBidPost;
