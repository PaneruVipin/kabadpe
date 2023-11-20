import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Profile.css";
import "../style/Support.css";
import "../style/Profile.css";
import "../style/Support.css";
import JoditEditor from "jodit-react";
import UseProfRightbx from "./UseProfRightbx";

const Supportticket = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [fileInputs, setFileInputs] = useState([0]);
  const [ticketForm, setTicketForm] = useState(false);
  const [submitTicketText, setSubmitTicketText] = useState(false);

  // Function to add a new input file box
  const addInputFile = (e) => {
    e.preventDefault();
    setFileInputs([...fileInputs, fileInputs.length]);
  };

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    setSubmitTicketText(true);
  };

  setTimeout(() => {
    setSubmitTicketText(false);
  }, 7000);

  return (
    <>
      <section className="user-prof-grid-comp">
        <section className="sup-tickt-search-main">
          <section className="top-user-prof-search-bx top-user-prof-search-bx2">
            <div className="u-p-cont u-p-cont3 top-user-prof-search-bx-flex">
              <div className="left-user-prof-name-bx">
                <h5>
                  Hi, <span>Alysia</span>
                </h5>
              </div>

              <div className="right-user-prof-search-flex-bx">
                <div className="u-prf-srch-bx">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                  />
                </div>

                <button
                  onClick={() => setTicketForm(true)}
                  className="u-prf-btn-bx"
                >
                  Create Ticket
                </button>
              </div>
            </div>
          </section>

          <section className="support-ticket-comp">
            <div className="c-t-cont">
              <h5>Support Ticket</h5>

              <div className="u-p-updt-table-bx support-ticket-table">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="u-p-tb-data sup-tb-data">
                          <div className="t-icn t-numbr s-t-numb">1</div>
                          <div className="u-p-tb-info sale-hist-data sale-hist-data3 sup-tick-data sup-tick-data6">
                            <h6>Sales</h6>
                            <span>399301</span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="u-p-tb-numb-bx sale-hist-data sup-tick-data">
                          <NavLink to="/">
                            <p>
                              Lorem ipsum dolor sit amet consectetur excepturi
                              minus cumque soluta pariatur.
                            </p>
                          </NavLink>
                        </div>
                      </td>

                      <td>
                        <div className="u-p-tb-numb-bx sale-hist-data sup-tick-btn-flex">
                          <button>Reply</button>

                          <button className="supp-btn-grn">Open</button>
                        </div>
                      </td>

                      <td>
                        <div className="complet-bx upcoming-bx sale-hist-data sup-tick-data5">
                          <h6>Monday , October</h6>
                          <span>16th , (10:00 am)</span>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-data sup-tb-data">
                            <div className="t-icn t-numbr s-t-numb">2</div>

                            <div className="u-p-tb-info sale-hist-data sale-hist-data3 sup-tick-data sup-tick-data6">
                              <h6>Marketing</h6>
                              <span>399302</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-data">
                            <NavLink to="/">
                              <p>
                                Lorem ipsum dolor sit amet consectetur excepturi
                                minus cumque soluta pariatur.
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-btn-flex">
                            <button>Reply</button>

                            <button className="supp-btn-yelo">Working</button>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="complet-bx upcoming-bx sale-hist-data sup-tick-data5">
                            <h6>Monday , October</h6>
                            <span>16th , (10:00 am)</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-data sup-tb-data">
                            <div className="t-icn t-numbr s-t-numb">3</div>

                            <div className="u-p-tb-info sale-hist-data sale-hist-data3 sup-tick-data sup-tick-data6">
                              <h6>Finance</h6>
                              <span>399303</span>
                              {/* <span>Anand Vihar</span> */}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-data">
                            <NavLink to="/">
                              <p>
                                Lorem ipsum dolor sit amet consectetur excepturi
                                minus cumque soluta pariatur.
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-btn-flex">
                            <button>Reply</button>

                            <button className="supp-btn-orng">Assigned</button>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="complet-bx upcoming-bx sale-hist-data sup-tick-data5">
                            <h6>Monday , October</h6>
                            <span>16th , (10:00 am)</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-data sup-tb-data">
                            <div className="t-icn t-numbr s-t-numb">4</div>

                            <div className="u-p-tb-info sale-hist-data sale-hist-data3 sup-tick-data sup-tick-data6">
                              <h6>Sales</h6>
                              <span>399304</span>
                              {/* <span>Anand Vihar</span> */}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-data">
                            <NavLink to="/">
                              <p>
                                Lorem ipsum dolor sit amet consectetur excepturi
                                minus cumque soluta pariatur.
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-btn-flex">
                            <button>Reply</button>

                            <button className="supp-btn-blu">Answered</button>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="complet-bx upcoming-bx sale-hist-data sup-tick-data5">
                            <h6>Monday , October</h6>
                            <span>16th , (10:00 am)</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-data sup-tb-data">
                            <div className="t-icn t-numbr s-t-numb">5</div>

                            <div className="u-p-tb-info sale-hist-data sale-hist-data3 sup-tick-data sup-tick-data6">
                              <h6>Marketing</h6>
                              <span>399305</span>
                              {/* <span>Anand Vihar</span> */}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-data">
                            <NavLink to="/">
                              <p>
                                Lorem ipsum dolor sit amet consectetur excepturi
                                minus cumque soluta pariatur.
                              </p>
                            </NavLink>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="u-p-tb-numb-bx sale-hist-data sup-tick-btn-flex">
                            <button>Reply</button>

                            <button className="supp-btn-red">Closed</button>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="supp-data">
                          <div className="complet-bx upcoming-bx sale-hist-data sup-tick-data5">
                            <h6>Monday , October</h6>
                            <span>16th , (10:00 am)</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section
            className={
              ticketForm
                ? "ticket-form-comp ticktformactive"
                : "ticket-form-comp"
            }
          >
            <div className="create-ticket-form-main">
              <h6>Create new Support Request</h6>

              <form action="#">
                <div className="ticket-form-grid">
                  <div className="tickt-inpt-bx">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>

                  <div className="tickt-inpt-bx">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="tickt-inpt-bx tickt-inpt-bx-sub">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="ticket-form-grid">
                  <div className="tickt-inpt-bx tickt-sel-bx">
                    <select name="department" id="department">
                      <option value="department">Choose Department</option>
                      <option value="department">Choose Department</option>
                      <option value="department">Choose Department</option>
                      <option value="department">Choose Department</option>
                    </select>
                  </div>

                  <div className="tickt-inpt-bx tickt-sel-bx">
                    <select name="department" id="department">
                      <option value="department">Choose Priority</option>
                      <option value="department">Choose Priority</option>
                      <option value="department">Choose Priority</option>
                      <option value="department">Choose Priority</option>
                    </select>
                  </div>
                </div>

                <div className="text-editor-bx">
                  <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => {
                        setContent(newContent);
                    }}
                  />
                </div>

                {fileInputs.map((inputIndex) => (
                  <div key={inputIndex} className="input-file">
                    <input
                      type="file"
                      accept="image/*"
                      name={`fileInput-${inputIndex}`}
                      id="input_file"
                    />
                    <span>Allowed file extension jpg, gif, jpeg, png</span>
                  </div>
                ))}

                <div className="add-file">
                  <button onClick={addInputFile} className="add-input-file-bx">
                    {" "}
                    <i className="fa-solid fa-plus"></i> Add{" "}
                  </button>
                </div>

                <div className="ticket-submit-cancel-btn">
                  <button
                    onClick={handleTicketSubmit}
                    className="tickt-submit-btn"
                  >
                    Submit Ticket
                  </button>

                  <div>
                    {submitTicketText && (
                      <span className="tickt-text">
                        Thankyou, Your Ticket has been Submitted, Will update
                        you soons
                      </span>
                    )}
                  </div>
                </div>
              </form>

              <div
                onClick={() => setTicketForm(false)}
                className="close-ticket-form"
              >
                <i className="fa-solid fa-xmark"></i>
              </div>
            </div>
          </section>
        </section>

        <UseProfRightbx />
      </section>

      {/*  <script>
                        CKEDITOR.replace( 'editor1' );
                </script> */}
    </>
  );
};

export default Supportticket;
