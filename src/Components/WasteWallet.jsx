import React, { useEffect, useState } from "react";
import "../style/ReferEarn.css";
import "../style/Profile.css";
import "../style/BankCard.css";
import "../style/WasteColect.css";
import WalletData from "./WalletData";
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
  FuntiontogetDataFromProcedureVar,
  GetWalletDetails,
  userTnxHistoryFetch,
  walletFetch,
} from "../apis/wallet/wallet";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { DateTime } from "luxon";
import { filteredData, hashId, search } from "../lib/array";
import WalletCreditPopup from "./WalletCreditPopup";
const WasteWallet = ({ component = "worker" }) => {
  const [waletCredit, setWaletCredit] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [otp, setOtp] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [addAmount, setAddAmount] = useState(false);
  const [sucesfulyTrnsctin, setSucesfulyTrnsctin] = useState(false);
  const [paymntDet, setPaymntDet] = useState(false);
  const [trnfrAmnt, setTrnfrAmnt] = useState(false);
  const [trnfrComplte, setTrnfrComplte] = useState(false);
  const [trnferDet, setTrnferDet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { userInfo } = useSelector((s) => s.user);
  const [filters, setFilters] = useState([]);
  const [selectedTopFilter, setSelectedTopFilter] = useState("");
  const topFilteres = [
    { id: 1, label: "All", name: "" },
    // { id: 2, label: "Bank", name: "bank" },
    // { id: 3, label: "Wallet", name: "wallet" },
    // { id: 4, label: "Cash", name: "cash" },
    { id: 5, label: "In", name: "in" },
    { id: 6, label: "Out", name: "out" },
    { id: 8, label: "Receive", name: "receive" },
    { id: 9, label: "Paid", name: "paid" },
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
      case "bank":
        neFilter.fn = ({ paymentMethod }) => {
          return paymentMethod == "bank";
        };
        break;
      case "wallet":
        neFilter.fn = ({ paymentMethod }) => {
          return paymentMethod == "wallet";
        };
        break;
      case "cash":
        neFilter.fn = ({ paymentMethod }) => {
          return paymentMethod == "cash";
        };
        break;
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
      case "receive":
        neFilter.fn = ({ tnxType }) => {
          return tnxType == "Receive";
        };
        break;
      case "paid":
        neFilter.fn = ({ tnxType }) => {
          return tnxType == "Paid";
        };
        break;
      default:
        break;
    }
    setFilters((prev) => [...prev, neFilter]);
  };
  const { data: wallet, refetch } = useQuery({
    queryKey: ["workerWalletFetch"],
    queryFn: () => walletFetch(),
  });
  const { data: txnHistory, refetch: refetchTnxHistory } = useQuery({
    queryKey: ["workerWallettxnHistory"],
    queryFn: () => userTnxHistoryFetch(),
  });
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
  return (
    <>
      {waletCredit ? (
        <WalletCreditPopup
          component="user"
          refetchHistory={() => {
            refetchTnxHistory();
            refetch();
          }}
          onclickClosePopup={() => setWaletCredit(false)}
        />
      ) : null}
      <section
        className={`${
          component == "franchise"
            ? ""
            : "user-prof-grid-comp  referearn-comp wallet-comp  wallet-comp5"
        }`}
      >
        <div className="top-wallet-box">
          <h6>Transactions </h6>

          <div className="right-wallet-box">
            <button
              // onClick={
              //   () => setAddAmount(true)
              // }
              className="tranfer-btn add-money-btn"
            >
              Add Money
              <span>Coming Soon</span>
            </button>

            <button onClick={() => setOtp(true)} className="tranfer-btn">
              Withdraw Now
            </button>
            <button
              onClick={() => setWaletCredit(true)}
              className="tranfer-btn tranfer-btn23 add-money-btn"
            >
              Transfer Amount
            </button>
            <div className="total-walet-main">
              <div className="refrl-balance-box">
                <p>Balance Eco Coins</p>
                <div className="bal-bxmain">
                  <div className="balance-box">
                    <div className="rupes-icon">
                      <i class="fa-solid fa-coins"></i>
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
                <th>SN.</th>
                <th>Date/Time</th>
                <th>Txn Type</th>
                <th>Party</th>
                <th>Mode </th>
                <th>Tnx Amount</th>
                <th>Wallet Balance</th>
                <th>Status </th>
                <th>Txn ID </th>
                <th>
                  Bank <br /> Txn ID{" "}
                </th>
                <th>Invoice </th>
                <th>Details </th>
              </tr>
            </thead>
            <tbody>
              {!txnHistory?.error
                ? filteredData(
                    search(
                      tnxHistoryFormmating(txnHistory, userInfo, component),
                      searchQuery
                    ),
                    filters
                  )
                    ?.sort(
                      (a, b) => new Date(b?.updatedOn) - new Date(a?.updatedOn)
                    )
                    ?.map(
                      (
                        {
                          id,
                          updatedOn,
                          senderId,
                          senderType,
                          receiverType,
                          receiverId,
                          paymentMethod,
                          ammount,
                          senderWallet,
                          receiverWallet,
                          txnStatus,
                          txnDetails,
                          bankTxnId,
                          txnId,
                          txnType,
                          party,
                          wallet,
                          tnxType,
                        },
                        i
                      ) => {
                        return (
                          <tr key={id}>
                            {" "}
                            <td>
                              <span className="b-span2"> {i + 1} </span>
                            </td>
                            <td>
                              <div className="b-date">
                                <p>
                                  {" "}
                                  {DateTime.fromISO(updatedOn, {
                                    zone: "utc",
                                  })
                                    .setZone("Asia/Kolkata")
                                    .toFormat("ccc dd LLL yyyy hh:mm a")}
                                </p>
                              </div>
                            </td>
                            <td>
                              <div className="bussin-flex-box">
                                <div className="b-info ">
                                  <p>{tnxType}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="b-span2 ">{party?.id}</span>
                              <span
                                style={{ color: "#1266e3" }}
                                className="b-span2 "
                              >
                                {party?.type}
                              </span>
                            </td>
                            <td>
                              <span className="b-span2 ">{paymentMethod}</span>
                            </td>
                            <td>
                              <span className="b-span2  b-span4">
                                {ammount}
                              </span>
                            </td>
                            <td>
                              <span className="b-span2  b-span4">{wallet}</span>
                            </td>
                            <td className="text-tb-right">
                              <span
                                className={
                                  txnStatus == "pending"
                                    ? "status-g redstatus"
                                    : "status_g"
                                }
                              >
                                {txnStatus}
                              </span>
                            </td>
                            <td>
                              <span className="b-span2 text-center-align">
                                {txnId}
                              </span>
                            </td>
                            <td>
                              <span className="b-span2 text-center-align">
                                {bankTxnId}
                              </span>
                            </td>
                            <td>
                              <div className="id-dwld-btn text-center-align">
                                <span className="b-span"></span>
                                <i class="fa-regular fa-circle-down"></i>
                              </div>
                            </td>
                            <td>
                              <span className="b-span2">{txnDetails}</span>
                            </td>
                          </tr>
                        );
                      }
                    )
                : null}
            </tbody>
          </table>
        </div>
      </section>

      {otp == true ? (
        <ConfirmOtp
          refetchTnxHistory={refetchTnxHistory}
          onclickcloseOtp={() => setOtp(false)}
          onClickOpen={() => {
            setTransaction(true), setOtp(false);
          }}
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

export default WasteWallet;

const tnxHistoryFormmating = (txnHistory, userInfo, component) => {
  return txnHistory?.history?.map(
    (
      {
        senderId,
        senderType,
        receiverType,
        receiverId,
        senderWallet,
        receiverWallet,
        ...e
      },
      i
    ) => {
      let tnxType =
        receiverType == component && receiverId == userInfo?.id
          ? "Receive"
          : "Paid";
      let wallet = tnxType == "Receive" ? receiverWallet : senderWallet;
      const party = {};
      const labels = {
        guest: "Guest User",
        admin: "KabadPe",
      };
      if (tnxType == "Receive") {
        party.type = labels?.[senderType] || senderType;
        if (senderId) {
          party.id = hashId(senderId, senderType);
        }
      } else {
        party.type = labels?.[receiverType] || receiverType;
        if (receiverId) {
          party.id = hashId(receiverId, receiverType);
        }
      }
      return {
        tnxType,
        party,
        wallet,
        senderId,
        senderType,
        receiverType,
        receiverId,
        senderWallet,
        receiverWallet,
        ...e,
      };
    }
  );
};
