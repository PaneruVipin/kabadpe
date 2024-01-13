import React, { useEffect } from "react";

const AboutFrenchies = () => {
  useEffect(() => {
    const revealElems = document.querySelectorAll("[data-reveal]");

    const scrollReveal = () => {
      for (let i = 0; i < revealElems.length; i++) {
        const revealElemOnScreen =
          revealElems[i].getBoundingClientRect().top < window.innerHeight;

        if (revealElemOnScreen) {
          revealElems[i].classList.add("revealed");
        } else {
          revealElems[i].classList.remove("revealed");
        }
      }
    };

    window.addEventListener("scroll", scrollReveal, true);

    return () => {
      window.removeEventListener("scroll", scrollReveal, true);
    };
  }, []);

  return (
    <>
      <section className="about-frenchies-comp">
        <div className="comon-container-2">
          <div className="about-heading about-heading2">
            <div className="left-about-fren-text">
              <h3>Frenchise</h3>
              <p>
                Become a KabadPe Franchise: Join Our Sustainable Mission Embark
                on a Journey of Environmental Entrepreneurship
              </p>
            </div>

            <p>
              Are you passionate about sustainability and eager to make a
              significant impact in your community? KabadPe offers a unique
              opportunity to become part of our growing family as a franchisee.
              Join us in our mission to revolutionize waste management and
              promote a circular economy.
            </p>
          </div>

          <div className="full-wifth-img-a-f">
            <img src="/images/customImg/about-img-3.png" alt="" />
          </div>

          <h5 className="sing-text">Why Become a KabadPe Franchisee?</h5>

          <div className="kabadpe-french-list">
            <div className="kab-fren-li-bx" data-reveal="left">
              <h6>Make a Difference</h6>
              <p>
                As a KabadPe franchisee, you’ll play a crucial role in driving
                environmental sustainability. Your efforts in waste management
                and recycling will contribute to a cleaner, greener planet.
              </p>
              <span>Contribute to a Greener Planet</span>
            </div>

            <div className="kab-fren-li-bx kab-fren-li-bx2" data-reveal="right">
              <h6>Innovative Business Model</h6>
              <p>
                The demand for sustainable waste management is growing. By
                joining KabadPe, you tap into an innovative business model with
                a high potential for profitability and growth.
              </p>
              <span>Tap into a Lucrative Market</span>
            </div>

            <div className="kab-fren-li-bx" data-reveal="left">
              <h6>Comprehensive Support</h6>
              <p>
                We provide our franchisees with extensive training, marketing
                support, and operational guidance. You’ll have access to our
                proven systems and technologies to ensure your success.
              </p>
              <span>Guidance Every Step of the Way</span>
            </div>

            <div className="kab-fren-li-bx kab-fren-li-bx2" data-reveal="right">
              <h6>Join a Reputable Brand</h6>
              <p>
                KabadPe is recognized for its commitment to sustainability and
                innovation. As a franchisee, you’ll be associated with a
                reputable brand that is respected in the industry.
              </p>
              <span>Be Part of a Trusted Network</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFrenchies;
