import React, { useState } from "react";
import "../style/AdminProduct.css";
import CouponTable from "./CouponTable";
import CouponPopup from "./CouponPopup";

const DiscountCoupon = () => {
  const [index, setIndex] = useState(1);

  const indexFunc = () => {
    if (index !== 5) {
      setIndex(index + 1);
    } else {
      setIndex(5);
    }
  };

  const indexFuncPrev = () => {
    if (index !== 1) {
      setIndex(index - 1);
    } else {
      setIndex(1);
    }
  };

  return (
    <>
      <section className="all-prod-admin-comp">
        <div className="all-prod-filter-flex-box-two all-coupon-filter-flex">
          <div className="left-all-prod-filt-sel-flex-box">
            <button className="prod-filt-btn prod-filt-btn2 crt-copn-btn">
              Create Coupon
            </button>

            <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
              <select name="product" id="product">
                <option value="product">Choose Discount Types</option>
                <option value="product">Percentage Discounts</option>
                <option value="product">Fixed Product Discount</option>
                <option value="product">Fixed Product Category Discount</option>
                <option value="product">Fixed Company Discount</option>
                <option value="product">Fixed Basket Discount</option>
              </select>
            </div>

            <button className="prod-filt-btn prod-filt-btn2">Filter</button>
          </div>

          <div className="right-all-prod-paginat-flex-box flex-column align-items-md-end">
            <div className="right-prod-search-flex-bx ">
              <div className="right-all-prod-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="off"
                  placeholder="Search..."
                />
              </div>

              <button className="search-prod-btn">Search Products</button>
            </div>

            <div className="pagination">
              <div className="items-num">
                <p>446 Items</p>
              </div>

              {/* <div className="duble-arrow-btn page-filt-btn">
                    <i className="fa-solid fa-angles-left"></i>
                    </div> */}
              <div
                onClick={indexFuncPrev}
                className="sing-arrow-btn page-filt-btn"
              >
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className="page-num-box">{index}</div>

              <p>
                of <span>5</span>
              </p>

              {/* <div className="duble-arrow-btn page-filt-btn page-filt-btn3">
                    <i className="fa-solid fa-angles-right"></i>
                    </div> */}

              <div onClick={indexFunc} className="sing-arrow-btn page-filt-btn">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CouponTable />
      <CouponPopup />
    </>
  );
};

export default DiscountCoupon;
