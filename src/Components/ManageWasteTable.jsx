import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ManageWasteData from "./ManageWasteData";
import { DateTime } from "luxon";
import { search } from "../lib/array";

const ManageWasteTable = ({ wasteData }) => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [searchItem, setSearchItem] = useState("");

  const filterData = ManageWasteData.filter((curData) => {
    const matchItem =
      curData.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      curData.userId.toString().includes(searchItem);
    return matchItem;
  });
  return (
    <>
      <div className="mnge-wste-table-main-bx">
        <div className="appointment-flex-box mnge-waste-filter-flex">
          <p className="tex-line tex-line2"> Manage Waste</p>

          <div className="right-search-date-filter-box">
            <div className="A-search-box">
              <input
                type="text"
                name="search"
                id="search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                autoComplete="off"
                placeholder="Search..."
              />
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

            <div className="excel-export-btn">
              <i class="fa-solid fa-file-excel"></i>
            </div>

            <button className="clr-stck">Clear Stock</button>
          </div>
        </div>

        <div className="all-user-table stock-tble mnge-waste-table">
          <table>
            <thead>
              <tr>
                <th>SNO.</th>
                <th>Date & Time</th>
                <th>
                  Total <br /> Waste (Kg)
                </th>
                <th>
                  Value (<i class="fa-solid fa-indian-rupee-sign"></i>)
                </th>
                <th>Name</th>
                {!wasteData?.error
                  ? wasteData?.products?.map(({ id, productName, unit }) => (
                      <th key={id}>
                        {productName?.replace(/\b\w/g, function (char) {
                          return char?.toUpperCase();
                        })}{" "}
                        <br /> ({unit})
                      </th>
                    ))
                  : null}
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {!wasteData?.error
                ? search(
                    wasteData?.collection?.map((w) => {
                      return {
                        ...w,
                        date: DateTime.fromISO(w?.addedOn, {
                          zone: "utc",
                        }).toFormat("ccc dd LLL yyyy"),
                        time: DateTime.fromISO(w?.addedOn, {
                          zone: "utc",
                        }).toFormat("hh:mm a"),
                        u: w?.User?.fullname,
                      };
                    }),
                    searchItem
                  )?.map(
                    (
                      {
                        addedOn,
                        ammount,
                        appoinmentId,
                        buyerId,
                        buyerType,
                        collectionStatus,
                        id,
                        paymentMode,
                        sellerId,
                        sellerType,
                        waste,
                        User,
                        time,
                        date,
                      },
                      i
                    ) => {
                      let w;
                      try {
                        w = JSON.parse(waste)?.waste;
                      } catch {}
                      const totalWaste = w?.reduce((a, b) => {
                        return a + +(b?.weight || 0);
                      }, 0);
                      return (
                        <>
                          <tr key={id}>
                            <td>
                              {" "}
                              <span> {i + 1} </span>{" "}
                            </td>
                            <td>
                              <div className="mnge-date">
                                <p>{date} </p>
                                <span> {time}</span>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <span> {totalWaste} </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span> {ammount} </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <div className="mnge-date user-text-m">
                                {" "}
                                <p> {User?.fullname}</p>
                                {/* <span> {"elem.userId"} </span>{" "} */}
                              </div>
                            </td>
                            {!wasteData?.error
                              ? wasteData?.products?.map(
                                  ({ id, productName }) => {
                                    const waste = w?.find(
                                      ({ productId, name }) =>
                                        productName == name || id == productId
                                    )?.weight;
                                    return <td>{waste}</td>;
                                  }
                                )
                              : null}

                            <td>
                              <div className="id-dwld-btn text-center-align">
                                <span className="b-span">
                                  {/* {" "}
                                  {"elem.invoice"}{" "} */}
                                </span>
                                <i class="fa-regular fa-circle-down"></i>
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
    </>
  );
};

export default ManageWasteTable;
