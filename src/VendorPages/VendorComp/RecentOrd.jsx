import React, { useState } from "react";
import RecentOrdData from "../RecentOrdData";
import { NavLink } from "react-router-dom";

const RecentOrd = () => {
  const [ordData, setOrdData] = useState(RecentOrdData);

  return (
    <>
      <section className="recent-ord-comp">
        <h6>Recent Orders</h6>

        <div className="recent-ord-table all-user-table">
          <table>
            <thead>
              <tr>
                <th>Invoice No.</th>
                <th>Order Time</th>
                <th>Customer Name</th>
                <th>Method</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {ordData.map((curData, id) => {
                return (
                  <>
                    <tr key={curData.id}>
                      <td>
                        <span> {curData.invoice} </span>
                      </td>
                      <td>
                        <span> {curData.orderTime} </span>
                      </td>
                      <td>
                        <span> {curData.custName} </span>
                      </td>
                      <td>
                        <NavLink to="#" className={curData.method === 'Prepaid' ? 'datacolr' : ''}  title={curData.method === 'Prepaid' ? "Bank Transfer" : ""}> {curData.method}  </NavLink>
                      </td>
                      <td>
                        <span> {curData.amount} </span>
                      </td>
                      <td>
                        <span style={{ backgroundColor : curData.status === 'Pending' ? "#fef9c3" : "" , color : curData.status === 'Pending' ? "#887e0e" : "" }} className={curData.status === 'Cancel' ?  ' stat-btn cancelClor' : 'stat-btn'} > {curData.status} </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default RecentOrd;
