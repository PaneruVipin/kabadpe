import React from "react";
// import DataSlider from "../dataSlider";


const HomeSlider = () => {

    // const [slideIndex , setSlideIndex] = useState(1);

    // const nextSlide = () => {

    //     if(slideIndex !== DataSlider.length){
    //         setSlideIndex(slideIndex + 1);
    //     }else if(slideIndex === DataSlider.length){
    //         setSlideIndex(1);

    //     }
        
    // }


    // const prevSlide = () => {

    //     if(slideIndex !== 1 ){
    //         setSlideIndex(slideIndex - 1);
    //     }else if(slideIndex === 1 ){
    //         setSlideIndex(DataSlider.length);

    //     }
        
    // }

  
    
  return (
    <>
      <section className="home-video-comp">
    <div className="auto-container video-cont">
        <div className="hero-text-info-bx ">
          <h1>Faltu ke Kharche <br/>
          Faltu Ke Kabad Se
          </h1>
          <button>Sell Waste</button>

          <div className="arrow-tall-bx">
          <i class="fa-solid fa-angles-down"></i>
          </div>
          
        </div>
        </div>
          <video className="home-video"  loop muted plays-inline autoplay='autoplay'>
            <source src="/images/customImg/waste-video.mp4" type="video/mp4" />
          </video>
      </section>

      

    </>
  );
};

export default HomeSlider;
