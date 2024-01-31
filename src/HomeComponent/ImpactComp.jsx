import React, { useEffect, useRef } from "react";
import ImpactTwo from "./ImpactTwo";

const ImpactComp = () => {
  const numberObserver = useRef(null);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const animNumElements = document.querySelectorAll(".count");
      const speed = 20;

      animNumElements.forEach((myCount) => {
        const targetCount = myCount.dataset.count;
        let currCount = +myCount.innerText;
        const newSpeed = Math.floor(targetCount / speed);

        const updateNumber = () => {
          currCount += newSpeed;
          myCount.innerText = currCount;

          if (currCount < targetCount) {
            setTimeout(updateNumber, 90);
          }
        };

        updateNumber();
      });

      observer.unobserve(entry.target);
    };

    numberObserver.current = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
    });

    const animatedNumCount = document.querySelector(".animated-num-count-comp");
    numberObserver.current.observe(animatedNumCount);

    return () => {
      if (numberObserver.current) {
        numberObserver.current.disconnect();
      }
    };
  }, []);

  return (
    <>
      <section className="impact-comp animated-num-count-comp">
        <div className="comon-container-2 imp-container">
          <div className="apnt-heading">
            <p>Small Step</p>
            <h3>Big Impact</h3>
          </div>

          <div className="imp-grid-bx ">
            <div className="imp-main">
              <div className="imp-bx">
                <div className="imp-icon">
                  <img src="/images/customImg/imp-1.png" alt="" />
                </div>
              </div>

              <div className="imp-info">
                <h5 className="count" data-count="200">
                  0
                </h5>
                <p>KGS. OF PLASTIC WE SAVED</p>
              </div>
            </div>

            <div className="imp-main">
              <div className="imp-bx">
                <div className="imp-icon imp-icon2">
                  <img src="/images/customImg/imp-2.png" alt="" />
                </div>
              </div>

              <div className="imp-info">
                <h5 className="count" data-count="40">
                  0
                </h5>
                <p>NO. OF TREE PLANTED </p>
              </div>
            </div>

            <div className="imp-main">
              <div className="imp-bx">
                <div className="imp-icon imp-icon3">
                  <img src="/images/customImg/imp-3.png" alt="" />
                </div>
              </div>

              <div className="imp-info">
                <h5 className="count" data-count="1200">
                  0
                </h5>
                <p>KGS. OF CO2 OFFSET </p>
              </div>
            </div>

            <div className="imp-main">
              <div className="imp-bx">
                <div className="imp-icon imp-icon4">
                  <img src="/images/customImg/imp-4.png" alt="" />
                </div>
              </div>

              <div className="imp-info">
                <h5 className="count" data-count="450">
                  0
                </h5>
                <p>KGS. OF PLASTIC RECYCLED </p>
              </div>
            </div>

            <div className="imp-main">
              <div className="imp-bx">
                <div className="imp-icon imp-icon5">
                  <img src="/images/customImg/imp-5.png" alt="" />
                </div>
              </div>

              <div className="imp-info">
                <h5 className="count" data-count="318">
                  0
                </h5>
                <p>PEOPLE MADE AWARE ON CLIMATE CHANGE </p>
              </div>
            </div>

              <div className="imp-main imp-main4">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font imp-icon5">
                  <i class="fa-solid fa-droplet"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5> 13.8 </h5>
                <p> Cr. Litres of Water Saved </p>
              </div>
            </div>

            <div className="imp-main imp-main4">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font2 imp-icon5">
                  <i class="fa-solid fa-bolt-lightning"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5>5.65</h5>
                <p> KWH Of Electricity Saved </p>
              </div>
            </div>

            <div className="imp-main imp-main4">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font2 imp-icon-i-font3 imp-icon5">
                  <i class="fa-solid fa-bottle-droplet"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5>2.5</h5>
                <p> Lakhs Litres of Oil Saved</p>
              </div>
            </div>

            <div className="imp-main imp-main4">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font2 imp-icon-i-font4 imp-icon-i-font3 imp-icon5">
                  <i class="fa-brands fa-pagelines"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5>10.24</h5>
                <p>Th. Number Of Tree Saved</p>
              </div>
            </div>

          </div>

          {/* <div className="imp-grid-bx-2">

            <div className="imp-main">
                <div className="imp-bx">
                    <div className="imp-icon imp-icon5">
                        <img src="/images/customImg/imp-5.png" alt="" />
                    </div>
                </div>

                <div className="imp-info">
                    <h5 className='count' data-count="318">0</h5>
                    <p>PEOPLE MADE AWARE ON CLIMATE CHANGE </p>
                </div>
                
                </div>
              
            </div> */}

          {/* <div className="animated-num-count-comp">
      <div className="count" data-count="100">0</div>
      <div className="count" data-count="250">0</div>
    </div> */}

          {/* <ImpactTwo /> */}

          <div className="our-imp-two">
            <div className="imp-main imp-main3">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font imp-icon5">
                  <i class="fa-solid fa-droplet"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5> 13.8 </h5>
                <p> Cr. Litres of Water Saved </p>
              </div>
            </div>

            <div className="imp-main imp-main3">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font2 imp-icon5">
                  <i class="fa-solid fa-bolt-lightning"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5>5.65</h5>
                <p> KWH Of Electricity Saved </p>
              </div>
            </div>

            <div className="imp-main imp-main3">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font2 imp-icon-i-font3 imp-icon5">
                  <i class="fa-solid fa-bottle-droplet"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5>2.5</h5>
                <p> Lakhs Litres of Oil Saved</p>
              </div>
            </div>

            <div className="imp-main imp-main3">
              <div className="imp-bx">
                <div className="imp-icon imp-icon-i-font2 imp-icon-i-font4 imp-icon-i-font3 imp-icon5">
                  <i class="fa-brands fa-pagelines"></i>
                </div>
              </div>

              <div className="imp-info">
                <h5>10.24</h5>
                <p>Th. Number Of Tree Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactComp;
