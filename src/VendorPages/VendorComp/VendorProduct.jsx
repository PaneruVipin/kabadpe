import React, { useState } from "react";
import ProductData from "./ProductData";
import AddProduct from "./AddProduct";

const VendorProduct = ({ compRedirectProdDet }) => {
  const [exportBox, setExportBox] = useState(false);
  const [importBox, setImportBox] = useState(false);
  const [prodList, setProdList] = useState(ProductData);
  const [rangeBtn, setRangeBtn] = useState(false);
  const [rangeNum, setRangeNum] = useState(null);
  const [addProd , setAddProd] = useState(false);

  //   const [selectedOptions, setSelectedOptions] = useState([]);
  //   const [selectedOption, setSelectedOption] = useState('');
  const rangeActiveFunc = (getValue) => {
    setRangeNum(getValue);
    console.log(rangeNum);
    setRangeBtn(!rangeBtn);
  };

  // const handleChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  // const handleAddOption = () => {
  //   if (selectedOption && !selectedOptions.includes(selectedOption)) {
  //     setSelectedOptions([...selectedOptions, selectedOption]);
  //     setSelectedOption('');
  //   }
  // };

  // const handleRemoveOption = (optionToRemove) => {
  //   const updatedOptions = selectedOptions.filter(option => option !== optionToRemove);
  //   setSelectedOptions(updatedOptions);
  // };

  return (
    <>
      <section className="product-comp">
        <div className="product-added-del-main">
          <div className="left-prod-exp-imp-bx">
            <div className="prod-exp-imp-bx">
              <button
                onClick={() => setExportBox(!exportBox)}
                className="prod-exp-imp-btn"
              >
                <i className="fa-solid fa-arrow-up-from-bracket"></i> Export
              </button>

              {exportBox ? (
                <div className="export-info-bx">
                  <div className="export-file">
                    <i className="fa-regular fa-file-lines"></i>{" "}
                    <span>Export to CSV</span>
                  </div>
                  <div className="export-file">
                    <i className="fa-regular fa-file-code"></i>{" "}
                    <span>Export to JSON</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="prod-exp-imp-bx prod-exp-imp-bx2">
              <button
                onClick={() => setImportBox(!importBox)}
                className="prod-exp-imp-btn prod-exp-imp-btn2"
              >
                <i className="fa-solid fa-arrow-up-from-bracket"></i> Import
              </button>

              {importBox ? (
                <div className="import-now-file-bx">
                  <div className="imp-file-btn">
                    <label htmlFor="impFile">
                      {" "}
                      <ion-icon name="cloud-download-outline"></ion-icon>{" "}
                      SelectYourJSON Products File
                    </label>
                    <input
                      type="file"
                      id="impFile"
                      accept=".jpg, .jpeg, .png, .pdf"
                    />
                  </div>

                  <button className="imp-btn">
                    <ion-icon name="add-outline"></ion-icon> ImportNow
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="right-prod-btns-flex">
            <button className="prod-add-del-btn">
              <i className="fa-regular fa-pen-to-square"></i> Bulk Action
            </button>

            <button className="prod-add-del-btn prod-add-del-btn2">
              <i className="fa-solid fa-trash-can"></i> Delete
            </button>

            <button onClick={() => setAddProd(true)} className="prod-add-del-btn prod-add-del-btn3">
              <i className="fa-solid fa-plus"></i> Add Product
            </button>
          </div>
        </div>

        <div className="product-filter-main">
          <div className="ord-filt-bx">
            <input
              type="text"
              name="searchproduct"
              id="searchproduct"
              placeholder="Search Product"
            />
          </div>

          <div className="ord-filt-bx">
            <select name="ordfilter" id="ordfilter">
              <option value="ordfilter">Category</option>
              <option value="ordfilter">Shoes</option>
              <option value="ordfilter">Women</option>
              <option value="ordfilter">Men</option>
              <option value="ordfilter">Beaf</option>
              <option value="ordfilter">Fish</option>
              <option value="ordfilter">Meat</option>
              <option value="ordfilter">Fresh Fruits</option>
              <option value="ordfilter">Fresh Dry Fruits</option>
              <option value="ordfilter">Baby Food</option>
              <option value="ordfilter">Cooking Essentials</option>
              <option value="ordfilter">Oil</option>
              <option value="ordfilter">Flour</option>
              <option value="ordfilter">Chocolate</option>
              <option value="ordfilter">Perfumes</option>
            </select>
          </div>

          <div className="ord-filt-bx">
            <select name="ordfilter" id="ordfilter">
              <option value="ordfilter">Price</option>
              <option value="ordfilter">Low to High</option>
              <option value="ordfilter">High to Low</option>
              <option value="ordfilter">Published</option>
              <option value="ordfilter">Unpublished</option>
              <option value="ordfilter">Status - Selling</option>
              <option value="ordfilter">Status - Out of Stock</option>
              <option value="ordfilter">Date Added (Asc)</option>
              <option value="ordfilter">Date Added (Desc) </option>
              <option value="ordfilter">Date Updated (Asc) </option>
              <option value="ordfilter">Date Updated (Desc) </option>
            </select>
          </div>

          <div className="ord-filt-btn-flex">
            <button className="filt-ord-btn">Filter</button>

            <button className="filt-ord-btn filt-ord-btn3">Reset</button>
          </div>
        </div>

        <div className="recent-ord-table all-user-table mt-4 prod-table">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="form-check-bxx">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Sale Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th>View</th>
                <th>Published</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {prodList.map((elem) => {
                return (
                  <>
                    <tr>
                      <td>
                        <div className="form-check-bxx">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </td>

                      <td>
                        <div className="prod-info-v">
                          <img
                            src={elem.prodImg}
                            className="prod-img-bx"
                            alt=""
                          />
                          <span> {elem.prodName} </span>
                        </div>
                      </td>

                      <td>
                        <span> {elem.category} </span>
                      </td>

                      <td>
                        <span> {elem.price} </span>
                      </td>

                      <td>
                        <span> {elem.saleprice} </span>
                      </td>

                      <td>
                        <span> {elem.stock} </span>
                      </td>

                      <td>
                        <div
                          className={
                            elem.status === "Sold Out"
                              ? " inv-stat-del-bx inv-stat-del-bx3 sold-out-text"
                              : "inv-stat-del-bx inv-stat-del-bx3"
                          }
                        >
                          <span> {elem.status} </span>
                        </div>
                      </td>

                      <td>
                        <div
                          onClick={compRedirectProdDet}
                          className="view-prod-btn"
                        >
                          <ion-icon name="eye-outline"></ion-icon>
                        </div>
                      </td>

                      <td>
                        {/* <button
                          className={
                            rangeBtn
                              ? "toggle-range-btn rangeactive"
                              : "toggle-range-btn"
                          }
                          onClick={() => rangeActiveFunc(elem.id)}
                        >
                         
                          <div className="toggle-round"></div>
                        </button> */}
                        {elem.published === false ? (
                          <div
                            class={
                              elem.published === false
                                ? "form-checkss form-switch unchecked"
                                : "form-checkss form-switch"
                            }
                          >
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        ) : null}

                        {elem.published === true ? (
                          <div className="form-switch-main">
                            <div
                              class={"form-checkss form-switch form-switch3"}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckChecked"
                                defaultChecked
                              />
                            </div>
                          </div>
                        ) : null}
                      </td>

                      <td>
                        <div className="prod-edit-de-flex-btn">
                          <button>
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>

                          <button>
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    
                    
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="ord-pagination-flex-bx">
          <span>Showing 1-8 of 30</span>

          <div className="ord-page-btn-flex">
            <button className="ord-page-prev-btn">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            <div className="ord-page-num pageactive">1</div>

            <div className="ord-page-num">2</div>

            <div className="ord-page-num">3</div>
            <div className="ord-page-num">4</div>

            <button className="ord-page-prev-btn ord-page-next-btn">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
        </div>
        {/* 
        <div>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">Select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <button onClick={handleAddOption}>Add Option</button>
      <div>
        {selectedOptions.map(option => (
          <span key={option} className="selected-option">
            {option}
            <button onClick={() => handleRemoveOption(option)}>X</button>
          </span>
        ))}
      </div>
    </div> */}
      </section>

    { addProd ? <AddProduct onClickClose={() => setAddProd(false)} /> : null}

      {/* <AddProduct /> */}
    </>
  );
};

export default VendorProduct;
