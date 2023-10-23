import React from "react";
import { NavLink } from "react-router-dom";
import "../style/AboutDet.css";
const AboutDet = () => {
  return (
    <>
      <section className="about-det-comp">
        <div className="about-container">
          <div className="about-det-text-bx">
            <div className="about-link-bx">
              <NavLink to="/">
                Home <span>/</span>
              </NavLink>
              <span>About Block 01</span>
            </div>
            <h3>About Us</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDet;
