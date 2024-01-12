import React, { useState } from "react";
import DataSlider from "../dataSlider";


const HomeSlider = () => {

    const [slideIndex , setSlideIndex] = useState(1);

    const nextSlide = () => {

        if(slideIndex !== DataSlider.length){
            setSlideIndex(slideIndex + 1);
        }else if(slideIndex === DataSlider.length){
            setSlideIndex(1);

        }
        
    }


    const prevSlide = () => {

        if(slideIndex !== 1 ){
            setSlideIndex(slideIndex - 1);
        }else if(slideIndex === 1 ){
            setSlideIndex(DataSlider.length);

        }
        
    }

  
    
  return (
    <>
      <section className="home-slider-comp">
        <div className="home-shadow-bx"></div>
        <div className="home-shadow-bx2"></div>

        <div className="home-slide-container">
          <div className="comon-container-2 home-container ">
            <div className="home-slider-main ">
              {DataSlider.map((elem, index) => {
                return (
                  <>
                    <div key={elem.id} className={ slideIndex === index + 1 ? "home-slider-main-bx homeactive" : "home-slider-main-bx"}>
                      <div className="left-home-main">
                      <div className="left-home-info-bx">
                        <h1>
                          {elem.headingone}
                        </h1>
                        <h2>{elem.headingtwo}</h2>
                    
                        <p>
                            {elem.para}
                        </p>

                        <div className="home-btn-flex-bx">
                          <button className="home-btn">
                            {elem.buttonone}
                          </button>
                         { elem.buttontype === "two" ? <button className="home-btn home-btn2">
                            {elem.buttontwo}
                          </button> : null}
                        </div>
                      </div>
                      </div>

                      <div className="right-home-slide-img-bx">
                        <img
                          src={elem.img}
                          alt=""
                        />
                      </div>
                    </div>
                  </>
                );
              })}

             
            </div>
          </div>

          <div className="home-slider-cont-btns">
            <div className="home-slidr-btn prev-btn" onClick={() => prevSlide()}>
              <i class="fa-solid fa-angle-left"></i>
            </div>
            <div className="home-slidr-btn next-btn" onClick={() => nextSlide()}>
              <i class="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </section>

      

    
      
    </>
  );
};

export default HomeSlider;
