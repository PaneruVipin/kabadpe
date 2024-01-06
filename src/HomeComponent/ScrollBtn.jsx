import React, { useEffect, useState } from "react";

const ScrollBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // console.log('====================================');
    // console.log("hello Scroll");
    // console.log('====================================');
  };

  const listenScroll = () => {
    let heightHidden = 300;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll, true);
  }, []);

  return (
    <>
      <section className="scroll-top-comp">
        <div
          className={
            isVisible ? "scroll-top-btun scrolactive" : "scroll-top-btun"
          }
          onClick={() => gotoTop()}
        >
          <i className="fa-solid fa-arrow-up-long"></i>
        </div>
      </section>
    </>
  );
};

export default ScrollBtn;
