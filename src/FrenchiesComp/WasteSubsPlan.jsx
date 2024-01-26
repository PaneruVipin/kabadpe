import React, { useEffect, useRef, useState } from "react";
import SelectArea from "./SelectArea";

const WasteSubsPlan = () => {
  const [plan, setPlan] = useState("monthly");
  const [locat, setLocat] = useState(false);

  // const [showDropdown, setShowDropdown] = useState(false);
  // const [selectedOption, setSelectedOption] = useState('');

  // const options = [
  //   {
  //     label: 'plan - Basic',
  //     details: [
  //       { Planname : 'Plan 1 Basic' , worker: ' 2 worker', price: '₹215' },
  //     ],
  //   },
  //   {
  //     label: 'plan - Intermediate',
  //     details: [
  //       { Planname : 'Plan 2 Intermediate' , worker: '4 worker', price: '₹315' },

  //     ],
  //   },
  //   {
  //     label: 'plan - Advanced',
  //     details: [
  //       { Planname : 'Plan 3 Advanced' , worker: '5 worker', price: '₹415' },

  //     ],
  //   },
  // ];

  // const handleOptionClick = (optionLabel) => {
  //   setSelectedOption(optionLabel);
  //   setShowDropdown(false);
  // };

  const handleFiltFunc = (getplan) => {
    setPlan(getplan);
  };

  return (
    <>
    
    
      <section className="fren-subscrip-plan-comp">
        <div className="common-container">
          <div className="sel-area-filt-btn-flex-main">
            <h5>Subscription Plan </h5>

            <div className="right-filter-btns-flex-bx">
             

              <div className="month-qua-filt-btn-flex">
                <button
                  className={
                    plan === "monthly"
                      ? "sel-filt-btn filtbtnactive"
                      : "sel-filt-btn"
                  }
                  onClick={() => handleFiltFunc("monthly")}
                >
                  Fixed
                </button>
                <button
                  className={
                    plan === "quaterly"
                      ? "sel-filt-btn filtbtnactive"
                      : "sel-filt-btn"
                  }
                  onClick={() => handleFiltFunc("quaterly")}
                >
                  Comission
                </button>
              </div>
            </div>
          </div>

          <div
            className={
              plan === "quaterly"
                ? "subs-plan-table-month-qua-main-bx planactive"
                : "subs-plan-table-month-qua-main-bx"
            }
          >
            <div className="subs-plan-table subs-plan-table-month4 subs-plan-table-month">
              <table>
                <thead>
                  <tr>
                    <th>
                      {" "}
                      <h4>Feature</h4>{" "}
                    </th>
                    <th>
                      {" "}
                      <div className="plan-flex-bx">
                        <h6>Per Lead</h6>

                        <p>
                          {" "}
                          ₹10 <span>/Per lead</span>{" "}
                        </p>
                      </div>{" "}
                    </th>

                    <th>
                      {" "}
                      <div className="plan-flex-bx">
                        <h6>Per Week</h6>

                        <p>
                          {" "}
                          ₹100 <span>/Per week</span>{" "}
                        </p>
                      </div>{" "}
                    </th>

                    <th>
                      {" "}
                      <div className="plan-flex-bx">
                        <h6> Per Month </h6>

                        <p>
                          {" "}
                          ₹500 <span>/Per month</span>{" "}
                        </p>
                      </div>{" "}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <p>Leads</p>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Wallet</p>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Waste Stock Management</p>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                      </td>
                  </tr>

                  <tr>
                    <td>
                    <p>Training</p>
                     
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                    <p>Support in government Schemes</p>
                     
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                

                  <tr>
                    <td>
                      <p>Total </p>
                    </td>
                    <td>
                      <span className="totaltext"> ₹470 </span>
                    </td>
                    <td>
                      <span className="totaltext"> ₹670 </span>
                    </td>
                    <td>
                      <span className="totaltext"> ₹670 </span>
                    </td>
                  </tr>

                  <tr>
                    <td aria-disabled></td>
                    <td>
                      {" "}
                      <button className="subs-now-btn">
                        Subscribe Now
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="subs-now-btn">
                        Subscribe Now
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="subs-now-btn">
                        Subscribe Now
                      </button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="subs-plan-table subs-plan-table3 subs-plan-table-month4">
            <table>
                <thead>
                  <tr>
                    <th>
                      {" "}
                      <h4>Feature</h4>{" "}
                    </th>
                    <th>
                      {" "}
                      <div className="plan-flex-bx">
                        <h6>Starter (c)</h6>

                        <p>
                          {" "}
                          ₹5 + 2.5% <span>/Lead</span>{" "}
                        </p>
                      </div>{" "}
                    </th>

                    <th>
                      {" "}
                      <div className="plan-flex-bx">
                        <h6>Basic (c)</h6>

                       
                        <p>
                          {" "}
                          ₹50 + 2.5% <span>/Week</span>{" "}
                        </p>
                      </div>{" "}
                    </th>

                    <th>
                      {" "}
                      <div className="plan-flex-bx">
                        <h6>pro (c)</h6>

                       
                        <p>
                          {" "}
                          ₹150 + 2.5% <span>/Month</span>{" "}
                        </p>
                      </div>{" "}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <p>Leads</p>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Wallet</p>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p>Waste Stock Management</p>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                      </td>
                  </tr>

                  <tr>
                    <td>
                    <p>Training</p>
                     
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                    <p>Support in government Schemes</p>
                     
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                    <td>
                    <div className="mark-check">
                        <i class="fa-solid fa-circle-check"></i>{" "}
                      </div>
                    </td>
                  </tr>

                

                  <tr>
                    <td>
                      <p>Total </p>
                    </td>
                    <td>
                      <span className="totaltext"> ₹470 </span>
                    </td>
                    <td>
                      <span className="totaltext"> ₹670 </span>
                    </td>
                    <td>
                      <span className="totaltext"> ₹670 </span>
                    </td>
                  </tr>

                  <tr>
                    <td aria-disabled></td>
                    <td>
                      {" "}
                      <button className="subs-now-btn">
                        Subscribe Now
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="subs-now-btn">
                        Subscribe Now
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="subs-now-btn">
                        Subscribe Now
                      </button>{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {locat ? (
        <SelectArea locat={locat} onclickClose={() => setLocat(false)} />
      ) : null}
    </>
  );
};

export default WasteSubsPlan;

// <td><span>KabadiWala Manager</span></td>
{
  /* <td><span>Number of worker</span></td> 
<td><span>Select Area</span></td> 
<td><span>Shahdara</span></td> 
<td><span>Gandhi Nagar</span></td> 
<td><span>Anand Vihar</span></td>  */
}
