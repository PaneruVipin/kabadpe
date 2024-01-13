import React, { useState } from "react";
import "../style/Ratelist.css";
import "../style/MyAccount.css";
import "../style/Footer.css";
import "../style/Pricelist.css";
import { NavLink } from "react-router-dom";

const Pricelist = () => {
  const [selectedValue, setSelectedValue] = useState({ 1: "book" });
  const [weightValue, setWeightValue] = useState("");
  const [dataTable, setDataTable] = useState([1]);

  const productImages = {
    Choose: "",
    book: "./images/customImg/book.png",
    paper: "./images/customImg/cash.png",
    iron: "./images/customImg/beam.png",
    plastic: "./images/customImg/plastic.png",
    cardboard: "./images/customImg/cardboard.png",
    wheel: "./images/customImg/wheel.png",
    aluminium: "./images/customImg/aluminium-paper.png",
    wood: "./images/customImg/furniture.png",
    magazine: "./images/customImg/magazine.png",
    Ewaste: "./images/customImg/broken.png",
    Copper: "./images/customImg/coil.png",
    Steel: "./images/customImg/iron-bar.png",

    // Add more options and image sources as needed
  };

  const productPrice = {
    Choose: "",
    book: 20,
    paper: 10,
    iron: 40,
    plastic: 26,
    cardboard: 30,
    wheel: 32,
    aluminium: 35,
    wood: 33,
    magazine: 20,
    Ewaste: 50,
    Copper: 46,
    Steel: 39,

    // Add more options and price sources as needed
  };

  //   const productWeight = {
  //     Choose : '',
  //     book: 10,
  //     paper: 20,
  //     iron: 33,
  //     plastic : 40,
  //     cardboard : 50,
  //     wheel : 90,
  //     aluminium : 28,
  //     wood : 20,
  //     magazine : 30,
  //     Ewaste : 10,
  //     Copper : 35,
  //     Steel : 55,

  //     // Add more options and price sources as needed
  //   };

  const handleSelectChange = (event) => {
    const { id, value } = event.target;
    setSelectedValue({ ...selectedValue, [id]: value });
  };

  const handleWeightValue = (e) => {
    const wValue = e.target.value;
    setWeightValue(wValue);
  };

  const addStaticRow = () => {
    // Replace with your static data
    setDataTable([...dataTable, dataTable[dataTable.length - 1] + 1]);
  };

  const deleteStaticRow = () => {
    const newData = [...dataTable];
    newData.pop();
    setDataTable(newData);
  };

  // console.log(productImages[selectedValue[2]])

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
                        <img src="/images/customImg/game.png" alt="" />
                        <img src="/images/customImg/app-store.png" alt="" />
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

        <h2>Price List</h2>
      </section>

      <section className="pricelist-comp">
        <div className="pricelist-container">
          <div className="ratelist-table-bx pricelist-table-bx">
            <table>
              <thead>
                <tr>
                  <th>S No.</th>
                  <th>Select Products</th>
                  <th>Price Per KG</th>
                  <th>Weight Per KG</th>
                  <th>Amount</th>
                  <th>Add/Remove</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((index) => {
                  return (
                    <tr>
                      <td>{index}</td>
                      <td>
                        <div className="product-select-bx">
                          <div className="prod-img image-container">
                            <img src={productImages[selectedValue[index]]} />
                          </div>

                          <select
                            id={index}
                            value={selectedValue[index]}
                            onChange={handleSelectChange}
                          >
                            {Object.keys(productImages).map(
                              (product, index) => (
                                <option key={index} value={product}>
                                  {product}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </td>

                      <td>
                        <p className="prod-price-text">
                          ₹{productPrice[selectedValue[index]]}
                        </p>
                      </td>

                      <td>
                        <div className="inpt-weight-bx">
                          <input
                            type="text"
                            name="weight"
                            id={index}
                            value={weightValue}
                            onChange={handleWeightValue}
                            placeholder="----"
                          />
                        </div>
                      </td>

                      <td>
                        <p className="amount-text">
                          {/* {productPrice[selectedValue[index]] * weightValue} */}
                          1000
                        </p>
                      </td>

                      <td>
                        <div className="add-remov-btn">
                          <div
                            onClick={addStaticRow}
                            className="add-btn table-btn"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </div>

                          <div
                            onClick={deleteStaticRow}
                            className="add-btn table-btn"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {/* {tableData.map((row, index) => (
           
                <tr key={index}>
                    <td>1</td>
                    <td>
                        <div className="product-select-bx">
                        <div className="prod-img image-container">
        <img
          src={productImages[selectedValue]}
          
        />
      </div>

                        <select value={selectedValue} onChange={handleSelectChange}>
        {Object.keys(productImages).map((product, index) => (
          <option key={index} value={product}>
            {product} 
          </option>
        ))}
      </select>

    
                        </div>
                    </td>

                    <td>
                    <p className="prod-price-text">
                    ₹{productPrice[selectedValue]}
      </p>
                    </td>

               

                    <td>
                    <div className="inpt-weight-bx">
                        <input type="number" name='weight' id='weight' value={weightValue} onChange={handleWeightValue} placeholder='weight' />
                    </div>
                    </td>

                 
                    <td>
                        <p className='amount-text'>{productPrice[selectedValue]  * weightValue}  </p>
                    </td>

                    <td>
                        <div className="add-remov-btn">

                            <div onClick={addStaticRow} className="add-btn table-btn">
                            <i className="fa-solid fa-plus"></i>
                            </div>
            
                            <div className="add-btn table-btn">
                            <i className="fa-solid fa-minus"></i>
                            </div>
                        </div>
                        
                    </td>
                    
                </tr>
  ))} */}
              </tbody>
            </table>
          </div>

          <div className="subtotal-bx">
            <h5>SubTotal</h5>
            <div className="total-amount-bx">
              <p>
                <td>
                  <p className="amount-text">
                    {/* {productPrice[selectedValue] * weightValue} */}
                    2000 <span>:</span>
                  </p>
                </td>
              </p>
              <h6>Total Amount </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricelist;
