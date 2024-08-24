import React, { useState } from "react";
import "../style/AllUserData.css";
import DatePicker from "react-datepicker";
import frienchiesData from "../frienchiesData";
import { useQuery } from "@tanstack/react-query";
import LisVendor from "./VendorData";
import { MdOutlineAdsClick } from "react-icons/md";
import {
  adminFranchiseStatusUpdate,
  adminGetFranchises,
  adminGetVendors,
  adminUpdateVendors,
} from "../apis/admins/users";
import {
  filteredData,
  hashId,
  kabadPeUserIdMapper,
  search,
} from "../lib/array";
import { DateTime } from "luxon";

const AdminVendor = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [frienData, setFrienData] = useState(frienchiesData);
  const [editForm, setEditForm] = useState(false);
  const [frenchDet, setFrenchDet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [filters, setFilters] = useState([]);
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
  const { data: vendors, refetch } = useQuery({
    queryKey: ["adminGetVendors"],
    queryFn: () => adminGetVendors(),
  });
  const handleChaneStatus = (id) => async (e) => {
    const status = e.target.value;
    await adminFranchiseStatusUpdate({ id, status });
    refetch();
  };
  const handleFilterChange = (e) => {
    const { name, value } = e?.target;
    let newFilters = filters.filter(({ id }) => id != name);
    setFilters(newFilters);
    if (!value) {
      return;
    }
    let filter;
    switch (name) {
      case "status":
        filter = {
          id: "status",
          fn: ({ franchiseStatus }) => franchiseStatus == value,
        };
        break;
      default:
        break;
    }
    newFilters.push(filter);
    setFilters(newFilters);
  };

  return (
    <>
      <section className="all-user-data-comp">
        <div className="all-user-data-main-box">
          <div className="user-det-top-flex-box user-det-top-flex-box221">
            <h6>Vendor Lists </h6>

            {/* <button className="add-btn">Add Vendor</button> */}
          </div>
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
              <select
                onChange={handleFilterChange}
                name="status"
                id="user-type-data"
              >
                <option value="">All Status</option>
                <option value="inactive">Unverified</option>
                <option value="unapprove">Unapproved</option>
                <option value="active">Active</option>
                <option value="ban">Ban</option>
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
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="all-user-table">
            <table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Profile</th>
                  <th>Vendor Id</th>
                  <th>Vendor Name</th>
                  <th>Email</th>
                  <th>Mobile No.</th>
                  <th>Company Name</th>
                  <th>Registration Date </th>
                  {/* <th>Last Login Date </th>
                  <th>No. of Products </th>
                  <th>Total Sales </th>
                  <th>Rating & Reviews </th>
                  <th>Total Commission </th>
                  <th>Payout Status </th> */}
                  <th>OTP Verification</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {!vendors?.error
                  ? vendors?.map(
                      (
                        {
                          companyName,
                          contactNumber,
                          email,
                          fullname,
                          id,
                          isOtpVerified,
                          phoneNumber,
                          profileImage,
                          storeName,
                          vendorStatus,
                          addedOn,
                          ...curElem
                        },
                        i
                      ) => {
                        return (
                          <>
                            <tr key={id}>
                              <td>
                                <span> {i + 1} </span>
                              </td>
                              <td>
                                <div className="user-prof-img">
                                  <img
                                    src={
                                      curElem.profile ||
                                      "/images/temp/temp-user-profile.png"
                                    }
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>
                                <span> {hashId(id, "", "KPV")} </span>
                              </td>
                              <td>
                                <span> {fullname} </span>
                              </td>
                              <td>
                                <span> {email} </span>
                              </td>
                              <td>
                                <span> {phoneNumber} </span>
                              </td>
                              <td>
                                <span> {companyName} </span>
                              </td>
                              {/* <td>
                                <span
                                  style={{
                                    color:
                                      curElem.status === "Active"
                                        ? "#007bff"
                                        : "#ff0000",
                                  }}
                                  className={
                                    curElem.status === "Pending"
                                      ? "colororange"
                                      : ""
                                  }
                                >
                                  {curElem.status}{" "}
                                </span>
                              </td> */}
                              <td>
                                <span>
                                  {" "}
                                  {DateTime.fromISO(addedOn, {
                                    zone: "utc",
                                  })
                                    .setZone("Asia/Kolkata")
                                    .toFormat("ccc dd LLL yyyy")}{" "}
                                </span>
                              </td>
                              {/* <td>
                                <span> {curElem.loginDate} </span>
                              </td>
                              <td>
                                <span> {curElem.prod} </span>
                              </td>
                              <td>
                                <span> {curElem.totalSales} </span>
                              </td>
                              <td>
                                <span> {curElem.rev} </span>
                              </td>
                              <td>
                                <span> {curElem.comision} </span>
                              </td>
                              <td>
                                <span
                                  style={{
                                    color:
                                      curElem.payout === "Completed"
                                        ? "#008000"
                                        : "#f1652e",
                                  }}
                                >
                                  {" "}
                                  {curElem.payout} <MdOutlineAdsClick />{" "}
                                </span>
                              </td> */}
                              <td>
                                <span
                                  style={{
                                    color: isOtpVerified
                                      ? "#007bff"
                                      : "#ff0000",
                                  }}
                                >
                                  {isOtpVerified ? "Yes" : "No"}
                                </span>
                              </td>
                              <td>
                                <div className="action-sel-bx">
                                  <select
                                    name="action"
                                    id="action"
                                    value={vendorStatus}
                                    onChange={async (e) => {
                                      await adminUpdateVendors({
                                        id,
                                        vendorStatus: e?.target?.value,
                                      });
                                      refetch();
                                    }}
                                  >
                                    <option value="inactive">Unapproved</option>
                                    <option value="active">Approved</option>
                                    <option value="suspend">Suspended</option>
                                    {/* <option value="action">Deleting</option> */}
                                  </select>
                                </div>
                              </td>
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

export default AdminVendor;
