import React from 'react'
import { NavLink } from 'react-router-dom'

const EprCompThree = ({lastData}) => {
  return (
    <>
       <section className="serv-three-comp serv-three-comp2" >
        <div className="comon-container-2">
          <div className="serv-list-grid-bx">
            <div className="left-serv-img-bx">
              <img src="/images/customImg/join-us.jpg" alt="" />
            </div>

            <div className="right-serv-info-bx">
              <h5 >{lastData.heading}</h5>
              <p>
             {lastData.para}
              </p>

              <NavLink to="/contact" className="s-link-btn">
                {lastData.link}
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EprCompThree
