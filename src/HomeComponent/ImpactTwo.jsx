import React, { useEffect, useRef } from 'react'

const ImpactTwo = () => {

    // const numberObserver = useRef(null);

    // useEffect(() => {
    //   const observerCallback = (entries, observer) => {
    //     const [entry] = entries;
    //     if (!entry.isIntersecting) return;
  
    //     const animNumElements = document.querySelectorAll('.count');
    //     const speed = 2;
  
    //     animNumElements.forEach((myCount) => {
    //       const targetCount = myCount.dataset.count;
    //       let currCount = +myCount.innerText;
    //       const newSpeed = Math.floor(targetCount / speed);
  
    //       const updateNumber = () => {
    //         currCount += newSpeed;
    //         myCount.innerText = currCount;
  
    //         if (currCount < targetCount) {
    //           setTimeout(updateNumber, 90);
    //         }
    //       };
  
    //       updateNumber();
    //     });
  
    //     observer.unobserve(entry.target);
    //   };
  
    //   numberObserver.current = new IntersectionObserver(observerCallback, {
    //     root: null,
    //     threshold: 0,
    //   });
  
    //   const animatedNumCount = document.querySelector('.our-imp-two');
    //   numberObserver.current.observe(animatedNumCount);
  
    //   return () => {
    //     if (numberObserver.current) {
    //       numberObserver.current.disconnect();
    //     }
    //   };
    // }, []);
    
  return (
    <>



     
      
    </>
  )
}

export default ImpactTwo
