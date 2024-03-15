import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import stockData from "./StockData";
import AdminWasteProd from "./AdminWasteProductsList";
import ManageWasteTable from "./ManageWasteTable";
import { useQuery } from "@tanstack/react-query";
import { workerWasteCollectionFetch } from "../apis/worker/manageWaste";

const ClearStock = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date("2014/02/10"));
  const [stock, setStock] = useState(stockData);
  const [waste, setWaste] = useState([]);
  const { data: wasteData, refetch } = useQuery({
    queryKey: ["workerWasteCollectionFetch"],
    queryFn: () => workerWasteCollectionFetch(),
  });

  const { data: wasteHistory, refetchWasteHistory } = useQuery({
    queryKey: ["workerWasteCollectionhistrFetch"],
    queryFn: () => workerWasteCollectionFetch("history"),
  });
  useEffect(() => {
    if (!wasteData || wasteData?.error) {
      return;
    }
    const waste = wasteData?.reduce((a, b) => {
      let newData = [...a];
      try {
        const w = JSON.parse(b?.waste)?.waste;
        w?.forEach(({ name, image, price, bulkPrice, ammount, weight }) => {
          const exist = newData?.find(({ id }) => id == name);
          let newObj = {
            id: name,
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
        });
      } catch {}
      return newData;
    }, []);
    setWaste(waste);
  }, [wasteData]);
  const totalWaste = waste?.reduce((a, b) => {
    return a + +b?.weight;
  }, 0);
  return (
    <>
      <section className="waste-appoint-ment-comp">
        <div className="right-tab-main-bx  tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3 tab-main-bx-title">
            <h3>Manage Waste</h3>

            <div className="waste-mnge-prod-main">
              <div className="waste-manage-prod-grid-main">
                <div className="waste-mnge-prod-bx">
                  <div className="waste-mnge-prod-text">
                    <h6> Total Waste </h6>
                    <p> {totalWaste}kg </p>
                  </div>
                  <div className="waste-prod-icon">
                    <img src={"/images/customImg/hazardous.png"} alt="" />
                  </div>
                </div>
                {AdminWasteProd.map((curElem, id) => {
                  const w = waste?.find(
                    ({ id }) =>
                      id?.toLowerCase() == curElem?.title?.toLowerCase()
                  );
                  return (
                    <>
                      <div key={id} className="waste-mnge-prod-bx">
                        <div className="waste-mnge-prod-text">
                          <h6> {curElem.title} </h6>
                          <p>
                            {" "}
                            {w?.weight || "00.00"}
                            {curElem?.unit}{" "}
                          </p>
                        </div>
                        <div className="waste-prod-icon">
                          <img src={curElem.img} alt="" />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <ManageWasteTable wasteData={wasteHistory} />

            {/* <div className="waste-appoint-main-bx">
              <div className="appointment-flex-box">
                <p className="tex-line tex-line2"> Manage Waste</p>

                <div className="right-search-date-filter-box">
                  <div className="A-search-box">
                    <input
                      type="text"
                      name="search"
                      id="search"
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

                  <div className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </div>

                <div className="all-user-table stock-tble">
                    <table>
                        <thead>
                            <tr>
                                <th>SNO.</th>
                                <th>Date</th>
                                <th>Waste (in Kg)</th>
                                <th>Total Waste (in Kg)</th>

                            </tr>
                        </thead>

                        <tbody>
                            {stock.map((elem,indx) => {
                                return (
                                    <>

                                    <tr key={indx}>
                                        <td> <span> {indx + 1} </span> </td>
                                        <td> <span> {elem.date} </span> </td>
                                        <td> <span> {elem.waste} </span> </td>
                                        <td> <span> {elem.totalWaste} </span> </td>

                                    </tr>
                                    </>
                                )
                            })}
                        </tbody>
                        
                    </table>
                </div>
                
              </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClearStock;
