import React from "react";

const AboutGrid = () => {
  return (
    <>
      <section className="about-grid-comp">
        <div className="comon-container-2">
          <div className="about-grid-bx">
            <div className="left-about-grid-img">
              <img src="./images/customImg/about-img-2.jpg" alt="" />
              <div className="about-shape-bx"></div>
            </div>

            <div className="right-about-info-bx">
              <h3>Revolutionizing Waste Management</h3>
              <p>
                Welcome to KabadPe, a visionary leader in sustainable waste
                management. Part of the ClimStripe Shift Pvt. Ltd. (CSS) family,
                alongside The Green Saman Shop and ClimConnect, we are more than
                just a company - we are a movement. At KabadPe, our mission
                transcends traditional waste management.
              </p>

              <p>
                We aim to revolutionize how waste is perceived, collected, and
                recycled. By integrating advanced technology with
                grassroots-level operations, we empower local kabadiwalas,
                ensuring the safe and efficient disposal of waste, while
                pioneering practices that contribute to a sustainable, circular
                economy. Join us as we transform waste into a resource, paving
                the way for a cleaner, more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGrid;
