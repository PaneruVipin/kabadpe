import React from 'react'
import { NavLink } from 'react-router-dom'

const ClimconnectCompThree = () => {
  return (
    <>
      <section className="serv-comp-two">
        <div className="comon-container-2">
          <h6 className="s-text">Why ClimConnect Social Media?</h6>

          <div className="serv-grid-box">

   <div className="serv-box" >
              <h6> Curated Content for Climate Awareness   </h6>
              <span>No More Digital Junk</span>
              <p>
              Tired of sifting through irrelevant posts? Our platform offers carefully curated content
focusing exclusively on climate change, environmental conservation, and sustainability.
              </p>
            </div>


            <div className="serv-box" >
              <h6> Connect with Like-Minded Individuals   </h6>
              <span>Networking with Purpose</span>
              <p>
              Network with a global community of climate enthusiasts, activists, scientists, and
policymakers. Share ideas, collaborate on projects, and forge meaningful connections.
              </p>
            </div>


            <div className="serv-box" >
              <h6> Learn, Share, and Grow   </h6>
              <span>Beyond Just Socializing</span>
              <p>
              Our platform is not just about connecting; it&#39;s about growing together. Access a wealth of
educational resources, participate in discussions, and stay informed with the latest in
climate science and green innovation.
              </p>
            </div>

            <div className="serv-box" >
              <h6> Influence and Inspire   </h6>
              <span>Be the Change</span>
              <p>
              Your voice matters. Share your insights, stories, and solutions. Inspire others and be inspired
as we work collectively towards a more sustainable future.
              </p>
            </div>


         
          </div>

          <div className="full-text full-text2 mb-5">

<h6>A New Wave of Social Media</h6>

        <p>
        Sign up today and be part of a special community where every conversation is an
opportunity to learn and contribute to a healthier planet.
<NavLink to="#" className="s-link-btn">
                Sign Up
              </NavLink>
        </p>
      </div>

      
      <div className="full-text full-text2 mb-5">

<h6>Stay Engaged and Informed</h6>
<span>Follow Our Blog and Newsletters</span>
        <p>
        Keep up-to-date with environmental news, tips, and ClimConnect updates through our blog
and newsletters.
<NavLink to="#" className="s-link-btn">
                Blog
              </NavLink>
        </p>
      </div>
        </div>
      </section> 
    </>
  )
}

export default ClimconnectCompThree
