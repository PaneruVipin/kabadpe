import React from "react";
import { NavLink } from "react-router-dom";

const MainFooter = () => {
  return (
    <>
      <footer className="footer-comp">
        <div className="comon-container-2">
          <div className="fot-subs-main-bx">
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
          </div>

          <div className="fot-grid">
            <div className="fot-bx">
              <h6>About</h6>

              <p>
                Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed
                do eiusmod tempor incididunt ut labore.
              </p>

              <div className="fot-soc-icons">

                 <NavLink to="#"><i class="fa-brands fa-facebook"></i></NavLink>
                 <NavLink to="#"><i class="fa-brands fa-x-twitter"></i></NavLink>
                 <NavLink to="#"><i class="fa-brands fa-pinterest"></i></NavLink>
                 <NavLink to="#"><i class="fa-brands fa-instagram"></i></NavLink>

                
              </div>
              
            </div>

            <div className="right-fot-three-grid">

            <div className="fot-bx">
              <h6>Links</h6>

             <div className="fot-lists">
                <li> <NavLink to="#">Request Pickup</NavLink> </li>
                <li> <NavLink to="#">About Us</NavLink> </li>
                <li> <NavLink to="#">Management</NavLink> </li>
                <li> <NavLink to="#">Start Service</NavLink> </li>
                <li> <NavLink to="#">Contact</NavLink> </li>

             </div>

           
              
            </div>

            <div className="fot-bx">
              <h6>Links</h6>

             <div className="fot-lists">
                <li> <NavLink to="#">Grocery Store</NavLink> </li>
                <li> <NavLink to="#">Hotel & Restaurant</NavLink> </li>
                <li> <NavLink to="#">Medical & Hospital</NavLink> </li>
                <li> <NavLink to="#">Waste Removal</NavLink> </li>
                <li> <NavLink to="#">Zero Waste</NavLink> </li>

             </div>

              
            </div>

            <div className="fot-bx">
              <h6>Contact</h6>

             <div className="fot-lists fot-lists2">
                <li> <i class="fa-solid fa-phone-volume"></i> <NavLink to="#">Grocery Store</NavLink> </li>
                <li> <i class="fa-regular fa-envelope"></i> <NavLink to="#">Hotel & Restaurant</NavLink> </li>
                <li> <i class="fa-solid fa-location-dot"></i> <NavLink to="#">Medical & Hospital</NavLink> </li>

             </div>

              
            </div>
                
            </div>
            
          </div>
        </div>

        <div className="last-fotr-text">
            <p>Copyright © 2023 <span> Climstripe Shift </span> All Rights Reserved. | Dev. By: <span>  Digital Dezire </span></p>
        </div>
        
      </footer>
    </>
  );
};

export default MainFooter;
