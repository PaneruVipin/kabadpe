import React from "react";
import { NavLink } from "react-router-dom";

const MainFooter = () => {
  return (
    <>
      <footer className="footer-comp">
        <div className="comon-container-2">
          {/* <div className="fot-subs-main-bx">
            <div className="left-fot-subs-bx">
              <div className="left-mail-icon">
                <i class="fa-regular fa-envelope-open"></i>
              </div>
              <div className="subs-text">
                <h6>Subscribe Now to Get Latest Updates</h6>
              </div>
            </div>

            <div className="right-mail-bx">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                placeholder="Email address"
              />
            </div>
          </div> */}

          <div className="fot-grid">
            <div className="fot-bx">

              <div className="download-btn-flex-bx">

                <button className="downld-btn-fot">
                  <img src="/images/customImg/app-store.png" alt="" />
                  <div className="downlod-info">
                  <span>Available on the</span>
                  Apple Store
                  </div>
                </button>

                <button className="downld-btn-fot">
                  <img src="/images/customImg/game.png" alt="" />
                  <div className="downlod-info">
                  <span>Available on the</span>
                  Google Play
                  </div>
                </button>
                
              </div>
              

              <p>
               Download Kabadpe application from Playstore and App Store .
               Rewarding you for being eco-friendly.
              </p>

              {/* */}
              
            </div>

            <div className="right-fot-three-grid">

            <div className="fot-bx">
              <h6>Quick Links</h6>

             <div className="fot-lists">
                <li> <NavLink to="/termpolicy">Privacy Policy </NavLink> </li>
                <li> <NavLink to="/termpolicy">Terms & Conditions</NavLink> </li>
                <li> <NavLink to="/termpolicy">Terms of service</NavLink> </li>

             </div>

           
              
            </div>

            <div className="fot-bx">
              <h6>Contact Us</h6>

             <div className="fot-lists">
                <li> <NavLink to="#">+91 88002 09988</NavLink> </li>
                <li> <NavLink to="#">Info@Kabadpe.com</NavLink> </li>
                <li> <NavLink to="#">Bengaluru, Karnataka</NavLink> </li>

             </div>

              
            </div>

            <div className="fot-bx">
              <h6>Sign Up</h6>

             <div className="fot-lists fot-lists2">
                <li> <i class="fa-solid fa-phone-volume"></i> <NavLink to="#">As eco-store Vendor</NavLink> </li>
                <li> <i class="fa-regular fa-envelope"></i> <NavLink to="#">A pickup executive</NavLink> </li>
               

             </div>


             <div className="fot-soc-icons">

<NavLink to="#"><i class="fa-brands fa-facebook"></i></NavLink>
<NavLink to="#"><i class="fa-brands fa-x-twitter"></i></NavLink>
<NavLink to="#"><i class="fa-brands fa-pinterest"></i></NavLink>
<NavLink to="#"><i class="fa-brands fa-instagram"></i></NavLink>


</div> 
              
            </div>
                
            </div>
            
          </div>

          <div className="foter-copyright-flex-bx">

            <p>Copyright <span>Kabadpe.com</span> @ 2024 . All rights reserved.  </p>

            <p>Designed and developed by <span>Digital Dezire Web Solutions</span> </p>
            
          </div>
          
        </div>

        
      </footer>
    </>
  );
};

export default MainFooter;
