// src/TransportStatus.js
import React from "react";
import "./transportStatus.css";
import { adminBidTransportStatusChange } from "../../apis/franchise/bid";
import { toast } from "react-toastify";

const TransportStatus = ({ currentStatus = "", disabled, data, refetch }) => {
  const statuses = [
    { id: 1, value: "", label: "Pending...", css: "pending" },
    { id: 2, value: "dispatch", label: "Dispatch", css: "Dispatch" },
    { id: 3, value: "deliver", label: "Deliver", css: "Deliver" },
  ];
  const handleChangeStatusClick = async (value) => {
    if (disabled) {
      return;
    }
    const res = await adminBidTransportStatusChange({
      id: data?.id,
      status: value,
    });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    refetch();
  };
  return (
    <div className="status-container">
      {statuses.map(({ id, value, label }, index) => (
        <div key={id} className="status-wrapper">
          <div
            onClick={() => handleChangeStatusClick(value)}
            className={`status  ${statuses.findIndex(({ value }) => currentStatus == value) >=
            index ? "active" : ""} ${
              disabled ? "disabled" : ""
            }`}
          >
            {label}
          </div>
          {index < statuses.length - 1 && (
            <div
              className={`line ${
                statuses.findIndex(({ value }) => currentStatus == value) >
                index
                  ? "active"
                  : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TransportStatus;
