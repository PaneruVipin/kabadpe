import React, { useEffect } from "react";
import { WasteData } from "./WasteData";
import { NavLink } from "react-router-dom";

const InfiniteSliderWaste = () => {

  useEffect(() => {
    const servSlider = document.querySelectorAll(".infinite-slide-container");

    const sliderInit = function (currentSlider) {
      const prevslideBtn = currentSlider.querySelector(".prev-btn");
      const nextslideBtn = currentSlider.querySelector(".next-btn");
      const servSliderContainer = currentSlider.querySelector(
        ".infnte-slide-waste-main"
      );

      const totalSliderVisibleItems = Number(
        getComputedStyle(currentSlider).getPropertyValue("--slider-item")
      );
      const totalSliderItems =
        servSliderContainer.childElementCount - totalSliderVisibleItems;
        let currentSliderPos = 0;

      const sliderservNext = function () {

        currentSliderPos++;

        if (currentSliderPos >= totalSliderItems) {
          currentSliderPos = 0; // Reset to the first slide
        }

        servSliderContainer.style.transform = `translateX(-${servSliderContainer.children[currentSliderPos].offsetLeft}px)`;
          if (currentSliderPos >= totalSliderItems) {
            nextslideBtn.classList.add("hiddenBtn");
          }
          prevslideBtn.classList.remove("hiddenBtn");
   
      };

      nextslideBtn.addEventListener("click", sliderservNext);

      const sliderservPrev = function () {

        currentSliderPos--;

        if (currentSliderPos < 0) {
          currentSliderPos = totalSliderItems - 1; // Go to the last slide
        }

        servSliderContainer.style.transform = `translateX(-${servSliderContainer.children[currentSliderPos].offsetLeft}px)`;
        if (currentSliderPos <= 0) {
              prevslideBtn.classList.add("hiddenBtn");
            }
            nextslideBtn.classList.remove("hiddenBtn");
        
      
      };

      prevslideBtn.addEventListener("click", sliderservPrev);

       // Autoplay functionality
     let intervalId = null;
     const autoplayInterval = 3000; // Adjust autoplay interval as needed (in milliseconds)

     const startAutoplay = () => {
       intervalId = setInterval(sliderservNext, autoplayInterval);
     };

     const stopAutoplay = () => {
       clearInterval(intervalId);
     };

     currentSlider.addEventListener('mouseenter', stopAutoplay);
     currentSlider.addEventListener('mouseleave', startAutoplay);

     startAutoplay(); // Start autoplay initially
      
    };

    

    for (let i = 0; i < servSlider.length; i++) {
      sliderInit(servSlider[i]);
    }
  }, []);
  
  return (
    <>
      <section className="infinte-slider-waste-comp">
        <div className="comon-container-2 home-container">
          <div className="infinite-slider-grid">
            <div className="infinite-slide-container">
          <div className="infnte-slide-waste-main">
              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx">
                    <div className="slide-img">
                      <img src="/images/contribution/paper-stack.png" alt="" />
                    </div>
                  </div>
                  <h6> Paper</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx2">
                    <div className="slide-img">
                      <img src="/images/contribution/plastic.png" alt="" />
                    </div>
                  </div>
                  <h6> Plastic</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/garbage.png" alt="" />
                    </div>
                  </div>
                  <h6>Others</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx3">
                    <div className="slide-img">
                      <img src="/images/contribution/laundry.png" alt="" />
                    </div>
                  </div>
                  <h6> Clothes</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx4">
                    <div className="slide-img">
                      <img src="/images/contribution/vehi-cle.png" alt="" />
                    </div>
                  </div>
                  <h6> Vehicle</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx5">
                    <div className="slide-img">
                      <img src="/images/contribution/wood.png" alt="" />
                    </div>
                  </div>
                  <h6> Wood</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/bottle.png" alt="" />
                    </div>
                  </div>
                  <h6> Glass</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx7">
                    <div className="slide-img">
                      <img src="/images/contribution/metal.png" alt="" />
                    </div>
                  </div>
                  <h6> Metal</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/ewaste.png" alt="" />
                    </div>
                  </div>
                  <h6> E-waste</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx">
                    <div className="slide-img">
                      <img src="/images/contribution/paper-stack.png" alt="" />
                    </div>
                  </div>
                  <h6> Paper</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx2">
                    <div className="slide-img">
                      <img src="/images/contribution/plastic.png" alt="" />
                    </div>
                  </div>
                  <h6> Plastic</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx3">
                    <div className="slide-img">
                      <img src="/images/contribution/laundry.png" alt="" />
                    </div>
                  </div>
                  <h6> Clothes</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx4">
                    <div className="slide-img">
                      <img src="/images/contribution/vehi-cle.png" alt="" />
                    </div>
                  </div>
                  <h6> Vehicle</h6>
                </div>
              </NavLink>
              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/garbage.png" alt="" />
                    </div>
                  </div>
                  <h6>Others</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx5">
                    <div className="slide-img">
                      <img src="/images/contribution/wood.png" alt="" />
                    </div>
                  </div>
                  <h6> Wood</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/bottle.png" alt="" />
                    </div>
                  </div>
                  <h6> Glass</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx7">
                    <div className="slide-img">
                      <img src="/images/contribution/metal.png" alt="" />
                    </div>
                  </div>
                  <h6> Metal</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/ewaste.png" alt="" />
                    </div>
                  </div>
                  <h6> E-waste</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx">
                    <div className="slide-img">
                      <img src="/images/contribution/paper-stack.png" alt="" />
                    </div>
                  </div>
                  <h6> Paper</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx2">
                    <div className="slide-img">
                      <img src="/images/contribution/plastic.png" alt="" />
                    </div>
                  </div>
                  <h6> Plastic</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/ewaste.png" alt="" />
                    </div>
                  </div>
                  <h6> E-waste</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx3">
                    <div className="slide-img">
                      <img src="/images/contribution/laundry.png" alt="" />
                    </div>
                  </div>
                  <h6> Clothes</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx4">
                    <div className="slide-img">
                      <img src="/images/contribution/vehi-cle.png" alt="" />
                    </div>
                  </div>
                  <h6> Vehicle</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx5">
                    <div className="slide-img">
                      <img src="/images/contribution/wood.png" alt="" />
                    </div>
                  </div>
                  <h6> Wood</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/bottle.png" alt="" />
                    </div>
                  </div>
                  <h6> Glass</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx7">
                    <div className="slide-img">
                      <img src="/images/contribution/metal.png" alt="" />
                    </div>
                  </div>
                  <h6> Metal</h6>
                </div>
              </NavLink>

              <NavLink to="" className="slide-itm">
                <div className="slide-main">
                  <div className="slide-bx slide-bx6">
                    <div className="slide-img">
                      <img src="/images/contribution/garbage.png" alt="" />
                    </div>
                  </div>
                  <h6>Others</h6>
                </div>
              </NavLink>
            
            </div>

            <div className="slide-btn-inf next-btn">
            <ion-icon name="chevron-forward-sharp"></ion-icon>
            </div>
            <div className="slide-btn-inf prev-btn">
            <ion-icon name="chevron-back-sharp"></ion-icon>
            </div>
            
            </div>
          </div>
          <NavLink to="/ratelist" className="check-rate-btn">
            Check Today's Rate <i class="fa-solid fa-chevron-right"></i>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default InfiniteSliderWaste;
