import React, { useContext, useState } from "react";
import { OrderContext } from "../Context";
import { NavLink } from "react-router-dom";
import MyOrderDet from "./MyOrderDet";
import { userOrdersfetch } from "../apis/orders/order";
import { useQuery } from "@tanstack/react-query";

const MyOrder = () => {
  const MyOrderData = useContext(OrderContext);
  const [component, setComponent] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const openComp = (id) => {
    setComponent(id);
  };
  const { data: orders, refetch } = useQuery({
    queryKey: ["greenOrdershistory"],
    queryFn: () => userOrdersfetch({}),
  });
  return (
    <>
      {!selectedRow ? (
        <section className="my-offer-comp my-order-comp use-prf-left-main-bx">
          <div className="my-order-data-list-bx">
            {!orders?.eroor
              ? orders
                  ?.sort(
                    (a, b) => new Date(b?.updatedOn) - new Date(a?.updatedOn)
                  )
                  ?.map(
                    ({
                      OrderItems,
                      id,
                      orderAmount,
                      orderStatus,
                      paymentMethod,
                      paymentStatus,
                      ...rest
                    }) => {
                      const product = OrderItems?.[0]?.Product;
                      const images = product?.ProdImages;
                      const variation = product?.ProdVariations;
                      const curData = {};
                      return (
                        <div
                          onClick={() =>
                            setSelectedRow({
                              OrderItems,
                              id,
                              orderAmount,
                              orderStatus,
                              paymentMethod,
                              paymentStatus,
                              ...rest,
                            })
                          }
                          className="order-data-bx"
                          key={id}
                        >
                          <div className="left-order-name-img-bx">
                            <div className="order-img-bx">
                              <img
                                src={images?.[0]?.image}
                                onError={(e) => {
                                  e.target.src = "/images/noImg.png";
                                }}
                                alt=""
                              />
                            </div>
                            <h6> {product?.name} </h6>
                          </div>

                          <div className="center-prod-order-price">
                            <h5> ₹{orderAmount} </h5>
                          </div>

                          <div className="right-delivery-type-bx">
                            <h6>
                              {paymentStatus == "failed"
                                ? "Payment Failed "
                                : orderStatus +
                                  " (Payment " +
                                  paymentStatus +
                                  "- " +
                                  (paymentMethod == "cash"
                                    ? "COD"
                                    : paymentMethod) +
                                  ")"}
                              <div
                                className="dottype"
                                style={{
                                  backgroundColor:
                                    paymentStatus == "failed"
                                      ? "red"
                                      : orderStatus === "delivered"
                                      ? "#0dd60d"
                                      : orderStatus === "processing"
                                      ? "#e0e000"
                                      : orderStatus === "returned"
                                      ? "orange"
                                      : orderStatus === "shipped"
                                      ? "#0dd60d"
                                      : "#e0e000",
                                }}
                              ></div>{" "}
                            </h6>
                            <span> {curData.text} </span>
                          </div>
                        </div>
                      );
                    }
                  )
              : null}
            {/* {MyOrderData.map((curData, id) => (
              <div
                onClick={() => openComp(curData.id)}
                className="order-data-bx"
                key={curData.id}
              >
                <div className="left-order-name-img-bx">
                  <div className="order-img-bx">
                    <img src={curData.img} alt="" />
                  </div>
                  <h6> {curData.name} </h6>
                </div>

                <div className="center-prod-order-price">
                  <h5> ₹{curData.price} </h5>
                </div>

                <div className="right-delivery-type-bx">
                  <h6>
                    {" "}
                    {curData.status}
                    <div
                      className="dottype"
                      style={{
                        backgroundColor:
                          curData.type === "delivered"
                            ? "#0dd60d"
                            : curData.type === "underprocess"
                            ? "#e0e000"
                            : curData.type === "canceled"
                            ? "red"
                            : curData.type === "refund"
                            ? "orange"
                            : curData.type === "dispatch"
                            ? "#0dd60d"
                            : "red",
                      }}
                    ></div>{" "}
                  </h6>
                  <span> {curData.text} </span>
                </div>
              </div>
            ))} */}
          </div>
        </section>
      ) : (
        <MyOrderDet orderData={{}} data={selectedRow} />
      )}
    </>
  );
};

export default MyOrder;
