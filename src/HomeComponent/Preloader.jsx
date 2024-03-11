import React, { useEffect } from "react";
import { Preloadergsap } from "./PreloaderGsap";
import { getFromLocalStorage, setInLocalStorage } from "../lib/localStorage";

const Preloader = () => {
  const isBeginner = () => {
    const beginner = !getFromLocalStorage("notbeginer");
    return beginner;
  };
  useEffect(() => {
    if (isBeginner()) {
      Preloadergsap();
    }
  }, []);
  return (
    <>
      {isBeginner() ? (
        <section className="preloader-comp">
          <div className="preloader-bx">
            <div className="preloader-logo">
              <img src="/images/customImg/loader-image.png" alt="" />
            </div>

            <div className="preloader-text">
              <div className="text-flex">
                <p> W</p>
                <p>E</p>
                <p>L</p>
                <p>C</p>
                <p>O</p>
                <p>M</p>
                <p>E</p>
              </div>
              <div className="text-flex">
                <p>T</p>
                <p>O</p>
              </div>

              <div className="text-flex">
                <p className="texthigh">K</p>
                <p className="texthigh">a</p>
                <p className="texthigh">b</p>
                <p className="texthigh">a</p>
                <p className="texthigh">d</p>
                <p className="texthigh">p</p>
                <p className="texthigh">e</p>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Preloader;
