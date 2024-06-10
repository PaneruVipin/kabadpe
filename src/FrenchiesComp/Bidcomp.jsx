import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BidProductData from "./BidProductData";
import { catageories } from "../lib/kabadCatageories";
import Howitwork from "./Howitwork";

const Bidcomp = ({ onClickDetPage, onClickCreatePost }) => {
  const [unit, setUnit] = useState("Unit");
  const [showOption, setShowOption] = useState(false);
  const [howItWrk , setHowItWrk] = useState(false);

  const Options = ["KG", "PCS"];

  const handleOptionChange = (selectOption) => {
    setUnit(selectOption);
    setShowOption(false);
  };

  const BidProdData = [
    {
      id: 1,
      bidImg: "/images/customImg/serv-img-1.jpg",
      ProdName: "Bid Product One",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 2,
      bidImg: "/images/customImg/serv-img-2.jpg",
      ProdName: "Bid Product Two",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 3,
      bidImg: "/images/customImg/serv-img-3.jpg",
      ProdName: "Bid Product Three",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 4,
      bidImg: "/images/customImg/serv-img-4.jpg",
      ProdName: "Bid Product Four",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 5,
      bidImg: "/images/customImg/instagram-1.jpg",
      ProdName: "Bid Product Five",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 6,
      bidImg: "/images/customImg/instagram-2.jpg",
      ProdName: "Bid Product Six",
      prodPrice: 699.0,
      pertext: "/piece",
    },
    {
      id: 7,
      bidImg: "/images/customImg/instagram-3.jpg",
      ProdName: "Bid Product Seven",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 8,
      bidImg: "/images/customImg/instagram-4.jpg",
      ProdName: "Bid Product Eight",
      prodPrice: 699.0,
      pertext: "/piece",
    },
    {
      id: 9,
      bidImg: "/images/customImg/instagram-5.jpg",
      ProdName: "Bid Product Nine",
      prodPrice: 699.0,
      pertext: "/piece",
    },
    {
      id: 10,
      bidImg: "/images/customImg/instagram-6.jpg",
      ProdName: "Bid Product Ten",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 11,
      bidImg: "/images/customImg/gall-img-4.jpg",
      ProdName: "Bid Product Eleven",
      prodPrice: 699.0,
      pertext: "/Kg",
    },
    {
      id: 12,
      bidImg: "/images/customImg/gall-img-3.jpg",
      ProdName: "Bid Product Twelve",
      prodPrice: 699.0,
      pertext: "/piece",
    },
  ];

  return (
    <>
      <section className="bid-product-listing-comp">
        <div className="common-container">
          <div className="top-bid-header-flex">
            <div className="left-bid-header-bx">
              <NavLink to="/">Home</NavLink>
              <span>Products</span>
            </div>

            <div className="right-unit-flex-bx">
              <div className="all-prod-sel-filt-box all-prod-sel-filt-box2">
                <select name="product" id="product">
                  <option value="" hidden>
                    Choose Category
                  </option>
                  {catageories?.map(({ id, name }) => {
                    return (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button onClick={onClickCreatePost} className="create-post-btn create-post-btn1">
                Create Post
              </button>
              <button onClick={() => setHowItWrk(true)} className="create-post-btn create-post-btn1">
                How it work
              </button>
            </div>
          </div>

          <BidProductData
            onClickRedirect={onClickDetPage}
            bidData={BidProdData}
          />


          
        </div>
      </section>

{ howItWrk ? <Howitwork onClickClose={() => setHowItWrk(false)} /> : ""}


    </>
  );
};

export default Bidcomp;
