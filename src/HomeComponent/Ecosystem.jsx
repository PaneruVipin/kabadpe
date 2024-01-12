import React, { useState } from "react";

const Ecosystem = () => {
  const [tab, setTab] = useState("ecosystem");

  const handleFilter = (getValue) => {
    setTab(getValue);
  };

  return (
    <>
      <section className="ecosystem-comp">
        <div className="comon-container-2 home-container">
          <div className="apnt-heading">
            <p>
            revolutionising 
            </p>
            <h3>Waste Management</h3>
          </div>

          <div className="tab-sect">
            <div className="tab-swtich-grid-bx">
              <div
                onClick={() => handleFilter("ecosystem")}
                className={
                  tab === "ecosystem"
                    ? "tab-swtch-bx tabactive"
                    : "tab-swtch-bx"
                }
              >
                <div className="left-tab-icon left-tab-icon1">
                  <img src="./images/customImg/green-planet.gif" alt="" />
                </div>

                <div className="right-tab-info">
                  <h6>Eco system</h6>
                  <p>Revolutionizing Sustainability</p>
                </div>
              </div>

              <div
                onClick={() => handleFilter("walet")}
                className={
                  tab === "walet" ? "tab-swtch-bx tabactive" : "tab-swtch-bx"
                }
              >
                <div className="left-tab-icon left-tab-icon2">
                  <img src="./images/customImg/ewallet.gif" alt="" />
                </div>

                <div className="right-tab-info">
                  <h6>Waste to Wallet</h6>
                  <p>Leverage Your Waste to Build Wealth</p>
                </div>
              </div>

              <div
                onClick={() => handleFilter("waste")}
                className={
                  tab === "waste" ? "tab-swtch-bx tabactive" : "tab-swtch-bx"
                }
              >
                <div className="left-tab-icon">
                  <img src="./images/customImg/recycling-truck.gif" alt="" />
                </div>

                <div className="right-tab-info">
                  <h6>Start Your Waste SIP</h6>
                  <p>Small Steps, Big Impact</p>
                </div>
              </div>

              <div
                onClick={() => handleFilter("locat")}
                className={
                  tab === "locat" ? "tab-swtch-bx tabactive" : "tab-swtch-bx"
                }
              >
                <div className="left-tab-icon left-tab-icon3">
                  <img src="./images/customImg/home.gif" alt="" />
                </div>

                <div className="right-tab-info">
                  <h6>Locate kabadi</h6>
                  <p>Get easy notification for hassle free experience</p>
                </div>
              </div>
            </div>

            <div className="tab-view-main-bx">
              <div
                className={
                  tab === "ecosystem"
                    ? "tab-view-grd tabviewactive"
                    : "tab-view-grd"
                }
              >
                <div className="main-img-bx-tab">
                  <div className="left-tab-view-img">
                    <img src="./images/customImg/waste-img.jpg" alt="" />
                  </div>

                  <div className="buble-one"></div>
                  <div className="buble-one buble-two"></div>
                  <div className="buble-one buble-three"></div>
                  <div className="buble-one buble-four"></div>
                  <div className="buble-one buble-five"></div>
                </div>

                <div className="right-tab-info-bx">
                  <h5>
                    The New 3R Mantra <br /> Rethink, Rejuvenate, Resonate.
                  </h5>
                  <p>
                    Rethink your shopping habits with The Green Saman Shop's
                    array of eco-friendly products. Rejuvenate old materials
                    through innovative recycling solutions at Kabadpe, and
                    resonate with other climate enthusiasts, building a
                    community of change with ClimConnect.
                  </p>
                </div>
              </div>

              <div
                className={
                  tab === "walet"
                    ? "tab-view-grd tabviewactive"
                    : "tab-view-grd"
                }
              >
                <div className="main-img-bx-tab">
                  <div className="left-tab-view-img">
                    <img src="./images/customImg/waste-img-4.jpg" alt="" />
                  </div>

                  <div className="buble-one"></div>
                  <div className="buble-one buble-two"></div>
                  <div className="buble-one buble-three"></div>
                  <div className="buble-one buble-four"></div>
                  <div className="buble-one buble-five"></div>
                </div>

                <div className="right-tab-info-bx">
                  <h5>
                    Kabadpe's Innovative
                    <br /> 'Waste to Wallet'
                  </h5>
                  <p>
                    Accumulate Funds in Your Digital Wallet and Redeem Them for
                    Eco-Friendly Products, OTT Subscriptions, and Even Gold
                    Investments
                  </p>
                </div>
              </div>

              <div
                className={
                  tab === "waste"
                    ? "tab-view-grd tabviewactive"
                    : "tab-view-grd"
                }
              >
                <div className="main-img-bx-tab">
                  <div className="left-tab-view-img">
                    <img src="./images/customImg/waste-img-3.webp" alt="" />
                  </div>

                  <div className="buble-one"></div>
                  <div className="buble-one buble-two"></div>
                  <div className="buble-one buble-three"></div>
                  <div className="buble-one buble-four"></div>
                  <div className="buble-one buble-five"></div>
                </div>

                <div className="right-tab-info-bx">
                  <h5>
                    Ensuring Safety and <br /> Sustainability
                  </h5>
                  <p>
                    Choose Verified Waste Collectors and Sanitation Workers for
                    Responsible Recycling and a Healthier Planet
                  </p>
                </div>
              </div>

              <div
                className={
                  tab === "locat"
                    ? "tab-view-grd tabviewactive"
                    : "tab-view-grd"
                }
              >
                <div className="main-img-bx-tab">
                  <div className="left-tab-view-img">
                    <img src="./images/customImg/waste-img-2.jpg" alt="" />
                  </div>

                  <div className="buble-one"></div>
                  <div className="buble-one buble-two"></div>
                  <div className="buble-one buble-three"></div>
                  <div className="buble-one buble-four"></div>
                  <div className="buble-one buble-five"></div>
                </div>

                <div className="right-tab-info-bx">
                  <h5>
                    The Best Investment <br /> is Learn New Knowledge
                  </h5>
                  <p>
                    Rethink your shopping habits with The Green Saman Shop's
                    array of eco-friendly products. Rejuvenate old materials
                    through innovative recycling solutions at Kabadpe, and
                    resonate with other climate enthusiasts, building a
                    community of change with ClimConnect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ecosystem;
