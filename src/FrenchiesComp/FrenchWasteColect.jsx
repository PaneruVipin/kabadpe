import React, { useState } from "react";
import "../style/Frenchiespanel.css";
import DatePicker from "react-datepicker";
import wastecolectData from "../WastecolectData";
import WasteColectEdit from "../AdminComponents.jsx/WasteColectEdit";
import WasteColectVew from "../AdminComponents.jsx/WasteColectVew";
import FrenchWasteEdit from "./FrenchWasteEdit";
import LedgerComp from "./LedgerComp";
import WorkCapacity from "./WorkCapacity";
import { franchiseWorkerFetch } from "../apis/franchise/workers";
import { useQuery } from "@tanstack/react-query";
const FrenchWasteColect = ({ updatedWasteColectData }) => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [wasteDataBox, setWasteDataBox] = useState(false);
  const [wasteViewData, setWasteViewData] = useState(false);
  const [transctn, setTransctn] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState();
  const subsDataClose = () => {
    setWasteDataBox(false);
  };

  const closewasteDataVw = () => {
    setWasteViewData(false);
  };
  const { data: workers, refetch } = useQuery({
    queryKey: ["franchiseWorkers"],
    queryFn: () => franchiseWorkerFetch(),
  });
  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box4">
            <div className="work-capacity-flex-bx">
              <h6>Workers </h6>
            </div>

            <div className="right-user-filter-data-flex-box">
              <div className="user-data-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  autoComplete="off"
                />
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
                  {/* <th>Ledger</th> */}
                </tr>
              </thead>

              <tbody>
                {!workers?.error
                  ? workers?.map(
                      (
                        {
                          accountStatus,
                          ariaName,
                          email,
                          fullname,
                          id,
                          phoneNumber,
                          pincode,
                          profileImage,
                          ...rest
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={i}>
                              <td>
                                <span> {i + 1} </span>
                              </td>
                              <td>
                                <div className="user-prof-img">
                                  <img src={profileImage} alt="" />
                                </div>
                              </td>

                              <td>
                                <span> {id} </span>
                              </td>
                              <td>
                                <span> {fullname} </span>
                              </td>

                              <td>
                                <span> {ariaName} </span>
                              </td>
                              <td>
                                <span> {phoneNumber} </span>
                              </td>
                              <td>
                                <span> {email} </span>
                              </td>

                              <td>
                                <span
                                // style={{
                                //   color:
                                //     curElem.categoryStatus === "banned" ||
                                //     curElem.categoryStatus === "unverified"
                                //       ? "red"
                                //       : "green",
                                // }}
                                // className={
                                //   curElem.categoryStatus === "Banned"
                                //     ? "status-t statColor"
                                //     : "status-t"
                                // }
                                >
                                  {" "}
                                  {accountStatus}{" "}
                                </span>
                              </td>

                              <td>
                                <span> {pincode} </span>
                              </td>

                              <td>
                                <div
                                  onClick={() => {
                                    setSelectedWorker({
                                      accountStatus,
                                      ariaName,
                                      email,
                                      fullname,
                                      id,
                                      phoneNumber,
                                      pincode,
                                      profileImage,
                                      ...rest,
                                    });
                                    setWasteDataBox(true);
                                  }}
                                  className="edit-user-btn"
                                >
                                  <i class="fa-regular fa-pen-to-square"></i>
                                </div>
                              </td>
                              {/* <td>
                                <div className="icon-flex-box">
                                  <button
                                    onClick={() => setTransctn(true)}
                                    className="app-dis-btn"
                                    title="approve"
                                  >
                                    <i class="fa-solid fa-money-bill-transfer"></i>
                                  </button>
                                </div>
                              </td> */}
                            </tr>
                          </>
                        );
                      }
                    )
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {wasteDataBox ? (
        <WasteColectEdit
          initialValues={selectedWorker}
          refetch={refetch}
          onClickCloseEditForm={subsDataClose}
        />
      ) : null}

      {wasteViewData ? (
        <FrenchWasteEdit
          WasteViewTrue={wasteViewData}
          onClickCloseWasteColectData={closewasteDataVw}
        />
      ) : null}

      {transctn ? <LedgerComp onclickClose={() => setTransctn(false)} /> : null}
    </>
  );
};

export default FrenchWasteColect;
