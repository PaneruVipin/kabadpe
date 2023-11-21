import React, { useState } from "react";

const BookingReviewComp = () => {
  const custRev = [
    {
      id: 1,
      img: "./images/customImg/c-1.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "2.6",
    },

    {
      id: 2,
      img: "./images/customImg/c-2.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "3.5",
    },

    {
      id: 3,
      img: "./images/customImg/c-2.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "4",
    },

    {
      id: 4,
      img: "./images/customImg/c-3.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "2",
    },

    {
      id: 1,
      img: "./images/customImg/c-1.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "3",
    },

    {
      id: 2,
      img: "./images/customImg/c-2.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "4",
    },

    {
      id: 3,
      img: "./images/customImg/c-2.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "5",
    },

    {
      id: 4,
      img: "./images/customImg/c-3.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "4",
    },

    {
      id: 2,
      img: "./images/customImg/c-2.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "3",
    },

    {
      id: 3,
      img: "./images/customImg/c-2.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "4.5",
    },

    {
      id: 4,
      img: "./images/customImg/c-3.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "4.5",
    },

    {
      id: 1,
      img: "./images/customImg/c-1.jpg",
      name: "Ali Muzair",
      postDate: "Posted on 26/04/2020, 12:42 AM",
      para: "I have been there many times.Rooms ,Food and Service are excellent.we did lots of Excursions and all the places are from the Hotel reachable. we visited Long Waterfall and was very helpful and excellent",
      star: "4",
    },
  ];

  const [editBx, setEditBx] = useState(false);
  const [custoRevwIndex, setCustoRevwIndex] = useState(5);

  const handleMoreBox = () => {

    setCustoRevwIndex(custoRevwIndex + 5);
    
  }

  return (
    <>
      <section className="book-revw-comp">
        <div className="book-revw-grid-box">
          <div className="left-booking-box">
            <div className="left-book-top-box">
              <h6> Newest Booking </h6>

              <button className="more-btn">More</button>
            </div>

            <div className="book-card-grid-box">
              <div className="booking-card-box">
                <div className="left-book-img">
                  <img src="./images/customImg/team-3.jpg" alt="" />
                  <div className="b-dot"></div>
                </div>
                <div className="right-book-info">
                  <h6>Samantha Humble</h6>
                  <span>October 3th, 2020</span>

                  <p>
                    <span className="b-t-1">Room A-21</span>{" "}
                    <span className="b-t-2">3-5 Person</span>
                  </p>
                </div>
              </div>

              <div className="booking-card-box">
                <div className="left-book-img">
                  <img src="./images/customImg/team-2.jpg" alt="" />
                  <div className="b-dot"></div>
                </div>
                <div className="right-book-info">
                  <h6>Samantha Humble</h6>
                  <span>October 3th, 2020</span>

                  <p>
                    <span className="b-t-1">Room A-21</span>{" "}
                    <span className="b-t-2">3-5 Person</span>
                  </p>
                </div>
              </div>

              <div className="booking-card-box">
                <div className="left-book-img">
                  <img src="./images/customImg/team-4.jpg" alt="" />
                  <div className="b-dot"></div>
                </div>
                <div className="right-book-info">
                  <h6>Samantha Humble</h6>
                  <span>October 3th, 2020</span>

                  <p>
                    <span className="b-t-1">Room A-21</span>{" "}
                    <span className="b-t-2">3-5 Person</span>
                  </p>
                </div>
              </div>

              <div className="booking-card-box">
                <div className="left-book-img">
                  <img src="./images/customImg/about-user.png" alt="" />
                  <div className="b-dot"></div>
                </div>
                <div className="right-book-info">
                  <h6>Samantha Humble</h6>
                  <span>October 3th, 2020</span>

                  <p>
                    <span className="b-t-1">Room A-21</span>{" "}
                    <span className="b-t-2">3-5 Person</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-c-parent-box">
            <div className="round-prog-main-box">
              <div className="round-prog-box">
                <div className="round-prog round-prog1"></div>

                <div className="r-p-det">
                  <h6>70%</h6>
                  <span>Check In</span>
                </div>
              </div>

              <div className="round-prog-box">
                <div className="round-prog round-prog2"></div>

                <div className="r-p-det">
                  <h6>40%</h6>
                  <span>Check Out</span>
                </div>
              </div>
            </div>

            <div className="right-custom-rev-box">
              <div className="top-cust-rev-box">
                <h6>Latest Customer Review</h6>

                <div className="edit-main-box2 edit-main-box3">
                  <div onClick={() => setEditBx(!editBx)} className="edit-btn2">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>

                  <div
                    className={
                      editBx ? "editable-box editableactive" : "editable-box"
                    }
                  >
                    <span>Delete</span>
                    <span>Edit</span>
                  </div>
                </div>
              </div>

              <div className="custRevw-list-flex-box">
                {custRev.slice(0, custoRevwIndex).map((elem, indx) => {
                  return (
                    <>
                      <div className="custRev-box" key={indx}>
                        <div className="c-r-star-flex-box">
                          <div className="custRev-left">
                            <div className="c-r-img">
                              <img src={elem.img} alt="" />
                            </div>
                            <div className="c-r-r-info-box">
                              <h6> {elem.name} </h6>
                              <span> {elem.postDate} </span>
                            </div>
                          </div>

                          <div className="c-r-right-rat-box"></div>
                        </div>

                        <div className="custRev-para-btns-flex-box">
                          <p> {elem.para} </p>

                          <div className="c-btns-flex-bx">
                            <button className="tick-right-btn">
                              <i class="fa-regular fa-circle-check"></i>
                            </button>

                            <button className="tick-right-btn tick-wrong-btn">
                              <i class="fa-regular fa-circle-xmark"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

{       custoRevwIndex < custRev.length && (
              <div onClick={handleMoreBox} className="more-rev-arrow-btn">
              <i class="fa-regular fa-circle-down"></i>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingReviewComp;
