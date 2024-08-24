import React, { useRef, useState } from "react";
import combData from "./CombinationData";
import { Form, Formik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { greenProdCategoryFetch } from "../../apis/products/categories";
import {
  greenProductsAdd,
  greenProductsUpdate,
} from "../../apis/products/product";
import { toast } from "react-toastify";
const AddProduct = ({ onClickClose, initialValues }) => {
  const [tabActive, setTabActive] = useState("basic");
  const [images, setImages] = useState([]);
  const [tagValue, setTagValue] = useState([]);
  const [formHide, setformHide] = useState(false);
  const [genComb, setGenComb] = useState(false);
  const [chart, setChart] = useState(null);
  const [inptBx, setInptBx] = useState([""]);
  const [messagePublish, setMessagePublish] = useState(false);
  const [messageDraft, setMessageDraft] = useState(false);

  const handleMesasagePublish = () => {
    setMessagePublish(true);

    setTimeout(() => {
      setMessagePublish(false);
    }, 3000);
  };

  const handleMesasageDraft = () => {
    setMessageDraft(true);

    setTimeout(() => {
      setMessageDraft(false);
    }, 3000);
  };

  const [value, setValue] = useState({
    sizes: "",
    colors: "",
    fabric: "",
    patterns: "",
  });
  const [selectImg, setSelectImg] = useState(null);
  const [tags, setTags] = useState({
    sizes: [],
    colors: [],
    fabric: [],
    patterns: [],
  });

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectImg(URL.createObjectURL(file));
    }
  };

  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = Array.from(e.target.files);
    setImages([...images, ...selectedImage]);
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
      e.preventDefault();
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

  const handleChartChange = (e) => {
    const fileImg = e.target.files[0];
    if (fileImg) {
      setChart(fileImg);
    }
  };

  const handleInptAdd = (indx, event) => {
    const newInptBx = [...inptBx];
    newInptBx[indx] = event.target.value;
    setInptBx(newInptBx);
  };

  const copyInptBx = () => {
    setInptBx([...inptBx, ""]);
  };
  const handleAddProductSubmit = async (data) => {
    const payload = {
      ...data,
      tags: JSON.stringify(tagValue),
      productImages: images,
      sizeChartImage: chart,
      gst: +data?.gst || null,
    };
    if (initialValues) {
      payload.imageIds = JSON.stringify(
        data?.ProdImages?.map(({ id }) => id) || []
      );
    }
    const res = initialValues
      ? await greenProductsUpdate(payload)
      : await greenProductsAdd(payload);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClose();
  };
  const { data: categories, refetch } = useQuery({
    queryKey: ["greenProdCategoryFetch"],
    queryFn: () => greenProdCategoryFetch({}),
  });
  return (
    <>
      <section className="add-prod-comp" onClick={onClickClose}>
        <div className="add-prod-main-bx" onClick={(e) => e.stopPropagation()}>
          <div className="top-add-prod-flex-bx">
            <div className="left-add-prod-title-bx">
              <h6>{initialValues ? "Update" : "Add"} Product </h6>
              <p>
                {initialValues ? "Update" : "Add"} your product and necessary
                information from here
              </p>
            </div>

            <div className="right-lang-sel-bx-flex">
              <div onClick={onClickClose} className="add-prod-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="add-prod-tab-flex-bx mt-3">
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
                onClick={() => setTabActive("groupproduct")}
                className={
                  tabActive === "groupproduct"
                    ? "tab-add-prod tabactive"
                    : "tab-add-prod"
                }
              >
                Group Products
              </button>
            </div>
          </div>

          {tabActive === "basic" ? (
            <Formik
              initialValues={initialValues || {}}
              onSubmit={handleAddProductSubmit}
            >
              {({
                handleBlur,
                handleChange,
                values,
                errors,
                touched,
                ...rest
              }) => {
                return (
                  <Form className="add-prod-form-main basic-info-bx">
                    <div className="add-product-form-bx">
                      <div className="ord-filt-bx add-prod-inpt-bx ">
                        <span>Choose Category</span>

                        <div className="add-prod-inpt-bx21 add-prod-inpt-bx21221">
                          <select
                            name="categoryId"
                            id="category"
                            value={values?.categoryId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                          >
                            <option value="" hidden>
                              Choose Category
                            </option>
                            {!categories?.error
                              ? categories?.map(({ id, name, charge }) => (
                                  <option key={id} value={id}>
                                    {name}
                                  </option>
                                ))
                              : null}
                          </select>
                          {values?.categoryId && !categories?.error ? (
                            <p>
                              The platform commission for this category will be{" "}
                              <span>
                                {
                                  categories?.find(
                                    ({ id }) => id == values?.categoryId
                                  )?.charge
                                }
                                %
                              </span>{" "}
                            </p>
                          ) : null}
                        </div>
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Product Title/Name</span>
                        <input
                          type="text"
                          name="name"
                          id="producttitle"
                          placeholder="Product Title/Name"
                          autoComplete="off"
                          value={values?.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        />
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
                        <span>Short Description</span>
                        <textarea
                          name="shortDesc"
                          id="desc"
                          cols="30"
                          rows="1"
                          placeholder="Short Description"
                          autoComplete="off"
                          value={values?.shortDesc}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                        ></textarea>
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx  add-prod-desc-bx">
                        <span>Long Description</span>
                        <textarea
                          name="longDesc"
                          id="desc"
                          cols="30"
                          rows="3"
                          placeholder="Long Description"
                          autoComplete="off"
                          value={values?.longDesc}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
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
                                (Only *jpeg, *webp and * png images will be
                                accepted){" "}
                              </span>
                            </label>
                          </div>
                          <p>First image will be use as default image .</p>

                          <div className="image-add-grid">
                            {values?.ProdImages?.map(({ id, image }, indx) => {
                              return (
                                <div className="upld-prod-img-bx" key={id}>
                                  <img src={image} alt="" />
                                  {indx === 0 ? <p>Default Image</p> : null}
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const value = values?.ProdImages?.filter(
                                        ({ id: imageId }) => imageId != id
                                      );
                                      handleChange({
                                        target: { name: "ProdImages", value },
                                      });
                                    }}
                                    className="delete-prod-img-bx"
                                  >
                                    <ion-icon name="close-outline"></ion-icon>
                                  </button>
                                </div>
                              );
                            })}
                            {images.map((img, indx) => {
                              return (
                                <div className="upld-prod-img-bx" key={indx}>
                                  <img src={URL.createObjectURL(img)} alt="" />
                                  {indx === 0 && !initialValues ? (
                                    <p>Default Image</p>
                                  ) : null}
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteImage(indx)}
                                    className="delete-prod-img-bx"
                                  >
                                    <ion-icon name="close-outline"></ion-icon>
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx mt-5">
                        <span>Product SKU</span>
                        <input
                          type="text"
                          name="sku"
                          id="productsku"
                          placeholder="Product SKU"
                          autoComplete="off"
                          value={values?.sku}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
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
                          value={values?.hsn}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Product Price</span>
                        <div className="prod-price-bx">
                          <input
                            type="number"
                            name="productPrice"
                            id="price"
                            onWheel={(e) => e.currentTarget.blur()}
                            placeholder="0"
                            autoComplete="off"
                            value={values?.productPrice}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span>₹</span>
                        </div>
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Sale Price</span>
                        <div className="prod-price-bx">
                          <input
                            type="number"
                            name="sellPrice"
                            id="saleprice"
                            onWheel={(e) => e.currentTarget.blur()}
                            placeholder="0"
                            autoComplete="off"
                            value={values?.sellPrice}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <span>₹</span>
                        </div>
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Product Quantity</span>
                        <input
                          type="number"
                          name="quantity"
                          id="prodquantity"
                          onWheel={(e) => e.currentTarget.blur()}
                          placeholder="0"
                          autoComplete="off"
                          value={values?.quantity}
                          onChange={handleChange}
                          onBlur={handleBlur}
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
                          value={values?.slug}
                          onChange={handleChange}
                          onBlur={handleBlur}
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

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>GST</span>
                        <div className="check-box-flex-bx">
                          <div className="check-bx-gst">
                            <input
                              type="radio"
                              name="gst"
                              id="gst"
                              className="checkbox212 "
                              value=""
                              onChange={handleChange}
                              onBlur={handleBlur}
                              checked={!+values?.gst}
                            />
                            <span>Includes</span>
                          </div>
                          <div className="check-bx-gst">
                            <input
                              type="radio"
                              name="gst"
                              // id="gst1"
                              // checked={checkBxTwo}
                              className="checkbox212 "
                              value="18"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              checked={+values?.gst}
                            />
                            <span>Extra</span>
                          </div>

                          {+values?.gst ? (
                            <div className="add-prod-inpt-bx21 add-prod-inpt-bx2121">
                              <select
                                name="gst"
                                id="GST"
                                value={+values?.gst}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              >
                                <option value="" hidden>
                                  Choose GST
                                </option>
                                <option value="18">18%</option>
                                <option value="20">20%</option>
                                <option value="15">15%</option>
                                <option value="19">19%</option>
                              </select>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Product Size Chart</span>

                        <div className="right-prod-img-add-bx">
                          <div className="right-prod-upload-img-bx-main">
                            <input
                              type="file"
                              accept="image/*"
                              // multiple
                              id="imageUploadChart"
                              onChange={handleChartChange}
                            />

                            <label htmlFor="imageUploadChart">
                              <ion-icon name="cloud-upload-outline"></ion-icon>
                              <p>Drag your images here</p>
                              <span>
                                {" "}
                                (Only *jpeg, *webp and * png images will be
                                accepted){" "}
                              </span>
                            </label>
                          </div>

                          {chart ? (
                            <div className="upld-prod-img-bx imga-chart-bx">
                              <img src={URL.createObjectURL(chart)} alt="" />
                              <button
                                type="button"
                                onClick={() => setChart(null)}
                                className="delete-prod-img-bx"
                              >
                                <ion-icon name="close-outline"></ion-icon>
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="prod-add-can-flex-btn prod-add-can-flex-btn31 ">
                      {/* <button
                        type="button"
                        className="prod-add-del-btn upld-can-prod"
                      >
                        Cancel
                      </button> */}
                      <button
                        type="submit"
                        // onClick={() => setTabActive("shipping")}
                        className="prod-add-del-btn upld-add-prod"
                      >
                        Save
                        {/* & Next */}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
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
              <h4>Attributes</h4>

              <div
                className={
                  genComb
                    ? "add-product-form-bx add-product-form-bx212 add-product-form-bx22222"
                    : "add-product-form-bx add-product-form-bx212 "
                }
              >
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
              {genComb && (
                <div className="add-prod-form-main  shipping-info-bx">
                  <div className="add-product-form-bx add-product-form-bx22222    add-product-form-bx212">
                    <div className="comb-table">
                      <table>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Sizes</th>
                            <th>Colors</th>
                            <th>Fabric</th>
                            <th>Patterns</th>
                            <th>GST</th>
                            <th>Price</th>
                            <th>Final Cost</th>
                            <th>Action </th>
                          </tr>
                        </thead>
                        <tbody>
                          {combData.map((curElem, indx) => (
                            <tr key={indx}>
                              <td className="">
                                <span className="id-text"> {curElem.id} </span>
                              </td>
                              <td className="">
                                <span> {curElem.size} </span>
                              </td>
                              <td className="">
                                <span> {curElem.colors} </span>
                              </td>
                              <td className="">
                                <span> {curElem.fabric} </span>
                              </td>
                              <td className="">
                                <span> {curElem.patterns} </span>
                              </td>
                              <td>
                                <span> {curElem.gst} </span>
                              </td>
                              <td className="price-btn ">
                                <button
                                  onClick={() => setformHide(true)}
                                  className="add-price-btn"
                                >
                                  Add Price
                                </button>
                              </td>
                              <td>
                                <span> {curElem.finalcost} </span>
                              </td>
                              <td>
                                <div className="btns-flex">
                                  <button className="act-btns">
                                    <i class="fa-regular fa-trash-can"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {formHide ? (
                      <div
                        className="comb-form-comp"
                        onClick={() => setformHide(false)}
                      >
                        <div
                          className="form-below-main-bx"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <form>
                            <div className="top-form-comb-flex-bx">
                              <div className="left-comb-img-bx">
                                <input
                                  type="file"
                                  accept="image/*"
                                  name="id_file"
                                  id="id_file"
                                  onChange={handleImgChange}
                                />
                                <label htmlFor="id_file">
                                  <div className="comb-file-img-bx">
                                    <img
                                      src={
                                        selectImg || "/images/customImg/836.jpg"
                                      }
                                      alt=""
                                    />
                                  </div>
                                </label>
                              </div>

                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx">
                                <span>SKU</span>
                                <input
                                  type="text"
                                  name="sku"
                                  id="sku"
                                  placeholder="Enter SKU"
                                  autoComplete="off"
                                />
                              </div>
                            </div>

                            <div className="comb-grid-inpt-bx">
                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                <span>Regular Price</span>
                                <input
                                  type="text"
                                  name="price"
                                  id="price"
                                  placeholder="Variation Price (required)"
                                  autoComplete="off"
                                />
                              </div>

                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                <span>Sale Price</span>
                                <input
                                  type="text"
                                  name="saleprice"
                                  id="saleprice"
                                  placeholder="Enter Sales Price"
                                  autoComplete="off"
                                />
                              </div>
                            </div>

                            <div className="comb-grid-inpt-bx">
                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                <span>Stock Status</span>
                                <select name="stockstatus" id="stockstatus">
                                  <option value="stockstatus">In Stock</option>
                                  <option value="stockstatus">
                                    Out of Stock
                                  </option>
                                </select>
                              </div>

                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                <span>Weight (kg) </span>
                                <input
                                  type="text"
                                  name="weight"
                                  id="weight"
                                  placeholder="0"
                                  autoComplete="off"
                                />
                              </div>
                            </div>

                            <div className="comb-grid-inpt-bx comb-grid-inpt-bx2">
                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                <span>Length (cm) </span>
                                <input
                                  type="text"
                                  name="length"
                                  id="length"
                                  placeholder="Length"
                                  autoComplete="off"
                                />
                              </div>

                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                <span>Widht (cm) </span>
                                <input
                                  type="text"
                                  name="width"
                                  id="width"
                                  placeholder="Widht"
                                  autoComplete="off"
                                />
                              </div>

                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                <span>Widht (cm) </span>
                                <input
                                  type="text"
                                  name="height"
                                  id="height"
                                  placeholder="Height"
                                  autoComplete="off"
                                />
                              </div>
                            </div>

                            <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                              <span>Shipping Class</span>
                              <select name="shipingclass" id="shipingclass">
                                <option value="shipingclass">
                                  Same as Parent
                                </option>
                                <option value="shipingclass">
                                  Same as Parent
                                </option>
                              </select>
                            </div>

                            <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                              <span>Diescription</span>
                              <textarea
                                name="message"
                                id="message"
                                rows="2"
                              ></textarea>
                            </div>

                            <button className="prod-add-del-btn upld-add-prod gen-comb m-auto">
                              Save & Next
                            </button>
                          </form>

                          <div
                            onClick={() => setformHide(false)}
                            className="close-btn close-btn-comb"
                          >
                            <i class="fa-solid fa-xmark"></i>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              <div className="prod-add-can-flex-btn prod-add-can-flex-btn3121 prod-add-can-flex-btn31 ">
                {genComb ? (
                  <button
                    onClick={() => setTabActive("groupproduct")}
                    className="prod-add-del-btn upld-add-prod gen-comb"
                  >
                    Create Group
                  </button>
                ) : null}

                {genComb ? (
                  <button
                    onClick={handleMesasagePublish}
                    className="prod-add-del-btn upld-add-prod gen-comb"
                  >
                    Publish
                  </button>
                ) : null}

                {genComb ? null : (
                  <button
                    onClick={() => setGenComb("generatecomb")}
                    className="prod-add-del-btn upld-add-prod gen-comb"
                  >
                    Generate Combinations
                  </button>
                )}
              </div>

              {messagePublish ? (
                <div className="mesagebx">
                  <p className="mesagetext">
                    Your Request has been submitted, You will be active once
                    verified!
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {tabActive === "groupproduct" ? (
            <div className="add-prod-form-main shipping-info-bx">
              <div className="add-product-form-bx add-product-form-bx212">
                {inptBx.map((inptValue, indx) => (
                  <div className="ord-filt-bx add-prod-inpt-bx" key={indx}>
                    <span>{`Product ${indx + 1} `}</span>
                    <input
                      type="text"
                      name="products"
                      id="products"
                      value={inptValue}
                      onChange={(event) => handleInptAdd(indx, event)}
                      placeholder="Enter here..."
                      autoComplete="off"
                    />
                  </div>
                ))}

                <div className="product-add-cost-flex-bx d-flex align-items-baseline justify-content-between w-100 mt-4">
                  <button
                    onClick={() => copyInptBx()}
                    className="copy-inpt-btn"
                  >
                    <i class="fa-solid fa-plus"></i>
                  </button>

                  <div className="right-side-total-cost-bx">
                    <div className="cost-bx">
                      <h6>Total Cost : </h6>{" "}
                      <span>
                        <i class="fa-solid fa-indian-rupee-sign"></i> 2000
                      </span>
                    </div>
                    <div className="cost-bx">
                      <h6>Discount : </h6>{" "}
                      <input
                        type="text"
                        name="discount"
                        id="discount"
                        placeholder="Enter discount"
                      />
                    </div>
                    <div className="cost-bx">
                      <h6>Total Cost : </h6>{" "}
                      <span>
                        {" "}
                        <i class="fa-solid fa-indian-rupee-sign"></i> 1800{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prod-add-can-flex-btn prod-add-can-flex-btn3121 prod-add-can-flex-btn31 ">
                <button
                  onClick={handleMesasageDraft}
                  className="prod-add-del-btn upld-add-prod dft-btn"
                >
                  Draft
                </button>
                <button
                  onClick={handleMesasagePublish}
                  className="prod-add-del-btn upld-add-prod dft-btn"
                >
                  Publish
                </button>
              </div>

              {messagePublish ? (
                <div className="mesagebx">
                  <p className="mesagetext">
                    Your Request has been submitted, You will be active once
                    verified!
                  </p>
                </div>
              ) : null}
              {messageDraft ? (
                <div className="mesagebx">
                  <p className="mesagetext">
                    Your Product is saved as a draft, It is not visible to
                    anyone. Edit and Publish to make it visible to the public.
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default AddProduct;

//
