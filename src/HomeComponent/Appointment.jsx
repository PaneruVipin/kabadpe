import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import timeslotdata from "./timeslotData";
import AddAddressList from "./AddAddressList";
import ServApntData from "./ServApnt";

const Appointment = () => {
  // '8:00 am - 10:00 am',
  //  '10:00 am - 12:00 pm' ,
  //  '12:00 pm - 2:00 pm' , '2:00 pm - 4:00 pm' , '4:00 pm - 6:00 pm' , '6:00 pm - 8:00 pm' ,

  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState(timeslotdata); // Empty array by default, to be filled when date is selected
  const [addAddress, setAddAddress] = useState(false);
  const [itemPrice , setItemPrice] = useState(null);
  const [apntData , setApntData] = useState(ServApntData);
  const [bookApnt , setBookApnt] = useState(false);
  const [compName , setCompName] = useState(null)
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(true); // Show time slots only when a date is selected
    // Fetch or set time slots based on the selected date
    // setTimeSlots(fetchTimeSlots(date)); // Fetch time slots based on the selected date
    // Placeholder for time slots
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBookNow = () => {
    // Perform actions when "Book Now" is clicked using selectedDate and selectedTime
    setShowCalendar(false);
    // Additional logic using selectedDate and selectedTime
  };

  const handlebutton = (getvalue) => {

    setItemPrice(getvalue === itemPrice ? null : getvalue);
    
  }

  const handleCompName = (valueName) => {

    setCompName(valueName);
    
  }

  return (
    <>
      <section className="schedule-apnt-comp">
        <div className="comon-container-2 apnt-container">
          <div className="apnt-heading">
            <p>Book Slots</p>
            <h3>Schedual Appointment</h3>
          </div>

          <div className="apnt-grid-bx">
            <div className="left-shdule-apnt-form-bx">
              <div className="apnt-slot-form-bx">
                <div className="form-grid">
                  <div className="apnt-inpt-bx">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div className="apnt-inpt-bx">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="Mobile No."
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                {/* <div className="apnt-inpt-bx apnt-inpt-bx-a mb-4">
            <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      autoComplete="off"
                      required
                    />
            </div> */}

                <div className="add-address-main-bx">
                  <button
                    onClick={() => setAddAddress(true)}
                    className="apnt-form-submit-btn add-adres-btn"
                  >
                    Add Address
                    <i class="fa-solid fa-location-dot"></i>
                  </button>

                  <div className="default-add-bx apnt-inpt-bx apnt-inpt-bx-text">
                    <p>4929 c/10 kanti nagar old seelumpur delhi-110031 </p>
                  </div>
                </div>

                <div className="form-grid form-grid3">
                  <div className="apnt-inpt-bx apnt-inpt-bx-s">
                    <select name="service" id="service">
                      <option value="service">Select Your Service</option>
                      <option value="service">Waste Collector</option>
                      <option value="service">Cleaner</option>
                      <option value="service">Gardner</option>
                      <option value="service">Swiper</option>
                    </select>
                  </div>

                  <div className="apnt-inpt-bx apnt-inpt-bx-s">
                    <select name="service" id="service">
                      <option value="service">Choose Weight</option>
                      <option value="service">Don't Know</option>
                      <option value="service">Less than 200 Kg</option>
                      <option value="service">More than 200 Kg</option>

                    </select>
                  </div>

                  <div className="apnt-inpt-bx apnt-inpt-bx-s">
                    <select name="service" id="service">
                      <option value="service">Select Frequency</option>
                      <option value="service">Once</option>
                      <option value="service">Weekly</option>
                      <option value="service">Monthly</option>

                    </select>
                  </div>
                </div>

                <div className="form-grid ">
                  <div
                    className="apnt-inpt-bx apnt-inpt-bx2"
                    onClick={() => setShowCalendar(true)}
                  >
                    <div>
                      {" "}
                      {selectedDate && selectedTime ? (
                        <div>
                          {" "}
                          <span>
                            {compName} 
                          
                          </span>{" "}
                          <span>    {selectedDate.toDateString()} , {selectedTime} </span>{" "}
                        </div>
                      ) : (
                        <span> Select Your Date and Time </span>
                      )}{" "}
                    </div>
                  </div>

                  <button className="apnt-form-submit-btn">
                    Submit Request
                  </button>
                </div>
              </div>
            </div>

            <div className="main-video-bx">
              <div className="right-shdule-img-bx">
                <video controls autoplay preload="auto" type="video/mp4">
                  <source src="./images/customImg/video-file.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {addAddress ? (
        <AddAddressList onclickClose={() => setAddAddress(false)} />
      ) : null}

      {showCalendar && (
        <div
          className="date-time-popup-bx"
          onClick={() => setShowCalendar(false)}
        >
          <div
            className="date-time-main-bx"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="calendar-popup">
              <Calendar onChange={handleDateChange} value={selectedDate} />
            </div>

            {selectedDate && (
              <div className="time-slot-list">
                <h3>
                  Available Companies{" "}
                  <span> {selectedDate.toDateString()} </span>
                </h3>
                <div className="avalbe-cmpnies-main-bx">

                {ServApntData.map((curelem,id) => {
                  return (
                    <>
                  <div key={id} className="avalbe-cmpnies-bx">
                    <div className="avalbe-cmpnies-flex">
                      <div className="left-cmpnies-bx">
                        <div className="cmpnies-logo">
                          <img src={curelem.img} alt="" />
                        </div>

                        <div className="cmpnies-info">
                          <h6> {curelem.name} </h6>

                          <div className="waste-prodts-flex">
                            <div className="w-prodts-bx">
                              <h6> {curelem.wasteProdtext} </h6>
                              <span>{curelem.wasteProd}</span>
                            </div>

                            <div className="w-prodts-bx">
                              <h6>{curelem.wasteProdtexttwo}</h6>
                              <span>{curelem.wasteProdtwo}</span>
                            </div>

                            <div className="w-prodts-bx">
                              <h6>{curelem.wasteProdtextthree}</h6>
                              <span> {curelem.wasteProdthree} </span>
                            </div>
                          </div>

                          <div className="rating-flex-bx">
                            <div className="stars">
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-solid fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                            </div>

                            <span> More products</span>

                            <div onClick={() =>  handlebutton(curelem.id)} className={itemPrice ? "round-arrow : arrowactive" : "round-arrow"}>
                              <i class="fa-solid fa-angle-down"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button onClick={() => {setBookApnt(true) ,  handleCompName(curelem.name)} } className="Select-apnt">Select</button>
                    </div>

                  { itemPrice === curelem.id && (
                   <div className= "item-price-grid-main-bx">
                      <div className="all-user-table item-price-box">
                        <table>
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Iron</td>
                              <td>₹60.00</td>
                            </tr>

                            <tr>
                              <td>Plastic</td>
                              <td>₹60.00</td>
                            </tr>

                            <tr>
                              <td>Aluminium</td>
                              <td>₹70.00</td>
                            </tr>

                            <tr>
                              <td>Copper</td>
                              <td>₹70.00</td>
                            </tr>

                            <tr>
                              <td>Magazine</td>
                              <td>₹70.00</td>
                            </tr>

                            <tr>
                              <td>Wheel</td>
                              <td>₹70.00</td>
                            </tr>
                            
                          </tbody>
                        </table>
                      </div>

                      <div className="all-user-table item-price-box">
                        <table>
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Iron</td>
                              <td>₹60.00</td>
                            </tr>

                            <tr>
                              <td>Plastic</td>
                              <td>₹60.00</td>
                            </tr>

                            <tr>
                              <td>Aluminium</td>
                              <td>₹70.00</td>
                            </tr>

                            <tr>
                              <td>Copper</td>
                              <td>₹70.00</td>
                            </tr>

                            <tr>
                              <td>Magazine</td>
                              <td>₹70.00</td>
                            </tr>

                            <tr>
                              <td>Wheel</td>
                              <td>₹70.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                    }
                  </div>

                    </>
                  )
                })}

</div>
               
              </div>
            )}
          </div>

        { bookApnt && (

        <div  className="book-apnt-bx" onClick={(e) => e.stopPropagation()}>
            <h6>Book Appointment</h6>
            
                {timeSlots.map((time, index) => (
                  <li key={index}>
                    <div className="left-time-date-bx">
                    <p> {time.timeslot}  </p>
                    <span>3 slot available</span>
                    </div>
                    
                    <button onClick={ () => {handleBookNow() , handleTimeSelection(time.timeslot)}} className={time.btn === "Unavailable" ? "book-apnt book-org-btn" : "book-apnt"}>
                    {time.btn} 
                    </button>
                  </li>
                ))}

                <div onClick={() => setBookApnt(false)} className="close-btn">
                <i class="fa-solid fa-xmark"></i>
                </div>
                
                </div> 

                ) }
        </div>
      )}
    </>
  );
};

export default Appointment;
