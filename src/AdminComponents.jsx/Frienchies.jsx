import React, { useState } from "react";
import "../style/AllUserData.css";
import DatePicker from "react-datepicker";
import frienchiesData from "../frienchiesData";
import FrenchEdit from "./FrenchEdit";
import FrenchDetPopup from "./FrenchDetPopup";
import { useQuery } from "@tanstack/react-query";
import {
  adminFranchiseStatusUpdate,
  adminGetFranchises,
} from "../apis/admins/users";
import { kabadPeUserIdMapper, search } from "../lib/array";

const Frienchies = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [frienData, setFrienData] = useState(frienchiesData);
  const [editForm, setEditForm] = useState(false);
  const [frenchDet, setFrenchDet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const frencDetOpen = () => {
    setEditForm(true);
  };

  const frencDetClose = () => {
    setEditForm(false);
  };

  const DetView = () => {
    setFrenchDet(true);
  };

  const DetViewClose = () => {
    setFrenchDet(false);
  };
  const { data: franchise, refetch } = useQuery({
    queryKey: ["adminfetcfranchise"],
    queryFn: () => adminGetFranchises(),
  });
  const handleChaneStatus = (id) => async (e) => {
    const status = e.target.value;
    await adminFranchiseStatusUpdate({ id, status });
    refetch();
  };
  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box">
            <h6>Frienchies </h6>

            <div className="right-user-filter-data-flex-box">
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

              <div className="user-type-sel-box user-data-search-box">
                <select name="user-type-data" id="user-type-data">
                  {/* <option value="1">User</option>
                        <option value="1">Vendor</option>
                        <option value="1">Staff (Manager)</option>
                        <option value="1">Staff (Sales Team)</option>
                        <option value="1">Staff (Support Team)</option> */}
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
                  <th>User Name</th>
                  <th>Company Name</th>
                  <th>Work Area </th>
                  <th>Mobile No.</th>
                  <th>Email</th>
                  {/* <th>Subs. Type</th> */}
                  <th>User Status</th>
                  {/* <th>City</th>
                  <th>Zip Code</th> */}
                  <th>Edit</th>
                  {/* <th>View</th>
                  <th>Action</th> */}
                </tr>
              </thead>

              <tbody>
                {!franchise?.error
                  ? search(kabadPeUserIdMapper(franchise, "KPF"), searchQuery, [
                      "id",
                      "companyName",
                      "fullname",
                      "franchiseAddress",
                      "phone",
                      "email",
                      "franchiseStatus",
                    ])?.map(
                      (
                        {
                          id,
                          franchiseLogo,
                          companyName,
                          fullname,
                          franchiseAddress,
                          phone,
                          email,
                          franchiseStatus,
                          hashId,
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
                                  <img
                                    src={
                                      franchiseLogo ||
                                      "/images/temp/temp-user-profile.png"
                                    }
                                    alt=""
                                  />
                                </div>
                              </td>

                              <td>
                                <span>{hashId} </span>
                              </td>
                              <td>
                                <span> {fullname} </span>
                              </td>
                              <td>
                                <span> {companyName} </span>
                              </td>

                              <td>
                                <span> {franchiseAddress} </span>
                              </td>
                              <td>
                                <span> {phone} </span>
                              </td>
                              <td>
                                <span> {email} </span>
                              </td>

                              {/* <td>
                                <span className="substype-text">
                                </span>
                              </td> */}

                              <td>
                                <span>
                                  <select
                                    // name="franchiseStatus"
                                    onChange={handleChaneStatus(id)}
                                    // onBlur={handleBlur}
                                    defaultValue={franchiseStatus}
                                    id="subscriptiontype"
                                  >
                                    <option value="inactive">Unverified</option>
                                    <option value="active">Unapproved</option>
                                    <option value="approve">Approved</option>
                                    <option value="ban">Ban</option>
                                  </select>
                                </span>
                              </td>
                              {/* <td> <span> {curElem.City} </span> </td>
                              <td> <span> {curElem.Zip} </span> </td> */}

                              <td style={{ display: "flex", gap: "5px" }}>
                                <div
                                  onClick={() => {
                                    setSelectedUser({
                                      id,
                                      franchiseLogo,
                                      companyName,
                                      fullname,
                                      franchiseAddress,
                                      phone,
                                      email,
                                      franchiseStatus,
                                      hashId,
                                      ...rest,
                                    });
                                    frencDetOpen();
                                  }}
                                  className="edit-user-btn"
                                >
                                  <i class="fa-regular fa-pen-to-square"></i>
                                </div>
                              </td>

                              {/* <td>
                                <div
                                  onClick={() => DetView()}
                                  className="edit-user-btn view-btn"
                                >
                                  <i class="fa-regular fa-eye"></i>
                                </div>
                              </td> */}

                              {/* <td>
                                <div className="icon-flex-box">
                                  <button
                                    className="app-dis-btn"
                                    title="approve"
                                  >
                                    <i class="fa-regular fa-circle-check"></i>
                                  </button>
                                  <button
                                    className="app-dis-btn"
                                    title="diapprove"
                                  >
                                    <i class="fa-regular fa-circle-xmark"></i>
                                  </button>
                                </div>
                              </td> */}

                              {/*     */}
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

      {editForm ? (
        <FrenchEdit
          comp="admin"
          initialValues={selectedUser}
          onClickCloseEditForm={frencDetClose}
          refetch={refetch}
        />
      ) : null}

      {frenchDet ? (
        <FrenchDetPopup onclickCloseDetFrench={DetViewClose} />
      ) : null}
    </>
  );
};

export default Frienchies;
