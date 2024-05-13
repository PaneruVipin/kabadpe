import React, { useEffect, useState } from "react";
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
import { catageories } from "../lib/kabadCatageories";
import { adminkabadProductFetch } from "../apis/admins/kabadProducts";
import { adminAriaFetch } from "../apis/admins/arias";
import { filteredData } from "../lib/array";
import AppoinmentPopup from "../HomeComponent/AppoinmentPopup";
import {
  kabadpeFranchisesFetch,
  kabadpeRatelistFetch,
} from "../apis/kbadpeUser/ratelist";

const Ratelistcomp = ({ setUserForm }) => {
  const data = {
    title: "Rate List",
    text: "Ratelist",
  };
  const [totlWaste, setTotlWaste] = useState(false);
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

  const [selectedRates, setSelectedRates] = useState([]);
  const [states, setStates] = useState([]);
  const [cites, setCites] = useState([]);
  const [selection, setSelection] = useState();
  const [rateList, setRateList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [appoinmentForm, setAppoinmentForm] = useState(false);
  const [selectedOptionOne, seSelectedOptionOne] = useState("");
  const [optionOne, setOptionOne] = useState([
    "Kabadpe",
    "Brand Orbitor",
    "Extra Frames",
  ]);
  const handleCheckboxChange =
    ({ id, ...data }) =>
    () => {
      let newSelectedRates = [];
      const exist = selectedRates?.find((e) => e?.id == id);
      if (exist) {
        newSelectedRates = selectedRates?.filter((e) => e?.id != id);
      } else {
        newSelectedRates = [...selectedRates, { id, ...data }];
      }
      setSelectedRates(newSelectedRates);
    };

  const handleWeightChange = (id) => (e) => {
    const weight = e.target.value;
    const newRates = selectedRates.map((e) => {
      if (e?.id == id) {
        return { ...e, weight };
      } else {
        return e;
      }
    });
    setSelectedRates(newRates);
  };

  const loadMore = () => {
    setVisibleProd(visibleProd + 4);
  };

  const { data: rateListData, refetch } = useQuery({
    queryKey: ["userRateListFetch"],
    queryFn: () => kabadpeRatelistFetch(),
  });
  const { data: franchises } = useQuery({
    queryKey: ["kabadpefranchisesfetch"],
    queryFn: () => kabadpeFranchisesFetch(),
  });
  const { data: arias } = useQuery({
    queryKey: ["ratelistArias"],
    queryFn: () => adminAriaFetch(),
  });
  const getStates = (res) =>
    [...new Set(res?.map((e, i) => e?.state))].map((name, i) => ({
      id: i,
      name,
    }));
  const getCities = (state, res) => {
    return [
      ...new Set(res?.filter((e) => e?.state == state)?.map((e, i) => e?.city)),
    ].map((name, i) => ({ id: i, name }));
  };
  const totalRate = filteredData(selectedRates, filters)?.reduce((a, b) => {
    let rate = b?.retailPrice;
    if (selectedOptionOne?.id) {
      const row = b?.FranchiseRates?.find(
        ({ franchiseId }) => franchiseId == selectedOptionOne?.id
      );
      if (row?.retailPrice) {
        rate = row?.retailPrice;
      }
    }
    const weight = +b?.weight ? +b?.weight : 0;
    const value = +rate * weight;
    return a + value;
  }, 0);
  const enviournmentSaving = filteredData(selectedRates, filters)?.reduce(
    (a, b) => {
      const weight = +b?.weight ? +b?.weight : 0;
      const co2Offset = (+b?.co2Offset || 0) * weight;
      const waterSaved = (+b?.waterSaved || 0) * weight;
      const electrictySaved = (+b?.electrictySaved || 0) * weight;
      const oilSaved = (+b?.oilSaved || 0) * weight;
      return {
        co2: a?.co2 + co2Offset,
        water: a?.water + waterSaved,
        oil: a?.oil + oilSaved,
        electricty: a?.electricty + electrictySaved,
      };
    },
    { co2: 0, water: 0, oil: 0, electricty: 0 }
  );
  const handleFilter = (name, value) => () => {
    setSelection({ ...selection, [name]: value });
    if (name == "state") {
      const cities = getCities(value, arias);
      setCites(cities);
      setSelection((selection) => ({ ...selection, city: cities?.[0]?.name }));
    }
  };
  useEffect(() => {
    if (arias?.error || !arias || !arias?.length) {
      return;
    }
    const state = getStates(arias);
    setStates(state);
    const cities = getCities(state?.[1]?.name, arias);
    setCites(cities);
    setSelection({
      ...selection,
      state: state?.[1]?.name,
      city: cities?.[0]?.name,
    });
  }, [arias]);
  useEffect(() => {
    if (rateListData?.error || !rateListData || !rateListData?.length) {
      return;
    }
    setRateList(rateListData);
  }, [rateListData]);
  useEffect(() => {
    if (selection) {
      const filter = {
        id: "area",
        fn: (e) => {
          return e?.state == selection?.state && e?.city == selection?.city;
        },
      };
      setFilters([filter]);
      const newRateList = filteredData(rateListData, [filter]);
      setRateList(newRateList);
    }
  }, [selection]);
  return (
    <>
      <AppoinmentPopup
        setUserForm={setUserForm}
        appoinmentForm={appoinmentForm}
        setAppoinmentForm={setAppoinmentForm}
      />
      <AboutBanner data={data} />
      <section className="ratelist-comp">
        <div className="ratelist-container">
          <div className="rate-list-filt-main">
            <div className="rate-list-filter-bx">
              <button className="sorting-btn sorting-btn1">
                {selection?.state || states?.[1]?.name}

                <i class="fa-solid fa-angle-down"></i>
                <div className="dropdwn-tab-box dropdwn-tab-box1">
                  {states.map(({ id, name }, indx) => {
                    return (
                      <>
                        <button
                          className="prod-tab-btn"
                          key={id}
                          onClick={handleFilter("state", name)}
                        >
                          {name}
                        </button>
                      </>
                    );
                  })}
                </div>
              </button>

              <button className="sorting-btn sorting-btn1">
                {selection?.city || cites?.[0]?.name}

                <i class="fa-solid fa-angle-down"></i>
                <div className="dropdwn-tab-box dropdwn-tab-box1">
                  {cites.map(({ id, name }, indx) => {
                    return (
                      <>
                        <button
                          className="prod-tab-btn"
                          key={id}
                          onClick={handleFilter("city", name)}
                        >
                          {name}
                        </button>
                      </>
                    );
                  })}
                </div>
              </button>

              <button className="sorting-btn sorting-btn1">
                {selectedOptionOne?.companyName || "KabadPe"}

                <i class="fa-solid fa-angle-down"></i>
                <div className="dropdwn-tab-box dropdwn-tab-box1">
                  {!franchises?.error && franchises
                    ? [{ companyName: "KabadPe" }, ...franchises]?.map(
                        ({ companyName, id }) => {
                          return (
                            <button
                              className="prod-tab-btn"
                              key={id}
                              onClick={() =>
                                seSelectedOptionOne({ companyName, id })
                              }
                            >
                              {" "}
                              {companyName}{" "}
                            </button>
                          );
                        }
                      )
                    : null}
                </div>
              </button>
            </div>
          </div>
          <div
            className={"ratelist-list-grid-main ratelist-list-grid-main-active"}
          >
            <div className="main-ratelist-product">
              {!rateList?.error && rateList?.length
                ? catageories?.map(({ id, name }) => {
                    const list = rateList?.filter(
                      ({ category }) =>
                        category == name ||
                        (name == "Others" ? !category : false)
                    );
                    return list?.length ? (
                      <div key={id} className="ratelist-prod-bx">
                        <h6>
                          {name?.replace(/\b\w/g, function (char) {
                            return char.toUpperCase();
                          })}
                        </h6>
                        <div
                          className={
                            "rate-list-grid-left rate-list-grid-left-active"
                          }
                        >
                          {list?.map(
                            ({
                              id,
                              productImage,
                              productName,
                              bulkPrice,
                              retailPrice,
                              FranchiseRates,
                              unit,
                              ...rest
                            }) => {
                              let rate = retailPrice;
                              if (selectedOptionOne?.id) {
                                const row = FranchiseRates?.find(
                                  ({ franchiseId }) =>
                                    franchiseId == selectedOptionOne?.id
                                );
                                if (row?.retailPrice) {
                                  rate = row?.retailPrice;
                                }
                              }
                              return (
                                <div key={id} className="rate-list-prod-bx">
                                  <div className="ratelist-img">
                                    <img src={productImage} alt="" />
                                  </div>
                                  <div className="ratelist-info">
                                    <h6>
                                      {" "}
                                      {productName?.replace(
                                        /\b\w/g,
                                        function (char) {
                                          return char.toUpperCase();
                                        }
                                      )}{" "}
                                    </h6>
                                    {/* <span> {"curElem.text"} </span> */}
                                    <div className="check">
                                      <p> {`${rate} (${unit})`} </p>
                                      <div className="tick-bx">
                                        <input
                                          type="checkbox"
                                          name={id}
                                          checked={selectedRates?.some(
                                            (e) => e?.id == id
                                          )}
                                          onChange={handleCheckboxChange({
                                            id,
                                            productImage,
                                            productName,
                                            bulkPrice,
                                            retailPrice,
                                            FranchiseRates,
                                            unit,
                                            ...rest,
                                          })}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    ) : null;
                  })
                : null}
            </div>

            <div className="right-waste-calculator-main">
              {totlWaste ? (
                <div className="totl-value-main">
                  <h6>Total Value : ₹ {totalRate} </h6>

                  <h5>You Saved</h5>

                  <div className="waste-saved-main-list-bx">
                    <div className="waste-saved-bx">
                      <span>{enviournmentSaving?.co2} Kg</span>
                      <p>
                        {" "}
                        <img src="/images/customImg/co2-cloud.png" alt="" /> CO2 Offset
                      </p>
                    </div>
                    <div className="waste-saved-bx">
                      <span>{enviournmentSaving?.water} Litres</span>
                      <p>
                        <i class="fa-solid fa-droplet water"></i>Water
                      </p>
                    </div>
                    <div className="waste-saved-bx">
                      <span>{enviournmentSaving?.electricty} KWh</span>
                      <p>
                        <i class="fa-solid fa-bolt electric"></i>Electricity
                      </p>
                    </div>
                    <div className="waste-saved-bx">
                      <span>{enviournmentSaving?.oil} Lakhs Litres </span>
                      <p>
                        <i class="fa-solid fa-bottle-droplet oil"></i>Oil
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {totlWaste === false ? (
                <div className="waste-calcult-bx">
                  <h4>Climate Calculator</h4>
                  <div className="product-list-box">
                    <div className=" added-prod-table">
                      <table>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th> Rate</th>
                            <th> Value </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData(selectedRates, filters)?.map(
                            ({
                              id,
                              productImage,
                              productName,
                              bulkPrice,
                              retailPrice,
                              FranchiseRates,
                              unit,
                              weight,
                            }) => {
                              let rate = retailPrice;
                              if (selectedOptionOne?.id) {
                                const row = FranchiseRates?.find(
                                  ({ franchiseId }) =>
                                    franchiseId == selectedOptionOne?.id
                                );
                                if (row?.retailPrice) {
                                  rate = row?.retailPrice;
                                }
                              }
                              return (
                                <tr>
                                  <td>
                                    <span> {productName}</span>
                                  </td>
                                  <td>
                                    <input
                                      type="number"
                                      value={weight}
                                      onChange={handleWeightChange(id)}
                                      placeholder={`Enter Quantity`}
                                    />
                                    <span>{unit}</span>
                                  </td>
                                  <td>
                                    <span>
                                      {rate}/{unit}{" "}
                                    </span>
                                  </td>
                                  <td>
                                    <span> {rate * weight || 0} </span>
                                  </td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="rate-subtotl-bx">
                    <h6>
                      SubTotal : <span>₹{totalRate}</span>
                    </h6>
                  </div>
                </div>
              ) : null}
              <div style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => setTotlWaste(!totlWaste)}
                  className="rate-list-calcult-btn calcult-btn32 mt-4 "
                >
                  Calculate
                </button>
                {totlWaste ? (
                  <button
                    onClick={() => setAppoinmentForm(true)}
                    className="rate-list-calcult-btn calcult-btn32 mt-4"
                  >
                    Schedule Pickup
                  </button>
                ) : null}
              </div>
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
