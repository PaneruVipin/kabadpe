import React, { useEffect, useRef, useState } from "react";

const Upgradepopupbx = ({ onclickCloseUpgradeBx, upgradeTrue }) => {
  const [price, setPrice] = useState(0);
  const [areaSelct, setAreaSelct] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handlePriceFunc = (value) => {
    setPrice(value === price ? 0 : value);
    setTotalPrice(0);
  };

  const handleAreaChange = (area) => {
    if (areaSelct.includes(area)) {
      setAreaSelct(areaSelct.filter((item) => item !== area));
    } else {
      setAreaSelct([...areaSelct, area]);
    }
  };

  const handleTotalPrice = () => {
    const areaPriceSum = areaSelct.reduce((acc, curr) => acc + curr, 0);

    setTotalPrice(price + areaPriceSum);
    setPrice(0);
    setAreaSelct([]);
  };

  const upgradeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (upgradeRef.current && !upgradeRef.current.contains(event.target)) {
        onclickCloseUpgradeBx();
      }
    };

    if (upgradeTrue) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [upgradeTrue]);

  return (
    <>
      <section className="upgrade-popup-comp">
        <div className="upgrade-popup-bx" ref={upgradeRef}>
          <h6 className="">No. of waste collector</h6>

          <div className="waste-colect-price-btn-flex-bx">
            <button
              className={
                price === 5 ? "w-price-btn pricebtnactive" : "w-price-btn"
              }
              onClick={() => handlePriceFunc(5)}
            >
              5
            </button>

            <button
              className={
                price === 10 ? "w-price-btn pricebtnactive" : "w-price-btn"
              }
              onClick={() => handlePriceFunc(10)}
            >
              10
            </button>

            <button
              className={
                price === 15 ? "w-price-btn pricebtnactive" : "w-price-btn"
              }
              onClick={() => handlePriceFunc(15)}
            >
              15
            </button>

            <button
              className={
                price === 20 ? "w-price-btn pricebtnactive" : "w-price-btn"
              }
              onClick={() => handlePriceFunc(20)}
            >
              20
            </button>

            <button
              className={
                price === 25 ? "w-price-btn pricebtnactive" : "w-price-btn"
              }
              onClick={() => handlePriceFunc(25)}
            >
              25
            </button>
          </div>

          <h6 className="mt-4">Number of Areas</h6>

          <div className="waste-colct-area-btn-flex-bx">
            <button
              className={
                areaSelct.includes(10) ? "area-btn areaactive" : "area-btn"
              }
              onClick={() => handleAreaChange(10)}
            >
              Laxmi Nagar
            </button>

            <button
              className={
                areaSelct.includes(20) ? "area-btn areaactive" : "area-btn"
              }
              onClick={() => handleAreaChange(20)}
            >
              Kundan Nagar
            </button>

            <button
              className={
                areaSelct.includes(30) ? "area-btn areaactive" : "area-btn"
              }
              onClick={() => handleAreaChange(30)}
            >
              Gandhi Nagar
            </button>

            <button
              className={
                areaSelct.includes(40) ? "area-btn areaactive" : "area-btn"
              }
              onClick={() => handleAreaChange(40)}
            >
              Pratap Nagar
            </button>

            <button
              className={
                areaSelct.includes(50) ? "area-btn areaactive" : "area-btn"
              }
              onClick={() => handleAreaChange(50)}
            >
              Azad Nagar
            </button>
          </div>

          <button onClick={handleTotalPrice} className="total_price mt-4">
            Total Price
          </button>

          <div className="blank-bx-flex">
            <div className="blank-bx">
              <h6> {price} </h6>
            </div>

            <div className="blank-bx">
              <h6> {areaSelct.reduce((acc, curr) => acc + curr, 0)} </h6>
            </div>

            <div className="equality">=</div>

            <div className="total-price blank-bx">
              <h6> {totalPrice} </h6>
            </div>
          </div>

          <button className="pay-now-btn total_price mt-4">Pay Now</button>

          <div onClick={onclickCloseUpgradeBx} className="close-upgrade-bx-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upgradepopupbx;
