import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Review = () => {
  const left_Arr = `<i class="fa-solid fa-angle-left"></i>`;
  const right_Arr = `<i class="fa-solid fa-angle-right"></i>`;

  const options = {
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: [left_Arr, right_Arr],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };

  return (
    <>
      <section className="review-comp">
        <div className="comon-container-2">
          <div className="apnt-heading">
            <p>Our Reviews</p>
            <h3>What Our Customer Say</h3>
          </div>
          <OwlCarousel className="owl-theme review-slider" {...options}>
            <div class="item">
              <div className="review-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere mollitia sint tenetur, ut voluptate officiis sit est
                  eligendi? Magnam, neque .
                </p>

                <div className="cust-flex-bx">
                  <div className="cut-img">
                    <img src="/images/customImg/team-3.jpg" alt="" />
                  </div>
                  <div className="cust-info">
                    <h6>Adam Vathan</h6>
                    <span>Customer</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div className="review-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere mollitia sint tenetur, ut voluptate officiis sit est
                  eligendi? Magnam, neque .
                </p>

                <div className="cust-flex-bx">
                  <div className="cut-img">
                    <img src="/images/customImg/team-3.jpg" alt="" />
                  </div>
                  <div className="cust-info">
                    <h6>Adam Vathan</h6>
                    <span>Customer</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div className="review-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere mollitia sint tenetur, ut voluptate officiis sit est
                  eligendi? Magnam, neque .
                </p>

                <div className="cust-flex-bx">
                  <div className="cut-img">
                    <img src="/images/customImg/team-3.jpg" alt="" />
                  </div>
                  <div className="cust-info">
                    <h6>Adam Vathan</h6>
                    <span>Customer</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div className="review-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere mollitia sint tenetur, ut voluptate officiis sit est
                  eligendi? Magnam, neque .
                </p>

                <div className="cust-flex-bx">
                  <div className="cut-img">
                    <img src="/images/customImg/team-3.jpg" alt="" />
                  </div>
                  <div className="cust-info">
                    <h6>Adam Vathan</h6>
                    <span>Customer</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div className="review-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere mollitia sint tenetur, ut voluptate officiis sit est
                  eligendi? Magnam, neque .
                </p>

                <div className="cust-flex-bx">
                  <div className="cut-img">
                    <img src="/images/customImg/team-3.jpg" alt="" />
                  </div>
                  <div className="cust-info">
                    <h6>Adam Vathan</h6>
                    <span>Customer</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item">
              <div className="review-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere mollitia sint tenetur, ut voluptate officiis sit est
                  eligendi? Magnam, neque .
                </p>

                <div className="cust-flex-bx">
                  <div className="cut-img">
                    <img src="/images/customImg/team-3.jpg" alt="" />
                  </div>
                  <div className="cust-info">
                    <h6>Adam Vathan</h6>
                    <span>Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  );
};

export default Review;
