import React from 'react'
import { NavLink } from 'react-router-dom'

const ElectWasteCompFour = () => {
  return (
    <>
       <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Schedule Your E-Waste Pickup Today</h5>
              <p>
              Ready to dispose of your electronic waste responsibly? Schedule your e-
waste pickup with KabadPe now and join us in our mission for a greener,
cleaner world.
              </p>

              <NavLink to="#" className="s-link-btn">
                Scheduling
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ElectWasteCompFour
