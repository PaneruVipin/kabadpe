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
  AdminTnxHistoryFetch,
  FuntiontoGetTransactionDetails,
  FuntiontogetDataFromProcedureVar,
  GetWalletDetails,
  adminTotalWalletFetch,
} from "../apis/wallet/wallet";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { filteredData, hashId, search } from "../lib/array";

const AdminTransaction = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [searchItem, setSearchItem] = useState("");
  const [updteWalet, setUpdteWalet] = useState(false);
  const [paymntDet, setPaymntDet] = useState(false);
  const [waletCredit, setWaletCredit] = useState(false);
  const [withDrawl, setWithDrawl] = useState(false);
  const [reqPopup, setReqPopup] = useState(false);
  const [selectedTxn, setSelectedTxn] = useState();
  const [filters, setFilters] = useState([]);
  const [selectedTopFilter, setSelectedTopFilter] = useState("");
  const topFilteres = [
    { id: 1, label: "All", name: "" },
    // { id: 2, label: "Bank", name: "bank" },
    // { id: 3, label: "Wallet", name: "wallet" },
    // { id: 4, label: "Cash", name: "cash" },
    { id: 5, label: "In", name: "in" },
    { id: 6, label: "Out", name: "out" },
    { id: 7, label: "Pending", name: "pending" },
  ];

  const handleTopFilterChange = (e) => {
    setSelectedTopFilter(e.target.name);
    const neFilteres = filters.filter(({ id }) => {
      id != "topFilter";
    });
    setFilters(neFilteres);
    let neFilter = {
      id: "topFilter",
      fn: (e) => {
        return e;
      },
    };
    switch (e.target.name) {
      case "":
        break;
      // case "bank":
      //   neFilter.fn = ({ paymentMethod }) => {
      //     return paymentMethod == "bank";
      //   };
      //   break;
      // case "wallet":
      //   neFilter.fn = ({ paymentMethod }) => {
      //     return paymentMethod == "wallet";
      //   };
      //   break;
      // case "cash":
      // neFilter.fn = ({ paymentMethod }) => {
      //   return paymentMethod == "cash";
      // };
      // break;
      case "in":
        neFilter.fn = ({ txnType }) => {
          return txnType == "in_wallet";
        };
        break;
      case "out":
        neFilter.fn = ({ txnType }) => {
          return txnType == "out_wallet";
        };
        break;
      case "pending":
        neFilter.fn = ({ txnStatus }) => {
          return txnStatus == "pending";
        };
        break;
      default:
        break;
    }
    setFilters((prev) => [...prev, neFilter]);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const neWfilteres = filters.filter(({ id }) => id != name);
    setFilters(neWfilteres);
    let filter = {
      id: name,
      fn: (e) => {
        return e;
      },
    };
    switch (name) {
      case "userType":
        if (value) {
          filter.fn = ({ receiverType, senderType }) => {
            return receiverType == value || senderType == value;
          };
        }
        break;
      case "paymentMode":
        if (value) {
          filter.fn = ({ paymentMethod }) => {
            return paymentMethod == value;
          };
        }
        break;
      case "timePeriod":
        if (value) {
          let currentDate = new Date();
          let dateAgo = new Date();
          dateAgo.setDate(dateAgo.getDate() - +value);
          if (value == "custom") {
            currentDate = new Date(endDate);
            dateAgo = new Date(startDate);
          }
          filter.fn = ({ updatedOn }) => {
            const updateDate = new Date(updatedOn);
            return (
              updateDate.getTime() >= dateAgo.getTime() &&
              updateDate.getTime() <= currentDate.getTime()
            );
          };
        }
        break;
      default:
        break;
    }
    setFilters((prev) => [...prev, filter]);
  };
  // Function to handle approval
  const handleApprove = (data) => {
    setSelectedTxn(data);
    setWithDrawl(true); // Set `withDrawl` to true to show the WithdrawlRequest component
  };
  const { data: tnxHistory, refetch } = useQuery({
    queryKey: ["AdminTnxHistoryFetch"],
    queryFn: () => AdminTnxHistoryFetch(),
  });
  const { data: totalWallet, refetch: refetchTotalWallet } = useQuery({
    queryKey: ["adminTotalWalletFetch"],
    queryFn: () => adminTotalWalletFetch(),
  });
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
              Transfer Amount
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
                  <span>{totalWallet?.total}</span>
                </div>
              </div>
              <div className="walet-balnce-main-bx">
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>Workers</p>

                  <span>{totalWallet?.worker}</span>
                </div>
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>Frenchies</p>

                  <span>{totalWallet?.franchise}</span>
                </div>
                <div className="refrl-balance-box refrl-balance-box2">
                  <p>User</p>

                  <span>{totalWallet?.user}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="walet-tabs-filter-flex-box">
          <div className="wallet-tabs-btns-flex-box">
            {topFilteres?.map(({ id, name, label }) => (
              <button
                key={id}
                name={name}
                onClick={handleTopFilterChange}
                className={
                  name == selectedTopFilter ? "walt-tab wallactive" : "walt-tab"
                }
              >
                {label}
              </button>
            ))}
          </div>

          <div className="right-fitler-part-box">
            <div className="search-wallet-transactions">
              <input
                type="text"
                name="search"
                id="search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                placeholder="Search..."
                autoComplete="off"
              />
            </div>

            <div className="past-days-selec-box">
              <i className="fa-regular fa-calendar-days"></i>
              <select
                name="timePeriod"
                id="pastdays"
                onChange={handleFilterChange}
              >
                <option value="">All days</option>
                <option value="10">Past 10 days</option>
                <option value="30">Past 30 days</option>
                <option value="90">Past 90 days</option>
              </select>
            </div>

            <div className="past-days-selec-box">
              <select
                name="userType"
                id="pastdays"
                onChange={handleFilterChange}
              >
                <option value="">All Users</option>
                <option value="user">User</option>
                <option value="franchise">Frenchies</option>
                <option value="worker">Worker</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            <div className="past-days-selec-box">
              <select
                name="paymentMode"
                id="pastdays"
                onChange={handleFilterChange}
              >
                <option value="">All Payment Modes</option>
                <option value="wallet">Wallet</option>
                <option value="cash">Cash</option>
                <option value="bank">Bank</option>
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

            {startDate && endDate ? (
              <button
                className="search-btn"
                onClick={() =>
                  handleFilterChange({
                    target: { name: "timePeriod", value: "custom" },
                  })
                }
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            ) : null}
          </div>
        </div>

        <div className="bank-card-table wallet-table-box trnct-table2 trnct-table">
          <table>
            <thead>
              <tr>
                <th>Date/Time</th>
                <th>Sender</th>
                <th>Wallet Balance</th>
                <th>Receiver</th>
                <th>Wallet Balance</th>
                <th>Tnx Amount </th>
                <th>Tnx Type</th>
                <th>Mode</th>
                <th>Income </th>
                <th>Status </th>
                <th>Tnx ID</th>
                <th>Bank Tnx ID</th>
                <th>Invoice </th>
                <th>Details </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!tnxHistory?.error
                ? filteredData(
                    search(tnxHistoryFormmating(tnxHistory), searchItem),
                    filters
                  )
                    ?.sort(
                      (a, b) => new Date(b?.updatedOn) - new Date(a?.updatedOn)
                    )
                    ?.map(
                      ({
                        id,
                        // addedOn,
                        txnDetails,
                        txnStatus,
                        // senderId,
                        senderType,
                        // receiverId,
                        receiverType,
                        ammount,
                        paymentMethod,
                        txnType,
                        receiverWallet,
                        senderWallet,
                        txnId,
                        updatedOn,
                        sender,
                        reciver,
                      }) => {
                        return (
                          <tr key={id}>
                            <td>
                              <div className="b-date">
                                {DateTime.fromISO(updatedOn, {
                                  zone: "utc",
                                })
                                  .setZone("Asia/Kolkata")
                                  .toFormat("ccc dd LLL yyyy hh:mm a")}
                              </div>
                            </td>

                            <td>
                              <div className="b-info ">
                                <p>{sender?.fullname}</p>
                                {sender?.id ? (
                                  <p>{hashId(sender?.id, senderType)}</p>
                                ) : null}
                                <p style={{ color: "#1266e3" }}>{senderType}</p>
                              </div>
                            </td>
                            <td>
                              <span className="b-span2 b-span4">
                                {senderWallet}
                                {/* {sender?.UserWallet?.balance}{" "} */}
                              </span>
                            </td>
                            <td>
                              <div className="b-info ">
                                <p>{reciver?.fullname}</p>
                                {reciver?.id ? (
                                  <p>{hashId(reciver?.id, receiverType)}</p>
                                ) : null}
                                <p style={{ color: "#1266e3" }}>
                                  {receiverType}
                                </p>
                              </div>
                            </td>

                            <td>
                              <span className="b-span2 b-span4">
                                {receiverWallet}
                                {/* {reciver?.UserWallet?.balance}{" "} */}
                              </span>
                            </td>
                            <td>
                              <span className="b-span2 b-span4">
                                {" "}
                                {ammount}{" "}
                              </span>
                            </td>
                            <td>
                              <span className={""}>{txnType}</span>
                            </td>

                            <td>
                              <span className="b-span2"> {paymentMethod} </span>
                            </td>

                            <td>
                              {/* income */}
                              <span className="b-span2 b-span4"> </span>
                            </td>
                            <td>
                              <span
                                className={`b-span2 b-span4 ${
                                  txnStatus == "pending"
                                    ? "orange-color b-span2"
                                    : ""
                                }`}
                              >
                                {txnStatus}
                              </span>
                            </td>

                            <td>
                              {/* TXNID */}
                              <span className="b-span2">{txnId} </span>
                            </td>

                            <td>
                              {/*BANK TXNID */}
                              <span className=" text-center-align"></span>
                            </td>

                            <td>
                              <div className="id-dwld-btn text-center-align">
                                <span className="b-span"></span>
                              </div>
                            </td>
                            <td>
                              <span className="b-span2">{txnDetails}</span>
                            </td>

                            {txnStatus == "pending" &&
                            txnType == "out_wallet" ? (
                              <td>
                                <button
                                  onClick={() =>
                                    handleApprove({
                                      id,
                                      ammount,
                                      fullname: reciver?.fullname,
                                    })
                                  }
                                  className="approve"
                                >
                                  Approve
                                </button>
                              </td>
                            ) : (
                              "Complete"
                            )}
                          </tr>
                        );
                      }
                    )
                : null}
            </tbody>
          </table>
        </div>
      </section>

      {withDrawl ? (
        <WithdrawlRequest
          refetchTnxHistory={refetch}
          tnx={selectedTxn}
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
        <WalletCreditPopup
          refetchHistory={refetch}
          onclickClosePopup={() => setWaletCredit(false)}
        />
      ) : null}
    </>
  );
};

export default AdminTransaction;

const tnxHistoryFormmating = (tnxHistory) => {
  return tnxHistory?.history?.map(
    ({ senderType, receiverId, receiverType, senderId, ...e }) => {
      const userTypes = {
        user: "users",
        worker: "workers",
        franchise: "franchises",
      };
      const userTyesAsKeys = Object.keys(userTypes);
      let sender, reciver;
      if (userTyesAsKeys.includes(senderType) && senderId) {
        const senderDetail = tnxHistory?.[userTypes?.[senderType]]?.find(
          ({ id }) => id == senderId
        );
        sender = {
          ...senderDetail,
          hashId: hashId(senderDetail?.id, senderType),
        };
      }
      if (userTyesAsKeys.includes(receiverType) && receiverId) {
        const receiverDetail = tnxHistory?.[userTypes?.[receiverType]]?.find(
          ({ id }) => id == receiverId
        );
        reciver = {
          ...receiverDetail,
          hashId: hashId(receiverDetail?.id, receiverType),
        };
      }
      const row = {
        sender,
        reciver,
        ...e,
        senderType,
        receiverId,
        receiverType,
        senderId,
      };
      return row;
    }
  );
};
