import React from "react";
import TransactionData from "./Trnsctindata";

const LedgerComp = ({ onclickClose }) => {
  return (
    <>
      <section className="ledger-trnsctin-comp">
        <div className="ledger-trnsctin-main-bx">
          <h5>Transactions</h5>

          <div className="trans-flex-bx">
            <div className="trnsctin-info">
              <h6>
                {" "}
                Name : <span>Faiz Alam</span>{" "}
              </h6>
              <h6>
                {" "}
                Mobile : <span>9971464759</span>{" "}
              </h6>
            </div>

            <div className="total-waste-amount-flex-bx">
              <div className="total-bx">
                <h6>Total Waste</h6>
                <span>350 (Kg) </span>
              </div>

              <div className="total-bx">
                <h6>Total Amount</h6>
                <span>₹ 10000.00/- </span>
              </div>
            </div>
          </div>

          <div className="all-user-table trnsctin-table mt-4">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Transaction ID</th>
                  <th>Date</th>
                  <th>Weight (in Kg) </th>
                  <th>Amount</th>
                  <th>Payment Type</th>
                  <th>Admin Com.</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                {TransactionData.map((item, indx) => {
                  return (
                    <>
                      <tr key={indx}>
                        <td>
                          {" "}
                          <span> {indx + 1} </span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span> {item.transactionID} </span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span> {item.date} </span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span> {item.waste} </span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span> {item.amount} </span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span> {item.paymenttype} </span>{" "}
                        </td>
                        <td>
                          {" "}
                          <span> {item.admincomisin} </span>{" "}
                        </td>

                        <td>
                          <button className="inovice-btn">
                            <i className="fa-solid fa-download"></i>
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div onClick={onclickClose} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default LedgerComp;
