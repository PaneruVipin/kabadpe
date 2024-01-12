import React from "react";
import ServListData from "./ServData";

const ServCompTwo = () => {
  return (
    <>
      <section className="serv-comp-two">
        <div className="comon-container-2">
          <h6 className="s-text">What We Offer</h6>

          <div className="serv-grid-box">

            {ServListData.map((curelem,id) => {
                return (
                    <>
   <div className="serv-box" key={id}>
              <h6> {curelem.servtitle} </h6>
              <p>
                {curelem.servpara}
              </p>
              <span> {curelem.servmini} </span>
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

export default ServCompTwo;
