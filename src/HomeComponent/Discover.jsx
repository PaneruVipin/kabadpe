import React from "react";
import { NavLink } from "react-router-dom";

const Discover = () => {

  return (
    <>
      <section className="question-comp">
        <div className="comon-container-2">
          <div className="quest-flex-bx">
            <div className="left-quest-bx">
              <div className="call">
                <i class="fa-solid fa-phone-volume"></i>
              </div>

              <div className="quest-text apnt-heading">
                <p >Have any questions?</p>
                <h6>+91 88002 09988</h6>
              </div>
            </div>

            <div className="right-quest-bx">
              <p>
              Have a specific query? Contact us through the form
              </p>

        <NavLink to="/contact">
              <button className="disc-btn">
                Contact Us
              </button>
              </NavLink>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
