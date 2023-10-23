import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/Ratelist.css";
import "../style/MyAccount.css";
import { Form, Formik } from "formik";
import { userSchedulePickup } from "../apis/kbadpeUser/schedule";
import { validationSchedulePickup } from "../validators/kabadPeUser/schedule";
import { userLocationByQuery } from "../apis/location";

const Ratelistcomp = () => {
  const [listBox, setListBox] = useState(false);
  const [mainPrice, setmainPrice] = useState(false);
  const [apiErrors, setApiErrors] = useState({ shcedulPickup: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const initialSchedulePickupValues = {
    appointmentAddress: "",
    appointmentContactNumber: "",
    appointmentPersonName: "",
    appointmentTimeSlot: "",
    appointmentDate: null,
  };
  const hideFunc = () => {
    setListBox(true);
  };

  const ShcedulPickuFunc = () => {
    setmainPrice(true);
  };
  const handlePickupSubmit = async (data) => {
    const appointmentAddress = await userLocationByQuery(
      data?.appointmentAddress
    );
    if (!appointmentAddress?.coord_address) {
      setApiErrors({
        ...apiErrors,
        shcedulPickup: appointmentAddress?.message || "address not found",
      });
      return;
    }
    const res = await userSchedulePickup({
      ...data,
      appointmentAddress: appointmentAddress?.coord_address,
    });
    if (res.error) {
      setApiErrors({
        ...apiErrors,
        shcedulPickup: res.message,
      });
    }
  };
  return (
    <>
      {/* <!-- Main header--> */}
      <header className="main-header header-style-one">
        {/* <!--Start Header Top--> */}
        <div className="header-top">
          <div className="auto-container">
            <div className="outer-box outer-box2">
              <div className="header-right header-left_btns-flex">
                <div className="phone-number-box1">
                  <a className="" href="#">
                    {" "}
                    <i className="fa-solid fa-angles-right"></i> Climstripe
                    Shift
                  </a>
                </div>

                <div className="phone-number-box1">
                  <a className="active" href="index.html">
                    {" "}
                    <i className="fa-solid fa-angles-right"></i> Kabadpe
                  </a>
                </div>

                <div className="phone-number-box1">
                  <a href="#">
                    {" "}
                    <i className="fa-solid fa-angles-right"></i> Green Saman
                    Shop
                  </a>
                </div>

                <div className="phone-number-box1">
                  <a href="#">
                    {" "}
                    <i className="fa-solid fa-angles-right"></i> Climconnect
                  </a>
                </div>
              </div>

              <div className="header-top__left header-top_right">
                <div className="header-contact-info-style1">
                  <ul>
                    <li>
                      <div className="icon">
                        {/* <img src="assets/images/customImg/game.png"> */}
                        <img src="./images/customImg/game.png" alt="" />
                        <img src="./images/customImg/app-store.png" alt="" />
                        {/* <img src="assets/images/customImg/app-store.png"> */}
                      </div>
                      <div className="text">
                        <p>Download App</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Header Top--> */}

        {/* <!--Start Header--> */}
        <div className="header">
          <div className="auto-container">
            <div className="outer-box">
              <div className="header-left-nav-bx">
                {/* <!--Start Header Left--> */}
                <div className="header-left">
                  <div className="main-logo-box">
                    <a href="index.html">
                      {/* <img src="assets/images/resources/logo.png" alt="Awesome Logo" title=""> */}
                      <img src="/images/resources/logo.png" alt="" />
                    </a>
                  </div>
                </div>

                {/* <!--Start Header Middle--> */}
                {/* <!--Mobile Navigation Toggler--> */}

                {/* <!--End Header Middle--> */}
              </div>

              {/* <!--End Header Left--> */}

              {/* <!--Start Header Right--> */}
              <div className="header-right rateList">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu style1 navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix ">
                      <li className="dropdown ">
                        <NavLink to="/">
                          <span>Home</span>
                        </NavLink>
                      </li>
                      <li className="dropdown servicemenu">
                        <NavLink to="/service">
                          <span>Services</span>
                        </NavLink>

                        <div className="service-dropdown-bx">
                          <div className="serv-drpdwn-grid">
                            <div className="s-drpdwn-bx">
                              <h6>For Individuals</h6>
                              <div className="s-drpdwn-lists">
                                <p>
                                  <a href="#" target="_blank">
                                    Scrap Collection
                                  </a>
                                </p>
                                <p>
                                  <a href="#" target="_blank">
                                    Zero Waste Society
                                  </a>
                                </p>
                                <p>
                                  <a href="#" target="_blank">
                                    Vehicle Scrapping
                                  </a>
                                </p>
                              </div>
                            </div>

                            <div className="s-drpdwn-bx">
                              <h6>For Businesses</h6>
                              <div className="s-drpdwn-submenu-grid">
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <a href="#">Scrap Collection</a>
                                  </p>
                                  <p>
                                    <a href="#">EPR services</a>
                                  </p>
                                  <p>
                                    <a href="#">Dismantling</a>
                                  </p>
                                </div>
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <a href="#">Circular Economy</a>
                                  </p>
                                  <p>
                                    <a href="#">Zero Waste</a>
                                  </p>
                                  <p>
                                    <a href="#">Paper Shredding</a>
                                  </p>
                                </div>
                                <div className="s-dpdwn-sb-menu-bx">
                                  <p>
                                    <a href="#">CSR Services</a>
                                  </p>
                                  <p>
                                    <a href="#">Zero Waste Event</a>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="s-drpdwn-bx">
                              <h6>For Governments</h6>
                              <div className="s-drpdwn-lists">
                                <p>
                                  <a href="#" target="_blank">
                                    Material Recovery Facility
                                  </a>
                                </p>
                                <p>
                                  <a href="#" target="_blank">
                                    IEC
                                  </a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="aboutdrpdwn">
                        <NavLink to="/about">
                          <span>About Us</span>
                        </NavLink>
                        <div className="about-drpdwn-bx">
                          <p>
                            <a href="#"> About us</a>
                          </p>
                          <p>
                            <a href="#">Franchise</a>
                          </p>
                          <p>
                            <a href="#">Contact now</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <NavLink to="/wastegept">
                          <span>Wastegpt</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/ratelist">
                          <span>Rate list</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/kabadshop">
                          <span>Kabad Shop</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/account">
                          <span>My Account</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to=""
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <span>Login</span>
                        </NavLink>
                      </li>
                    </ul>
                    <div className="menuBtn-togg">
                      <div className="spanline"></div>
                      <div className="spanline"></div>
                      <div className="spanline"></div>
                    </div>
                  </div>
                </nav>

                {/* <!-- Main Menu End--> */}

                {/* <!-- <div className="phone-number-box1">
                    <button>Rate list</button>
                </div>

                <div className="phone-number-box1">
                    <button>Kabad Shop</button>
                </div>
                <div className="serach-button-style1">
                    <button>Login</button>
                    
                </div> --> */}
              </div>
              {/* <!--End Header Right--> */}
            </div>
          </div>
        </div>
        {/* <!--End header--> */}

        {/* <!--Sticky Header--> */}
        <div className="sticky-header">
          <div className="container">
            <div className="clearfix">
              {/* <!--Logo--> */}
              <div className="logo float-left">
                <a href="index.html" className="img-responsive">
                  {/* <img src="assets/images/resources/sticky-logo.png" alt="" title=""> */}
                  <img src="images/resources/sticky-logo.png" alt="" />
                </a>
              </div>
              {/* <!--Right Col--> */}
              <div className="right-col float-right">
                {/* <!-- Main Menu --> */}
                <nav className="main-menu clearfix">
                  {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!--End Sticky Header--> */}

        {/* <!-- Mobile Menu  --> */}
        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon fa fa-times-circle"></span>
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="images/resources/mobilemenu.png" alt="" />
              </a>
            </div>
            <div className="menu-outer">
              {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            </div>
            {/* <!--Social Links--> */}
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-twitter-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-pinterest-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-google-plus-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa fa-youtube-square"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <!-- End Mobile Menu --> */}
      </header>

      <section className="user-prof-comp user-prof-comp5">
        <span className="u-pf-one"></span>
        <span className="u-pf-two">
          <span className="u-pf-three"></span>
        </span>
        <span className="u-pf-four"></span>

        <h2>Rate List</h2>
      </section>

      {/* Rate list comp */}

      <section className="ratelist-comp">
        <div className="ratelist-container">
          <div className="ratelist-table-grid">
            <div className="ratelist-table-bx">
              <table>
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Waste Products</th>
                    <th>Rate/KG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/magazine.png" alt="" />
                        </div>
                        <h6>Magazine</h6>
                      </div>
                    </td>

                    <td>₹20.00 </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/cash.png" alt="" />
                        </div>
                        <h6>Papers</h6>
                      </div>
                    </td>

                    <td>₹10.00 </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/book.png" alt="" />
                        </div>
                        <h6>Books</h6>
                      </div>
                    </td>

                    <td>₹40.00 </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img
                            src="./images/customImg/aluminium-paper.png"
                            alt=""
                          />
                        </div>
                        <h6>Aluminium</h6>
                      </div>
                    </td>

                    <td>₹50.00 </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/wheel.png" alt="" />
                        </div>
                        <h6>Wheels</h6>
                      </div>
                    </td>

                    <td>₹53.00 </td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/plastic.png" alt="" />
                        </div>
                        <h6>Plastic</h6>
                      </div>
                    </td>

                    <td>₹36.00 </td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/cardboard.png" alt="" />
                        </div>
                        <h6>Cardboard</h6>
                      </div>
                    </td>

                    <td>₹29.00 </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ratelist-table-bx">
              <table>
                <thead>
                  <tr>
                    <th>S No.</th>
                    <th>Waste Products</th>
                    <th>Rate/KG</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/plastic.png" alt="" />
                        </div>
                        <h6>Plastic</h6>
                      </div>
                    </td>

                    <td>₹36.00 </td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/cardboard.png" alt="" />
                        </div>
                        <h6>Cardboard</h6>
                      </div>
                    </td>

                    <td>₹29.00 </td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/coil.png" alt="" />
                        </div>
                        <h6>Copper</h6>
                      </div>
                    </td>

                    <td>₹28.00 </td>
                  </tr>

                  <tr>
                    <td>9</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/iron-bar.png" alt="" />
                        </div>
                        <h6>Iron</h6>
                      </div>
                    </td>

                    <td>₹36.00 </td>
                  </tr>

                  <tr>
                    <td>10</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/beam.png" alt="" />
                        </div>
                        <h6>Steel</h6>
                      </div>
                    </td>

                    <td>₹47.00 </td>
                  </tr>

                  <tr>
                    <td>11</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/broken.png" alt="" />
                        </div>
                        <h6>E-Waste</h6>
                      </div>
                    </td>

                    <td>₹33.00 </td>
                  </tr>

                  <tr>
                    <td>12</td>
                    <td>
                      <div className="waste-prod-bx">
                        <div className="waste-prod-img">
                          <img src="./images/customImg/furniture.png" alt="" />
                        </div>
                        <h6>Wood</h6>
                      </div>
                    </td>

                    <td>₹33.00 </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className={
                mainPrice === true
                  ? "main-price-third-bx mainpriceactive"
                  : "main-price-third-bx"
              }
            >
              <div
                className={
                  listBox === true
                    ? "prodactive price-third-box"
                    : " price-third-box"
                }
              >
                <div className="prod-list-main">
                  <span>E-WASTE RECYCLING</span>
                  <h4>Calculator</h4>

                  <div className="prod-list-bx">
                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/magazine.png" alt="" />
                        <h5>Magazine</h5>
                      </div>

                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>

                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/wheel.png" alt="" />
                        <h5>Wheels</h5>
                      </div>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>
                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/cash.png" alt="" />
                        <h5>Papers</h5>
                      </div>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>
                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/book.png" alt="" />
                        <h5>Books</h5>
                      </div>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>
                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/plastic.png" alt="" />
                        <h5>Plastic</h5>
                      </div>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>
                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/cardboard.png" alt="" />
                        <h5>Cardboard</h5>
                      </div>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>

                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/iron-bar.png" alt="" />
                        <h5>Steel</h5>
                      </div>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>

                    <div className="p-bx">
                      <div className="left-prod-i">
                        <img src="./images/customImg/furniture.png" alt="" />
                        <h5>Wood</h5>
                      </div>
                      <input
                        type="text"
                        name="value"
                        id="value"
                        placeholder=".../kg"
                      />
                    </div>
                  </div>

                  <button className="prod-submit-btn" onClick={hideFunc}>
                    Calculate Benefits !
                  </button>
                </div>

                <div className="schedule-pickup-bx">
                  <h5>Total Valuation of your waste</h5>

                  <h3>4,570.00/</h3>

                  <button
                    onClick={ShcedulPickuFunc}
                    className="schedule-pickup-btn"
                  >
                    Schedule Pickup
                  </button>
                </div>

                <div className="schedule-pickup-form-bx">
                  <h5>Schedual Pickup</h5>
                  <Formik
                    initialValues={initialSchedulePickupValues}
                    onSubmit={handlePickupSubmit}
                    validationSchema={validationSchedulePickup}
                  >
                    {({
                      handleBlur,
                      handleChange,
                      values,
                      errors,
                      touched,
                      ...rest
                    }) => {
                      return (
                        <Form>
                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt bor-inpt">
                              <input
                                type="text"
                                name="appointmentPersonName"
                                id="name"
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentPersonName}
                              />
                            </div>

                            {touched.appointmentPersonName &&
                            errors.appointmentPersonName ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentPersonName}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt bor-inpt">
                              <input
                                type="text"
                                name="appointmentContactNumber"
                                id="appointmentContactNumber"
                                placeholder="Phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentContactNumber}
                              />
                            </div>
                            {touched.appointmentContactNumber &&
                            errors.appointmentContactNumber ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentContactNumber}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="date-bx2 bor-inpt">
                              <i className="fa-solid fa-calendar-days calendar"></i>
                              <Datepicker
                                name="appointmentDate"
                                id="appointmentDate"
                                className="datepicker"
                                selected={values.appointmentDate}
                                onChange={(date) => {
                                  values.appointmentDate = date;
                                  document
                                    .getElementById("appointmentContactNumber")
                                    .focus();
                                }}
                                onBlur={handleBlur}
                              />
                            </div>
                            {touched.appointmentDate &&
                            errors.appointmentDate ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentDate}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt sel-bx bor-inpt">
                              <i className="fa-solid fa-angle-down arrow-dwn"></i>
                              <select
                                name="appointmentTimeSlot"
                                id="appointmentTimeSlot"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentTimeSlot}
                              >
                                <option disabled value="" hidden>
                                  Choose Time Slot
                                </option>
                                <option value="10-11">10.00 to 11.00</option>
                                <option value="11-12">11.00 to 12.00</option>
                                <option value="13-14">1.00 to 2.00</option>
                                <option value="14-15">2.00 to 3.00</option>
                                <option value="16-17">4.00 to 5.00</option>
                                <option value="17-18">5.00 to 6.00</option>
                              </select>
                            </div>
                            {touched.appointmentTimeSlot &&
                            errors.appointmentTimeSlot ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentTimeSlot}
                              </div>
                            ) : null}
                          </div>

                          <div className="pickup-inpt-bx">
                            <div className="sched-inpt bor-inpt">
                              <input
                                type="text"
                                name="appointmentAddress"
                                id="address"
                                placeholder="Address"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.appointmentAddress}
                              />
                            </div>
                            {touched.appointmentAddress &&
                            errors.appointmentAddress ? (
                              <div style={{ color: "red" }}>
                                {errors.appointmentAddress}
                              </div>
                            ) : null}
                          </div>

                          <button type="submit" className="pickup-submit-btn">
                            Submit
                          </button>
                          {apiErrors ? (
                            <div style={{ color: "red" }}>
                              {apiErrors.shcedulPickup}
                            </div>
                          ) : null}
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        <div>
      <h2>Select a Fruit:</h2>
      <select value={selectedValue} onChange={handleSelectChange}>
        {Object.keys(fruitImages).map((fruit, index) => (
          <option key={index} value={fruit}>
            {fruit} 
          </option>
        ))}
      </select>

      <div className="image-container">
        <img
          src={fruitImages[selectedValue]}
          alt={selectedValue}
          width="200"
          height="200"
        />
      </div>
    </div> */}

      {/* 
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        <tr >
              <td>1</td>
              <td>Faiz</td>
              <td>
                <button onClick={() => handleDeleteData(item.id)}>Delete</button>
              </td>
            </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>1</td>
              <td>Faiz</td>
              <td>
                <button onClick={() => handleDeleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddData}>Add Data</button>
    </div> */}

      {/* 
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td><input type="text" /></td>
              <td><select name="" id="">
                <option value="">Option1</option></select></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={addStaticRow}>Add Static Row</button>
    </div> */}
    </>
  );
};

export default Ratelistcomp;
