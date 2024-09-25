import React, { useContext, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { OrderContext } from '../Context';

const MyOrderDet = ({orderData}) => {
    const [carot , setCarot] = useState("");
   
    
  return (
    <>

    <section className="my-offer-comp my-order-det-comp use-prf-left-main-bx ">

            <div className="top-breadcrum-flex-bx">

                <NavLink to="/">Home</NavLink>
                <span><i class="fa-solid fa-angle-right"></i></span>
                <NavLink to="/">My Account</NavLink>
                <span><i class="fa-solid fa-angle-right"></i></span>

                <NavLink to="/">My Orders</NavLink>
                <span><i class="fa-solid fa-angle-right"></i></span>

                <span>OD432314802798323100</span>

                
            </div>

            <div className="top-order-det-grid-bx">

                <div className="left-order-addres-bx">
                    <h5> Delivery Address </h5>
                    <h6>Faiz Alam</h6>
                    <p>
                        {orderData.address}
                    </p>

                    <h4>Phone Number : <span>8595821041</span>  </h4>
                    
                </div>

                <div className="invoice-bx">
                    <h5>More Actions</h5>
            <div className="invoice-flex-bx">
                    <div className="invoice-flex">
                        <div className="invoice-img">
                            <img src='/images/customImg/download-invoice.png' alt="" />
                        </div>
                        <p>Download Invoice</p>
                    </div>

                    <button className="inv-btn">
                        Download
                    </button>
                    </div>
                </div>
                
            </div>

            <div className="order-prod-det-main">
            <div className="order-prod-det-info-bx">

                <div className="left-prod-order-data-bx">

                    <div className="order-prod-img-bx">
                        <img src={orderData.img} alt="" />
                    </div>

                    <div className="order-prod-info">
                        <h4> {orderData.name} </h4>
                        {orderData.color  !== "" && (
                            <h5> Color: <span> {orderData.color} </span> </h5>

                        )}
                            <h5> Seller: <span> {orderData.seller} </span> </h5>

                            <h6> ₹{orderData.price} </h6>

                    </div>

                    
                </div>

                { 
                orderData.type === 'delivered' && (
                    <div className="order-tracking-progressbar-main">
                        <div className="order-tracking-progressbar order-tracking-progressbar1">

                            <div onMouseEnter={() => setCarot('orderconfirm')} className="tracking-bx tracking-bx11">
                                <span>Order Confirmed</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            <div onMouseEnter={() => setCarot('underproces')} className="tracking-bx tracking-bx12">
                                <span>Under Process</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            <div onMouseEnter={() => setCarot('dispatch')} className="tracking-bx tracking-bx13">
                                <span>Dispatched</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            <div onMouseEnter={() => setCarot('delivere')} className="tracking-bx tracking-bx14">
                                <span>Delivered</span>
                                <span>Sat ,14th Sep</span>
                            </div>
                            
                        </div>

                        <div className="bottom-line-bx">
                                <div className={ carot === 'underproces' ? "carot orderconfirm" : carot === 'dispatch' ? "carot dispatch" : carot === 'delivere'?  "carot deliver" : "carot"}>
                                </div>
                        </div>

                    <div className="order-text-bx">
                    {  carot === 'orderconfirm' &&  <p className="order-text">
                        your order is under process we will notify , once dispatched
                        </p>}
                        {  carot === 'dispatch' &&  <p className="order-text">
                            Order has been dispatched via Blue dart, tracking Id is: 8738937
                        </p>}
                        {  carot === 'delivere' &&  <p className="order-text">
                            Your item has been delivered
                        </p>}
                        </div>
                    </div>
                )}


{ 
                orderData.type === 'refund' && (
                    <div className="order-tracking-progressbar-main">
                        <div className="order-tracking-progressbar order-tracking-progressbar2">

                            <div onMouseEnter={() => setCarot('return')} className="tracking-bx tracking-bx21">
                                <span>Return</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            <div onMouseEnter={() => setCarot('refund')} className="tracking-bx tracking-bx22">
                                <span>Refund</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            
                        </div>

                        <div className="bottom-line-bx">
                                <div className={ carot === 'refund' ? "carot refund" : "carot"}>
                                </div>
                        </div>

                    <div className="order-text-bx">
                    {  carot === 'return' &&  <p className="order-text">
                        
                        You returned this order because the stitch quality is poor.
                        </p>}
                        {  carot === 'refund' &&  <p className="order-text">
                            Processed by Flipkart. Expected by Sep 18, 2024
                        </p>}
                    
                        </div>
                    </div>
                )}

{ 
                orderData.type === 'canceled' && (
                    <div className="order-tracking-progressbar-main">
                        <div className="order-tracking-progressbar order-tracking-progressbar3">

                        <div onMouseEnter={() => setCarot('orderconfirm')} className="tracking-bx tracking-bx31">
                                <span>Order Confirmed</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            <div onMouseEnter={() => setCarot('underproces')} className="tracking-bx tracking-bx32">
                                <span>Under Process</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            <div onMouseEnter={() => setCarot('dispatch')} className="tracking-bx tracking-bx33">
                                <span>Dispatched</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            <div onMouseEnter={() => setCarot('cancel')} className="tracking-bx tracking-bx34">
                                <span>Cancelled</span>
                                <span>Sat ,14th Sep</span>
                            </div>

                            
                        </div>

                        <div className="bottom-line-bx">
                                <div className={ carot === 'underproces' ? "carot orderconfirm" : carot === 'dispatch' ? "carot dispatch" : carot === 'cancel'?  "carot deliver" : "carot"}>
                                </div>
                        </div>

                        <div className="order-text-bx">
                    {  carot === 'orderconfirm' &&  <p className="order-text">
                        your order is under process we will notify , once dispatched
                        </p>}
                        {  carot === 'dispatch' &&  <p className="order-text">
                            Order has been dispatched via Blue dart, tracking Id is: 8738937
                        </p>}
                        {  carot === 'cancel' &&  <p className="order-text">
                            The delivery agent could not reach you

                        </p>}
                        </div>
                    </div>
                )}


                <button className="rate-review-btn">
                    <div className="star">
                    <i class="fa-solid fa-star"></i>
                    </div>
                Rate & Review Product
                </button>
                
            </div>

            <div className="otp-text-bx">
                <div className="chek-tik">
                <i class="fa-solid fa-circle-check"></i>
                </div>
                <h6>Delivery was made with OTP verification</h6>
            </div>
            </div>
            
    </section>

    </>
  )
}

export default MyOrderDet
