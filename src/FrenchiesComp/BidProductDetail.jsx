import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BidProductDetail = ({ onClickDetPage }) => {
  const [selectImg, setSelectImg] = useState("/images/customImg/post-1.jpg");
  const [bidPopup , setBidPopup] = useState(false);

  const ProdImg = [
    "/images/customImg/post-1.jpg",
    "/images/customImg/post-2.jpg",
    "/images/customImg/post-3.jpg",
    "/images/customImg/post-4.jpg",
  ];

  const handleSelectImg = (selectedImg) => {
    setSelectImg(selectedImg);
  };

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
                <img src={selectImg} alt="prod-img" />
              </div>

              <div className="prod-sm-img-grid-bx">
                {ProdImg.map((curImg) => {
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
                <span>PP Granules</span>
                <h6>Plastic/Polypropylene (PP)</h6>

                <p> ₹699 </p>
                <div className="prod-id-bx">
                  <p>
                    Product Id: <span>S-24D154</span>{" "}
                  </p>
                </div>

                <div className="bid-prod-btn-flex check-flex-bxx">
                  <button onClick={() => setBidPopup(true)} className="bid-btn">Bid Now</button>
                  <button className="bid-btn bid-btn2">GST 18%</button>
                  <button className="bid-btn bid-btn2">
                    Transportation Included
                  </button>
                </div>
              </div>

              <div className="bid-prod-user">
                <div className="bid-user-img">
                  <img src="/images/customImg/c-1.jpg" alt="" />
                </div>
                <div className="bid-prod-user-det">
                  <h6>Jitin Jain</h6>
                  <span>Trader</span>
                  <div className="loct-flex">
                    <div className="loct-icon">
                      <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <span>New Delhi, Delhi, India.</span>
                  </div>
                </div>
              </div>

              <div className="prod-des-flex-bx">
                <div className="des-title">
                  <h6>Description</h6>
                  <span>PP Granules</span>
                </div>

                <div className="bid-des-bx">
                  <h5>Category</h5>
                  <span>Plastic</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Sub-category</h5>
                  <span>Polypropylene (PP)</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Condition</h5>
                  <span>Granules</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Quantity</h5>
                  <span>1000 KG</span>
                </div>
                <div className="bid-des-bx">
                  <h5>MTQ</h5>
                  <span>300 KG</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Supply</h5>
                  <span>One time</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Pricing terms</h5>
                  <span>-</span>
                </div>
                <div className="bid-des-bx">
                  <h5>Location</h5>
                  <span>India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="more-offer-main">
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
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-8.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-1.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-6.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-4.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
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
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-3.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-1.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-2.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
            </div>

            <div className="bid-prod-bx bid-prod-bx2">
              <div className="bid-prod-img">
                <img src="/images/customImg/gall-img-3.jpg" alt="" />
              </div>
              <div className="bid-prod-info">
                <h6> Bid Product Title </h6>
                <span> ₹700 </span>
              </div>
            </div>
          </div>
        </div>
      </section>

     { bidPopup && ( <div onClick={() => setBidPopup(false)} className="bid-popup-sec">
        <div onClick={(e) => e.stopPropagation()} className="bid-popup-bx">
          <h6>Quate your offer</h6>

          <div className="all-user-table stock-tble mnge-waste-table bid-popup-table mt-3 bid-table">
            <table>
              <thead>
                <tr>
                    <th> 
                    </th>
                    <th>
                        Seller
                    </th>
                    <th>
                        Your offer
                    </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td><span>Price</span></td>
                    <td> <span>22/kg</span> </td>
                    <td> <div className="b-inpt">
                        <input type="number" name="price" id="price"  /></div> </td>
                </tr>
                <tr>
                    <td><span>Quantity</span></td>
                    <td> <span>1000kg</span> </td>
                    <td> <div className="b-inpt">
                        <input type="number" name="price" id="price"  /></div> </td>
                </tr>
                <tr>
                    <td><span>GST</span></td>
                    <td><span>18%</span></td>
                    <td><span>18%</span></td>
                </tr>
                <tr>
                    <td><span> Total Value</span></td>
                    <td><span> 25000</span></td>
                    <td><span> 23000</span></td>

                </tr>
              </tbody>
            </table>
          </div>


          <button className="b-comn-btn">
            Submit your offer
          </button>

          <p> <span>Note </span> Total value after including GST</p>

          
        </div>
      </div>)}
    </>
  );
};

export default BidProductDetail;
