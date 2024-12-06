import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { userOrderDetailfetch } from "../apis/orders/order";
import { DateTime } from "luxon";
import { numberToWords } from "../lib/number";
import generatePDF from "react-to-pdf";

const Shiping = ({ orderId }, ref) => {
  const targetRef = useRef();
  const { id } = useParams();
  const { data: order, refetch } = useQuery({
    queryKey: ["orderdetail27293563637"],
    queryFn: () => userOrderDetailfetch({ id: orderId || id }),
  });
  console.log("ref & targetRef", ref, targetRef, order, orderId);

  const OrderItems = order?.OrderItems || [];
  const vendor = OrderItems?.[0]?.Product?.Vendor;
  const vendorAdddress = vendor?.VendorAddress;
  const vendorDetail = vendor?.VendorDetail;

  const total = OrderItems?.reduce(
    (a, b) => {
      const gstAmount = +b?.gst ? (b?.netPrice * +b?.gst) / 100 : 0;
      return {
        gst: a?.gst + +(gstAmount * +b?.quantity) || 0,
        total: a?.total + +(b?.totalPrice || 0),
        netPrice: a?.netPrice + +(b?.netPrice || b.unitPrice * b.quantity || 0),
        unitPrice: a?.unitPrice + +(b?.unitPrice || 0),
      };
    },
    { netPrice: 0, unitPrice: 0, gst: 0, total: +order?.donation || 0 }
  );
  return (
    <>
      {!order?.error && order ? (
        <section className="invoice-comp">
          {orderId ? null : (
            <button
              onClick={() =>
                generatePDF(targetRef, {
                  filename: `TGSS-shipping-${order?.id}`,
                })
              }
              style={{
                padding: "12px 24px",
                backgroundColor: "#007bff",
                color: "white",
                fontSize: "16px",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.2s ease",
                outline: "none",
                position: "fixed",
                top: "20px",
                right: "20px",
                width: "200px",
                height: "50px",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0056b3";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#007bff";
                e.target.style.transform = "scale(1)";
              }}
            >
              📄 Download Invoice
            </button>
          )}
          <div ref={ref?.ref || targetRef} className="invoice-container">
            <div className="invoice-top-logo-flex-bx">
              <div className="clim-logo">
                <img src="/images/climeLogo.png" alt="" />
              </div>

              <div className="invoice-top-text-flex">
                {/* <h6>Tax Invoice/Bill of Supply/Cash Memo</h6>
                <p>(Original for Recipient)</p> */}
              </div>
            </div>

            <div className="invoice-two-grid-bx">
              <div className="invoice-info-bx">
                <h6>From :</h6>
                <p>
                  {vendor?.companyName}
                  {/* <br />
                  {`${vendorAdddress?.addressLine1}, ${
                    vendorAdddress?.addressLine2
                      ? vendorAdddress?.addressLine2 + ","
                      : ""
                  } ${vendorAdddress?.city}, ${vendorAdddress?.state}`}
                  <br /> {`${vendorAdddress?.pincode} IN`} */}
                </p>
              </div>

              <div className="invoice-info-bx invoice-info-bx2">
                {/* <h6>Billing Address :</h6>
                <p>{vendor?.fullname} </p>
                <p>{order?.billingAddress || order?.shippingAddress}</p>

                <p>IN</p> */}
                {/* <h6>
                State/UT Code: <span>08</span>{" "}
              </h6> */}
              </div>
            </div>

            <div className="invoice-two-grid-bx">
              <div className="invoice-relt">
                <div className="invoice-info-bx">
                  {/* <h6>
                    PAN No: <span> {vendorDetail?.panNumber}</span>
                  </h6>
                  <h6>
                    GST Registration No:{" "}
                    <span> {vendorDetail?.gstNumber} </span>
                  </h6> */}
                </div>

                <div className="invoice-info-bx invoice-info-bx3">
                  <h6>
                    Order Number: <span> {order?.id}</span>
                  </h6>
                  <h6>
                    Order Date:{" "}
                    <span>
                      {" "}
                      {DateTime.fromISO(order?.orderDate, {
                        zone: "utc",
                      })
                        .setZone("Asia/Kolkata")
                        .toFormat("dd.LL.yyyy")}{" "}
                    </span>
                  </h6>
                </div>
              </div>

              <div className="invoice-info-bx invoice-info-bx2">
                <h6>Shipping Address :</h6>
                <p>{vendor?.fullname} </p>
                <p>{order?.shippingAddress}</p>

                <p>IN</p>
                {/* <h6>
                State/UT Code: <span>08</span>{" "}
              </h6> */}
                {/* <h6>
                  Place of supply: <span>{vendorAdddress?.state}</span>{" "}
                </h6>
                <h6>
                  Place of delivery: <span>{order?.state}</span>{" "}
                </h6>
                <h6>
                  Invoice Number: <span>{order?.id}</span>{" "}
                </h6> */}
                {/* <h6>
                Invoice Details: <span> RJ-JPX2-137392831-2425</span>{" "}
              </h6> */}
                {/* <h6>
                  Invoice Date:{" "}
                  <span>
                    {DateTime.fromISO(new Date().toISOString(), {
                      zone: "utc",
                    })
                      .setZone("Asia/Kolkata")
                      .toFormat("dd.LL.yyyy")}
                  </span>{" "}
                </h6> */}
              </div>
            </div>

            <div className="payment-trans-grid-bx2">
              <div className="payment-trnas-bx">
                <h6>Amount: </h6>
                <p> ₹{order?.orderAmount}</p>
              </div>

              <div className="payment-trnas-bx">
                <h6>Mode of Payment: </h6>
                <p>{`${
                  order?.paymentMethod == "cash" ? "COD" : "Pre-Paid"
                }`}</p>
              </div>
            </div>
            <p className="bottom-line">
              *ASSPL-Amazon Seller Services Pvt. Ltd., ARIPL-Amazon Retail India
              Pvt. Ltd. (only where Amazon Retail India Pvt. Ltd. fulfillment
              center is co-located) Customers desirous of availing input GST
              credit are requested to create a Business account and purchase on
              Amazon.in/business from Business eligible offers Please note that
              this invoice is not a demand for payment
              {/* <p className="pageno">Page 1 of 1</p> */}
            </p>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Shiping;
