import React, { useState } from "react";
import "../style/MyAccount.css";
import "../style/WasteCollector.css";

const Myaccount = () => {
  const [toggleSate, setToggleState] = useState(1);
  const [leftTab, setLeftTab] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const switchTab = () => {

  // }

  return (
    <>
      <section className="user-prof-comp">
        <span className="u-pf-one"></span>
        <span className="u-pf-two">
          <span className="u-pf-three"></span>
        </span>
        <span className="u-pf-four"></span>
      </section>

      <section className="prof-record-main-sect">
        <div className="prof-record-grid main-container">
          <section className="user-prof-main-bx">
            <div className="user-prof-contanier">
              <div className="user-prf-main">
                <div className="user-img">
                  <img src="/images/customImg/user-prf-img.webp" alt="" />
                </div>
                <div className="user-prf-info">
                  <h4>Tom Holland</h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis deleniti excepturi nisi, expedita a tempora commodi
                    quasi quo illo nesciunt quibusdam tenetur corporis neque
                    voluptatum asperiores dignissimos totam reprehenderit
                    laudantium .
                  </p>
                </div>
              </div>

              <div className="user-prf-switch-btns-flex">
                <button className="user-prf-btn userbtnactive">
                  Following
                </button>

                <button className="user-prf-btn">Message</button>
              </div>
            </div>
          </section>

          <section className="records-comp">
            <div className="user-prof-contanier">
              <div className="record-grid">
                <div className="record-bx">
                  <h5 className="r-numb">236</h5>
                  <p className="r-ttl">Wallet Banalce</p>
                  <h6 className="r-text">
                    In <span>Rupees</span>
                  </h6>
                </div>

                <div className="record-bx">
                  <h5 className="r-numb">15.6k</h5>
                  <p className="r-ttl">Total Waste Sold</p>
                  <h6 className="r-text">
                    In <span>Rupees</span>
                  </h6>
                </div>

                <div className="record-bx">
                  <h5 className="r-numb">5.7k</h5>
                  <p className="r-ttl">Waste Sold</p>
                  <h6 className="r-text">
                    In <span>KG</span>{" "}
                  </h6>
                </div>

                <div className="record-bx">
                  <h5 className="r-numb">3.5k</h5>
                  <p className="r-ttl">Followers</p>
                  <h6 className="r-text">
                    Lorem <span>Ipsum</span> .
                  </h6>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/*  */}
      <section className="my-profile-comp">
        <div className="user-prof-contanier">
          <button onClick={() => setLeftTab(true)} className="m-prof-det-btn">
            Profile Details <i className="fa-solid fa-arrow-right"></i>
          </button>

          <div className="my-prof-grid">
            {/* { leftTab ? "left-tabs-link-main-bx lefttabactive" : "left-tabs-link-main-bx"} */}

            <div
              className={
                leftTab
                  ? "left-tabs-link-main-bx lefttabactive"
                  : "left-tabs-link-main-bx"
              }
            >
              {/* <h3>My Account</h3> */}

              <div className="tabls-btn-link-flex">
                <button
                  onClick={() => {
                    toggleTab(6), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 6
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  My details
                </button>

                <button
                  onClick={() => {
                    toggleTab(1), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 1
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  My address book
                </button>

                <button
                  onClick={() => {
                    toggleTab(2), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 2
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  My order history
                </button>

                <button
                  onClick={() => {
                    toggleTab(3), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 3
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-wallet"></i>
                  </div>
                  My sales history
                </button>

                <button
                  onClick={() => {
                    toggleTab(4), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 4
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-tag"></i>
                  </div>
                  My Offers
                </button>

                <button
                  onClick={() => {
                    toggleTab(5), setLeftTab(false);
                  }}
                  className={
                    toggleSate === 5
                      ? "prof-tab-link-bx proftabactive"
                      : "prof-tab-link-bx"
                  }
                >
                  <div className="tab-icon">
                    <i className="fa-solid fa-gear"></i>
                  </div>
                  My account setings
                </button>
              </div>
            </div>

            <div className="right-tabs-bx">
              <div
                className={
                  toggleSate === 6
                    ? "right-tab-main-bx tab-bx tabbxactive"
                    : "right-tab-main-bx tab-bx"
                }
              >
                <div className="tab-main-bx">
                  <h3>My details</h3>

                  <p className="tex-line">Personal information</p>

                  <div className="my-det-form-grid my-det-form-grid33">
                    <div className="left-det-form-text">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. at eveniet et architecto nulla vel aliquam.
                      </p>
                    </div>

                    <form className="prof-form" action="#">
                      <div className="prof-form-grid">
                        <div className="prof-intp-bx">
                          <label htmlFor="first-name">First Name</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="firstname"
                              id="firstname"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="last-name">Last Name</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="lastname"
                              id="lastname"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="mobile">Mobile</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="mobile"
                              id="mobile"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="email">Last Name</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <button type="submit" className="submit-btn">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="tex-line tex-line2">Password</p>

                  <div className="my-det-form-grid my-det-form-grid33">
                    <div className="left-det-form-text">
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. at eveniet et architecto nulla vel aliquam.
                      </p>
                    </div>

                    <form className="prof-form" action="#">
                      <div className="prof-form-grid">
                        <div className="prof-intp-bx">
                          <label htmlFor="newpassword">New Password</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="password"
                              name="newpassword"
                              id="newpassword"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="prof-intp-bx">
                          <label htmlFor="confirmpassword">
                            Confirm Password
                          </label>
                          <div className="prof-inpt-fild">
                            <input
                              type="password"
                              name="confirmpassword"
                              id="confirmpassword"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <button type="submit" className="submit-btn">
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="tex-line tex-line2">Account details</p>

                  <form className="prof-form" action="#">
                    <div className="my-account-det-form-grid">
                      <div className="prof-intp-bx prof-selct-bx">
                        <label htmlFor="Bank">Location Type</label>
                        <select name="Bank" id="Bank">
                          <option value="Bank">Choose Bank</option>
                          <option value="Bank">Choose Bank</option>
                          <option value="Bank">Choose Bank</option>
                        </select>
                      </div>

                      <div className="prof-intp-bx">
                        <label htmlFor="full-name">Full Name</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>

                      <div className="prof-intp-bx">
                        <label htmlFor="accountnumber">Account Number</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="text"
                            name="accountnumber"
                            id="accountnumber"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="account-form-two-grid">
                      <div className="prof-intp-bx">
                        <label htmlFor="accountnumber">Account Number</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="text"
                            name="accountnumber"
                            id="accountnumber"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>

                      <div className="prof-intp-bx">
                        <label htmlFor="IFSC">IFSC Code</label>
                        <div className="prof-inpt-fild">
                          <input
                            type="code"
                            name="IFSC"
                            id="IFSC"
                            placeholder=""
                            autoComplete="off"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="submit-btn bankacct-btn">
                      Save
                    </button>
                  </form>
                </div>
              </div>

              <div
                className={
                  toggleSate === 1
                    ? "right-tab-main-bx tab-bx tabbxactive"
                    : "right-tab-main-bx tab-bx"
                }
              >
                <div className="tab-main-bx">
                  <h3>My addressbook</h3>

                  <p className="tex-line">Current address</p>

                  <div className="my-det-form-grid my-add-form-grid">
                    <form className="prof-form" action="#">
                      <div className="prof-form-grid prof-form-grid2">
                        <div className="prof-intp-bx">
                          <label htmlFor="address">Address</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="mini-inpt-three-grid-bx">
                          <div className="prof-intp-bx">
                            <label htmlFor="city">City</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx">
                            <label htmlFor="state">state</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="state"
                                id="state"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx">
                            <label htmlFor="Pin">Pin</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="Pin"
                                id="Pin"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="land-loca-fild-grid-bx">
                          <div className="prof-intp-bx">
                            <label htmlFor="landmark">Landmark</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="landmark"
                                id="landmark"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx prof-selct-bx">
                            <label htmlFor="landmark">Location Type</label>
                            <select name="location" id="location">
                              <option value="location">Choose</option>
                              <option value="location">Work</option>
                              <option value="location">Office</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="submit-btn address-btn"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>

                  <p className="tex-line mt-4">Delivery address</p>

                  <div className="form-check">
                    {/* <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"> */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Check this if delivery address is same
                    </label>
                  </div>

                  <div className="my-det-form-grid my-add-form-grid">
                    <form className="prof-form" action="#">
                      <div className="prof-form-grid prof-form-grid2">
                        <div className="prof-intp-bx">
                          <label htmlFor="address">Address</label>
                          <div className="prof-inpt-fild">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              placeholder=""
                              autoComplete="off"
                              required
                            />
                          </div>
                        </div>

                        <div className="mini-inpt-three-grid-bx">
                          <div className="prof-intp-bx">
                            <label htmlFor="city">City</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx">
                            <label htmlFor="state">state</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="state"
                                id="state"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx">
                            <label htmlFor="Pin">Pin</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="Pin"
                                id="Pin"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="land-loca-fild-grid-bx">
                          <div className="prof-intp-bx">
                            <label htmlFor="landmark">Landmark</label>
                            <div className="prof-inpt-fild">
                              <input
                                type="text"
                                name="landmark"
                                id="landmark"
                                placeholder=""
                                autoComplete="off"
                                required
                              />
                            </div>
                          </div>

                          <div className="prof-intp-bx prof-selct-bx">
                            <label htmlFor="landmark">Location Type</label>
                            <select name="location" id="location">
                              <option value="location">Choose</option>
                              <option value="location">Work</option>
                              <option value="location">Office</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="submit-btn address-btn"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div
                className={
                  toggleSate === 2
                    ? "table-parent-bx tab-bx tabbxactive"
                    : "table-parent-bx tab-bx"
                }
              >
                <div className="prof-table-main-bx ">
                  <table>
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>Date</th>
                        <th>Order Value (INR)</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>29-09-2023</td>
                        <td>8700/-</td>
                        <td>
                          CSS09480{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>27-08-2023</td>
                        <td>659/-</td>
                        <td>
                          CSS08963{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>03-08-2023</td>
                        <td>762/-</td>
                        <td>
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className={
                  toggleSate === 3
                    ? "table-parent-bx tab-bx tabbxactive"
                    : "table-parent-bx tab-bx"
                }
              >
                <div className="prof-table-main-bx prof-table-main-bx2 ">
                  <table>
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Order Value (INR)</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>29-09-2023</td>
                        <td>Cash</td>
                        <td>8700/-</td>
                        <td>
                          CSS09480{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>27-08-2023</td>
                        <td>Wallet</td>
                        <td>659/-</td>
                        <td>
                          CSS08963{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>03-08-2023</td>
                        <td>Wallet</td>
                        <td>762/-</td>
                        <td>
                          CSS08931{" "}
                          <div className="inv-icon">
                            <i className="fa-regular fa-circle-down"></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                className={
                  toggleSate === 4
                    ? "offer-comp tab-bx tabbxactive"
                    : "offer-comp tab-bx"
                }
              >
                <div className="offer-card-grid">
                  <div className="offer-main-bx">
                    <div className="offer-img">
                      <img src="/images/customImg//offer-1.jpg" alt="" />
                    </div>
                    <div className="offer-bx">
                      <div className="offer-info">
                        <h3>Offer Heading</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis, nam ..
                        </p>

                        <h6>
                          Expiry Date <span>10/10/2023</span>
                        </h6>

                        <div className="offer-btns">
                          <div className="offer-btn-flex">
                            <button className="redm-btn off-btn">
                              Redeem Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="offer-main-bx">
                    <div className="offer-img">
                      <img src="/images/customImg//offer-2.jpg" alt="" />
                    </div>
                    <div className="offer-bx">
                      <div className="offer-info">
                        <h3>Offer Heading</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis, nam ..
                        </p>

                        <h6>
                          Expiry Date <span>10/10/2023</span>
                        </h6>

                        <div className="offer-btns">
                          <div className="offer-btn-flex">
                            <button className="redm-btn off-btn">
                              Redeem Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="offer-main-bx">
                    <div className="offer-img">
                      <img src="/images/customImg//offer-3.jpg" alt="" />
                    </div>
                    <div className="offer-bx">
                      <div className="offer-info">
                        <h3>Offer Heading</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis, nam ..
                        </p>

                        <h6>
                          Expiry Date <span>10/10/2023</span>
                        </h6>

                        <div className="offer-btns offer-btns2">
                          <div className="offer-btn-flex offer-btn-flex2">
                            <button className="exprd-btn off-btn">
                              Expired
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="offer-main-bx">
                    <div className="offer-img">
                      <img src="/images/customImg//offer-2.jpg" alt="" />
                    </div>
                    <div className="offer-bx">
                      <div className="offer-info">
                        <h3>Offer Heading</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis, nam ..
                        </p>

                        <h6>
                          Expiry Date <span>10/10/2023</span>
                        </h6>

                        <div className="offer-btns offer-btns2">
                          <div className="offer-btn-flex offer-btn-flex2">
                            <button className="exprd-btn off-btn">
                              Expired
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="offer-main-bx">
                    <div className="offer-img">
                      <img src="/images/customImg//offer-3.jpg" alt="" />
                    </div>
                    <div className="offer-bx">
                      <div className="offer-info">
                        <h3>Offer Heading</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis, nam ..
                        </p>

                        <h6>
                          Expiry Date <span>10/10/2023</span>
                        </h6>

                        <div className="offer-btns offer-btns2">
                          <div className="offer-btn-flex offer-btn-flex2">
                            <button className="exprd-btn off-btn">
                              Expired
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="offer-main-bx">
                    <div className="offer-img">
                      <img src="/images/customImg//offer-1.jpg" alt="" />
                    </div>
                    <div className="offer-bx">
                      <div className="offer-info">
                        <h3>Offer Heading</h3>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quis, nam ..
                        </p>

                        <h6>
                          Expiry Date <span>10/10/2023</span>
                        </h6>

                        <div className="offer-btns offer-btns2">
                          <div className="offer-btn-flex offer-btn-flex2">
                            <button className="exprd-btn off-btn">
                              Expired
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myaccount;
