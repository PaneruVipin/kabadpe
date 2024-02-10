import React from 'react'
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <>
        <footer class="footer-comp">
        <div class="comon-container-2">

            <div class="mail-main-bx">

                <div class="left-mail-text-bx">
                    <div class="mail-icon">
                        <img src="./images/email.png" alt=""/>
                    </div>
                    <div class="mail-text">
                        <h6>
                            Subscribe Now to Get
                            Latest Updates</h6>
                    </div>
                </div>

                <div class="right-tg-main-bx">
                    <input type="email" name="email" id="email" placeholder="Email address"/>
                    <div class="tg-icon">
                        <img src="./images/telegram.png" alt=""/>
                    </div>
                </div>

            </div>

            <div class="fot-grid grid grid-gap">

                <div class="left-footer-bx">
                    <h6>About</h6>
                    <p>Lorem ipsum dolor sit amet, consect etur adi pisicing elit sed do eiusmod tempor incididunt ut
                        labore</p>

                        <div class="fot-soc-icons-flex">
                            <a href="#">
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-pinterest-p"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>

                        <div class="fot-list">
                          <div class="cont-bx">
                            <div class="cont-i">
                                <i class="fa-solid fa-phone-volume"></i>
                            </div>
                            <a href="#">
                                +91 98218 61897
                            </a>
                          </div>
                          <div class="cont-bx">
                            <div class="cont-i">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <span>
                                support@thekabadshop.com
                            </span>
                          </div>
                          <div class="cont-bx">
                            <div class="cont-i">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <span>
                                88, Kundan Nagar, Laxmi Nagar
                                New Delhi, India
                            </span>
                          </div>
                        </div>
                </div>

                <div class="right-footer-list-bx">

                    <div class="fot-li-bx">
                        <h6>Links</h6>
                        <div class="fot-list">
                            <li><a href="#">Request Pickup</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Management</a></li>
                            <li><a href="#">Start Service</a></li>
                            <li><a href="#">Contact</a></li>

                        </div>
                    </div>


                    <div class="fot-li-bx">
                        <h6>Services</h6>
                        <div class="fot-list">
                            <li><a href="#">Grocery Store</a></li>
                            <li><a href="#">Hotel & Restaurant</a></li>
                            <li><a href="#">Medical & Hospital</a></li>
                            <li><a href="#">Waste Removal</a></li>
                            <li><a href="#">Zero Waste</a></li>

                        </div>
                    </div>

                    <div class="fot-li-bx">
                        <h6>Contact</h6>
                     
                    </div>

                  


                    
                </div>

            </div>

        </div>

        <div class="last-text-bx">
            <h6>Copyright © 2023 <a href="#"> Climstripe Shift </a> All Rights Reserved. | Dev. By: <a href="#"> Digital Dezire </a> </h6>
        </div>
        
    </footer>

    </>
  )
}

export default Footer
