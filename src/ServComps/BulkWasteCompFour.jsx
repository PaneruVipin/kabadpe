import React from 'react'
import { NavLink } from 'react-router-dom'

const BulkWasteCompFour = () => {
  return (
    <>
     <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Schedule Your Bulk Waste Pickup Today</h5>
              <p>
              Ready to clear out your bulk waste and earn rewards? Schedule your pickup
with KabadPe now and take a step towards a cleaner, greener environment.
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

export default BulkWasteCompFour
