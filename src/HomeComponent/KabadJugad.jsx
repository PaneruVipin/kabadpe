import React from "react";

const KabadJugad = () => {
  return (
    <>
      <section className="kabad-jugad-comp">
        <div className="comon-container-2">
          <div className="apnt-heading">
            <p>Ecosystem</p>
            <h3>Circular life</h3>
          </div>

          <div className="kabad-jugad-grid-bx">
            <div className="left-kabad-img-bx">
              <img src="/images/customImg/eco-sys-img.png" alt="" />
            </div>

            <div className="right-kabad-grid-bx">
              <div className="kabad-info-bx">
                <div className="k-icon k-icon2">
                  <img src="/images/customImg/kabadpe-logo.jpg" alt="" />
                </div>
                <div className="kabad-det">
                  <h6>Kabadpe</h6>
                  <p>
                    An easy way to manage your home waste, with safe, reliable
                    and traceable system.
                  </p>

                  <button className="read-mre-btn">Read More</button>
                </div>
              </div>

              <div className="kabad-info-bx">
                <div className="k-icon">
                  <img src="/images/customImg/tgss-logo.jpg" alt="" />
                </div>
                <div className="kabad-det">
                  <h6>The green saman shop</h6>
                  <p>
                    Green living made simple, enjoy eco-friendly products for
                    daily needs.
                  </p>
                  <button className="read-mre-btn">Read More</button>
                </div>
              </div>

              <div className="kabad-info-bx">
                <div className="k-icon">
                  <img src="/images/customImg/climconnect-logo.jpg" alt="" />
                </div>
                <div className="kabad-det">
                  <h6>Climconnect</h6>
                  <p>
                    Become a climate Warrier, raise your voice and let people
                    know your climate contribution
                  </p>
                  <button className="read-mre-btn">Read More</button>
                </div>
              </div>

              <div className="kabad-info-bx">
                <div className="k-icon">
                  <img src="/images/customImg/eco-icon4.png" alt="" />
                </div>
                <div className="kabad-det">
                  <h6>Waste resource hub</h6>
                  <p>
                    Need waste related solutions, find best solution to combat
                    waste problems.
                  </p>
                  <button className="read-mre-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KabadJugad;
