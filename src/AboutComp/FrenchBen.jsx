import React from "react";
import { NavLink } from "react-router-dom";

const FrenchBen = () => {
  return (
    <>
      <section className="french-benf-comp">
        <div className="comon-container-2">
          <div className="french-benf-grid">
            <div className="left-french-benf-img-bx">
              <img src="./images/customImg/about-img-4.png" alt="" />
            </div>

            <div className="right-french-benf-info">
              <h4>Frenchise Benefits</h4>

              <div className="french-benf-points-list">
                <div className="french-benf-pnt">
                  <h6>Exclusive Territory Rights</h6>
                  <p>
                    Operate in your own exclusive territory, ensuring a
                    dedicated market for your services.
                  </p>
                </div>

                <div className="french-benf-pnt">
                  <h6>Technology and Systems</h6>
                  <p>
                    Gain access to our state-of-the-art technology and efficient
                    waste management systems.
                  </p>
                </div>

                <div className="french-benf-pnt">
                  <h6>Marketing and Branding</h6>
                  <p>
                    Benefit from our established brand presence and
                    comprehensive marketing strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="full-width-img-bx mt-5">
            <img src="./images/customImg/about-img-5.png" alt="" />
          </div> */}

          <div className="who-can-join-sec">
            <h6>Who Can Join ?</h6>

            <div className="who-can-join-grid-bx">
                <div className="left-join-list">
              <div className="join-list-bx">
                <h6>Entrepreneurs with a Vision</h6>
                <p>
                  If you are an entrepreneur who shares our vision for a
                  sustainable future, we want you.
                </p>
              </div>

              <div className="join-list-bx">
                <h6>Commitment to Sustainability</h6>
                <p>
                  We are looking for partners who are committed to environmental
                  stewardship and community service.
                </p>
              </div>
              </div>

              <div className="right-cont-link-bx">
                    <h6>Contact Us to Learn More</h6>
                <p>
Interested in becoming a KabadPe franchisee? Contact us today to learn more about this
exciting opportunity and take the first step towards a rewarding entrepreneurial journey.</p>

            <NavLink to="/contact">Contact Us</NavLink>
                
              </div>
              
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default FrenchBen;
