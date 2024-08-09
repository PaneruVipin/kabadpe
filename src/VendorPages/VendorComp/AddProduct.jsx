import React, { useRef, useState } from "react";
import combData from "./CombinationData";

const AddProduct = ({ onClickClose }) => {
  const [switchBtn, setSwitchBtn] = useState(false);
  const [tabActive, setTabActive] = useState("basic");
  const [images, setImages] = useState([]);
  const [tagValue, setTagValue] = useState([]);
  const [value, setValue] = useState({
    sizes: "",
    colors: "",
    fabric: "",
    patterns: "",
  });
  const [tags, setTags] = useState({
    sizes: [],
    colors: [],
    fabric: [],
    patterns: [],
  });
  const [comb, setComb] = useState(combData);

  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    const imageUrl = selectedImage.map((image) => URL.createObjectURL(image));
    setImages([...images, ...imageUrl]);
  };

  const handleDeleteImage = (index) => {
    const updatedImage = [...images];
    updatedImage.splice(index, 1);
    setImages(updatedImage);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputRef.current.value.trim() !== "") {
      setTagValue([...tagValue, inputRef.current.value.trim()]);

      inputRef.current.value = "";
    }
  };

  const handleDelete = (indx) => {
    const updatedTags = tagValue.filter((curElem, id) => id !== indx);
    setTagValue(updatedTags);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleKeyPressDown = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const { name, value } = e.target;

      setTags((prev) => ({
        ...prev,
        [name]: [...prev[name], value.trim()],
      }));

      setValue((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleDeleteFunc = (name, index) => {
    setTags((prev) => {
      return { ...prev, [name]: prev[name].filter((_, i) => i !== index) };
    });
  };

  return (
    <>
      <section className="add-prod-comp" onClick={onClickClose}>
        <div className="add-prod-main-bx" onClick={(e) => e.stopPropagation()}>
          <div className="top-add-prod-flex-bx">
            <div className="left-add-prod-title-bx">
              <h6>Add Product </h6>
              <p>Add your product and necessary information from here</p>
            </div>

            <div className="right-lang-sel-bx-flex">
              <div onClick={onClickClose} className="add-prod-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="add-prod-tab-flex-bx">
            <div className="left-add-prod-tab-main">
              <button
                onClick={() => setTabActive("basic")}
                className={
                  tabActive === "basic"
                    ? "tab-add-prod tabactive"
                    : "tab-add-prod"
                }
              >
                Basic Info
              </button>
              <button
                onClick={() => setTabActive("shipping")}
                className={
                  tabActive === "shipping"
                    ? "tab-add-prod tabactive"
                    : "tab-add-prod"
                }
              >
                Shipping
              </button>
              <button
                onClick={() => setTabActive("combination")}
                className={
                  tabActive === "combination"
                    ? "tab-add-prod tabactive"
                    : "tab-add-prod"
                }
              >
                Combinations
              </button>
              <button
                onClick={() => setTabActive("generatecomb")}
                className={
                  tabActive === "generatecomb"
                    ? "tab-add-prod tabactive"
                    : "tab-add-prod"
                }
              >
                Generate Combination
              </button>
            </div>
          </div>

          {tabActive === "basic" ? (
            <div className="add-prod-form-main basic-info-bx">
              <div className="add-product-form-bx">
                <div className="ord-filt-bx add-prod-inpt-bx ">
                  <span>Choose Category</span>

                  <div className="add-prod-inpt-bx21">
                    <select name="category" id="category">
                      <option value="category">Choose Category</option>
                      <option value="category">Choose Category1</option>
                      <option value="category">Choose Category2</option>
                      <option value="category">Choose Category3</option>
                    </select>
                    <p>
                      the text is , the platform commission or this category
                      will be <span>10%</span>{" "}
                    </p>
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Product Title/Name</span>
                  <input
                    type="text"
                    name="producttitle"
                    id="producttitle"
                    placeholder="Product Title/Name"
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
                  <span>Product Description</span>
                  <textarea
                    name="desc"
                    id="desc"
                    cols="30"
                    rows="3"
                    placeholder="Product Description"
                    autoComplete="off"
                  ></textarea>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Product Images</span>

                  <div className="right-prod-img-add-bx">
                    <div className="right-prod-upload-img-bx-main">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        id="imageUpload"
                        onChange={handleImageChange}
                      />

                      <label htmlFor="imageUpload">
                        <ion-icon name="cloud-upload-outline"></ion-icon>
                        <p>Drag your images here</p>
                        <span>
                          {" "}
                          (Only *jpeg, *webp and * png images will be accepted){" "}
                        </span>
                      </label>
                    </div>
                    <p>First image will be use as default image .</p>

                    <div className="image-add-grid">
                      {images.map((imgUrl, indx) => {
                        return (
                          <>
                            <div className="upld-prod-img-bx" key={indx}>
                              <img src={imgUrl} alt="" />
                              {indx === 0 ? <p>Default Image</p> : null}
                              <button
                                onClick={() => handleDeleteImage(indx)}
                                className="delete-prod-img-bx"
                              >
                                <ion-icon name="close-outline"></ion-icon>
                              </button>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mt-5">
                  <span>Product SKU</span>
                  <input
                    type="text"
                    name="productsku"
                    id="productsku"
                    placeholder="Product SKU"
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>HSN Code</span>
                  <input
                    type="text"
                    name="hsn"
                    id="hsn"
                    placeholder="Enter HSN Code"
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Product Price</span>
                  <div className="prod-price-bx">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      placeholder="0"
                      autoComplete="off"
                    />
                    <span>₹</span>
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Sale Price</span>
                  <div className="prod-price-bx">
                    <input
                      type="text"
                      name="saleprice"
                      id="saleprice"
                      placeholder="0"
                      autoComplete="off"
                    />
                    <span>₹</span>
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Product Quantity</span>
                  <input
                    type="text"
                    name="prodquantity"
                    id="prodquantity"
                    placeholder="0"
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Product Slug</span>
                  <input
                    type="text"
                    name="slug"
                    id="slug"
                    placeholder="Product Slug"
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Product Tags</span>

                  <div className="product-tag-main-bx">
                    <div className="product-tags-flex-bx">
                      {tagValue.map((curData, id) => {
                        return (
                          <>
                            <div className="tag-bx" key={id + 1}>
                              <span> {curData} </span>
                              <button onClick={(e) => handleDelete(id)}>
                                <i class="fa-solid fa-xmark"></i>
                              </button>
                            </div>
                          </>
                        );
                      })}
                    </div>

                    <input
                      type="text"
                      ref={inputRef}
                      onKeyDown={handleKeyPress}
                      name="tags"
                      id="tags"
                      placeholder="Enter Product tags"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              <div className="prod-add-can-flex-btn prod-add-can-flex-btn31 ">
                <button className="prod-add-del-btn upld-can-prod">
                  Cancel
                </button>
                <button
                  onClick={() => setTabActive("shipping")}
                  className="prod-add-del-btn upld-add-prod"
                >
                  Save & next
                </button>
              </div>
            </div>
          ) : null}

          {tabActive === "shipping" ? (
            <div className="add-prod-form-main shipping-info-bx">
              <div className="add-product-form-bx add-product-form-bx212">
                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Weight (kg) </span>
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    placeholder="0 "
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx ">
                  <span>Shipping Class</span>

                  <div className="add-prod-inpt-bx21">
                    <select name="Shipping" id="Shipping">
                      <option value="Shipping">No Shipping Class</option>
                      <option value="Heavy">Heavy</option>
                      <option value="Light">Light</option>
                      <option value="Medium">Medium</option>
                      <option value="Sneakers">Sneakers</option>
                    </select>
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Length (cm) </span>
                  <input
                    type="text"
                    name="length"
                    id="length"
                    placeholder="in (cm) "
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Width (cm) </span>
                  <input
                    type="text"
                    name="Width"
                    id="Width"
                    placeholder="in (cm) "
                    autoComplete="off"
                  />
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Height (cm) </span>
                  <input
                    type="text"
                    name="height"
                    id="height"
                    placeholder="in (cm) "
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="prod-add-can-flex-btn prod-add-can-flex-btn3121 prod-add-can-flex-btn31 ">
                <button className="prod-add-del-btn upld-add-prod">
                  Save & Next
                </button>
                <button
                  onClick={() => setTabActive("combination")}
                  className="prod-add-del-btn upld-add-prod"
                >
                  Create Combinations
                </button>
              </div>
            </div>
          ) : null}

          {tabActive === "combination" ? (
            <div className="add-prod-form-main shipping-info-bx">
              <div className="add-product-form-bx add-product-form-bx212">
                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Sizes </span>

                  <div className="variants-attribute-bx">
                    <div className="variant-elem--bx">
                      {tags.sizes.map((curElem, indx) => (
                        <div className="variant-bx" key={indx}>
                          <span> {curElem} </span>
                          <button
                            onClick={() => handleDeleteFunc("sizes", indx)}
                          >
                            <ion-icon name="close-outline"></ion-icon>
                          </button>
                        </div>
                      ))}
                    </div>

                    <input
                      type="text"
                      value={value.sizes}
                      name="sizes"
                      id="sizes"
                      onChange={handleFormChange}
                      onKeyDown={handleKeyPressDown}
                      placeholder="Please enter sizes"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Colors </span>

                  <div className="variants-attribute-bx">
                    <div className="variant-elem--bx">
                      {tags.colors.map((curElem, indx) => (
                        <div className="variant-bx" key={indx}>
                          <span> {curElem} </span>
                          <button
                            onClick={() => handleDeleteFunc("colors", indx)}
                          >
                            <ion-icon name="close-outline"></ion-icon>
                          </button>
                        </div>
                      ))}
                    </div>

                    <input
                      type="text"
                      value={value.colors}
                      name="colors"
                      id="colors"
                      onChange={handleFormChange}
                      onKeyDown={handleKeyPressDown}
                      placeholder="Please enter Colors"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Fabric </span>

                  <div className="variants-attribute-bx">
                    <div className="variant-elem--bx">
                      {tags.fabric.map((curElem, indx) => (
                        <div className="variant-bx" key={indx}>
                          <span> {curElem} </span>
                          <button
                            onClick={() => handleDeleteFunc("fabric", indx)}
                          >
                            <ion-icon name="close-outline"></ion-icon>
                          </button>
                        </div>
                      ))}
                    </div>

                    <input
                      type="text"
                      value={value.fabric}
                      name="fabric"
                      id="fabric"
                      onChange={handleFormChange}
                      onKeyDown={handleKeyPressDown}
                      placeholder="Please enter fabric"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Patterns </span>

                  <div className="variants-attribute-bx">
                    <div className="variant-elem--bx">
                      {tags.patterns.map((curElem, indx) => (
                        <div className="variant-bx" key={indx}>
                          <span> {curElem} </span>
                          <button
                            onClick={() => handleDeleteFunc("patterns", indx)}
                          >
                            <ion-icon name="close-outline"></ion-icon>
                          </button>
                        </div>
                      ))}
                    </div>

                    <input
                      type="text"
                      value={value.patterns}
                      name="patterns"
                      id="patterns"
                      onChange={handleFormChange}
                      onKeyDown={handleKeyPressDown}
                      placeholder="Please enter patterns"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="prod-add-can-flex-btn prod-add-can-flex-btn3121 prod-add-can-flex-btn31 ">
                <button className="prod-add-del-btn upld-add-prod gen-comb">
                  Generate Combinations
                </button>
              </div>
            </div>
          ) : null}

          {tabActive === "generatecomb" ? (
            <div className="add-prod-form-main shipping-info-bx">
              <div className="add-product-form-bx add-product-form-bx212">
                <div className="comb-main">
                 {combData.map((curData,indx) => {
                    return (
                        <>
                         <div className="combination-data-flex">

                            <div className="combint-data-grid">

                            <span> #{curData.id} </span>

                            <div className="comb-size-data-flex-bx">
                                {curData.size.map((curelem,id) => (
                                    <div className="comb-data-bx">
                            <span> {curelem} </span>

                                    </div>
                                ))}
                            </div>
                                
                            </div>
                   
                  </div>
                        </>
                    )
                 })}
                </div>
              </div>
              <div className="prod-add-can-flex-btn prod-add-can-flex-btn3121 prod-add-can-flex-btn31 ">
                <button className="prod-add-del-btn upld-add-prod gen-comb">
                  Save & Next
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default AddProduct;
