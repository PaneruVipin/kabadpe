import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import ManageWasteData from "../Components/ManageWasteData";
import { DateTime } from "luxon";
import { search } from "../lib/array";
const FrenchiesWasteTable = ({ wasteHistory }) => {
  const [workerWiseWaste, setWorkerWiseWaste] = useState([]);
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

  useEffect(() => {
    if (!wasteHistory || wasteHistory?.error) {
      return;
    }
    const workerWiseWaste = wasteHistory?.collection?.reduce((a, b) => {
      let newData = [...a];
      const exist = newData?.find(
        (e) => e?.buyerType == b?.buyerType || e?.buyerId == b?.buyerId
      );
      newData = newData.filter(
        (e) => e?.buyerType != exist?.buyerType || e?.buyerId != exist?.buyerId
      );
      let waste;
      try {
        waste = JSON.parse(b?.waste)?.waste;
      } catch {}
      waste = [...(exist?.waste || []), ...waste];
      waste = waste?.reduce((a, b) => {
        let newData = [...a];
        const exist = newData?.find(
          (e) => b?.name == e?.name || b?.productId == e?.productId
        );
        newData = newData.filter(
          (e) => b?.name != e?.name || b?.productId != e?.productId
        );
        const newObj = {
          ...b,
          weight: (+b?.weight || 0) + (+exist?.weight || 0),
          ammount: (+b?.ammount || 0) + (+exist?.ammount || 0),
        };
        newData.push(newObj);
        return newData;
      }, []);
      let ammount = (+exist?.ammount || 0) + (+b?.ammount || 0);
      const newObj = { ...b, waste, ammount };
      newData.push(newObj);
      return newData;
    }, []);
    setWorkerWiseWaste(workerWiseWaste);
  }, [wasteHistory]);
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
                {search(
                  workerWiseWaste?.map((w) => {
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
                      ...rest
                    },
                    i
                  ) => {
                    const totalWaste = waste?.reduce((a, b) => {
                      return a + +(b?.weight || 0);
                    }, 0);
                    return (
                      <tbody>
                        <tr>
                          <td>
                            <span>{i + 1}</span>
                          </td>
                          <td>
                            <span>{KabadCollector?.fullname}</span>
                          </td>
                          <td>
                            <span>{totalWaste}</span>
                          </td>
                          <td>
                            <span>{ammount}</span>
                          </td>

                          {!wasteHistory?.error
                            ? wasteHistory?.products?.map(
                                ({ id, productName }) => {
                                  const w = waste?.find(
                                    ({ productId, name }) =>
                                      productName == name ||
                                      id?.includes(productId)
                                  )?.weight;
                                  return <td>{w}</td>;
                                }
                              )
                            : null}

                          <td>
                            <div className="id-dwld-btn text-center-align">
                              <i class="fa-regular fa-circle-down"></i>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  }
                )}
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FrenchiesWasteTable;
