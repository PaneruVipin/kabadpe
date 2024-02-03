import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FaRotate } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";   
import { FaCheck } from "react-icons/fa6";
const OrderInfoProg = () => {
  return (
    <>

    <section className="order-info-prog-comp">
        <div className="ord-info-prog-grid">

            <div className="ord-info-prog-bx">
                <div className="ord-icon-bx">
                <FiShoppingCart className='ord-icon' />
                </div>
                <div className="ord-info">
                    <span>Total Order</span>
                    <h6>669</h6>
                </div>
            </div>

            <div className="ord-info-prog-bx">
                <div className="ord-icon-bx ord-icon-bx2">
                <FaRotate  className='ord-icon ord-icon2' />
                </div>
                <div className="ord-info">
                    <span>Orders Pending</span>
                    <h6>228</h6>
                </div>
            </div>

            <div className="ord-info-prog-bx">
                <div className="ord-icon-bx ord-icon-bx3">
                <FiTruck  className='ord-icon ord-icon3' />
                </div>
                <div className="ord-info">
                    <span>Orders Processing</span>
                    <h6>72</h6>
                </div>
            </div>

            <div className="ord-info-prog-bx">
                <div className="ord-icon-bx ord-icon-bx4">
                <FaCheck  className='ord-icon ord-icon4' />
                </div>
                <div className="ord-info">
                    <span>Orders Delivered</span>
                    <h6>348</h6>
                </div>
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default OrderInfoProg
