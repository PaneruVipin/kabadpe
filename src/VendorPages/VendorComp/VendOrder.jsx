import React from "react";
import RecentOrd from "./RecentOrd";
import { useQuery } from "@tanstack/react-query";
import { vendorOrderFetch } from "../../apis/orders/order";

const VendOrder = ({ onOrdRed }) => {
  const { data: orders,refetch } = useQuery({
    queryKey: ["ordersVendor"],
    queryFn: () => vendorOrderFetch({}),
  });
  return (
    <>
      <section className="vend-orders-comp">
        <div className="ord-filt-main">
          <div className="order-filter-grid">
            <div className="ord-filt-bx">
              <input
                type="text"
                name="searchname"
                id="searchname"
                placeholder="Search by Customer Name"
              />
            </div>

            <div className="ord-filt-bx">
              <select name="ordfilter" id="ordfilter">
                <option value="ordfilter">Status</option>
                <option value="ordfilter">Delivered</option>
                <option value="ordfilter">Pending</option>
                <option value="ordfilter">Processing</option>
                <option value="ordfilter">Cancel</option>
              </select>
            </div>

            <div className="ord-filt-bx">
              <select name="ordfilter" id="ordfilter">
                <option value="ordfilter">Order Limits</option>
                <option value="ordfilter">Last 5 days orders</option>
                <option value="ordfilter">Last 7 days orders</option>
                <option value="ordfilter">Last 15 days orders</option>
                <option value="ordfilter">Last 30 days orders</option>
              </select>
            </div>

            <div className="ord-filt-bx">
              <select name="ordfilter" id="ordfilter">
                <option value="ordfilter">Method</option>
                <option value="ordfilter">Cash</option>
                <option value="ordfilter">Card</option>
                <option value="ordfilter">Credit</option>
              </select>
            </div>

            <button className="filt-ord-btn">
              Download All Orders{" "}
              <ion-icon name="cloud-download-outline"></ion-icon>
            </button>
          </div>

          <div className="order-filter-grid date-filt-grid">
            <div className="ord-filt-bx">
              <span>Start Date</span>
              <input type="date" name="startdate" id="startdate" />
            </div>

            <div className="ord-filt-bx">
              <span>End Date</span>
              <input type="date" name="enddate" id="enddate" />
            </div>

            <div className="ord-filt-btn-flex">
              <button className="filt-ord-btn">Filter</button>

              <button className="filt-ord-btn filt-ord-btn3">Reset</button>
            </div>
          </div>
        </div>
      </section>

      <RecentOrd data={!orders?.error ? orders : []} onOrdComp={onOrdRed} />
    </>
  );
};

export default VendOrder;
