import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/Ratelist.css";
import "../style/MyAccount.css";
import { Form, Formik } from "formik";
import {
  userCalculateKabadRate,
  userRateListFetch,
  userSchedulePickup,
} from "../apis/kbadpeUser/schedule";
import { validationSchedulePickup } from "../validators/kabadPeUser/schedule";
import { userLocationByQuery } from "../apis/location";
import { useQuery } from "@tanstack/react-query";
import { Header } from "antd/es/layout/layout";
import AboutBanner from "../AboutComp/AboutBanner";
// import { AdminWasteProdData } from "./AdminWasteProdSlideData";
import { RateListProd } from "./RatelistProd";

const Ratelistcomp = () => {
  const [listBox, setListBox] = useState(false);
  const [mainPrice, setmainPrice] = useState(false);
  const [apiErrors, setApiErrors] = useState({ shcedulPickup: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  const initialSchedulePickupValues = {
    formatedAddress: "",
    appointmentContactNumber: "",
    appointmentPersonName: "",
    appointmentTimeSlot: "",
    appointmentDate: null,
    pincode: "",
    serviceType: "",
  };
  const hideFunc = () => {
    setListBox(true);
  };

  const ShcedulPickuFunc = () => {
    setmainPrice(true);
  };
  const handlePickupSubmit = async (data) => {
    setApiErrors({
      ...apiErrors,
      shcedulPickup: "",
    });
    const res = await userSchedulePickup({
      ...data,
    });
    if (res.error) {
      setApiErrors({
        ...apiErrors,
        shcedulPickup: res.message,
      });
      return;
    }
    setApiErrors({
      ...apiErrors,
      shcedulPickup: "",
    });
  };

  const { isPending, data: kabadItems } = useQuery({
    queryKey: ["rateList"],
    queryFn: () => userRateListFetch(),
  });
  const calculateRate = async (data) => {
    const totalPrice = await userCalculateKabadRate(data);
    if (!totalPrice.error) setCalculatedPrice(totalPrice);
    hideFunc();
  };
  const data = {
    title: "Rate List",
    text: "Ratelist",
  };

  // -----------------------------------------

  const [showInput, setShowInput] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(RateListProd);
  const [subtotal, setSubtotal] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCalculatorClick = () => {
    setShowInput(true);
  };

  const handleCheckboxChange = (id) => {
    const updatedProducts = [...products];
    const productIndex = updatedProducts.findIndex(
      (product) => product.id === id
    );
    updatedProducts[productIndex].checked =
      !updatedProducts[productIndex].checked;
    setProducts(updatedProducts);
    const selectedProduct = updatedProducts[productIndex];
    setSelectedProduct(selectedProduct);
    if (selectedProduct.checked) {
      setSelectedProducts([...selectedProducts, selectedProduct]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((product) => product.id !== id)
      );
    }
  };

  const handleWeightChange = (e) => {
    const weight = parseFloat(e.target.value);
    const updatedProduct = { ...selectedProduct, weight };
    setSelectedProduct(updatedProduct);

    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);

    const updatedSelectedProducts = selectedProducts.map((product) =>
      product.id === selectedProduct.id ? updatedProduct : product
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const calculateSubtotal = () => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.weight * product.price;
    });
    setSubtotal(total);
  };
  return (
    <>
      <AboutBanner data={data} />

      <section className="ratelist-comp">
        <div className="ratelist-container">
          <div className="rate-list-filt-main">
            <div className="rate-list-filter-bx">
              <div className="ratelist-sel-bx">
                <select name="Area" id="state">
                  <option value="">state</option>
                  <option value="">state2</option>
                  <option value="">state3</option>
                  <option value="">state4</option>
                </select>
              </div>

              <div className="ratelist-sel-bx">
                <select name="city" id="city">
                  <option value="">city</option>
                  <option value="">city2</option>
                  <option value="">city3</option>
                  <option value="">city4</option>
                </select>
              </div>

              <div className="ratelist-sel-bx">
                <input
                  type="text"
                  name="pin"
                  id="pin"
                  placeholder="Enter your pin"
                />
                <div className="search-btn rate-search-icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowInput(!showInput)}
              className="rate-list-calcult-btn"
            >
              Waste Calculator
            </button>
          </div>
          <div
            className={
              showInput === true
                ? "ratelist-list-grid-main ratelist-list-grid-main-active"
                : "ratelist-list-grid-main"
            }
          >
            <div
              className={
                showInput === true
                  ? "rate-list-grid-left rate-list-grid-left-active"
                  : "rate-list-grid-left"
              }
            >
              {products.map((curElem, indx) => {
                return (
                  <>
                    <div className="rate-list-prod-bx">
                      <div className="ratelist-img">
                        <img src={curElem.img} alt="" />
                      </div>
                      <div className="ratelist-info">
                        <h6> {curElem.title} </h6>
                        <div className="check">
                          <p> ₹15/kg </p>
                          <div className="tick-bx">
                            {showInput  === true ?   <input
                                type="checkbox"
                                checked={curElem.checked}
                                onChange={() =>
                                  handleCheckboxChange(curElem.id)
                                }
                              /> : null
                            }
                            {curElem.checked &&  showInput  === true &&  (
                              <input
                                className="weight-inpt"
                                type="number"
                                value={curElem.weight}
                                onChange={handleWeightChange}
                                placeholder="Enter weight"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
{ showInput &&
            <div className="right-waste-calculator-main">
              <h4>Waste Calculator</h4>
              <div className="product-list-box">
                <div className=" added-prod-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Weight (kg) </th>
                        <th> Rate/kg </th>
                        <th> Value </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedProducts.map((product) => (
                        <tr>
                            <td>
                            <span > {product.title}</span>
                            </td>
                            <td><span >{product.weight} </span></td>
                            <td><span >{product.price} </span></td>
                            <td><span> {product.weight * product.price} </span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* <div className="added-prod-bx" key={product.id}>
                  // <h6 className="added-prod-title"> {product.title}</h6>
                  //{" "}
                  <div className="prod-weight">
                    // <h5 className="added-prod-value">{product.weight} </h5>
                    // <h5 className="added-prod-value">{product.price} </h5>
                    //{" "}
                  </div>
                  //{" "}
                  <h5 className="added-prod-value">
                    {product.weight * product.price}{" "}
                  </h5>
                  //{" "}
                </div> */}
              </div>

              <div className="rate-subtotl-bx">

                <h6>SubTotal : <span>3,000</span></h6>
                
              </div>
              
            </div>}

            <div></div>
          </div>

       
        </div>
      </section>
    </>
  );
};

export default Ratelistcomp;
