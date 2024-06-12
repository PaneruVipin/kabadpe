import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BidProductData from "../FrenchiesComp/BidProductData";
import { useQuery } from "@tanstack/react-query";
import { franchiseAllListingsFetch } from "../apis/franchise/bid";
import { catageories } from "../lib/kabadCatageories";
import Howitwork from "../FrenchiesComp/Howitwork";

const KabadShopComp = ({ onClickDetPage, onClickCreatePost }) => {
  const [unit, setUnit] = useState("Unit");
  const [showOption, setShowOption] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState([]);
  const Options = ["KG", "PCS"];
  const [howItWrk , setHowItWrk] = useState(false);


  const handleOptionChange = (selectOption) => {
    setUnit(selectOption);
    setShowOption(false);
  };
  const handleFilterChange = (e) => {
    const { name, value } = e?.target;
    let newFilters = filters?.filter(({ id }) => id != name);
    if (value == "all") {
      setFilters(newFilters);
      return;
    }
    switch (name) {
      case "category":
        const filter = {
          id: "category",
          fn: ({ category }) => category == value,
        };
        newFilters.push(filter);
        break;
      default:
        break;
    }
    console.log("tis is filters", filters);
    setFilters(newFilters);
  };
  return (
    <>
      <section className="bid-product-listing-comp bid-product-listing-comp2">
        <div className="common-container">
          <div className="top-bid-header-flex">
            <div className="left-bid-header-bx">
              <NavLink to="/">Home</NavLink>
              <span>Products</span>
            </div>

            <div className="right-unit-flex-bx">
              <div className="right-all-prod-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="off"
                  placeholder="Search..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                <select
                  onChange={handleFilterChange}
                  name="category"
                  id="product"
                >
                  <option value="all">All</option>
                  {catageories?.map(({ id, name }) => {
                    return (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>

              <button onClick={onClickCreatePost} className="create-post-btn">
                Create Post
              </button>

              <button onClick={() => setHowItWrk(true)} className="create-post-btn create-post-btn1">
                How it work
              </button>
            </div>
          </div>

          <BidProductData
            onClickRedirect={onClickDetPage}
            productSearchQuery={searchQuery}
            filters={filters}
            // bidData={BidProdData}
          />
        </div>
      </section>
{ howItWrk ? <Howitwork onClickClose={() => setHowItWrk(false)} /> : ""}

    </>
  );
};

export default KabadShopComp;
