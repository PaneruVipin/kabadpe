import { tr } from 'date-fns/locale';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import VendViewModal from './VendViewModal';
import DecQue from './DecQue';

const VendQueries = () => {
      const [startDate, setStartDate] = useState(new Date("2014/02/08"));
      const [endDate, setEndDate] = useState(new Date("2014/02/10"));
      const [queModal , setQueModal] = useState(false);
          const [dec , setDec] = useState(false);
      const querTableData = [

        {
            id : 1,
            date : "2024/12/26",
            productName : "Product 1",
            req : '2000 pcs',
            cust : "No",
            value : '2,00,000',
        },

        {
            id : 2,
            date : "2024/12/26",
            productName : "Product 2",
            req : '2500 kg',
            cust : "Yes",
            value : '1,50,000',
        },

        {
            id : 3,
            date : "2024/12/26",
            productName : "Product 3",
            req : '3500 kg',
            cust : "Yes",
            value : '2,50,000',
        },

        {
            id : 4,
            date : "2024/12/26",
            productName : "Product 4",
            req : '3000 pcs',
            cust : "No",
            value : '2,00,000',
        },

        {
            id : 5,
            date : "2024/12/26",
            productName : "Product 5",
            req : '1400 kg',
            cust : "Yes",
            value : '1,50,000',
        },
        
      ]
      
      
  return (
    <>
    <section className="vendQueries-comp">

    <div className="vendtitle-flex-bx">
        <h3>Bulk Queries </h3>

        
        <div className="right-user-filter-data-flex-box right-user-filter-data-flex-box-vendor">
              <div className="user-data-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  autoComplete="off"
                />
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
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
    </div>

    <div className="all-user-table vend-que-table">
        <table>
            <thead>
                <tr>
                    <th>SNo.</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Requirement</th>
                    <th>Customization</th>
                    <th>Value</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
             {querTableData.map((curData,id) => {
                return (
                    <>
                      <tr key={curData.id}>
                    <td>
                        <span> {curData.id} </span>
                    </td>
                    <td>
                        <span> {curData.date} </span>
                    </td>
                    <td>
                        <span> {curData.productName} </span>
                    </td>
                    <td>
                        <span> {curData.req} </span>
                    </td>
                    <td>
                        <span> {curData.cust} </span>
                    </td>
                    <td>
                        <span> ₹{curData.value} </span>
                    </td>
                    <td>
                        <div className="vend_act-flex-btns">
                      
                            <button onClick={() => setDec(true)} className="vend-act-btn">
                            <span>Decline</span>
                            <ion-icon name="close-outline"></ion-icon>
                            </button>
                            <button onClick={() => setQueModal(true)} className="vend-act-btn">
                            <span>View</span>
                            <ion-icon name="eye-sharp"></ion-icon>
                            </button>
                        </div>
                    </td>
                </tr>
                    </>
                )
             })}
            </tbody>
        </table>
    </div>


   
        
    </section>

    <VendViewModal queModal={queModal} setQueModal={setQueModal} />
    {dec ? <DecQue setDec={setDec} /> : null}

    </>
  )
}

export default VendQueries
