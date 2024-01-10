import React from "react";
import AboutPoint from "./AboutData";

const AboutPointsComp = () => {
    
  return (
    <>
      <section className="about-pont-comp">
        <div className="comon-container-2">
          <div className="about-heading">
            <span>Micro Waste Collection</span>
            <h4>Every Bit Counts</h4>
          </div>

          <div className="about-point-grid-bx">

            {AboutPoint.map((curData,id) => {
                return (
                    <>
              <div key={id} className="about-point-bx">
              <h6> {curData.title} </h6>
              <p>
                {curData.text}
              </p>
            </div>
            
                    </>
                )
            })}
            
         
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPointsComp;
