import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ManageWasteData from "./ManageWasteData";

const ManageWasteTable = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [searchItem , setSearchItem] = useState('');

  const filterData = ManageWasteData.filter((curData) => {
    const  matchItem  = curData.name.toLowerCase().includes(searchItem.toLowerCase()) || curData.userId.toString().includes(searchItem)
    return matchItem

  }) 


    
  
  
  return (
    <>
      <div className="mnge-wste-table-main-bx">
        <div className="appointment-flex-box mnge-waste-filter-flex">
          <p className="tex-line tex-line2"> Manage Waste</p>

          <div className="right-search-date-filter-box">
            <div className="A-search-box">
              <input
                type="text"
                name="search"
                id="search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                autoComplete="off"
                placeholder="Search..."
              />
            </div>

            <div className="dates-flex-box">
              <div className="sel-date">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
              </div>

              <span>to</span>

              <div className="sel-date">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </div>
            </div>

            <button className="clr-stck">Clear Stock</button>
          </div>
        </div>

        <div className="all-user-table stock-tble mnge-waste-table">
          <table>
            <thead>
              <tr>
                <th>SNO.</th>
                <th>Date & Time</th>
                <th>Total Waste (Kg)</th>
                <th>Value (<i class="fa-solid fa-indian-rupee-sign"></i>)</th>
                <th>Name</th>
                <th>Newspaper (kg)</th>
                <th>Office Paper (kg)</th>
                <th>Copies/Books (kg)</th>
                <th>Cardboard (kg)</th>
                <th>Plastic (kg)</th>
                <th>Iron (kg)</th>
                <th>Steel (kg)</th>
                <th>Aluminium (kg)</th>
                <th>Brass (kg)</th>
                <th>Copper (kg)</th>
                <th>Heavy Waste (kg)</th>
                <th>Light Waste (piece)</th>
                <th>Scrap Tablet (piece)</th>
                <th>Scrap Laptop (piece)</th>
                <th>CRT Monitor (piece)</th>
                <th>LCD Monitor (kg)</th>
                <th>Computer CPU (piece)</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
                {filterData.map((elem,id) => {
                    return <>
                    <tr key={id}>
                        <td> <span> {elem.id} </span> </td>
                        <td>
                        <div className="mnge-date">
                          <p> {elem.date} </p>
                          <span> {elem.time} </span>
                        </div>
                        </td>
                        <td> <span> {elem.totalwaste} </span> </td>
                        <td> <span> {elem.value} </span> </td>
                        <td> <div className="mnge-date user-text-m">  <p> {elem.name} </p>
                          <span> {elem.userId} </span> </div></td>

                          <td> <span> {elem.newspaper} </span> </td>
                          <td> <span> {elem.officepaper} </span> </td>
                          <td> <span> {elem.books} </span> </td>
                          <td> <span> {elem.cardboard} </span> </td>
                          <td> <span> {elem.plastic} </span> </td>
                          <td> <span> {elem.iron} </span> </td>
                          <td> <span> {elem.steel} </span> </td>
                          <td> <span> {elem.aluminium} </span> </td>
                          <td> <span> {elem.brass} </span> </td>
                          <td> <span> {elem.copper} </span> </td>
                          <td> <span> {elem.heavywaste} </span> </td>
                          <td> <span> {elem.lightwaste} </span> </td>
                          <td> <span> {elem.tablet} </span> </td>
                          <td> <span> {elem.laptop} </span> </td>
                          <td> <span> {elem.monitor} </span> </td>
                          <td> <span> {elem.lcd} </span> </td>
                          <td> <span> {elem.computer} </span> </td>
                          <td>
                        <div className="id-dwld-btn text-center-align">
                          <span className="b-span"> {elem.invoice} </span>
                         <i class="fa-regular fa-circle-down"></i> 
                        </div>
                      </td>

                          
                    </tr>
                    </>
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageWasteTable;
