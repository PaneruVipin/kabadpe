import React, { useState } from "react";
import "../style/Vendor.css";
import { NavLink } from "react-router-dom";
import Accordion from "./VendorComp/Accordion";

const VendorLogin = () => {
  const [passwordView, setPasswordView] = useState(false);
  const [vendForm, setVendForm] = useState(false);
  const [vendMain, setVendMain] = useState(false);
  const [forgotPasswrd, setForgotPasswrd] = useState(false);
  const [paswrdText, setPaswrdText] = useState("Forgot Password");
  const [createAccount, setCreateAccount] = useState(false);
  const [selling, setSelling] = useState(false);
  const [shopDetForm, setShopDetForm] = useState(false);
  const [shopName, setShopName] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [taxDet, setTaxDet] = useState(false);
  const [confrmMesage, setConfrmMesage] = useState(false);


  const handleChange = (e) => {
    const name = e.target.value;
    setShopName(name);

    const isValid = /^[a-zA-Z\s]+$/.test(name);

    setIsValidName(name.length >= 6 && isValid);
  };

  const callFunc = () => {
    setConfrmMesage(true);
  }

  // setSubmittedName([...submittedName, shopName]);
  return (
    <>
      <section className="vendor-login-comp">
        <div className="common-container">
        <div className={confrmMesage ? "vend-mesage-bx mesageactive" : "vend-mesage-bx"}>
        
            <div
              className={
                vendForm
                  ? "vendor-login-main-bx vendformactive"
                  : "vendor-login-main-bx"
              }
            >
              <div
                className={
                  forgotPasswrd
                    ? "vendor-login-bx v-log-bx forgotpasswrdactive"
                    : "vendor-login-bx v-log-bx"
                }
              >
                <div className="vendor-login-logo">
                  <img src="/images/customImg/nav-logo.png" alt="" />
                </div>

                <h6> {forgotPasswrd ? paswrdText : "Vendor Log In"} </h6>

                <form action="#" className="ven-log-form">
                  <div className="vend-bx">
                    <span>Email</span>
                    <div className="vend-inpt-bx">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  <div className="vend-bx">
                    <span>Password</span>
                    <div className="vend-inpt-bx vend-inpt-bx2">
                      <input
                        type={passwordView ? "password" : "text"}
                        name="password"
                        id="password"
                        autoComplete="off"
                        required
                      />
                      <div
                        className={
                          passwordView
                            ? "passwrd-btn-bx hidepassword"
                            : "passwrd-btn-bx"
                        }
                      >
                        <button
                          onClick={() => setPasswordView(true)}
                          className="view-btn view-btn1"
                        >
                          <ion-icon name="eye-outline"></ion-icon>
                        </button>
                        <button
                          onClick={() => setPasswordView(false)}
                          className="view-btn view-btn2"
                        >
                          <ion-icon name="eye-off-outline"></ion-icon>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="vend-check-bx vend-check-bx2">
                    <div className="check-bx cehck-bx-v check-bx-v2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <span>Remember my preference</span>
                  </div>

                  <div
                    onClick={() => setForgotPasswrd(true)}
                    className="vend-forgt-paswrd-btn"
                  >
                    Forgot Password ?
                  </div>

                  <button className="vend-submt-btn">Sign In</button>

                  <p className="vend-text">
                    Don't have an account ?{" "}
                    <span onClick={() => setVendForm(true)}>
                      Create Account
                    </span>
                  </p>
                </form>

                <form action="#" className="forgot-password-vendor">
                  <div className="vend-bx mb-5">
                    <span>Email / Mobile No.</span>
                    <div className="vend-inpt-bx">
                      <input
                        type="text"
                        name="emailmob"
                        id="emailmob"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>

                  <button className="vend-submt-btn">
                    Reset Password Request
                  </button>
                </form>
              </div>

              <div
                className={
                  createAccount
                    ? "create-account-main-bx createaccountactive"
                    : "create-account-main-bx"
                }
              >
                <div className="vendor-reg-bx vendor-login-bx">
                  <div className="vendor-login-logo">
                    <img src="/images/customImg/nav-logo.png" alt="" />
                  </div>

                  <h6> Create Account </h6>

                  <div className="vend-reg-form-grid">
                    <div className="vend-bx">
                      <span>Your Name</span>
                      <div className="vend-inpt-bx">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>

                    <div className="vend-bx">
                      <span>Mobile Number</span>
                      <div className="vend-inpt-bx">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>

                    <div className="vend-bx">
                      <span>Email (optional) </span>
                      <div className="vend-inpt-bx">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>

                    <div className="vend-bx vend-bx-p">
                      <span>Password</span>
                      <div className="vend-inpt-bx">
                        <input
                          type="password"
                          name="Password"
                          id="Password"
                          placeholder="At least 10 characters"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <span>Password must be at least 10 characters</span>
                    </div>
                  </div>

                  <span className="note-textx">
                    By enrolling your mobile phone number . you consent to
                    receive automated security notifications via text message
                    from TGSS . Message and data rates may apply
                  </span>

                  {/* <div className="vend-check-bx mt-4">
                            <div className="check-bx cehck-bx-v">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            </div>
                            <span>View price comission on your category</span>
                        </div> */}

                  <button
                    onClick={() => setCreateAccount(true)}
                    className="vend-submt-btn reg-btn-vend mt-4 cont-btn-v"
                  >
                    Continue
                  </button>

                  {/* <button onClick={() => setVendMain(true)} className="vend-submt-btn reg-btn-vend mt-4">
                            Register Now
                        </button> */}

                  <p className="vend-text">
                    {" "}
                    have an account ?{" "}
                    <span onClick={() => setVendForm(false)}>Sign In</span>
                  </p>
                </div>

                <div
                  className={
                    selling
                      ? "reg-start-selling-main-bx regselingactive"
                      : "reg-start-selling-main-bx"
                  }
                >
                  <div className="verify-mobile-number-bx vendor-login-bx">
                    <div className="vendor-login-logo">
                      <img src="/images/customImg/nav-logo.png" alt="" />
                    </div>

                    <h6> Verify Mobile Number </h6>

                    <p>
                      A text with a One Time Password (OTP) has been sent to
                      your mobile number:{" "}
                    </p>

                    <form action="#" className="verify-mob-form">
                      <div className="vend-bx">
                        <span>Enter OTP</span>
                        <div className="vend-inpt-bx">
                          <input
                            type="password"
                            name="otp"
                            id="otp"
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>

                      <span className="resend-otp-text">Resend OTP</span>

                      <button
                        onClick={() => setSelling(true)}
                        className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v"
                      >
                        Create your TGSS account
                      </button>
                    </form>

                    <p>
                      By creating an account , you agree to TGSS{" "}
                      <NavLink to="#">Conditions of Use </NavLink>
                      and <NavLink to="#">Privacy Notice</NavLink>
                    </p>
                  </div>

                  <div
                    className={
                      shopDetForm
                        ? "about-your-busniess-main-bx businessactive"
                        : "about-your-busniess-main-bx"
                    }
                  >
                    <div className="reg-start-sell-bx ">
                      <h6>Register and Start Selling</h6>
                      <p>Please have the following before you again:</p>

                      <div className="seling-list">
                        <li>
                          Your bank account details for receiving payments from
                          TGSS{" "}
                        </li>
                        <li>Tax (GST/PAN) details of your business </li>
                      </div>

                      <span className="comn-text">
                        Please ensure that all the information you submit is
                        accurate .
                      </span>

                      <h5>Enter details below to continue registration </h5>

                      <div className="busin-inpt-bx">
                        <div className="vend-bx">
                          <span>Company/Business name</span>
                          <div className="vend-inpt-bx">
                            <input
                              type="text"
                              name="businessname"
                              id="businessname"
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <span className="comn-text d-inline-block mb-3">
                        Enter the company / business name a registered in
                        GST/PAN
                      </span>

                      <div className="seller-agrenmt-bx">
                        <h6>Seller Agreement</h6>

                        <div className="vend-check-bx vend-check-bx2">
                          <div className="check-bx cehck-bx-v">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <p>
                            I have read and agree to comply with and/or be bound
                            by terms and conditions of{" "}
                            <span>
                              TGSS services business Solutions Agreement , Terms
                              and Conditions{" "}
                            </span>{" "}
                            and <span>TGSS business Terms & conditions . </span>
                          </p>
                        </div>

                        <button
                          onClick={() => setShopDetForm(true)}
                          className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                    <div
                      className={
                        taxDet
                          ? "tax-det-main-bx taxdetactive"
                          : "tax-det-main-bx"
                      }
                    >
                      

                      <div className="about-your-business-bx">
                        <div className="shop-grid-bx">
                          <div className="shop-left-bx">
                            <h5>Tell us about your business</h5>

                            <form className="shop-form-bx">
                              <div className="shop-name-grid">
                                <div className="check-avail-bx">
                                  <div className="vend-bx">
                                    <div className="top-inpt-text">
                                      <span>Set a name for your GSS Store</span>
                                    </div>
                                    <div className="vend-inpt-bx">
                                      <input
                                        type="text"
                                        name="shopname"
                                        id="shopname"
                                        value={shopName}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        required
                                      />
                                    </div>

                                    {/* { isNameAval &&  checked && <p className="avail">This name is available .</p> } */}
                                    {shopName && (
                                      <p className="avail">
                                        {isValidName
                                          ? "This name is available."
                                          : "This name is not valid."}
                                      </p>
                                    )}
                                  </div>
                                </div>

                                <div className="vend-bx">
                                  <span>Product Category</span>
                                  <div className="vend-inpt-bx">
                                    <select
                                      name="productcategory"
                                      id="productcategory"
                                    >
                                      <option value="productcategory">
                                        Cloths
                                      </option>
                                      <option value="productcategory">
                                        Toys
                                      </option>
                                      <option value="productcategory">
                                        Electronics
                                      </option>
                                      <option value="productcategory">
                                        Shoes
                                      </option>
                                      <option value="productcategory">
                                        Footwears
                                      </option>
                                      <option value="productcategory">
                                        Furniture
                                      </option>
                                      <option value="productcategory">
                                        Perfumes
                                      </option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <h6>Enter your busniess address</h6>

                              <div className="address-form-grid">
                                <div className="vend-bx">
                                  <span>Pincode</span>
                                  <div className="vend-inpt-bx">
                                    <input
                                      type="text"
                                      name="pincode"
                                      id="pincode"
                                      autoComplete="off"
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="vend-bx">
                                  <span>Address Line 1</span>
                                  <div className="vend-inpt-bx">
                                    <input
                                      type="text"
                                      name="addressone"
                                      id="addressone"
                                      autoComplete="off"
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="vend-bx">
                                  <span>Address Line 2</span>
                                  <div className="vend-inpt-bx">
                                    <input
                                      type="text"
                                      name="addresstwo"
                                      id="addresstwo"
                                      autoComplete="off"
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="vend-bx">
                                  <span>City</span>
                                  <div className="vend-inpt-bx">
                                    <input
                                      type="text"
                                      name="city"
                                      id="city"
                                      autoComplete="off"
                                      required
                                    />
                                  </div>
                                </div>

                                <div className="vend-bx">
                                  <span>Product Category</span>
                                  <div className="vend-inpt-bx">
                                    <select name="state" id="state">
                                      <option value="state">State1</option>
                                      <option value="state">State2</option>
                                      <option value="state">State3</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="vend-bx">
                                  <span>Country/Region</span>
                                  <div className="vend-inpt-bx">
                                    <select name="Country" id="Country">
                                      <option value="Country">country1</option>
                                      <option value="Country">country2</option>
                                      <option value="Country">country3</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <button onClick={() => setTaxDet(true)} className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v btn-left">
                                Continue
                              </button>
                            </form>
                          </div>


                          <div className="shop-left-bx right-accordion-box">
                            <h5>FAQ</h5>

                            <div className="accordion-main-bx">
                              <Accordion
                                title="Can I change my GSS store name ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I change the category letter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Which address should I enter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I enter multiple pickup address ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                            </div>
                          </div>

                    


                        </div>
                      </div>


                      <div className="reg-start-sell-bx tax-det-bx about-your-business-bx">
                        <h6>Update your Tax details </h6>

                        <div className="shop-grid-bx">
                          <div className="tax-det-form-bx">
                            <div className="vend-check-bx vend-check-bx3">
                              <div className="check-bx cehck-bx-v">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </div>
                              <span>I have GSTIN number</span>
                            </div>

                            <div className="tax-det-form-grid">
                              <div className="vend-bx">
                                <span>Enter your tax details</span>
                                <div className="vend-inpt-bx">
                                  <select name="taxdet" id="taxdet">
                                    <option value="option">Option1</option>
                                    <option value="option">Option2</option>
                                    <option value="option">Option3</option>
                                    <option value="option">Option4</option>
                                  </select>
                                </div>
                              </div>

                              <div className="vend-bx">
                                <span>Seller Legal Name</span>
                                <div className="vend-inpt-bx">
                                  <input
                                    type="text"
                                    name="sellername"
                                    id="sellername"
                                    autoComplete="off"
                                  />
                                </div>
                              </div>

                              <div className="vend-bx">
                                <span>GST Number</span>
                                <div className="vend-inpt-bx">
                                  <input
                                    type="text"
                                    name="gst"
                                    id="gst"
                                    autoComplete="off"
                                  />
                                </div>
                              </div>

                              <div className="vend-bx">
                                <span>PAN Number</span>
                                <div className="vend-inpt-bx">
                                  <input
                                    type="text"
                                    name="pan"
                                    id="pan"
                                    autoComplete="off"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="vend-check-bx mt-4">
                              <div className="check-bx cehck-bx-v">
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </div>
                              <span>I do not have GSTIN number</span>
                            </div>

                        
                            <button onClick={() => callFunc()} className="vend-submt-btn reg-btn-vend otp-btn mt-4 cont-btn-v btn-left">
                              Submit
                            </button>
                          </div>


                          <div className="shop-left-bx right-accordion-box">
                            <h5>FAQ</h5>

                            <div className="accordion-main-bx">
                              <Accordion
                                title="Can I change my GSS store name ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I change the category letter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Which address should I enter ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                              <Accordion
                                title="Can I enter multiple pickup address ?"
                                para={
                                  <p>
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Laudantium asperiores
                                    atque reprehenderit nemo. Adipisci itaque
                                    laudantium libero illum reiciendis animi.{" "}
                                  </p>
                                }
                              />
                            </div>
                          </div>

                        </div>
                      </div>

                  

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="  vendor-form-messge-bx">
              <div className="vend-smile-bx">
                <img src="./images/customImg/happy.gif" alt="" />
              </div>

              <p>
                Your application has been submitted you will be notified on your
                registered mobile number and email.
              </p>

              <NavLink to="/">Back To Home</NavLink>
                          </div>

                          </div>
        </div>
      </section>
    </>
  );
};

export default VendorLogin;
