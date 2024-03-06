import React from 'react'
import { AdminWasteProdData } from '../Components/AdminWasteProdSlideData'
import { NavLink } from 'react-router-dom'

const InfiniteSliderWaste = () => {
  return (
    <>

    <section className="infinte-slider-waste-comp">
        <div className="comon-container-2 home-container">

            <div className="infnte-slide-waste-main">

                <div className="slider-track">
                    {AdminWasteProdData.map((elem,id) => {
                        return (
                            <>
                            <NavLink to="">
                            <div className="slide-bx">
                        <div className="slide-img">
                            <img src={elem.img} alt="" />
                        </div>
                        <h6> {elem.title} </h6>
                        <NavLink to="" className='check-rate-btn'> Check Today's Rate </NavLink>
                    </div>
                    </NavLink>
                            </>
                        )
                    })}
                    
                    
                </div>
               
            </div>
            
        </div>
    </section>
      
    </>
  )
}

export default InfiniteSliderWaste
