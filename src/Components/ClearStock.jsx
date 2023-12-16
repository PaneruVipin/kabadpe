import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import stockData from './StockData';


const ClearStock = () => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    const [stock , setStock] = useState(stockData);
  return (
    <>
      
      <section className="waste-appoint-ment-comp">
        <div className="right-tab-main-bx  tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3">
            <h3>Clear Stock</h3>

            <div className="waste-appoint-main-bx">
              <div className="appointment-flex-box">
                <p className="tex-line tex-line2"> Clear Stock</p>

                <div className="right-search-date-filter-box">
                  <div className="A-search-box">
                    <input
                      type="text"
                      name="search"
                      id="search"
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

                  <div className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>

                <div className="all-user-table stock-tble">
                    <table>
                        <thead>
                            <tr>
                                <th>SNO.</th>
                                <th>Date</th>
                                <th>Waste (in Kg)</th>
                                <th>Total Waste (in Kg)</th>

                            </tr>
                        </thead>

                        <tbody>
                            {stock.map((elem,indx) => {
                                return (
                                    <>

                                    <tr key={indx}>
                                        <td> <span> {indx + 1} </span> </td>
                                        <td> <span> {elem.date} </span> </td>
                                        <td> <span> {elem.waste} </span> </td>
                                        <td> <span> {elem.totalWaste} </span> </td>

                                    </tr>
                                    </>
                                )
                            })}
                        </tbody>
                        
                    </table>
                </div>
                
              </div>

              </div>
              </div>
              </section>
    </>
  )
}

export default ClearStock
