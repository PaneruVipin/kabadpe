import React from 'react'
import { AdminWasteProdData } from '../Components/AdminWasteProdSlideData'

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
                            <div className="slide-bx">
                        <div className="slide-img">
                            <img src={elem.img} alt="" />
                        </div>
                        <h6> {elem.title} </h6>
                    </div>
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
