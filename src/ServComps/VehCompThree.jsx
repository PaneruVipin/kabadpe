import React from 'react'
import { NavLink } from 'react-router-dom'

const VehCompThree = () => {
  return (
    <>
       <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Schedule Your Service Now</h5>
              <p>
              Ready to dispose of your old vehicle in an eco-friendly way? Schedule your
vehicle scrapping with KabadPe today and take a step towards a sustainable
future.
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

export default VehCompThree
