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
import Bidders from "./Bidders";
import { filteredData } from "../lib/array";
import TransportStatus from "./tranportStatus/TransportStatus";
import Howitwork from "./Howitwork";
import CreateBidPost from "./CreateBidPost";

const BidListing = ({ onClickDetPage, onClickCreatePost }) => {
  const [unit, setUnit] = useState("Unit");
  const [showOption, setShowOption] = useState(false);
  const [isCloseView, setIsCloseView] = useState(false);
  const [isBidder, setIsBidder] = useState(false);
  const [isDeal, setIsDeal] = useState(false);
  const [isDealTwo, setIsDealTwo] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [selectedOffer, setSelectedOffer] = useState({});
  const [filters, setFilters] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");
  const [howItWrk, setHowItWrk] = useState(false);
  const [updateBid, setUpdateBid] = useState(false);
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
  const handleFilterClick = (e) => {
    const { name } = e.target;
    setCurrentFilter(name);
    let filters = [];
    switch (name) {
      case "all":
        break;
      case "going":
        filters = [
          {
            id: "status",
            fn: (bid) => {
              const acceptedOffer = bid?.Bids?.find(
                ({ bidStatus }) => bidStatus == "accept"
              );
              return bid?.postStatus == "close" && acceptedOffer;
            },
          },
        ];
        break;
      case "active":
        filters = [
          {
            id: "status",
            fn: (bid) => {
              return bid?.postStatus == "active";
            },
          },
        ];
        break;
      case "completed":
      default:
        break;
    }
    setFilters(filters);
  };
  useEffect(() => {
    refetchOffers();
  }, [selectedData]);
  const filterButtons = [
    { name: "all", Label: "All" },
    { name: "active", Label: "Active" },
    { name: "going", Label: "On Going" },
    { name: "complete", Label: "Completed" },
  ];
  const order = ["active", "close"];
  return !updateBid ? (
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
                {filterButtons?.map(({ name, Label }) => (
                  <button
                    onClick={handleFilterClick}
                    name={name}
                    className={`filt-bid-btn  ${
                      name == currentFilter ? "bidactive" : ""
                    }`}
                  >
                    {Label}
                  </button>
                ))}
              </div>

              <button
                onClick={onClickCreatePost}
                className="create-post-btn create-post-btn1"
              >
                Create Post
              </button>
              <button
                onClick={() => setHowItWrk(true)}
                className="create-post-btn create-post-btn1"
              >
                How it work
              </button>
            </div>
          </div>

          <div className="bid-list-main">
            {!bids?.error
              ? filteredData(bids, filters)
                  ?.sort((a, b) => {
                    return (
                      order.indexOf(a?.postStatus) -
                      order.indexOf(b?.postStatus)
                    );
                  })
                  ?.map(
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
                      const acceptedOffer = rest?.Bids?.find(
                        ({ bidStatus }) => bidStatus == "accept"
                      );
                      let remining;
                      if (acceptedOffer) {
                        remining =
                          +rest?.productQuantity -
                          +acceptedOffer?.productQuantity;
                      }
                      return (
                        <div key={rest?.id} className="bid-list-bx">
                          <div className="left-bid-li-bx">
                            <div className="bid-li-img">
                              <img src={img} alt="" />
                            </div>
                            <div className="bid-li-info">
                              <div className="bid-det-top-flex">
                                <span
                                  className={
                                    postStatus == "close"
                                      ? "bx-span bx-span-green"
                                      : "bx-span"
                                  }
                                >
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
                              <p
                                style={{ marginTop: "5px" }}
                                className="bid-date"
                              >
                                {rest?.productQuantity + rest?.unit}
                              </p>
                              <p
                                style={{ marginTop: "10px" }}
                                className="bid-date"
                              >
                                ₹{rest?.pricePerUnit}/{rest?.unit}
                              </p>
                            </div>
                          </div>
                          <div>
                            {/* {remining ? (
                              <div className=" ">
                                After this deal, {remining + rest?.unit} is
                                remaining
                              </div>
                            ) : null} */}
                            {acceptedOffer ? (
                              acceptedOffer?.paymentStatus == "receive" ? (
                                <div>
                                  We have received payment from the bidder.{" "}
                                  <br />
                                  Please proceed with the transport.
                                </div>
                              ) : acceptedOffer?.paymentStatus == "paid" ? (
                                <div
                                  style={{
                                    background: "green",
                                    color: "white",
                                    textAlign: "center",
                                    width: "200px",
                                    padding: "2px",
                                    margin: "10px 0px",
                                  }}
                                >
                                  Payment Completed
                                </div>
                              ) : (
                                <div>
                                  Bidder's payment is in process.
                                  <br /> Once received, you can proceed with the
                                  transport
                                </div>
                              )
                            ) : null}
                            {acceptedOffer ? (
                              <TransportStatus
                                currentStatus={acceptedOffer?.transportStatus}
                                data={acceptedOffer}
                                refetch={() => {
                                  refetch();
                                  refetchOffers();
                                }}
                                disabled={
                                  acceptedOffer?.paymentStatus != "receive"
                                }
                              />
                            ) : null}
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
                              style={{ borderColor:"red", color: "red" }}
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
                              {/* {rest?.Bids?.length} */}
                            </button>
                            <div
                              onClick={() => {
                                setUpdateBid(true);
                                setSelectedData({
                                  postStatus,
                                  productName,
                                  productimages,
                                  addedOn,
                                  ...rest,
                                });
                              }}
                              className="edit-bid-btn"
                            >
                              <i class="fa-regular fa-pen-to-square"></i>
                            </div>
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
            </div> */}

            {/* <div className="bid-list-bx">
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

      {howItWrk ? <Howitwork onClickClose={() => setHowItWrk(false)} /> : ""}

      {isBidder && (
        <Bidders
          onClickClose={() => setIsBidder(false)}
          setIsDeal={setIsDeal}
          setSelectedOffer={setSelectedOffer}
          offers={offers}
          setIsCloseView={setIsCloseView}
          selectedData={selectedData}
        />
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

      {isDeal ? (
        <BidDeal
          refetch={() => {
            refetch();
            refetchOffers();
          }}
          data={{ bid: selectedData, offer: selectedOffer }}
          onClickCloseDeal={() => setIsDeal(false)}
        />
      ) : null}
      <BidDealTwo
        isDealTwo={isDealTwo}
        onClickCloseDeal={() => setIsDealTwo(false)}
      />
    </>
  ) : (
    <CreateBidPost
      type="edit"
      onClose={() => setUpdateBid(false)}
      data={selectedData}
      refetch={() => {
        refetch();
        refetchOffers();
      }}
    />
  );
};

export default BidListing;
