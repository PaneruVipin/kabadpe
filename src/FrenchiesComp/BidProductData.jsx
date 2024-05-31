import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink } from "react-router-dom";
import { franchiseAllListingsFetch } from "../apis/franchise/bid";
import { filteredData, search } from "../lib/array";

const BidProductData = ({
  bidData,
  onClickRedirect,
  productSearchQuery = "",
  filters = [],
}) => {
  const { data: bids, refetch } = useQuery({
    queryKey: ["franchiseAllListingsFetch"],
    queryFn: () => franchiseAllListingsFetch({}),
  });

  return (
    <>
      <div className="bid-prod-grid-bx">
        {!bids?.error
          ? search(filteredData(bids, filters), productSearchQuery)?.map(
              ({
                id,
                pricePerUnit,
                productName,
                productimages,
                unit,
                ...rest
              }) => {
                const img =
                  JSON.parse(productimages || "[]")?.[0] || "/images/noImg.png";
                return (
                  <div
                    onClick={() => {
                      onClickRedirect({
                        id,
                        pricePerUnit,
                        productName,
                        productimages,
                        unit,
                        ...rest,
                      });
                    }}
                    key={id}
                    className="bid-prod-bx"
                  >
                    <div className="bid-prod-img">
                      <img src={img} alt="" />
                    </div>
                    <div className="bid-prod-info">
                      <h6> {productName} </h6>
                      <div className="prod-price-per-text-flex">
                        <span> ₹{pricePerUnit} </span>
                        <span>/ </span>
                        <span className="pert"> {unit} </span>
                      </div>
                    </div>

                    <button
                      onClick={onClickRedirect}
                      className="bid-btn bid-btn32"
                    >
                      Details
                    </button>
                  </div>
                );
              }
            )
          : null}
        {/* {bidData.map((curData, indx) => {
          return (
            <>
              <div
                onClick={onClickRedirect}
                key={curData.id}
                className="bid-prod-bx"
              >
                <div className="bid-prod-img">
                  <img src={curData.bidImg} alt="" />
                </div>
                <div className="bid-prod-info">
                  <h6> {curData.ProdName} </h6>
                  <div className="prod-price-per-text-flex">
                    <span> ₹{curData.prodPrice} </span>
                    <span className="pert"> {curData.pertext} </span>
                  </div>
                </div>

                <button onClick={onClickRedirect} className="bid-btn bid-btn32">
                  Details
                </button>
              </div>
            </>
          );
        })} */}
      </div>
    </>
  );
};

export default BidProductData;
