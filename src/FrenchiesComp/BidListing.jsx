import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import BidDeal from "./BidDeal";
import BidDealTwo from "./BidDealTwo";
import { useQuery } from "@tanstack/react-query";
import { franchiseMyListingsFetch } from "../apis/franchise/bid";
import { DateTime } from "luxon";

const BidListing = ({ onClickDetPage, onClickCreatePost }) => {
  const [unit, setUnit] = useState("Unit");
  const [showOption, setShowOption] = useState(false);
  const [isCloseView, setIsCloseView] = useState(false);
  const [isBidder, setIsBidder] = useState(false);
  const [isDeal, setIsDeal] = useState(false);
  const [isDealTwo, setIsDealTwo] = useState(false);

  const Options = ["KG", "PCS"];

  const handleOptionChange = (selectOption) => {
    setUnit(selectOption);
    setShowOption(false);
  };
  const { data: bids, refetch } = useQuery({
    queryKey: ["franchiseMyListingsFetch"],
    queryFn: () => franchiseMyListingsFetch(),
  });
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
                    category,
                    companyAddress,
                    condition,
                    description,
                    franchiseId,
                    gstRate,
                    id,
                    includeGst,
                    includeTransport,
                    postStatus,
                    pricePerUnit,
                    productName,
                    productQuantity,
                    productimages,
                    subCategory,
                    unit,
                    addedOn,
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
                    );
                  }
                )
              : null}
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
            </div>
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
                  <tr>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <div className="left-bidr-bx">
                        <div className="bidr-img">
                          <img src="/images/customImg/cmp-4.jpg" alt="" />
                        </div>
                        <div className="bidr-info">
                          <h6>Extra Frames</h6>
                          <span>4 hr ago</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>₹10/kg</span>
                    </td>
                    <td>
                      <span>200 (kg)</span>
                    </td>
                    <td>
                      <div className="tick-delt-btn">
                        <button
                          onClick={() => setIsDeal(true)}
                          title="Accept"
                          className="accept-btn"
                        >
                          <i class="fa-regular fa-square-check"></i>
                        </button>
                        <button
                          onClick={() => setIsCloseView(true)}
                          title="Not Accepted"
                          className="accept-btn accept-btn2"
                        >
                          <i class="fa-regular fa-circle-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>2</span>
                    </td>
                    <td>
                      <div className="left-bidr-bx">
                        <div className="bidr-img">
                          <img src="/images/customImg/cmp-2.jpg" alt="" />
                        </div>
                        <div className="bidr-info">
                          <h6>Digital Dezire</h6>
                          <span>3 days ago</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>₹20/kg</span>
                    </td>
                    <td>
                      <span>300 (kg)</span>
                    </td>
                    <td>
                      <div className="tick-delt-btn">
                        <button
                          onClick={() => setIsDeal(true)}
                          title="Accept"
                          className="accept-btn"
                        >
                          <i class="fa-regular fa-square-check"></i>
                        </button>
                        <button
                          onClick={() => setIsCloseView(true)}
                          title="Not Accepted"
                          className="accept-btn accept-btn2"
                        >
                          <i class="fa-regular fa-circle-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>3</span>
                    </td>
                    <td>
                      <div className="left-bidr-bx">
                        <div className="bidr-img">
                          <img src="/images/customImg/cmp-3.jpg" alt="" />
                        </div>
                        <div className="bidr-info">
                          <h6> Brand Orbitor</h6>
                          <span>6 hr ago</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>₹10/kg</span>
                    </td>
                    <td>
                      <span>200 (kg)</span>
                    </td>
                    <td>
                      <div className="tick-delt-btn">
                        <button
                          onClick={() => setIsDeal(true)}
                          title="Accept"
                          className="accept-btn"
                        >
                          <i class="fa-regular fa-square-check"></i>
                        </button>
                        <button
                          onClick={() => setIsCloseView(true)}
                          title="Not Accepted"
                          className="accept-btn accept-btn2"
                        >
                          <i class="fa-regular fa-circle-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <div className="left-bidr-bx">
                        <div className="bidr-img">
                          <img src="/images/customImg/cmp-4.jpg" alt="" />
                        </div>
                        <div className="bidr-info">
                          <h6>Extra Frames</h6>
                          <span>4 hr ago</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span>₹10/kg</span>
                    </td>
                    <td>
                      <span>200 (kg)</span>
                    </td>
                    <td>
                      <div className="tick-delt-btn">
                        <button
                          onClick={() => setIsDeal(true)}
                          title="Accept"
                          className="accept-btn"
                        >
                          <i class="fa-regular fa-square-check"></i>
                        </button>
                        <button
                          onClick={() => setIsCloseView(true)}
                          title="Not Accepted"
                          className="accept-btn accept-btn2"
                        >
                          <i class="fa-regular fa-circle-xmark"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

      <BidDeal isDeal={isDeal} onClickCloseDeal={() => setIsDeal(false)} />
      <BidDealTwo
        isDealTwo={isDealTwo}
        onClickCloseDeal={() => setIsDealTwo(false)}
      />
    </>
  );
};

export default BidListing;
