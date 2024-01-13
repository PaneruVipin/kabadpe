import React from "react";

const ContForm = () => {
  return (
    <>
      <section className="cont-form-comp">
        <div className="comon-container-2">
          <h3 className="cont-text">Contact us for a personal experience</h3>

          <div className="cont-form-grid-main">
            <div className="left-cont-form-bx">
              <form action="#">
                <div className="cont-form-grid">
                  <div className="cont-inpt-bx">
                    <label htmlFor="#">Full Name</label>
                    <div className="cont-field">
                      <input type="text" name="name" id="name" />
                    </div>
                  </div>

                  <div className="cont-inpt-bx">
                    <label htmlFor="#">Phone No.</label>
                    <div className="cont-field">
                      <input type="text" name="phone" id="phone" />
                    </div>
                  </div>
                </div>

                <div className="cont-form-grid">
                  <div className="cont-inpt-bx">
                    <label htmlFor="#">Email</label>
                    <div className="cont-field">
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>

                  <div className="cont-inpt-bx">
                    <label htmlFor="#">Choose Type</label>
                    <div className="cont-field">
                      <select name="contChoose" id="contChoose">
                        <option value="option">Choose</option>
                        <option value="option">Option1</option>
                        <option value="option">Option2</option>
                        <option value="option">Option3</option>
                        <option value="option">Option4</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="cont-inpt-bx">
                  <label htmlFor="#">Write your message here</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>

                <button className="cont-form-sub-btn">Submit</button>
              </form>
            </div>

            <div className="right-cont-img">
              <img src="/images/customImg/contact-thumb.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContForm;
