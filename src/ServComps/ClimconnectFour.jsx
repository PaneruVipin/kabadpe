import React from 'react'
import { NavLink } from 'react-router-dom'

const ClimconnectFour = () => {
  return (
    <>
         <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Contact Us</h5>
              <span>We&#39;re Here to Connect You to the Earth</span>
              <p>
              Have questions or suggestions? Reach out to us and join the conversation in making a
difference.
              </p>

              <NavLink to="/contact" className="s-link-btn">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClimconnectFour