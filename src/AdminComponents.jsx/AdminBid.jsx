import React, { useState } from "react";
import Updatecharge from "./Updatecharge";
import { useQuery } from "@tanstack/react-query";
import {
  adminBidTransportStatusChange,
  adminBidsFetch,
} from "../apis/franchise/bid";
import Bidders from "../FrenchiesComp/Bidders";
import AdminBidPaymentPopup from "./AdminBidPaymentPopup";
import { toast } from "react-toastify";
import { walletFetch } from "../apis/wallet/wallet";

const AdminBid = () => {
  const [charge, setCharge] = useState(false);
  const [bidders, setBidders] = useState(false);
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [paymentPopup, setPaymentPopup] = useState(false);
  const { data: bids, refetch } = useQuery({
    queryKey: ["adminBidsFetch"],
    queryFn: () => adminBidsFetch(),
  });
  const { data: commission, refetch: refetchCommission } = useQuery({
    queryKey: ["bidsCommissionFetch"],
    queryFn: () => bidsCommissionFetch(),
  });
  const { data: wallet, refetch: refetchwallet } = useQuery({
    queryKey: ["adminWalletFetch"],
    queryFn: () => walletFetch(),
  });
  const handleTransportStatusChange = async (data) => {
    const res = await adminBidTransportStatusChange(data);
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    refetch();
    toast.success(res);
  };
  return (
    <>
      <section className="admin-bids-comp">
        <div className="common-container">
          <div className="bids-card-grid">
            <div class="card-box card-box3">
              <div class="left-card-info">
                <h6>49</h6>
                <p>Total Active Bids</p>
              </div>
              <div class="right-card-icon">
                <i class="fa-solid fa-hammer"></i>
              </div>
            </div>
            <div class="card-box card-box8">
              <div class="left-card-info">
                <h6>250</h6>
                <p>Total Active Offers</p>
              </div>
              <div class="right-card-icon">
                <i class="fa-solid fa-scale-balanced"></i>
              </div>
            </div>
            <div class="card-box card-box5">
              <div class="left-card-info">
                <h6>80</h6>
                <p>Offers Closed</p>
              </div>
              <div class="right-card-icon">
                <i class="fa-solid fa-shop-lock"></i>
              </div>
            </div>
            <div class="card-box card-box7">
              <div class="left-card-info">
                <h6>39</h6>
                <p>On Going</p>
              </div>
              <div class="right-card-icon">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
              </div>
            </div>

            <div class="card-box card-box7">
              <div className="left-card-info">
                <h6>{wallet?.balance || "0.00"}</h6>
                <p>Wallet Balance</p>
              </div>

              <div className="right-card-icon">
                <i class="fa-solid fa-right-to-bracket"></i>
              </div>
            </div>
          </div>

          <div className="admin-bid-filter-flex-bx mt-5">
            <div className="admn-bid-left-bx ">
              <div className="all-prod-sel-filt-box all-bid-status-box">
                <select name="status" id="status">
                  <option value="status">Choose Status</option>
                  <option value="status">On Going</option>
                  <option value="status">Deal By Seller</option>
                  <option value="status">Payment Received</option>
                  <option value="status">Dispatched</option>
                  <option value="status">Delivered</option>
                  <option value="status">Completed</option>
                </select>
              </div>

              <div className="bid-filt-btns-flex">
                <button className="bid-filt-btn bidactive">All</button>
                <button className="bid-filt-btn">Active</button>
                <button className="bid-filt-btn">Ongoing</button>
                <button className="bid-filt-btn">Closed</button>
              </div>
            </div>

            <div className="admn-bid-right-bx ">
              <div className="right-all-prod-search-box bid-serch-bx">
                <input
                  type="text"
                  name="search"
                  id="search"
                  autoComplete="off"
                  placeholder="Search..."
                />
              </div>

              <button
                onClick={() => setCharge(true)}
                className="search-prod-btn search-prod-btn2"
              >
                Update Charges
              </button>
            </div>
          </div>

          <div className="admin-bid-table mt-5">
            <div className="all-user-table stock-tble mnge-waste-table bid-table">
              <table>
                <thead>
                  <tr>
                    <th>SNo.</th>
                    <th>product Name</th>
                    <th>Seller Name</th>
                    <th>Total Bid</th>
                    <th>Accepted Bid</th>
                    <th>Total Value</th>
                    <th>Platform Comision</th>
                    <th>Post Status</th>
                    <th>Transport Status</th>
                    <th>Payment Status</th>
                    <th>Actions</th>
                    <th>Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {!bids?.error
                    ? bids?.map(
                        (
                          {
                            Bids,
                            Franchise,
                            id,
                            pricePerUnit,
                            productName,
                            productQuantity,
                            unit,
                            ...rest
                          },
                          i
                        ) => {
                          const acceptedBid = Bids?.find(
                            ({ bidStatus }) => bidStatus == "accept"
                          );
                          const subTotal = acceptedBid
                            ? +acceptedBid?.productQuantity *
                              +acceptedBid?.pricePerUnit
                            : 0;
                          const gst = rest?.includeGst
                            ? (+(rest?.gst || 0) * +(subTotal || 0)) / 100
                            : 0;
                          const total = subTotal + gst;
                          return (
                            <tr key={id}>
                              <td>
                                <span> {i + 1} </span>
                              </td>
                              <td>
                                <span> {productName} </span>
                              </td>
                              <td>
                                <span> {Franchise?.companyName} </span>
                              </td>
                              <td>
                                {" "}
                                <span>
                                  {productQuantity + unit} <br /> ₹
                                  {pricePerUnit}/{unit}
                                </span>
                              </td>
                              <td>
                                {acceptedBid ? (
                                  <span>
                                    {acceptedBid?.productQuantity + unit} <br />{" "}
                                    ₹{acceptedBid?.pricePerUnit}/{unit}
                                  </span>
                                ) : null}
                              </td>
                              <td>
                                <span> {total} </span>
                              </td>
                              <td>
                                <span>{acceptedBid?.commission} </span>
                              </td>
                              <td>
                                <span> {rest?.postStatus} </span>
                              </td>
                              <td>
                                {acceptedBid ? (
                                  // <span>
                                  //   {" "}
                                  //   {acceptedBid?.transportStatus
                                  //     ? acceptedBid?.transportStatus
                                  //     : "Pending..."}{" "}
                                  // </span>
                                  <div className="all-prod-sel-filt-box">
                                    <select
                                      onChange={(e) =>
                                        handleTransportStatusChange({
                                          id: acceptedBid?.id,
                                          status: e.target.value,
                                        })
                                      }
                                      defaultValue={
                                        acceptedBid?.transportStatus
                                      }
                                      name="product"
                                      id="product"
                                    >
                                      <option value="">Processing...</option>
                                      <option value="dispatch">
                                        Dispatched
                                      </option>
                                      <option value="deliver">Delivered</option>
                                    </select>
                                  </div>
                                ) : (
                                  <span>Not accepted any bid</span>
                                )}
                              </td>
                              <td>
                                {acceptedBid ? (
                                  <>
                                    <span>
                                      {" "}
                                      {acceptedBid?.paymentStatus
                                        ? acceptedBid?.paymentStatus
                                        : "Pending..."}{" "}
                                    </span>
                                  </>
                                ) : (
                                  "...."
                                )}
                              </td>
                              <td>
                                <button
                                  style={{
                                    background: "green",
                                    marginRight: "6px",
                                  }}
                                  onClick={() => {
                                    setSelectedOffers(Bids);
                                    setSelectedData({
                                      Bids,
                                      Franchise,
                                      id,
                                      pricePerUnit,
                                      productName,
                                      productQuantity,
                                      unit,
                                      ...rest,
                                    });
                                    setBidders(true);
                                  }}
                                  className="trnfr-btn"
                                >
                                  Offers
                                </button>
                                {acceptedBid?.paymentStatus == "receive" ? (
                                  <button
                                    onClick={() => {
                                      setPaymentPopup(true);
                                      setSelectedData({
                                        Bids,
                                        Franchise,
                                        id,
                                        pricePerUnit,
                                        productName,
                                        productQuantity,
                                        unit,
                                        acceptedBid,
                                        ...rest,
                                      });
                                    }}
                                    className="trnfr-btn"
                                  >
                                    Transfer
                                  </button>
                                ) : null}
                              </td>

                              <td>
                                <span> </span>
                              </td>
                            </tr>
                          );
                        }
                      )
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {charge && <Updatecharge onClickClose={() => setCharge(false)} />}
      {bidders ? (
        <Bidders
          component="admin"
          offers={selectedOffers}
          selectedData={selectedData}
          onClickClose={() => setBidders(false)}
        />
      ) : null}
      {paymentPopup ? (
        <AdminBidPaymentPopup
          data={selectedData}
          refetch={refetch}
          onClickClose={() => setPaymentPopup(false)}
        />
      ) : null}
    </>
  );
};

export default AdminBid;
