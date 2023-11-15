import React, { useState } from 'react'
import '../style/ReferEarn.css';
import "../style/Profile.css";
import "../style/BankCard.css";
import "../style/WasteColect.css";
import WalletData from './WalletData';
import DatePicker from "react-datepicker";
import ConfirmOtp from './ConfirmOtp';
import WaletBalance from './WaletBalance';

const WasteWallet = () => {
    const [waletData , setWaletData] =  useState(WalletData);
    const [butonActive , setButonActive] = useState(true);
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    const [searchItem , setSearchItem] = useState('');
    const [otp , setOtp ] = useState(false);
    const [transaction , setTransaction ] = useState(false);


   const filterData = (categValue) => {

    const updatedData = WalletData.filter((elem) => {
        return (

            elem.category === categValue
            
        )
    })

    setWaletData(updatedData)
    
   }

   const butonActFunc = (index) => {

    setButonActive(index);
    
   }

   const showSearchItem = (e) => {

    const updatedSearc = e.target.value;
    
   setSearchItem(updatedSearc);

   const updatedSearchData =  WalletData.filter((curItem) => {
    return (
        curItem.category.toLowerCase().includes(searchItem.toLowerCase())
    )

   })

   setWaletData(updatedSearchData)

   
    
   }

    
  return (
    <>

    <section className="user-prof-grid-comp  referearn-comp wallet-comp  wallet-comp5">

        <div className="top-wallet-box">

            <h6>Transactions</h6>

            <div className="right-wallet-box">

                <button onClick={() => setOtp(true)} className="tranfer-btn">
                    Withdraw Now
                </button>

                <div className="refrl-balance-box">
              <p>Total Balance</p>
              <div className="balance-box">
                <div className="rupes-icon">
                ₹
                </div>
                <span>500.00</span>
              </div>
            </div>
                
            </div>
            
        </div>

        <div className="walet-tabs-filter-flex-box">


        <div className="wallet-tabs-btns-flex-box">

            <button onClick={() => {setWaletData(WalletData) , butonActFunc(1)}}  className={ butonActive == 1 ? "walt-tab wallactive" : "walt-tab"}>
                All
            </button>
            <button onClick={() => {filterData('receive') , butonActFunc(2)}} className={ butonActive == 2 ? "walt-tab wallactive" : "walt-tab"}>
                Received
            </button>
            <button onClick={() => {filterData('payment') , butonActFunc(3)}} className={ butonActive == 3 ? "walt-tab wallactive" : "walt-tab"}>
                Payment
            </button>
            <button onClick={() => {filterData('withdraw') , butonActFunc(4)}}  className={ butonActive == 4 ? "walt-tab wallactive" : "walt-tab"}>
                Withdraw
            </button>
            
        </div>

        <div className="right-fitler-part-box">

            <div className="search-wallet-transactions">
                <input type="text" name='search' id='search' value={searchItem} onChange={showSearchItem} placeholder='Search...' autoComplete='off' />
            </div>

            <div className="past-days-selec-box">
            <i class="fa-regular fa-calendar-days"></i>
            <select name="pastdays" id="pastdays">
                <option value="pastdays">Past 10 days</option>
                <option value="pastdays">Past 30 days</option>
                <option value="pastdays">Past 90 days</option>

            </select>
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


        <div className="bank-card-table wallet-table-box">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Invoice ID</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                
                {waletData.map((curElem,indx) => {

                    return(
                        <>

<tr>
                        <td>
                            <div className="bussin-flex-box" key={indx} id={curElem.indx}>
                                <div className="b-img">
                                    <img src={curElem.img} alt="" />
                                </div>

                                <div className="b-info">
                                    <p>{curElem.name}</p>
                                    <span>{curElem.uniqueID} </span>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className="b-date">
                                <p> {curElem.date} </p>
                                <span> {curElem.time} </span>
                            </div>
                        </td>

                        <td>
                            <div className="id-dwld-btn">
                            <span className='b-span'> {curElem.uniqueID2} </span>
                            <i class="fa-regular fa-circle-down"></i>
                            </div>
                        </td>

                        <td>
                            <span className='b-span2'> ₹{curElem.amount} </span>
                        </td>

                        <td>
                            <span className="status-g" style={{color: curElem.color_Status === 'orange' ? "orange" : "green"}}> {curElem.status} </span>
                        </td>

                        <td>
                            <div className="det-btn">
                                Details
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

   {otp == true ? <ConfirmOtp onclickcloseOtp={() => setOtp(false)} onClickOpen={() => {setTransaction(true) , setOtp(false)}} /> : null}
   { transaction === true ? <WaletBalance oncClickclose={() => {setTransaction(false) , setOtp(false) }}   /> : null}
    
   
    </>
  )
}

export default WasteWallet
