import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import QuateOfferPopup from "./QuateOfferPopup";

const BidProductDetail = ({ data, onClickDetPage }) => {
  const [selectImg, setSelectImg] = useState("");
  const [bidPopup, setBidPopup] = useState(false);
  const [ProdImg, setProdImg] = useState([]);

  const handleSelectImg = (selectedImg) => {
    setSelectImg(selectedImg);
  };
  useEffect(() => {
    setProdImg(JSON.parse(data?.productimages || "[]"));
  }, [data]);
  return (
    <>
      <section className="bid-product-detail-comp">
        <div className="common-container">
          <div className="top-bid-header-flex">
            <div className="left-bid-header-bx">
              <NavLink to="/">Home</NavLink>
              <span>Product Detail</span>
            </div>
          </div>

          <div className="bid-prod-det-grid-bx">
            <div className="left-bid-prod-img-bx">
              <div className="bid-prod-big-img">
                <img
                  src={selectImg || ProdImg?.[0] || "/images/noImg.png"}
                  alt="prod-img"
                />
              </div>

              <div className="prod-sm-img-grid-bx">
                {ProdImg?.map((curImg) => {
                  return (
                    <>
                      <div
                        key={curImg}
                        onClick={() => handleSelectImg(curImg)}
                        className={
                          selectImg === curImg
                            ? "prod-sm-img-bx imgactive"
                            : "prod-sm-img-bx"
                        }
                      >
                        <img src={curImg} alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="right-bid-prod-det-bx">
              <div className="bid-prod-info">
                {/* <span>PP Granules</span> */}
                <h6>{data?.productName} </h6>

                <p>
                  {" "}
                  ₹{data?.pricePerUnit}/{data?.unit}{" "}
                </p>
                <div className="prod-id-bx">
                  {/* <p>
                    Product Id: <span>S-24D154</span>{" "}
                  </p> */}
                </div>

                <div className="bid-prod-btn-flex check-flex-bxx">
                  <button onClick={() => setBidPopup(true)} className="bid-btn">
                    Bid Now
                  </button>
                  {data?.includeGst ? (
                    <button className="bid-btn bid-btn2">
                      GST Included {data?.gstRate}
                    </button>
                  ) : null}
                  {data?.includeTransport ? (
                    <button className="bid-btn bid-btn2">
                      Transportation Included
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="bid-prod-user">
                <div className="bid-user-img">
                  <img src="/images/customImg/cmp-3.jpg" alt="" />
                </div>
                <div className="bid-prod-user-det">
                  <h6>{data?.Franchise?.companyName}</h6>
                  <span>Trader</span>
                  <div className="loct-flex">
                    <div className="loct-icon">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span>{data?.Franchise?.franchiseAddress}</span>
                  </div>
                </div>
              </div>

              <div className="prod-des-flex-bx">
                <div className="des-title">
                  <h6>Description</h6>
                  <span>{data?.description}</span>
                </div>

                <div className="bid-des-bx">
                  <h5>Category</h5>
                  <span>{data?.category}</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Sub-category</h5>
                  <span>{data?.subCategory}</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Condition</h5>
                  <span>{data?.condition}</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Quantity</h5>
                  <span>
                    {data?.productQuantity} {data?.unit}
                  </span>
                </div>
                {/* <div className="bid-des-bx">
                  <h5>Minimu Order Quantity</h5>
                  <span>300 KG</span>
                </div> */}
                {/* <div className="bid-des-bx">
                  <h5>Supply</h5>
                  <span>One time</span>
                </div> */}
                {/* <div className="bid-des-bx">
                  <h5>Pricing terms</h5>
                  <span>-</span>
                </div> */}
                <div className="bid-des-bx">
                  <h5>Location</h5>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="more-offer-main">
          <h5>More offers by Jitin Jain</h5>

          <div className="more-offer-flex-bx">
            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-5.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-8.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-1.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-6.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-4.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>
          </div>
        </div>

        <div className="more-offer-main mt-5">
          <h5>Related Offers</h5>

          <div className="more-offer-flex-bx">
            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-6.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-3.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-1.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-2.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-3.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
              <button className="bid-btn bid-btn32">Details</button>
            </div>
          </div>
        </div> */}
      </section>

      {bidPopup && (
        <QuateOfferPopup data={data} onClickClose={() => setBidPopup(false)} />
      )}
    </>
  );
};

export default BidProductDetail;
