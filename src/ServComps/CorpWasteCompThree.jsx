import React from 'react'
import { NavLink } from 'react-router-dom'

const CorpWasteCompThree = () => {
  return (
    <>
      <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Get Started with KabadPe</h5>
              <p>
              Ready to transform your business’s approach to waste management? Contact
us today to learn more about how KabadPe can assist your business in
achieving its sustainability goals.
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

export default CorpWasteCompThree
