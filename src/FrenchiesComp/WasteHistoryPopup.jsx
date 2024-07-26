import React from "react";

const WasteHistoryPopup = ({ onClickCloseWasteColectData }) => {
  return (
    <>
      <section className="french-edit-comp">
        <div className="french-edit-main-box">
          <h5>Waste Collector Details </h5>

          <div className="french-det-grid">
            <div className="french-det-box">
              <h6>Name </h6>
              <span>Rahul Sharma</span>
            </div>

            <div className="french-det-box">
              <h6>Date of Birth </h6>
              <span>15-July-2001</span>
            </div>

            <div className="french-det-box">
              <h6>Gender </h6>
              <span>Male</span>
            </div>

            <div className="french-det-box">
              <h6>Caste </h6>
              <span></span>
            </div>

            <div className="french-det-box">
              <h6>Religion </h6>
              <span> Judaism </span>
            </div>

            <div className="french-det-box">
              <h6>Mobile </h6>
              <span> +91 9971464759 </span>
            </div>

            <div className="french-det-box">
              <h6>Address </h6>
              <span> 398 H/9 Ashok Colony steet No. 2 Delhi-110009 </span>
            </div>

            <div className="french-det-box verif-bx">
              <h6>PAN Verified </h6>
              <div className="verified-check">
                <i className="fa-solid fa-circle-check"></i>
              </div>
            </div>

            <div className="french-det-box verif-bx">
              <h6>Aadhar Verified </h6>
              <div className="verified-check">
                <i className="fa-solid fa-circle-check"></i>
              </div>
            </div>

            <div className="french-det-box verif-bx">
              <h6>Police Verified </h6>
              <div className="verified-check">
                <i className="fa-solid fa-circle-check"></i>
              </div>
            </div>
          </div>

          <div className="waste-hist-box-grid">
            <div className="wase-hist-bx">
              <h6>
                Total waste <span> (purchase) </span>{" "}
              </h6>

              <p>340/Kg</p>
            </div>

            <div className="wase-hist-bx">
              <h6>
                Total value of waste <span> (Purchase) </span>{" "}
              </h6>

              <p> ₹3,45,270 </p>
            </div>

            <div className="wase-hist-bx">
              <h6>Astimated waste </h6>

              <p> 240/Kg </p>
            </div>
          </div>

          <h6 className="banktext mt-4 text-center mb-3">Transactions</h6>

          <div className="all-user-table vw-hist-table trsnct-table">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Date</th>
                  <th>Waste Weight (in Kg) </th>
                  <th>Waste Value (in Rs) </th>
                  <th>CSSComissions</th>
                  <th>Payment Mode</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>5-Dec-2023</td>
                  <td>340</td>
                  <td>2000/-</td>
                  <td>25</td>
                  <td>Wallet</td>
                  <td>
                    {" "}
                    <div className="invoice-btn">
                      <span>CSS24321</span>
                      <i className="fa-regular fa-circle-down"></i>
                    </div>{" "}
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>5-Dec-2023</td>
                  <td>340</td>
                  <td>2000/-</td>
                  <td>25</td>
                  <td>Cash</td>
                  <td>
                    {" "}
                    <div className="invoice-btn">
                      <span>CSS24321</span>
                      <i className="fa-regular fa-circle-down"></i>
                    </div>{" "}
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>5-Dec-2023</td>
                  <td>340</td>
                  <td>2000/-</td>
                  <td>25</td>
                  <td>Wallet</td>
                  <td>
                    {" "}
                    <div className="invoice-btn">
                      <span>CSS24321</span>
                      <i className="fa-regular fa-circle-down"></i>
                    </div>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            onClick={onClickCloseWasteColectData}
            className="close-popup-btn"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </section>
    </>
  );
};

export default WasteHistoryPopup;
