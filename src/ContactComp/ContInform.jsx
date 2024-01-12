import React from "react";

const ContInform = () => {
  return (
    <>
      <section className="cont-infor-comp">
        <div className="comon-container-2">
          <div className="cont-heading">
            <h5>Contact Information</h5>
          </div>

          <div className="cont-grid-bx">
            <div className="cont-info-bx">
              <div className="cont-info-i">
                <ion-icon name="call-outline"></ion-icon>
              </div>

              <div className="right-cont-info">
                <h6>Call Us</h6>
                <p>+91 9971464759</p>
                <p>+91 9971464759</p>
              </div>
            </div>

            <div className="cont-info-bx">
              <div className="cont-info-i">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="right-cont-info right-cont-info2">
                <h6>Office Address</h6>
                <p>4132 Thornridge City, New York</p>
              </div>
            </div>

            <div className="cont-info-bx">
              <div className="cont-info-i">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="right-cont-info right-cont-info2">
                <h6>Office Address</h6>
                <p>4132 Thornridge City, New York</p>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </>
  );
};

export default ContInform;
