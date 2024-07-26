import React, { useState } from "react";
import FrenchRevDet from "../FrenchiesRevwDet";

const FrenchReview = () => {
  const [revwBx, setRevwBx] = useState(FrenchRevDet);
  return (
    <>
      <section className="french-rev-comp">
        <h6 className="title">Customer Reviews</h6>

        <div className="french-rev-grid">
          {revwBx.map((elem, id) => {
            return (
              <>
                <div className="review-box" key={id} id={elem.id}>
                  <div className="review-top-flex-box">
                    <div className="review-usr-img">
                      <img src={elem.revwImg} alt="" />
                    </div>

                    <div className="rview-det-box">
                      <h6> {elem.revwname} </h6>
                      <span> {elem.revwdate} </span>
                    </div>
                  </div>

                  <div className="rev-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>

                  <p>{elem.revwtext}</p>

                  <span className="apnt-text"> {elem.apntNo} </span>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FrenchReview;

//   <div className="stars-flex">
{
  /* <i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-regular fa-star"></i>
<i className="fa-regular fa-star"></i>
</div> */
}
