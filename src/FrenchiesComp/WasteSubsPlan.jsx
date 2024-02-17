import React, { useEffect, useRef, useState } from "react";
import SelectArea from "./SelectArea";
import { useQuery } from "@tanstack/react-query";
import { workerSubscriptionsFetch } from "../apis/worker/plan";

const WasteSubsPlan = () => {
  const [plan, setPlan] = useState("monthly");
  const [locat, setLocat] = useState(false);
  const [selectedArias, setSelectedArias] = useState([]);
  const [errors, setErrors] = useState("");
  const handleFiltFunc = (getplan) => {
    setPlan(getplan);
  };
  const { data: subs, refetch } = useQuery({
    queryKey: ["workerfetchSubs"],
    queryFn: () => workerSubscriptionsFetch(),
  });

  const handleRemoveAriaClick = (id) => () => {
    const newArias = selectedArias.filter((s) => s.id != id);
    setSelectedArias(newArias);
  };

  const handelSubscribeClick = (subscriptionId) => async () => {
    setErrors("");
    if (!selectedArias?.length) {
      alert("Please, Choose Atleast 1 Area");
      setErrors("Please, Choose Atleast 1 Area");
      return;
    }
  };
  return (
    <>
      <section className="fren-subscrip-plan-comp">
        <div className="common-container">
          <div className="sel-area-filt-btn-flex-main">
            <h5>Subscription Plan </h5>

            <div className="right-filter-btns-flex-bx">
              {/* <div className="month-qua-filt-btn-flex">
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
              </div> */}
              <div onClick={() => setLocat(true)} className="sel-area-btn">
                Select Location
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
                    {subs?.A ? (
                      <th>
                        <div className="plan-flex-bx">
                          <h6>{subs?.A?.planeName}</h6>

                          <p>
                            {" "}
                            ₹{subs?.A?.planAmount
                              ? subs?.A?.planAmount
                              : 0.0}{" "}
                            <span>/Per lead</span>{" "}
                          </p>
                        </div>
                      </th>
                    ) : null}

                    {subs?.B ? (
                      <th>
                        <div className="plan-flex-bx">
                          <h6>{subs?.B?.planeName}</h6>

                          <p>
                            {" "}
                            ₹{subs?.C?.planAmount
                              ? subs?.C?.planAmount
                              : 0.0}{" "}
                            <span>/Per lead</span>{" "}
                          </p>
                        </div>
                      </th>
                    ) : null}

                    {subs?.C ? (
                      <th>
                        <div className="plan-flex-bx">
                          <h6>{subs?.C?.planeName}</h6>

                          <p>
                            {" "}
                            ₹{subs?.C?.planAmount ? subs?.C?.planAmount : 0.0} +
                            {subs?.C?.additionalAmount
                              ? subs?.C?.additionalAmount
                              : 0.0}
                            %<span>/Per lead</span>{" "}
                          </p>
                        </div>
                      </th>
                    ) : null}
                  </tr>
                </thead>

                <tbody>
                  {!subs?.error ? (
                    <>
                      <tr>
                        <td>
                          <p>Leads</p>
                        </td>
                        {subs?.A ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.B ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.C ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                      </tr>

                      <tr>
                        <td>
                          <p>Wallet</p>
                        </td>
                        {subs?.A ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.B ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.C ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                      </tr>

                      <tr>
                        <td>
                          <p>Waste Stock Management</p>
                        </td>
                        {subs?.A ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.B ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.C ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                      </tr>

                      <tr>
                        <td>
                          <p>Training</p>
                        </td>
                        {subs?.A ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.B ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.C ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                      </tr>

                      <tr>
                        <td>
                          <p>Support in government Schemes</p>
                        </td>
                        {subs?.A ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.B ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                        {subs?.C ? (
                          <td>
                            <div className="mark-check">
                              <i class="fa-solid fa-circle-check"></i>{" "}
                            </div>
                          </td>
                        ) : null}
                      </tr>

                      {/* <tr>
                        <td>
                          <p>Total </p>
                        </td>
                        {subs?.A ? (
                          <td>
                            <span className="totaltext"> ₹470 </span>
                          </td>
                        ) : null}
                        {subs?.B ? (
                          <td>
                            <span className="totaltext"> ₹670 </span>
                          </td>
                        ) : null}
                        {subs?.C ? (
                          <td>
                            <span className="totaltext"> ₹670 </span>
                          </td>
                        ) : null}
                      </tr> */}

                      <tr>
                        <td>
                          {" "}
                          <div className="area-flex">
                            {" "}
                            <p>Select Area</p>{" "}
                            <div
                              onClick={() => setLocat(true)}
                              className="add-area-icon2"
                            >
                              <i class="fa-solid fa-plus"></i>
                            </div>{" "}
                          </div>{" "}
                        </td>
                        {subs?.A ? <td></td> : null}
                        {subs?.B ? <td></td> : null}
                        {subs?.C ? <td></td> : null}
                      </tr>
                      {selectedArias?.map(
                        ({
                          ariaName,
                          ariaStatus,
                          city,
                          id,
                          monthlyPrice,
                          pincode,
                          quaterlyPrice,
                          state,
                          subAriaName,
                        }) => (
                          <tr>
                            <td>
                              <p className="area-text">
                                {subAriaName}{" "}
                                <i
                                  onClick={handleRemoveAriaClick(id)}
                                  class="fa-solid fa-circle-xmark"
                                ></i>
                              </p>
                            </td>
                            {subs?.A ? <td></td> : null}
                            {subs?.B ? <td></td> : null}
                            {subs?.C ? <td></td> : null}
                          </tr>
                        )
                      )}

                      <tr>
                        <td aria-disabled></td>
                        {subs?.A ? (
                          <td>
                            {" "}
                            <button
                              className="subs-now-btn"
                              onClick={handelSubscribeClick(subs?.A?.id)}
                            >
                              Subscribe Now
                            </button>{" "}
                          </td>
                        ) : null}
                        {subs?.B ? (
                          <td>
                            {" "}
                            <button
                              className="subs-now-btn"
                              onClick={handelSubscribeClick(subs?.A?.id)}
                            >
                              Subscribe Now
                            </button>{" "}
                          </td>
                        ) : null}
                        {subs?.C ? (
                          <td>
                            {" "}
                            <button
                              className="subs-now-btn"
                              onClick={handelSubscribeClick(subs?.A?.id)}
                            >
                              Subscribe Now
                            </button>{" "}
                          </td>
                        ) : null}
                      </tr>
                    </>
                  ) : null}
                </tbody>
              </table>
            </div>

            {/* <div className="subs-plan-table subs-plan-table3 subs-plan-table-month4">
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
            </div> */}
          </div>
        </div>
      </section>

      {locat ? (
        <SelectArea
          component="worker"
          selectedArias={selectedArias}
          setSelectedArias={setSelectedArias}
          onclickClose={() => setLocat(false)}
        />
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
