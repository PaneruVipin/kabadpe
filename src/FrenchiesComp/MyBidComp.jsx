import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BidDeal from "./BidDeal";
import BidDealTwo from "./BidDealTwo";
import QuateOfferPopup from "./QuateOfferPopup";
import QuateOfferPopupTwo from "./QuateOfferPopupTwo";
import QuateOfferPopupThree from "./QuateOfferPopupThree";
import { useQuery } from "@tanstack/react-query";
import { franchiseMyBidOfferFetch } from "../apis/franchise/bid";
import { DateTime } from "luxon";

const MyBidComp = ({ onClickCreatePost }) => {
  const [unit, setUnit] = useState("Unit");
  const [showOption, setShowOption] = useState(false);
  const [isCloseView, setIsCloseView] = useState(false);
  const [isBidder, setIsBidder] = useState(false);
  const [isDeal, setIsDeal] = useState(false);
  const [isDealTwo, setIsDealTwo] = useState(false);
  const [bidPopup, setBidPopup] = useState(false);
  const [bidPopupTwo, setBidPopupTwo] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const Options = ["KG", "PCS"];

  const handleOptionChange = (selectOption) => {
    setUnit(selectOption);
    setShowOption(false);
  };
  const { data: bids, refetch } = useQuery({
    queryKey: ["franchiseMyBidOfferFetch"],
    queryFn: () => franchiseMyBidOfferFetch(),
  });
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
                <button className="filt-bid-btn bidactive">All</button>
                <button className="filt-bid-btn">On Going</button>
                <button className="filt-bid-btn">Complete</button>
              </div>

              <button onClick={onClickCreatePost} className="create-post-btn">
                Create Post
              </button>
            </div>
          </div>

          <div className="bid-list-main">
            {!bids?.error
              ? bids?.map(
                  ({
                    id,
                    bidStatus,
                    BidPost,
                    productimages,
                    addedOn,
                    ...rest
                  }) => {
                    const img =
                      JSON.parse(productimages || "[]")?.[0] ||
                      "/images/noImg.png";
                    return (
                      <div key={id} className="bid-list-bx">
                        <div className="left-bid-li-bx">
                          <div className="bid-li-img">
                            <img src={img} alt="" />
                          </div>
                          <div className="bid-li-info">
                            <div className="bid-det-top-flex">
                              <span className="bx-span">{bidStatus}</span>
                              <span className="bid-date">
                                {DateTime.fromISO(addedOn, {
                                  zone: "utc",
                                })
                                  .setZone("Asia/Kolkata")
                                  .toFormat("ccc dd LLL yyyy")}
                              </span>
                            </div>
                            <h5>{BidPost?.productName}</h5>
                            <h6>Seller: {BidPost?.Franchise?.companyName}</h6>
                          </div>
                        </div>

                        {/* { <div className="start-latest-bidder-grid-bx">
                          <div className="bidder-bx">
                            <h6>Sellers Bid</h6>
                            <span>₹50,000</span>
                          </div>

                          <div className="bidder-bx">
                            <h6>Your Bid</h6>
                            <span>₹55,000</span>
                          </div>

                          <div className="bidder-bx">
                            <h6>Total Bid</h6>
                            <span>10</span>
                          </div>
                        </div>} */}

                        <div className="view-bid-btn-flex">
                          <button
                            onClick={() => {
                              setSelectedData({
                                id,
                                bidStatus,
                                BidPost,
                                productimages,
                                addedOn,
                                ...rest,
                              });
                              setBidPopupTwo(true);
                            }}
                            className="bid-btn bid-btn32 view-bid-btn"
                          >
                            Current Status
                          </button>
                        </div>
                      </div>
                    );
                  }
                )
              : null}
            {/* { <>
              <div className="bid-list-bx">
                <div className="left-bid-li-bx">
                  <div className="bid-li-img">
                    <img src="/images/customImg/news-3.jpg" alt="" />
                  </div>
                  <div className="bid-li-info">
                    <div className="bid-det-top-flex">
                      <span className="bx-span bx-span-orangee">Rejected</span>
                      <span className="bid-date">JANUARY 04. 2023</span>
                    </div>
                    <h5>Ms Square pipes</h5>
                    <h6>Seller: Extra Frames</h6>
                  </div>
                </div>

                <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx-green">
                  <div className="bidder-bx">
                    <h6>Sellers Bid</h6>
                    <span>₹50,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Your Bid</h6>
                    <span>₹55,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Total Bid</h6>
                    <span>10</span>
                  </div>
                </div>

                <div className="view-bid-btn-flex">
                  <button
                    onClick={() => setBidPopup(true)}
                    className="bid-btn bid-btn32 view-bid-btn-orange  view-bid-btn"
                  >
                    Apply again
                  </button>
                </div>
              </div>
              <div className="bid-list-bx">
                <div className="left-bid-li-bx">
                  <div className="bid-li-img">
                    <img src="/images/customImg/about-img-5.png" alt="" />
                  </div>
                  <div className="bid-li-info">
                    <div className="bid-det-top-flex">
                      <span className="bx-span bx-span-orangee">Rejected</span>
                      <span className="bid-date">JANUARY 04. 2023</span>
                    </div>
                    <h5>Ms Square pipes</h5>
                    <h6>Seller: Extra Frames</h6>
                  </div>
                </div>

                <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx-green">
                  <div className="bidder-bx">
                    <h6>Sellers Bid</h6>
                    <span>₹50,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Your Bid</h6>
                    <span>₹55,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Total Bid</h6>
                    <span>10</span>
                  </div>
                </div>

                <div className="view-bid-btn-flex">
                  <button
                    onClick={() => setBidPopup(true)}
                    className="bid-btn bid-btn32 view-bid-btn-orange  view-bid-btn"
                  >
                    Apply again
                  </button>
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
                    <h6>Seller: Extra Frames</h6>
                  </div>
                </div>

                <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx-green">
                  <div className="bidder-bx">
                    <h6>Sellers Bid</h6>
                    <span>₹50,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Your Bid</h6>
                    <span>₹55,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Total Bid</h6>
                    <span>10</span>
                  </div>
                </div>

                <div className="view-bid-btn-flex">
                  <button
                    onClick={() => setIsDealTwo(true)}
                    className="bid-btn bid-btn32 view-bid-btn-green  view-bid-btn"
                  >
                    View
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
                    <h6>Seller: Extra Frames</h6>
                  </div>
                </div>

                <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx-green">
                  <div className="bidder-bx">
                    <h6>Sellers Bid</h6>
                    <span>₹50,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Your Bid</h6>
                    <span>₹55,000</span>
                  </div>

                  <div className="bidder-bx">
                    <h6>Total Bid</h6>
                    <span>10</span>
                  </div>
                </div>

                <div className="view-bid-btn-flex">
                  <button
                    onClick={() => setIsDealTwo(true)}
                    className="bid-btn bid-btn32 view-bid-btn-green  view-bid-btn"
                  >
                    View
                  </button>
                </div>
              </div>
            </>} */}
          </div>
        </div>
      </section>
      {bidPopup && (
        <QuateOfferPopupTwo onClickClose={() => setBidPopup(false)} />
      )}

      {bidPopupTwo && (
        <QuateOfferPopupThree data={selectedData} onClickClose={() => setBidPopupTwo(false)} />
      )}

      {isCloseView && (
        <div
          onClick={() => setIsCloseView(false)}
          className="view-bid-main close-message-main"
        >
          <div onClick={(e) => e.stopPropagation()} className="close-mesge-bx">
            <span>
              {" "}
              onClick={() => setIsCloseView(true)}
              This bidder's current offer is not accepted, the Bidder is open to
              offer again. Confirm You are not accepting this offer
            </span>

            <button
              onClick={() => setIsCloseView(false)}
              className="confirm-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      )}

      {/* <BidDeal isDeal={isDeal} onClickCloseDeal={() => setIsDeal(false)} /> */}
      <BidDealTwo
        isDealTwo={isDealTwo}
        onClickCloseDeal={() => setIsDealTwo(false)}
      />
    </>
  );
};

export default MyBidComp;
