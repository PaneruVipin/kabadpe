import React, { useState } from "react";

const Followers = () => {
  const [folow, setFollow] = useState("Follow");

  const folowers = [
    {
      id: 1,
      folowImg: "/images/customImg/client-01.png",
      folowrName: "Queen Parker",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },
    {
      id: 2,
      folowImg: "/images/customImg/client-02.png",
      folowrName: "Andrew Garfield",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },
    {
      id: 3,
      folowImg: "/images/customImg/client-03.png",
      folowrName: "Lawince ham",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },
    {
      id: 4,
      folowImg: "/images/customImg/client-04.png",
      folowrName: "Gulafshan Perween",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },

    {
      id: 5,
      folowImg: "/images/customImg/client-01.png",
      folowrName: "Queen Parker",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },
    {
      id: 6,
      folowImg: "/images/customImg/client-02.png",
      folowrName: "Andrew Garfield",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },
    {
      id: 7,
      folowImg: "/images/customImg/client-03.png",
      folowrName: "Lawince ham",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },
    {
      id: 8,
      folowImg: "/images/customImg/client-04.png",
      folowrName: "Gulafshan Perween",
      folowerInfo2: "@mashooque123",
      folowerInfo: "Delhi",
    },
  ];

  return (
    <>
      <section className="comn-soc-feed-comp blog-post-comp folower-comp">
        <h6>Followers</h6>

        <div className="folow-list-main">
          {folowers.map((elem, id) => {
            return (
              <>
                <div className="folow-li-box" key={id} id={elem.id}>
                  <div className="folow-user-img">
                    <img src={elem.folowImg} alt="" />
                    <div className="folow-right-info">
                      <h6> {elem.folowrName} </h6>
                      <div className="folow-text">
                        <span> {elem.folowerInfo2} </span>
                        <span> {elem.folowerInfo} </span>
                      </div>
                    </div>
                  </div>
                  <div className="right-folw-remv-btn">
                    <button
                      className={
                        folow ? "folow-btn folowbtnactive" : "folow-btn"
                      }
                    >
                      {" "}
                      {folow}{" "}
                    </button>

                    <button className="right-remove-btn">Remove</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Followers;
