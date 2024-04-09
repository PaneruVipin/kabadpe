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
import { hashId } from "../lib/array";
import WalletCreditPopup from "./WalletCreditPopup";
const WasteWallet = ({ component = "worker" }) => {
  const [waletData, setWaletData] = useState(WalletData);
  const [waletCredit, setWaletCredit] = useState(false);
  const [butonActive, setButonActive] = useState(true);
  const [waletDataNew, setwaletDataNew] = useState([]);
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
  const { userInfo } = useSelector((s) => s.user);
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
  const { data: wallet, refetch } = useQuery({
    queryKey: ["workerWalletFetch"],
    queryFn: () => walletFetch(),
  });
  const { data: txnHistory, refetch: refetchTnxHistory } = useQuery({
    queryKey: ["workerWallettxnHistory"],
    queryFn: () => userTnxHistoryFetch(),
  });

  return (
    <>
      {waletCredit ? (
        <WalletCreditPopup
          component="user"
          refetchHistory={refetchTnxHistory}
          onclickClosePopup={() => setWaletCredit(false)}
        />
      ) : null}
      <section className="user-prof-grid-comp  referearn-comp wallet-comp  wallet-comp5">
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
                ? txnHistory?.history
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
                        },
                        i
                      ) => {
                        let txnType =
                          receiverType == component &&
                          receiverId == userInfo?.id
                            ? "Receive"
                            : "Paid";
                        let wallet =
                          txnType == "Receive" ? receiverWallet : senderWallet;
                        const party = {};
                        const labels = {
                          guest: "Guest User",
                          admin: "KabadPe",
                        };
                        if (txnType == "Receive") {
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
                                  <p>{txnType}</p>
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
