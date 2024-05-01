import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import ManageWasteData from "../Components/ManageWasteData";
import { DateTime } from "luxon";
import { search } from "../lib/array";
const FrenchiesWasteTable = () => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    const [searchItem, setSearchItem] = useState("");
    const [isTableActive , setIsTableActive] = useState('All');
  
    const filterData = ManageWasteData.filter((curData) => {
      const matchItem =
        curData.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        curData.userId.toString().includes(searchItem);
      return matchItem;
    });

        const handleTableActive = (value) => {

            setIsTableActive(value);
            
        }
  return (
    <>
    <div>
      <div className="mnge-wste-table-main-bx">
        <div className="mnge-waste-filter-bx">
          <button onClick={() =>handleTableActive('All')} className={ isTableActive === 'All' ? "mnge-wastefilt-btn wsteactive" : "mnge-wastefilt-btn"}>All</button>

          <button onClick={() =>handleTableActive('waste')} className={ isTableActive === 'waste' ? "mnge-wastefilt-btn wsteactive" : "mnge-wastefilt-btn"}>Waste Collector</button>

        </div>

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

            <div className="excel-export-btn">
              <i class="fa-solid fa-file-excel"></i>
            </div>

            <button className="clr-stck">Clear Stock</button>
          </div>
        </div>

     {isTableActive === 'All' &&
      (   
     <div className="all-user-table stock-tble mnge-waste-table mt-3">
          <table>
            <thead>
              <tr>
                <th>SNO.</th>
                <th>Date & Time</th>
                <th>
                  Total <br /> Waste (Kg)
                </th>
                <th>
                  Value (<i class="fa-solid fa-indian-rupee-sign"></i>)
                </th>
                <th>Name</th>
                <th>
                  WasteColector <br /> Name
                </th>
                <th>
                  Frenchies <br /> Name
                </th>

                <th>
                   <span> Newspaper,Magazine,Office Paper (kg) </span>
                </th>
                <th>
                  <span>  Copy,Books (kg) </span>
                </th>
                <th>
                     <span> Cardboard,boxes,packaging Material (kg) </span>
                </th>
                <th>
                     <span> PET </span>
                   

                </th>

                <th> <span> LDPE </span></th>

                <th>  <span> Aluminium Heavy (kg) </span></th>
              <th>  <span> Monitor Big (piece) </span></th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span>1</span>
                    </td>
                    <td>
                    <div className="mnge-date">
                                <p>
                                  Wed 27 Mar 2024
                                </p>
                                <span>
                                11:18 AM
                                </span>
                              </div>
                    </td>
                    <td>
                        <span>10</span>
                    </td>
                    <td>
                        <span>120.00</span>
                    </td>
                    <td>
                    <div className="mnge-date user-text-m">
                                {" "}
                                <p> Faiz Alam </p>
                              </div>
                    </td>
                    <td>
                    <span>Aditya Jain</span>
                    </td>
                    <td>
                    <td>
                              <div className="mnge-date user-text-m">
                                <p>
                                    Kabadpe
                                </p>
                                {/* <span> {"elem.userId"} </span>{" "} */}
                              </div>
                            </td>
                    </td>

                    <td>10</td>
                    <td>9</td>
                    <td>10</td>
                    <td>5</td>
                    <td></td>
                    <td></td>
                    <td>7</td>

                   
                    <td>
                    <div className="id-dwld-btn text-center-align">
                                <i class="fa-regular fa-circle-down"></i>
                              </div>
                    </td>
                </tr>
            </tbody>

            </table>
            </div>
     )}


{isTableActive === 'waste' &&
      (   
     <div className="all-user-table stock-tble mnge-waste-table mt-3">
          <table>
            <thead>
              <tr>
                <th>SNO.</th>
                <th>
                  WasteColector Name
                </th>
                <th>
                  Total <br /> Waste (Kg)
                </th>
                <th>
                  Value (<i class="fa-solid fa-indian-rupee-sign"></i>)
                </th>
             
               

                <th>
                   <span> Newspaper,Magazine,Office  Paper (kg) </span>
                </th>
                <th>
                  <span>  Copy,Books (kg) </span>
                </th>
                <th>
                     <span> Cardboard,boxes,packaging Material (kg) </span>
                </th>
                <th>
                     <span> PET </span>
                   
                </th>

                <th> <span> LDPE </span></th>

                <th>  <span> Aluminium Heavy (kg) </span></th>
              <th>  <span> Monitor Big (piece) </span></th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <span>1</span>
                    </td>
                    <td>
                    <span>Aditya Jain</span>
                    </td>
                    <td>
                        <span>10</span>
                    </td>
                    <td>
                        <span>120.00</span>
                    </td>
                  
                    
                   

                    <td>10</td>
                    <td>9</td>
                    <td>10</td>
                    <td>5</td>
                    <td></td>
                    <td></td>
                    <td>7</td>

                   
                    <td>
                    <div className="id-dwld-btn text-center-align">
                                <i class="fa-regular fa-circle-down"></i>
                              </div>
                    </td>
                </tr>
            </tbody>

            </table>
            </div>
     )}

            </div>
        </div>

    </>
  )
}

export default FrenchiesWasteTable
