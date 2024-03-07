import React, { useState } from "react";
import "../style/AllUserData.css";
import DatePicker from "react-datepicker";
import wastecolectData from "../WastecolectData";
import WasteColectEdit from "./WasteColectEdit";
import WasteColectVew from "./WasteColectVew";
import AddWorkerComp from "./AddWorkerComp";
import { useQuery } from "@tanstack/react-query";
import { adminGetWorkers } from "../apis/admins/users";
import { workers as workerTypes } from "../lib/worker";
import { search } from "../lib/array";

const Wastecolect = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [wasteColectData, setWasteColectData] = useState(wastecolectData);
  const [wasteDataBox, setWasteDataBox] = useState(false);
  const [wasteViewData, setWasteViewData] = useState(false);
  const [workChange, setWorkChange] = useState("");
  const [addWork, setAddWork] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const data = {
    cleaner: ["Cleaner"],
    kabadiwala: ["Kabadiwala"],
    toiletcleaner: ["Toilet Cleaner"],
    sweeper: ["Sweeper"],
    septictankcleaner: ["Septic Tank cleaner"],
  };

  const subsDataClose = () => {
    setWasteDataBox(false);
  };

  const closewasteDataVw = () => {
    setWasteViewData(false);
  };

  const onWorkChange = (event) => {
    const value = event.target.value;
    setWorkChange(value);

    const filteredData = wastecolectData.filter((item) => {
      return item.checkworktype === value;
    });

    setWasteColectData(filteredData);
  };

  const { data: workers, refetch } = useQuery({
    queryKey: ["adminfetcworkers"],
    queryFn: () => adminGetWorkers(),
  });

  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box5">
            <h6>Waste Collector </h6>

            <div className="right-worker-type-flex-bx right-worker-type-flex-bx5">
              <div className="user-data-search-box">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search..."
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value?.trimStart())}
                />
              </div>

              <button
                onClick={() => setAddWork(true)}
                className="work-type-btn"
              >
                Add Worker Type
              </button>

              <div className="export-btn">
                <i class="fa-regular fa-file-excel"></i>
              </div>

              <div className="export-btn">
                <i class="fa-regular fa-file-pdf"></i>
              </div>
            </div>
          </div>

          <div className="right-user-filter-data-flex-box right-user-filter-data-flex-box6">
            <div className="add-work-sel-bx user-type-sel-box user-data-search-box">
              <select
                name="worktype"
                id="worktype"
                value={workChange}
                onChange={onWorkChange}
              >
                <option value="">Choose</option>
                <option value="cleaner">Cleaner</option>
                <option value="kabadiwala">Kabadiwala</option>
                <option value="toiletcleaner">Toilet Cleaner</option>
                <option value="septictankcleaner">Septic Tank Cleaner</option>
                <option value="sweeper">Sweeper</option>
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

          <div className="all-user-table">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Profile</th>
                  <th>User Id</th>
                  <th> Name</th>
                  <th>Company Name</th>
                  <th>Work Area </th>
                  <th>Sub Area </th>
                  <th>Mobile No.</th>
                  <th>Email</th>
                  <th>Work Type</th>
                  <th>User Status</th>
                  <th>Zip Code</th>
                  {/* <th>Edit</th>
                  <th>View</th> */}
                  {/* <th>Action</th> */}
                </tr>
              </thead>

              <tbody>
                {!workers?.error
                  ? search(workers, searchQuery, [
                      "id",
                      "profileImage",
                      "workerRole",
                      "fullname",
                      "phoneNumber",
                      "email",
                      "ariaName",
                      "subAriaName",
                      "pincode",
                      "accountStatus",
                    ])?.map(
                      (
                        {
                          id,
                          profileImage,
                          workerRole,
                          fullname,
                          phoneNumber,
                          email,
                          ariaName,
                          subAriaName,
                          pincode,
                          accountStatus,
                          Franchise,
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={i}>
                              <td>
                                <span> {i+1} </span>
                              </td>
                              <td>
                                <div className="user-prof-img">
                                  <img
                                    src={
                                      profileImage ||
                                      "./images/temp/temp-user-profile.png"
                                    }
                                    alt=""
                                  />
                                </div>
                              </td>

                              <td>
                                <span> KPW{String(id).padStart(7, "0")} </span>
                              </td>
                              <td>
                                <span> {fullname} </span>
                              </td>
                              <td>
                                <span> {Franchise?.companyName} </span>
                              </td>

                              <td>
                                <span> {ariaName} </span>
                              </td>
                              <td>
                                <span> {subAriaName} </span>
                              </td>
                              <td>
                                <span> {phoneNumber} </span>
                              </td>
                              <td>
                                <span> {email} </span>
                              </td>
                              <td>
                                <span className="worktype-text">
                                  {" "}
                                  {
                                    workerTypes.find(
                                      ({ value }) => value == workerRole
                                    ).label
                                  }{" "}
                                </span>
                              </td>

                              <td>
                                <span
                                // style={{
                                //   color:
                                //     curElem.categoryStatus === "banned"
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
                                {/* <div
                                  onClick={() => setWasteDataBox(true)}
                                  className="edit-user-btn"
                                >
                                  <i class="fa-regular fa-pen-to-square"></i>
                                </div> */}
                              </td>

                              <td>
                                {/* <div
                                  onClick={() => setWasteViewData(true)}
                                  className="edit-user-btn view-btn"
                                >
                                  <i class="fa-regular fa-eye"></i>
                                </div> */}
                              </td>

                              {/* <td>
                          <div className="icon-flex-box">
                            <button className="app-dis-btn" title="approve">
                            <i class="fa-regular fa-circle-check"></i>
                            </button>
                            <button className="app-dis-btn" title="diapprove">
                            <i class="fa-regular fa-circle-xmark"></i>
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
        <WasteColectEdit onClickCloseEditForm={subsDataClose} />
      ) : null}

      {wasteViewData ? (
        <WasteColectVew onClickCloseWasteColectData={closewasteDataVw} />
      ) : null}

      {addWork ? (
        <AddWorkerComp onClickClose={() => setAddWork(false)} />
      ) : null}
    </>
  );
};

export default Wastecolect;
