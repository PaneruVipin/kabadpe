import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BidProductDetail = ({onClickDetPage}) => {
    const [selectImg ,setSelectImg] =  useState('/images/customImg/post-1.jpg');

    const ProdImg = [

     '/images/customImg/post-1.jpg',
     '/images/customImg/post-2.jpg',
     '/images/customImg/post-3.jpg',
     '/images/customImg/post-4.jpg',
     

     
        
    ]


    const handleSelectImg = (selectedImg) => { setSelectImg(selectedImg);}
    
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

                                <div key={curImg} onClick={() => handleSelectImg(curImg)} className={selectImg === curImg ? "prod-sm-img-bx imgactive" : "prod-sm-img-bx"}>
                                    <img src={curImg} alt="" />
                                </div>
                                </>
                            )
                        })}
                    
                </div>
                
            </div>

            <div className="right-bid-prod-det-bx">

                <div className="bid-prod-info">

                <span>PP Granules</span>

                <h6>Plastic/Polypropylene (PP)</h6>
                
                <p> ₹699 </p>

                <div className="prod-id-bx">
                    <p>Product Id: <span>S-24D154</span> </p>
                </div>

                <button className="bid-btn">
                    Bid Now
                </button>

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
                        <span>Granules
</span>
                    </div>
                    <div className="bid-des-bx">
                        <h5>Quantity</h5>
                        <span>25 MT</span>
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
            <h5>
More offers by Jitin Jain</h5>

            <div className="more-offer-flex-bx">

            <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-5.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-8.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-1.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-6.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
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
            <h5>
Related Offers</h5>

            <div className="more-offer-flex-bx">

            <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-6.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-3.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-1.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
                <div className="bid-prod-img">
                    <img src="/images/customImg/gall-img-2.jpg" alt="" />
                </div>
                <div className="bid-prod-info">
                    <h6> Bid Product Title </h6>
                    <span> ₹700 </span>
                </div>
              </div>

              <div   className="bid-prod-bx bid-prod-bx2">
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
    </>
  );
};

export default BidProductDetail;
