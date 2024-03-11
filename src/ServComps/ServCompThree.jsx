import React from "react";
import { NavLink } from "react-router-dom";

const ServCompThree = () => {
  return (
    <>
      <section className="serv-three-comp">
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Join Us in Making a Difference</h5>
              <p>
                Take the first step towards a greener future with Kabadpe.
                Contact us to explore how we can transform your community into a
                model of sustainability.
              </p>

              <NavLink to="/contact" className="s-link-btn">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServCompThree;
