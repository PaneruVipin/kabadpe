import React, { useEffect, useState } from "react";
import "../style/ReferEarn.css";
import "../style/Profile.css";
import "../style/BankCard.css";
import "../style/WasteColect.css";
// import WalletData from '../Components/WalletData';
import AdminWallet from "../Components/AdminWaletData";
import DatePicker from "react-datepicker";
import UpdateWalet from "./UpdateWalet";
import PaymntDet from "../WasteColectComp/PaymntDet";
import WalletCreditPopup from "../Components/WalletCreditPopup";
import WithdrawlRequest from "./WithdrawlRequest";
import RequestWithdrawlpopoup from "../AdminComponents.jsx/RequestWithdrawlpopoup";
import {
  FuntiontoGetTransactionDetails,
  GetWalletDetails,
} from "../apis/wallet/wallet";
import { useSelector } from "react-redux";

const AdminTransaction = () => {
  const [waletData, setWaletData] = useState(AdminWallet);
  const [butonActive, setButonActive] = useState(true);
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [searchItem, setSearchItem] = useState("");
  const [updteWalet, setUpdteWalet] = useState(false);
  const [paymntDet, setPaymntDet] = useState(false);
  const [waletCredit, setWaletCredit] = useState(false);
  const [withDrawl, setWithDrawl] = useState(false);
  const [withDrawlDataNew, setWithDrawlDataNew] = useState({
    isOpen: false,
    curElem: null,
  });

  const [reqPopup, setReqPopup] = useState(false);
  const [waletDataNew, setwaletDataNew] = useState([]);
  const { userInfo, loading } = useSelector((state) => state.user);
  const filterData = (value) => {
    const updatedData = AdminWallet.filter((elem) => {
      return (
        elem.tnxtype == value || elem.mode == value || elem.status == value
      );
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
  useEffect(() => {
    debugger;
    const fetchData = async () => {
      try {
        if (userInfo) {
          const data = await GetWalletDetails(
            userInfo.id,
            userInfo.role || "Admin"
          );
          const walletdata = await FuntiontoGetTransactionDetails(
            userInfo.id,
            userInfo.role || "Admin"
          );
          //   setWalletDetails(data);
          setwaletDataNew(walletdata);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [userInfo]);

  // Function to handle approval
  const handleApprove = (element) => {
    setWithDrawlDataNew(element); // Set the current element
    setWithDrawl(true); // Set `withDrawl` to true to show the WithdrawlRequest component
  };

  return (
    <>
      <section className="user-prof-grid-comp admin-transction  referearn-comp wallet-comp  wallet-comp5">
        <div className="top-wallet-box">
          <h6>Transactions</h6>

          <div className="right-wallet-box">
            <button
              onClick={() => setWaletCredit(true)}
              className="tranfer-btn tranfer-btn23 add-money-btn"
            >
              Give Credit
            </button>

            <button
              onClick={() => setUpdteWalet(true)}
              className="tranfer-btn tranfer-btn23 add-money-btn"
            >
              Wallet Limit
            </button>

            <div className="total-walet-main">
              <div className="refrl-balance-box">
                <p>Platform Comission</p>
                <div className="balance-box">
                  <div className="rupes-icon rupes-icon2">₹</div>
                  <span>500.00</span>
                </div>
              </div>
              <div className="walet-balnce-main-bx">
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>Waste Colector</p>

                  <span>200.00</span>
                </div>
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>Frenchies</p>

                  <span>100.00</span>
                </div>
              </div>
            </div>

            <div className="total-walet-main">
              <div className="refrl-balance-box">
                <p>Total Wallet</p>
                <div className="balance-box">
                  <div className="rupes-icon">₹</div>
                  <span>5000.00</span>
                </div>
              </div>
              <div className="walet-balnce-main-bx">
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>Waste Colector</p>

                  <span>2000.00</span>
                </div>
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>Frenchies</p>

                  <span>1000.00</span>
                </div>
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>User</p>

                  <span>2000.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="walet-tabs-filter-flex-box">
          <div className="wallet-tabs-btns-flex-box">
            <button
              onClick={() => {
                setWaletData(AdminWallet), butonActFunc(1);
              }}
              className={butonActive == 1 ? "walt-tab wallactive" : "walt-tab"}
            >
              All
            </button>

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

            <div className="past-days-selec-box">
              <select name="pastdays" id="pastdays">
                <option value="Usertype">User Type</option>
                <option value="User">User</option>
                <option value="Frenchies">Frenchies</option>
                <option value="Worker">Worker</option>
                <option value="Vendor">Vendor</option>
              </select>
            </div>

            <div className="past-days-selec-box">
              <select name="pastdays" id="pastdays">
                <option value="pastdays">Payment Mode</option>
                <option value="pastdays">Wallet</option>
                <option value="pastdays">Cash</option>
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
                <th>Date/Time</th>
                <th>User Name</th>
                <th>User ID</th>
                <th>User Type</th>
                <th>Tnx Type</th>
                <th>Mode</th>
                <th>Eco Points </th>
                <th>Wallet </th>
                <th>Income </th>
                <th>Status </th>
                <th>Wallet Tnx ID</th>
                <th>Bank Tnx ID</th>
                <th>Invoice </th>
                <th>Details </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {waletDataNew.map((curElem, indx) => {
                return (
                  <>
                    <tr>
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
                        <span className="b-span2"> {curElem.UserID} </span>
                      </td>

                      <td>
                        <span className="b-span2"> {curElem.Usertype} </span>
                      </td>

                      <td>
                        <span
                          className={
                            curElem.tnxtype == "Pending"
                              ? "orange-color b-span2"
                              : "b-span2"
                          }
                        >
                          {" "}
                          {curElem.TxnType}{" "}
                        </span>
                      </td>

                      <td>
                        <span className="b-span2"> {curElem.PAYMENTMODE} </span>
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

                      <td>
                        <span className="b-span2"> {curElem.income} </span>
                      </td>

                      <td className="text-tb-right">
                        <span
                          className={
                            curElem.Staus === "Out"
                              ? "status-g redstatus"
                              : "status_g"
                          }
                          style={{
                            color:
                              curElem.Staus === "Done" ? "orange" : "green",
                          }}
                        >
                          {" "}
                          {curElem.Staus}{" "}
                        </span>
                      </td>

                      <td>
                        <span className=" text-center-align">
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
                        </div>
                      </td>

                      <td>
                        <span className="b-span2">
                          {" "}
                          {curElem.Paymentdetails}{" "}
                        </span>
                      </td>
                      {curElem.StatusVal === "Pending" ? (
                        <td>
                          <button
                            // onClick={() => setWithDrawl(true)}
                            onClick={() => handleApprove(curElem)}
                            className="approve"
                          >
                            Approve
                          </button>
                        </td>
                      ) : (
                        "Complete"
                      )}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {withDrawl ? (
        // <WithdrawlRequest
        //   curElem={withDrawlDataNew}
        //   onClickOpen={() => {
        //     setReqPopup(true), setWithDrawl(false);
        //   }}
        //   onClickClose={() => setWithDrawl(false)}
        // />
        <WithdrawlRequest
          curElem={withDrawlDataNew}
          onClickOpen={() => {
            setReqPopup(true);
            setWithDrawl(false);
          }}
          onClickClose={() => setWithDrawl(false)}
        />
      ) : null}
      {reqPopup ? (
        <RequestWithdrawlpopoup
          onClickClose={() => {
            setReqPopup(false), setWithDrawl(false);
          }}
        />
      ) : null}

      {updteWalet ? (
        <UpdateWalet
          onClickClose={() => {
            setUpdteWalet(false);
          }}
        />
      ) : null}
      {paymntDet ? (
        <PaymntDet onclickCloseAll={() => setPaymntDet(false)} />
      ) : null}

      {waletCredit ? (
        <WalletCreditPopup onclickClosePopup={() => setWaletCredit(false)} />
      ) : null}
    </>
  );
};

export default AdminTransaction;
