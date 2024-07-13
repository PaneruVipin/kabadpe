import React, { useState } from "react";
import { franchiseBidDeliveryDetailsUpdate } from "../../apis/franchise/bid";
import { toast } from "react-toastify";

const AddDeliveryDetail = ({ onClose, data = {}, refetch }) => {
  const [details, setDetails] = useState(data?.deliveryDetails || "");
  const handleSave = async () => {
    if (!details) {
      return;
    }
    const res = await franchiseBidDeliveryDetailsUpdate({
      id: data?.id,
      deliveryDetails: details,
    });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    refetch();
    onClose();
  };
  return (
    <>
      <section className="withdral-comp" onClick={onClose}>
        <div
          className="withdrawl-field-bx"
          onClick={(e) => e.stopPropagation()}
        >
          <h6>Delivery Details</h6>
          <div style={styles.content}>
            <label htmlFor="title">Delivery Details</label>
            <input
              type="text"
              id="title"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleSave} style={styles.saveButton}>
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    width: "800px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  closeButton: {
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bold",
  },
  content: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  saveButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default AddDeliveryDetail;
