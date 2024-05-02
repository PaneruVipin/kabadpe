import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BidListing = ({ onClickDetPage, onClickCreatePost }) => {
  const [unit, setUnit] = useState("Unit");
  const [showOption, setShowOption] = useState(false);

  const Options = ["KG", "PCS"];

  const handleOptionChange = (selectOption) => {
    setUnit(selectOption);
    setShowOption(false);
  };
  return (
    <>
      <section className="bid-product-listing-comp">
        <div className="common-container">
          <div className="top-bid-header-flex">
            <div className="left-bid-header-bx">
              <NavLink to="/">Home</NavLink>
              <span>My Bid Listing</span>
            </div>

            <div className="right-unit-flex-bx">

                <div className="bid-filt-btn-flex">

                    <button className="filt-bid-btn bidactive">
                        All
                    </button>
                    <button className="filt-bid-btn">
                        On Going
                    </button>
                    <button className="filt-bid-btn">
                        Complete
                    </button>
                    
                </div>
                
              <button onClick={onClickCreatePost} className="create-post-btn">
                Create Post
              </button>
            </div>
          </div>

          <div className="bid-list-main">
            <div className="bid-list-bx">
              <div className="left-bid-li-bx">
                <div className="bid-li-img">
                  <img src="/images/customImg/about-img-3.png" alt="" />
                </div>
                <div className="bid-li-info">
                  <div className="bid-det-top-flex">
                    <span className="bx-span">On Going</span>
                    <span className="bid-date">JANUARY 04. 2023</span>
                  </div>
                  <h5>PVC Pipe Regrind</h5>
             
                </div>
              </div>

              <div className="start-latest-bidder-grid-bx">
                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>₹50,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Latest Bid</h6>
                      <span>₹55,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>10</span>
                    </div>
                  </div>

                  
                  <div className="view-bid-btn-flex">
                    <button className="bid-btn bid-btn32 view-bid-btn">
                      View Bids
                    </button>
                  </div>

                  <div onClick={onClickCreatePost} className="edit-bid-btn">
                  <i class="fa-regular fa-pen-to-square"></i>
                  </div>
            </div>

            <div className="bid-list-bx">
              <div className="left-bid-li-bx">
                <div className="bid-li-img">
                  <img src="/images/customImg/about-img-2.jpg" alt="" />
                </div>
                <div className="bid-li-info">
                  <div className="bid-det-top-flex">
                    <span className="bx-span">On Going</span>
                    <span className="bid-date">JANUARY 04. 2023</span>
                  </div>
                  <h5>Copper scrap</h5>
                
                </div>
              </div>

              <div className="start-latest-bidder-grid-bx">
                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>₹50,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Latest Bid</h6>
                      <span>₹55,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>10</span>
                    </div>
                  </div>

                  <div className="view-bid-btn-flex">
                    <button className="bid-btn bid-btn32 view-bid-btn">
                      View Bids
                    </button>
                  </div>

              <div onClick={onClickCreatePost} className="edit-bid-btn">
                  <i class="fa-regular fa-pen-to-square"></i>
                  </div>
            </div>

            <div className="bid-list-bx">
              <div className="left-bid-li-bx">
                <div className="bid-li-img">
                  <img src="/images/customImg/about-img-5.png" alt="" />
                </div>
                <div className="bid-li-info">
                  <div className="bid-det-top-flex">
                    <span className="bx-span bx-span-green">Complete</span>
                    <span className="bid-date">JANUARY 04. 2023</span>
                  </div>
                  <h5>Silicon Paper</h5>
                 
                </div>
              </div>

              
              <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx-green">
                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>₹50,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Latest Bid</h6>
                      <span>₹55,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>10</span>
                    </div>
                  </div>

                  <div className="view-bid-btn-flex">
                    <button className="bid-btn bid-btn32 view-bid-btn-green  view-bid-btn">
                      View Bids
                    </button>
                  </div>
              
            </div>

            <div className="bid-list-bx">
              <div className="left-bid-li-bx">
                <div className="bid-li-img">
                  <img src="/images/customImg/about-img-4.png" alt="" />
                </div>
                <div className="bid-li-info">
                  <div className="bid-det-top-flex">
                    <span className="bx-span bx-span-green">Complete</span>
                    <span className="bid-date">JANUARY 04. 2023</span>
                  </div>
                  <h5>Ms Square pipes</h5>
                
                </div>
              </div>

              <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx-green">
                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>₹50,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Latest Bid</h6>
                      <span>₹55,000</span>
                    </div>

                    <div className="bidder-bx">
                      <h6>Starting Bid</h6>
                      <span>10</span>
                    </div>
                  </div>

                  <div className="view-bid-btn-flex">
                    <button className="bid-btn bid-btn32 view-bid-btn-green  view-bid-btn">
                      View Bids
                    </button>
                  </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BidListing;
