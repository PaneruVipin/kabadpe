import React, { useState } from "react";
import {
  greenProductsAttributeValueAdd,
  greenProductsAttributeValueUpdate,
} from "../apis/products/attribute";
import { toast } from "react-toastify";

const AdminProdAtributeUpdate = ({ data, onClickClose, attributeData }) => {
  const [switchActive, setSwitchActive] = useState(false);
  const [value, setValue] = useState(data?.value || "");
  const handleSubmitClick = async () => {
    if (!value) {
      return;
    }
    const res = data
      ? await greenProductsAttributeValueUpdate({ id: data?.id, value })
      : await greenProductsAttributeValueAdd({ id: attributeData?.id, value });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success(res);
    onClickClose();
  };
  return (
    <>
      <section className="waste-prod-edit-comp" onClick={onClickClose}>
        <div
          className="waste-prod-edit-main-bx admin-prod-atribute-main-bx admin-prod-atribute-main-bx2"
          onClick={(e) => e.stopPropagation()}
        >
          <h5>{data ? "Update Attribute Value" : "Add Attribute Value"} </h5>

          <div className="admin-login-fild admin-login-fild3">
            <label htmlFor="#">Display Name</label>
            <input
              type="text"
              name="atributename"
              id="atributename"
              autoComplete="off"
              placeholder="Color or Size or Dimension or Material or Fabric"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>

          {/* <div className="admin-login-fild admin-login-fild3 mt-4">
            <label htmlFor="#">Display Name</label>
            <div
              onClick={() => setSwitchActive(!switchActive)}
              className={
                switchActive
                  ? "swithc-toggle-btn switchactive"
                  : "swithc-toggle-btn"
              }
            >
              <div className="round-bx"></div>
              <span>Yes</span>
              <span>No</span>
            </div>
          </div> */}

          <button
            onClick={handleSubmitClick}
            type="submit"
            className="add-prod-btn  confirm-btn-aa confirm-btn"
          >
            Update Attribute
          </button>

          <div onClick={onClickClose} className="close-btn">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProdAtributeUpdate;
