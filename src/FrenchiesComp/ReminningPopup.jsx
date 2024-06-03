import { useState } from "react";
import { franchiseReCreateBidPost } from "../apis/franchise/bid";
import { toast } from "react-toastify";

const ReminingPopup = ({ data, refetch, handleCloseClick }) => {
  const [values, setValues] = useState(data);
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const handeConfirmClick = async () => {
    if (!values?.pricePerUnit || !values?.productQuantity) {
      return;
    }
    const res = await franchiseReCreateBidPost({ ...values });
    if (res?.error) {
      toast.error(res?.message);
      return;
    }
    toast.success("Sucessfuly Listed");
    refetch();
    handleCloseClick();
  };
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
        <h6>Create listing for remaining items</h6>
        <p>
          {" "}
          <span>Note </span> You will have {data?.productQuantity} {data?.unit}{" "}
          remaining after this sale. If you want to proceed, click 'Confirm.'
          Otherwise, ignore this message or click 'Cancel.
        </p>
        <div>
          <label>Price/{data?.unit}</label>
          <div className="admin-login-input">
            <input
              type="number"
              name="pricePerUnit"
              placeholder="Enter Price/unit"
              autoComplete="off"
              value={values?.pricePerUnit}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label>Product Quantity</label>
          <div className="admin-login-input">
            <input
              type="number"
              name="productQuantity"
              placeholder="Enter Product Quantity"
              value={values?.productQuantity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <button onClick={handeConfirmClick} className="confirm-btn">
            Confirm
          </button>
          <button
            onClick={handleCloseClick}
            style={{ background: "red" }}
            className="confirm-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default ReminingPopup;
