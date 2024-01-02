import React, { useState } from "react";

const Ecosystem = () => {
    const [tab , setTab] = useState('ecosystem');

    const handleFilter = (getValue) => {

        setTab(getValue);
        
    }
    
  return (
    <>
      <section className="ecosystem-comp">
        <div className="comon-container-2 home-container">
          <div className="apnt-heading">
            <h3>Ecosystem</h3>
            <p>We are digitalising the old traditional system of kabad</p>
          </div>

          <div className="tab-sect">
            <div className="tab-swtich-grid-bx">
              <div onClick={() => handleFilter('ecosystem')} className={ tab === "ecosystem" ? "tab-swtch-bx tabactive" : "tab-swtch-bx"}>
                <div className="left-tab-icon">
                  <img src="./images/customImg/green-planet.gif" alt="" />
                </div>

                <div className="right-tab-info">
                  <h6>Eco system</h6>
                  <p>
                    Enjoy seamless experience into the world of eco-friendly
                    lifestyle
                  </p>
                </div>
              </div>

              <div onClick={() => handleFilter('walet')} className={ tab === "walet" ? "tab-swtch-bx tabactive" : "tab-swtch-bx"}>
                <div className="left-tab-icon left-tab-icon2">
                  <img src="./images/customImg/ewallet.gif" alt="" />
                </div>

                <div className="right-tab-info">
                  <h6>Wallet</h6>
                  <p>Waste to wealth becomes a reality</p>
                </div>
              </div>

              <div onClick={() => handleFilter('waste')} className= {tab === "waste" ? "tab-swtch-bx tabactive" : "tab-swtch-bx"}>
                <div className="left-tab-icon">
                  <img src="./images/customImg/recycling-truck.gif" alt="" />
                </div>

                <div className="right-tab-info">
                  <h6>Waste SIP</h6>
                  <p>Make home garbage free with daily pick-ups and tracking</p>
                </div>
              </div>

              <div onClick={() => handleFilter('locat')} className={tab === "locat" ? "tab-swtch-bx tabactive" : "tab-swtch-bx"}>
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

              <div className={ tab === "ecosystem" ? "tab-view-grd tabviewactive" : "tab-view-grd"}>
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
                  <h5>The Best Investment <br/> is Learn New Knowledge</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    eligendi nesciunt ratione. Ex vitae minima non aut aliquam
                    eligendi corporis, nulla hic mollitia, culpa assumenda .
                  </p>

                 
                </div>
              </div>

              <div className={ tab === "walet" ? "tab-view-grd tabviewactive" : "tab-view-grd"}>
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
                  <h5>The Best Investment <br/> is Learn New Knowledge</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    eligendi nesciunt ratione. Ex vitae minima non aut aliquam
                    eligendi corporis, nulla hic mollitia, culpa assumenda .
                  </p>

                
                </div>
              </div>


              <div className={ tab === "waste" ? "tab-view-grd tabviewactive" : "tab-view-grd"}>
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
                  <h5>The Best Investment <br/> is Learn New Knowledge</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    eligendi nesciunt ratione. Ex vitae minima non aut aliquam
                    eligendi corporis, nulla hic mollitia, culpa assumenda .
                  </p>

                 
                </div>
              </div>

              <div className={ tab === "locat" ? "tab-view-grd tabviewactive" : "tab-view-grd"}>
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
                  <h5>The Best Investment <br/> is Learn New Knowledge</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    eligendi nesciunt ratione. Ex vitae minima non aut aliquam
                    eligendi corporis, nulla hic mollitia, culpa assumenda .
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
