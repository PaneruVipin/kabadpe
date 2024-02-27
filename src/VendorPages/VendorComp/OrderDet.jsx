import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTruck } from "react-icons/fa6";
const OrderDet = () => {
  return (
    <>

    <section className="order-Det-comp">

       <h6>Invoice</h6>

       <div className="ord-det-grid">

        <div className="left-ord-det-grid">

        <div className="order-det-main">

        <div className="order-det-flex-bx">

            <div className="ord-det-left-flex">

            <div className="invoice-stat-bx">
            <h5>Order#19756 details</h5>
        <p>Payment via Direct bak tranfer . Paid on February 4 2024 @ 8:19 pm. Customer IP: 223.190.87.57</p>
               
            </div>

            <div className="inv-text-flex">

                <div className="inv-text-main">
            <div className="inv-comn-text">
                <p>Date</p>
                <span>Feb 3, 2024 - 15:30</span>
            </div>
            <div className="inv-comn-text  inv-stat-del-bx mt-3">
                <p>Status</p>
                <span>Delivered</span>
            </div>
            </div>
            
            <div className="inv-text-main">

            <div className="inv-comn-text">
                <p>Email</p>
                <NavLink to="#">Faiz@gmail.com</NavLink>
            </div>
            <div className="inv-comn-text  mt-3">
                <p>Phone</p>
                <span>9971464759</span>
            </div>
            </div>

            {/*  <div className="inv-stat-del-bx">
                    <p>STATUS</p>
            <span>Delivered</span>
                </div> */}

            </div>

            </div>

            <div className="right-ord-det-bx">
            <div className="order-det-info order-det-info2">
                    <h6>Billing Address</h6>
                    <span>Tasha Whitley</span>
                    <p>sesajo@mailinator.com <span> +1 (571) 925-2005</span></p>
                    <span>Tempore esse in sun</span>
                    <span>Laboriosam ipsam qu, Quis non nesciunt a, 25683</span>
                </div>

                <div className="order-det-info order-det-info2">
                    <h6>Shipping address</h6>
                    <span>Tasha Whitley</span>
                    <p>sesajo@mailinator.com <span> +1 (571) 925-2005</span></p>
                    <span>Tempore esse in sun</span>
                    <span>Laboriosam ipsam qu, Quis non nesciunt a, 25683</span>
                </div>
                
            </div>
            
        </div>

        <div className="order-det-table recent-ord-table all-user-table">
            <table>
                <thead>
                    <tr>
                        <th>SR.</th>
                        <th>PRODUCT</th>
                        <th>Cost of Goods</th>
                        <th>Cost </th>
                        <th>Qty</th>
                        <th>Total</th>

                    </tr>
                </thead>
                <tbody>
                   
                    <tr>
                        <td><span>1</span></td>
                        <td>
                            <div className="prod-infor-flex">
                            <h6>	Chocolate Cream Sandwich Cookie</h6>
                            <p>SKU: <span>FY0610</span></p>
                            <p>Variation ID: <span>22560</span></p>
                            <p>Size: <span>UK6</span></p>                            
                            </div>
                        </td>

                        <td>
                            <span>₹2,4799.00</span>
                        </td>

                        <td>
                            <span>₹4,4799.00</span>
                        </td>

                        <td>
                            <span>1</span>
                        </td>

                        <td>
                            <span>₹5,4799.00</span>
                        </td>
                       
                    </tr>

                    <tr>
                        <td><span>2</span></td>
                        <td>
                            <div className="prod-infor-flex">
                            <h6>Kale Sprouts</h6>
                            <p>SKU: <span>FY0610</span></p>
                            <p>Variation ID: <span>22560</span></p>
                            <p>Size: <span>UK6</span></p>                            
                            </div>
                        </td>

                        <td>
                            <span>₹2,4799.00</span>
                        </td>

                        <td>
                            <span>₹4,4799.00</span>
                        </td>

                        <td>
                            <span>1</span>
                        </td>

                        <td>
                            <span>₹5,4799.00</span>
                        </td>
                       
                    </tr>


                    
                </tbody>
            </table>
        </div>

        <div className="ord-det-payment-flex-bx">

            <div className="left-shipment-bx">

            <div className="ord-det-p-icon">
            <FaTruck className='icon' />
            </div>

            <div className="falt-rate-flex">
                <h6>Flat rate</h6>
                <p>Items :  <span>Adidas Freak 3 FG Football Shoes, UK6 x 1</span></p>
            </div>

            </div>

            <h6>₹200.00</h6>
            
        </div>

        {/* <div className="ord-det-payment-flex-bx">

        <div className="inv-comn-text">
                <p>PAYMENT METHOD</p>
                <span>Cash</span>
            </div>

            <div className="inv-comn-text">
                <p>SHIPPING COST</p>
                <span>₹20.00</span>
            </div>

            <div className="inv-comn-text">
                <p>DISCOUNT</p>
                <span>₹20.00</span>
            </div>

            <div className="inv-comn-text inv-comn-text2">
                <p>TOTAL AMOUNT</p>
                <span>₹325.00</span>
            </div>
            
        </div> */}

        <div className="order-pyamnt-det-main">

        <div className="order-paymnt-det-bx">
            <h6>Item Subtotal: </h6>
            <span>₹4,499.00</span>
        </div>
        <div className="order-paymnt-det-bx">
            <h6>Voucher(s): </h6>
            <span>₹225.00</span>
        </div>

        <div className="order-paymnt-det-bx">
            <h6>Shipping: </h6>
            <span>₹200.00</span>
        </div>
        <div className="order-paymnt-det-bx">
            <h6>Order Total: </h6>
            <span>₹4,479.00</span>
        </div>

        <div className="line"></div>
        
        <div className="order-paymnt-det-bx">
            <h6>Order Total: </h6>
            <span>₹4,479.00</span>
        </div>

        <div className="line1"></div>

        <div className="order-paymnt-det-bx">
            <h6>Paid: </h6>
            <span>₹4,479.00</span>
        </div>

        <div className="order-paymnt-det-bx order-note-flex3">
            <h6>February 4 2024 via Direct bank transfer: </h6>
        </div>

        <div className="order-paymnt-det-bx">
            <h6>Cost of Goods: </h6>
            <span>₹2,479.00</span>

        </div>


        
        </div>

        </div>

    

        </div>  

        <div className="right-ord-det-grid">

            <div className="ord-det-select-bx">

            <div className="ord-det-action-sel-bx">
                <span>Order Action</span>
                <select name="action" id="action">
                    <option value="action">Choose an action</option>
                    <option value="action">Email invoice / order details to customer</option>
                    <option value="action">Resend new order notification</option>
                    <option value="action">Regenerate download permissions</option>

                </select>
            </div>

            <div className="ord-det-action-sel-bx">
                <span>Update Status</span>
                <select name="option" id="option">
                                <option value="option">Pending Payment</option>
                                <option value="option">Processing</option>
                                <option value="option">On hold</option>
                                <option value="option">Completed</option>
                                <option value="option">Refunded</option>
                                <option value="option">Failed</option>
                                <option value="option">Draft</option>

                </select>
            </div>

            <span className="del-nt-btn curent-stat">
                            Current status
                        </span>

            </div>

            <div className="ord-note">
                <h6>Order notes</h6>

                <div className="order-note-bx">
                    <p>Order status changed from On hold to Completed.</p>
                    <div className="order-note-flex">
                        <span>February 4 , 2024 at 8:19 pm by admin</span>
                        <button className="del-nt-btn">
                            Delete note
                        </button>
                    </div>
                </div>

                <div className="order-note-bx">
                    <p>Order status changed from On hold to Completed.</p>
                    <div className="order-note-flex ">
                        <span>February 4 , 2024 at 8:19 pm by admin</span>
                        <button className="del-nt-btn">
                            Delete note
                        </button>
                    </div>
                </div>

                <div className="order-note-bx">
                    <p>Order status changed from On hold to Completed.</p>
                    <div className="order-note-flex">
                        <span>February 4 , 2024 at 8:19 pm by admin</span>
                        <button className="del-nt-btn">
                            Delete note
                        </button>
                    </div>
                </div>
                
            </div>
            
        </div>

</div>

<div className="order-det-paymt-btn">

<div className="left-ord-det-paymt-btn-flex">

<button className="filt-ord-btn filt-ord-btn2">
Download Invoice <ion-icon name="cloud-download-outline"></ion-icon>
</button>

<button className="ref-btn">
Refund 
</button>

</div>

<button className="filt-ord-btn filt-ord-btn2">
Print Shipping Invoice <ion-icon name="print-outline"></ion-icon>
</button>

</div>
        
    </section>
    
    </>
  )
}

export default OrderDet