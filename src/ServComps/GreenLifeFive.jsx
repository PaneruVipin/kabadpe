import React from 'react'
import { NavLink } from 'react-router-dom'

const GreenLifeFive = () => {
  return (
    <>
       <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5>Shop Green, Live Green</h5>
              <p>
              Start Your Sustainable Journey Today <br/>
              Browse our Green Life collection and make the switch to a more sustainable lifestyle. Every
green choice makes a difference!
              </p>

              <NavLink to="/contact" className="s-link-btn">
                Shop
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GreenLifeFive
