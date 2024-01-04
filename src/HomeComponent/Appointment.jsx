import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import timeslotdata from "./timeslotData";

const Appointment = () => {



      // '8:00 am - 10:00 am',
      //  '10:00 am - 12:00 pm' ,
      //  '12:00 pm - 2:00 pm' , '2:00 pm - 4:00 pm' , '4:00 pm - 6:00 pm' , '6:00 pm - 8:00 pm' ,

    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [timeSlots, setTimeSlots] = useState(timeslotdata); // Empty array by default, to be filled when date is selected

 
  
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

                <div className="apnt-inpt-bx apnt-inpt-bx-a mb-4">
            <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Address"
                      autoComplete="off"
                      required
                    />
            </div>

                <div className="form-grid">

                <div className="apnt-inpt-bx apnt-inpt-bx-s">
                    <select name="service" id="service">
                      <option value="service">Select Your Service</option>
                      <option value="service">Waste Collector</option>
                      <option value="service">Cleaner</option>
                      <option value="service">Gardner</option>
                      <option value="service">Swiper</option>
                    </select>
                  </div>
                  
                


                  <div className="apnt-inpt-bx apnt-inpt-bx2" onClick={() => setShowCalendar(true)}>
                    <div> { selectedDate && selectedTime  ? <div> <span> Date : {selectedDate.toDateString()} </span>  <span>  Time : {selectedTime} </span>  </div>  :   <span>  Select Your Date and Time </span>  } </div> 
                  </div>
                </div>

               

                <div className="form-grid mt-2">
                <div className="apnt-inpt-bx apnt-inpt-bx-s">
                    <select name="service" id="service">
                      <option value="service">Select Service Type</option>
                      <option value="service">Once</option>
                      <option value="service">Weekly</option>
                    </select>
                  </div>

                  <button className="apnt-form-submit-btn">
                  Submit Request
                  </button>
                </div>

         
                
              </div>
            </div>

            <div className="main-video-bx">
            <div className="right-shdule-img-bx">


              <video controls autoplay  preload="auto" type="video/mp4">
                <source src="./images/customImg/video-file.mp4" />
              </video>
              </div>

                   
                
            </div>
            
          </div>
        </div>
      </section>

      

      {showCalendar && (
        <div className="date-time-popup-bx" onClick={() => setShowCalendar(false)}>
          <div className="date-time-main-bx" onClick={(e) => e.stopPropagation()}>
       
        <div className="calendar-popup">
          <Calendar  onChange={handleDateChange} value={selectedDate} />
   
        </div>
      
          
        {selectedDate && (
            <div className="time-slot-list">
              <h3>Available Appointments on {selectedDate.toDateString()}</h3>
              <ul>
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
                </ul>

            </div>
          )}  
 
      </div>

      

      </div>
        )}
    </>
  );
};

export default Appointment;
