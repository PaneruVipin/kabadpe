import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ManageWasteData from "../Components/ManageWasteData";
import { DateTime } from "luxon";
import { search } from "../lib/array";
const FrenchiesWasteTable = ({ wasteHistory }) => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [searchItem, setSearchItem] = useState("");
  const [isTableActive, setIsTableActive] = useState("All");

  const filterData = ManageWasteData.filter((curData) => {
    const matchItem =
      curData.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      curData.userId.toString().includes(searchItem);
    return matchItem;
  });

  const handleTableActive = (value) => {
    setIsTableActive(value);
  };
  const getColetionByWorker = () => {
    if (wasteHistory?.error || !wasteHistory) {
      return [];
    }
    const waste = wasteHistory?.collection?.reduce((a, b) => {
      let newData = [...a];
      try {
        const w = JSON.parse(b?.waste)?.waste;
        w?.forEach(
          ({ name, image, price, bulkPrice, ammount, weight, productId }) => {
            const exist = newData?.find(
              ({ id, productId: id2 }) => id == name || id2 == productId
            );
            let newObj = {
              id: name,
              productId,
              image,
              price,
              bulkPrice,
              ammount: +ammount,
              weight: +weight,
            };
            if (exist) {
              newObj = {
                ...exist,
                ammount: +(exist?.ammount || 0) + +(ammount || 0),
                weight: +(exist?.weight || 0) + +(weight || 0),
              };
              newData = newData?.map((d) => {
                if (d?.id == name) {
                  return newObj;
                } else {
                  return d;
                }
              });
              return;
            }
            newData?.push(newObj);
          }
        );
      } catch {}
      return newData;
    }, []);
  };
  return (
    <>
      <div>
        <div className="mnge-wste-table-main-bx">
          <div className="mnge-waste-filter-bx">
            <button
              onClick={() => handleTableActive("All")}
              className={
                isTableActive === "All"
                  ? "mnge-wastefilt-btn wsteactive"
                  : "mnge-wastefilt-btn"
              }
            >
              All
            </button>

            <button
              onClick={() => handleTableActive("waste")}
              className={
                isTableActive === "waste"
                  ? "mnge-wastefilt-btn wsteactive"
                  : "mnge-wastefilt-btn"
              }
            >
              Waste Collector
            </button>
          </div>

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

          {isTableActive === "All" && (
            <div className="all-user-table stock-tble mnge-waste-table mt-3">
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
                      WasteColector <br /> Name
                    </th>
                    {!wasteHistory?.error
                      ? wasteHistory?.products?.map(
                          ({ id, productName, unit }) => (
                            <th key={id}>
                              {productName?.replace(/\b\w/g, function (char) {
                                return char?.toUpperCase();
                              })}{" "}
                              <br /> ({unit})
                            </th>
                          )
                        )
                      : null}
                    <th>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {!wasteHistory?.error
                    ? search(
                        wasteHistory?.collection?.map((w) => {
                          return {
                            ...w,
                            date: DateTime.fromISO(w?.addedOn, {
                              zone: "utc",
                            })
                              .setZone("Asia/Kolkata")
                              .toFormat("ccc dd LLL yyyy"),
                            time: DateTime.fromISO(w?.addedOn, {
                              zone: "utc",
                            })
                              .setZone("Asia/Kolkata")
                              .toFormat("hh:mm a"),
                            u: w?.User?.fullname,
                            k: w?.KabadCollector?.fullname,
                            f:
                              w?.Franchise?.companyName ||
                              w?.KabadCollector?.Franchise?.companyName,
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
                            KabadCollector,
                            Franchise,
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
                                    <p>
                                      {" "}
                                      {DateTime.fromISO(addedOn, {
                                        zone: "utc",
                                      }).toFormat("ccc dd LLL yyyy")}{" "}
                                    </p>
                                    <span>
                                      {" "}
                                      {DateTime.fromISO(addedOn, {
                                        zone: "utc",
                                      }).toFormat("hh:mm a")}{" "}
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
                                    <p> {User?.fullname} </p>
                                    {/* <span> {"elem.userId"} </span>{" "} */}
                                  </div>
                                </td>
                                <td>
                                  <span>{KabadCollector?.fullname}</span>
                                </td>
                                {!wasteHistory?.error
                                  ? wasteHistory?.products?.map(
                                      ({ id, productName }) => {
                                        const waste = w?.find(
                                          ({ productId, name }) =>
                                            productName == name ||
                                            id?.includes(productId)
                                        )?.weight;
                                        return <td>{waste}</td>;
                                      }
                                    )
                                  : null}
                                <td>
                                  <div className="id-dwld-btn text-center-align">
                                    {/* <span className="b-span"> {elem.invoice} </span> */}
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
          )}

          {isTableActive === "waste" && (
            <div className="all-user-table stock-tble mnge-waste-table mt-3">
              <table>
                <thead>
                  <tr>
                    <th>SNO.</th>
                    <th>WasteColector Name</th>
                    <th>
                      Total <br /> Waste (Kg)
                    </th>
                    <th>
                      Value (<i class="fa-solid fa-indian-rupee-sign"></i>)
                    </th>

                    <th>
                      <span> Newspaper,Magazine,Office Paper (kg) </span>
                    </th>
                    <th>
                      <span> Copy,Books (kg) </span>
                    </th>
                    <th>
                      <span> Cardboard,boxes,packaging Material (kg) </span>
                    </th>
                    <th>
                      <span> PET </span>
                    </th>

                    <th>
                      {" "}
                      <span> LDPE </span>
                    </th>

                    <th>
                      {" "}
                      <span> Aluminium Heavy (kg) </span>
                    </th>
                    <th>
                      {" "}
                      <span> Monitor Big (piece) </span>
                    </th>
                    <th>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <span>Aditya Jain</span>
                    </td>
                    <td>
                      <span>10</span>
                    </td>
                    <td>
                      <span>120.00</span>
                    </td>

                    <td>10</td>
                    <td>9</td>
                    <td>10</td>
                    <td>5</td>
                    <td></td>
                    <td></td>
                    <td>7</td>

                    <td>
                      <div className="id-dwld-btn text-center-align">
                        <i class="fa-regular fa-circle-down"></i>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FrenchiesWasteTable;
