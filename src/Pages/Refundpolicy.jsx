import React from "react";
import ServBanner from "../ServComps/ServBanner";
import MainFooter from "../HomeComponent/MainFooter";

const Refundpolicy = () => {
  const data = {
    title: "Refund Policies",
    link: "Refund policies",
  };

  return (
    <>
      <ServBanner data={data} />
      <section className="serv-comp-one">
        <div className="comon-container-2">
          <div className="full-text ">
            <h3 style={{paddingInline : "2rem"}}>Hi Sustainability champion,</h3>
            <p>
              Thank you for supporting our mission in making sustainability a
              reality either by waste pickup and purchasing eco-friendly
              products. We value your satisfaction and strive to provide you
              with the best possible experience. However, we understand that
              there may be instances where a refund or cancellation is
              necessary. Please review our detailed refund and cancellation
              policy outlined below:
            </p>
          </div>
        </div>
      </section>
      <section className="serv-comp-two">
        <div className="comon-container-2">

          <div className="waste-sip-list">
            <li>
              <p>
                We do not refund any waste once picked up. However, you can
                purchase them again at the B2B price.
              </p>
            </li>
            <li>
              <p>
                We do not refund any B2B waste refund once the item is received
                by the customer. In any case, if the wrong waste is delivered:
              </p>

          <ul className="nested-li">
              <li>
                <p>
                Please inform us immediately upon receiving the recyclable waste.
                </p>
              </li>

              <li>
                <p>
                Provide photographic evidence of the damage.
                </p>
              </li>


              <li>
                <p>
                We will initiate a refund or replacement, depending on your preference and
product availability.
                </p>
              </li>
           
              </ul>
              
            </li>

            <li>
                <p>
                Incase of any dispute, we will refund in 7-14 working days.
                </p>
              </li>

          
          </div>
        </div>
      </section>

      <MainFooter />
    </>
  );
};

export default Refundpolicy;
