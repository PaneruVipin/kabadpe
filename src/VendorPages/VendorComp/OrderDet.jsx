import React from "react";
import { NavLink } from "react-router-dom";
import { FaTruck } from "react-icons/fa6";
import { DateTime } from "luxon";
const OrderDet = ({ data = {} }) => {
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
                    <h5>Order#{data?.id} details</h5>
                    <p>
                      {data?.paymentMethod == "cash"
                        ? data?.paymentStatus == "pending"
                          ? "Payment via COD, pending until the delivery date"
                          : `Payment via COD. Paid on ${DateTime.fromISO(
                              data?.deliveryDate,
                              {
                                zone: "utc",
                              }
                            )
                              .setZone("Asia/Kolkata")
                              .toFormat("ccc dd LLL yyyy @ hh:mm a")}`
                        : `Payment via ${data?.paymentMethod} . Paid on{" "}
                      ${DateTime.fromISO(data?.addedOn, {
                        zone: "utc",
                      })
                        .setZone("Asia/Kolkata")
                        .toFormat("ccc dd LLL yyyy @ hh:mm a")}.`}
                      {/* Customer IP: 223.190.87.57 */}
                    </p>
                  </div>

                  <div className="inv-text-flex">
                    <div className="inv-text-main">
                      <div className="inv-comn-text">
                        <p>Date</p>
                        <span>Feb 3, 2024 - 15:30</span>
                      </div>
                      <div className="inv-comn-text  inv-stat-del-bx mt-3">
                        <p>Status</p>
                        <span>
                          {data?.orderStatus?.substring(0, 1)?.toUpperCase() +
                            data?.orderStatus?.substring(1)}
                        </span>
                      </div>
                    </div>

                    <div className="inv-text-main">
                      <div className="inv-comn-text">
                        <p>Email</p>
                        <NavLink to="#">{data?.email}</NavLink>
                      </div>
                      <div className="inv-comn-text  mt-3">
                        <p>Phone</p>
                        <span>{data?.phoneNumber}</span>
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
                    <span>{data?.fullname}</span>
                    <p>
                      {data?.email} <span> {data?.phoneNumber}</span>
                    </p>
                    {data?.addressType ? (
                      <span>
                        {data?.addressType?.substring(0, 1)?.toUpperCase() +
                          data?.addressType?.substring(1)}
                      </span>
                    ) : null}
                    <span>{data?.billingAddress || data?.shippingAddress}</span>
                  </div>

                  <div className="order-det-info order-det-info2">
                    <h6>Shipping address</h6>
                    <span>{data?.fullname}</span>
                    <p>
                      {data?.email} <span>{data?.phoneNumber}</span>
                    </p>
                    {data?.addressType ? (
                      <span>
                        {data?.addressType?.substring(0, 1)?.toUpperCase() +
                          data?.addressType?.substring(1)}
                      </span>
                    ) : null}
                    <span>{data?.shippingAddress}</span>
                  </div>
                </div>
              </div>

              <div className="order-det-table recent-ord-table all-user-table">
                <table>
                  <thead>
                    <tr>
                      <th>SR.</th>
                      <th>PRODUCT</th>
                      {/* <th>Cost of Goods</th> */}
                      <th>Sell Price </th>
                      <th>Qty</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.OrderItems?.map(
                      (
                        {
                          id,
                          productId,
                          product,
                          variationId,
                          productName,
                          quantity,
                          unitPrice,
                          totalPrice,
                          Product,
                        },
                        i
                      ) => {
                        return (
                          <tr key={id}>
                            <td>
                              <span>{i + 1}</span>
                            </td>
                            <td>
                              <div className="prod-infor-flex">
                                <h6> {productName}</h6>
                                <p>
                                  SKU: <span>{Product?.sku}</span>
                                </p>
                                {variationId ? (
                                  <p>
                                    Variation ID: <span>{variationId}</span>
                                  </p>
                                ) : null}
                                {/* <p>
                                  Size: <span>UK6</span>
                                </p> */}
                              </div>
                            </td>

                            {/* <td>
                              <span>₹2,4799.00</span>
                            </td> */}

                            <td>
                              <span>₹{unitPrice}</span>
                            </td>

                            <td>
                              <span>{quantity}</span>
                            </td>

                            <td>
                              <span>₹{totalPrice}</span>
                            </td>
                          </tr>
                        );
                      }
                    )}
                    {/* <tr>
                      <td>
                        <span>2</span>
                      </td>
                      <td>
                        <div className="prod-infor-flex">
                          <h6>Kale Sprouts</h6>
                          <p>
                            SKU: <span>FY0610</span>
                          </p>
                          <p>
                            Variation ID: <span>22560</span>
                          </p>
                          <p>
                            Size: <span>UK6</span>
                          </p>
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
                    </tr> */}
                  </tbody>
                </table>
              </div>

              <div className="ord-det-payment-flex-bx">
                <div className="left-shipment-bx">
                  <div className="ord-det-p-icon">
                    <FaTruck className="icon" />
                  </div>

                  <div className="falt-rate-flex">
                    <h6>Flat rate</h6>
                    <p>
                      Items :{" "}
                      {data?.OrderItems?.map(
                        ({ id, productName, quantity }, i) =>
                          `${productName} x${quantity}`
                      ).join(", ")}
                    </p>
                  </div>
                </div>

                <h6>₹{data?.shippingAmount}</h6>
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
                  <span>₹{data?.orderAmount}</span>
                </div>
                <div className="order-paymnt-det-bx">
                  <h6>Voucher(s): </h6>
                  <span>₹{data?.orderDiscount}</span>
                </div>

                <div className="order-paymnt-det-bx">
                  <h6>Shipping: </h6>
                  <span>₹{data?.shippingAmount}</span>
                </div>

                <div className="order-paymnt-det-bx">
                  <h6>Shipping Discount: </h6>
                  <span>₹{data?.shippingDiscount}</span>
                </div>
                <div className="order-paymnt-det-bx">
                  <h6>Order Total: </h6>
                  <span>₹{data?.orderAmount}</span>
                </div>

                <div className="line"></div>

                <div className="line1"></div>

                <div className="order-paymnt-det-bx">
                  <h6>
                    {data?.paymentStatus == "pending" ? "Pending" : "Paid"}:
                  </h6>
                  <span>₹{data?.orderAmount}</span>
                </div>

                <div className="order-paymnt-det-bx order-note-flex3">
                  <h6>
                    {" "}
                    {data?.paymentMethod == "cash"
                      ? data?.paymentStatus == "pending"
                        ? "Payment via COD, pending until the delivery date"
                        : `Payment via COD. Paid on ${DateTime.fromISO(
                            data?.deliveryDate,
                            {
                              zone: "utc",
                            }
                          )
                            .setZone("Asia/Kolkata")
                            .toFormat("ccc dd LLL yyyy @ hh:mm a")}`
                      : `Payment via ${data?.paymentMethod} . Paid on{" "}
                      ${DateTime.fromISO(data?.addedOn, {
                        zone: "utc",
                      })
                        .setZone("Asia/Kolkata")
                        .toFormat("ccc dd LLL yyyy @ hh:mm a")}.`}
                    :{" "}
                  </h6>
                </div>

                {/* <div className="order-paymnt-det-bx">
                  <h6>Cost of Goods: </h6>
                  <span>₹2,479.00</span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="right-ord-det-grid">
            <div className="ord-det-select-bx">
              <div className="ord-det-action-sel-bx">
                <span>Order Action</span>
                <select name="action" id="action">
                  <option value="action">Choose an action</option>
                  <option value="action">
                    Email invoice / order details to customer
                  </option>
                  <option value="action">Resend new order notification</option>
                  <option value="action">
                    Regenerate download permissions
                  </option>
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
                {data?.orderStatus?.substring(0, 1)?.toUpperCase() +
                  data?.orderStatus?.substring(1)}
              </span>
            </div>

            <div className="ord-note">
              <h6>Order notes</h6>

              <div className="order-note-bx">
                <p>{data?.orderNote}</p>
                <div className="order-note-flex">
                  {/* <span>February 4 , 2024 at 8:19 pm by admin</span>
                  <button className="del-nt-btn">Delete note</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-det-paymt-btn">
          <div className="left-ord-det-paymt-btn-flex">
            <button className="filt-ord-btn filt-ord-btn2">
              Download Invoice{" "}
              <ion-icon name="cloud-download-outline"></ion-icon>
            </button>

            <button className="ref-btn">Refund</button>
          </div>

          <button className="filt-ord-btn filt-ord-btn2">
            Print Shipping Invoice <ion-icon name="print-outline"></ion-icon>
          </button>
        </div>
      </section>
    </>
  );
};

export default OrderDet;
