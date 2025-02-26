import React, { useEffect, useState } from "react";
import "../style/ReferEarn.css";
import "../style/Profile.css";
import "../style/BankCard.css";
import "../style/WasteColect.css";
// import WalletData from "./WalletData";
import UserWalletData from "./UserWalletData";
import DatePicker from "react-datepicker";
import ConfirmOtp from "./ConfirmOtp";
import WaletBalance from "./WaletBalance";
import AddMoneyOtp from "./AddMoneyOtp";
import AddMoneyAmount from "./AddMoneyAmount";
import SucesfulyTran from "../WasteColectComp/SucesfulyTran";
import PaymntDet from "../WasteColectComp/PaymntDet";
import TranferAmnt from "../WasteColectComp/TranferAmnt";
import TrnferSucesful from "../WasteColectComp/TrnferSucesful";
import TrnferDet from "../WasteColectComp/TrnferDet";
import {
  FuntiontoGetTransactionDetails,
  FuntiontoRaisepaymnetrequest,
  FuntiontogetDataFromProcedureVar,
  GetWalletDetails,
  walletFetch,
} from "../apis/wallet/wallet";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "@tanstack/react-query";
const MyWallet = () => {
  const [waletDataNew, setwaletDataNew] = useState([]);
  const [waletData, setWaletData] = useState(UserWalletData);
  const [butonActive, setButonActive] = useState(true);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [searchItem, setSearchItem] = useState("");
  const [otp, setOtp] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [addMoneyOtp, setAddMoneyOtp] = useState(false);
  const [addAmount, setAddAmount] = useState(false);
  const [sucesfulyTrnsctin, setSucesfulyTrnsctin] = useState(false);
  const [paymntDet, setPaymntDet] = useState(false);
  const [trnfrAmnt, setTrnfrAmnt] = useState(false);
  const [trnfrComplte, setTrnfrComplte] = useState(false);
  const [trnferDet, setTrnferDet] = useState(false);
  // const { userInfo, loading } = useSelector((state) => state.user);
  // const [walletDetails, setWalletDetails] = useState(null);
  // const [error, setError] = useState(null);
  // const [PaymentReqAmount, setPaymentReqAmount] = useState(null);
  // const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const filterData = (categValue) => {
    const updatedData = WalletData.filter((elem) => {
      return elem.tnxtype === categValue || elem.status === categValue;
    });

    setWaletData(updatedData);
  };

  const butonActFunc = (index) => {
    setButonActive(index);
  };

  const showSearchItem = (e) => {
    const updatedSearc = e.target.value;

    setSearchItem(updatedSearc);

    const updatedSearchData = WalletData.filter((curItem) => {
      return curItem.category.toLowerCase().includes(searchItem.toLowerCase());
    });

    setWaletData(updatedSearchData);
  };

  const SucefData = {
    paraone: "Thank You For Request , We Will Get Back To You Soon.",
  };
  const { data: wallet, refetch } = useQuery({
    queryKey: ["userWalletFetch"],
    queryFn: () => walletFetch(),
  });
  return (
    <>
      <section className="user-prof-grid-comp  referearn-comp wallet-comp wallet-comp-rem-spce wallet-comp7 user-prof-grid-comp  referearn-comp wallet-comp  wallet-comp5">
        <div className="top-wallet-box">
          <h6>Transactions</h6>

          <div className="right-wallet-box">
            <button
              onClick={() => {
                setAddAmount(true), setAddMoneyOtp(false);
              }}
              className="tranfer-btn add-money-btn"
            >
              Add Money
              {/* <span>Coming Soon</span> */}
            </button>

            <button onClick={() => setOtp(true)} className="tranfer-btn">
              Withdraw Now
            </button>

            <div className="total-walet-main">
              <div className="refrl-balance-box">
                <p>Balance Eco Coins</p>
                <div className="bal-bxmain">
                  <div className="balance-box">
                    <div className="rupes-icon">
                      <i className="fa-solid fa-coins"></i>
                    </div>
                    <span>{wallet?.balance || "0.00"}</span>
                  </div>

                  <div className="rupe-to-coin-bx">
                    <div className="refrl-balance-box ruppecoin">
                      <p>1 Rupee = 1 coin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="refrl-balance-box">
              <p>Total Balance</p>
              <div className="balance-box">
                <div className="rupes-icon">₹</div>
                <span>500.00</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="walet-tabs-filter-flex-box">
          <div className="wallet-tabs-btns-flex-box">
            <button
              onClick={() => {
                setWaletData(WalletData), butonActFunc(1);
              }}
              className={butonActive == 1 ? "walt-tab wallactive" : "walt-tab"}
            >
              All
            </button>
            {/* All Bank Wallet Cash In Out Received Paid */}

            <button
              onClick={() => {
                filterData("Bank"), butonActFunc(2);
              }}
              className={butonActive == 2 ? "walt-tab wallactive" : "walt-tab"}
            >
              Bank
            </button>

            <button
              onClick={() => {
                filterData("Wallet"), butonActFunc(3);
              }}
              className={butonActive == 3 ? "walt-tab wallactive" : "walt-tab"}
            >
              Wallet
            </button>

            <button
              onClick={() => {
                filterData("Cash"), butonActFunc(4);
              }}
              className={butonActive == 4 ? "walt-tab wallactive" : "walt-tab"}
            >
              Cash
            </button>

            <button
              onClick={() => {
                filterData("In"), butonActFunc(5);
              }}
              className={butonActive == 5 ? "walt-tab wallactive" : "walt-tab"}
            >
              In
            </button>

            <button
              onClick={() => {
                filterData("Out"), butonActFunc(6);
              }}
              className={butonActive == 6 ? "walt-tab wallactive" : "walt-tab"}
            >
              Out
            </button>
            <button
              onClick={() => {
                filterData("Received"), butonActFunc(7);
              }}
              className={butonActive == 7 ? "walt-tab wallactive" : "walt-tab"}
            >
              Received
            </button>
            <button
              onClick={() => {
                filterData("Paid"), butonActFunc(8);
              }}
              className={butonActive == 8 ? "walt-tab wallactive" : "walt-tab"}
            >
              Paid
            </button>
          </div>

          <div className="right-fitler-part-box">
            <div className="search-wallet-transactions">
              <input
                type="text"
                name="search"
                id="search"
                value={searchItem}
                onChange={showSearchItem}
                placeholder="Search..."
                autoComplete="off"
              />
            </div>

            <div className="past-days-selec-box">
              <i className="fa-regular fa-calendar-days"></i>
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
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <div className="bank-card-table wallet-table-box trnct-table2 trnct-table">
          <table>
            <thead>
              <tr>
                <th>SN.</th>
                <th>Date/Time</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>User type</th>
                <th>Txn Type</th>
                <th>Mode</th>
                <th>Eco Points</th>
                <th>Wallet</th>
                {/* <th>Income</th> */}
                <th>Staus</th>

                <th>Wallet Txn ID</th>
                <th>Bank Txn ID</th>
                <th>Invoice</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {waletDataNew.map((curElem, indx) => {
                return (
                  <>
                    <tr>
                      {" "}
                      <td>
                        <span className="b-span2"> {indx + 1} </span>
                      </td>
                      <td>
                        <div className="b-date">
                          <p> {curElem.DateTime} </p>
                          {/* <span> {curElem.time} </span> */}
                        </div>
                      </td>
                      <td>
                        <div
                          className="bussin-flex-box"
                          key={indx}
                          id={curElem.indx}
                        >
                          <div className="b-img">
                            <img src={curElem.img2} alt="" />
                          </div>

                          <div className="b-info ">
                            <p>{curElem.UserName}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="b-span2 "> {curElem.UserID} </span>
                      </td>
                      <td>
                        <span className="b-span2 "> {curElem.Usertype} </span>
                      </td>
                      {/* <td>
                        <span className="b-span2 b-span3">
                          {" "}
                          {curElem.to}{" "}
                        </span>
                      </td> */}
                      <td>
                        <span className="b-span2 "> {curElem.TxnType} </span>
                      </td>
                      <td>
                        <span className="b-span2 ">
                          {" "}
                          {curElem.PAYMENTMODE}{" "}
                        </span>
                      </td>
                      <td>
                        <span className="b-span2 b-span4">
                          {" "}
                          {curElem.EcoPoints}{" "}
                        </span>
                      </td>
                      <td>
                        <span className="b-span2 b-span4">
                          {" "}
                          {curElem.Wallet}{" "}
                        </span>
                      </td>
                      {/* <td>
                        <span className="b-span2 "> {curElem.income} </span>
                      </td> */}
                      <td className="text-tb-right">
                        <span
                          className={
                            curElem.Staus === "Out" ||
                            curElem.Staus === "Failed"
                              ? "status-g redstatus"
                              : "status_g"
                          }
                          style={{
                            color:
                              curElem.Staus === "Paid" ||
                              curElem.Staus === "Done"
                                ? "orange"
                                : "green",
                          }}
                        >
                          {" "}
                          {curElem.Staus}{" "}
                        </span>
                      </td>
                      <td>
                        <span className="b-span2 text-center-align">
                          {" "}
                          {curElem.TXNID}{" "}
                        </span>
                      </td>
                      <td>
                        <span className="b-span2 text-center-align">
                          {" "}
                          {curElem.BANKTXNID}{" "}
                        </span>
                      </td>
                      <td>
                        <div className="id-dwld-btn text-center-align">
                          <span className="b-span"> {curElem.InvoiceId} </span>
                          <i className="fa-regular fa-circle-down"></i>
                        </div>
                      </td>
                      <td>
                        <span className="b-span2">
                          {" "}
                          {curElem.Paymentdetails}{" "}
                        </span>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* <section className="product-side-comp product-side-comp-wallet">
        <h4>Products</h4>
      </section> */}

      {otp == true ? (
        <ConfirmOtp
          onclickcloseOtp={() => setOtp(false)}
          onClickOpen={() => {
            setTransaction(true), setOtp(false);
          }}
          onClickAddAmnt={() => {
            setSucesfulyTrnsctin(true), setOtp(false);
          }}
          // onClickAddAmount={handleClickAddAmount}
        />
      ) : null}
      {transaction === true ? (
        <WaletBalance
          oncClickclose={() => {
            setTransaction(false), setOtp(false);
          }}
          onclickTrnferAmnt={() => {
            setTransaction(false), setOtp(false), setTrnfrAmnt(true);
          }}
        />
      ) : null}
      {/* {addMoneyOtp ? (
        <AddMoneyOtp
          onclickcloseOtp={() => setAddMoneyOtp(false)}
          onclickOpenAmountBx={() => {
            setAddAmount(true), setAddMoneyOtp(false);
          }}
        />
      ) : null} */}
      {addAmount ? (
        <AddMoneyAmount
          onclickCloseAmount={() => setAddAmount(false)}
          onClickAddAmnt={() => {
            setSucesfulyTrnsctin(true), setAddAmount(false);
          }}
        />
      ) : null}
      {sucesfulyTrnsctin ? (
        <SucesfulyTran
          SucefData={SucefData}
          onCloseClick={() => {
            setSucesfulyTrnsctin(false);
          }}
          onclickViewDet={() => {
            setSucesfulyTrnsctin(false), setPaymntDet(true);
          }}
        />
      ) : null}
      {paymntDet ? (
        <PaymntDet onclickCloseAll={() => setPaymntDet(false)} />
      ) : null}
      {trnfrAmnt ? (
        <TranferAmnt
          onClose={() => {
            setTrnfrAmnt(false);
          }}
          onclickCompltTrnfer={() => {
            setTrnfrComplte(true), setTrnfrAmnt(false);
          }}
        />
      ) : null}
      {trnfrComplte ? (
        <TrnferSucesful
          onClose={() => setTrnfrComplte(false)}
          onclickTrnferDet={() => {
            setTrnferDet(true), setTrnfrComplte(false);
          }}
        />
      ) : null}
      {trnferDet ? (
        <TrnferDet
          onclickClose={() => {
            setTrnferDet(false);
          }}
        />
      ) : null}
    </>
  );
};

export default MyWallet;

// import React, { useState } from 'react'
// import '../style/ReferEarn.css';
// import "../style/Profile.css";
// import "../style/BankCard.css";
// import WalletData from './WalletData';
// import DatePicker from "react-datepicker";
// import ConfirmOtp from './ConfirmOtp';
// import WaletBalance from './WaletBalance';
// import '../style/SideProduct.css'

// const MyWallet = () => {
//     const [waletData , setWaletData] =  useState(WalletData);
//     const [butonActive , setButonActive] = useState(true);
//     const [startDate, setStartDate] = useState(new Date("2014/02/08"));
//     const [endDate, setEndDate] = useState(new Date("2014/02/10"));
//     const [searchItem , setSearchItem] = useState('');
//     const [otp , setOtp ] = useState(false);
//     const [transaction , setTransaction ] = useState(false);

//    const filterData = (categValue) => {

//     const updatedData = WalletData.filter((elem) => {
//         return (

//             elem.category === categValue

//         )
//     })

//     setWaletData(updatedData)

//    }

//    const butonActFunc = (index) => {

//     setButonActive(index);

//    }

//    const showSearchItem = (e) => {

//     const updatedSearc = e.target.value;

//    setSearchItem(updatedSearc);

//    const updatedSearchData =  WalletData.filter((curItem) => {
//     return (
//         curItem.category.toLowerCase().includes(searchItem.toLowerCase())
//     )

//    })

//    setWaletData(updatedSearchData)

//    }

//   return (
//     <>

//     <section className="user-prof-grid-comp  referearn-comp wallet-comp wallet-comp-rem-spce wallet-comp7">

//         <div className="top-wallet-box">

//             <h6>Transactions</h6>

//             <div className="right-wallet-box">

//                 <button onClick={() => setOtp(true)} className="tranfer-btn">
//                     Withdraw Now
//                 </button>

//                 <div className="refrl-balance-box">
//               <p>Total Balance</p>
//               <div className="balance-box">
//                 <div className="rupes-icon">
//                 ₹
//                 </div>
//                 <span>500.00</span>
//               </div>
//             </div>

//             </div>

//         </div>

//         <div className="walet-tabs-filter-flex-box">

//         <div className="wallet-tabs-btns-flex-box">

//             <button onClick={() => {setWaletData(WalletData) , butonActFunc(1)}}  className={ butonActive == 1 ? "walt-tab wallactive" : "walt-tab"}>
//                 All
//             </button>
//             <button onClick={() => {filterData('receive') , butonActFunc(2)}} className={ butonActive == 2 ? "walt-tab wallactive" : "walt-tab"}>
//                 Received
//             </button>
//             <button onClick={() => {filterData('payment') , butonActFunc(3)}} className={ butonActive == 3 ? "walt-tab wallactive" : "walt-tab"}>
//                 Payment
//             </button>
//             <button onClick={() => {filterData('withdraw') , butonActFunc(4)}}  className={ butonActive == 4 ? "walt-tab wallactive" : "walt-tab"}>
//                 Withdraw
//             </button>

//         </div>

//         <div className="right-fitler-part-box">

//             <div className="search-wallet-transactions">
//                 <input type="text" name='search' id='search' value={searchItem} onChange={showSearchItem} placeholder='Search...' autoComplete='off' />
//             </div>

//             <div className="past-days-selec-box">
//             <i className="fa-regular fa-calendar-days"></i>
//             <select name="pastdays" id="pastdays">
//                 <option value="pastdays">Past 10 days</option>
//                 <option value="pastdays">Past 30 days</option>
//                 <option value="pastdays">Past 90 days</option>

//             </select>
//             </div>

//             <div className="dates-flex-box">

//                 <div className="sel-date">
//                 <DatePicker
//         selected={startDate}
//         onChange={(date) => setStartDate(date)}
//         selectsStart
//         startDate={startDate}
//         endDate={endDate}
//       />

//                 </div>

//                 <span>to</span>

//                 <div className="sel-date">
//                 <DatePicker
//         selected={endDate}
//         onChange={(date) => setEndDate(date)}
//         selectsEnd
//         startDate={startDate}
//         endDate={endDate}
//         minDate={startDate}
//       />
//                 </div>

//             </div>

//         </div>

//         </div>

//         <div className="bank-card-table wallet-table-box">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name/Bussiness</th>
//                         <th>Date</th>
//                         <th>Invoice ID</th>
//                         <th>Amount</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                 {waletData.map((curElem,indx) => {

//                     return(
//                         <>

// <tr>
//                         <td>
//                             <div className="bussin-flex-box" key={indx} id={curElem.indx}>
//                                 <div className="b-img">
//                                     <img src={curElem.img} alt="" />
//                                 </div>

//                                 <div className="b-info">
//                                     <p>{curElem.name}</p>
//                                     <span> {curElem.company} / {curElem.uniqueID} </span>
//                                 </div>
//                             </div>
//                         </td>

//                         <td>
//                             <div className="b-date">
//                                 <p> {curElem.date} </p>
//                                 <span> {curElem.time} </span>
//                             </div>
//                         </td>

//                         <td>
//                             <div className="id-dwld-btn">
//                             <span className='b-span'> {curElem.uniqueID2} </span>
//                             <i className="fa-regular fa-circle-down"></i>
//                             </div>
//                         </td>

//                         <td>
//                             <span className='b-span2'> ₹{curElem.amount} </span>
//                         </td>

//                         <td>
//                             <span className="status-g" style={{color: curElem.color_Status === 'orange' ? "orange" : "green"}}> {curElem.status} </span>
//                         </td>

//                         <td>
//                             <div className="det-btn">
//                                 Details
//                             </div>
//                         </td>

//                     </tr>

//                         </>
//                     )

//                 })}

//                 </tbody>
//             </table>
//         </div>

//     </section>

//     <section className="product-side-comp product-side-comp-wallet">

//     <h4>Products</h4>

//     </section>

//    {otp == true ? <ConfirmOtp onclickcloseOtp={() => setOtp(false)} onClickOpen={() => {setTransaction(true) , setOtp(false)}} /> : null}
//    { transaction === true ? <WaletBalance oncClickclose={() => {setTransaction(false) , setOtp(false) }}   /> : null}

//     </>
//   )
// }

// export default MyWallet
