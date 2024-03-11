import React from 'react'
import { NavLink } from "react-router-dom";

const WastesipCompTwo = () => {
  return (
    <>
       <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Join the Waste SIP Community</h5>
              <p>
              Be Part of the Change <br/>
              Sign up for Waste SIP today and start your journey towards a greener, cleaner planet.
              </p>

              <NavLink to="/contact" className="s-link-btn">
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WastesipCompTwo
