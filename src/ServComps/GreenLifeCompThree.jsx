import React from 'react'
import { NavLink } from 'react-router-dom'

const GreenLifeCompThree = () => {
  return (
    <>
       <section className="serv-comp-two serv-comp-three">
        <div className="comon-container-2">
          <h6 className="s-text">Why Choose Green Life?</h6>

          <div className="waste-sip-list">
            <li>
              <h6>Commitment to Sustainability </h6>
              <p>
              We&#39;re dedicated to sourcing products that are environmentally responsible, ensuring that
every purchase contributes to a healthier planet.
              </p>
            </li>
            <li>
              <h6>Quality You Can Trust</h6>
              <p>
              Our products are not only green but also of the highest quality. We believe in offering goods
that are durable, functional, and stylish.
              </p>
            </li>

            
          </div>
        </div>
      </section>

      <section className="serv-comp-two">
        <div className="comon-container-2">
          <h6 className="s-text">Join Our Green Community</h6>

          <div className="waste-sip-list">
            <li>
              <h6>Stay Connected </h6>
              <p>
              Follow us on social media and subscribe to our newsletter for the latest tips, trends, and
products in sustainable living.
              </p>
            </li>
            <li>
              <h6>Green Blog</h6>
              <p>
              Visit our blog for inspiring stories, DIY tips, and advice on how to live a more eco-friendly
life.
<NavLink to="/contact" className="s-link-btn">
                Blog
              </NavLink>
              </p>
            </li>

            
          </div>
        </div>
      </section>
    </>
  )
}

export default GreenLifeCompThree
