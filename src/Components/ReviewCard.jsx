import React, { useState } from "react";

const ReviewCard = ({ cards }) => {
  const [displayCard, setDisplayCard] = useState(8);

  const handleViewMore = () => {
    setDisplayCard(displayCard + 8);
  };

  return (
    <>
      <div className="review-grid">
        {cards.slice(0, displayCard).map((elem, id) => {
          return (
            <>
              <div className="review-box">
                <div className="review-top-flex-box" key={id} id={elem.id}>
                  <div className="review-usr-img">
                    <img src={elem.img} alt="" />
                  </div>

                  <div className="rview-det-box">
                    <h6> {elem.name} </h6>
                    <span> {elem.date} </span>
                  </div>
                </div>

                <div className="rev-rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>

                <p>{elem.para}</p>
              </div>
            </>
          );
        })}
      </div>

      {displayCard < cards.length && (
        <button onClick={handleViewMore} className="view-more">
          View More
        </button>
      )}
    </>
  );
};

export default ReviewCard;
