import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutBanner = ({data}) => {
  return (
    <>

    <section className="banner-comp">
    <div className="comon-container-2">
        <div className="banner-main-bx">

            <div className="breadcrum-box">

                <h6> {data.title} </h6>
                <div className="link-redirect-flex-bx">

                    <NavLink to="/">Home </NavLink>

                    <span><i class="fa-solid fa-angle-right"></i></span>
                    
                    <NavLink to="/about"> {data.text}  </NavLink>
                    
                </div>
                
            </div>
            
        </div>
        </div>
    </section>
      
    </>
  )
}

export default AboutBanner
