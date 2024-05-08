import React, { useEffect, useState } from "react";
import AdminWasteProd from "../Components/AdminWasteProductsList";
import FrenchiesWasteTable from "./FrenchiesWasteTable";
import { franchiseWasteCollectionFetch } from "../apis/worker/manageWaste";
import { useQuery } from "@tanstack/react-query";

const FrenchiesWastePcikup = () => {
  const [waste, setWaste] = useState([]);
  const { data: wasteData, refetch } = useQuery({
    queryKey: ["adminfetcwasteData"],
    queryFn: () => franchiseWasteCollectionFetch(),
  });

  const { data: wasteHistory, refetch: refetchWasteHistory } = useQuery({
    queryKey: ["adminfetcwasteHistory"],
    queryFn: () => franchiseWasteCollectionFetch("history"),
  });
  useEffect(() => {
    if (!wasteData || wasteData?.error) {
      return;
    }
    const waste = wasteData?.collection?.reduce((a, b) => {
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
    setWaste(waste);
  }, [wasteData]);
  const totalWaste = waste?.reduce((a, b) => {
    return a + +b?.weight;
  }, 0);
  return (
    <>
      <section className="admin-mange-waste-bx">
        <div className="right-tab-main-bx  tab-bx tabbxactive">
          <div className="tab-main-bx tab-main-bx3 tab-main-bx-title">
            <h3>Manage Waste </h3>

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
                {!wasteData?.error
                  ? wasteData?.products?.map(
                      ({ id, productImage, productName, unit }, i) => {
                        const w = waste?.find(
                          ({ id: wasteId, productId }) =>
                            wasteId?.toLowerCase() ==
                              productName?.toLowerCase() ||
                            id?.includes(productId)
                        );
                        return (
                          <>
                            <div key={i} className="waste-mnge-prod-bx">
                              <div className="waste-mnge-prod-text">
                                <h6>
                                  {" "}
                                  {productName?.replace(
                                    /\b\w/g,
                                    function (char) {
                                      return char?.toUpperCase();
                                    }
                                  )}{" "}
                                </h6>
                                <p>
                                  {" "}
                                  {w?.weight || "00.00"}
                                  {unit}{" "}
                                </p>
                              </div>
                              <div className="waste-prod-icon">
                                <img src={productImage} alt="" />
                              </div>
                            </div>
                          </>
                        );
                      }
                    )
                  : null}
              </div>
            </div>
          </div>

          <FrenchiesWasteTable wasteHistory={wasteHistory} />
        </div>
      </section>
    </>
  );
};

export default FrenchiesWastePcikup;
