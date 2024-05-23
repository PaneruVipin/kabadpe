import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BidDeal from "./BidDeal";
import BidDealTwo from "./BidDealTwo";
import { useQuery } from "@tanstack/react-query";
import {
  franchiseBidOffersFetch,
  franchiseMyListingsFetch,
} from "../apis/franchise/bid";
import { DateTime } from "luxon";
import RejectBidOffer from "./RejectBidOffer";

const BidListing = ({ onClickDetPage, onClickCreatePost }) => {
  const [unit, setUnit] = useState("Unit");
  const [showOption, setShowOption] = useState(false);
  const [isCloseView, setIsCloseView] = useState(false);
  const [isBidder, setIsBidder] = useState(false);
  const [isDeal, setIsDeal] = useState(false);
  const [isDealTwo, setIsDealTwo] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [selectedOffer, setSelectedOffer] = useState({});
  const Options = ["KG", "PCS"];

  const handleOptionChange = (selectOption) => {
    setUnit(selectOption);
    setShowOption(false);
  };
  const { data: bids, refetch } = useQuery({
    queryKey: ["franchiseMyListingsFetch"],
    queryFn: () => franchiseMyListingsFetch(),
  });

  const { data: offers, refetch: refetchOffers } = useQuery({
    queryKey: ["franchiseBidOffersFetch"],
    queryFn: () => franchiseBidOffersFetch({ id: selectedData?.id }),
  });
  useEffect(() => {
    refetchOffers();
  }, [selectedData]);
  return (
    <>
      <section className="bid-product-listing-comp">
        <div className="common-container">
          <div className="top-bid-header-flex">
            <div className="left-bid-header-bx">
              <NavLink to="/">Home</NavLink>
              <span>My Bid Listing </span>
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
                    postStatus,
                    productName,
                    productimages,
                    addedOn,
                    ...rest
                  }) => {
                    const img =
                      JSON.parse(productimages || "[]")?.[0] ||
                      "/images/noImg.png";
                    return (
                      <div className="bid-list-bx">
                        <div className="left-bid-li-bx">
                          <div className="bid-li-img">
                            <img src={img} alt="" />
                          </div>
                          <div className="bid-li-info">
                            <div className="bid-det-top-flex">
                              <span className="bx-span bx-span-green">
                                {postStatus}
                              </span>
                              <span className="bid-date">
                                {DateTime.fromISO(addedOn, {
                                  zone: "utc",
                                })
                                  .setZone("Asia/Kolkata")
                                  .toFormat("ccc dd LLL yyyy")}
                              </span>
                            </div>
                            <h5>{productName}</h5>
                          </div>
                        </div>

                        {/* { <div className="start-latest-bidder-grid-bx start-latest-bidder-grid-bx-green">
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
                        </div>} */}

                        <div className="view-bid-btn-flex">
                          <button
                            onClick={() => {
                              setIsBidder(true);
                              setSelectedData({
                                postStatus,
                                productName,
                                productimages,
                                addedOn,
                                ...rest,
                              });
                            }}
                            className="bid-btn bid-btn32 view-bid-btn"
                          >
                            View Bids
                          </button>
                          {/* <button
                            onClick={() => setIsDealTwo(true)}
                            className="bid-btn bid-btn32 view-bid-btn-green  view-bid-btn"
                          >
                            View Bids
                          </button> */}
                        </div>
                      </div>
                    );
                  }
                )
              : null}
            {/* <div className="bid-list-bx">
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
                <button
                  onClick={() => setIsBidder(true)}
                  className="bid-btn bid-btn32 view-bid-btn"
                >
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
                <button
                  onClick={() => setIsBidder(true)}
                  className="bid-btn bid-btn32 view-bid-btn"
                >
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
                <button
                  onClick={() => setIsDealTwo(true)}
                  className="bid-btn bid-btn32 view-bid-btn-green  view-bid-btn"
                >
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
                <button
                  onClick={() => setIsDealTwo(true)}
                  className="bid-btn bid-btn32 view-bid-btn-green  view-bid-btn"
                >
                  View Bids
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {isBidder && (
        <div onClick={() => setIsBidder(false)} className="view-bid-main">
          <div onClick={(e) => e.stopPropagation()} className="view-bid-bx">
            <h6>Bidders</h6>

            <div className="all-user-table stock-tble mnge-waste-table mt-3">
              <table>
                <thead>
                  <tr>
                    <th>SNO</th>
                    <th>Profile</th>
                    <th>Offer Price</th>
                    <th>Offer Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {!offers?.error ? (
                    offers?.map(
                      (
                        {
                          id,
                          Franchise,
                          addedOn,
                          pricePerUnit,
                          productQuantity,
                          bidStatus,
                          ...rest
                        },
                        i
                      ) => {
                        return (
                          <tr key={id}>
                            <td>
                              <span>{i + 1}</span>
                            </td>
                            <td>
                              <div className="left-bidr-bx">
                                <div className="bidr-img">
                                  <img
                                    src="/images/customImg/cmp-4.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="bidr-info">
                                  <h6>{Franchise?.companyName}</h6>
                                  <span>
                                    {DateTime.fromISO(addedOn, {
                                      zone: "utc",
                                    })
                                      .setZone("Asia/Kolkata")
                                      .toFormat("ccc dd LLL yyyy")}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>
                                ₹{pricePerUnit}/{selectedData?.unit}
                              </span>
                            </td>
                            <td>
                              <span>
                                {productQuantity} ({selectedData?.unit})
                              </span>
                            </td>
                            <td>
                              {bidStatus != "accept" ? (
                                <div className="tick-delt-btn">
                                  <button
                                    onClick={() => {
                                      setIsDeal(true);
                                      setSelectedOffer({
                                        id,
                                        Franchise,
                                        addedOn,
                                        pricePerUnit,
                                        productQuantity,
                                        ...rest,
                                      });
                                    }}
                                    title="Accept"
                                    className="accept-btn"
                                  >
                                    <i class="fa-regular fa-square-check"></i>
                                  </button>
                                  <button
                                    onClick={() => {
                                      setIsCloseView(true);
                                      setSelectedOffer({
                                        id,
                                        Franchise,
                                        addedOn,
                                        pricePerUnit,
                                        productQuantity,
                                        ...rest,
                                      });
                                    }}
                                    title="Not Accepted"
                                    className="accept-btn accept-btn2"
                                  >
                                    <i class="fa-regular fa-circle-xmark"></i>
                                  </button>
                                </div>
                              ) : (
                                <div>Accepted</div>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    )
                  ) : (
                    <div>No Bid Offers</div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {isCloseView && (
        <RejectBidOffer
          refetch={() => {
            refetch();
            refetchOffers();
          }}
          data={selectedOffer}
          closePodpup={() => setIsCloseView(false)}
        />
      )}

      <BidDeal
        refetch={() => {
          refetch();
          refetchOffers();
        }}
        isDeal={isDeal}
        data={{ bid: selectedData, offer: selectedOffer }}
        onClickCloseDeal={() => setIsDeal(false)}
      />
      <BidDealTwo
        isDealTwo={isDealTwo}
        onClickCloseDeal={() => setIsDealTwo(false)}
      />
    </>
  );
};

export default BidListing;
