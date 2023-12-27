import React, { useState } from 'react'
import "../style/Frenchiespanel.css";
import DatePicker from "react-datepicker";
import wastecolectData from '../WastecolectData';
import WasteColectEdit from '../AdminComponents.jsx/WasteColectEdit';
import WasteColectVew from '../AdminComponents.jsx/WasteColectVew';
import FrenchWasteEdit from './FrenchWasteEdit';
import LedgerComp from './LedgerComp';
const FrenchWasteColect = ({updatedWasteColectData}) => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    const [wasteColectData , setWasteColectData] =  useState(wastecolectData);
    const [wasteDataBox , setWasteDataBox] = useState(false);
    const [wasteViewData , setWasteViewData]  = useState(false);
    const [transctn , setTransctn] = useState(false);
    const subsDataClose = () => {

        setWasteDataBox(false);
  
    }
  
    const closewasteDataVw = () => {
  
      setWasteViewData(false)
      
    }
  return (
    <>

<section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box4">
            <h6>Waste Collector </h6>

            <div className="right-user-filter-data-flex-box">

                <div className="user-data-search-box">
                    <input type="text" name="search" id="search" placeholder="Search..." autoComplete="off" />
                </div>

                <div className="user-type-sel-box user-data-search-box">
                    <select name="user-type-data" id="user-type-data">
                        <option value="1">User</option>
                        <option value="1">Vendor</option>
                        <option value="1">Staff (Manager)</option>
                        <option value="1">Staff (Sales Team)</option>
                        <option value="1">Staff (Support Team)</option>

                    </select>
                </div>

                <div className="user-type-sel-box  user-data-search-box user-type-sel-box3">
                    <select name="user-type-data" id="user-type-data">
                        <option value="1">Today</option>
                        <option value="1">Last Week</option>
                        <option value="1">Last Monthly </option>
                    </select>
                </div>

            <div className="sel-user-date-flex">
                    <div className="sel-date sel-date-user">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                      />
                    </div>

                    <span>to</span>

                    <div className="sel-date ">
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
                
                <div className="user-data-search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                
            </div>
            
          </div>

          <div className="all-user-table">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Profile</th>
                  <th>User Id</th>
                  <th> Name</th>
                  <th>Work Area </th>
                  <th>Mobile No.</th>
                  <th>Email</th>
                  <th>User Status</th>
                  <th>Zip Code</th>
                  <th>Edit</th>
                  <th>View</th>
                  <th>Ledger</th>
                </tr>
              </thead>
              
              <tbody>
                {updatedWasteColectData.map((curElem, id) => {
                  return (
                    <>
                      <tr key={id}>
                        <td>
                            <span> {curElem.id} </span>
                        </td>
                        <td>

                          <div className="user-prof-img">
                            <img src={curElem.profImg} alt="" />
                          </div>
                          
                        </td>

                        <td>
                          <span> {curElem.userId} </span>
                        </td>
                        <td>
                          <span> {curElem.name} </span>
                        </td>
                       

                        <td>
                            <span> {curElem.workArea} </span>
                        </td>
                        <td>
                          <span> {curElem.mobile} </span>
                        </td>
                        <td>
                          <span> {curElem.email} </span>
                        </td>
                        
                        <td>
                          <span style={{ color : curElem.categoryStatus === "banned" || curElem.categoryStatus === "unverified"   ? "red" : "green"  }}  className={ curElem.categoryStatus === "Banned" ? "status-t statColor" : "status-t"} > {curElem.userStatus} </span>
                        </td>
                      
                        <td>
                          <span> {curElem.Zip} </span>
                        </td>

                        <td>
                          <div onClick={() => setWasteDataBox(true)} className="edit-user-btn">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </div>
                        </td>

                        <td>
                          <div onClick={() => setWasteViewData(true)} className="edit-user-btn view-btn">
                          <i class="fa-regular fa-eye"></i>
                          </div>
                        </td>

                        <td>
                          <div className="icon-flex-box">
                            <button onClick={() => setTransctn(true)} className="app-dis-btn" title="approve">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                            </button>
                           
                          </div>
                        </td>
                        
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

     {wasteDataBox ? <WasteColectEdit WasteDataTrue={wasteDataBox} onClickCloseEditForm={subsDataClose} /> : null}
                
     {wasteViewData ? <FrenchWasteEdit WasteViewTrue={wasteViewData} onClickCloseWasteColectData={closewasteDataVw}/> : null}

     { transctn ?  <LedgerComp onclickClose={() => setTransctn(false)} /> : null}
    
    </>
      
  )
}

export default FrenchWasteColect
