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
import MainFooter from "../HomeComponent/MainFooter";

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

  const [calculatorData, setCalculatorData] = useState([]);
  const [totlWaste, setTotlWaste] = useState(false);
  const [products, setProducts] = useState(RateListProd);
  const [prodSug, setProdSug] = useState([
    {
      id: 1,
      img1: "/images/customImg/product-1.webp",
      img2: "images/customImg/product-2.webp",
    },

    {
      id: 2,
      img1: "/images/customImg/product-3.webp",
      img2: "images/customImg/product-1.webp",
    },

    {
      id: 3,
      img1: "/images/customImg/gall-img-4.jpg",
      img2: "images/customImg/gall-img-2.jpg",
    },

    {
      id: 4,
      img1: "/images/customImg/product-4.png",
      img2: "images/customImg/product-5.png",
    },

    {
      id: 5,
      img1: "/images/customImg/product-10.png",
      img2: "images/customImg/product-9.png",
    },

    {
      id: 6,
      img1: "/images/customImg/product-7.jpg",
      img2: "images/customImg/product-8.png",
    },

    {
      id: 7,
      img1: "/images/customImg/product-2.webp",
      img2: "images/customImg/product-5.png",
    },

    {
      id: 8,
      img1: "/images/customImg/product-3.webp",
      img2: "images/customImg/product-6.png",
    },

    {
      id: 9,
      img1: "/images/customImg/product-4.png",
      img2: "images/customImg/product-5.png",
    },

    {
      id: 10,
      img1: "/images/customImg/product-10.png",
      img2: "images/customImg/product-9.png",
    },
    {
      id: 11,
      img1: "/images/customImg/product-7.jpg",
      img2: "images/customImg/product-8.png",
    },

    {
      id: 12,
      img1: "/images/customImg/product-2.webp",
      img2: "images/customImg/product-5.png",
    },
  ]);
  const [visibleProd, setVisibleProd] = useState(8);
  const [selectedOption , setSelectedOption] = useState(null);
  const [selectedOptionOne , setSelectedOptionOne] = useState(null);
  const [selectedOptionTwo , setSelectedOptionTwo] = useState(null);
  const [selectedOptionThree , setSelectedOptionThree] = useState(null);


 

  const [optionOne , setOptionOne] = useState([

    'Kabadpe' , 'Brand Orbitor' , 'Extra Frames'

    
  ])

  const [optionTwo , setOptionTwo] = useState([

    'State1' , 'State2' , 'State3'

    
  ])


  const [optionThree , setOptionThree] = useState([

    'City1' , 'City2' , 'City3'

    
  ])
  
  const handleCheckboxChange = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, checked: !product.checked } : product
    );
    setProducts(updatedProducts);

    if (updatedProducts.find((product) => product.id === id).checked) {
      setCalculatorData([
        ...calculatorData,
        updatedProducts.find((product) => product.id === id),
      ]);
    } else {
      setCalculatorData(calculatorData.filter((product) => product.id !== id));
    }
  };

  const handleWeightChange = (id, weight) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, weight: weight } : product
    );
    setProducts(updatedProducts);

    const updatedCalculatorData = calculatorData.map((product) =>
      product.id === id ? { ...product, weight: weight } : product
    );
    setCalculatorData(updatedCalculatorData);
  };

  const loadMore = () => {
    setVisibleProd(visibleProd + 4);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleOptionClickOne = (option) => {
    setSelectedOptionOne(option);
  };

  const handleOptionClickTwo = (option) => {
    setSelectedOptionTwo(option);
  };

  const handleOptionClickThree = (option) => {
    setSelectedOptionThree(option);
  };

  return (
    <>
      <AboutBanner data={data} />

      <section className="ratelist-comp">
        <div className="ratelist-container">
          <div className="rate-list-filt-main">
            <div className="rate-list-filter-bx">
            

              <button className="sorting-btn sorting-btn1">
              {selectedOptionOne || 'Choose Your Seller'}
                
                <i class="fa-solid fa-angle-down"></i>
                <div className="dropdwn-tab-box dropdwn-tab-box1">

                  {optionOne.map((curData , indx) => {
                    return (
                      <>
                  <button className="prod-tab-btn"  key={indx}
                  onClick={() => handleOptionClickOne(curData)}
                  > {curData} </button>

                      </>
                    )
                  })}
                  
                
                </div>
              </button>

              <button className="sorting-btn sorting-btn1">
              {selectedOptionTwo || 'Choose  State'}
                
                <i class="fa-solid fa-angle-down"></i>
                <div className="dropdwn-tab-box dropdwn-tab-box1">

                  {optionTwo.map((curData , indx) => {
                    return (
                      <>
                  <button className="prod-tab-btn"  key={indx}
                  onClick={() => handleOptionClickTwo(curData)}
                  > {curData} </button>

                      </>
                    )
                  })}
                  
                
                </div>
              </button>

              <button className="sorting-btn sorting-btn1">
              {selectedOptionThree || 'Choose  City'}
                
                <i class="fa-solid fa-angle-down"></i>
                <div className="dropdwn-tab-box dropdwn-tab-box1">

                  {optionThree.map((curData , indx) => {
                    return (
                      <>
                  <button className="prod-tab-btn"  key={indx}
                  onClick={() => handleOptionClickThree(curData)}
                  > {curData} </button>

                      </>
                    )
                  })}
                  
                
                </div>
              </button>

             

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
          </div>
          <div
            className={"ratelist-list-grid-main ratelist-list-grid-main-active"}
          >
            <div className="main-ratelist-product">
            <div className="ratelist-prod-bx">
              <h6>Paper</h6>
            <div className={"rate-list-grid-left rate-list-grid-left-active"}>
              {products.map((curElem, indx) => {
                return (
                  <>
                    { curElem.category === 'paper' ? <div className="rate-list-prod-bx">
                      <div className="ratelist-img">
                        <img src={curElem.img} alt="" />
                      </div>
                      <div className="ratelist-info">
                        <h6> {curElem.title} </h6>
                        <span> {curElem.text} </span>
                        <div className="check">
                          <p> {curElem.minitext} </p>
                          <div className="tick-bx">
                            <input
                              type="checkbox"
                              checked={curElem.checked}
                              onChange={() => handleCheckboxChange(curElem.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>  : null}
                  </>
                );
              })}
            </div>
            </div>

            <div className="ratelist-prod-bx">
              <h6>Plastic</h6>
            <div className={"rate-list-grid-left rate-list-grid-left-active"}>
              {products.map((curElem, indx) => {
                return (
                  <>
                    { curElem.category === 'plastic' ? <div className="rate-list-prod-bx">
                      <div className="ratelist-img">
                        <img src={curElem.img} alt="" />
                      </div>
                      <div className="ratelist-info">
                        <h6> {curElem.title} </h6>
                        <span> {curElem.text} </span>
                        <div className="check">
                          <p> {curElem.minitext} </p>
                          <div className="tick-bx">
                            <input
                              type="checkbox"
                              checked={curElem.checked}
                              onChange={() => handleCheckboxChange(curElem.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>  : null}
                  </>
                );
              })}
            </div>
            </div>


            <div className="ratelist-prod-bx">
              <h6>Metal</h6>
            <div className={"rate-list-grid-left rate-list-grid-left-active"}>
              {products.map((curElem, indx) => {
                return (
                  <>
                    { curElem.category === 'iron' ? <div className="rate-list-prod-bx">
                      <div className="ratelist-img">
                        <img src={curElem.img} alt="" />
                      </div>
                      <div className="ratelist-info">
                        <h6> {curElem.title} </h6>
                        <span> {curElem.text} </span>
                        <div className="check">
                          <p> {curElem.minitext} </p>
                          <div className="tick-bx">
                            <input
                              type="checkbox"
                              checked={curElem.checked}
                              onChange={() => handleCheckboxChange(curElem.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>  : null}
                  </>
                );
              })}
            </div>
            </div>

            <div className="ratelist-prod-bx">
              <h6>Ewaste</h6>
            <div className={"rate-list-grid-left rate-list-grid-left-active"}>
              {products.map((curElem, indx) => {
                return (
                  <>
                    { curElem.category === 'ewaste' ? <div className="rate-list-prod-bx">
                      <div className="ratelist-img">
                        <img src={curElem.img} alt="" />
                      </div>
                      <div className="ratelist-info">
                        <h6> {curElem.title} </h6>
                        <span> {curElem.text} </span>
                        <div className="check">
                          <p> {curElem.minitext} </p>
                          <div className="tick-bx">
                            <input
                              type="checkbox"
                              checked={curElem.checked}
                              onChange={() => handleCheckboxChange(curElem.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>  : null}
                  </>
                );
              })}
            </div>
            </div>


            <div className="ratelist-prod-bx">
              <h6>Vehicle</h6>
            <div className={"rate-list-grid-left rate-list-grid-left-active"}>
              {products.map((curElem, indx) => {
                return (
                  <>
                    { curElem.category === 'vehicle' ? <div className="rate-list-prod-bx">
                      <div className="ratelist-img">
                        <img src={curElem.img} alt="" />
                      </div>
                      <div className="ratelist-info">
                        <h6> {curElem.title} </h6>
                        <span> {curElem.text} </span>
                        <div className="check">
                          <p> {curElem.minitext} </p>
                          <div className="tick-bx">
                            <input
                              type="checkbox"
                              checked={curElem.checked}
                              onChange={() => handleCheckboxChange(curElem.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>  : null}
                  </>
                );
              })}
            </div>
            </div>

            <div className="ratelist-prod-bx">
              <h6>Others</h6>
            <div className={"rate-list-grid-left rate-list-grid-left-active"}>
              {products.map((curElem, indx) => {
                return (
                  <>
                    { curElem.category === 'other' ? <div className="rate-list-prod-bx">
                      <div className="ratelist-img">
                        <img src={curElem.img} alt="" />
                      </div>
                      <div className="ratelist-info">
                        <h6> {curElem.title} </h6>
                        <span> {curElem.text} </span>
                        <div className="check">
                          <p> {curElem.minitext} </p>
                          <div className="tick-bx">
                            <input
                              type="checkbox"
                              checked={curElem.checked}
                              onChange={() => handleCheckboxChange(curElem.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>  : null}
                  </>
                );
              })}
            </div>
            </div>

            </div>
            
            <div className="right-waste-calculator-main">
              {totlWaste ? (
                <div className="totl-value-main">
                  <h6>Total Value : ₹ 3000 </h6>

                  <h5>You Saved</h5>

                  <div className="waste-saved-main-list-bx">
                    <div className="waste-saved-bx">
                      <span>200 (kgs) </span>
                      <p>Plastic</p>
                    </div>
                    <div className="waste-saved-bx">
                      <span>40 </span>
                      <p>Plants</p>
                    </div>
                    <div className="waste-saved-bx">
                      <span>40 (ltrs) </span>
                      <p>Water</p>
                    </div>
                    <div className="waste-saved-bx">
                      <span>40 (kgs) </span>
                      <p>Carbon</p>
                    </div>
                  </div>
                </div>
              ) : null}

              {totlWaste === false ? (
                <div className="waste-calcult-bx">
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
                          {calculatorData.map((product) => (
                            <tr>
                              <td>
                                <span> {product.title}</span>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  value={product.weight}
                                  onChange={(e) =>
                                    handleWeightChange(
                                      product.id,
                                      e.target.value
                                    )
                                  }
                                  placeholder="Enter weight (kg)"
                                />
                              </td>
                              <td>
                                <span>{product.price} </span>
                              </td>
                              <td>
                                <span> {product.price * product.weight} </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="rate-subtotl-bx">
                    <h6>
                      SubTotal : <span>3,000</span>
                    </h6>
                  </div>
                </div>
              ) : null}
              {totlWaste === false ? (
                <button
                  onClick={() => setTotlWaste(true)}
                  className="rate-list-calcult-btn calcult-btn23"
                >
                  Calculate
                </button>
              ) : null}
              {totlWaste ? (
                <button
                  onClick={() => setTotlWaste(true)}
                  className="rate-list-calcult-btn calcult-btn32 mt-4"
                >
                  Schedule Pickup
                </button>
              ) : null}
            </div>
          </div>

          <div className="prod-sugetin-main">
            <div className="prod-sug-head">
              <span>Our Products</span>
              <h3>Product Suggestions</h3>
            </div>

            <div className="prod-sug-grid-bx">
              {prodSug.slice(0, visibleProd).map((curelem, indx) => {
                return (
                  <>
                    <div className="prod-sug-card-bx" key={indx}>
                      <div className="prod-sug-img-bx">
                        <img src={curelem.img1} alt="" />
                        <img src={curelem.img2} alt="" />
                      </div>

                      <div className="prod-sugg-info">
                        <span>armani</span>
                        <h6>Ample Lamp Basket</h6>

                        <div className="rating-bx">
                          <div className="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                          </div>
                          <span>90%</span>
                        </div>
                        <div className="price-buy-now-btn-bx">
                          <h6>₹500</h6>

                          <a href="#">Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <button onClick={() => loadMore()} className="load-btn">
              Load More

            </button>
            
          </div>
        </div>
      </section>

      <MainFooter />
    </>
  );
};

export default Ratelistcomp;
