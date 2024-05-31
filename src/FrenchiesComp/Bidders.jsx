import { DateTime } from "luxon";
import { useState } from "react";

const Bidders = ({
  onClickClose,
  setIsDeal,
  setSelectedOffer,
  offers,
  setIsCloseView,
  selectedData,
  component = "franchise",
}) => {
  return (
    <div onClick={onClickClose} className="view-bid-main">
      <div onClick={(e) => e.stopPropagation()} className="view-bid-bx">
        <h6>Bidders</h6>

        <div className="all-user-table stock-tble mnge-waste-table mt-3">
          <table>
            <thead>
              <tr>
                <th>SNO</th>
                <th>Profile</th>
                <th>Offer Price</th>
                <th>Offer Quantity</th>
                {component != "admin" ? <th>Action</th> : <th>Status</th>}
              </tr>
            </thead>
            <tbody>
              {!offers?.error ? (
                offers?.map(
                  (
                    {
                      id,
                      Franchise,
                      addedOn,
                      pricePerUnit,
                      productQuantity,
                      bidStatus,
                      ...rest
                    },
                    i
                  ) => {
                    return (
                      <tr key={id}>
                        <td>
                          <span>{i + 1}</span>
                        </td>
                        <td>
                          <div className="left-bidr-bx">
                            <div className="bidr-img">
                              <img
                                src={
                                  Franchise?.franchiseLogo ||
                                  "/images/noImg.png"
                                }
                                alt=""
                              />
                            </div>
                            <div className="bidr-info">
                              <h6>{Franchise?.companyName}</h6>
                              <span>
                                {DateTime.fromISO(addedOn, {
                                  zone: "utc",
                                })
                                  .setZone("Asia/Kolkata")
                                  .toFormat("ccc dd LLL yyyy")}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span>
                            ₹{pricePerUnit}/{selectedData?.unit}
                          </span>
                        </td>
                        <td>
                          <span>
                            {productQuantity} ({selectedData?.unit})
                          </span>
                        </td>
                        {component != "admin" ? (
                          <td>
                            {bidStatus == "accept" ? (
                              <div style={{ color: "green" }}>Accepted</div>
                            ) : bidStatus == "reject" ? (
                              <div style={{ color: "red" }}>Rejected</div>
                            ) : (
                              <div className="tick-delt-btn">
                                <button
                                  onClick={() => {
                                    setIsDeal(true);
                                    setSelectedOffer({
                                      id,
                                      Franchise,
                                      addedOn,
                                      pricePerUnit,
                                      productQuantity,
                                      ...rest,
                                    });
                                  }}
                                  title="Accept"
                                  // className="accept-btn"
                                  style={{
                                    background: "green",
                                    color: "white",
                                    borderRadius:"10px",
                                    paddingInline:"20px"
                                  }}
                                >
                                  {/* <i class="fa-regular fa-square-check"></i> */}
                                  Action
                                </button>
                                {/* <button
                                  onClick={() => {
                                    setIsCloseView(true);
                                    setSelectedOffer({
                                      id,
                                      Franchise,
                                      addedOn,
                                      pricePerUnit,
                                      productQuantity,
                                      ...rest,
                                    });
                                  }}
                                  title="Not Accepted"
                                  className="accept-btn accept-btn2"
                                >
                                  <i class="fa-regular fa-circle-xmark"></i>
                                </button> */}
                              </div>
                            )}
                          </td>
                        ) : (
                          <td>{bidStatus}</td>
                        )}
                      </tr>
                    );
                  }
                )
              ) : (
                <div>No Bid Offers</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Bidders;
