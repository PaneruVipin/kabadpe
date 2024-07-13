// src/TransportStatus.js
import React from "react";
import "./transportStatus.css";
import { adminBidTransportStatusChange } from "../../apis/franchise/bid";
import { toast } from "react-toastify";

const TransportStatus = ({
  currentStatus = "",
  disabled,
  data,
  refetch,
  comp = "listing",
}) => {
  const statuses = [
    { id: 1, value: "", label: "Processing..." },
    { id: 2, value: "dispatch", label: "Dispatch" },
    { id: 3, value: "deliver", label: "Deliver" },
    { id: 4, value: "recieve", label: "Receive" },
  ];
  const handleChangeStatusClick = async (value, disabled) => {
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
      {statuses.map(({ id, value, label }, index) => {
        const dsbld = disabled || (id == 4 ? comp != "bid" : comp != "listing");
        return (
          <div key={id} className="status-wrapper">
            <div
              onClick={() => handleChangeStatusClick(value, dsbld)}
              className={`status  ${
                statuses.findIndex(({ value }) =>
                  currentStatus ? currentStatus == value : value == ""
                ) >= index
                  ? "active"
                  : ""
              } ${dsbld ? "disabled" : ""}`}
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
        );
      })}
    </div>
  );
};

export default TransportStatus;
