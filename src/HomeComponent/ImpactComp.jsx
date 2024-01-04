import React, { useEffect, useRef } from 'react'

const ImpactComp = () => {

    const numberObserver = useRef(null);

    useEffect(() => {
      const observerCallback = (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
  
        const animNumElements = document.querySelectorAll('.count');
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
  
      const animatedNumCount = document.querySelector('.animated-num-count-comp');
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
        <div className="comon-container-2">

            <div className="apnt-heading">
                <p>Sale Your Waste</p>
                <h3>Our Impact</h3>
            </div>


            <div className="imp-grid-bx ">

                <div className="imp-main">
                <div className="imp-bx">
                    <div className="imp-icon">
                        <img src="./images/customImg/imp-1.png" alt="" />
                    </div>
                </div>

                <div className="imp-info">
                    <h5 className='count' data-count="200">0</h5>
                    <p>KGS. OF PLASTIC WE SAVED</p>
                </div>
                
                </div>

                <div className="imp-main">
                <div className="imp-bx">
                    <div className="imp-icon imp-icon2">
                        <img src="./images/customImg/imp-2.png" alt="" />
                    </div>
                </div>

                <div className="imp-info">
                    <h5 className='count' data-count="40">0</h5>
                    <p>NO. OF TREE PLANTED </p>
                </div>
                
                </div>

                <div className="imp-main">
                <div className="imp-bx">
                    <div className="imp-icon imp-icon3">
                        <img src="./images/customImg/imp-3.png" alt="" />
                    </div>
                </div>

                <div className="imp-info">
                    <h5 className='count' data-count="1200">0</h5>
                    <p>KGS. OF CO2 OFFSET </p>
                </div>
                
                </div>

                <div className="imp-main">
                <div className="imp-bx">
                    <div className="imp-icon imp-icon4">
                        <img src="./images/customImg/imp-4.png" alt="" />
                    </div>
                </div>

                <div className="imp-info">
                    <h5 className='count' data-count="450">0</h5>
                    <p>KGS. OF PLASTIC RECYCLED </p>
                </div>
                
                </div>

                <div className="imp-main">
                <div className="imp-bx">
                    <div className="imp-icon imp-icon5">
                        <img src="./images/customImg/imp-5.png" alt="" />
                    </div>
                </div>

                <div className="imp-info">
                    <h5 className='count' data-count="318">0</h5>
                    <p>PEOPLE MADE AWARE ON CLIMATE CHANGE </p>
                </div>
                
                </div>
                
            </div>
            
            {/* <div className="animated-num-count-comp">
      <div className="count" data-count="100">0</div>
      <div className="count" data-count="250">0</div>
    </div> */}
            
        </div>
    </section>
      
    </>
  )
}

export default ImpactComp
