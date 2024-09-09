import React, { useRef, useState } from "react";
import combData from "./CombinationData";
import { Form, Formik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { greenProdCategoryFetch } from "../../apis/products/categories";
import { greenProductsAttributeFetch } from "../../apis/products/attribute";
import {
  greenProductsAdd,
  greenProductsUpdate,
} from "../../apis/products/product";
import Select from "react-select";
import { toast } from "react-toastify";
import { generateCombinations } from "../../lib/variations";
const AddProduct = ({ onClickClose, initialValues }) => {
  const [tabActive, setTabActive] = useState("basic");
  const [images, setImages] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState({});
  const [tagValue, setTagValue] = useState(
    JSON.parse(initialValues?.tags || "[]")
  );
  const [formHide, setformHide] = useState(false);
  const [genComb, setGenComb] = useState(false);
  const [chart, setChart] = useState(null);
  const [inptBx, setInptBx] = useState([""]);
  const [checkBxOne , setCheckBxOne] = useState(false);
  const [checkBxTwo , setCheckBxTwo] = useState(false);
  const [messagePublish  , setMessagePublish] = useState(false);
  const [messageDraft  , setMessageDraft] = useState(false);
  const [selValue , setSelValue] = useState(false);
  const [kpChoose , setKpChoose] =  useState(false);
  const [blkOrder , setBlkOrder] =  useState(false);



  const handleKpChange = (e) => {

    setKpChoose(e.target.value);
    
  }


  const handleprodChange = (e) => {
    if(selValue === ' No'){
      setSelValue(false);
  
      }else{
        setSelValue(e.target.value);

      }

 
    
  }


  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [variations, setVariations] = useState([]);
  const [payload, setPayload] = useState(initialValues || {});
  const [tabFn, setTabFn] = useState({
    1: () => {},
    2: () => {},
    3: () => {},
    4: () => {},
  });
  const shipingOptions = [
    { value: "", label: "No Shipping Class", id: 1 },
    { value: "heavy", label: "Heavy", id: 1 },
    { value: "light", label: "Light", id: 1 },
    { value: "medium", label: "Medium", id: 1 },
    { value: "sneakers", label: "Sneakers", id: 1 },
  ];
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
  const enableTabButton = (button = 2) => {
    const buttons = { 2: "shipping", 3: "combination", 4: "groupproduct" };
    setTabFn((prev) => ({ ...prev, [button]: buttons?.[button] }));
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
      const res = await greenProductsUpdate(payload);
      if (res?.error) {
        toast.error(res?.message);
        return;
      }
      toast.success(res);
    } else {
      setPayload((prev) => ({ ...prev, ...payload }));
      setTabActive("shipping");
      enableTabButton(2);
    }
  };
  const handleAddProductShipingSubmit = async (data) => {
    if (initialValues) {
      const res = await greenProductsUpdate(data);
      if (res?.error) {
        toast.error(res?.message);
        return;
      }
      toast.success(res);
    } else {
      setPayload((prev) => ({ ...prev, ...data }));
      setTabActive("combination");
      enableTabButton(3);
    }
  };
  const handleUpdateVariationSubmit = (id) => async (data) => {
    const variation = variations?.variations?.map((e) => {
      if (e?.initId == id) {
        return { ...e, ...data };
      } else {
        return e;
      }
    });
    setVariations((prev) => ({ ...prev, variations: variation }));
    setformHide(false);
  };
  const handlePublishSubmit = (productStatus) => async () => {
    const finalPayload = {
      ...payload,
      productStatus,
      variations: JSON.stringify(variations?.variations || []),
    };
    if (initialValues) {
      return;
    } else {
      const res = await greenProductsAdd(finalPayload);
      if (res?.error) {
        toast.error(res?.message);
        return;
      }
      onClickClose();
      toast.success(res);
    }
  };
  const { data: categories, refetch } = useQuery({
    queryKey: ["greenProdCategoryFetch"],
    queryFn: () => greenProdCategoryFetch({}),
  });

  const { data: attributes, refetch: refetchAttributes } = useQuery({
    queryKey: ["greenProductsAttributeFetch"],
    queryFn: () => greenProductsAttributeFetch({}),
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
                Questions
              </button>
              <button
                onClick={() => setTabActive("climconect")}
                className={
                  tabActive === "climconect"
                    ? "tab-add-prod tabactive"
                    : "tab-add-prod"
                }
              >
                Clim Connect
              </button>
            {tabActive === 'bulkorder' ?  <button
                onClick={() => setTabActive("bulkorder")}
                className={
                  tabActive === "bulkorder"
                    ? "tab-add-prod tabactive"
                    : "tab-add-prod"
                }
              >
                Bulk Orders
              </button> : null}
            </div>
          </div>

          {tabActive === "basic" ? (
            <Formik
              initialValues={initialValues || payload}
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

                    
                <div className="ord-filt-bx add-prod-inpt-bx">
                  <span>Badges</span>
                  <div className="check-box-flex-bx">
                    <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Cruelty free</span>
                  </div>
                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Toxin free</span>
                  </div>

                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Organic</span>
                  </div>


                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Made in India
                  </span>
                  </div>

                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Women empowerment
                  </span>
                  </div>

                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Vegan / natural
                  </span>
                  </div>

                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Plastic free

                  </span>
                  </div>

                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Locally sourced ingredients
                  </span>
                  </div>

                  <div className="check-bx-gst">
                  <input
                    type="checkbox"
                    name="badges"
                    id="badges"
                    className="checkbox212 "

                  />
                  <span>Sustainable product
                  </span>
                  </div>
           
                  
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx ">
                  <span>Packaging Type</span>

                  <div className="add-prod-inpt-bx21 add-prod-inpt-bx21221">
                    <select name="category" id="category">
                      <option value="category">Choose Packaging</option>
                      <option value="category">100% Eco Friendly</option>
                      <option value="category">Partial Plastic Packing</option>
                      <option value="category">Plastic Packing</option>
                    </select>
                    {/* <p>
                      the text is , the platform commission or this category
                      will be <span>10%</span>{" "}
                    </p> */}
                  </div>
                  
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx ">
                  <span>Return</span>

                  <div className="add-prod-inpt-bx21 add-prod-inpt-bx21221">
                    <select name="category" id="category">
                      <option value="category">Choose One</option>
                      <option value="category">NON Returnable </option>
                      <option value="category">7 Days</option>
                      <option value="category">15 Days</option>
                    </select>
                    {/* <p>
                      the text is , the platform commission or this category
                      will be <span>10%</span>{" "}
                    </p> */}
                  </div>
                  
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx ">
                  <span>KP Return</span>
                    <div className={ kpChoose === 'Yes' ? "select-bx-two-bx select-bx-two-bx2" : "select-bx-two-bx"}>
                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category"  onChange={handleKpChange}>
                      <option value="ChooseOne">Choose One</option>
                      <option value="Yes">Yes </option>
                      <option value="No">No</option>
                    </select>

                    </div>
{kpChoose === 'Yes' ?
                      <div className="add-prod-inpt-bx2 ">
                        <input type="text"
                        name="price"
                        id="price"
                        placeholder="Enter Price"
                        autoComplete="off" />
  
                      </div> : null}
                   
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
                        className="prod-add-del-btn upld-add-prod"
                      >
                        Next
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          ) : null}

          {tabActive === "shipping" ? (
            <Formik
              initialValues={initialValues || payload}
              onSubmit={handleAddProductShipingSubmit}
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
                  <Form className="add-prod-form-main shipping-info-bx">
                    <div className="add-product-form-bx add-product-form-bx212">
                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Weight (kg) </span>
                        <input
                          type="number"
                          name="weight"
                          id="weight"
                          placeholder="0 "
                          autoComplete="off"
                          value={values?.weight}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx ">
                        <span>Shipping Class</span>

                        <div className="add-prod-inpt-bx21">
                          <select
                            name="shipping"
                            id="Shipping"
                            value={values?.shipping}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {shipingOptions?.map(({ value, label, id }) => {
                              return (
                                <option key={id} value={value}>
                                  {label}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Length (cm) </span>
                        <input
                          type="number"
                          name="length"
                          id="length"
                          placeholder="in (cm)"
                          autoComplete="off"
                          value={values?.length}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Width (cm) </span>
                        <input
                          type="number"
                          name="width"
                          id="Width"
                          placeholder="in (cm)"
                          autoComplete="off"
                          value={values?.width}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx">
                        <span>Height (cm) </span>
                        <input
                          type="number"
                          name="height"
                          id="height"
                          placeholder="in (cm)"
                          autoComplete="off"
                          value={values?.height}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                      <div className="ord-filt-bx add-prod-inpt-bx ">
                        <span>Is this product available for 2-hour delivery</span>

                        <div className="add-prod-inpt-bx21">
                          <select
                            name="shipping"
                            id="Shipping"
                           
                          >
                            <option value="Choose Option">Choose Option</option>
                            <option value="Yes">Yes</option>
                           
                          </select>
                        </div>
                      </div>
                      
                    </div>
                    <div className="prod-add-can-flex-btn prod-add-can-flex-btn3121 prod-add-can-flex-btn31 ">
                      <button
                        type="submit"
                        className="prod-add-del-btn upld-add-prod"
                      >
                        Next
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
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
                {!attributes?.error
                  ? attributes?.map(
                      ({
                        ProdAttributeValues,
                        addedOn,
                        attributeStatus,
                        id,
                        label,
                        name,
                        style,
                        updatedOn,
                      }) => {
                        return (
                          <div
                            key={id}
                            className="ord-filt-bx add-prod-inpt-bx"
                          >
                            <span>{label}</span>

                            <div className="variants-attribute-bx">
                              <Select
                                options={(ProdAttributeValues || [])?.map(
                                  ({ value }) => ({ value, label: value })
                                )}
                                components={{ NoOptionsMessage: () => {} }}
                                name={name}
                                id="sizes"
                                isMulti
                                onChange={(v) => {
                                  const newValues = v?.map(
                                    ({ value }) => value
                                  );
                                  setSelectedAttributes((prev) => ({
                                    ...prev,
                                    [name]: newValues,
                                  }));
                                }}
                                placeholder={`Please enter ${label}`}
                                menuIsOpen={menuIsOpen?.[id]}
                                onBlur={() => setMenuIsOpen({ [id]: false })}
                                onMenuOpen={() => setMenuIsOpen({ [id]: true })}
                                styles={{
                                  indicatorSeparator: () => ({
                                    display: "none",
                                  }),
                                  dropdownIndicator: () => ({
                                    display: "none",
                                  }),
                                }}
                              />
                            </div>
                          </div>
                        );
                      }
                    )
                  : null}
              </div>
              {genComb && (
                <div className="add-prod-form-main  shipping-info-bx">
                  <div className="add-product-form-bx add-product-form-bx22222    add-product-form-bx212">
                    <div className="comb-table">
                      <table>
                        <thead>
                          <tr>
                            <th>ID</th>
                            {variations?.keys?.map((k) => {
                              return <th>{k}</th>;
                            })}
                            <th>GST</th>
                            <th>Price</th>
                            <th>Final Cost</th>
                            <th>Action </th>
                          </tr>
                        </thead>
                        <tbody>
                          {variations?.variations?.map(
                            ({ variation, ...rest }, indx) => (
                              <tr key={indx}>
                                <td className="">
                                  <span className="id-text"> {indx + 1} </span>
                                </td>
                                {variations?.keys?.map((k) => {
                                  return (
                                    <td className="">
                                      <span> {variation?.[k]} </span>
                                    </td>
                                  );
                                })}
                                <td>
                                  <span> {rest?.gst} </span>
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
                                  <span> {rest?.sellPrice} </span>
                                </td>
                                <td>
                                  <div className="btns-flex">
                                    <button className="act-btns">
                                      <i class="fa-regular fa-trash-can"></i>
                                    </button>
                                  </div>
                                </td>
                                {formHide ? (
                                  <div
                                    className="comb-form-comp"
                                    onClick={() => setformHide(false)}
                                  >
                                    <div
                                      className="form-below-main-bx"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <Formik
                                        initialValues={rest || {}}
                                        onSubmit={handleUpdateVariationSubmit(
                                          rest?.initId
                                        )}
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
                                            <Form>
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
                                                          selectImg ||
                                                          "/images/customImg/836.jpg"
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
                                                    value={values?.sku}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  />
                                                </div>
                                              </div>

                                              <div className="comb-grid-inpt-bx">
                                                <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                  <span>Regular Price</span>
                                                  <input
                                                    type="text"
                                                    name="productPrice"
                                                    id="price"
                                                    placeholder="Variation Price"
                                                    autoComplete="off"
                                                    value={values?.productPrice}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  />
                                                </div>

                                                <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                  <span>Sale Price</span>
                                                  <input
                                                    type="text"
                                                    name="sellPrice"
                                                    id="saleprice"
                                                    placeholder="Enter Sales Price"
                                                    autoComplete="off"
                                                    value={values?.sellPrice}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  />
                                                </div>
                                              </div>

                                              <div className="comb-grid-inpt-bx">
                                                <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                  <span>Stock Status</span>
                                                  <select
                                                    name="stockStatus"
                                                    id="stockstatus"
                                                    value={values?.stockStatus}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  >
                                                    <option value="in">
                                                      In Stock
                                                    </option>
                                                    <option value="out">
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
                                                    value={values?.weight}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
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
                                                    value={values?.length}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  />
                                                </div>

                                                <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                  <span>Width (cm) </span>
                                                  <input
                                                    type="text"
                                                    name="width"
                                                    id="width"
                                                    placeholder="Widht"
                                                    autoComplete="off"
                                                    value={values?.width}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  />
                                                </div>

                                                <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                  <span>Height (cm) </span>
                                                  <input
                                                    type="text"
                                                    name="height"
                                                    id="height"
                                                    placeholder="Height"
                                                    autoComplete="off"
                                                    value={values?.height}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                  />
                                                </div>
                                              </div>

                                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                <span>Shipping Class</span>
                                                <select
                                                  name="shipping"
                                                  id="shipingclass"
                                                  value={values?.shipping}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                >
                                                  {shipingOptions?.map(
                                                    ({ value, label, id }) => {
                                                      return (
                                                        <option
                                                          key={id}
                                                          value={value}
                                                        >
                                                          {label}
                                                        </option>
                                                      );
                                                    }
                                                  )}
                                                </select>
                                              </div>

                                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                <span>Short Diescription</span>
                                                <textarea
                                                  name="shortDesc"
                                                  id="message"
                                                  rows="2"
                                                  value={values?.shortDesc}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                ></textarea>
                                              </div>

                                              <div className="ord-filt-bx add-prod-inpt-bx comb-inpt-bx comb-inpt-bx2">
                                                <span>Long Diescription</span>
                                                <textarea
                                                  name="longDesc"
                                                  id="message"
                                                  rows="2"
                                                  value={values?.longDesc}
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                                ></textarea>
                                              </div>

                                              <button
                                                type="submit"
                                                className="prod-add-del-btn upld-add-prod gen-comb m-auto"
                                              >
                                                Save
                                              </button>
                                            </Form>
                                          );
                                        }}
                                      </Formik>
                                      <div
                                        onClick={() => setformHide(false)}
                                        className="close-btn close-btn-comb"
                                      >
                                        <i class="fa-solid fa-xmark"></i>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
              <div className="prod-add-can-flex-btn prod-add-can-flex-btn3121 prod-add-can-flex-btn31 ">
                <button
                  onClick={() => {
                    let { combinations, keys } =
                      generateCombinations(selectedAttributes);
                    combinations = combinations?.map((e, i) => ({
                      ...payload,
                      variation: e,
                      sku: `${payload?.sku}-${i}`,
                      initId: `${payload?.sku}-${i}`,
                    }));
                    setVariations({ variations: combinations, keys });
                    setGenComb("generatecomb");
                  }}
                  className="prod-add-del-btn upld-add-prod gen-comb"
                >
                  {variations?.variations?.length ? "Re-" : ""}Generate
                  Combinations
                </button>
                {/* <button
                  onClick={() => setTabActive("groupproduct")}
                  className="prod-add-del-btn upld-add-prod gen-comb"
                >
                  Next
                </button> */}
                <button
                  onClick={() => {
                    setTabActive("groupproduct");
                    enableTabButton(4);
                  }}
                  // onClick={handleMesasagePublish}
                  className="prod-add-del-btn upld-add-prod gen-comb"
                >
                  Next
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
                  onClick={handlePublishSubmit("inactive")}
                  // onClick={handleMesasageDraft}
                  className="prod-add-del-btn upld-add-prod dft-btn"
                >
                  Draft
                </button>
                <button
                  onClick={handlePublishSubmit("active")}
                  // onClick={handleMesasagePublish}
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

          {
            tabActive === 'climconect' ? (
              <div className="add-prod-form-main basic-info-bx">
              <div className="add-product-form-bx">
                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Type of product   </span>
                  <span className="brakcet">
                 ( Metal, Glass, Cloth, Wood, Bamboo, Oil, Wax, Electronic)
                  </span>
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Virgin 
                      </option>
                      <option value="category">Recycled </option>
                      <option value="category">Refurb (not more than 20% virgin plastic)
                      </option>
                      <option value="category">Upcycled  (not more than 20% virgin plastic) (Metal, Glass, Cloth)
                      </option>
                      <option value="category">Natural (Not processed)
                      </option>
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Does your product contain plastic ?   </span>
               
                  </div>
                <div className={selValue === "Yes" ?  "select-bx-two-bx select-bx-two-bx2" : "select-bx-two-bx"}>
                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category" onChange={handleprodChange}>
                    <option value="category">Choose One </option>

                      <option value="Yes">Yes </option>
                      <option value="No">No
                      </option>
            
                    </select>
                
                  </div>

                  {selValue === "Yes"  ? 
                   <div className="add-prod-inpt-bx21 ">
                   <select name="category" id="category">
                   <option value="category">Choose One </option>

                     <option value="category">100% </option>
                     <option value="category">75-99% </option>
                     <option value="category">40-75% </option>
                     <option value="category">1-40% </option>
           
                   </select>
               
                 </div> : null}
                  
                  </div>

                  
                  
                </div>
                

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Type of product   </span>
                  <span className="brakcet">
                 ( Metal, Glass, Cloth, Wood, Bamboo, Oil, Wax, Electronic)
                  </span>
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Virgin 
                      </option>
                      <option value="category">Recycled </option>
                      <option value="category">Refurb (not more than 20% virgin plastic)
                      </option>
                      <option value="category">Upcycled  (not more than 20% virgin plastic) (Metal, Glass, Cloth)
                      </option>
                      <option value="category">Natural (Not processed)
                      </option>
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Material used in product 
                  </span>
                  <span className="brakcet">
                  (Checkbox)
                  </span>
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Cotton 
                      </option>
                      <option value="category">Jute </option>
                      <option value="category">Paper
                      </option>
                      <option value="category">Chemicals
                      </option>
                      <option value="category">Bamboo
                      </option>
                      <option value="category">Other eco-friendly
                      </option>
                      <option value="category">Organic
                      </option>
                      <option value="category">Natural oil/wax

                      </option>
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Type of packaging material used for shipping   </span>
                
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Plastic 
                      </option>
                      <option value="category">Recycled/upcycled packaging </option>
                      <option value="category">Plastic free packaging and shipping (including celotape)

                      </option>
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Type of primary and secondary packaging material 
                  </span>
                  <span className="brakcet">
                  (including label)
                  </span>
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Plastic 
                      </option>
                      <option value="category">Recycled/upcycled packaging </option>
                      <option value="category">Plastic free

                      </option>
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span> 
 	
   Is your product a plastic replacement?   </span>
                  <span className="brakcet">
                 ( Metal, Glass, Cloth, Wood, Bamboo, Oil, Wax, Electronic)
                  </span>
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                    
                      <option value="category">Yes </option>
                      <option value="category">No
                      </option>
                
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Electricity consumption   </span>
            
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Electric Machine made 
                      </option>
                      <option value="category">Partial machine made
                      </option>
                      <option value="category">Handmade
                      </option>
               
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Is ground water used while making the product?
                  </span>
            
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Yes 
                      </option>
                      <option value="category">No </option>
             
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>What happens to the product at the end of its life cycle?   </span>
               
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Landfill 
                      </option>
                      <option value="category">Bio-degradable </option>
                      <option value="category">Recycled
                      </option>
       
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Materials used in making product are sourced from within   </span>
               
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">400 KM 
                      </option>
                      <option value="category">Country </option>
                      <option value="category">Imported
                      </option>
                 
                   
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Is your product KabadPe returned?
                  </span>
               
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Yes 
                      </option>
                      <option value="category">No </option>
             
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Is your product in any way toxic to environment   </span>
                
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Whole product 
                      </option>
                      <option value="category">Product only </option>
                      <option value="category">Packaging only

                      </option>
                      <option value="category">Label only
                      </option>
                      <option value="category">Not at all

                      </option>
                    </select>
                
                  </div>
                </div>

                <div className="ord-filt-bx add-prod-inpt-bx mock-inpt-bx">
                  <div className="left-label">
                  <span>Is this best product from environment
                  </span>
                  <span> (admin)</span>
                
                  </div>

                  <div className="add-prod-inpt-bx21 ">
                    <select name="category" id="category">
                    <option value="category">Choose One </option>
                      <option value="Virgin 
">Best 
                      </option>
                      <option value="category">Better for environment </option>
                      <option value="category">Okay for environment

                      </option>
                      <option value="category">Bad
                      </option>
                      <option value="category">Worst

                      </option>
                    </select>
                
                  </div>


                  
                </div>


                <div className="total-right-bx">
                  <span>Clim Connect Valuation</span>
                  <div className="color-bx"></div>
                </div>

                <div className="prod-add-can-flex-btn prod-add-can-flex-btn31 ">
                <button className="prod-add-del-btn pb-btn  upld-can-prod">
                  Publish Without Bulk Orders
                </button>
                <button
                  onClick={() =>{ setTabActive("shipping"), setTabActive('bulkorder')}}
                  className="prod-add-del-btn upld-add-prod" style={{ width : 'max-content'}}
                >
                  Create Bulk Orders
                </button>
              </div>

                </div>
                </div>
            ) : null
          }

          {
            tabActive === 'bulkorder' ? <div className="bulk-order-main">

              <h5>This Product is available for bulk order and customization.</h5>

              <div className="bulk-ord-flex bulk-ord-flex1">
                
                <div className="left-blk-order-bx">

                  <h6>Number Of Quantity</h6>

                  

                </div>

                <div className="right-blk-order-flex-bx">

                  <h6>Price ( pcs. / kg ) </h6>
                  <h6>Customization ( price pcs. / kg) </h6>
                  <h6>Delivery (In days)</h6>
                  
                </div>



                
                </div>

                <div className="bulk-ord-flex bulk-ord-flex2">
                
                <div className="left-blk-order-bx left-blk-order-bx1">

                  <h6>100 - 500</h6>

                  <div className="chse-type-bx">
                    <select name="chose" id="chose">
                      <option value="Choose One">Choose One</option>
                      <option value="kg">kg</option>
                      <option value="pcs">pcs.</option>

                    </select>
                  </div>
                </div>

                <div className="right-blk-order-flex-bx">

                <div className="blk-ord-inpt">
                  <input type="text" name="price" id="price" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="customization" id="customization" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="days" id="days" placeholder="" />
                </div>
                  
                </div>



                
                </div>

                <div className="bulk-ord-flex bulk-ord-flex2">
                
                <div className="left-blk-order-bx left-blk-order-bx1">

                  <h6>501 - 1000</h6>

                  <div className="chse-type-bx">
                    <select name="chose" id="chose">
                      <option value="Choose One">Choose One</option>
                      <option value="kg">kg</option>
                      <option value="pcs">pcs.</option>

                    </select>
                  </div>

                </div>

                <div className="right-blk-order-flex-bx">

                <div className="blk-ord-inpt">
                  <input type="text" name="price" id="price" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="customization" id="customization" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="days" id="days" placeholder="" />
                </div>
                  
                </div>



                
                </div>

                <div className="bulk-ord-flex bulk-ord-flex2">
                
                <div className="left-blk-order-bx left-blk-order-bx1">

                  <h6>1001 - 2000</h6>
                  <div className="chse-type-bx">
                    <select name="chose" id="chose">
                      <option value="Choose One">Choose One</option>
                      <option value="kg">kg</option>
                      <option value="pcs">pcs.</option>

                    </select>
                  </div>
                </div>

                <div className="right-blk-order-flex-bx">

                <div className="blk-ord-inpt">
                  <input type="text" name="price" id="price" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="customization" id="customization" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="days" id="days" placeholder="" />
                </div>
                  
                </div>



                
                </div>

                <div className="bulk-ord-flex  bulk-ord-flex2">
                
                <div className="left-blk-order-bx left-blk-order-bx1">

                  <h6>2001 - 5000</h6>
                  <div className="chse-type-bx">
                    <select name="chose" id="chose">
                      <option value="Choose One">Choose One</option>
                      <option value="kg">kg</option>
                      <option value="pcs">pcs.</option>

                    </select>
                  </div>
                </div>

                <div className="right-blk-order-flex-bx">

                <div className="blk-ord-inpt">
                  <input type="text" name="price" id="price" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="customization" id="customization" placeholder="" />
                </div>
                <div className="blk-ord-inpt">
                  <input type="text" name="days" id="days" placeholder="" />
                </div>
                  
                </div>



                
                </div>


                  <div className="bulk-ord-flex bulk-ord-flex2 bulk-ord-flex3">
                
                <div className="left-blk-order-bx left-blk-order-bx2">

                  <h6>Type your customization details</h6>

                </div>

                <div className="det-bx">

                <textarea name="details" id="details" rows='3'></textarea>
                  
                </div>



                
                </div>

                <div className="bulk-ord-flex  bulk-ord-flex3 bulk-ord-flex4">
                
                <div className="left-blk-order-bx left-blk-order-bx2">

                  <h6>Add your logo</h6>

                </div>

                <div className="upload-logo-bx">

                  <div className="logo-bx">
                    <img src={ '/images/customImg/836.jpg' } alt="" />
                  </div>
                  
                  <h6>Please Upload your Logo</h6>

                  <input type="file" name="logo_file" id="logo_file" accept="image/* " />

                <label htmlFor="logo_file" className="upload">Upload</label>
                  
                </div>




                
                </div>

                <div className="prod-add-can-flex-btn prod-add-can-flex-btn31 ">
           
                <button
                  onClick={() =>{ setTabActive("shipping"), setTabActive('bulkorder')}}
                  className="prod-add-del-btn upld-add-prod"
                >
                  Publish
                </button>
              </div>
              
            </div> : null
          }


          
        </div>
      </section>
    </>
  );
};

export default AddProduct;

//
