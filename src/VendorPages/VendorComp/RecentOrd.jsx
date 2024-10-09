import React, { useState } from "react";
import RecentOrdData from "../RecentOrdData";
import { NavLink } from "react-router-dom";
import { DateTime } from "luxon";

const RecentOrd = ({ data = [], compTrue, onOrdComp }) => {
  return (
    <>
      <section className="recent-ord-comp">
        {compTrue === "orders" ? <h6>Recent Orders</h6> : null}

        <div className="recent-ord-table all-user-table">
          <table>
            <thead>
              <tr>
                <th>Order Time</th>
                <th>Invoice No.</th>
                <th>Customer Name</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {data?.map(
                ({
                  addedOn,
                  email,
                  fullname,
                  id,
                  orderAmount,
                  orderDate,
                  orderStatus,
                  paymentMethod,
                  OrderItems,
                  ...rest
                }) => {
                  return (
                    <tr key={id}>
                      <td>
                        <span>
                          {" "}
                          {DateTime.fromISO(orderDate, {
                            zone: "utc",
                          })
                            .setZone("Asia/Kolkata")
                            .toFormat("ccc dd, LLL yyyy hh:mm a")}{" "}
                        </span>
                      </td>
                      <td>
                        <span
                          onClick={() =>
                            onOrdComp({
                              addedOn,
                              email,
                              fullname,
                              id,
                              orderAmount,
                              orderDate,
                              orderStatus,
                              paymentMethod,
                              OrderItems,
                              ...rest,
                            })
                          }
                        >
                          {" "}
                          {id}{" "}
                        </span>
                      </td>
                      <td>
                        <span> {fullname} </span>
                      </td>
                      <td>
                        <NavLink
                          to="#"
                          className={paymentMethod != "cash" ? "datacolr" : ""}
                          title={paymentMethod != "cash" ? "Bank Transfer" : ""}
                        >
                          {paymentMethod == "cash" ? "COD" : "Prepaid"}
                        </NavLink>
                      </td>
                      <td>
                        <span> ₹{orderAmount} </span>
                      </td>
                      <td>
                        <span
                          style={{
                            backgroundColor:
                              orderStatus == "pending" ? "#fef9c3" : "",
                            color: orderStatus == "pending" ? "#887e0e" : "",
                          }}
                          className={
                            orderStatus == "cancel"
                              ? " stat-btn cancelClor"
                              : "stat-btn"
                          }
                        >
                          {orderStatus}
                        </span>
                      </td>
                      <td>
                        <div className="act-select-bx">
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
                      </td>
                      <td>
                        <div className="inv-dwld-btn">
                          <button className="inv-dwld-btn">
                            <ion-icon name="cloud-download-outline"></ion-icon>
                          </button>
                          <button
                            onClick={() =>
                              onOrdComp({
                                addedOn,
                                email,
                                fullname,
                                id,
                                orderAmount,
                                orderDate,
                                orderStatus,
                                paymentMethod,
                                OrderItems,
                                ...rest,
                              })
                            }
                            className="inv-dwld-btn"
                          >
                            <ion-icon name="eye-outline"></ion-icon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
          <div className="ord-pagination-flex-bx">
            <span>Showing 1-8 of 30</span>

            <div className="ord-page-btn-flex">
              <button className="ord-page-prev-btn">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>

              <div className="ord-page-num pageactive">1</div>

              <div className="ord-page-num">2</div>

              <div className="ord-page-num">3</div>
              <div className="ord-page-num">4</div>

              <button className="ord-page-prev-btn ord-page-next-btn">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentOrd;
