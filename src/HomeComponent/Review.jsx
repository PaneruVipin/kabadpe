import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ImQuotesRight } from "react-icons/im";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const Review = () => {
  // const left_Arr = `<i class="fa-solid fa-angle-left"></i>`;
  // const right_Arr = `<i class="fa-solid fa-angle-right"></i>`;

  // const options = {
  //   loop: true,
  //   margin: 30,
  //   nav: true,
  //   dots: false,
  //   autoplay: true,
  //   autoplayTimeout: 2000,
  //   navText: [left_Arr, right_Arr],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //     1400: {
  //       items: 4,
  //     },
  //   },
  // };

  useEffect(() => {
    const servSliders = document.querySelectorAll(".review-slider");

    const sliderInit = function (currentSlider) {
      const prevslideBtn = currentSlider.querySelector(".prev-slider-btn");
      const nextslideBtn = currentSlider.querySelector(".next-slider-btn");
      const servSliderContainer = currentSlider.querySelector(
        ".revw-silder-containr-bx"
      );

      const totalSliderVisibleItems = Number(
        getComputedStyle(currentSlider).getPropertyValue("--slider-items")
      );
      const totalSliderItems =
        servSliderContainer.childElementCount - totalSliderVisibleItems;
      let currentSliderPos = 0;

      const sliderservNext = function () {
        currentSliderPos++;
        moveSlider();
      };

      const sliderservPrev = function () {
        currentSliderPos--;
        moveSlider();
      };

      const moveSlider = function () {
        servSliderContainer.style.transform = `translateX(-${servSliderContainer.children[currentSliderPos].offsetLeft}px)`;
        if (currentSliderPos >= totalSliderItems) {
          nextslideBtn.classList.add("hiddenBtn");
        } else {
          nextslideBtn.classList.remove("hiddenBtn");
        }
        if (currentSliderPos <= 0) {
          prevslideBtn.classList.add("hiddenBtn");
        } else {
          prevslideBtn.classList.remove("hiddenBtn");
        }
      };

      nextslideBtn.addEventListener("click", sliderservNext);
      prevslideBtn.addEventListener("click", sliderservPrev);

      const autoplayInterval = setInterval(() => {
        currentSliderPos++;
        if (currentSliderPos > totalSliderItems) {
          currentSliderPos = 0;
        }
        moveSlider();
      }, 6000); // Adjust the autoplay interval as needed

      // Clean up function to clear interval on component unmount
      return () => clearInterval(autoplayInterval);
    };

    for (let i = 0; i < servSliders.length; i++) {
      sliderInit(servSliders[i]);
    }
  }, []);

  return (
    <>
      <section className="review-comp">
        <div className="comon-container-2">
          <div className="cust-revw-grid-bx">
            <div className="left-revw-info-bx">
              <div className="quote-flex-bx">
                <div className="quote-bx">
                  <ImQuotesRight className="quote-icon" />
                </div>
                <h5> Feedback</h5>
              </div>
              <h4>Trusted By Genius People.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                reiciendis tenetur debitis consequatur.
              </p>

              <div className="revw-percent-flex">
                <span>Student's complete course successfully.</span>
              </div>
            </div>

            <div className="right-review-slider-main">
              <div className="review-slider">
                <div className="revw-silder-containr-bx">

                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/user-prf-img.webp" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/team-3.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/testi-thumb-2.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/team-2.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/test-img-1.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/user-prf-img.webp" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/team-3.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/testi-thumb-2.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/team-2.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="slider-items">
                    <div className="revw-box">
                      <div className="revw-left-img">
                        <img src="/images/customImg/test-img-1.jpg" alt="" />
                      </div>
                      <div className="revw-info-bx">
                        <div className="revw-ratng">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quaerat cumque commodi dolore expedita, itaque
                          enim officia a, laudantium fugit.
                        </p>

                        <div className="revw-name-info">
                          <h6>Andrew Garfield</h6>
                          <span>Network Security</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="revw-slider-btns-flex">

                  <button className="revw-slider-btns hiden-btn slider-control prev-slider-btn">
                  <ion-icon name="chevron-back-outline"></ion-icon>
                  </button>

                  
                  <button className="revw-slider-btnss hiden-btn slider-control next-slider-btn">
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                  </button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
