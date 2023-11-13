import React, { useState } from 'react'

const WasteWorkLocat = () => {
  const [pinText, setPinText] =  useState(false);
  const [addressBox , setAddressBox] =  useState(false);


  return (
    <>
      <section className="waste-work-locat-comp waste-work-locat-comp3 waste-appoint-ment-comp">
      <div
                className={"right-tab-main-bx tab-bx tabbxactive"
 }
              >
                <div className="tab-main-bx">
                  <h3>My Work Location</h3>

                  <div className="work-locat-wrap-bx">

                  <div className="location-id-fled-bx">
                    <p className="tex-line tex-line4 tb-para-chng-col">Location</p>

                <div className={ pinText ===  true ? "id-field-main idfldactive" : "id-field-main"}>
                    <div className="id-feld-bx">
                      <div className="pin-code-inpt comn-inpt-bg comn-inpt-bg2">
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          placeholder="Pin code"
                        />
                      </div>
                      <button onClick={() => setPinText(!pinText)} className="pin-submit-btn pin-submit-btn2">
                        Send request for approval
                      </button>
                    </div>
                    <p>Your Request Has Been Sent, Status Will be Updated Soon</p>
                  </div>
                  </div>

                  <div className="table-parent-bx">
                    <div className="prof-table-main-bx prof-table-main-bx4">
                      <table>
                        <thead>
                          <tr>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>OrdeStatus</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>110032</td>
                            <td className="">Approved</td>
                            <td>110032</td>
                            <td className="tbledatadeactive">Pending</td>
                          </tr>

                          <tr>
                            <td>110032</td>
                            <td className="">Approved</td>
                            <td>110032</td>
                            <td className="tbledatadeactive">Pending</td>
                          </tr>

                          <tr>
                            <td>110032</td>
                            <td className="">Approved</td>
                            <td>110032</td>
                            <td className="tbledatadeactive">Pending</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="location-id-fled-bx">
                    <p className="tex-line mt-4 tex-line4 tb-para-chng-col">Current address</p>

                    <button onClick={() => setAddressBox(!addressBox)} className="edit-btn pin-submit-btn2">Edit</button>
                  </div>

                  <div className={ addressBox ===  true  ? "address-showhide-bx addrssbxactive" : "address-showhide-bx"}>
                    
                  <div className="address-info-bx address-info-bx3">

                    <h6>Add: <span>65A, Street No 4, Kundan Nagar, Laxmi Nagar</span></h6>
                    
                    <h6>City : <span>Delhi</span></h6>
                   
                   <h6>State : <span>New Delhi</span></h6>
                   <h6>Pin code : <span>110092</span></h6>
                   <h6>Landmark : <span>Near Lovely Public School</span></h6>

                  </div>

                  <div className="my-det-form-grid my-det-form-grid-showhide my-add-form-grid">
                    <form className="prof-form" action="#">
                      <div className="prof-form-grid prof-form-grid2">
                        <div className="prof-intp-bx prof-intp-bx3">
                          <label htmlFor="address">Address</label>
                          <div className="prof-inpt-fild comn-inpt-bg">
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
                          <div className="prof-intp-bx prof-intp-bx3">
                            <label htmlFor="city">City</label>
                            <div className="prof-inpt-fild comn-inpt-bg">
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

                          <div className="prof-intp-bx prof-intp-bx3">
                            <label htmlFor="state">state</label>
                            <div className="prof-inpt-fild comn-inpt-bg">
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

                          <div className="prof-intp-bx prof-intp-bx3">
                            <label htmlFor="Pin">Pin</label>
                            <div className="prof-inpt-fild comn-inpt-bg">
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
                          <div className="prof-intp-bx prof-intp-bx3">
                            <label htmlFor="landmark">Landmark</label>
                            <div className="prof-inpt-fild comn-inpt-bg">
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

                          {/* <div className="prof-intp-bx prof-selct-bx">
                            <label htmlFor="landmark">Location Type</label>
                            <select name="location" id="location">
                              <option value="location">Choose</option>
                              <option value="location">Work</option>
                              <option value="location">Office</option>
                            </select>
                          </div> */}
                        </div>

                        <button
                          type="submit"
                          className="submit-btn address-btn address-btn4  pin-submit-btn2"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>

                  </div>

                  </div>

                </div>
              </div>
      </section>
    </>
  )
}

export default WasteWorkLocat
