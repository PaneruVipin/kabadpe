import React, { useState } from "react";

const ReviewPopup = ({ onclickRevPopupClose }) => {
  const [selectedStars, setSelectedStars] = useState(Array(5).fill(false));

  const handleStarClick = (index) => {
    const newSelectedStars = [...selectedStars];
    newSelectedStars[index] = !newSelectedStars[index];
    setSelectedStars(newSelectedStars);
  };

  return (
    <>
      <section className="rev-comp">
        <div className="review-popup-box">
          <h6>Give Review</h6>

          <div className="star-rat-flex-bx">
            {selectedStars.map((isSelected, index) => (
              <span
                key={index}
                onClick={() => handleStarClick(index)}
                style={{
                  cursor: "pointer",
                  fontSize: "24px",
                  color: isSelected ? "orange" : "lightgrey",
                }}
              >
                <i className={isSelected ? "fas fa-star" : "far fa-star"}></i>
              </span>
            ))}
          </div>

          <div className="type-message-box">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Type here..."
            ></textarea>
          </div>

          <button className="rev-submit-btn">Submit</button>

          <div onClick={onclickRevPopupClose} className="close-rating-box">
            <i className="fa-solid fa-xmark"></i>
          </div>

          <div></div>
        </div>
      </section>
    </>
  );
};

export default ReviewPopup;
