import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-comp">
        <div className="comon-container-2">
          <div className="mail-main-bx">
            <div className="left-mail-text-bx">
              <div className="mail-icon">
                <img src="./images/email.png" alt="" />
              </div>
              <div className="mail-text">
                <h6>Subscribe Now to Get Latest Updates</h6>
              </div>
            </div>

            <div className="right-tg-main-bx">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
              <div className="tg-icon">
                <img src="./images/telegram.png" alt="" />
              </div>
            </div>
          </div>

          <div className="fot-grid grid grid-gap">
            <div className="left-footer-bx">
              <h6>About</h6>
              <p>
                Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed
                do eiusmod tempor incididunt ut labore
              </p>

              <div className="fot-soc-icons-flex">
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>

              <div className="fot-list">
                <div className="cont-bx">
                  <div className="cont-i">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <a href="#">+91 98218 61897</a>
                </div>
                <div className="cont-bx">
                  <div className="cont-i">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <span>support@thekabadshop.com</span>
                </div>
                <div className="cont-bx">
                  <div className="cont-i">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <span>88, Kundan Nagar, Laxmi Nagar New Delhi, India</span>
                </div>
              </div>
            </div>

            <div className="right-footer-list-bx">
              <div className="fot-li-bx">
                <h6>Links</h6>
                <div className="fot-list">
                  <li>
                    <a href="#">Request Pickup</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Management</a>
                  </li>
                  <li>
                    <a href="#">Start Service</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </div>
              </div>

              <div className="fot-li-bx">
                <h6>Services</h6>
                <div className="fot-list">
                  <li>
                    <a href="#">Grocery Store</a>
                  </li>
                  <li>
                    <a href="#">Hotel & Restaurant</a>
                  </li>
                  <li>
                    <a href="#">Medical & Hospital</a>
                  </li>
                  <li>
                    <a href="#">Waste Removal</a>
                  </li>
                  <li>
                    <a href="#">Zero Waste</a>
                  </li>
                </div>
              </div>

              <div className="fot-li-bx">
                <h6>Contact</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="last-text-bx">
          <h6>
            Copyright © 2024 <a href="#"> Climstripe Shift </a> All Rights
            Reserved. | Dev. By: <a href="#"> Digital Dezire </a>{" "}
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
