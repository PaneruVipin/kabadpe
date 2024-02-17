import React, { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const IndvdualPlan = ({onSwitch}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [upgrade , setUpgrade] = useState(false);

  const handleCalendarChange = (date) => {
    setSelectedDate(date);
  };

  const handleCalendarSubmit = () => {
    setShowCalendar(false);
    // Perform any additional actions with the selected date
  };
  return (
    <>
      <div className="all-user-table mt-5">
      <table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Plan </th>
                <th>Worker</th>
                <th>Subscription Period</th>
                <th>Area</th>
                <th>Sub Area</th>
                <th>Amount</th>
                <th>Invoice</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td> <span>1</span> </td>
                    <td> <span>Monthly</span> </td>
                    <td> <span>Andrew Garfield</span> </td>
                    <td> <span>{selectedDate.toLocaleDateString()}</span> </td>
                    <td> <span>Laxmi Nagar</span> </td>
                    <td> <span>Kundan Nagar</span> </td>
                    <td> <span>₹30</span> </td>
                    <td> <span>CSS221400</span> </td>
                    <td> <span className='actve-text'>Active</span> </td>

                <td>
                    <div className="edit-upgrade-btns">
                        <button onClick={() => setShowCalendar(true)}>Extend</button>
                        <button onClick={() => setUpgrade(true)}>Upgrade</button>
                    </div>
                </td>

                </tr>
               
            </tbody>
         
          </table>
      </div>

      {showCalendar && (

      <div className='calendar-choose-date-comp'>
        <div className='calendar-choose-date-bx'>
          <Calendar
            onChange={handleCalendarChange}
            value={selectedDate}
          />
          <button onClick={handleCalendarSubmit} className='date-chose-submit-btn'>Submit</button>
        </div>
    </div>
    )}

   {upgrade && ( 
   <div className="upg-popup-bx" onClick={() => setUpgrade(false)}>
      <div className="upg-popup" onClick={(e) => e.stopPropagation()}>

        <div className="upg-li">

          <h6>Plan A Name</h6>
          <div className="current-name">
          <i class="fa-solid fa-check"></i>
          </div>
          
        </div>

        <div className="upg-li">

<h6>Plan B Name</h6>
<span>Assign</span>
</div>

<div className="upg-li">

<h6>Plan C Name</h6>
<span>Assign</span>

</div>
        
      </div>
    </div>
    )}

    </>
  )
}

export default IndvdualPlan
