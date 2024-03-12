import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ManageWasteData from "./ManageWasteData";
import { DateTime } from "luxon";

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
  console.log("this is waste data",wasteData)
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
                <th>
                  Newspaper <br /> (kg)
                </th>
                <th>
                  Office Paper <br /> (kg)
                </th>
                <th>
                  Copies/Books <br /> (kg)
                </th>
                <th>
                  Cardboard <br /> (kg)
                </th>
                <th>
                  Plastic <br /> (kg)
                </th>
                <th>
                  Iron <br /> (kg)
                </th>
                <th>
                  Steel <br /> (kg)
                </th>
                <th>
                  Aluminium <br /> (kg)
                </th>
                <th>
                  Brass <br /> (kg)
                </th>
                <th>
                  Copper <br /> (kg)
                </th>
                <th>
                  Heavy <br /> Waste (kg)
                </th>
                <th>
                  Light <br /> Waste (piece)
                </th>
                <th>
                  Scrap <br /> Tablet (piece)
                </th>
                <th>
                  Scrap <br /> Laptop (piece)
                </th>
                <th>
                  CRT <br /> Monitor (piece)
                </th>
                <th>
                  LCD <br /> Monitor (piece)
                </th>
                <th>
                  Computer <br /> CPU (piece)
                </th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {!wasteData?.error
                ? wasteData?.map(
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
                      },
                      i
                    ) => {
                      let w;
                      try {
                        w = JSON.parse(waste)?.waste;
                      } catch {}
                      const totalWaste = w?.reduce((a, b) => {
                        return a + +b?.weight;
                      }, 0);
                      console.log("this is total waste", totalWaste);
                      return (
                        <>
                          <tr key={i}>
                            <td>
                              {" "}
                              <span> {i + 1} </span>{" "}
                            </td>
                            <td>
                              <div className="mnge-date">
                                <p>
                                  {DateTime.fromISO(addedOn, {
                                    zone: "utc",
                                  }).toFormat("ccc dd LLL yyyy")}{" "}
                                </p>
                                <span>
                                  {" "}
                                  {DateTime.fromISO(addedOn, {
                                    zone: "utc",
                                  }).toFormat("hh:mm a")}
                                </span>
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

                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "newspaper" || name == "Newspaper"
                                )?.weight || "0.00"}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) =>
                                    name == "officepaper" ||
                                    name == "Officepaper"
                                )?.weight || "0.00"}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) =>
                                    name == "books" || name == "Books"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) =>
                                    name == "cardboard" || name == "Cardboard"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) =>
                                    name == "plastic" || name == "Plastic"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) => name == "iron" || name == "Iron"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) =>
                                    name == "steel" || name == "Steel"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "aluminium" || name == "Aluminium"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "brass" || name == "Brass"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) =>
                                    name == "copper" || name == "Copper"
                                )?.weight || "0.00"}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "heavywaste" || name == "Heavywaste"
                                )?.weight || "0.00"}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "lightwaste" || name == "Lightwaste"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "tablet" || name == "Tablet"
                                )?.weight || "0.00"}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {" "}
                                {w?.find(
                                  ({ name }) =>
                                    name == "laptop" || name == "Laptop"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "monitor" || name == "Monitor"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "lcd" ||
                                    name == "Lcd" ||
                                    name == "LCD"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
                            <td>
                              {" "}
                              <span>
                                {w?.find(
                                  ({ name }) =>
                                    name == "computer" || name == "Computer"
                                )?.weight || "0.00"}{" "}
                              </span>{" "}
                            </td>
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
